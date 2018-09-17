define({
    selectedDataModel: null,
    operationMode: null,
    recordList: null,
    /**
     * @function textChange
     * @description - 
     **/
    onPostShow: function() {
        this.onMasterDataSelected(null);
    },
    /**
     * @function textChange
     * @description - Call back function for the search functionality on text change.
     **/
    textChange: function() {
        var searchKey = this.view.txtBoxSearch.text;
        if (searchKey !== undefined && searchKey !== null) {
            searchKey = searchKey.trim();
            if (searchKey.length > 2) {
                this.searchRecord(searchKey);
            } else if (searchKey.length === 0) {
                this.resetRecords();
            }
        }
    },
    /**
     * @function onNavigate
     * @description - This function sets the visibility off for the profile popup.
     **/
    onNavigate: function() {
        this.view.flxProfileMain.setVisibility(false);
        this.requireModule = require("settingsModule");
    },
    /**
     * @function textDone
     * @description - This function is called when the user enters the text to search.
     **/
    textDone: function() {
        var searchKey = this.view.txtBoxSearch.text;
        if (searchKey !== undefined && searchKey !== null) {
            searchKey = searchKey.trim();
            if (searchKey.length > 2) {
                this.searchRecord(searchKey);
            } else if (searchKey.length === 0) {
                this.resetRecords();
            }
        }
    },
    /**
     * @function toggleProfile
     * @description - Toggle visibility of the profile popup on click of profile dropdown.
     * @param {JSON} - eventobject for the widget.
     **/
    toggleProfile: function(eventobject) {
        if (eventobject === "userProfile") {
            this.view.flxOverlay.setVisibility(true);
            this.view.flxProfileMain.setVisibility(true);
        }
    },
    /**
     * @function resetRecords
     * @description - Populates the data of the selected item for the listbox dropdown.
     **/
    resetRecords: function() {
        var selectedItem = this.view.lstBoxMaster.selectedKey;
        switch (selectedItem) {
            case "0":
                //search indepartment
                this.setDepartments(this.recordList);
                break;
            case "1":
                //Search in designation.
                this.setDesignations(this.recordList);
                break;
            case "2":
                //Search in location
                this.setLocations(this.recordList);
        }
    },
    /**
     * @function searchRecord
     * @description - Searches the entered string with the search key.
     * @param {JSON}-searchkey obtained on textDone.
     **/
    searchRecord: function(searchKey) {
        var selectedItem = this.view.lstBoxMaster.selectedKey;
        var matchedRecord = searchKeyInCollection(searchKey, this.recordList);
        switch (selectedItem) {
            case "0":
                //search indepartment
                this.setDepartments(matchedRecord);
                break;
            case "1":
                //Search in designation.
                this.setDesignations(matchedRecord);
                break;
            case "2":
                //Search in location
                this.setLocations(matchedRecord);
        }
    },
    /**
     * @function addNewDepartment
     * @description - Adding the new department to the department list
     * @param {JSON} - eventobject for the widget.
     **/
    addNewDepartment: function(eventObject) {
        this.operationMode = "add";
        var id = eventObject.id;
        id = id.split("btnAddNewMaster")[1];
        this.enableCommonMaster(id);
    },
    /**
     * @function addNewDesignation
     * @description - Adding the new designation to the designation list
     * @param {JSON} - eventobject for the widget.
     **/
    addNewDesignation: function(eventObject) {
        this.operationMode = "add";
        id = eventObject.id;
        id = id.split("btnAddNewMaster")[1];
        this.enableCommonMaster(id);
    },
    /**
     * @function addNewLocation
     * @description - Adding the new location to the location list
     * @param {JSON} - eventobject for the widget.
     **/
    addNewLocation: function(eventObject) {
        this.operationMode = "add";
        id = eventObject.id;
        id = id.split("btnAddNewMaster")[1];
        this.showLocationForm();
    },
    /**
     * @function getLocationObject
     * @description - Create a location JSON object. from the provided values by the user.
     **/
    getLocationObject: function() {
        var locationObj = {};
        locationObj["Address1"] = (this.view.txtBoxAddress1.text).trim();
        locationObj["Address2"] = (this.view.txtBoxAddress2.text).trim();
        locationObj["City"] = (this.view.txtBoxEmpCity.text).trim();
        locationObj["Country"] = (this.view.textBoxCountry.text).trim();
        locationObj["State"] = (this.view.txtBoxEmpState.text).trim();
        locationObj["Zipcode"] = (this.view.txtBoxEmpZip.text).trim();
        return locationObj;
    },
    /**
     * @function createUpdateLocationSuccessCB
     * @description - This function is the success callback for create or Update location.
     * @param {JSON} - Result response from backend.
     **/
    createUpdateLocationSuccessCB: function(result) {
        dismissLoadingScreen();
        this.hideLocationEditor();
        if (this.operationMode === "add") {
            this.view.alertmsg.setTitle("User Message");
            this.view.alertmsg.setMessage("Location created successfully!");
            this.view.flxAlertContainer2.setVisibility(true);
            this.view.forceLayout();
        } else if (this.operationMode === "edit") {
            this.view.alertmsg.setTitle("User Message");
            this.view.alertmsg.setMessage("Location updated successfully!");
            this.view.flxAlertContainer2.setVisibility(true);
            this.view.forceLayout();
        }
        this.onMasterDataSelected(null);
    },
    /**
     * @function createUpdateLocationFailureCB
     * @description - This function is the failure callback for create or Update location.
     * @param {JSON} - Result response from backend.
     **/
    createUpdateLocationFailureCB: function(result) {
        dismissLoadingScreen();
        alert(JSON.stringify(result));
    },
    /**
     * @function createUpdateLocation
     * @description - Creating a new location or updating the existing location.
     **/
    createUpdateLocation: function() {
        try {
            if (!this.validateLocationForm()) {
                return;
            }
            var locationObj = this.getLocationObject();
            if (locationObj === undefined || locationObj === null) {
                return;
            }
            var objectInstance = getObjectInstance();
            if (objectInstance !== null) {
                var dataObject;
                dataObject = new kony.sdk.dto.DataObject("Location");
                dataObject.setRecord(locationObj);
                var options = {
                    "dataObject": dataObject,
                    "headers": {}
                };
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
                    showLoadingScreen(this.view);
                    if (this.operationMode === "add") {
                        objectInstance.create(options, this.createUpdateLocationSuccessCB.bind(this), this.createUpdateLocationFailureCB.bind(this));
                    } else if (this.operationMode === "edit") {
                        locationObj["Location_id"] = this.view.lblLocationId.text;
                        if (locationObj["Location_id"] !== undefined || locationObj["Location_id"] === null || (locationObj["Location_id"]).trim() !== "") {
                            objectInstance.update(options, this.createUpdateLocationSuccessCB.bind(this), this.createUpdateLocationFailureCB.bind(this));
                        } else {
                            dismissLoadingScreen();
                            this.view.alertmsg.setTitle("User Message");
                            this.view.alertmsg.setMessage("location id not found");
                            this.view.flxAlertContainer2.setVisibility(true);
                            this.view.forceLayout();
                        }
                    }
                } else {
                    dismissLoadingScreen();
                    this.view.alertmsg.setTitle("User Message");
                    this.view.alertmsg.setMessage("No Network connected");
                    this.view.flxAlertContainer2.setVisibility(true);
                    this.view.forceLayout();
                }
            }
        } catch (excp) {
            dismissLoadingScreen();
            kony.print("Exception occured in getDesignation: " + JSON.stringify(excp));
        }
    },
    /**
     * @function validateLocationForm
     * @description - Validate the location values provided in the form.
     **/
    validateLocationForm: function() {
        var isValid = true;
        if (validateText(this.view.txtBoxAddress1.text) === "") {
            isValid = false;
        }
        if (validateText(this.view.txtBoxAddress2.text) === "") {
            isValid = false;
        }
        if (validateText(this.view.txtBoxEmpCity.text) === "") {
            isValid = false;
        }
        if (validateText(this.view.txtBoxEmpZip.text) === "") {
            isValid = false;
        }
        if (validateText(this.view.txtBoxEmpState.text) === "") {
            isValid = false;
        }
        if (validateText(this.view.textBoxCountry.text) === "") {
            isValid = false;
        }
        return isValid;
    },
    /**
     * @function createCommonMasterSuccess
     * @description - This function is the success callback of _createCommonMaster
     * @param {JSON - error} - error response from the back end
     **/
    createCommonMasterSuccess: function(result) {
        dismissLoadingScreen();
        kony.print("Master created successfully: " + JSON.stringify(result));
        this.view.txtBoxName0.text = "";
        this.view.flxAddCommonMasterItem0.setVisibility(false);
        this.onMasterDataSelected(null);
    },
    /**
     * @function createCommonMasterFailure
     * @description - This function is the failure callback of _createCommonMaster
     * @param {JSON - error} - error response from the back end
     **/
    createCommonMasterFailure: function(result) {
        dismissLoadingScreen();
        alert(JSON.stringify(result));
    },
    /**
     * @function enableCommonMaster
     * @description - This function is the failure callback of login
     * this function will call enable error label in UI
     * @param {JSON} - Text box id.
     **/
    enableCommonMaster: function(id) {
        this.view["txtBoxName" + id].text = "";
        this.view.flxAddCommonMasterItem0.setVisibility(true);
    },
    /**
     * @function _createCommonMaster
     * @description - It creates new designation or department object in the backend. 
     * @param {JSON} - id of the text box in the list row.
     **/
    _createCommonMaster: function(id) {
        try {
            var objectInstance = getObjectInstance();
            if (objectInstance !== null) {
                var masterName = this.view["txtBoxName" + id].text;
                masterName = validateText(masterName);
                if (masterName === "") {
                    this.view.alertmsg.setTitle("User Message");
                    this.view.alertmsg.setMessage("Please provide valid name");
                    this.view.flxAlertContainer2.setVisibility(true);
                    this.view.forceLayout();
                    return;
                }
                var dataObject;
                if (this.selectedDataModel !== null) {
                    dataObject = new kony.sdk.dto.DataObject(this.selectedDataModel);
                } else {
                    this.view.alertmsg.setTitle("User Message");
                    this.view.alertmsg.setMessage("Data model is not selected");
                    this.view.flxAlertContainer2.setVisibility(true);
                    this.view.forceLayout();
                    return;
                }
                dataObject.setRecord({
                    "Name": masterName
                })
                var options = {
                    "dataObject": dataObject,
                    "headers": {}
                    //"queryParams": {"$filter":"((SoftDeleteFlag ne true) or (SoftDeleteFlag eq null))"}
                };
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
                    showLoadingScreen(this.view);
                    objectInstance.create(options, this.createCommonMasterSuccess.bind(this), this.createCommonMasterFailure.bind(this));
                } else {
                    dismissLoadingScreen();
                    this.view.alertmsg.setTitle("User Message");
                    this.view.alertmsg.setMessage("No Network connected");
                    this.view.flxAlertContainer2.setVisibility(true);
                    this.view.forceLayout();
                }
            }
        } catch (excp) {
            dismissLoadingScreen();
            kony.print("Exception occured in getDesignation: " + JSON.stringify(excp));
        }
    },
    /**
     * @function onMasterDataSelected
     * @description - Selection callback for the option selected from the listbox dropdown.
     * @param {JSON} - Key of the selected item.
     **/
    onMasterDataSelected(param) {
        this.operationMode = "view";
        kony.print("in on masterdata selected");
        var selectedItem = this.view.lstBoxMaster.selectedKey;
        switch (selectedItem) {
            case "0":
                this.view.lblMasterTitle.text = "DEPARTMENT";
                this.view.btnAddNewMaster0.text = "Add New Department";
                this.view.btnAddNewMaster0.onClick = this.addNewDepartment;
                this.getDepartment();
                this.view.flxCommonHeader.setVisibility(true);
                this.view.flxLocationHeader.setVisibility(false);
                this.selectedDataModel = "Department";
                break;
            case "1":
                this.view.lblMasterTitle.text = "DESIGNATION";
                this.view.btnAddNewMaster0.text = "Add New Designation";
                this.view.btnAddNewMaster0.onClick = this.addNewDesignation;
                this.getDesignation();
                this.view.flxCommonHeader.setVisibility(true);
                this.view.flxLocationHeader.setVisibility(false);
                this.selectedDataModel = "Designation";
                break;
            case "2":
                this.view.btnAddNewMaster0.text = "Add New Location";
                this.view.btnAddNewMaster0.onClick = this.addNewLocation;
                this.getLocation();
                this.view.flxLocationHeader.setVisibility(true);
                this.view.flxCommonHeader.setVisibility(false);
                this.selectedDataModel = "Location";
        }
    },
    /**
     * @function setDesignations
     * @description - Set the row item Designation to the flexscroll container..
     * @param {JSON} - 
     **/
    setDesignations: function(designations) {
        var masterTemplate;
        var lblName, txtBoxName, flxRemove, flxEdit, lblId, flxSave, separatorLine;
        this.view.flxSCCommon.removeAll();
        var length = designations.length;
        if (length > 9) {
            this.view.flxSCCommon.width = "102%";
        } else {
            this.view.flxSCCommon.width = "101%";
        }
        for (var i = 0; i < designations.length; i++) {
            masterTemplate = this.requireModule.getCommonMasterRowTemplate(i);
            if (masterTemplate === null) continue;
            lblName = masterTemplate["lblName" + i];
            txtBoxName = masterTemplate["txtBoxName" + i];
            flxRemove = masterTemplate["flxRemove" + i];
            flxEdit = masterTemplate["flxEdit" + i];
            lblId = masterTemplate["lblId" + i];
            flxSave = masterTemplate["flxSave" + i];
            lblName.text = designations[i]["Name"];
            txtBoxName.text = designations[i]["Name"];
            lblId.text = designations[i]["Designation_id"];
            flxRemove.onClick = this.removeItem;
            flxEdit.onClick = this.editItem;
            flxSave.onClick = this.saveItem;
            // separatorLine=getHorizontalLine(i);
            separatorLine = this.requireModule.getHorizontalLine(i);
            this.view.flxSCCommon.add(masterTemplate, separatorLine);
            masterTemplate.hoverSkin = "sknFlxWhiteBG";
        }
        this.view.forceLayout();
    },
    /**
     * @function getDesignationSuccessCB
     * @description - This function is the success callback of getDesignation
     * @param {JSON} - response from the back end
     **/
    getDesignationSuccessCB: function(result) {
        kony.print("result: " + result);
        dismissLoadingScreen();
        var designations = result.records;
        this.recordList = designations;
        this.setDesignations(designations);
    },
    /**
     * @function getDesignationFailureCB
     * @description - This function is the failure callback of getDesignation
     * @param {JSON - error} - error response from the back end
     **/
    getDesignationFailureCB: function(result) {
        kony.print("result: " + result);
        dismissLoadingScreen();
    },
    /**
     * @function getDesignation
     * @description - Get all designation from the backend.
     **/
    getDesignation: function() {
        kony.print("in designation");
        try {
            var objectInstance = getObjectInstance();
            if (objectInstance !== null) {
                var dataObject = new kony.sdk.dto.DataObject("Designation");
                var options = {
                    "dataObject": dataObject,
                    "headers": {},
                    "queryParams": {
                        "$filter": "((SoftDeleteFlag ne true) or (SoftDeleteFlag eq null))"
                    }
                };
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
                    showLoadingScreen(this.view);
                    objectInstance.fetch(options, this.getDesignationSuccessCB.bind(this), this.getDesignationFailureCB.bind(this));
                } else {
                    dismissLoadingScreen();
                    this.view.alertmsg.setTitle("User Message");
                    this.view.alertmsg.setMessage("No Network connected");
                    this.view.flxAlertContainer2.setVisibility(true);
                    this.view.forceLayout();
                }
            }
        } catch (excp) {
            dismissLoadingScreen();
            kony.print("Exception occured in getDesignation: " + JSON.stringify(excp));
        }
    },
    /**
     * @function setDepartments
     * @description - Set all the department list to the flex.
     * @param {JSON} - list of departments from form employee list.
     **/
    setDepartments: function(departments) {
        var masterTemplate;
        var lblName, txtBoxName, flxRemove, flxEdit, lblId, flxSave, separatorLine;
        this.view.flxSCCommon.removeAll();
        var length = departments.length;
        if (length > 9) {
            this.view.flxSCCommon.width = "102%";
        } else {
            this.view.flxSCCommon.width = "101%";
        }
        for (var i = 0; i < departments.length; i++) {
            masterTemplate = this.requireModule.getCommonMasterRowTemplate(i);
            if (masterTemplate === null) continue;
            lblName = masterTemplate["lblName" + i];
            txtBoxName = masterTemplate["txtBoxName" + i];
            flxRemove = masterTemplate["flxRemove" + i];
            flxEdit = masterTemplate["flxEdit" + i];
            lblId = masterTemplate["lblId" + i];
            flxSave = masterTemplate["flxSave" + i];
            lblName.text = departments[i]["Name"];
            txtBoxName.text = departments[i]["Name"];
            lblId.text = departments[i]["Department_id"];
            flxRemove.onClick = this.removeItem;
            flxEdit.onClick = this.editItem;
            flxSave.onClick = this.saveItem;
            //separatorLine=getHorizontalLine(i);
            separatorLine = this.requireModule.getHorizontalLine(i);
            this.view.flxSCCommon.add(masterTemplate, separatorLine);
            this.view.forceLayout();
        }
        this.view.forceLayout();
    },
    /**
     * @function getDepartmentSuccessCB
     * @description - This function is the success callback of getDepartment
     * @param {JSON} -  response from the back end
     **/
    getDepartmentSuccessCB: function(result) {
        kony.print("result: " + result);
        dismissLoadingScreen();
        var departments = result.records;
        this.recordList = departments;
        this.setDepartments(departments);
    },
    /**
     * @function getDepartmentFailureCB
     * @description - This function is the failure callback of getDepartment
     * @param {JSON - error} - error response from the back end
     **/
    getDepartmentFailureCB: function(result) {
        kony.print("result: " + result);
        dismissLoadingScreen();
    },
    /**
     * @function getDepartment
     * @description - Gets all departments.
     **/
    getDepartment: function() {
        kony.print("in department");
        try {
            var objectInstance = getObjectInstance();
            if (objectInstance !== null) {
                var dataObject = new kony.sdk.dto.DataObject("Department");
                var options = {
                    "dataObject": dataObject,
                    "headers": {},
                    "queryParams": {
                        "$filter": "((SoftDeleteFlag ne true) or (SoftDeleteFlag eq null))"
                    }
                };
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
                    showLoadingScreen(this.view);
                    objectInstance.fetch(options, this.getDepartmentSuccessCB.bind(this), this.getDepartmentFailureCB.bind(this));
                } else {
                    dismissLoadingScreen();
                    this.view.alertmsg.setTitle("User Message");
                    this.view.alertmsg.setMessage("No Network connected");
                    this.view.flxAlertContainer2.setVisibility(true);
                    this.view.forceLayout();
                }
            }
        } catch (excp) {
            dismissLoadingScreen();
            kony.print("Exception occured in getDepartment: " + JSON.stringify(excp));
        }
    },
    /**
     * @function getLocationFailureCB
     * @description - This function is the failure callback of getLocation
     * @param {JSON - error} - error response from the back end
     **/
    getLocationFailureCB: function(result) {
        kony.print("result: " + result);
        dismissLoadingScreen();
    },
    /**
     * @function searchLocation
     * @description - Searches the given location by the user.
     * @param {JSON - error} - error response from the back end
     **/
    searchLocation: function(search_key) {
        var matchedRecord = searchKeyInCollection(search_key, this.recordList);
        this.setLocations(matchedRecord);
        return;
    },
    /**
     * @function setLocations
     * @description - Updates the given location.
     **/
    setLocations: function(locations) {
        var masterTemplate;
        var lblLocation, lblAddressOne, lblAddressTwo, lblCountry, lblCity, lblZip, flxEdit, flxRemove, lblId, separatorLine;
        this.view.flxSCCommon.removeAll();
        var length = locations.length;
        if (length > 9) {
            this.view.flxSCCommon.width = "102%";
        } else {
            this.view.flxSCCommon.width = "101%";
        }
        try {
            for (var i = 0; i < locations.length; i++) {
                masterTemplate = this.requireModule.getLocationMasterRowTemplate(i);
                lblLocation = masterTemplate["lblLocation" + i];
                lblAddressOne = masterTemplate["lblAddressOne" + i];
                lblAddressTwo = masterTemplate["lblAddressTwo" + i];
                lblCountry = masterTemplate["lblCountry" + i];
                lblCity = masterTemplate["lblCity" + i];
                lblZip = masterTemplate["lblZip" + i];
                flxEdit = masterTemplate["flxEdit" + i];
                flxRemove = masterTemplate["flxRemove" + i];
                lblId = masterTemplate["lblId" + i];
                lblLocation.text = locations[i]["State"];
                lblAddressOne.text = locations[i]["Address1"];
                lblAddressTwo.text = locations[i]["Address2"];
                lblCountry.text = locations[i]["Country"];
                lblCity.text = locations[i]["City"];
                lblZip.text = locations[i]["Zipcode"];
                lblId.text = locations[i]["Location_id"];
                flxEdit.onClick = this.editLocation;
                flxRemove.onClick = this.removeItem;
                separatorLine = this.requireModule.getHorizontalLine(i);
                this.view.flxSCCommon.add(masterTemplate, separatorLine);
                this.view.forceLayout();
            }
            this.view.forceLayout();
        } catch (excp) {
            alert("Exception occured while populating the location data");
            kony.print("Exception occured while populating the location data");
        }
    },
    /**
     * @function getLocationSuccessCB
     * @description - This function is the failure callback of getLocation
     * @param {JSON} -  response result from the back end
     **/
    getLocationSuccessCB: function(result) {
        kony.print("result: " + result);
        dismissLoadingScreen();
        var locations = result.records;
        this.recordList = locations;
        this.setLocations(locations);
    },
    /**
     * @function editLocation
     * @description - This function is to edit the locations added by the user.
     * @param {JSON}- eventobject of the widget.
     **/
    editLocation: function(eventObject) {
        this.operationMode = "edit";
        var id = eventObject.id;
        id = id.split("flxEdit")[1];
        var parent = eventObject.parent;
        var locationObj = {};
        locationObj["id"] = parent["lblId" + id].text;
        locationObj["address_one"] = parent["lblAddressOne" + id].text;
        locationObj["address_two"] = parent["lblAddressTwo" + id].text;
        locationObj["country"] = parent["lblCountry" + id].text;
        locationObj["city"] = parent["lblCity" + id].text;
        locationObj["zip"] = parent["lblZip" + id].text;
        locationObj["state"] = parent["lblLocation" + id].text;
        this.showlocationEditor(locationObj);
    },
    /**
     * @function showlocationEditor
     * @description - Enable the editing screen for location.
     * @param {JSON} - Location Object
     **/
    showlocationEditor: function(locationObj) {
        this.setLocationData(locationObj);
        this.view.flxGreyBG.setVisibility(true);
        this.view.flxEmpLocationInfoContainer.setVisibility(true);
        this.view.forceLayout();
    },
    /**
     * @function setCommonData
     * @description - This function sets the location details given byt hte user.
     **/
    setLocationData: function(locationObj) {
        this.view.lblLocationId.text = locationObj["id"];
        this.view.txtBoxAddress1.text = locationObj["address_one"];
        this.view.txtBoxAddress2.text = locationObj["address_two"];
        this.view.txtBoxEmpCity.text = locationObj["city"];
        this.view.txtBoxEmpZip.text = locationObj["zip"];
        this.view.txtBoxEmpState.text = locationObj["state"];
        this.view.textBoxCountry.text = locationObj["country"];
    },
    /**
     * @function hideLocationEditor
     * @description - This function enables the location editing functionality of the form.
     **/
    showLocationForm: function() {
        this.resetLocationData();
        this.view.flxGreyBG.setVisibility(true);
        this.view.flxEmpLocationInfoContainer.setVisibility(true);
    },
    /**
     * @function hideLocationEditor
     * @description - This function hides the location editing functionality of the form.
     **/
    hideLocationEditor: function() {
        this.view.flxGreyBG.setVisibility(false);
        this.view.flxEmpLocationInfoContainer.setVisibility(false);
        this.resetLocationData();
    },
    /**
     * @function resetLocationData
     * @description - This function resets the location details from the form.
     **/
    resetLocationData: function() {
        this.view.lblLocationId.text = "";
        this.view.txtBoxAddress1.text = "";
        this.view.txtBoxAddress2.text = "";
        this.view.txtBoxEmpCity.text = "";
        this.view.txtBoxEmpZip.text = "";
        this.view.txtBoxEmpState.text = "";
        this.view.textBoxCountry.text = "";
    },
    /**
     * @function getLocation
     * @description - This function get the location from the backend
     **/
    getLocation: function() {
        kony.print("in location");
        try {
            var objectInstance = getObjectInstance();
            if (objectInstance !== null) {
                var dataObject = new kony.sdk.dto.DataObject("Location");
                var options = {
                    "dataObject": dataObject,
                    "headers": {},
                    "queryParams": {
                        "$filter": "((SoftDeleteFlag ne true) or (SoftDeleteFlag eq null))"
                    }
                };
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
                    showLoadingScreen(this.view);
                    objectInstance.fetch(options, this.getLocationSuccessCB.bind(this), this.getLocationFailureCB.bind(this));
                } else {
                    dismissLoadingScreen();
                    this.view.alertmsg.setTitle("User Message");
                    this.view.alertmsg.setMessage("No Network connected");
                    this.view.flxAlertContainer2.setVisibility(true);
                    this.view.forceLayout();
                }
            }
        } catch (excp) {
            dismissLoadingScreen();
            kony.print("Exception occured in getLocation: " + JSON.stringify(excp));
        }
    },
    /**
     * @function navigateToFrmEmpList
     * @description - This function is to navigate the user to form employee list
     **/
    navigateToFrmEmpList: function() {
        try {
            var navObj = new kony.mvc.Navigation("frmEmpList");
            navObj.navigate();
        } catch (excp) {
            kony.print("Exception occured while navigating to the list form: " + JSON.stringify(excp));
        }
    },
    /**
     * @function editItem
     * @description - This function is the failure callback of login
     * this function will call enable error label in UI
     * @param {JSON - error} - error response from the back end
     **/
    editItem: function(eventObject) {
        var id = eventObject.id;
        id = id.split("flxEdit")[1];
        var parent = eventObject.parent;
        parent["lblName" + id].setVisibility(false);
        parent["txtBoxName" + id].setVisibility(true);
        parent["flxRemove" + id].setVisibility(false);
        parent["flxEdit" + id].setVisibility(false);
        parent["flxSave" + id].setVisibility(true);
        this.view.forceLayout();
    },
    /**
     * @function saveItem
     * @description - This function is the failure callback of login
     * this function will call enable error label in UI
     * @param {JSON - error} - error response from the back end
     **/
    saveItem: function(eventObject) {
        var id = eventObject.id;
        id = id.split("flxSave")[1];
        var parent = eventObject.parent;
        var dataObject = {};
        if (this.selectedDataModel === "Department") {
            dataObject["Department_id"] = parent["lblId" + id].text;
            dataObject["Name"] = parent["txtBoxName" + id].text;
        } else if (this.selectedDataModel === "Designation") {
            dataObject["Designation_id"] = parent["lblId" + id].text;
            dataObject["Name"] = parent["txtBoxName" + id].text;
        }
        this.updateMasterItem(this.selectedDataModel, dataObject, parent, this.updateCommonItemSuccess, this.updateCommonItemFailure);
    },
    /**
     * @function updateCommonItemSuccess
     * @description - This function is the success callback of saveItem
     * @param {JSON} - success response from the back end
     **/
    updateCommonItemSuccess: function(rootFlex, result) {
        var id = rootFlex.id;
        id = id.split("flxCommonItem")[1];
        rootFlex["lblName" + id].text = rootFlex["txtBoxName" + id].text;
        rootFlex["lblName" + id].setVisibility(true);
        rootFlex["txtBoxName" + id].setVisibility(false);
        dismissLoadingScreen();
    },
    /**
     * @function updateCommonItemFailure
     * @description - This function is the failure callback of saveItem
     * @param {JSON - error} - error response from the back end
     **/
    updateCommonItemFailure: function(result) {
        alert(JSON.stringify(result));
        dismissLoadingScreen();
    },
    /**
     * @function updateMasterItem
     * @description - This function is the failure callback of login
     * this function will call enable error label in UI
     * @param {JSON - error} - error response from the back end
     **/
    updateMasterItem: function(dataModel, data, rootFlex, successCB, failureCB) {
        if (dataModel && data && rootFlex && successCB && failureCB) {
            try {
                var objectInstance = getObjectInstance();
                if (objectInstance !== null) {
                    var dataObject = new kony.sdk.dto.DataObject(dataModel);
                    dataObject.setRecord(data);
                    var options = {
                        "dataObject": dataObject,
                        "headers": {},
                        "queryParams": {}
                    };
                    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
                        showLoadingScreen(this.view);
                        objectInstance.update(options, successCB.bind(this, rootFlex), failureCB.bind(this));
                    } else {
                        dismissLoadingScreen();
                        this.view.alertmsg.setTitle("User Message");
                        this.view.alertmsg.setMessage("No Network connected");
                        this.view.flxAlertContainer2.setVisibility(true);
                        this.view.forceLayout();
                    }
                }
            } catch (excp) {
                dismissLoadingScreen();
                kony.print("Exception occured in getDepartment: " + JSON.stringify(excp));
            }
        } else {
            this.view.alertmsg.setTitle("User Message");
            this.view.alertmsg.setMessage("Improper data received");
            this.view.flxAlertContainer2.setVisibility(true);
            this.view.forceLayout();
            return;
        }
    },
    /**
     * @function removeItem
     * @description - This function is the failure callback of login
     * this function will call enable error label in UI
     * @param {JSON - error} - error response from the back end
     **/
    removeItem: function(eventObject) {
        var title = "Do you want to remove this " + this.selectedDataModel + " ?";
        var self = this;
        var userConfirmed = function(isConfirmed) {
            if (isConfirmed) {
                var id = eventObject.id;
                id = id.split("flxRemove")[1];
                var parent = eventObject.parent;
                var dataObject = {};
                if (self.selectedDataModel === "Department") {
                    dataObject["Department_id"] = parent["lblId" + id].text;
                } else if (self.selectedDataModel === "Designation") {
                    dataObject["Designation_id"] = parent["lblId" + id].text;
                } else if (self.selectedDataModel === "Location") {
                    dataObject["Location_id"] = parent["lblId" + id].text;
                }
                self.removeMasterItem(self.selectedDataModel, dataObject, parent, self.removeCommonItemSuccess, self.removeCommonItemFailure);
            }
        };
        getUserRemoveConfirmation(title, userConfirmed);
    },
    /**
     * @function removeCommonItemSuccess
     * @description - This function is the success callback of removeMasterItem
     * @param {JSON } - success response from the back end
     **/
    removeCommonItemSuccess: function(rootFlex, result) {
        this.view.flxSCCommon.remove(rootFlex);
        this.view.forceLayout();
        dismissLoadingScreen();
    },
    /**
     * @function removeCommonItemFailure
     * @description - This function is the failure callback of removeMasterItem
     * @param {JSON} - success response from the back end
     **/
    removeCommonItemFailure: function(result) {
        dismissLoadingScreen();
        alert(JSON.stringify(result));
    },
    /**
     * @function removeMasterItem
     * @description - This function is the failure callback of login
     * this function will call enable error label in UI
     * @param {JSON - error} - error response from the back end
     **/
    removeMasterItem: function(dataModel, data, rootFlex, successCB, failureCB) {
        if (dataModel && data && rootFlex && successCB && failureCB) {
            try {
                var objectInstance = getObjectInstance();
                if (objectInstance !== null) {
                    var dataObject = new kony.sdk.dto.DataObject(dataModel);
                    dataObject.setRecord(data);
                    var options = {
                        "dataObject": dataObject,
                        "headers": {},
                        "queryParams": {}
                    };
                    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
                        showLoadingScreen(this.view);
                        objectInstance.deleteRecord(options, successCB.bind(this, rootFlex), failureCB.bind(this));
                    } else {
                        dismissLoadingScreen();
                        this.view.alertmsg.setTitle("User Message");
                        this.view.alertmsg.setMessage("No Network connected");
                        this.view.flxAlertContainer2.setVisibility(true);
                        this.view.forceLayout();
                    }
                }
            } catch (excp) {
                dismissLoadingScreen();
                kony.print("Exception occured in getDepartment: " + JSON.stringify(excp));
            }
        } else {
            this.view.alertmsg.setTitle("User Message");
            this.view.alertmsg.setMessage("Improper data received");
            this.view.flxAlertContainer2.setVisibility(true);
            this.view.forceLayout();
            return;
        }
    },
    /**
     * @function removeAddedItem
     * @description - This function removes the added item from the list.
     **/
    removeAddedItem: function() {
        this.view.flxAddCommonMasterItem0.setVisibility(false);
    },
    /**
     * @function hideALertComponentCallBack
     * @description - Callback function for "onAlertFlexClick" method of a Alert component.
     **/
    hideALertComponentCallBack: function() {
        this.view.flxAlertContainer2.setVisibility(false);
    },
});