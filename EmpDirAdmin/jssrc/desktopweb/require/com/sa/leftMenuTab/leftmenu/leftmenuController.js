define(function() {
    var controller = require("com/sa/leftMenuTab/leftmenu/userleftmenuController");
    var actions = require("com/sa/leftMenuTab/leftmenu/leftmenuControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});