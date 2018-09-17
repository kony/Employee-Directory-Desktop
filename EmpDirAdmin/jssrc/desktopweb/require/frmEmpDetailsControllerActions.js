define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for SettingsMenu **/
    AS_FlexContainer_f34ed8b4c5f448859b3e5d1b5f16eb6a: function AS_FlexContainer_f34ed8b4c5f448859b3e5d1b5f16eb6a(eventobject) {
        var self = this;
        this.navigateToFormSetting();
    },
    /** onUserFlxClick defined for empheader **/
    AS_UWI_bcf419b0a31d4368b84adca095b91995: function AS_UWI_bcf419b0a31d4368b84adca095b91995(eventobject) {
        var self = this;
        return self.toggleProfile.call(this, eventobject);
    },
    /** onClick defined for flxRoot **/
    AS_FlexContainer_cbf161949265483fb3a25ffda5bad164: function AS_FlexContainer_cbf161949265483fb3a25ffda5bad164(eventobject) {
        var self = this;
        this.view.flxProfileMain.setVisibility(false);
    },
    /** onClick defined for flxLogout **/
    AS_FlexContainer_bf0e3552f7da49e3a72d795b03d899f9: function AS_FlexContainer_bf0e3552f7da49e3a72d795b03d899f9(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLogin");
        ntf.navigate();
    },
    /** onClick defined for flxOverlay **/
    AS_FlexContainer_hdb2384aecd343e5b59944a15403dc35: function AS_FlexContainer_hdb2384aecd343e5b59944a15403dc35(eventobject) {
        var self = this;
        this.view.flxOverlay.setVisibility(false);
    },
    /** onAlertFlexClick defined for alertmsg **/
    AS_UWI_f4448ed9c41f439fac88e2095710c4d3: function AS_UWI_f4448ed9c41f439fac88e2095710c4d3() {
        var self = this;
        this.hideALertComponentCallBack();
    },
    /** onClick defined for flxAlertContainer **/
    AS_FlexContainer_a5f3ee6c3fba4645a931e6fc41cb0e38: function AS_FlexContainer_a5f3ee6c3fba4645a931e6fc41cb0e38(eventobject) {
        var self = this;
        this.hideALertComponentCallBack();
    },
    /** postShow defined for frmEmpDetails **/
    AS_d19e3990: function AS_d19e3990(eventobject) {
        var self = this;
        //kony_rotate(kony.application.getCurrentForm().Path3,-180);kony_rotate(kony.application.getCurrentForm().Path3140304942388160,-180);kony_rotate(kony.application.getCurrentForm().Path3140305061921568,-180);kony_rotate(kony.application.getCurrentForm().Path3140305061921856,-180);kony_rotate(kony.application.getCurrentForm().Path3,-180);kony_rotate(kony.application.getCurrentForm().Path3140304942388160,-180);kony_rotate(kony.application.getCurrentForm().Path3140305061921568,-180);kony_rotate(kony.application.getCurrentForm().Path3140305061921856,-180);kony_rotate(kony.application.getCurrentForm().Path3,-180);kony_rotate(kony.application.getCurrentForm().Path3140304942388160,-180);kony_rotate(kony.application.getCurrentForm().Path3140305061921568,-180);kony_rotate(kony.application.getCurrentForm().Path3140305061921856,-180);kony_rotate(kony.application.getCurrentForm().Path3,-180);kony_rotate(kony.application.getCurrentForm().Path3140304942388160,-180);kony_rotate(kony.application.getCurrentForm().Path3140305061921568,-180);kony_rotate(kony.application.getCurrentForm().Path3140305061921856,-180);kony_rotate(kony.application.getCurrentForm().Path3,-180);kony_rotate(kony.application.getCurrentForm().Path3140304942388160,-180);kony_rotate(kony.application.getCurrentForm().Path3140305061921568,-180);kony_rotate(kony.application.getCurrentForm().Path3140305061921856,-180);
    }
});