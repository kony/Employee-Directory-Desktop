define(function() {
    return function(controller) {
        var slidingmenuCopy = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "slidingmenuCopy",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "preShow": controller.AS_FlexContainer_cd6d628f111e429f99ec585ea3665a37,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 99
        }, {}, {});
        slidingmenuCopy.setDefaultUnit(kony.flex.DP);
        var flxMainSlidingMenu = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainSlidingMenu",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "-29.50%",
            "onClick": controller.AS_FlexContainer_d428f6e19bf14e4f9ae9c66b967bc3a0,
            "skin": "konympsmsknFlxFFFFFF",
            "top": "0dp",
            "width": "100%",
            "zIndex": 3
        }, {}, {});
        flxMainSlidingMenu.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "23%",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "30.00%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "70%",
            "zIndex": 1
        }, {}, {});
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxImage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "42dp",
            "id": "flxImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "37%",
            "onClick": controller.AS_onProfileClick_uaf27063000b4f9a82125d0a5689c602,
            "skin": "slFbox",
            "top": "19.76%",
            "width": "46dp",
            "zIndex": 1
        }, {}, {});
        flxImage.setDefaultUnit(kony.flex.PERCENTAGE);
        var imgHeader = new kony.ui.Image2({
            "height": "100%",
            "id": "imgHeader",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "visualizerusername_icon.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImage.add(imgHeader);
        var lblHeaderText1 = new kony.ui.Label({
            "id": "lblHeaderText1",
            "isVisible": true,
            "left": "28.38%",
            "skin": "konympsmsknlblSanFranciscoD8D8D8129",
            "text": "Username",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "54.91%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblHeaderText2 = new kony.ui.Label({
            "id": "lblHeaderText2",
            "isVisible": true,
            "left": "33.60%",
            "skin": "konympsmsknlblSanFranciscoD8D8D8107",
            "text": "Email ID",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "74.90%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxHeader.add(flxImage, lblHeaderText1, lblHeaderText2);
        var flxMenuControl = new kony.ui.FlexScrollContainer({
            "allowHorizontalBounce": true,
            "allowVerticalBounce": true,
            "bounces": false,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "62%",
            "horizontalScrollIndicator": true,
            "id": "flxMenuControl",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "top": "5%",
            "verticalScrollIndicator": true,
            "width": "80%",
            "zIndex": 1
        }, {}, {});
        flxMenuControl.setDefaultUnit(kony.flex.PERCENTAGE);
        var lblMenuContent = new kony.ui.Label({
            "centerX": "78%",
            "centerY": "34%",
            "id": "lblMenuContent",
            "isVisible": true,
            "skin": "CopyslLabel0fe6d62f0d5e34a",
            "text": "Menu Options shows up here",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "40%",
            "zIndex": 8
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxMenuControl.add(lblMenuContent);
        var flxBotom = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "2%",
            "clipBounds": true,
            "height": "9%",
            "id": "flxBotom",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "30%",
            "onClick": controller.AS_onFooterClick_ud10efc704654e1cbba2f82ccb64444d,
            "skin": "slFbox",
            "top": 0,
            "width": "70%",
            "zIndex": 1
        }, {}, {});
        flxBotom.setDefaultUnit(kony.flex.DP);
        var imgFooter = new kony.ui.Image2({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgFooter",
            "isVisible": true,
            "left": "7%",
            "skin": "slImage",
            "src": "konymp_sm_logout_icon.png",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var textFooter = new kony.ui.Label({
            "centerY": "50%",
            "id": "textFooter",
            "isVisible": true,
            "left": "2%",
            "skin": "konympsmsknlblSanFranciscoD8D8D8107",
            "text": "logout",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxBotom.add(imgFooter, textFooter);
        var flxBlockContext = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "62%",
            "id": "flxBlockContext",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "onClick": controller.AS_FlexContainer_h10c1e22d2a646d2b9560cf1ff891231,
            "skin": "slFbox",
            "top": "-73%",
            "width": "80%",
            "zIndex": 10
        }, {}, {});
        flxBlockContext.setDefaultUnit(kony.flex.DP);
        flxBlockContext.add();
        flxMainSlidingMenu.add(flxHeader, flxMenuControl, flxBotom, flxBlockContext);
        var flxTargetContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTargetContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "konympsmsknFlxFFFFFFop16",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxTargetContainer.setDefaultUnit(kony.flex.DP);
        var flxHamParent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "7%",
            "id": "flxHamParent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_a0c6b813a673402f88682f460f56eeb4,
            "skin": "slFbox",
            "top": "0dp",
            "width": "12%",
            "zIndex": 6
        }, {}, {});
        flxHamParent.setDefaultUnit(kony.flex.DP);
        var imgHamIcon = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "25dp",
            "id": "imgHamIcon",
            "isVisible": true,
            "skin": "slImage",
            "src": "hamburger.png",
            "width": "25dp",
            "zIndex": 6
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxHamParent.add(imgHamIcon);
        var flxCover = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCover",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "konympsmflxCoverSkin",
            "top": "0dp",
            "width": "100%",
            "zIndex": 99
        }, {}, {});
        flxCover.setDefaultUnit(kony.flex.DP);
        var flxsknroundedCorner = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxsknroundedCorner",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopySlidingMenuRoundedCornerImage",
            "top": "0dp",
            "width": "1dp",
            "zIndex": 1
        }, {}, {});
        flxsknroundedCorner.setDefaultUnit(kony.flex.DP);
        flxsknroundedCorner.add();
        var flxskncircle = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxskncircle",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "skin": "CopySlidingMenuCircleImage",
            "top": "10dp",
            "width": "1dp",
            "zIndex": 1
        }, {}, {});
        flxskncircle.setDefaultUnit(kony.flex.DP);
        flxskncircle.add();
        var flxfocus = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxfocus",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "skin": "konympsmflxfocusSkin",
            "top": "10dp",
            "width": "1dp",
            "zIndex": 1
        }, {}, {});
        flxfocus.setDefaultUnit(kony.flex.DP);
        flxfocus.add();
        var lbl34px = new kony.ui.Label({
            "id": "lbl34px",
            "isVisible": false,
            "left": "66dp",
            "skin": "konympsmsknlblSanFrancisco66CCFF121",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "217dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblnunito = new kony.ui.Label({
            "id": "lblnunito",
            "isVisible": false,
            "left": "76dp",
            "skin": "konympsmsknlblSanFranciscoFFFFFF129",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "227dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgChevron = new kony.ui.Image2({
            "height": "1dp",
            "id": "imgChevron",
            "isVisible": false,
            "left": "73dp",
            "skin": "slImage",
            "src": "konymp_sm_chevron_right.png",
            "top": "244dp",
            "width": "1dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgHamIconRight = new kony.ui.Image2({
            "height": "1dp",
            "id": "imgHamIconRight",
            "isVisible": false,
            "left": "48dp",
            "skin": "slImage",
            "src": "konymp_sm_menu_icon_right.png",
            "top": "300dp",
            "width": "1dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblSeparatorSkin = new kony.ui.Label({
            "id": "lblSeparatorSkin",
            "isVisible": false,
            "left": "126dp",
            "skin": "konympsmsknlblSeparator",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "233dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxCover.add(flxsknroundedCorner, flxskncircle, flxfocus, lbl34px, lblnunito, imgChevron, imgHamIconRight, lblSeparatorSkin);
        flxTargetContainer.add(flxHamParent, flxCover);
        var lblContent = new kony.ui.Label({
            "centerX": "86%",
            "centerY": "50%",
            "height": "10.05%",
            "id": "lblContent",
            "isVisible": true,
            "skin": "CopyslLabel0ga01befeb23d4c",
            "text": "Drag App Content Here",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "24.06%",
            "zIndex": 8
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        slidingmenuCopy.add(flxMainSlidingMenu, flxTargetContainer, lblContent);
        return slidingmenuCopy;
    }
})