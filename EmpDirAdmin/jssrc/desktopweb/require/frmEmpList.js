define("frmEmpList", function() {
    return function(controller) {
        function addWidgetsfrmEmpList() {
            this.setDefaultUnit(kony.flex.DP);
            var flxRoot = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1032px",
                "id": "flxRoot",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0px",
                "minWidth": "1374px",
                "onClick": controller.AS_FlexContainer_c1de1e75561d4fd5a8b6d12047422bef,
                "skin": "sknFlxLightGrey",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxRoot.setDefaultUnit(kony.flex.DP);
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
                "width": "100%",
                "zIndex": 50
            }, {}, {});
            empheader.onUserFlxClick = controller.AS_UWI_ab2a8e35a9e34246be947c938a5a7255;
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
            leftmenu.SettingsMenu.onClick = controller.AS_FlexContainer_a184b1249fd74af1815de5f987260679;
            leftmenu.imgDirectory.src = "list_icon_hover.png";
            leftmenu.imgYellowBorderSettings.isVisible = false;
            leftmenu.left = "0dp";
            leftmenu.top = "88px";
            leftmenu.width = "260px";
            var flxList = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80%",
                "id": "flxList",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "308px",
                "minWidth": "1011px",
                "right": "48px",
                "skin": "slFbox",
                "top": "120px"
            }, {}, {});
            flxList.setDefaultUnit(kony.flex.DP);
            var flxListHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknHeader",
                "height": "40px",
                "id": "flxListHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.00%",
                "skin": "sknHeader",
                "top": "0.00%",
                "width": "100%",
                "zIndex": 25
            }, {}, {});
            flxListHeader.setDefaultUnit(kony.flex.DP);
            var flxBtnAddNewEmployee = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "35px",
                "id": "flxBtnAddNewEmployee",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_jbd614b975ea4ca6ab5882e27b740812,
                "right": "0px",
                "width": "20%",
                "zIndex": 500
            }, {}, {});
            flxBtnAddNewEmployee.setDefaultUnit(kony.flex.DP);
            var Rectangle6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "skin2de8dff0",
                "height": "35px",
                "id": "Rectangle6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxTransparentBGPointer",
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            Rectangle6.setDefaultUnit(kony.flex.DP);
            var AddNewEmployee = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "AddNewEmployee",
                "isVisible": false,
                "skin": "CopysknAddNew0f073c84c96a14b",
                "text": "Add New Employee",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "Copyskind0j106bdb0d19e49"
            });
            var btnAddNewEmp = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknButtonGreenBG",
                "height": "100%",
                "id": "btnAddNewEmp",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_d54b47820677405ea2faed36533ac5f1,
                "skin": "sknButtonGreenBG",
                "text": "Add New Employee",
                "top": "0dp",
                "width": "100%",
                "zIndex": 50
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            Rectangle6.add(AddNewEmployee, btnAddNewEmp);
            flxBtnAddNewEmployee.add(Rectangle6);
            var EmployeeListDire = new kony.ui.Label({
                "centerY": "50%",
                "height": "40px",
                "id": "EmployeeListDire",
                "isVisible": true,
                "left": "0%",
                "skin": "sknEmpHeading",
                "text": "Employee List / Directory",
                "width": "350px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxListHeader.add(flxBtnAddNewEmployee, EmployeeListDire);
            var lblLine = new kony.ui.Label({
                "height": "1dp",
                "id": "lblLine",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknDummyLine",
                "top": "5px",
                "width": "100%",
                "zIndex": 31
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSearchHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknSearchBar",
                "height": "25px",
                "id": "flxSearchHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknSearchBar",
                "top": "3%",
                "width": "100%",
                "zIndex": 31
            }, {}, {});
            flxSearchHeader.setDefaultUnit(kony.flex.DP);
            var Group = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "81.82%",
                "id": "Group",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "onClick": controller.AS_FlexContainer_c9c6a29e0bda4fe5bd2ef0b65c8c9435,
                "right": "2px",
                "top": "9.09%",
                "width": "7%",
                "zIndex": 1
            }, {}, {});
            Group.setDefaultUnit(kony.flex.DP);
            var imgDropDown = new kony.ui.Image2({
                "centerY": "50%",
                "height": "7px",
                "id": "imgDropDown",
                "isVisible": true,
                "right": "0px",
                "skin": "slImage",
                "src": "imgtriangle140369768619648.png",
                "width": "11px",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Filter = new kony.ui.Label({
                "height": "100%",
                "id": "Filter",
                "isVisible": true,
                "left": "5px",
                "right": "5px",
                "skin": "sknFilterNormal",
                "text": "Filter",
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            Group.add(imgDropDown, Filter);
            var Group10 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "81.82%",
                "id": "Group10",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "96.44%",
                "top": "9.09%",
                "width": "3.56%",
                "zIndex": 2
            }, {}, {});
            Group10.setDefaultUnit(kony.flex.DP);
            var Triangle140305046484928 = new kony.ui.FlexContainer({
                "clipBounds": false,
                "focusSkin": "skina051d0b0",
                "height": "33.33%",
                "id": "Triangle140305046484928",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "74.29%",
                "skin": "skina051d0b0",
                "top": "33.33%",
                "width": "25.71%",
                "zIndex": 0
            }, {}, {});
            Triangle140305046484928.setDefaultUnit(kony.flex.DP);
            Triangle140305046484928.add();
            var All = new kony.ui.Label({
                "height": "100%",
                "id": "All",
                "isVisible": true,
                "left": "0%",
                "skin": "sknFilterNormal",
                "text": "All",
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            Group10.add(Triangle140305046484928, All);
            var flxSearchImage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "16px",
                "id": "flxSearchImage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "top": "13.64%",
                "width": "16px",
                "zIndex": 3
            }, {}, {});
            flxSearchImage.setDefaultUnit(kony.flex.DP);
            var Shape = new kony.ui.FlexContainer({
                "clipBounds": false,
                "focusSkin": "skina052bb10",
                "height": "93.75%",
                "id": "Shape",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2.78%",
                "skin": "skina052bb10",
                "top": "2.78%",
                "width": "93.75%",
                "zIndex": 0
            }, {}, {});
            Shape.setDefaultUnit(kony.flex.DP);
            Shape.add();
            flxSearchImage.add(Shape);
            var txtSearchInput = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopydefTextBoxFocus0dbb37b024b054a",
                "height": "100%",
                "id": "txtSearchInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "3%",
                "minWidth": "40%",
                "onTextChange": controller.AS_TextField_f617ed9cace648b497e24440d8707fad,
                "placeholder": "Search",
                "secureTextEntry": false,
                "skin": "sknSearchTxtBx",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 31
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            flxSearchHeader.add(Group, Group10, flxSearchImage, txtSearchInput);
            var lblLine2 = new kony.ui.Label({
                "height": "1dp",
                "id": "lblLine2",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknDummyLine",
                "top": "1%",
                "width": "100%",
                "zIndex": 31
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxEmpListHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40px",
                "id": "flxEmpListHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "3%",
                "width": "100%"
            }, {}, {});
            flxEmpListHeader.setDefaultUnit(kony.flex.DP);
            var hdrfullName = new kony.ui.Label({
                "centerY": "50%",
                "height": "40px",
                "id": "hdrfullName",
                "isVisible": true,
                "left": "80px",
                "skin": "sknEmpListHeader",
                "text": "NAME",
                "textStyle": {},
                "width": "25%",
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var hdrdesignation = new kony.ui.Label({
                "centerY": "50%",
                "height": "40px",
                "id": "hdrdesignation",
                "isVisible": true,
                "left": "33.50%",
                "skin": "sknEmpListHeader",
                "text": "DESIGNATION",
                "textStyle": {},
                "width": "25%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var hdrdepartment = new kony.ui.Label({
                "centerY": "50%",
                "height": "40px",
                "id": "hdrdepartment",
                "isVisible": true,
                "left": "59%",
                "skin": "sknEmpListHeader",
                "text": "DEPARTMENT",
                "textStyle": {},
                "width": "25%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var hdrEmpID = new kony.ui.Label({
                "centerY": "50%",
                "height": "40px",
                "id": "hdrEmpID",
                "isVisible": true,
                "left": "85%",
                "skin": "sknEmpListHeader",
                "text": "ID",
                "textStyle": {},
                "width": "7%",
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEmpListHeader.add(hdrfullName, hdrdesignation, hdrdepartment, hdrEmpID);
            var lblLine3 = new kony.ui.Label({
                "height": "1dp",
                "id": "lblLine3",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknDummyLine",
                "top": "0%",
                "width": "100%",
                "zIndex": 31
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var segEmployeeList = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "department": "Admin",
                    "designation": "IT Administrator",
                    "empID": "1234",
                    "empimage": "newempdefaultimageicon.png",
                    "empimagemask": "profilimagemask.png",
                    "fullName": "Jeremiah Crosman",
                    "imgEdit": "empediticon.png",
                    "imgRemove": "empremoveicon.png"
                }, {
                    "department": "Admin",
                    "designation": "IT Administrator",
                    "empID": "1234",
                    "empimage": "newempdefaultimageicon.png",
                    "empimagemask": "profilimagemask.png",
                    "fullName": "Jeremiah Crosman",
                    "imgEdit": "empediticon.png",
                    "imgRemove": "empremoveicon.png"
                }, {
                    "department": "Admin",
                    "designation": "IT Administrator",
                    "empID": "1234",
                    "empimage": "newempdefaultimageicon.png",
                    "empimagemask": "profilimagemask.png",
                    "fullName": "Jeremiah Crosman",
                    "imgEdit": "empediticon.png",
                    "imgRemove": "empremoveicon.png"
                }, {
                    "department": "Admin",
                    "designation": "IT Administrator",
                    "empID": "1234",
                    "empimage": "newempdefaultimageicon.png",
                    "empimagemask": "profilimagemask.png",
                    "fullName": "Jeremiah Crosman",
                    "imgEdit": "empediticon.png",
                    "imgRemove": "empremoveicon.png"
                }],
                "groupCells": false,
                "height": "750dp",
                "id": "segEmployeeList",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "Copyseg0fc7c2ee0704f44",
                "rowSkin": "sknSegEmpList",
                "rowTemplate": "flxTemplateEmpList",
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "f0f0f000",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "department": "department",
                    "designation": "designation",
                    "empID": "empID",
                    "empimage": "empimage",
                    "empimagemask": "empimagemask",
                    "flxEdit": "flxEdit",
                    "flxRemove": "flxRemove",
                    "flxTemplateEmpList": "flxTemplateEmpList",
                    "fullName": "fullName",
                    "imgEdit": "imgEdit",
                    "imgRemove": "imgRemove",
                    "userIon": "userIon"
                },
                "width": "102%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxList.add(flxListHeader, lblLine, flxSearchHeader, lblLine2, flxEmpListHeader, lblLine3, segEmployeeList);
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0px",
                "clipBounds": true,
                "height": "50px",
                "id": "flxFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "260px",
                "right": "0px",
                "skin": "slFbox"
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
            var lblFooter = new kony.ui.Label({
                "bottom": "10px",
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblFooter",
                "isVisible": true,
                "skin": "sknLblFooter",
                "text": "© Copyright 2018 Kony, Inc. All Rights Reserved.",
                "width": "100%",
                "zIndex": 35
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFooter.add(lblFooter);
            flxRoot.add(empheader, leftmenu, flxList, flxFooter);
            var flxOverlay = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1032px",
                "id": "flxOverlay",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_h80782c1af084f609cc0457d4f9ef348,
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
                "right": "55px",
                "skin": "sknFlxProfileMain",
                "top": "55px",
                "width": "154px",
                "zIndex": 1
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
                "onClick": controller.AS_FlexContainer_c1b4c672c23742c78bf15faf6c35eff3,
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
            var flxFilterMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "260px",
                "id": "flxFilterMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "42px",
                "skin": "slFbox",
                "top": "210dp",
                "width": "330px",
                "zIndex": 100
            }, {}, {});
            flxFilterMain.setDefaultUnit(kony.flex.DP);
            var imgFilter = new kony.ui.Image2({
                "height": "22dp",
                "id": "imgFilter",
                "isVisible": true,
                "right": "10px",
                "skin": "slImage",
                "src": "drop_down_menu.png",
                "top": "0dp",
                "width": "15dp",
                "zIndex": 31
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxFilter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "95%",
                "id": "flxFilter",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0%",
                "skin": "sknFlxFilter",
                "top": "5%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFilter.setDefaultUnit(kony.flex.DP);
            var flxDepartment = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90%",
                "id": "flxDepartment",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "skin": "sknFlxDept",
                "top": "0dp",
                "width": "45%",
                "zIndex": 1
            }, {}, {});
            flxDepartment.setDefaultUnit(kony.flex.DP);
            var lblDepartment = new kony.ui.Label({
                "height": "10%",
                "id": "lblDepartment",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLblDept",
                "text": "Department",
                "top": "2%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 31
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var segDepartment = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "imgDepartment0": "",
                    "lblDepartment0": ""
                }],
                "groupCells": false,
                "height": "88%",
                "id": "segDepartment",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_j64ea2cf8f734968bbd9d124d70faf35,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxFilterContainer",
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgDepartment0",
                    "selectedStateImage": "selected.png",
                    "unselectedStateImage": "unselected.png"
                },
                "separatorColor": "e6e1e600",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "12%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxDepartment0": "flxDepartment0",
                    "flxFilterContainer": "flxFilterContainer",
                    "imgDepartment0": "imgDepartment0",
                    "lblDepartment0": "lblDepartment0"
                },
                "width": "112%",
                "zIndex": 31
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDepartment.add(lblDepartment, segDepartment);
            var flxDesignation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90%",
                "id": "flxDesignation",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "3%",
                "skin": "sknFlxDesig",
                "top": "0%",
                "width": "46%",
                "zIndex": 1
            }, {}, {});
            flxDesignation.setDefaultUnit(kony.flex.DP);
            var lblDesignation = new kony.ui.Label({
                "height": "10%",
                "id": "lblDesignation",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLblDept",
                "text": "Designation",
                "top": "2%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 31
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var segDesignation = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "imgDepartment0": "",
                    "lblDesignation": ""
                }],
                "groupCells": false,
                "height": "88%",
                "id": "segDesignation",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_h8a90a38f5d24259a8c3e2f20be45545,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxDesignation",
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgDepartment0",
                    "selectedStateImage": "selected.png",
                    "unselectedStateImage": "unselected.png"
                },
                "separatorColor": "e6e1e600",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxDepartment0": "flxDepartment0",
                    "flxDesignation": "flxDesignation",
                    "imgDepartment0": "imgDepartment0",
                    "lblDesignation": "lblDesignation"
                },
                "width": "112%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDesignation.add(lblDesignation, segDesignation);
            flxFilter.add(flxDepartment, flxDesignation);
            var btnClearAll = new kony.ui.Button({
                "focusSkin": "CopydefBtnFocus0cab4493b2d8d41",
                "height": "6%",
                "id": "btnClearAll",
                "isVisible": true,
                "left": "3%",
                "onClick": controller.AS_Button_d461de064f6f47819063a45d12de2ae1,
                "skin": "sknBtnClear",
                "text": "Clear All",
                "top": "90%",
                "width": "18%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFilterMain.add(imgFilter, flxFilter, btnClearAll);
            flxOverlay.add(flxProfileMain, flxFilterMain);
            var flxAlertContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1450px",
                "id": "flxAlertContainer",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "minWidth": "1374px",
                "onClick": controller.AS_FlexContainer_h18737e83f0742b8aa5c2f4e861668b1,
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
            alertmsg.onAlertFlexClick = controller.AS_UWI_c1c64b76dc5045e1a0282cac28cd38f3;
            flxAlertContainer.add(alertmsg);
            var leftmenu1 = new com.sa.leftMenuTab.leftmenu({
                "clipBounds": true,
                "height": "100%",
                "id": "leftmenu1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "39%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "20%",
                "zIndex": 100
            }, {}, {});
            leftmenu1.isVisible = false;
            leftmenu1.left = "39%";
            leftmenu1.width = "20%";
            leftmenu1.zIndex = 100;
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1350,
                "780": {
                    "flxRoot": {},
                    "leftmenu": {
                        "isVisible": false,
                        "left": {
                            "type": "string",
                            "value": "3dp"
                        },
                        "instanceId": "leftmenu"
                    },
                    "flxList": {},
                    "flxListHeader": {
                        "left": {
                            "type": "string",
                            "value": "16%"
                        }
                    },
                    "flxBtnAddNewEmployee": {
                        "right": {
                            "type": "string",
                            "value": "6%"
                        },
                        "width": {
                            "type": "string",
                            "value": "25%"
                        }
                    },
                    "AddNewEmployee": {
                        "right": {
                            "type": "string",
                            "value": "18%"
                        }
                    },
                    "EmployeeListDire": {
                        "left": {
                            "type": "string",
                            "value": "4%"
                        }
                    },
                    "flxSearchHeader": {
                        "left": {
                            "type": "string",
                            "value": "16%"
                        },
                        "width": {
                            "type": "string",
                            "value": "70%"
                        }
                    },
                    "flxEmpListHeader": {
                        "left": {
                            "type": "string",
                            "value": "16%"
                        }
                    },
                    "hdrfullName": {},
                    "hdrdesignation": {},
                    "hdrdepartment": {
                        "isVisible": true
                    },
                    "hdrEmpID": {},
                    "segEmployeeList": {
                        "left": {
                            "type": "string",
                            "value": "18%"
                        },
                        "top": {
                            "type": "string",
                            "value": "0.00%"
                        }
                    },
                    "flxFooter": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        }
                    },
                    "flxOverlay": {}
                },
                "1350": {
                    "flxList": {},
                    "flxListHeader": {},
                    "AddNewEmployee": {},
                    "flxEmpListHeader": {},
                    "hdrfullName": {},
                    "segEmployeeList": {},
                    "flxFooter": {
                        "isVisible": true
                    },
                    "flxOverlay": {},
                    "leftmenu1": {
                        "instanceId": "leftmenu1"
                    }
                }
            }
            this.add(flxRoot, flxOverlay, flxAlertContainer, leftmenu1);
        };
        return [{
            "addWidgets": addWidgetsfrmEmpList,
            "enabledForIdleTimeout": false,
            "id": "frmEmpList",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_j61627ee7e5e4e0f80c7aa8bb08b343c,
            "preShow": controller.AS_Form_h14d2ea7ebc6461680004b12c5086b24,
            "skin": "CopyslForm0b4b62517562745",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 780, 1350]
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