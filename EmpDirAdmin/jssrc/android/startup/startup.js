//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "EmpDirAdmin",
    appName: "EmpDirAdmin",
    appVersion: "1.0.0",
    platformVersion: null,
    isDebug: true,
    isturlbase: "https://empdir.qa-konycloud.com/services",
    isMFApp: true,
    appKey: "7134c81ff12897a1870f1ce247b371a1",
    appSecret: "58789a308e79ee029f597c2b4467ffeb",
    serviceUrl: "https://100000347.auth.qa-konycloud.com/appconfig",
    svcDoc: {
        "identity_meta": {
            "reusableLinkedinLogin": {
                "success_url": "allow_any"
            },
            "reusableOffice365Login": {
                "success_url": "allow_any"
            }
        },
        "app_version": "1.0",
        "baseId": "d00c340e-30b8-4b42-8cb8-bc5ee422573e",
        "app_default_version": "1.0",
        "login": [{
            "alias": "reusableFacebookLogin",
            "type": "oauth2",
            "prov": "reusableFacebookLogin",
            "url": "https://100000347.auth.qa-konycloud.com"
        }, {
            "alias": "userstore",
            "type": "basic",
            "prov": "userstore",
            "url": "https://100000347.auth.qa-konycloud.com"
        }, {
            "alias": "reusableLinkedinLogin",
            "type": "oauth2",
            "prov": "reusableLinkedinLogin",
            "url": "https://100000347.auth.qa-konycloud.com"
        }, {
            "alias": "reusableOffice365Login",
            "type": "oauth2",
            "prov": "reusableOffice365Login",
            "url": "https://100000347.auth.qa-konycloud.com"
        }],
        "services_meta": {
            "EmployeeModelSchema": {
                "offline": false,
                "metadata_url": "https://empdir.qa-konycloud.com/services/metadata/v1/EmployeeModelSchema",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://empdir.qa-konycloud.com/services/data/v1/EmployeeModelSchema"
            },
            "StorageObjectServices": {
                "offline": false,
                "metadata_url": "https://empdir.qa-konycloud.com/services/metadata/v1/StorageObjectServices",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://empdir.qa-konycloud.com/services/data/v1/StorageObjectServices"
            },
            "fetchImageService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://empdir.qa-konycloud.com/services/fetchImageService"
            },
            "EmployeeStorageObjects": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://empdir.qa-konycloud.com/services/EmployeeStorageObjects"
            }
        },
        "selflink": "https://100000347.auth.qa-konycloud.com/appconfig",
        "integsvc": {
            "fetchImageService": "https://empdir.qa-konycloud.com/services/fetchImageService",
            "EmployeeStorageObjects": "https://empdir.qa-konycloud.com/services/EmployeeStorageObjects"
        },
        "service_doc_etag": "00000165E78F68A0",
        "appId": "08796483-8bf4-4509-a975-24d288198f41",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "EmployeeDirectoryAppZ",
        "reportingsvc": {
            "session": "https://empdir.qa-konycloud.com/services/IST",
            "custom": "https://empdir.qa-konycloud.com/services/CMS"
        },
        "Webapp": {
            "url": "https://empdir.qa-konycloud.com/apps/EmpDirAdmin"
        }
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "https://100000347.auth.qa-konycloud.com/appconfig",
    secureurl: "https://100000347.auth.qa-konycloud.com/appconfig"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        isMVC: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 8200
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        showstartupform: function() {
            var startForm = new kony.mvc.Navigation("frmHome");
            startForm.navigate();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.ND_binary_util"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("EmployeeDirectory", themeCallBack, themeCallBack);
}

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
kony.i18n.setDefaultLocaleAsync("en_US", onSuccess, onFailure, null);
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;