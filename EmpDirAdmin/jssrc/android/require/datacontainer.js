define("datacontainer", function() {
    return function(controller) {
        var datacontainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18%",
            "id": "datacontainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "skin": "konympseperatorskin1"
        }, {}, {});
        datacontainer.setDefaultUnit(kony.flex.DP);
        var empname = new kony.ui.Label({
            "id": "empname",
            "isVisible": true,
            "left": "33%",
            "skin": "konympgeneralskin1",
            "text": "Acker,clara",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var empID = new kony.ui.Label({
            "height": "0dp",
            "id": "empID",
            "isVisible": true,
            "left": "43%",
            "skin": "konympgeneralskin1",
            "text": "Acker,clara",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "30%",
            "width": "0dp",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var designation = new kony.ui.Label({
            "id": "designation",
            "isVisible": true,
            "left": "33%",
            "skin": "konympsknDesignationTemp1",
            "text": "Designation",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "46%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var department = new kony.ui.Label({
            "id": "department",
            "isVisible": true,
            "left": "33.26%",
            "skin": "konympsknDepartmentTemp1",
            "text": "Department",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "69%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var colorflx = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "1%",
            "id": "colorflx",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "33%",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "skin": "konympsknTransparent1",
            "width": "67%",
            "zIndex": 2
        }, {}, {});
        colorflx.setDefaultUnit(kony.flex.DP);
        var lblChild = new kony.ui.Label({
            "height": "100%",
            "id": "lblChild",
            "isVisible": true,
            "left": "0%",
            "skin": "konympsknLblColor1",
            "text": "lbl",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        colorflx.add(lblChild);
        var flxImageHolder = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50dp",
            "centerY": "50%",
            "clipBounds": true,
            "height": "54dp",
            "id": "flxImageHolder",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "skin": "konympsknFlxImageHolder1",
            "width": "54dp",
            "zIndex": 2
        }, {}, {});
        flxImageHolder.setDefaultUnit(kony.flex.DP);
        var empimage = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "empimage",
            "isVisible": true,
            "skin": "konympslImage018beadf1b9c84d",
            "src": "user_profile2.png",
            "width": "100%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImageHolder.add(empimage);
        var flxOnline = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "70dp",
            "centerY": "71%",
            "clipBounds": true,
            "height": "13dp",
            "id": "flxOnline",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "skin": "konympsknFlxRoundNoBorder3",
            "width": "13dp",
            "zIndex": 2
        }, {}, {});
        flxOnline.setDefaultUnit(kony.flex.DP);
        var lblInvisible = new kony.ui.Label({
            "height": "100%",
            "id": "lblInvisible",
            "isVisible": true,
            "left": "0%",
            "skin": "konympsknLblOnline1",
            "text": "a",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": "100%",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxOnline.add(lblInvisible);
        datacontainer.add(empname, empID, designation, department, colorflx, flxImageHolder, flxOnline);
        return datacontainer;
    }
})