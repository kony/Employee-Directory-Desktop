define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onUserFlxClick defined for empheader **/
    AS_UWI_ab2a8e35a9e34246be947c938a5a7255: function AS_UWI_ab2a8e35a9e34246be947c938a5a7255(eventobject) {
        var self = this;
        return self.toggleProfile.call(this, eventobject);
    },
    /** onClick defined for SettingsMenu **/
    AS_FlexContainer_a184b1249fd74af1815de5f987260679: function AS_FlexContainer_a184b1249fd74af1815de5f987260679(eventobject) {
        var self = this;
        this.navigateToFormSetting();
    },
    /** onClick defined for btnAddNewEmp **/
    AS_Button_d54b47820677405ea2faed36533ac5f1: function AS_Button_d54b47820677405ea2faed36533ac5f1(eventobject) {
        var self = this;
        this.createNewEmployee();
    },
    /** onClick defined for flxBtnAddNewEmployee **/
    AS_FlexContainer_jbd614b975ea4ca6ab5882e27b740812: function AS_FlexContainer_jbd614b975ea4ca6ab5882e27b740812(eventobject) {
        var self = this;
        this.createNewEmployee();
        // var navObj = new kony.mvc.Navigation("frmEmpDetails");
        // globEmpOperatioMode = "add";
        // navObj.navigate();
    },
    /** onClick defined for Group **/
    AS_FlexContainer_c9c6a29e0bda4fe5bd2ef0b65c8c9435: function AS_FlexContainer_c9c6a29e0bda4fe5bd2ef0b65c8c9435(eventobject) {
        var self = this;
        return self.toggleFilter.call(this, eventobject);
    },
    /** onTextChange defined for txtSearchInput **/
    AS_TextField_f617ed9cace648b497e24440d8707fad: function AS_TextField_f617ed9cace648b497e24440d8707fad(eventobject, changedtext) {
        var self = this;
        //kony.print("changedtext is :"+changedtext);
        var searchStr = eventobject.text;
        this.processSearch(searchStr);
    },
    /** onClick defined for flxRoot **/
    AS_FlexContainer_c1de1e75561d4fd5a8b6d12047422bef: function AS_FlexContainer_c1de1e75561d4fd5a8b6d12047422bef(eventobject) {
        var self = this;
        this.view.flxProfileMain.setVisibility(false);
        this.view.flxFilterMain.setVisibility(false);
    },
    /** onClick defined for flxLogout **/
    AS_FlexContainer_c1b4c672c23742c78bf15faf6c35eff3: function AS_FlexContainer_c1b4c672c23742c78bf15faf6c35eff3(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLogin");
        ntf.navigate();
    },
    /** onRowClick defined for segDepartment **/
    AS_Segment_j64ea2cf8f734968bbd9d124d70faf35: function AS_Segment_j64ea2cf8f734968bbd9d124d70faf35(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.onSegmenFilterClick.call(this, eventobject);
    },
    /** onRowClick defined for segDesignation **/
    AS_Segment_h8a90a38f5d24259a8c3e2f20be45545: function AS_Segment_h8a90a38f5d24259a8c3e2f20be45545(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.onSegmenFilterClick.call(this, eventobject);
    },
    /** onClick defined for btnClearAll **/
    AS_Button_d461de064f6f47819063a45d12de2ae1: function AS_Button_d461de064f6f47819063a45d12de2ae1(eventobject) {
        var self = this;
        return self.ClearFilter.call(this);
    },
    /** onClick defined for flxOverlay **/
    AS_FlexContainer_h80782c1af084f609cc0457d4f9ef348: function AS_FlexContainer_h80782c1af084f609cc0457d4f9ef348(eventobject) {
        var self = this;
        this.view.flxOverlay.setVisibility(false);
    },
    /** onAlertFlexClick defined for alertmsg **/
    AS_UWI_c1c64b76dc5045e1a0282cac28cd38f3: function AS_UWI_c1c64b76dc5045e1a0282cac28cd38f3() {
        var self = this;
        this.hideALertComponentCallBack();
    },
    /** onClick defined for flxAlertContainer **/
    AS_FlexContainer_h18737e83f0742b8aa5c2f4e861668b1: function AS_FlexContainer_h18737e83f0742b8aa5c2f4e861668b1(eventobject) {
        var self = this;
        this.hideALertComponentCallBack();
    },
    /** preShow defined for frmEmpList **/
    AS_Form_h14d2ea7ebc6461680004b12c5086b24: function AS_Form_h14d2ea7ebc6461680004b12c5086b24(eventobject) {
        var self = this;
    },
    /** postShow defined for frmEmpList **/
    AS_Form_j61627ee7e5e4e0f80c7aa8bb08b343c: function AS_Form_j61627ee7e5e4e0f80c7aa8bb08b343c(eventobject) {
        var self = this;
        //this.view.segEmployeeList.setData(empData);
        if (this.employee == undefined || this.employee === null || globRefreshData == true) {
            this.view.segEmployeeList.removeAll();
            this.fetchAllDetails();
            globRefreshData = false;
        }
    }
});