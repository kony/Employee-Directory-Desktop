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
        kony.mvc.registry.add("flxForSectionHeaderEmpList", "flxForSectionHeaderEmpList", "flxForSectionHeaderEmpListController");
        kony.mvc.registry.add("flxDesignation", "flxDesignation", "flxDesignationController");
        kony.mvc.registry.add("flxFilterContainer", "flxFilterContainer", "flxFilterContainerController");
        kony.mvc.registry.add("flxRoot", "flxRoot", "flxRootController");
        kony.mvc.registry.add("flxTempRoot", "flxTempRoot", "flxTempRootController");
        kony.mvc.registry.add("flxSegMain", "flxSegMain", "flxSegMainController");
        kony.mvc.registry.add("flxTemplateEmpList", "flxTemplateEmpList", "flxTemplateEmpListController");
        kony.mvc.registry.add("frmEmpDetails", "frmEmpDetails", "frmEmpDetailsController");
        kony.mvc.registry.add("frmEmpList", "frmEmpList", "frmEmpListController");
        kony.mvc.registry.add("frmLogin", "frmLogin", "frmLoginController");
        kony.mvc.registry.add("frmSetting", "frmSetting", "frmSettingController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmLogin").navigate();
    }
});