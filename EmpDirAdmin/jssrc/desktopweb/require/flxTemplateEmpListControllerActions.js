define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchEnd defined for imgEdit **/
    AS_Image_h63be57bf083416ab63fd25f6e019219: function AS_Image_h63be57bf083416ab63fd25f6e019219(eventobject, x, y, context) {
        var self = this;
    },
    /** onClick defined for flxEdit **/
    AS_FlexContainer_b5d46b5ea8e1442a8cf648cfd36b4582: function AS_FlexContainer_b5d46b5ea8e1442a8cf648cfd36b4582(eventobject, context) {
        var self = this;
        this.onEditEmployee(eventobject, context);
    },
    /** onTouchEnd defined for imgRemove **/
    AS_Image_ae4c4944bf54420a9eac0a4dede32a12: function AS_Image_ae4c4944bf54420a9eac0a4dede32a12(eventobject, x, y, context) {
        var self = this;
    },
    /** onClick defined for flxRemove **/
    AS_FlexContainer_j40a804e6c7f4a4b89959043dbb9a6d9: function AS_FlexContainer_j40a804e6c7f4a4b89959043dbb9a6d9(eventobject, context) {
        var self = this;
        kony.print("clicked the remove icon in the segment");
        this.executeOnParent("processRemoveIcon", context.widgetInfo.selecteditems[0]);
    }
});