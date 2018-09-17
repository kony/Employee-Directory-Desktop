define(function() {
    return function(controller) {
        var login = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "login",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "konympslFbox2",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        login.setDefaultUnit(kony.flex.DP);
        var flxLogin = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxLogin",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "skin": "konympkonympslFbox5",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxLogin.setDefaultUnit(kony.flex.DP);
        var flxBottomContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "60%",
            "id": "flxBottomContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "konympsknslFbox",
            "width": "100%",
            "zIndex": 8
        }, {}, {});
        flxBottomContainer.setDefaultUnit(kony.flex.DP);
        flxBottomContainer.add();
        var flxlogo = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "40%",
            "id": "flxlogo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "konympslFbox0c6504045684a47",
            "top": "0dp",
            "width": "100%",
            "zIndex": 8
        }, {}, {});
        flxlogo.setDefaultUnit(kony.flex.DP);
        var imgLogo = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "40%",
            "height": "30%",
            "id": "imgLogo",
            "isVisible": true,
            "skin": "konympslImage4",
            "src": "reusablelogin_logo.png",
            "width": "30%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxlogo.add(imgLogo);
        var flxTouchId = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "78%",
            "clipBounds": true,
            "height": "8%",
            "id": "flxTouchId",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_3f4759b1cb7a4fb98713ae4f20b21a3c,
            "skin": "konympkonympslFbox5",
            "width": "100%",
            "zIndex": 8
        }, {}, {});
        flxTouchId.setDefaultUnit(kony.flex.DP);
        var imgTouchId = new kony.ui.Image2({
            "centerY": "50%",
            "height": "40dp",
            "id": "imgTouchId",
            "isVisible": true,
            "left": "22%",
            "skin": "konympslImage4",
            "src": "reusablelogin_touch_id_icon.png",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTouchId = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTouchId",
            "isVisible": true,
            "left": "37%",
            "skin": "konympslLabel5",
            "text": "Sign in with Touch ID",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxTouchId.add(imgTouchId, lblTouchId);
        var flxSocialLogin = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "90.50%",
            "clipBounds": true,
            "height": "19%",
            "id": "flxSocialLogin",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "width": "100%",
            "zIndex": 8
        }, {}, {});
        flxSocialLogin.setDefaultUnit(kony.flex.DP);
        var flxOr = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40%",
            "id": "flxOr",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "konympkonympslFbox5",
            "top": "0%",
            "width": "100%",
            "zIndex": 8
        }, {}, {});
        flxOr.setDefaultUnit(kony.flex.DP);
        var lblLine1 = new kony.ui.Label({
            "centerX": "25%",
            "height": "2%",
            "id": "lblLine1",
            "isVisible": true,
            "skin": "konympslLabel4",
            "textStyle": {},
            "top": "50%",
            "width": "35%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblOr = new kony.ui.Label({
            "centerX": "50%",
            "height": "50%",
            "id": "lblOr",
            "isVisible": true,
            "skin": "konympslLabel5",
            "text": "OR",
            "textStyle": {},
            "top": "25%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblLine2 = new kony.ui.Label({
            "centerX": "75%",
            "height": "2%",
            "id": "lblLine2",
            "isVisible": true,
            "skin": "konympslLabel4",
            "textStyle": {},
            "top": "50%",
            "width": "35%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxOr.add(lblLine1, lblOr, lblLine2);
        var flxFacebook = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "60%",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxFacebook",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "onClick": controller.AS_FlexContainer_e9ad4a95e2c143fc9b7482817c7c021c,
            "skin": "konympkonympslFbox5",
            "width": "40dp",
            "zIndex": 8
        }, {}, {});
        flxFacebook.setDefaultUnit(kony.flex.DP);
        var imgFaceBook = new kony.ui.Image2({
            "height": "100%",
            "id": "imgFaceBook",
            "isVisible": true,
            "left": "0%",
            "src": "reusablelogin_facebook.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxFacebook.add(imgFaceBook);
        var flxLinkedin = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "65%",
            "centerY": "60%",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxLinkedin",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "228dp",
            "onClick": controller.AS_FlexContainer_8aa71a407d0741f1856cc1a46f951780,
            "skin": "konympkonympslFbox5",
            "top": "22dp",
            "width": "40dp",
            "zIndex": 8
        }, {}, {});
        flxLinkedin.setDefaultUnit(kony.flex.DP);
        var imgLinkedIn = new kony.ui.Image2({
            "height": "100%",
            "id": "imgLinkedIn",
            "isVisible": true,
            "left": "0%",
            "src": "reusablelogin_linkedin.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxLinkedin.add(imgLinkedIn);
        var flxGoogle = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "60%",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxGoogle",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "157dp",
            "onClick": controller.AS_FlexContainer_a7dae437cf8a4c72b4850fadd8a8a349,
            "skin": "konympkonympslFbox5",
            "top": "41dp",
            "width": "40dp",
            "zIndex": 8
        }, {}, {});
        flxGoogle.setDefaultUnit(kony.flex.DP);
        var imgGoogle = new kony.ui.Image2({
            "height": "100%",
            "id": "imgGoogle",
            "isVisible": true,
            "left": "0%",
            "src": "google.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxGoogle.add(imgGoogle);
        var flxOffice365 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "35%",
            "centerY": "60%",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxOffice365",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "onClick": controller.AS_FlexContainer_87de587aa5364f8e8395977ec9119d02,
            "skin": "konympkonympslFbox5",
            "width": "40dp",
            "zIndex": 8
        }, {}, {});
        flxOffice365.setDefaultUnit(kony.flex.DP);
        var imgOffice365 = new kony.ui.Image2({
            "height": "100%",
            "id": "imgOffice365",
            "isVisible": true,
            "left": "0%",
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "reusablelogin_office365.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxOffice365.add(imgOffice365);
        flxSocialLogin.add(flxOr, flxFacebook, flxLinkedin, flxGoogle, flxOffice365);
        var flxCredentials = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "43%",
            "id": "flxCredentials",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "konympskngenericCard",
            "width": "92%",
            "zIndex": 8
        }, {}, {});
        flxCredentials.setDefaultUnit(kony.flex.DP);
        var flxUsername = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "flxUsername",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "right": "5%",
            "skin": "konympkonympslFbox5",
            "top": "4%",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxUsername.setDefaultUnit(kony.flex.DP);
        var tbxUsername = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "konympsknloginTextField",
            "height": "33dp",
            "id": "tbxUsername",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "maxTextLength": 30,
            "onDone": controller.AS_TextField_addb224a01cd4b28a13b24b70471fed3,
            "right": 0,
            "secureTextEntry": false,
            "skin": "konympsknloginTextField",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "15%",
            "width": "100%"
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "autoCorrect": false
        });
        var flxBottomUsername = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "12%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxBottomUsername",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "right": "0dp",
            "skin": "konympskntextFieldDivider",
            "zIndex": 1
        }, {}, {});
        flxBottomUsername.setDefaultUnit(kony.flex.DP);
        flxBottomUsername.add();
        flxUsername.add(tbxUsername, flxBottomUsername);
        var flxPassword = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "flxPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "right": "5%",
            "skin": "konympkonympslFbox5",
            "top": "21%",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxPassword.setDefaultUnit(kony.flex.DP);
        var tbxPassword = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "konympsknloginTextField",
            "height": "36dp",
            "id": "tbxPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "maxTextLength": 30,
            "onDone": controller.AS_TextField_0a3b861b491744a88711ddf9aafda4c2,
            "right": 0,
            "secureTextEntry": true,
            "skin": "konympsknloginTextField",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "15%",
            "width": "100%"
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "autoCorrect": false
        });
        var flxBottomPassword = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "12%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxBottomPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "right": "0dp",
            "skin": "konympskntextFieldDivider",
            "zIndex": 1
        }, {}, {});
        flxBottomPassword.setDefaultUnit(kony.flex.DP);
        flxBottomPassword.add();
        flxPassword.add(tbxPassword, flxBottomPassword);
        var flxRememberMe = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "34dp",
            "id": "flxRememberMe",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "6.97%",
            "onClick": controller.AS_FlexContainer_d0aab5b4acc04152a0ec450e15e772b5,
            "right": "5%",
            "skin": "konympkonympslFbox5",
            "top": "40.96%",
            "width": "85%",
            "zIndex": 1
        }, {}, {});
        flxRememberMe.setDefaultUnit(kony.flex.DP);
        var lblRememberMe = new kony.ui.Label({
            "centerY": "50.00%",
            "id": "lblRememberMe",
            "isVisible": true,
            "left": "5%",
            "skin": "konympskn",
            "text": "Remember Me",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgRememberme = new kony.ui.Image2({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgRememberme",
            "imageWhenFailed": "checkbox_unselected.png",
            "isVisible": false,
            "left": "84%",
            "skin": "konympslImage4",
            "src": "reusablelogin_checkbox_selected.png",
            "top": "0dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgUnselected = new kony.ui.Image2({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgUnselected",
            "isVisible": true,
            "left": "84%",
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "reusablelogin_checkbox_unselected.png",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRememberMe.add(lblRememberMe, imgRememberme, imgUnselected);
        var flxForgotPassword = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxForgotPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "konympkonympslFbox5",
            "top": "80%",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxForgotPassword.setDefaultUnit(kony.flex.DP);
        var btnForgotPassword = new kony.ui.Button({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "konympsknsecondaryActionFocus",
            "height": "80%",
            "id": "btnForgotPassword",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_forgotPasswordOnClick_b2de6f8330d14c2489a31088725ac514,
            "skin": "konympsknsecondaryAction",
            "text": "Forgot password?",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblSknHidden = new kony.ui.Label({
            "height": "0%",
            "id": "lblSknHidden",
            "isVisible": true,
            "left": "0%",
            "skin": "konympsknAnimate",
            "textStyle": {},
            "top": "0%",
            "width": "0%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxForgotPassword.add(btnForgotPassword, lblSknHidden);
        var lblPassword = new kony.ui.Label({
            "height": "33dp",
            "id": "lblPassword",
            "isVisible": true,
            "left": "5%",
            "skin": "konympsknLblAnimate",
            "text": "Password",
            "textStyle": {},
            "top": "23%",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnLogin = new kony.ui.Button({
            "centerX": "50.06%",
            "focusSkin": "konympsknprimaryActionFocus",
            "height": "42dp",
            "id": "btnLogin",
            "isVisible": true,
            "onClick": controller.AS_Button_d3d819d11cfd4f57995f9bdd5d8913e2,
            "skin": "konymploginbuttonskin",
            "text": "SIGN IN",
            "top": "60.04%",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblUsername = new kony.ui.Label({
            "height": "33dp",
            "id": "lblUsername",
            "isVisible": true,
            "left": "5%",
            "skin": "konympsknLblAnimate",
            "text": "Username",
            "textStyle": {},
            "top": "6%",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxLblUsername = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "33dp",
            "id": "flxLblUsername",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "onClick": controller.AS_FlexContainer_652bd46dc9544e8c8d52115b75f0d1dd,
            "skin": "konympkonympslFbox5",
            "top": "6%",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxLblUsername.setDefaultUnit(kony.flex.DP);
        flxLblUsername.add();
        var flxLblPassword = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "33dp",
            "id": "flxLblPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "onClick": controller.AS_FlexContainer_72686f4fb8d94fd69846952b47579bce,
            "skin": "konympkonympslFbox5",
            "top": "23%",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxLblPassword.setDefaultUnit(kony.flex.DP);
        flxLblPassword.add();
        flxCredentials.add(flxUsername, flxPassword, flxRememberMe, flxForgotPassword, lblPassword, btnLogin, lblUsername, flxLblUsername, flxLblPassword);
        var flxPopups = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPopups",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "konympsknflxMob",
            "top": "0%",
            "width": "100%",
            "zIndex": 9
        }, {}, {});
        flxPopups.setDefaultUnit(kony.flex.DP);
        var flxEnableTouchIDPopup = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "27%",
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "40%",
            "id": "flxEnableTouchIDPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "konympsknFlxDetailsScreen1",
            "width": "89%",
            "zIndex": 10
        }, {}, {});
        flxEnableTouchIDPopup.setDefaultUnit(kony.flex.DP);
        var flxButtons = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "20%",
            "id": "flxButtons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "konympkonympslFbox5",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxButtons.setDefaultUnit(kony.flex.DP);
        var btnEnable = new kony.ui.Button({
            "focusSkin": "konympsknBtn",
            "height": "100%",
            "id": "btnEnable",
            "isVisible": true,
            "left": "50%",
            "onClick": controller.AS_Button_bb891907fa294fc8b937c8dd200d86f6,
            "skin": "konympsknBtn",
            "text": "Enable",
            "top": "0%",
            "width": "50%",
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnCancel = new kony.ui.Button({
            "focusSkin": "konympsknBtnFA",
            "height": "100%",
            "id": "btnCancel",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_2ffefbe5a81e478fb83023f6f0fe51df,
            "skin": "konympsknBtnFA",
            "text": "Cancel",
            "top": "0%",
            "width": "50%",
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxButtons.add(btnEnable, btnCancel);
        var flxPopUpTitle = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20%",
            "id": "flxPopUpTitle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "konympkonympslFbox5",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxPopUpTitle.setDefaultUnit(kony.flex.DP);
        var lblHeader = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblHeader",
            "isVisible": true,
            "skin": "konympslLabel1",
            "text": "Enable Touch ID",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxPopUpTitle.add(lblHeader);
        var flxEnableTouchIdPopupLine = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2px",
            "id": "flxEnableTouchIdPopupLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "konympsknFlxLineBg",
            "top": "20%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxEnableTouchIdPopupLine.setDefaultUnit(kony.flex.DP);
        flxEnableTouchIdPopupLine.add();
        var imgEnableTouchIDIcon = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "40%",
            "height": "60dp",
            "id": "imgEnableTouchIDIcon",
            "isVisible": true,
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "touchid.png",
            "width": "60dp",
            "zIndex": 10
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblMessage = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "65%",
            "id": "lblMessage",
            "isVisible": true,
            "skin": "konympslLabel2",
            "text": "You can use touch ID to Login",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxEnableTouchIDPopup.add(flxButtons, flxPopUpTitle, flxEnableTouchIdPopupLine, imgEnableTouchIDIcon, lblMessage);
        var flxTouchIDPopup = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "27%",
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "36%",
            "id": "flxTouchIDPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "konympsknFlxDetailsScreen1",
            "top": "0%",
            "width": "89%",
            "zIndex": 10
        }, {}, {});
        flxTouchIDPopup.setDefaultUnit(kony.flex.DP);
        var flxTouchIDButtons = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "25%",
            "id": "flxTouchIDButtons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "konympkonympslFbox5",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxTouchIDButtons.setDefaultUnit(kony.flex.DP);
        var btnTouchCancel = new kony.ui.Button({
            "focusSkin": "konympslButtonGlossRed4",
            "height": "100%",
            "id": "btnTouchCancel",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_2d63d9a7737a4d2b92bce31368476d66,
            "skin": "konympsknBtnFA",
            "text": "Cancel",
            "top": "0%",
            "width": "100%",
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxTouchIDButtons.add(btnTouchCancel);
        var flxTouchIDPopUpTitle = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25%",
            "id": "flxTouchIDPopUpTitle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "konympkonympslFbox5",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxTouchIDPopUpTitle.setDefaultUnit(kony.flex.DP);
        var lblTouchHeader = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblTouchHeader",
            "isVisible": true,
            "skin": "konympslLabel1",
            "text": "Touch ID",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxTouchIDPopUpTitle.add(lblTouchHeader);
        var flxTouchIDPopupLine = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2px",
            "id": "flxTouchIDPopupLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "konympsknFlxLineBg",
            "top": "25%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxTouchIDPopupLine.setDefaultUnit(kony.flex.DP);
        flxTouchIDPopupLine.add();
        var imgTouchIDPopupIcon = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "40%",
            "height": "50dp",
            "id": "imgTouchIDPopupIcon",
            "isVisible": true,
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "touchid.png",
            "width": "50dp",
            "zIndex": 10
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTouchMessage = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "65%",
            "id": "lblTouchMessage",
            "isVisible": true,
            "skin": "konympslLabel1",
            "text": "Use Touch ID to Login",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxTouchIDPopup.add(flxTouchIDButtons, flxTouchIDPopUpTitle, flxTouchIDPopupLine, imgTouchIDPopupIcon, lblTouchMessage);
        flxPopups.add(flxEnableTouchIDPopup, flxTouchIDPopup);
        flxLogin.add(flxBottomContainer, flxlogo, flxTouchId, flxSocialLogin, flxCredentials, flxPopups);
        var flxIdentity = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxIdentity",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "top": "0%",
            "width": "100%",
            "zIndex": 10
        }, {}, {});
        flxIdentity.setDefaultUnit(kony.flex.DP);
        var brwsrIdentity = new kony.ui.Browser({
            "detectTelNumber": true,
            "enableZoom": false,
            "height": "100%",
            "htmlString": "Please wait !!\n",
            "id": "brwsrIdentity",
            "isVisible": true,
            "left": "0%",
            "top": "0%",
            "width": "100%",
            "zIndex": 100
        }, {}, {});
        var flxClose = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxClose",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "onClick": controller.AS_FlexContainer_025fdba8604048b6b79a557ffde49c78,
            "right": "2%",
            "skin": "konympkonympslFbox5",
            "top": "0.50%",
            "width": "30dp",
            "zIndex": 101
        }, {}, {});
        flxClose.setDefaultUnit(kony.flex.DP);
        var imgClose = new kony.ui.Image2({
            "height": "100%",
            "id": "imgClose",
            "isVisible": true,
            "left": "0%",
            "src": "clear_input_icon.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 101
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxClose.add(imgClose);
        flxIdentity.add(brwsrIdentity, flxClose);
        login.add(flxLogin, flxIdentity);
        return login;
    }
})