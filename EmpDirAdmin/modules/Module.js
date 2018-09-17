function isAdmin(emailId){
  var isAdmin=false;
  if(emailId!==undefined && emailId!==null){
    emailId=emailId.trim();
    emailId=emailId.toLowerCase();
    if(adminList!==undefined && adminList!==null){
      var adminUserLength=adminList.length;
      for(var i=0;i<adminUserLength;i++){
        if(adminList[i]===emailId){
          isAdmin=true;
          break;
        }
      }
      
    }
    
  }
  return isAdmin;
}
function searchKeyInCollection(searchKey,itemList){
  var matchedRecord=[];
  if(searchKey===null||searchKey===undefined||itemList===null||itemList===undefined)
    return matchedRecord;
  var itemListLength=itemList.length;
  var item;
  for(var i=0;i<itemListLength;i++){
    item=itemList[i];
    for(var key in item){
      if(item[key].toLowerCase().indexOf(searchKey)!==-1){
        matchedRecord.push(item);
        break;
      }
    }
  }
  return matchedRecord;
}
function getUserRemoveConfirmation(msg,handler){
  kony.ui.Alert({
      message:msg,
      alertType:constants.ALERT_TYPE_CONFIRMATION,
      alertTitle:"",
      yesLabel:"Remove",
      noLabel:"Cancel",
      alertHandler:handler,
    }, null);
}
function getObjectInstance(){
  var objectInstance = null;
  var sdkClient = new kony.sdk.getCurrentInstance();
  if (Object.keys(sdkClient).length !== 0) {
    objectInstance = sdkClient.getObjectService("EmployeeModelSchema", {
      "access": "online"
    });
  }
  if (objectInstance === null || objectInstance === undefined) {
    kony.application.dismissLoadingScreen();
    kony.print("Authorization object null - Connect to MF");
    alert("Please connect app to MF");
    objectInstance= null;
  }
  return objectInstance;
}
function showLoadingScreen(formContext){
  kony.application.showLoadingScreen("sknLoading",
			"",
			constants.LOADING_SCREEN_POSITION_FULL_SCREEN,
			true,
			false, {
			enableMenuKey: false,
			enableBackKey: false,
			progressIndicatorColor: "000000"
		});
		formContext.forceLayout();
}
function dismissLoadingScreen(){
  kony.application.dismissLoadingScreen();
}
function validateText(data){
  if(data!==undefined&&data!==null){
    return data.trim();
  }else
    return "";
}