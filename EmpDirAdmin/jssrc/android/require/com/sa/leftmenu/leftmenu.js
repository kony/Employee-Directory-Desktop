define(function() {
    return function(controller) {
        var leftmenu = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "leftmenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxLeftMenu",
            "top": "0dp",
            "width": "20%"
        }, {}, {});
        leftmenu.setDefaultUnit(kony.flex.DP);
        var menuContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "skinfbb6c740",
            "height": "100%",
            "id": "menuContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "skinfbb6c740",
            "top": "0%",
            "width": "100%",
            "zIndex": 115
        }, {}, {});
        menuContainer.setDefaultUnit(kony.flex.DP);
        var imgMenuBG = new kony.ui.Image2({
            "height": "100%",
            "id": "imgMenuBG",
            "isVisible": true,
            "left": "0%",
            "skin": "skinfbaa6b30",
            "src": "imgleftmenu140369810577440.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 0
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var MessageMenu = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "4.45%",
            "id": "MessageMenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10.38%",
            "skin": "sknFlxTransparentBGPointer",
            "top": "14.94%",
            "width": "89.23%",
            "zIndex": 1
        }, {}, {});
        MessageMenu.setDefaultUnit(kony.flex.DP);
        var Group6 = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "52.38%",
            "id": "Group6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "8.19%",
            "top": "0%",
            "width": "8.62%",
            "zIndex": 0
        }, {}, {});
        Group6.setDefaultUnit(kony.flex.DP);
        var imgMesseges = new kony.ui.Image2({
            "height": "100%",
            "id": "imgMesseges",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "messages_icon_normal.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        Group6.add(imgMesseges);
        var imgLine = new kony.ui.Image2({
            "height": "4.76%",
            "id": "imgLine",
            "isVisible": true,
            "left": "0%",
            "skin": "skinfbaa6b30",
            "src": "imgline140369810577728.png",
            "top": "95.24%",
            "width": "91.81%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var Messages = new kony.ui.Label({
            "height": "52.38%",
            "id": "Messages",
            "isVisible": true,
            "left": "25.86%",
            "skin": "skinLblMenuItemNormal",
            "text": "Messages",
            "textStyle": {
                "lineSpacing": 0,
                "letterSpacing": "0",
                "strikeThrough": false
            },
            "top": "2.38%",
            "width": "74.14%",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        MessageMenu.add(Group6, imgLine, Messages);
        var ColleaguesMenuItem = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "4.34%",
            "id": "ColleaguesMenuItem",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10.38%",
            "skin": "sknFlxTransparentBGPointer",
            "top": "8.69%",
            "width": "89.62%",
            "zIndex": 2
        }, {}, {});
        ColleaguesMenuItem.setDefaultUnit(kony.flex.DP);
        var imgLine1 = new kony.ui.Image2({
            "height": "4.88%",
            "id": "imgLine1",
            "isVisible": true,
            "left": "0%",
            "skin": "skinfbaa6b30",
            "src": "imgline140369810569360.png",
            "top": "95.12%",
            "width": "91.42%",
            "zIndex": 0
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var Colleagues = new kony.ui.Label({
            "height": "53.66%",
            "id": "Colleagues",
            "isVisible": true,
            "left": "25.75%",
            "skin": "skinLblMenuItemNormal",
            "text": "Colleagues",
            "textStyle": {
                "lineSpacing": 0,
                "letterSpacing": "0",
                "strikeThrough": false
            },
            "top": "0%",
            "width": "74.25%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgColleagues = new kony.ui.Image2({
            "height": "44%",
            "id": "imgColleagues",
            "isVisible": true,
            "left": "6%",
            "skin": "slImage",
            "src": "colleagues_icon_normal.png",
            "top": "5%",
            "width": "12%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        ColleaguesMenuItem.add(imgLine1, Colleagues, imgColleagues);
        var DirectoryMenuItemMouseover = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "4.87%",
            "id": "DirectoryMenuItemMouseover",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "sknFlxTransparentBGPointer",
            "top": "1.8%",
            "width": "100%",
            "zIndex": 3
        }, {}, {});
        DirectoryMenuItemMouseover.setDefaultUnit(kony.flex.DP);
        var imgLine2 = new kony.ui.Image2({
            "height": "4.35%",
            "id": "imgLine2",
            "isVisible": true,
            "left": "10.38%",
            "skin": "skinfbaa6b30",
            "src": "imgline140369810555920.png",
            "top": "95.65%",
            "width": "81.92%",
            "zIndex": 0
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var DirectoryMenuItem = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "89.13%",
            "id": "DirectoryMenuItem",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        DirectoryMenuItem.setDefaultUnit(kony.flex.DP);
        var Group5 = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "43.9%",
            "id": "Group5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "17.69%",
            "top": "24.39%",
            "width": "6.92%",
            "zIndex": 0
        }, {}, {});
        Group5.setDefaultUnit(kony.flex.DP);
        var imgDirectory = new kony.ui.Image2({
            "height": "100%",
            "id": "imgDirectory",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "list_icon_normal.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        Group5.add(imgDirectory);
        var Directory = new kony.ui.Label({
            "height": "53.66%",
            "id": "Directory",
            "isVisible": true,
            "left": "33.46%",
            "skin": "skinLblMenuItemNormal",
            "text": "Directory",
            "textStyle": {
                "lineSpacing": 0,
                "letterSpacing": "0",
                "strikeThrough": false
            },
            "top": "19.51%",
            "width": "66.54%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgYellowBorder = new kony.ui.Image2({
            "height": "100%",
            "id": "imgYellowBorder",
            "isVisible": true,
            "left": "0%",
            "skin": "skinfbaa6b30",
            "src": "imgrectangle3140369810556576.png",
            "top": "0%",
            "width": "1.15%",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        DirectoryMenuItem.add(Group5, Directory, imgYellowBorder);
        DirectoryMenuItemMouseover.add(imgLine2, DirectoryMenuItem);
        var EventsmenuItem = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "4.66%",
            "id": "EventsmenuItem",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10.38%",
            "skin": "sknFlxTransparentBGPointer",
            "top": "21.08%",
            "width": "89.62%",
            "zIndex": 4
        }, {}, {});
        EventsmenuItem.setDefaultUnit(kony.flex.DP);
        var imgLine3 = new kony.ui.Image2({
            "height": "4.55%",
            "id": "imgLine3",
            "isVisible": true,
            "left": "0%",
            "skin": "skinfbaa6b30",
            "src": "imgline140369810595232.png",
            "top": "95.45%",
            "width": "91.42%",
            "zIndex": 0
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var Events = new kony.ui.Label({
            "height": "50%",
            "id": "Events",
            "isVisible": true,
            "left": "25.75%",
            "skin": "skinLblMenuItemNormal",
            "text": "Events",
            "textStyle": {
                "lineSpacing": 0,
                "letterSpacing": "0",
                "strikeThrough": false
            },
            "top": "2.27%",
            "width": "74.25%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var Group7 = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "52.27%",
            "id": "Group7",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "8.15%",
            "top": "0%",
            "width": "9.87%",
            "zIndex": 2
        }, {}, {});
        Group7.setDefaultUnit(kony.flex.DP);
        var imgevents = new kony.ui.Image2({
            "height": "100%",
            "id": "imgevents",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "events_icon_normal.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        Group7.add(imgevents);
        EventsmenuItem.add(imgLine3, Events, Group7);
        var SettingsMenu = new kony.ui.FlexContainer({
            "clipBounds": true,
            "focusSkin": "CopysknFlxTransparentBGPointer0bfef74074cc744",
            "height": "4.56%",
            "id": "SettingsMenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "sknFlxTransparentBGPointer",
            "top": "27.54%",
            "width": "100%",
            "zIndex": 5
        }, {}, {});
        SettingsMenu.setDefaultUnit(kony.flex.DP);
        var imgLine4 = new kony.ui.Image2({
            "height": "4.65%",
            "id": "imgLine4",
            "isVisible": true,
            "left": "0%",
            "skin": "skinfbaa6b30",
            "src": "imgline140369810598496.png",
            "top": "95.35%",
            "width": "91.42%",
            "zIndex": 0
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var Settings = new kony.ui.Label({
            "height": "51.16%",
            "id": "Settings",
            "isVisible": true,
            "left": "30%",
            "skin": "skinLblMenuItemNormal",
            "text": "Settings",
            "textStyle": {
                "lineSpacing": 0,
                "letterSpacing": "0",
                "strikeThrough": false
            },
            "top": "4.65%",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var Group8 = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "53.49%",
            "id": "Group8",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "15%",
            "top": "0%",
            "width": "9.87%",
            "zIndex": 2
        }, {}, {});
        Group8.setDefaultUnit(kony.flex.DP);
        var imgSettings = new kony.ui.Image2({
            "height": "100%",
            "id": "imgSettings",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "settings_icon_normal.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        Group8.add(imgSettings);
        var imgYellowBorderSettings = new kony.ui.Image2({
            "height": "100%",
            "id": "imgYellowBorderSettings",
            "isVisible": true,
            "left": "0%",
            "skin": "skinfbaa6b30",
            "src": "imgrectangle3140369810556576.png",
            "top": "0%",
            "width": "1.15%",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        SettingsMenu.add(imgLine4, Settings, Group8, imgYellowBorderSettings);
        menuContainer.add(imgMenuBG, MessageMenu, ColleaguesMenuItem, DirectoryMenuItemMouseover, EventsmenuItem, SettingsMenu);
        leftmenu.add(menuContainer);
        return leftmenu;
    }
})