define({

  userEmail:null,
  workContactId:null,
  mobileContactId:null,
  emailContactId:null,
  curEmpDetailsFromInputFields : {
    empObj : {
      "Employee_id":"",
      "First_name":"",
      "Last_name":"",
      "Department_id":"",
      "Designation_id":"",
      "Location_id":"",
      "Manager_id":"",      
      "Status_id":"1"      	                     
    },
    workContactObj:{
      "Contact_type_id":"1",
      "employee_id":"",
      "Is_primary":true,
      "Value":""     
    },
    mobileContactObj:{
      "Contact_type_id":"2",
      "employee_id":"",
      "Is_primary":false,
      "Value":""           
    },
    emailContactObj:{
      "Contact_type_id":"3",
      "employee_id":"",
      "Is_primary":false,
      "Value":""           
    },
    profilepicMediaObj:{
      "employee_id":"",
      "Extension":"",
      "Image":"",
      "Media_name":"profile",
      "Media_type_id":"1",
      "Url":""     
    },
    coverpageMediaObj:{
      "employee_id":"",
      "Extension":"",
      "Image":"",
      "Media_name":"cover",
      "Media_type_id":"2",
      "Url":""     
    }
  },  

  /**
	 * @function setWidgetReference
	 * @description - Creating references for widgets to access them internally in the form.
	 **/

  currentEmployee:null,
  setWidgetReference:function(){
    this.widgetRefs = {
      widgetRefForId:this.view.lblEmpIdValue,
      widgetRefForTitleFullName: this.view.lblTitleFullName,
      widgetRefForTitleDesignation:this.view.lblTitleDesignation,
      widgetRefForFirstName:this.view.txtFirstName,
      widgetRefForLastName:this.view.txtLastName,
      widgetRefForDesignation:this.view.listboxDesignation,
      widgetRefForDepartment:this.view.listboxDepartment,
      widgetRefForManager:this.view.listboxManager,
      widgetRefForWorkPhone:this.view.txtWorkNumber,
      widgetRefForMobilePhone:this.view.txtMobileNumber,
      widgetRefForEmaiId:this.view.txtEmailId,
      widgetRefForLocation:this.view.listBoxLocation,
      widgetRefForProfilePicImage:this.view.imgEmpImage,
      widgetRefForEditOrSaveOptionBottom: this.view.btnEdiSaveBottom,
      widgetRefForEditOrSaveOptionTop: this.view.btnEdiSaveTop,	
      widgetRefForCloseOption:this.view.btnClose,
      widgetRefForProfilePickSelection:this.view.flxProfilePickSelection,
    };
    this.widgetRefs.widgetRefForEditOrSaveOptionBottom.onClick = this.processSaveOrEditButton;
    this.widgetRefs.widgetRefForEditOrSaveOptionTop.onClick = this.processSaveOrEditButton;	  
    this.widgetRefs.widgetRefForProfilePickSelection.onClick = this.profilePicClick;
    this.widgetRefs.widgetRefForCloseOption.onClick = this.closeOptionClick;
  },

  /**
	 * @function setCommonData
	 * @description - Populating the employee details to the corresponding widgets of this form.
     * @param {JSON} - Employee details getting from the employee list form.
	 **/
  setCommonData:function(param){

    var employeeObj=param["employee"];
    this.view.lblTitleFullName.text=validateText(employeeObj["First_name"])+" "+validateText(employeeObj["Last_name"]);
    this.view.lblTitleDesignation.text=this.view.listboxDesignation.selectedKeyValue[1];
    this.view.lblDesignationValue.text=this.view.listboxDesignation.selectedKeyValue[1];
    this.view.lblDepartmentValue.text=this.view.listboxDepartment.selectedKeyValue[1];
    this.view.lblReportingToValue.text=this.view.listboxManager.selectedKeyValue[1];
    this.view.lblLocationValue.text=this.view.listBoxLocation.selectedKeyValue[1];
    this.view.lblEmpIdValue.text=validateText(employeeObj["Employee_id"]);
    this.view.txtEmpId.text=validateText(employeeObj["Employee_id"]);
    this.view.lblEmployeeFirstNameValue.text=validateText(employeeObj["First_name"]);
    this.view.txtFirstName.text=validateText(employeeObj["First_name"]);
    this.view.lblLastNameValue.text=validateText(employeeObj["Last_name"]);
    this.view.txtLastName.text=validateText(employeeObj["Last_name"]);

    var contactList=employeeObj.contact;
    this.view.lblEmailIdValue.text="NA";
    this.view.lblWorkNumberValue.text="NA";
    this.view.lblMobileNumberValue.text="NA";
    for(var i=0;i<contactList.length;i++){
      if(contactList[i]["Contact_type_id"]==="2"){
        this.view.lblMobileNumberValue.text=contactList[i].Value;
        this.view.txtMobileNumber.text=contactList[i].Value;
        this.mobileContactId=contactList[i]["Contact_id"];
      }else if(contactList[i]["Contact_type_id"]==="1"){
        this.view.lblWorkNumberValue.text=contactList[i].Value;
        this.view.txtWorkNumber.text=contactList[i].Value;
        this.workContactId=contactList[i]["Contact_id"];
      }else if(contactList[i]["Contact_type_id"]==="3"){
        this.view.lblEmailIdValue.text=contactList[i].Value;
        this.view.txtEmailId.text=contactList[i].Value;
        this.emailContactId=contactList[i]["Contact_id"];
      }
    }   
  },
  /**
	 * @function setMastersToListBox
	 * @description - This function is the failure callback of login
     * this function will call enable error label in UI
     * @param {JSON - error} - error response from the back end
	 **/

  setMastersToListBox:function(param){
    var departmentList=param["departmentList"];
    var departmentMastData=[];
    departmentMastData.push(["-1","None"]);
    var isFound=false;
    for(var i=0;i<departmentList.length;i++){
      departmentMastData.push([departmentList[i]["Department_id"],departmentList[i]["Name"]]);
      if(param["employee"]!==undefined &&departmentList[i]["Department_id"]===param["employee"]["Department_id"]){
        isFound=true;
      }
    }
    this.widgetRefs.widgetRefForDepartment.masterData = departmentMastData;
    if(isFound){
      this.view.listboxDepartment.selectedKey=param["employee"]["Department_id"];
      isFound=false;
    }else{
      this.view.listboxDepartment.selectedKey="-1";
    }
    var designationMastData = [];
    var designationList=param["designationList"];
    designationMastData.push(["-1","None"]);
    for(i=0;i<designationList.length;i++){
      designationMastData.push([designationList[i]["Designation_id"],designationList[i].Name]); 
      if(param["employee"]!==undefined && designationList[i]["Designation_id"]===param["employee"]["Designation_id"]){
        isFound=true;
      }
    }
    this.widgetRefs.widgetRefForDesignation.masterData = designationMastData;
    if(isFound){
      this.view.listboxDesignation.selectedKey=param["employee"]["Designation_id"];
      isFound=false;
    }else{
      this.view.listboxDesignation.selectedKey="-1";
    }
    var locationMastData = [];
    locationMastData.push(["-1","None"]);
    var locationList=param["locationList"];
    var locationString;
    for( i=0;i<locationList.length;i++){
      locationString = validateText(locationList[i].Address1)+", "+ validateText(locationList[i].Address2)+", "+ 
        validateText(locationList[i].City)+", "+ validateText(locationList[i].State)+", "+ 
        validateText(locationList[i].Zipcode)+", "+ validateText(locationList[i].Country);
      locationMastData.push([locationList[i]["Location_id"],locationString]);    
      if(param["employee"]!==undefined && locationList[i]["Location_id"]===param["employee"]["Location_id"]){
        isFound=true;
      }
    }
    this.view.listBoxLocation.masterData=locationMastData;
    if(isFound){
      this.view.listBoxLocation.selectedKey=param["employee"]["Location_id"];
      isFound=false;
    }else{
      this.view.listBoxLocation.selectedKey="-1";
    }
    var managerMastData = [];
    var globEmployeeMap=param["employeeList"];
    managerMastData.push(["-1","None"]);
    var firstname;
    var lastname;
    for ( i=0;i<globEmployeeMap.length;i++){
      firstname="";
      lastname="";
      if (globEmployeeMap[i].First_name !== undefined){
        firstname = globEmployeeMap[i].First_name;
      }
      if (globEmployeeMap[i].Last_name !== undefined){
        lastname = globEmployeeMap[i].Last_name;
      }
      var managerNameStr =firstname+" "+lastname;        
      managerMastData.push([globEmployeeMap[i].Employee_id,managerNameStr]); 
      if(param["employee"]!==undefined && globEmployeeMap[i].Employee_id===param["employee"]["Manager_id"]){
        isFound=true;
      }
    }
    this.widgetRefs.widgetRefForManager.masterData = managerMastData;   
    if(param["employee"]!==undefined &&isFound){
      this.view.listboxManager.selectedKey=param["employee"]["Manager_id"];
    }else{
      this.view.listboxManager.selectedKey="-1";
    }

  },

  /**
	 * @function populateData
	 * @description - This function for setting the
     * @param {JSON - error} - error response from the back end
	 **/
  populateData:function(param){
    var employeeObj=param["employee"];
    if(employeeObj["empimage"]!==undefined){
      if(employeeObj["empimage"]["base64"]!==undefined){
        this.view.imgEmpImage.base64=employeeObj["empimage"]["base64"];
      }else if(employeeObj["empimage"]["src"]!==undefined){
        this.view.imgEmpImage.src=employeeObj["empimage"]["src"];
      }
    }else{
      this.view.imgEmpImage.src=globDefaultEmpProfilePic;
    }    
    this.setMastersToListBox(param);
    this.setCommonData(param);
  },

  /**
	 * @function resetForm
	 * @description - Resetting all the values of widgets to none. 
     * @param {JSON - error} - error response from the back end
	 **/
  resetForm:function(param){

    this.view.txtEmpId.text="";
    this.widgetRefs.widgetRefForTitleFullName.text = "";
    this.widgetRefs.widgetRefForTitleDesignation.text = "";
    this.widgetRefs.widgetRefForFirstName.text = "";
    this.widgetRefs.widgetRefForLastName.text = "";
    this.widgetRefs.widgetRefForEmaiId.text = "";
    this.widgetRefs.widgetRefForWorkPhone.text = "";
    this.widgetRefs.widgetRefForMobilePhone.text = "";
    this.widgetRefs.widgetRefForProfilePicImage.src = globDefaultEmpProfilePic; 
    this.currentEmployee = null;
    this.setMastersToListBox(param);
    this.changeUIForEditMode();
  },
  /**
	 * @function onNavigate
	 * @description - This function is the failure callback of login
     * this function will call enable error label in UI
     * @param {JSON - error} - error response from the back end
	 **/
  onNavigate : function(param){

    this.view.flxProfileMain.setVisibility(false);
    this.setWidgetReference();
    if (globEmpOperatioMode == "add"){
      this.resetForm(param);
      return;
    }else if(globEmpOperatioMode == "edit"){
      this.changeUIForEditMode();
    }else{
      this.changeUIForViewMode();
    }
    this.currentEmployee=param["employee"];
    this.populateData(param);


    this.userEmail=kony.store.getItem("EMAIL_ID");
    if(isAdmin(this.userEmail)===false){
      this.view.lblEditProfileHeading.setVisibility(false);
      this.view.profileDetails.setVisibility(true);
      this.view.UpdateProfilePictu.setVisibility(false);
      this.view.flxClose.setVisibility(true);
      this.view.flxEditSaveTop.setVisibility(false);
      this.view.btnEdiSaveBottom.setVisibility(false);
      this.view.flxEditSave.setVisibility(false);

    }
    else{
      this.view.lblEditProfileHeading.setVisibility(true);
      this.view.profileDetails.setVisibility(false);
      this.view.UpdateProfilePictu.setVisibility(true);
      this.view.flxClose.setVisibility(true);
      this.view.flxEditSaveTop.setVisibility(true);
      this.view.btnEdiSaveBottom.setVisibility(true);
    }

  },
  /**
	 * @function processSaveOrEditButton
	 * @description - This function is the failure callback of login
     * this function will call enable error label in UI
     * @param {JSON - error} - error response from the back end
	 **/
  processSaveOrEditButton: function(){

    if (globEmpOperatioMode == "edit" || globEmpOperatioMode == "add"){
      this.processSaveButton();
    }  
    else {
      this.widgetRefs.widgetRefForEditOrSaveOptionTop.text = "Save";
      this.widgetRefs.widgetRefForEditOrSaveOptionBottom.text = "Save";
      globEmpOperatioMode = "edit";
      this.changeUIForEditMode();
    }
  },
  /**
	 * @function toggleProfile
	 * @description - This function toggles the visibility of the profile popup.
     * @param {JSON } - event object of the clicked flexcontainer.
	 **/

  toggleProfile:function(eventobject){

    if(eventobject==="userProfile"){
      this.view.flxOverlay.setVisibility(true);
      this.view.flxProfileMain.setVisibility(true);
    }
  },

  /**
	 * @function profilePicClick
	 * @description - This function open the image gallery for setting new profile pic.
	 **/

  profilePicClick: function (){
    var querycontext = {mimetype:"image/png"};
    kony.phone.openMediaGallery(this.processImageSelection, querycontext);
  }, 
  /**
	 * @function closeOptionClick
	 * @description - This function is to navigate back to the Employee list form from the details form.
	 **/
  closeOptionClick : function(){
    var navObj = new kony.mvc.Navigation("frmEmpList");
    globEmpOperatioMode = "view";
    navObj.navigate();
  },
  /**
	 * @function processImageSelection
	 * @description - This function is the failure callback of login
     * this function will call enable error label in UI
     * @param {JSON} - error response from the back end
	 **/
  processImageSelection: function (selectedFleRawbytes){
    var base64str1 = kony.convertToBase64(selectedFleRawbytes);
    var base64str = kony.convertToBase64(base64str1);
    this.widgetRefs.widgetRefForProfilePicImage.base64 = base64str1;
    kony.print("base64str is : "+base64str);
    kony.print("base64str1 is : "+base64str1);
    this.curEmpDetailsFromInputFields.profilepicMediaObj.Image = base64str;
  },

  /**
	 * @function processSaveButton
	 * @description - This function will update/add the edited or new created employee details of an employee
	 **/

  ADD_EMPLOYEE_TRANSACTION_COUNT: 6,
  processSaveButton: function (){
    this.curEmpDetailsFromInputFields.empObj.Employee_id=this.view.txtEmpId.text;
    this.curEmpDetailsFromInputFields.empObj.First_name = this.widgetRefs.widgetRefForFirstName.text;
    this.curEmpDetailsFromInputFields.empObj.Last_name = this.widgetRefs.widgetRefForLastName.text;
    this.curEmpDetailsFromInputFields.empObj.Department_id = this.widgetRefs.widgetRefForDepartment.selectedKey;
    this.curEmpDetailsFromInputFields.empObj.Designation_id = this.widgetRefs.widgetRefForDesignation.selectedKey;
    this.curEmpDetailsFromInputFields.empObj.Location_id = this.widgetRefs.widgetRefForLocation.selectedKey;
    this.curEmpDetailsFromInputFields.empObj.Status_id = "1";
    this.curEmpDetailsFromInputFields.empObj.Manager_id = this.widgetRefs.widgetRefForManager.selectedKey;
    this.curEmpDetailsFromInputFields.workContactObj.Value = this.widgetRefs.widgetRefForWorkPhone.text;
    this.curEmpDetailsFromInputFields.mobileContactObj.Value = this.widgetRefs.widgetRefForMobilePhone.text;
    this.curEmpDetailsFromInputFields.emailContactObj.Value = this.widgetRefs.widgetRefForEmaiId.text;
    this.addEmployeeTransaction = {successTransactions:0, failedTransactions:0};
    if (this.validateFieldsForAddOrEditEmployee()){
      globRefreshData = true;
      showLoadingScreen(this.view);
      this.createNewEmployee();
    }
    else {
      kony.print("Unable to Add employee.Validation failed!!");
      this.view.alertmsg.setTitle("User Message");
      this.view.alertmsg.setMessage("Unable to Add employee.Validation failed!!");
      this.view.flxAlertContainer.setVisibility(true);
      this.view.forceLayout();
    }

  },
  /**
	 * @function validateFieldsForAddOrEditEmployee
	 * @description - This function is the failure callback of login
     * this function will call enable error label in UI
	 **/
  validateFieldsForAddOrEditEmployee:function (){   
    if (this.hasValue(this.curEmpDetailsFromInputFields.empObj.Employee_id) &&
        this.hasValue(this.curEmpDetailsFromInputFields.empObj.First_name) &&
        this.hasValue(this.curEmpDetailsFromInputFields.empObj.Last_name) &&
        this.hasValue(this.curEmpDetailsFromInputFields.empObj.Department_id) &&
        this.hasValue(this.curEmpDetailsFromInputFields.empObj.Designation_id) &&
        this.hasValue(this.curEmpDetailsFromInputFields.empObj.Location_id) &&
        this.hasValue(this.curEmpDetailsFromInputFields.empObj.Status_id) &&
        this.hasValue(this.curEmpDetailsFromInputFields.empObj.Manager_id) &&
        this.hasValue(this.curEmpDetailsFromInputFields.workContactObj.Value) &&
        this.hasValue(this.curEmpDetailsFromInputFields.mobileContactObj.Value) &&
        this.hasValue(this.curEmpDetailsFromInputFields.emailContactObj.Value) &&
        (this.hasValue(this.curEmpDetailsFromInputFields.profilepicMediaObj.Image) || globEmpOperatioMode === "edit")        
       ){
      return true;
    }
    return false;              
  },

  /**
	 * @function hasValue
	 * @description - This function is the failure callback of login
     * this function will call enable error label in UI
     * @param {JSON} - error response from the back end
	 **/
  hasValue:function(valOfVar){
    if (valOfVar !== undefined && valOfVar !== null ){
      return true;
    }
    return false;
  },
  /**
	 * @function createNewEmployee
	 * @description - Creates a employee object in backend using EmployeeModelSchema object service.
	 **/
  createNewEmployee: function(){
    try {
      var objSvc = getObjectInstance();
      var dataObject = new kony.sdk.dto.DataObject("Employee");

      dataObject.addField("Employee_id",this.curEmpDetailsFromInputFields.empObj.Employee_id);
      dataObject.addField("First_name",this.curEmpDetailsFromInputFields.empObj.First_name);
      dataObject.addField("Last_name",this.curEmpDetailsFromInputFields.empObj.Last_name);
      dataObject.addField("Department_id",this.curEmpDetailsFromInputFields.empObj.Department_id);
      dataObject.addField("Designation_id",this.curEmpDetailsFromInputFields.empObj.Designation_id);
      dataObject.addField("Location_id",this.curEmpDetailsFromInputFields.empObj.Location_id);
      dataObject.addField("Manager_id",this.curEmpDetailsFromInputFields.empObj.Manager_id);
      dataObject.addField("Status_id",this.curEmpDetailsFromInputFields.empObj.Status_id);
      if (globEmpOperatioMode == "add"){
        objSvc.create( {"dataObject":dataObject},
                      this.createEmployeeObjectSuccessCallback.bind(this),
                      this.createEmployeeObjectFailureCallback.bind(this)
                     );
      }
      else if (globEmpOperatioMode == "edit") {
        objSvc.update( {"dataObject":dataObject},
                      this.createEmployeeObjectSuccessCallback.bind(this),
                      this.createEmployeeObjectFailureCallback.bind(this)
                     );
      }
    }
    catch(err){
      kony.print("Exception in createEmployeeObject:"+ JSON.stringify(err));
      this.dissmissLoadingScreenForAddTransaction(isException)(true);
    }
  },
  /**
	 * @function createEmployeeObjectSuccessCallback
	 * @description - This function is the success callback of createNewEmployee
     * @param {JSON } -success response from backend
	 **/
  createEmployeeObjectSuccessCallback: function(resp){
    try {
      kony.print("createEmployeeObjectSuccessCallback:"+ JSON.stringify(resp));
      this.addEmployeeTransaction.successTransactions ++;
      this.curEmpDetailsFromInputFields.empObj.Employee_id  = resp.Employee_id;
      if (this.hasValue(this.currentEmployee)&& this.hasValue(this.workContactId)){
        this.createContactObject(this.curEmpDetailsFromInputFields.workContactObj,this.workContactId); 
      }
      else {
        this.createContactObject(this.curEmpDetailsFromInputFields.workContactObj); 
      }
      if (this.hasValue(this.currentEmployee)&& this.hasValue(this.mobileContactId)){
        this.createContactObject(this.curEmpDetailsFromInputFields.mobileContactObj,this.mobileContactId); 
      }
      else {
        this.createContactObject(this.curEmpDetailsFromInputFields.mobileContactObj); 
      }
      if (this.hasValue(this.currentEmployee)&& this.hasValue(this.emailContactId)){
        this.createContactObject(this.curEmpDetailsFromInputFields.emailContactObj,this.emailContactId); 
      }
      else {
        this.createContactObject(this.curEmpDetailsFromInputFields.emailContactObj); 
      }

      this.createMediaObject(this.curEmpDetailsFromInputFields.profilepicMediaObj);
      this.dissmissLoadingScreenForAddTransaction();
    }
    catch(err){

      kony.print("Exception in createEmployeeObjectSuccessCallback:"+ JSON.stringify(err));  
      this.dissmissLoadingScreenForAddTransaction(true);
    }
  },
  /**
	 * @function createEmployeeObjectFailureCallback
	 * @description - This function is the failure callback of createNewEmployee
     * @param {JSON - error} - error response from the back end
	 **/
  createEmployeeObjectFailureCallback: function(err){

    var message=err.errmsg;
    dismissLoadingScreen();
    this.view.alertmsg.setTitle("Duplicate Entry");
    this.view.alertmsg.setMessage(message);
    this.view.flxAlertContainer.setVisibility(true);
    this.view.forceLayout();
    kony.print("createEmployeeObjectFailureCallback:"+ JSON.stringify(err)); 
    this.addEmployeeTransaction.failedTransactions ++;

  },

  /**
	 * @function createContactObject
	 * @description - Creates a contact object using "EmployeeModelSchema" object service.
     * @param {JSON } -
	 **/
  createContactObject: function(contactObjParam,currEmpContactInfo){
    try {
      
      var objSvc = getObjectInstance();
      var dataObject = new kony.sdk.dto.DataObject("Contact");
      var thisController = this;

      dataObject.addField("Contact_type_id",contactObjParam.Contact_type_id);
      dataObject.addField("employee_id",this.curEmpDetailsFromInputFields.empObj.Employee_id);
      dataObject.addField("Is_primary",contactObjParam.Is_primary);
      dataObject.addField("Value",contactObjParam.Value);

      if ((globEmpOperatioMode == "add")|| (currEmpContactInfo === undefined || currEmpContactInfo === null)){
        objSvc.create( {"dataObject":dataObject},
                      createContactObjectSuccessCallback,
                      createContactObjectFailureCallback
                     );
      }
      else if (globEmpOperatioMode == "edit"){         
        if (currEmpContactInfo != undefined && currEmpContactInfo != null){
          dataObject.addField("Contact_id",currEmpContactInfo);
          objSvc.update( {"dataObject":dataObject},
                        createContactObjectSuccessCallback,
                        createContactObjectFailureCallback
                       );
        }

      }
      function createContactObjectSuccessCallback(resp){
        thisController.addEmployeeTransaction.successTransactions ++;         
        kony.print("createContactObjectSuccessCallback:"+ JSON.stringify(resp));
        thisController.dissmissLoadingScreenForAddTransaction();
      }
      function createContactObjectFailureCallback(err){
        thisController.addEmployeeTransaction.failedTransactions ++;
        kony.print("createContactObjectFailureCallback:"+ JSON.stringify(err)); 
        thisController.dissmissLoadingScreenForAddTransaction();
      }
    }
    catch(err){
      kony.print("Exception in createContactObject:"+ JSON.stringify(err)); 
      this.dissmissLoadingScreenForAddTransaction(true);
    }
  },

  /**
	 * @function createMediaObject
	 * @description - Creates a media object using "EmployeeModelSchema" object service.
     * @param {JSON - error} - error response from the back end
	 **/
  createMediaObject: function(mediaObjectParam){
    try {
      var controllerObj = this; 
      var objSvc = getObjectInstance();
      var dataObject = new kony.sdk.dto.DataObject("Media");

      if ((globEmpOperatioMode=="add") || (this.currentEmployee.profilePic === undefined || this.currentEmployee.profilePic === null||this.currentEmployee.profilePic.length == 0)){
        dataObject.addField("employee_id",this.curEmpDetailsFromInputFields.empObj.Employee_id);
        dataObject.addField("Media_type_id",mediaObjectParam.Media_type_id);
        dataObject.addField("Extension",mediaObjectParam.Extension);
        dataObject.addField("Media_name",mediaObjectParam.Media_name);
        dataObject.addField("Url",mediaObjectParam.Url);
        objSvc.create( {"dataObject":dataObject},
                      createMediaObjectSuccessCallback,
                      createMediaObjectFailureCallback
                     );
      }
      else if(globEmpOperatioMode == "edit"){
        controllerObj.addEmployeeTransaction.successTransactions ++; // incrementing the transaction counter (even though there is no service call), to maintain the transaction count
        if (controllerObj.curEmpDetailsFromInputFields.profilepicMediaObj.Image.length > 0){
          createProfilePicObject(controllerObj.currentEmployee.profilePic[0].Media_id);          
        }
        else {
          controllerObj.addEmployeeTransaction.successTransactions ++;
        }
      }	       

      function createMediaObjectSuccessCallback(resp){
        controllerObj.addEmployeeTransaction.successTransactions ++;
        createProfilePicObject(resp.Media_id);

      }

      function createProfilePicObject(mediaIdParam){
        controllerObj.dissmissLoadingScreenForAddTransaction();
        if (mediaObjectParam.Image.length > 0){
          var mediaId = mediaIdParam;
          var bindataObject = new kony.sdk.dto.DataObject("Media");
          bindataObject.addField("Media_id",mediaId);
          bindataObject.addField("Image",mediaObjectParam.Image);
          objSvc.updateBinaryContent(
            {"dataObject":bindataObject, 
             "binaryAttrName":"Image"},
            function(bin){
              controllerObj.addEmployeeTransaction.successTransactions ++;
              kony.print("Binary content created: ");                                    			
              controllerObj.dissmissLoadingScreenForAddTransaction();
            },
            function(err){kony.print("Failed to createBinary: " + JSON.stringify(err));
                          controllerObj.addEmployeeTransaction.failedTransactions ++;
                          controllerObj.dissmissLoadingScreenForAddTransaction();
                         }
          );

        }
        else {
          controllerObj.addEmployeeTransaction.successTransactions ++;
        }

      }
      function createMediaObjectFailureCallback(result){
        kony.print("createMediaObjectFailureCallback:");
        controllerObj.addEmployeeTransaction.failedTransactions ++;
        controllerObj.dissmissLoadingScreenForAddTransaction();
      }
    }
    catch(err){
      kony.print("Exception in createEmployeeObject:"+ JSON.stringify(err));
      this.dissmissLoadingScreenForAddTransaction(true);
    }
  },

  /**
	 * @function dissmissLoadingScreenForAddTransaction
	 * @description - To dismiss the loading screen.
	 **/
  dissmissLoadingScreenForAddTransaction:function(isException){

    if (isException){

      kony.print("Sorry!!Unable to Add/Update the Employee in the system due to an exception!!");

      this.view.alertmsg.setTitle("User Message");
      this.view.alertmsg.setMessage("Sorry!!Unable to Add/Update the Employee to the system due to an exception!!");
      this.view.flxAlertContainer.setVisibility(true);
      this.view.forceLayout();
      return;  
    }
    if (this.addEmployeeTransaction.successTransactions == this.ADD_EMPLOYEE_TRANSACTION_COUNT && this.addEmployeeTransaction.failedTransactions == 0){
      kony.print("Employee has been added/updated to the system successfully!!");

      this.view.alertmsg.setTitle("User Message");
      this.view.alertmsg.setMessage("Employee has been added/updated to the system successfully!!");
      this.view.flxAlertContainer.setVisibility(true);
      this.view.forceLayout();
    }
    else if (this.addEmployeeTransaction.successTransactions + this.addEmployeeTransaction.failedTransactions === this.ADD_EMPLOYEE_TRANSACTION_COUNT){
      kony.print("Sorry!!Something went wrong in adding/updating the Employee to the system!!");

      this.view.alertmsg.setTitle("User Message");
      this.view.alertmsg.setMessage("Sorry!!Something went wrong in adding/updating the Employee to the system!");
      this.view.flxAlertContainer.setVisibility(true);
      this.view.forceLayout();
    }
    kony.application.dismissLoadingScreen();
  },

  /**
	 * @function populateViewModeData
	 * @description - This function is for populating the data to segment in view mode.
     * @param {JSON} - Employe detail from Employee list from.
	 **/
  populateViewModeData:function(param){  
    this.widgetRefs.widgetRefForId.text =validateText(param["Employee_id"]);

    this.widgetRefs.widgetRefForTitleFullName.text = param.First_name+" "+param.Last_name;
    if(param.designation.length>0){
      this.widgetRefs.widgetRefForTitleDesignation.text = param.designation[0]["Name"];
    }else{
      this.widgetRefs.widgetRefForTitleDesignation.text = "NA";
    }
    this.view.lblEmployeeFirstNameValue.text=param.First_name;
    this.view.lblLastNameValue.text=param.Last_name;
    this.view.lblDesignationValue.text=param.Designation_id;
    this.view.lblReportingToValue.text=param.Manager_id;
    this.view.lblDepartmentValue.text=this.view.listboxDepartment.selectedKeyValue;
    this.view.lblDesignationValue.text=this.view.listboxDesignation.selectedKeyValue;
    this.view.lblReportingToValue.text=this.view.listboxManager.selectedKeyValue;
    var contactList=param.contact;
    this.view.lblEmailIdValue.text="NA";
    this.view.lblWorkNumberValue.text="NA";
    this.view.lblMobileNumberValue.text="NA";
    for(var i=0;i<contactList.length;i++){
      if(contactList[i]["Contact_type_id"]==="1"){
        this.view.lblMobileNumberValue.text=contactList[i].Value;
      }else if(contactList[i]["Contact_type_id"]==="2"){
        this.view.lblWorkNumberValue.text=contactList[i].Value;
      }else if(contactList[i]["Contact_type_id"]==="3"){
        this.view.lblEmailIdValue.text=contactList[i].Value;
      }
    }
    if(param.location.length>0){
      this.view.lblLocationValue.text=validateText(param.location[0]["Address1"])+" "+validateText(param.location[0]["Address2"])+" "+
        validateText(param.location[0]["City"])+" "+validateText(param.location[0]["Country"])+" "+validateText(param.location[0]["Zipcode"]);
    }else{
      this.view.lblLocationValue.text="NA";
    }

    if (param.profilePicInfo !==  undefined && param.profilePicInfo != null)  {
      if (param.profilePicInfo.Image !== undefined && param.profilePicInfo.Image.length > 0){
        this.widgetRefs.widgetRefForProfilePicImage.base64  = param.profilePicInfo.Image;  
      }
      else if (param.profilePicInfo.Url !== undefined && param.profilePicInfo.Url.length > 0){
        this.widgetRefs.widgetRefForProfilePicImage.src = param.profilePicInfo.Url;
      }
      else {
        this.widgetRefs.widgetRefForProfilePicImage.src = globDefaultEmpProfilePic;          
      }
    }
    else {
      this.widgetRefs.widgetRefForProfilePicImage.src = globDefaultEmpProfilePic;
    }
  },

  /**
	 * @function populateEditModeData
	 * @description - This function is for populating the data to segment in edit mode.
     * @param {JSON} - Employe detail from Employee list from.
	 **/
  populateEditModeData:function(param){
    this.widgetRefs.widgetRefForFirstName.text = param.First_name;
    this.widgetRefs.widgetRefForLastName.text = param.Last_name;
    this.widgetRefs.widgetRefForDepartment.selectedKey = param.Department_id;
    this.widgetRefs.widgetRefForDesignation.selectedKey = param.Designation_id;
    this.widgetRefs.widgetRefForManager.selectedKey =  param.Manager_id;
    this.widgetRefs.widgetRefForEmaiId.text = param.emailContactValue;
    this.widgetRefs.widgetRefForWorkPhone.text = param.workContactNumber;
    this.widgetRefs.widgetRefForMobilePhone.text = param.mobileContactNumber;
    validateText(this.currentEmployee.locationInfo["City"])+" "+validateText(this.currentEmployee.locationInfo["Country"])+" "+validateText(this.currentEmployee.locationInfo["Zipcode"]);
    if (param.profilePicInfo !==  undefined && param.profilePicInfo !== null)  {
      if (param.profilePicInfo.Image !== undefined && param.profilePicInfo.Image.length > 0){
        this.widgetRefs.widgetRefForProfilePicImage.base64  = param.profilePicInfo.Image;  
      }
      else if (this.currentEmployee.profilePicInfo.Url !== undefined && this.currentEmployee.profilePicInfo.Url.length > 0){
        this.widgetRefs.widgetRefForProfilePicImage.src = this.currentEmployee.profilePicInfo.Url;
      }
      else {
        this.widgetRefs.widgetRefForProfilePicImage.src = globDefaultEmpProfilePic;          
      }
    }
    else {
      this.widgetRefs.widgetRefForProfilePicImage.src = globDefaultEmpProfilePic;
    }

  },
  /**
	 * @function changeUIForEditMode
	 * @description - Changes the UI of the form to editing mode.
	 **/
  changeUIForEditMode:function(){
    this.widgetRefs.widgetRefForEmaiId.setEnabled(true);
    this.widgetRefs.widgetRefForFirstName.setEnabled(true);
    this.widgetRefs.widgetRefForLastName.setEnabled(true);
    this.widgetRefs.widgetRefForMobilePhone.setEnabled(true);
    this.widgetRefs.widgetRefForWorkPhone.setEnabled(true);
    this.widgetRefs.widgetRefForDepartment.setEnabled(true);
    this.widgetRefs.widgetRefForDesignation.setEnabled(true);
    this.widgetRefs.widgetRefForManager.setEnabled(true);
    this.widgetRefs.widgetRefForLocation.setEnabled(true);
    this.widgetRefs.widgetRefForProfilePickSelection.setEnabled(true);
    this.widgetRefs.widgetRefForEditOrSaveOptionTop.text = "Save";
    this.widgetRefs.widgetRefForEditOrSaveOptionBottom.text = "Save";
    this.enableEditMode();


  },
  /**
	 * @function changeUIForEditMode
	 * @description - Changes the UI of the form to view mode.
	 **/
  changeUIForViewMode:function(){
    this.widgetRefs.widgetRefForEmaiId.setEnabled(false);
    this.widgetRefs.widgetRefForFirstName.setEnabled(false);
    this.widgetRefs.widgetRefForLastName.setEnabled(false);
    this.widgetRefs.widgetRefForMobilePhone.setEnabled(false);
    this.widgetRefs.widgetRefForWorkPhone.setEnabled(false);
    this.widgetRefs.widgetRefForDepartment.setEnabled(false);
    this.widgetRefs.widgetRefForDesignation.setEnabled(false);
    this.widgetRefs.widgetRefForManager.setEnabled(false);
    this.widgetRefs.widgetRefForLocation.setEnabled(false);
    this.widgetRefs.widgetRefForProfilePickSelection.setEnabled(false);
    this.widgetRefs.widgetRefForEditOrSaveOptionTop.text = "Edit";
    this.widgetRefs.widgetRefForEditOrSaveOptionBottom.text = "Edit";
    this.enableViewMode();

  },
  /**
	 * @function setCommonData
	 * @description - Enables the edit mode of the form onclick of edit button.
	 **/
  enableEditMode(){
    if(globEmpOperatioMode==="add"){
      this.view.txtEmpId.setVisibility(true);
      this.view.txtEmpId.setEnabled(true);
      this.view.lblEmpIdValue.setVisibility(false);
    }else{
      this.view.txtEmpId.setEnabled(false);
    }
    this.view.lblEmailIdValue.setVisibility(true);
    this.view.txtFirstName.setVisibility(true);
    this.view.txtLastName.setVisibility(true);
    this.view.listboxDesignation.setVisibility(true);
    this.view.listboxDepartment.setVisibility(true);
    this.view.listboxManager.setVisibility(true);
    this.view.txtMobileNumber.setVisibility(true);
    this.view.txtWorkNumber.setVisibility(true);
    this.view.txtEmailId.setVisibility(true);
    this.view.listBoxLocation.setVisibility(true);


    this.view.lblEmployeeFirstNameValue.setVisibility(false);
    this.view.lblLastNameValue.setVisibility(false);
    this.view.lblDesignationValue.setVisibility(false);
    this.view.lblDepartmentValue.setVisibility(false);
    this.view.lblReportingToValue.setVisibility(false);
    this.view.lblWorkNumberValue.setVisibility(false);
    this.view.lblEmailIdValue.setVisibility(false);
    this.view.lblLocationValue.setVisibility(false);

  },
  /**
	 * @function setCommonData
	 * @description - Enables the view mode of the form on navigation to the details form or onclick of save button.
	 **/
  enableViewMode(){
    this.view.txtEmpId.setEnabled(false);
    this.view.txtFirstName.setVisibility(false);
    this.view.txtLastName.setVisibility(false);
    this.view.listboxDesignation.setVisibility(false);
    this.view.listboxDepartment.setVisibility(false);
    this.view.listboxManager.setVisibility(false);
    this.view.txtMobileNumber.setVisibility(false);
    this.view.txtWorkNumber.setVisibility(false);
    this.view.txtEmailId.setVisibility(false);
    this.view.listBoxLocation.setVisibility(false);

    this.view.lblEmailIdValue.setVisibility(true);
    this.view.lblEmployeeFirstNameValue.setVisibility(true);
    this.view.lblLastNameValue.setVisibility(true);
    this.view.lblDesignationValue.setVisibility(true);
    this.view.lblDepartmentValue.setVisibility(true);
    this.view.lblReportingToValue.setVisibility(true);
    this.view.lblWorkNumberValue.setVisibility(true);
    this.view.lblEmailIdValue.setVisibility(true);
    this.view.lblLocationValue.setVisibility(true);
  },
   /**
	 * @function setCommonData
	 * @description - Navigatesto form settings onclick of settings in left menu bar.
	 **/
  navigateToFormSetting:function(){
    try{
      var navObj=new kony.mvc.Navigation("frmSetting");
      navObj.navigate();
    }catch(excp){

      kony.print("Exception occured while navigating to setting form: "+JSON.stringify(excp));
      alert("Exception occured while navigating to setting form: "+JSON.stringify(excp));
    }
  },
  /**
	 * @function hideALertComponentCallBack
	 * @description - Callback function for "onAlertFlexClick" method of a Alert component.
	 **/

  hideALertComponentCallBack:function(){

    this.view.flxAlertContainer.setVisibility(false);
  }


});