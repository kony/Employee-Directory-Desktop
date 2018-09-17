define(function() {
    var controller = require("com/sa/leftmenu/userleftmenuController");
    var actions = require("com/sa/leftmenu/leftmenuControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});