define("frmHome", function() {
    return function(controller) {
        function addWidgetsfrmHome() {
            this.setDefaultUnit(kony.flex.DP);
            var login = new com.konymp.login({
                "clipBounds": true,
                "height": "100%",
                "id": "login",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "konympslFbox5",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            login.logoSource = "login_image.png";
            login.passwordPlaceholder = "Password";
            login.socialLoginVisible = false;
            login.usernamePlaceholder = "Username";
            login.usernameMinimumChar = "8";
            login.passwordMinimumChar = "8";
            login.usernameValidationMsg = "Username Too Small";
            login.passwordValidationMsg = "Password Too Small";
            login.providerName = "userstore";
            login.encryptCredentials = true;
            login.loginSuccessEvent = controller.AS_UWI_b22a02ec4f2145a99424013c06da9cef;
            this.add(login);
        };
        return [{
            "addWidgets": addWidgetsfrmHome,
            "enabledForIdleTimeout": false,
            "id": "frmHome",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "konympslForm0h5841b36ffce4b"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "konympslTitleBar3",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});