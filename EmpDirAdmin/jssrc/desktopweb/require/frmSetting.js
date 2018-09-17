define("frmSetting", function() {
    return function(controller) {
        function addWidgetsfrmSetting() {
            this.setDefaultUnit(kony.flex.DP);
            var flxRoot = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1128px",
                "id": "flxRoot",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_f542b46a9d0e4d81b611ac13c484c8d4,
                "skin": "sknFlxLightGrey",
                "top": "0px",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoot.setDefaultUnit(kony.flex.DP);
            var empheader = new com.konysa.empheader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80px",
                "id": "empheader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "skin2f2bc440",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            empheader.onUserFlxClick = controller.AS_UWI_gd88ff8da7144d8fbeffcad2acdfde27;
            var leftmenu = new com.sa.leftmenu({
                "clipBounds": true,
                "height": "100%",
                "id": "leftmenu",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "sknFlxLeftMenu",
                "top": "79px",
                "width": "260px"
            }, {}, {});
            leftmenu.DirectoryMenuItemMouseover.onClick = controller.AS_FlexContainer_c5107e1860b04197b79796d282d7c1cc;
            leftmenu.Group8.autogrowMode = kony.flex.AUTOGROW_NONE;
            leftmenu.Group8.height = "57%";
            leftmenu.Group8.left = "15%";
            leftmenu.Group8.top = "4%";
            leftmenu.Settings.left = "32%";
            leftmenu.Settings.top = "10%";
            leftmenu.SettingsMenu.autogrowMode = kony.flex.AUTOGROW_NONE;
            leftmenu.SettingsMenu.height = "5%";
            leftmenu.SettingsMenu.left = "0%";
            leftmenu.SettingsMenu.top = "26%";
            leftmenu.SettingsMenu.width = "100%";
            leftmenu.SettingsMenu.onClick = controller.AS_FlexContainer_ec998c0f4ad54fe5893c6aed47e65bf3;
            leftmenu.imgLine4.left = "0%";
            leftmenu.imgSettings.src = "settings_icon_hover.png";
            leftmenu.imgYellowBorder.isVisible = false;
            leftmenu.imgYellowBorderSettings.top = "-10%";
            leftmenu.imgYellowBorderSettings.width = "1.50%";
            leftmenu.top = "79px";
            leftmenu.width = "260px";
            var flxContentMaster = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "blur": {
                    "enabled": false,
                    "value": 100
                },
                "clipBounds": true,
                "id": "flxContentMaster",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "308px",
                "minWidth": "800px",
                "right": "48px",
                "skin": "sknFlxTransparentBG",
                "top": "120px",
                "zIndex": 10
            }, {}, {});
            flxContentMaster.setDefaultUnit(kony.flex.DP);
            var flxContentHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40px",
                "id": "flxContentHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0px",
                "skin": "sknEditHeading",
                "top": "5px",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContentHeader.setDefaultUnit(kony.flex.DP);
            var lblHeaderTitle = new kony.ui.Label({
                "centerY": "50%",
                "height": "40px",
                "id": "lblHeaderTitle",
                "isVisible": true,
                "left": "0%",
                "skin": "sknEmpHeading",
                "text": "Edit Master",
                "width": "350px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnAddNewMaster0 = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknButtonGreenFocus",
                "height": "35px",
                "id": "btnAddNewMaster0",
                "isVisible": true,
                "right": "0px",
                "skin": "sknButtonGreenBG",
                "text": "Add New Department",
                "top": "4dp",
                "width": "210px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxContentHeader.add(lblHeaderTitle, btnAddNewMaster0);
            var lblHLine0 = new kony.ui.Label({
                "centerX": "50%",
                "height": "1px",
                "id": "lblHLine0",
                "isVisible": true,
                "skin": "sknLblHLine",
                "top": "6dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxDropDown = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45px",
                "id": "flxDropDown",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0px",
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDropDown.setDefaultUnit(kony.flex.DP);
            var lstBoxMaster = new kony.ui.ListBox({
                "centerY": "50%",
                "focusSkin": "sknListBoxMaster",
                "height": "100%",
                "id": "lstBoxMaster",
                "isVisible": true,
                "left": "63px",
                "masterData": [
                    ["0", "Department"],
                    ["1", "Designation"],
                    ["2", "Location"]
                ],
                "onSelection": controller.AS_ListBox_d5d5fa572b0d432eadb553da25218390,
                "selectedKey": "0",
                "selectedKeyValue": ["0", "Department"],
                "skin": "sknListBoxMaster",
                "width": "374px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "multiSelect": false
            });
            var lblInfo = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblInfo",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblDropDownMsg",
                "text": "Select",
                "width": "63px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDropDown.add(lstBoxMaster, lblInfo);
            var lblHLine2 = new kony.ui.Label({
                "centerX": "50%",
                "height": "1px",
                "id": "lblHLine2",
                "isVisible": true,
                "skin": "sknLblHLine",
                "top": "10px",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "42px",
                "id": "flxSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSearch.setDefaultUnit(kony.flex.DP);
            var imgSearch = new kony.ui.Image2({
                "centerY": "50%",
                "height": "16px",
                "id": "imgSearch",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "search.png",
                "width": "16px",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtBoxSearch = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTextBoxSearchFocus",
                "height": "100%",
                "id": "txtBoxSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0px",
                "onDone": controller.AS_TextField_a87dda1f114e48b08df77a965b423330,
                "onTextChange": controller.AS_TextField_b1124cd29221441498bc106460120707,
                "placeholder": "Search",
                "secureTextEntry": false,
                "skin": "sknTxtBoxSearchNormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "9dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            flxSearch.add(imgSearch, txtBoxSearch);
            var lblHLine3 = new kony.ui.Label({
                "centerX": "50%",
                "height": "1px",
                "id": "lblHLine3",
                "isVisible": true,
                "skin": "sknLblHLine",
                "top": "0px",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSegHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "56px",
                "id": "flxSegHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSegHeader.setDefaultUnit(kony.flex.DP);
            var flxCommonHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxCommonHeader",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCommonHeader.setDefaultUnit(kony.flex.DP);
            var flxFilter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxFilter",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0px",
                "skin": "sknFlxTransparentBGPointer",
                "width": "30px",
                "zIndex": 1
            }, {}, {});
            flxFilter.setDefaultUnit(kony.flex.DP);
            var imgArrow = new kony.ui.Image2({
                "centerY": "50%",
                "height": "6px",
                "id": "imgArrow",
                "isVisible": true,
                "right": "0px",
                "skin": "slImage",
                "src": "down_arrow.png",
                "width": "9px",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblFilterText = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblFilterText",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFilterTitle",
                "text": "All",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFilter.add(imgArrow, lblFilterText);
            var lblMasterTitle = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblMasterTitle",
                "isVisible": true,
                "left": "1%",
                "skin": "sknLblMasterTitle",
                "text": "DEPARTMENT",
                "width": "120px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCommonHeader.add(flxFilter, lblMasterTitle);
            var flxLocationHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxLocationHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLocationHeader.setDefaultUnit(kony.flex.DP);
            var lblLocationTitle = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblLocationTitle",
                "isVisible": true,
                "left": "5px",
                "skin": "sknLblMasterTitle",
                "text": "Locations",
                "width": "9%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAddressOneTitle = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblAddressOneTitle",
                "isVisible": true,
                "left": "10%",
                "skin": "sknLblMasterTitle",
                "text": "Address",
                "width": "27.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAddressTwoTitle = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblAddressTwoTitle",
                "isVisible": true,
                "left": "37.50%",
                "skin": "sknLblMasterTitle",
                "text": "Locality",
                "width": "27.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCountryTitle = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblCountryTitle",
                "isVisible": true,
                "left": "65%",
                "right": "228px",
                "skin": "sknLblMasterTitle",
                "text": "Country",
                "width": "10%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCityTitle = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblCityTitle",
                "isVisible": true,
                "left": "75%",
                "right": "133px",
                "skin": "sknLblMasterTitle",
                "text": "City",
                "width": "10%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblZipCodeTitle = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblZipCodeTitle",
                "isVisible": true,
                "left": "85%",
                "right": "53px",
                "skin": "sknLblMasterTitle",
                "text": "Zip Code",
                "width": "10%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLocationHeader.add(lblLocationTitle, lblAddressOneTitle, lblAddressTwoTitle, lblCountryTitle, lblCityTitle, lblZipCodeTitle);
            flxSegHeader.add(flxCommonHeader, flxLocationHeader);
            var lblHLine4 = new kony.ui.Label({
                "centerX": "50%",
                "height": "1px",
                "id": "lblHLine4",
                "isVisible": true,
                "skin": "sknLblHLine",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var segMaster = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "data": [{
                    "imgEdit": "empediticon.png",
                    "imgRemove": "empremoveicon.png",
                    "imgSave": "save.png",
                    "lblId": "Label",
                    "lblName": "Alabama",
                    "txtBoxName": "Hello World"
                }, {
                    "imgEdit": "empediticon.png",
                    "imgRemove": "empremoveicon.png",
                    "imgSave": "save.png",
                    "lblId": "Label",
                    "lblName": "Alabama",
                    "txtBoxName": "Hello World"
                }, {
                    "imgEdit": "empediticon.png",
                    "imgRemove": "empremoveicon.png",
                    "imgSave": "save.png",
                    "lblId": "Label",
                    "lblName": "Alabama",
                    "txtBoxName": "Hello World"
                }],
                "groupCells": false,
                "height": "500px",
                "id": "segMaster",
                "isVisible": false,
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "sknSegMaster",
                "rowTemplate": "flxRoot",
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "f0f0f000",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxEdit": "flxEdit",
                    "flxRemove": "flxRemove",
                    "flxRoot": "flxRoot",
                    "flxSave": "flxSave",
                    "imgEdit": "imgEdit",
                    "imgRemove": "imgRemove",
                    "imgSave": "imgSave",
                    "lblId": "lblId",
                    "lblName": "lblName",
                    "txtBoxName": "txtBoxName"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxAddCommonMasterItem0 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50px",
                "id": "flxAddCommonMasterItem0",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {
                "hoverSkin": "sknFlxWhiteBG"
            });
            flxAddCommonMasterItem0.setDefaultUnit(kony.flex.DP);
            var txtBoxName0 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "100%",
                "id": "txtBoxName0",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "placeholder": "Name",
                "secureTextEntry": false,
                "skin": "sknTxtBoxWhiteBG",
                "text": "Hello World",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            var lblIdSampleTop0 = new kony.ui.Label({
                "id": "lblIdSampleTop0",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblZeroFont",
                "text": "Label",
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSaveTop0 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "25px",
                "id": "flxSaveTop0",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_c20c9fe33f934be1a68d00b2449edc6a,
                "right": "27px",
                "skin": "sknFlxTransparentBGPointer",
                "width": "25px",
                "zIndex": 10
            }, {}, {});
            flxSaveTop0.setDefaultUnit(kony.flex.DP);
            var imgSaveTop0 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgSaveTop0",
                "isVisible": true,
                "skin": "slImage",
                "src": "save.png",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSaveTop0.add(imgSaveTop0);
            var flxDelete = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "25px",
                "id": "flxDelete",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_i2f7da20270c4f7fb59a3bdda30534da,
                "right": "52px",
                "skin": "sknFlxTransparentBGPointer",
                "width": "25px",
                "zIndex": 10
            }, {}, {});
            flxDelete.setDefaultUnit(kony.flex.DP);
            var imgDelete = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgDelete",
                "isVisible": true,
                "skin": "slImage",
                "src": "empremoveicon.png",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDelete.add(imgDelete);
            flxAddCommonMasterItem0.add(txtBoxName0, lblIdSampleTop0, flxSaveTop0, flxDelete);
            var flxSCCommon = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "500px",
                "horizontalScrollIndicator": true,
                "id": "flxSCCommon",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0px",
                "onScrollEnd": controller.AS_FlexScrollContainer_a7dc81ecd1d04f5986f7998b8373fac4,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "101.50%",
                "zIndex": 1
            }, {}, {});
            flxSCCommon.setDefaultUnit(kony.flex.DP);
            flxSCCommon.add();
            flxContentMaster.add(flxContentHeader, lblHLine0, flxDropDown, lblHLine2, flxSearch, lblHLine3, flxSegHeader, lblHLine4, segMaster, flxAddCommonMasterItem0, flxSCCommon);
            var flxGreyBG = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxGreyBG",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxBlurBG",
                "width": "100%",
                "zIndex": 20
            }, {}, {});
            flxGreyBG.setDefaultUnit(kony.flex.DP);
            flxGreyBG.add();
            var flxBottomAction = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "102px",
                "clipBounds": true,
                "height": "35px",
                "id": "flxBottomAction",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "308px",
                "minWidth": "600px",
                "right": "48px",
                "skin": "slFbox",
                "zIndex": 20
            }, {}, {});
            flxBottomAction.setDefaultUnit(kony.flex.DP);
            var btnAddNewMaster1 = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknButtonGreenFocus",
                "height": "35px",
                "id": "btnAddNewMaster1",
                "isVisible": true,
                "left": "0px",
                "skin": "sknButtonGreenBG",
                "text": "Add New Department",
                "top": "4dp",
                "width": "232px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBottomAction.add(btnAddNewMaster1);
            flxRoot.add(empheader, leftmenu, flxContentMaster, flxGreyBG, flxBottomAction);
            var flxEmpLocationInfoContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "300px",
                "id": "flxEmpLocationInfoContainer",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "skin": "sknFlxWhiteBGRounded",
                "width": "600px",
                "zIndex": 1
            }, {}, {});
            flxEmpLocationInfoContainer.setDefaultUnit(kony.flex.DP);
            var flxAddress1Root = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxAddress1Root",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "right": "10dp",
                "skin": "slFbox",
                "top": "10dp",
                "width": "580px",
                "zIndex": 1
            }, {}, {});
            flxAddress1Root.setDefaultUnit(kony.flex.DP);
            var lblAddressTitle = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblAddressTitle",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblMasterTitle",
                "text": "Address",
                "top": "0dp",
                "width": "100px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtBoxAddress1 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "100%",
                "id": "txtBoxAddress1",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "placeholder": "Address",
                "secureTextEntry": false,
                "skin": "sknTxtBoxSearchNormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "14dp",
                "width": "480px",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            flxAddress1Root.add(lblAddressTitle, txtBoxAddress1);
            var lblHLineLocation0 = new kony.ui.Label({
                "centerX": "50%",
                "height": "1px",
                "id": "lblHLineLocation0",
                "isVisible": true,
                "skin": "sknLblHLine",
                "top": "0px",
                "width": "580px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxAddress2Root = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxAddress2Root",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "right": "10dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "580px",
                "zIndex": 1
            }, {}, {});
            flxAddress2Root.setDefaultUnit(kony.flex.DP);
            var lblAddress2Title = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblAddress2Title",
                "isVisible": true,
                "left": "1dp",
                "skin": "sknLblMasterTitle",
                "text": "Locality",
                "top": "0dp",
                "width": "100px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtBoxAddress2 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "100%",
                "id": "txtBoxAddress2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "placeholder": "Locality",
                "secureTextEntry": false,
                "skin": "sknTxtBoxSearchNormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "14dp",
                "width": "480px",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            flxAddress2Root.add(lblAddress2Title, txtBoxAddress2);
            var lblHLineLocation1 = new kony.ui.Label({
                "centerX": "50%",
                "height": "1px",
                "id": "lblHLineLocation1",
                "isVisible": true,
                "skin": "sknLblHLine",
                "top": "0px",
                "width": "580px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxCityZip = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxCityZip",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "10dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "580px",
                "zIndex": 1
            }, {}, {});
            flxCityZip.setDefaultUnit(kony.flex.DP);
            var lblEmpCityTitle = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEmpCityTitle",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblMasterTitle",
                "text": "City",
                "top": "0dp",
                "width": "60px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtBoxEmpCity = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "100%",
                "id": "txtBoxEmpCity",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "60dp",
                "placeholder": "City",
                "secureTextEntry": false,
                "skin": "sknTxtBoxSearchNormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "220px",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            var lblEmpVLine0 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "95%",
                "id": "lblEmpVLine0",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHLine",
                "width": "2px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblEmpZip = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEmpZip",
                "isVisible": true,
                "left": "300dp",
                "skin": "sknLblMasterTitle",
                "text": "Zip",
                "width": "60px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtBoxEmpZip = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "100%",
                "id": "txtBoxEmpZip",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "355px",
                "placeholder": "zip code",
                "secureTextEntry": false,
                "skin": "sknTxtBoxSearchNormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "width": "220px",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            flxCityZip.add(lblEmpCityTitle, txtBoxEmpCity, lblEmpVLine0, lblEmpZip, txtBoxEmpZip);
            var lblHLineLocation2 = new kony.ui.Label({
                "centerX": "50%",
                "height": "1px",
                "id": "lblHLineLocation2",
                "isVisible": true,
                "skin": "sknLblHLine",
                "top": "0px",
                "width": "580px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxStateCountry = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxStateCountry",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "10dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "580px",
                "zIndex": 1
            }, {}, {});
            flxStateCountry.setDefaultUnit(kony.flex.DP);
            var lbEmpState = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lbEmpState",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblMasterTitle",
                "text": "State",
                "top": "0dp",
                "width": "60px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtBoxEmpState = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "100%",
                "id": "txtBoxEmpState",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "60dp",
                "placeholder": "State",
                "secureTextEntry": false,
                "skin": "sknTxtBoxSearchNormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "220px",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            var lblEmpVLine2 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "95%",
                "id": "lblEmpVLine2",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHLine",
                "width": "2px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblEmpCountry = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEmpCountry",
                "isVisible": true,
                "left": "300dp",
                "skin": "sknLblMasterTitle",
                "text": "Country",
                "width": "60px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var textBoxCountry = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "100%",
                "id": "textBoxCountry",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "355px",
                "placeholder": "Country",
                "secureTextEntry": false,
                "skin": "sknTxtBoxSearchNormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "220dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            flxStateCountry.add(lbEmpState, txtBoxEmpState, lblEmpVLine2, lblEmpCountry, textBoxCountry);
            var lblHLineLocation3 = new kony.ui.Label({
                "centerX": "50%",
                "height": "1px",
                "id": "lblHLineLocation3",
                "isVisible": true,
                "skin": "sknLblHLine",
                "top": "0px",
                "width": "580px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblLocationId = new kony.ui.Label({
                "height": "0%",
                "id": "lblLocationId",
                "isVisible": true,
                "left": "50%",
                "skin": "defLabel",
                "text": "LocationId",
                "top": "0dp",
                "width": "0%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLocationActions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxLocationActions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "41dp",
                "skin": "slFbox",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLocationActions.setDefaultUnit(kony.flex.DP);
            var btnSave = new kony.ui.Button({
                "centerX": "30%",
                "centerY": "50%",
                "focusSkin": "sknButtonGreenFocus",
                "height": "40dp",
                "id": "btnSave",
                "isVisible": true,
                "onClick": controller.AS_Button_d45b8de6e5d843d0a828f429ca99ebb5,
                "skin": "sknButtonGreenBG",
                "text": "Save",
                "top": "28dp",
                "width": "180dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCancel = new kony.ui.Button({
                "centerX": "70%",
                "centerY": "50%",
                "focusSkin": "sknButtonGreenFocus",
                "height": "40dp",
                "id": "btnCancel",
                "isVisible": true,
                "onClick": controller.AS_Button_d43289ef88c34a2c95ef6027b5707ad6,
                "skin": "sknButtonGreenBG",
                "text": "Cancel",
                "width": "180dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLocationActions.add(btnSave, btnCancel);
            flxEmpLocationInfoContainer.add(flxAddress1Root, lblHLineLocation0, flxAddress2Root, lblHLineLocation1, flxCityZip, lblHLineLocation2, flxStateCountry, lblHLineLocation3, lblLocationId, flxLocationActions);
            var flxOverlay = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1032px",
                "id": "flxOverlay",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_ae2bb3a1207f4803b183e5b6bd38b982,
                "skin": "sknFlxOverlayTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxOverlay.setDefaultUnit(kony.flex.DP);
            var flxProfileMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "190px",
                "id": "flxProfileMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "right": "40px",
                "skin": "sknFlxProfileMain",
                "top": "57px",
                "width": "154px",
                "zIndex": 50
            }, {}, {});
            flxProfileMain.setDefaultUnit(kony.flex.DP);
            var imgProfileDropDown = new kony.ui.Image2({
                "centerX": "50%",
                "height": "15px",
                "id": "imgProfileDropDown",
                "isVisible": true,
                "left": "6dp",
                "skin": "slImage",
                "src": "drop_down_menu.png",
                "top": "0dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxProfile = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "flxProfile",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxProfile",
                "top": "-5px",
                "width": "100%",
                "zIndex": 500
            }, {}, {});
            flxProfile.setDefaultUnit(kony.flex.DP);
            var flxEditProfile = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "35px",
                "id": "flxEditProfile",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20px",
                "skin": "slFbox",
                "top": "15px",
                "width": "120px",
                "zIndex": 50
            }, {}, {});
            flxEditProfile.setDefaultUnit(kony.flex.DP);
            var lblEditProfile = new kony.ui.Label({
                "centerY": "50%",
                "height": "18px",
                "id": "lblEditProfile",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblProfileNormal",
                "text": "Edit Profile",
                "top": "6dp",
                "width": "120px",
                "zIndex": 50
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "sknLablProfileFocus"
            });
            flxEditProfile.add(lblEditProfile);
            var lblLineEditProfile = new kony.ui.Label({
                "height": "1px",
                "id": "lblLineEditProfile",
                "isVisible": true,
                "left": "17px",
                "skin": "SknLblLine",
                "top": "0px",
                "width": "120px",
                "zIndex": 500
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLogout = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "35px",
                "id": "flxLogout",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20px",
                "onClick": controller.AS_FlexContainer_fa8ed801e4994f4b9282f110189399ad,
                "skin": "slFbox",
                "top": "0px",
                "width": "120px",
                "zIndex": 1
            }, {}, {});
            flxLogout.setDefaultUnit(kony.flex.DP);
            var lblLogout = new kony.ui.Label({
                "centerY": "50%",
                "height": "100px",
                "id": "lblLogout",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblProfileNormal",
                "text": "Logout",
                "top": "6dp",
                "width": "120px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "sknLablProfileFocus"
            });
            flxLogout.add(lblLogout);
            var lblLineLogout = new kony.ui.Label({
                "height": "1px",
                "id": "lblLineLogout",
                "isVisible": true,
                "left": "17px",
                "skin": "SknLblLine",
                "top": "0px",
                "width": "120px",
                "zIndex": 500
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxProfile.add(flxEditProfile, lblLineEditProfile, flxLogout, lblLineLogout);
            flxProfileMain.add(imgProfileDropDown, flxProfile);
            flxOverlay.add(flxProfileMain);
            var flxAlertContainer2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1450px",
                "id": "flxAlertContainer2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "minWidth": "1374px",
                "onClick": controller.AS_FlexContainer_c11c871d7c4a44ae929b042361d7b1b7,
                "skin": "sknFlxOverlayTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxAlertContainer2.setDefaultUnit(kony.flex.DP);
            var alertmsg = new com.konyemp.alertmsg.alertmsg({
                "clipBounds": true,
                "height": "1128px",
                "id": "alertmsg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            alertmsg.onAlertFlexClick = controller.AS_UWI_b569ccf7746848a98df3fb3f2c1ed751;
            flxAlertContainer2.add(alertmsg);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1200,
                "780": {
                    "leftmenu": {
                        "isVisible": false,
                        "instanceId": "leftmenu"
                    },
                    "flxContentMaster": {
                        "left": {
                            "type": "string",
                            "value": "10px"
                        }
                    }
                },
                "1024": {
                    "flxProfileMain": {}
                }
            }
            this.add(flxRoot, flxEmpLocationInfoContainer, flxOverlay, flxAlertContainer2);
        };
        return [{
            "addWidgets": addWidgetsfrmSetting,
            "enabledForIdleTimeout": false,
            "id": "frmSetting",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_d1ceb8b49e804c958faa2d003436a973,
            "skin": "slForm",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 780, 1024, 1200]
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});