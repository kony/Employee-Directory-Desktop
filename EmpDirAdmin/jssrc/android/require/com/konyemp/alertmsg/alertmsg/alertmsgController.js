define(function() {
    var controller = require("com/konyemp/alertmsg/alertmsg/useralertmsgController");
    var actions = require("com/konyemp/alertmsg/alertmsg/alertmsgControllerActions");
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