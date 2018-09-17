define(function() {
    return function(controller) {
        var alertmsg = new kony.ui.FlexContainer({
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "alertmsg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "onClick": controller.AS_FlexContainer_d3c5ffe2b0a34bd1860b4bccf759c62a,
            "skin": "sknFlxOverlayTrans",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        alertmsg.setDefaultUnit(kony.flex.DP);
        var flxAlertMsg = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "180dp",
            "id": "flxAlertMsg",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "sknFlxAlert",
            "top": "0dp",
            "width": "500dp",
            "zIndex": 1
        }, {}, {});
        flxAlertMsg.setDefaultUnit(kony.flex.DP);
        var flxAlertTitle = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "20%",
            "id": "flxAlertTitle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxTitle",
            "top": "0dp",
            "width": "95%",
            "zIndex": 1
        }, {}, {});
        flxAlertTitle.setDefaultUnit(kony.flex.DP);
        var imgCloseAlert = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgCloseAlert",
            "isVisible": true,
            "onTouchEnd": controller.AS_Image_i013f2f973fc47eb9b54e39e9dd11679,
            "right": "0dp",
            "skin": "slImage",
            "src": "empremoveicon.png",
            "width": "20dp",
            "zIndex": 10
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTitle = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTitle",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLblTitle",
            "text": "Title",
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxAlertTitle.add(imgCloseAlert, lblTitle);
        var lblLine = new kony.ui.Label({
            "bottom": "1%",
            "centerX": "50%",
            "height": "1dp",
            "id": "lblLine",
            "isVisible": true,
            "left": "2%",
            "skin": "sknDummyLineAlert",
            "top": "0%",
            "width": "95%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxAlertDescription = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "72%",
            "id": "flxAlertDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0%",
            "width": "95%",
            "zIndex": 1
        }, {}, {});
        flxAlertDescription.setDefaultUnit(kony.flex.DP);
        var lblMsgDescription = new kony.ui.Label({
            "centerX": "50%",
            "height": "96%",
            "id": "lblMsgDescription",
            "isVisible": true,
            "left": "4%",
            "skin": "sknLblDes",
            "text": "Alert Msg here",
            "top": "3%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxAlertDescription.add(lblMsgDescription);
        flxAlertMsg.add(flxAlertTitle, lblLine, flxAlertDescription);
        alertmsg.add(flxAlertMsg);
        return alertmsg;
    }
})