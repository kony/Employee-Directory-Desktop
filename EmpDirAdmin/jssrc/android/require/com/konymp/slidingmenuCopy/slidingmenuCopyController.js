define(function() {
    var controller = require("com/konymp/slidingmenuCopy/userslidingmenuCopyController");
    var actions = require("com/konymp/slidingmenuCopy/slidingmenuCopyControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "profileImageIsVisible", function(val) {
            this.view.flxImage.isVisible = val;
        });
        defineGetter(this, "profileImageIsVisible", function() {
            return this.view.flxImage.isVisible;
        });
        defineSetter(this, "subHeadingSkin", function(val) {
            this.view.lblHeaderText2.skin = val;
        });
        defineGetter(this, "subHeadingSkin", function() {
            return this.view.lblHeaderText2.skin;
        });
        defineSetter(this, "slidingMenuSkin", function(val) {
            this.view.flxMainSlidingMenu.skin = val;
        });
        defineGetter(this, "slidingMenuSkin", function() {
            return this.view.flxMainSlidingMenu.skin;
        });
        defineSetter(this, "menuTextSkin", function(val) {
            this.view.lblnunito.skin = val;
        });
        defineGetter(this, "menuTextSkin", function() {
            return this.view.lblnunito.skin;
        });
        defineSetter(this, "headingSkin", function(val) {
            this.view.lblHeaderText1.skin = val;
        });
        defineGetter(this, "headingSkin", function() {
            return this.view.lblHeaderText1.skin;
        });
        defineSetter(this, "headingTextIsVisible", function(val) {
            this.view.lblHeaderText1.isVisible = val;
        });
        defineGetter(this, "headingTextIsVisible", function() {
            return this.view.lblHeaderText1.isVisible;
        });
        defineSetter(this, "slidingMenuVisibility", function(val) {
            this.view.flxMainSlidingMenu.isVisible = val;
        });
        defineGetter(this, "slidingMenuVisibility", function() {
            return this.view.flxMainSlidingMenu.isVisible;
        });
        defineSetter(this, "profileImageSrc", function(val) {
            this.view.imgHeader.src = val;
        });
        defineGetter(this, "profileImageSrc", function() {
            return this.view.imgHeader.src;
        });
        defineSetter(this, "footerTextSkin", function(val) {
            this.view.textFooter.skin = val;
        });
        defineGetter(this, "footerTextSkin", function() {
            return this.view.textFooter.skin;
        });
        defineSetter(this, "headingText", function(val) {
            this.view.lblHeaderText1.text = val;
        });
        defineGetter(this, "headingText", function() {
            return this.view.lblHeaderText1.text;
        });
        defineSetter(this, "footerText", function(val) {
            this.view.textFooter.text = val;
        });
        defineGetter(this, "footerText", function() {
            return this.view.textFooter.text;
        });
        defineSetter(this, "headingLeft", function(val) {
            this.view.lblHeaderText1.left = val;
        });
        defineGetter(this, "headingLeft", function() {
            return this.view.lblHeaderText1.left;
        });
        defineSetter(this, "slidingMenuIcon", function(val) {
            this.view.imgHamIcon.src = val;
        });
        defineGetter(this, "slidingMenuIcon", function() {
            return this.view.imgHamIcon.src;
        });
        defineSetter(this, "profileImageLeft", function(val) {
            this.view.flxImage.left = val;
        });
        defineGetter(this, "profileImageLeft", function() {
            return this.view.flxImage.left;
        });
        defineSetter(this, "headingTop", function(val) {
            this.view.lblHeaderText1.top = val;
        });
        defineGetter(this, "headingTop", function() {
            return this.view.lblHeaderText1.top;
        });
        defineSetter(this, "footerImageSrc", function(val) {
            this.view.imgFooter.src = val;
        });
        defineGetter(this, "footerImageSrc", function() {
            return this.view.imgFooter.src;
        });
        defineSetter(this, "headingWidth", function(val) {
            this.view.lblHeaderText1.width = val;
        });
        defineGetter(this, "headingWidth", function() {
            return this.view.lblHeaderText1.width;
        });
        defineSetter(this, "profileImageTop", function(val) {
            this.view.flxImage.top = val;
        });
        defineGetter(this, "profileImageTop", function() {
            return this.view.flxImage.top;
        });
        defineSetter(this, "footerImageWidth", function(val) {
            this.view.imgFooter.width = val;
        });
        defineGetter(this, "footerImageWidth", function() {
            return this.view.imgFooter.width;
        });
        defineSetter(this, "enableHeader", function(val) {
            this.view.flxHeader.isVisible = val;
        });
        defineGetter(this, "enableHeader", function() {
            return this.view.flxHeader.isVisible;
        });
        defineSetter(this, "headingHeight", function(val) {
            this.view.lblHeaderText1.height = val;
        });
        defineGetter(this, "headingHeight", function() {
            return this.view.lblHeaderText1.height;
        });
        defineSetter(this, "profileImageWidth", function(val) {
            this.view.flxImage.width = val;
        });
        defineGetter(this, "profileImageWidth", function() {
            return this.view.flxImage.width;
        });
        defineSetter(this, "footerImageHeight", function(val) {
            this.view.imgFooter.height = val;
        });
        defineGetter(this, "footerImageHeight", function() {
            return this.view.imgFooter.height;
        });
        defineSetter(this, "placeholderVisibility", function(val) {
            this.view.lblContent.isVisible = val;
        });
        defineGetter(this, "placeholderVisibility", function() {
            return this.view.lblContent.isVisible;
        });
        defineSetter(this, "subHeadingTextIsVisible", function(val) {
            this.view.lblHeaderText2.isVisible = val;
        });
        defineGetter(this, "subHeadingTextIsVisible", function() {
            return this.view.lblHeaderText2.isVisible;
        });
        defineSetter(this, "profileImageHeight", function(val) {
            this.view.flxImage.height = val;
        });
        defineGetter(this, "profileImageHeight", function() {
            return this.view.flxImage.height;
        });
        defineSetter(this, "subHeadingText", function(val) {
            this.view.lblHeaderText2.text = val;
        });
        defineGetter(this, "subHeadingText", function() {
            return this.view.lblHeaderText2.text;
        });
        defineSetter(this, "subHeadingLeft", function(val) {
            this.view.lblHeaderText2.left = val;
        });
        defineGetter(this, "subHeadingLeft", function() {
            return this.view.lblHeaderText2.left;
        });
        defineSetter(this, "subHeadingTop", function(val) {
            this.view.lblHeaderText2.top = val;
        });
        defineGetter(this, "subHeadingTop", function() {
            return this.view.lblHeaderText2.top;
        });
        defineSetter(this, "subHeadingWidth", function(val) {
            this.view.lblHeaderText2.width = val;
        });
        defineGetter(this, "subHeadingWidth", function() {
            return this.view.lblHeaderText2.width;
        });
        defineSetter(this, "subHeadingHeight", function(val) {
            this.view.lblHeaderText2.height = val;
        });
        defineGetter(this, "subHeadingHeight", function() {
            return this.view.lblHeaderText2.height;
        });
        defineGetter(this, "flxTargetContainer", function() {
            return this.view.flxTargetContainer;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_onProfileClick_uaf27063000b4f9a82125d0a5689c602 = function() {
        if (this.onProfileClick) {
            this.onProfileClick.apply(this, arguments);
        }
    }
    controller.AS_onFooterClick_ud10efc704654e1cbba2f82ccb64444d = function() {
        if (this.onFooterClick) {
            this.onFooterClick.apply(this, arguments);
        }
    }
    return controller;
});