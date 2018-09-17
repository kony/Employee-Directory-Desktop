define("frmEmpDetails", function() {
    return function(controller) {
        function addWidgetsfrmEmpDetails() {
            this.setDefaultUnit(kony.flex.PX);
            var flxRoot = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1032px",
                "id": "flxRoot",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "minWidth": "1200px",
                "onClick": controller.AS_FlexContainer_cbf161949265483fb3a25ffda5bad164,
                "skin": "sknFlxLightGrey",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoot.setDefaultUnit(kony.flex.DP);
            var leftmenu = new com.sa.leftmenu({
                "clipBounds": true,
                "height": "100%",
                "id": "leftmenu",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "sknFlxLeftMenu",
                "top": "88px",
                "width": "260px"
            }, {}, {});
            leftmenu.SettingsMenu.onClick = controller.AS_FlexContainer_f34ed8b4c5f448859b3e5d1b5f16eb6a;
            leftmenu.imgDirectory.src = "list_icon_hover.png";
            leftmenu.imgYellowBorderSettings.isVisible = false;
            leftmenu.top = "88px";
            leftmenu.width = "260px";
            var empheader = new com.konysa.empheader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "88px",
                "id": "empheader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "skin2f2bc440",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            empheader.onUserFlxClick = controller.AS_UWI_bcf419b0a31d4368b84adca095b91995;
            var EditProfile = new kony.ui.FlexContainer({
                "clipBounds": true,
                "focusSkin": "skind19bc890",
                "height": "100%",
                "id": "EditProfile",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "308px",
                "minWidth": "600px",
                "right": "48px",
                "skin": "skind19bc890",
                "top": "130px",
                "zIndex": 0
            }, {}, {});
            EditProfile.setDefaultUnit(kony.flex.DP);
            var flxEditProfileHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "skind188dcd0",
                "height": "40px",
                "id": "flxEditProfileHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "skind188dcd0",
                "top": "0%",
                "width": "100%",
                "zIndex": 0
            }, {}, {});
            flxEditProfileHeader.setDefaultUnit(kony.flex.DP);
            var flxClose = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "35px",
                "id": "flxClose",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0px",
                "skin": "sknFlxTransparentBGPointer",
                "width": "114px",
                "zIndex": 2
            }, {}, {
                "hoverSkin": "CopysknFlxTransparentBGPointer0df561a4a32cf4c"
            });
            flxClose.setDefaultUnit(kony.flex.DP);
            var btnClose = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "35px",
                "id": "btnClose",
                "isVisible": true,
                "right": "0px",
                "skin": "skind18affb0",
                "text": "Close",
                "width": "114px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "Copyskind0edd600b098d14a"
            });
            flxClose.add(btnClose);
            var flxEditSave = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopyslFbox0e0221aa01c724c",
                "height": "35px",
                "id": "flxEditSave",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0px",
                "skin": "sknFlxEditSave",
                "top": "780px",
                "width": "114px",
                "zIndex": 1
            }, {}, {});
            flxEditSave.setDefaultUnit(kony.flex.DP);
            var btnEdiSaveBottom = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "CopydefBtnFocus0fdf392e1cc2240",
                "height": "35px",
                "id": "btnEdiSaveBottom",
                "isVisible": true,
                "skin": "sknBtnEditSaveBottom",
                "text": "Save",
                "width": "114px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "CopydefBtnNormal0ce7fb8f097a140"
            });
            flxEditSave.add(btnEdiSaveBottom);
            var flxEditSaveTop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "55%",
                "clipBounds": true,
                "height": "35px",
                "id": "flxEditSaveTop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "130px",
                "skin": "sknFlxTransparentBGPointer",
                "width": "114px",
                "zIndex": 2
            }, {}, {
                "hoverSkin": "CopysknFlxTransparentBGPointer0eb50a92ed66f4f"
            });
            flxEditSaveTop.setDefaultUnit(kony.flex.DP);
            var btnEdiSaveTop = new kony.ui.Label({
                "centerX": "50.00%",
                "centerY": "50.00%",
                "height": "35px",
                "id": "btnEdiSaveTop",
                "isVisible": true,
                "skin": "skind18affb0",
                "text": "Save",
                "top": 0,
                "width": "114px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "Copyskind0bda01e89883f4f"
            });
            flxEditSaveTop.add(btnEdiSaveTop);
            var lblEditProfileHeading = new kony.ui.Label({
                "height": "100%",
                "id": "lblEditProfileHeading",
                "isVisible": true,
                "left": "0%",
                "skin": "skind189ee40",
                "text": "Edit Profile",
                "top": "3.92%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var profileDetails = new kony.ui.Label({
                "height": "100%",
                "id": "profileDetails",
                "isVisible": false,
                "left": "0dp",
                "skin": "sknLblProfileHeading",
                "text": "Profile Details",
                "top": "4%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEditProfileHeader.add(flxClose, flxEditSave, flxEditSaveTop, lblEditProfileHeading, profileDetails);
            var lineDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "skind1892af1",
                "height": "1px",
                "id": "lineDummy",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "skind1892af1",
                "top": "0.50%",
                "width": "88.79%",
                "zIndex": 1
            }, {}, {});
            lineDummy.setDefaultUnit(kony.flex.DP);
            lineDummy.add();
            var flxEmployeeInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "175px",
                "id": "flxEmployeeInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "1%",
                "width": "100%",
                "zIndex": 35
            }, {}, {});
            flxEmployeeInfo.setDefaultUnit(kony.flex.DP);
            var flxProfilePickSelection = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxProfilePickSelection",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "skin": "sknFlxTransparentBGPointer",
                "top": "0%",
                "width": "148px",
                "zIndex": 23
            }, {}, {});
            flxProfilePickSelection.setDefaultUnit(kony.flex.DP);
            var flxProfileImage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "140px",
                "id": "flxProfileImage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "skinFlexRoundGreyBorder",
                "top": "5px",
                "width": "148px"
            }, {}, {});
            flxProfileImage.setDefaultUnit(kony.flex.DP);
            var imgEmpImage = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgEmpImage",
                "isVisible": true,
                "skin": "slImage",
                "src": "imagedrag.png",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxProfileImage.add(imgEmpImage);
            var UpdateProfilePictu = new kony.ui.Label({
                "centerX": "50%",
                "height": "12.43%",
                "id": "UpdateProfilePictu",
                "isVisible": true,
                "skin": "skind1970da0",
                "text": "Update Profile Picture",
                "top": "5px",
                "width": "144px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxProfilePickSelection.add(flxProfileImage, UpdateProfilePictu);
            var flxEmpNameDept = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxEmpNameDept",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "301px",
                "skin": "slFbox",
                "top": "0%",
                "width": "50%",
                "zIndex": 12
            }, {}, {});
            flxEmpNameDept.setDefaultUnit(kony.flex.DP);
            var lblTitleFullName = new kony.ui.Label({
                "centerY": "45%",
                "height": "40px",
                "id": "lblTitleFullName",
                "isVisible": true,
                "left": "0%",
                "skin": "skind189ee40",
                "text": "Jeremiah Crosman",
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTitleDesignation = new kony.ui.Label({
                "centerY": "60%",
                "height": "30px",
                "id": "lblTitleDesignation",
                "isVisible": true,
                "left": "0%",
                "skin": "skind18e5b10",
                "text": "IT Administrator",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEmpNameDept.add(lblTitleFullName, lblTitleDesignation);
            flxEmployeeInfo.add(flxProfilePickSelection, flxEmpNameDept);
            var flxEmployeeDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "510px",
                "id": "flxEmployeeDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 35
            }, {}, {});
            flxEmployeeDetails.setDefaultUnit(kony.flex.DP);
            var flxEmpId = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50px",
                "id": "flxEmpId",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEmpId.setDefaultUnit(kony.flex.DP);
            var lblEmpId = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEmpId",
                "isVisible": true,
                "left": "0px",
                "skin": "skind18dbed0",
                "text": "ID",
                "top": "0%",
                "width": "300px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtEmpId = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "skind1938b30",
                "height": "100%",
                "id": "txtEmpId",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "301px",
                "placeholder": "Employee ID",
                "right": "0px",
                "secureTextEntry": false,
                "skin": "skind1938b30",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "zIndex": 21
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            var lblEmpIdValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEmpIdValue",
                "isVisible": true,
                "left": "301px",
                "right": "0px",
                "skin": "sknEmpDetailsValue",
                "text": "Employee ID",
                "top": "0%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEmpId.add(lblEmpId, txtEmpId, lblEmpIdValue);
            var lblHLine0 = new kony.ui.Label({
                "height": "1px",
                "id": "lblHLine0",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHLine",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxFirstName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50px",
                "id": "flxFirstName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFirstName.setDefaultUnit(kony.flex.DP);
            var lblEmployeeFirstName = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEmployeeFirstName",
                "isVisible": true,
                "left": "0px",
                "skin": "skind18dbed0",
                "text": "First Name",
                "top": "0%",
                "width": "300px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtFirstName = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "skind1938b30",
                "height": "100%",
                "id": "txtFirstName",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "301px",
                "right": "0px",
                "secureTextEntry": false,
                "skin": "skind1938b30",
                "text": "Jeremaiah",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "zIndex": 21
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            var lblEmployeeFirstNameValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEmployeeFirstNameValue",
                "isVisible": true,
                "left": "301px",
                "right": "0px",
                "skin": "sknEmpDetailsValue",
                "text": "First Name",
                "top": "0%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFirstName.add(lblEmployeeFirstName, txtFirstName, lblEmployeeFirstNameValue);
            var lblHLine1 = new kony.ui.Label({
                "height": "1px",
                "id": "lblHLine1",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHLine",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLastName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50px",
                "id": "flxLastName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLastName.setDefaultUnit(kony.flex.DP);
            var lblLastName = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblLastName",
                "isVisible": true,
                "left": "0%",
                "skin": "skind18dbed0",
                "text": "Last Name",
                "width": "28.57%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtLastName = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "skind1938b30",
                "height": "100%",
                "id": "txtLastName",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "301px",
                "right": "0px",
                "secureTextEntry": false,
                "skin": "skind1938b30",
                "text": "Crosman",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "zIndex": 21
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            var lblLastNameValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblLastNameValue",
                "isVisible": true,
                "left": "301px",
                "right": "0px",
                "skin": "sknEmpDetailsValue",
                "text": "Last Name",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLastName.add(lblLastName, txtLastName, lblLastNameValue);
            var lblHLine2 = new kony.ui.Label({
                "height": "1px",
                "id": "lblHLine2",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHLine",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxDesignation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50px",
                "id": "flxDesignation",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDesignation.setDefaultUnit(kony.flex.DP);
            var lblDesignation = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblDesignation",
                "isVisible": true,
                "left": "0%",
                "skin": "skind18dbed0",
                "text": "Designation",
                "width": "28.57%",
                "zIndex": 13
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var listboxDesignation = new kony.ui.ListBox({
                "centerY": "50%",
                "focusSkin": "defListBoxFocus",
                "height": "100%",
                "id": "listboxDesignation",
                "isVisible": false,
                "left": "301px",
                "masterData": [
                    ["lb1", "Placeholder One"],
                    ["lb2", "Placeholder Two"],
                    ["lb3", "Placeholder Three"]
                ],
                "right": "0px",
                "selectedKey": "lb1",
                "selectedKeyValue": ["lb1", "Placeholder One"],
                "skin": "sknListBox",
                "zIndex": 35
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "multiSelect": false
            });
            var lblDesignationValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblDesignationValue",
                "isVisible": true,
                "left": "301px",
                "right": "0px",
                "skin": "sknEmpDetailsValue",
                "text": "Designation",
                "width": "70%",
                "zIndex": 13
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDesignation.add(lblDesignation, listboxDesignation, lblDesignationValue);
            var lblHLine3 = new kony.ui.Label({
                "height": "1px",
                "id": "lblHLine3",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHLine",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxDepartment = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50px",
                "id": "flxDepartment",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDepartment.setDefaultUnit(kony.flex.DP);
            var lblDepartment = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblDepartment",
                "isVisible": true,
                "left": "0%",
                "skin": "skind18dbed0",
                "text": "Department",
                "width": "28.57%",
                "zIndex": 15
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var listboxDepartment = new kony.ui.ListBox({
                "centerY": "50%",
                "focusSkin": "defListBoxFocus",
                "height": "100%",
                "id": "listboxDepartment",
                "isVisible": false,
                "left": "301px",
                "masterData": [
                    ["lb1", "Placeholder One"],
                    ["lb2", "Placeholder Two"],
                    ["lb3", "Placeholder Three"]
                ],
                "right": "0px",
                "skin": "sknListBox",
                "zIndex": 35
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "multiSelect": false
            });
            var lblDepartmentValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblDepartmentValue",
                "isVisible": true,
                "left": "301px",
                "right": "0px",
                "skin": "sknEmpDetailsValue",
                "text": "Department",
                "zIndex": 15
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDepartment.add(lblDepartment, listboxDepartment, lblDepartmentValue);
            var lblHLine4 = new kony.ui.Label({
                "height": "1px",
                "id": "lblHLine4",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHLine",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxReporting = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50px",
                "id": "flxReporting",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReporting.setDefaultUnit(kony.flex.DP);
            var lblReportingTo = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblReportingTo",
                "isVisible": true,
                "left": "0%",
                "skin": "skind18dbed0",
                "text": "Reporting To",
                "width": "28.57%",
                "zIndex": 16
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var listboxManager = new kony.ui.ListBox({
                "centerY": "50%",
                "focusSkin": "defListBoxFocus",
                "height": "100%",
                "id": "listboxManager",
                "isVisible": false,
                "left": "301px",
                "masterData": [
                    ["lb1", "Placeholder One"],
                    ["lb2", "Placeholder Two"],
                    ["lb3", "Placeholder Three"]
                ],
                "right": "0px",
                "skin": "sknListBox",
                "zIndex": 35
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "multiSelect": false
            });
            var lblReportingToValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblReportingToValue",
                "isVisible": true,
                "left": "301px",
                "right": "0px",
                "skin": "sknEmpDetailsValue",
                "text": "Reporting To",
                "zIndex": 16
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxReporting.add(lblReportingTo, listboxManager, lblReportingToValue);
            var lblHLine5 = new kony.ui.Label({
                "height": "1px",
                "id": "lblHLine5",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHLine",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxMobNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50px",
                "id": "flxMobNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMobNumber.setDefaultUnit(kony.flex.DP);
            var lblMobileNumber = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblMobileNumber",
                "isVisible": true,
                "left": "0%",
                "skin": "skind18dbed0",
                "text": "Mobile Number",
                "width": "28.57%",
                "zIndex": 19
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtMobileNumber = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "skind1938b30",
                "height": "100%",
                "id": "txtMobileNumber",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "301px",
                "right": "0px",
                "secureTextEntry": false,
                "skin": "skind1938b30",
                "text": "040 66784675",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "zIndex": 21
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            var lblMobileNumberValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblMobileNumberValue",
                "isVisible": true,
                "left": "301px",
                "right": "0px",
                "skin": "sknEmpDetailsValue",
                "text": "Reporting To",
                "zIndex": 16
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMobNumber.add(lblMobileNumber, txtMobileNumber, lblMobileNumberValue);
            var lblHLine6 = new kony.ui.Label({
                "height": "1px",
                "id": "lblHLine6",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHLine",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxWorkNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50px",
                "id": "flxWorkNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxWorkNumber.setDefaultUnit(kony.flex.DP);
            var lblWorkNumber = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblWorkNumber",
                "isVisible": true,
                "left": "0%",
                "skin": "skind18dbed0",
                "text": "Work Number",
                "width": "28.57%",
                "zIndex": 20
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtWorkNumber = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "skind1938b30",
                "height": "100%",
                "id": "txtWorkNumber",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "301px",
                "right": "0px",
                "secureTextEntry": false,
                "skin": "skind1938b30",
                "text": "9823874923",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "zIndex": 21
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            var lblWorkNumberValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblWorkNumberValue",
                "isVisible": true,
                "left": "301px",
                "right": "0px",
                "skin": "sknEmpDetailsValue",
                "text": "Work Number",
                "zIndex": 20
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxWorkNumber.add(lblWorkNumber, txtWorkNumber, lblWorkNumberValue);
            var lblHLine7 = new kony.ui.Label({
                "height": "1px",
                "id": "lblHLine7",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHLine",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50px",
                "id": "flxEmail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEmail.setDefaultUnit(kony.flex.DP);
            var lblEmailId = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEmailId",
                "isVisible": true,
                "left": "0%",
                "skin": "skind18dbed0",
                "text": "Email ID",
                "width": "28.57%",
                "zIndex": 19
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtEmailId = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "skind1938b30",
                "height": "100%",
                "id": "txtEmailId",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "301px",
                "right": "0px",
                "secureTextEntry": false,
                "skin": "skind1938b30",
                "text": "jeremaiah@kony.com",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "zIndex": 21
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            var lblEmailIdValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEmailIdValue",
                "isVisible": true,
                "left": "301px",
                "right": "0px",
                "skin": "sknEmpDetailsValue",
                "text": "Email ID",
                "zIndex": 19
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEmail.add(lblEmailId, txtEmailId, lblEmailIdValue);
            var blHLine8 = new kony.ui.Label({
                "height": "1px",
                "id": "blHLine8",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHLine",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLocation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50px",
                "id": "flxLocation",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLocation.setDefaultUnit(kony.flex.PX);
            var lblLocation = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblLocation",
                "isVisible": true,
                "left": "0%",
                "skin": "skind18dbed0",
                "text": "Location",
                "width": "28.57%",
                "zIndex": 20
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var listBoxLocation = new kony.ui.ListBox({
                "centerY": "50%",
                "focusSkin": "CopydefListBoxFocus0iafe70309c7b48",
                "height": "100%",
                "id": "listBoxLocation",
                "isVisible": false,
                "left": "301px",
                "masterData": [
                    ["lb1", "Placeholder One"],
                    ["lb2", "Placeholder Two"],
                    ["lb3", "Placeholder Three"]
                ],
                "right": "0px",
                "skin": "sknListBox",
                "zIndex": 35
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "multiSelect": false
            });
            var lblLocationValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblLocationValue",
                "isVisible": true,
                "left": "301px",
                "right": "0px",
                "skin": "sknEmpDetailsValue",
                "text": "Location",
                "zIndex": 20
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLocation.add(lblLocation, listBoxLocation, lblLocationValue);
            var lblHLine9 = new kony.ui.Label({
                "height": "1px",
                "id": "lblHLine9",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHLine",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEmployeeDetails.add(flxEmpId, lblHLine0, flxFirstName, lblHLine1, flxLastName, lblHLine2, flxDesignation, lblHLine3, flxDepartment, lblHLine4, flxReporting, lblHLine5, flxMobNumber, lblHLine6, flxWorkNumber, lblHLine7, flxEmail, blHLine8, flxLocation, lblHLine9);
            var lblFooter = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblFooter",
                "isVisible": true,
                "skin": "sknLblFooter",
                "text": "© Copyright 2018 Kony, Inc. All Rights Reserved.",
                "top": "180px",
                "width": "100%",
                "zIndex": 35
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            EditProfile.add(flxEditProfileHeader, lineDummy, flxEmployeeInfo, flxEmployeeDetails, lblFooter);
            flxRoot.add(leftmenu, empheader, EditProfile);
            var flxOverlay = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1032px",
                "id": "flxOverlay",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_hdb2384aecd343e5b59944a15403dc35,
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
                "zIndex": 100
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
                "onClick": controller.AS_FlexContainer_bf0e3552f7da49e3a72d795b03d899f9,
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
            var flxAlertContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": 300,
                "clipBounds": true,
                "height": "1450px",
                "id": "flxAlertContainer",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "minWidth": "1372px",
                "onClick": controller.AS_FlexContainer_a5f3ee6c3fba4645a931e6fc41cb0e38,
                "skin": "sknFlxOverlayTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxAlertContainer.setDefaultUnit(kony.flex.DP);
            var alertmsg = new com.konyemp.alertmsg.alertmsg({
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "alertmsg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "sknFlxOverlayTrans",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            alertmsg.onAlertFlexClick = controller.AS_UWI_f4448ed9c41f439fac88e2095710c4d3;
            flxAlertContainer.add(alertmsg);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1374,
            }
            this.add(flxRoot, flxOverlay, flxAlertContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmEmpDetails,
            "enabledForIdleTimeout": false,
            "id": "frmEmpDetails",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_d19e3990,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 780, 1024, 1374]
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