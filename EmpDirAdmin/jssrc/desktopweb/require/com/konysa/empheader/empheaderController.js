define(function() {
    var controller = require("com/konysa/empheader/userempheaderController");
    var actions = require("com/konysa/empheader/empheaderControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});