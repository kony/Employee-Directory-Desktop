define(function() {
    return function(controller) {
        var empheader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "80px",
            "id": "empheader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "skin2f2bc440",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        empheader.setDefaultUnit(kony.flex.DP);
        var flxUserInfo = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxUserInfo",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "onClick": controller.AS_FlexContainer_cf9bd7a72d52468996d6fda64e9cf7f5,
            "right": "40px",
            "skin": "slFbox",
            "top": "0dp",
            "width": "160px",
            "zIndex": 1
        }, {}, {});
        flxUserInfo.setDefaultUnit(kony.flex.DP);
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
        var lblEmpName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblEmpName",
            "isVisible": true,
            "right": "4px",
            "skin": "lblSkinAdminName",
            "text": "Alex Sion",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 0, 1, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgAdminUser = new kony.ui.Image2({
            "centerY": "50%",
            "height": "34px",
            "id": "imgAdminUser",
            "isVisible": true,
            "right": "2px",
            "skin": "slImage",
            "src": "empdefaultimageicon.png",
            "width": "34px",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxUserInfo.add(imgDropDown, lblEmpName, imgAdminUser);
        var flxLogo = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxLogo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "width": "260px",
            "zIndex": 3
        }, {}, {});
        flxLogo.setDefaultUnit(kony.flex.DP);
        var imgHeading = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgHeading",
            "isVisible": true,
            "skin": "slImage",
            "src": "employee_directory2.png",
            "width": "200dp",
            "zIndex": 3
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxLogo.add(imgHeading);
        empheader.add(flxUserInfo, flxLogo);
        return empheader;
    }
})