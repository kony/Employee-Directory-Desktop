define({
    //Type your controller code here 
    onEditEmployee: function(widget, context) {
        this.executeOnParent("processEditIcon", context.rowIndex);
    },
    onRemoveEmployee: function(widget, context) {
        this.executeOnParent("processRemoveIcon", context.rowIndex);
    }
});