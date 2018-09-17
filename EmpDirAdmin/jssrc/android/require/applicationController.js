define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.konyemp.alertmsg.alertmsg", "alertmsg", "alertmsgController");
        kony.application.registerMaster({
            "namespace": "com.konyemp.alertmsg",
            "classname": "alertmsg",
            "name": "com.konyemp.alertmsg.alertmsg"
        });
        kony.mvc.registry.add("com.konyemp.alertmsgTab.alertmsg", "alertmsg", "alertmsgController");
        kony.application.registerMaster({
            "namespace": "com.konyemp.alertmsgTab",
            "classname": "alertmsg",
            "name": "com.konyemp.alertmsgTab.alertmsg"
        });
        kony.mvc.registry.add("com.konymp.knowledgeframework", "knowledgeframework", "knowledgeframeworkController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "knowledgeframework",
            "name": "com.konymp.knowledgeframework"
        });
        kony.mvc.registry.add("com.konymp.listdetail", "listdetail", "listdetailController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "listdetail",
            "name": "com.konymp.listdetail"
        });
        kony.mvc.registry.add("com.konymp.login", "login", "loginController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "login",
            "name": "com.konymp.login"
        });
        kony.mvc.registry.add("com.konymp.slidingmenu", "slidingmenu", "slidingmenuController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "slidingmenu",
            "name": "com.konymp.slidingmenu"
        });
        kony.mvc.registry.add("com.konymp.slidingmenuCopy", "slidingmenuCopy", "slidingmenuCopyController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "slidingmenuCopy",
            "name": "com.konymp.slidingmenuCopy"
        });
        kony.mvc.registry.add("com.konysa.empheader", "empheader", "empheaderController");
        kony.application.registerMaster({
            "namespace": "com.konysa",
            "classname": "empheader",
            "name": "com.konysa.empheader"
        });
        kony.mvc.registry.add("com.sa.leftmenu", "leftmenu", "leftmenuController");
        kony.application.registerMaster({
            "namespace": "com.sa",
            "classname": "leftmenu",
            "name": "com.sa.leftmenu"
        });
        kony.mvc.registry.add("com.sa.leftMenuTab.leftmenu", "leftmenu", "leftmenuController");
        kony.application.registerMaster({
            "namespace": "com.sa.leftMenuTab",
            "classname": "leftmenu",
            "name": "com.sa.leftMenuTab.leftmenu"
        });
        kony.mvc.registry.add("datacontainer", "datacontainer", "datacontainerController");
        kony.mvc.registry.add("flexAPIs", "flexAPIs", "flexAPIsController");
        kony.mvc.registry.add("frmHome", "frmHome", "frmHomeController");
        kony.mvc.registry.add("frmKnowledgeFramework", "frmKnowledgeFramework", "frmKnowledgeFrameworkController");
        kony.mvc.registry.add("frmListDetail", "frmListDetail", "frmListDetailController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmHome").navigate();
    }
});