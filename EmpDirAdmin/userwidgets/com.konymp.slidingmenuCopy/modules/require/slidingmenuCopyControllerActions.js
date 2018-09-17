define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBlockContext **/
    AS_FlexContainer_h10c1e22d2a646d2b9560cf1ff891231: function AS_FlexContainer_h10c1e22d2a646d2b9560cf1ff891231(eventobject) {
        var self = this;
        var t = '123';
        //dummyaction added to disable onclicks of dynamic widgets
    },
    /** onClick defined for flxMainSlidingMenu **/
    AS_FlexContainer_d428f6e19bf14e4f9ae9c66b967bc3a0: function AS_FlexContainer_d428f6e19bf14e4f9ae9c66b967bc3a0(eventobject) {
        var self = this;
        var t = '';
    },
    /** onClick defined for flxHamParent **/
    AS_FlexContainer_a0c6b813a673402f88682f460f56eeb4: function AS_FlexContainer_a0c6b813a673402f88682f460f56eeb4(eventobject) {
        var self = this;
        this.showSlidingMenu();
    },
    /** preShow defined for slidingmenuCopy **/
    AS_FlexContainer_cd6d628f111e429f99ec585ea3665a37: function AS_FlexContainer_cd6d628f111e429f99ec585ea3665a37(eventobject) {
        var self = this;
        var newdata = this.modifyDataFromDataGrid(this._suboptions, this._options);
        this.addMenuItems(newdata);
    }
});