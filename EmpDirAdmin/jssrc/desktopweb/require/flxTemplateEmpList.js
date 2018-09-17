define("flxTemplateEmpList", function() {
    return function(controller) {
        var flxTemplateEmpList = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50px",
            "id": "flxTemplateEmpList",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxTransparentBGPointer",
            "top": "0dp",
            "width": "100%"
        }, {}, {
            "hoverSkin": "sknFlxWhiteBG"
        });
        flxTemplateEmpList.setDefaultUnit(kony.flex.DP);
        var fullName = new kony.ui.Label({
            "centerY": "50%",
            "height": "54.29%",
            "id": "fullName",
            "isVisible": true,
            "left": "80px",
            "skin": "skin090b27c0",
            "text": "Jeremiah Crosman",
            "textStyle": {},
            "width": "25%",
            "zIndex": 0
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var designation = new kony.ui.Label({
            "centerY": "50%",
            "height": "54.20%",
            "id": "designation",
            "isVisible": true,
            "left": "33%",
            "skin": "skin090bc400",
            "text": "IT Administrator",
            "textStyle": {},
            "width": "25%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var department = new kony.ui.Label({
            "centerY": "50%",
            "height": "54.29%",
            "id": "department",
            "isVisible": true,
            "left": "58%",
            "skin": "skin090bc400",
            "text": "Admin",
            "textStyle": {},
            "width": "25%",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var empID = new kony.ui.Label({
            "centerY": "50%",
            "height": "54.29%",
            "id": "empID",
            "isVisible": true,
            "left": "83%",
            "skin": "skin090bc400",
            "text": "1234",
            "textStyle": {},
            "width": "7%",
            "zIndex": 3
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var userIon = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "focusSkin": "skin090d4aa0",
            "height": "40px",
            "id": "userIon",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "skinFlexRound",
            "top": "0%",
            "width": "40px",
            "zIndex": 4
        }, {}, {});
        userIon.setDefaultUnit(kony.flex.DP);
        var empimage = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "empimage",
            "isVisible": true,
            "skin": "Copyskin0f3f0f89b9e9549",
            "src": "empdefaultimageicon.png",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var empimagemask = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "empimagemask",
            "isVisible": true,
            "skin": "Copyskin0e4a4e64967a64c",
            "src": "newtranscircular.png",
            "width": "100%",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        userIon.add(empimage, empimagemask);
        var flxEdit = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "12px",
            "id": "flxEdit",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "onClick": controller.AS_FlexContainer_b5d46b5ea8e1442a8cf648cfd36b4582,
            "right": "4%",
            "skin": "slFbox",
            "width": "12px"
        }, {}, {});
        flxEdit.setDefaultUnit(kony.flex.DP);
        var imgEdit = new kony.ui.Image2({
            "height": "100%",
            "id": "imgEdit",
            "isVisible": true,
            "left": "0%",
            "onTouchEnd": controller.AS_Image_h63be57bf083416ab63fd25f6e019219,
            "skin": "skin090d4aa0",
            "src": "empediticon.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 5
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxEdit.add(imgEdit);
        var flxRemove = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "14px",
            "id": "flxRemove",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "onClick": controller.AS_FlexContainer_j40a804e6c7f4a4b89959043dbb9a6d9,
            "right": "2%",
            "skin": "slFbox",
            "width": "14px"
        }, {}, {});
        flxRemove.setDefaultUnit(kony.flex.DP);
        var imgRemove = new kony.ui.Image2({
            "height": "100%",
            "id": "imgRemove",
            "isVisible": true,
            "left": "0%",
            "onTouchEnd": controller.AS_Image_ae4c4944bf54420a9eac0a4dede32a12,
            "skin": "skin090d4aa0",
            "src": "empremoveicon.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 6
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRemove.add(imgRemove);
        flxTemplateEmpList.add(fullName, designation, department, empID, userIon, flxEdit, flxRemove);
        return flxTemplateEmpList;
    }
})