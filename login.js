
  function getEmpIdAsJsonObj(){
    var empid = $('#empid').val();
    var jsonStr = {
        id: empid
    };
    return JSON.stringify(jsonStr);
  } 
  function getEmp(){
    var emp
  }
  function saveData() {
    var jsonStrObj = validateData();
    if (jsonStrObj === "") {
    return;
     }
    var putRequest = createPUTRequest(connToken,empname, jsonStrObj;
    jQuery.ajaxSetup({async: false}));
    var res.jsonObj = executeCommandAtGivenBaseUrl(putRequest, jpdbBase);
    jQuery.ajaxSetup({async: true});
    resetForm();
    $('#empid').focus()
    
}
 function changeData(){
    $('#change').prop('disabled', true);
    jsonObj = validateData();
    var updateRequest = createUPDATERecordRequest(connToken, jsonObj,empD)
    
 }
   function fillData(jsonObj) {
       saveRecNO2LS(jsonObj);
       var data = JSON.parse(jsonObj.data).record;
       $('#emproll-no').val(data.roll-no);
       $('#empname').val(data.name);
       $('#empclass').val(data.class);
       $('#dob').val(data.dob);
       $('#address').val(data.address);
       $('#enroll').val(data.enroll);

   }

   function resetForm(){
    $('#empName').val('');
    $('#empid').val('');
    $('#empSalary').val('');
    $('#Hra').val('');
    $('#Da').val('');
    $('#Deduction').val('');
    $('#empid').prop('disabled', false);
    $('#empSave').prop('disabled', true);
    $('#empChange').prop('disabled', true);
    $('#empreset').prop('disabled', true);
    $('#empid').focus('');

   }
   function validateData(){
     var empid, empname, empsalary, emphra,empda,empdeduction;
     empid = $('#empid').val();
     empname = $('#empname').val();
     empsalary = $('#empid').val();
     hra = $('#empid').val();
     da = $('#empid').val();
     deduction = $('#empid').val();
    
     if (empid === ''){
        alert('Employee Id missing');
        $('#empid').focus();
        return '';
     }
     if (empname === ''){
        alert('Employee Id missing');
        $('#empname').focus();
        return '';
     }
     if (empsalary === ''){
        alert('Employee salary missing');
        $('#empsalary').focus();
        return '';
     }
     if (hra === ''){
        alert('hra missing');
        $('#hra').focus();
        return '';
     }
     if (da === ''){
        alert('da Is missing');
        $('#da').focus();
        return '';
     }
     if (deduction === ''){
        alert('deduction is missing');
        $('#deduction').focus();
        return '';
     }

     var jsonStrObj = {
        id: empid,
        name: empname,
        slary: empsalary,
        hra: hra,
        da: da,
        deduction: deduction
     }
     return JSON.stringify(jsonStrObj);

   }