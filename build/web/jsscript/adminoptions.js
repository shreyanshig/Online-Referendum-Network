/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function redirectadministratorpage()
{
    swal("Admin!","Redirecting to admin actions page", "sucess").then(value => {
        window.location = "adminactions.jsp";
    });
}
function redirectvotingpage()
{
    swal("Admin!", "Redirecting to voting controller page", "success").then(value => {
        window.location = "VotingControllerServlet";
    });
}
function manageuser()
{
    swal("Admin!", "Redirecting to user management page", "success").then(value => {
        window.location = "manageuser.jsp";
    });
}
function managecandidate()
{
    swal("Admin!", "Redirecting to candidate management page", "success").then(value => {
        window.location = "managecandidate.jsp";
    });
}
function showaddcandidateform()
{
    removecandidateForm();
    var newdiv = document.createElement("div");
    newdiv.setAttribute("id", "candidateform");
    newdiv.setAttribute("float", "left");
    newdiv.setAttribute("padding-left", "12px");
    newdiv.setAttribute("border", "solid 2px red");
    newdiv.innerHTML = "<h3> Add New Candidate</h3>";
    newdiv.innerHTML = newdiv.innerHTML+"<form method='Post' enctype='multipart/form-data' id='fileUploadForm' name='candidateform'>\n\
    <table><tr><th>Candidate Id:</th><td><input type='text' id='cid'></td></tr>\n\
    <tr><th>User Id:</th><td><input type='text' id='uid' onkeypress='return getdetails(event)'></td></tr>\n\
    <tr><th>Candidate Name:</th><td><input type='text' id='cname'></td></tr>\n\
    <tr><th>City:</th><td><select id='city'></select></td></tr>\
    <tr><th>Party:</th><td><input type='text' id='party'></td></tr>\n\
    <tr><td colspan='2'><input type='file' name ='files' value='Select Party Image'></td></tr>\n\
    <tr><th><input type='button' value='Add Candidate' onclick='addcandidate()' id='addcnd'></th>\n\
    <th><input type='reset' value='Clear' onclick='clearText()'></th></tr></table></form>"+
    "<br><span id='addresp'></span>";
    var addcand = $("#result")[0];
    addcand.appendChild(newdiv);
    $("#candidateform").hide();
    $("#candidateform").fadeIn(3500);
    data = {id : "getid"};
    $.post("AddCandidateControllerServlet", data, function(responseText){
        $("#cid").val(responseText);
        $("#cid").prop("disabled", true);
    });
}
function getdetails(e)
{
    if(e.keyCode === 13){
        data = {uid : $("#uid").val()};
        $.post("AddCandidateControllerServlet", data, function (responseText)
        {
              let details = JSON.parse(responseText);
              let city = details.city;
              let uname = details.username;
              if(uname === "wrong")
                  swal("Wrong Adhar no!", "Adhar no is invalid", "error");
              else{
                  $("#cname").val(uname);
                  $("#city").empty();
                  $("#city").append(city);
                  $("#cname").prop("disabled", true);
              }
        });
    }
}
function clearText()
{
    $("#addresp").html("");
}
function addcandidate()
{
    let form = $("#fileUploadForm")[0];
    let data = new FormData(form);
    alert(data);
    let cid = $("#cid").val();
    let cname = $("#cname").val();
    let city = $("#city").val();
    let party = $("#party").val();
    let uid = $("#uid").val();
    data.append("cid", cid);
    data.append("uid", uid);
    data.append("cname", cname);
    data.append("party", party);
    data.append("city", city);
    $.ajax({
        type : "POST",
        enctype : 'multipart/form-data',
        url : "AddNewCandidateControllerServlet",
        data : data,
        processData : false,
        contentType : false,
        cache : false,
        timeout : 600000,
        success : function(data){
            let str = data + ".....";
            swal("Admin!", str, "success").then((value) =>{
                showaddcandidateform();
            });
        },
        error : function(e){
            swal("Admin!", e, "error");
        }
    });
}
function removecandidateForm()
{
    let contdiv = document.getElementById("result");
    let formdiv = document.getElementById("candidateform");
    if(formdiv != null){
        contdiv.removeChild(formdiv);
        $("#candidateform").fadeOut("3500");
    }
}
function showcandidate()
{
    removecandidateForm();
    var newdiv = document.createElement("div");
    newdiv.setAttribute("id", "candidateform");
    newdiv.setAttribute("float", "left");
    newdiv.setAttribute("padding-left", "12px");
    newdiv.setAttribute("border", "solid 2px red");
    newdiv.innerHTML = "<h3> Add New Candidate</h3>";
    newdiv.innerHTML = newdiv.innerHTML+"<div style='color:white;font-weight:bold'>Candidate Id:</div><div><select id='candList'></select></div>";
    newdiv.innerHTML = newdiv.innerHTML + "<br><span id='addresp'></span>";
    var addcand = $("#result")[0];
    addcand.appendChild(newdiv);
    $("#candidateform").hide();
    $("#candidateform").fadeIn(3500);
    data = {data : "cid"};
    $.post("ShowCandidateControllerServlet", data, function(responseText){
        let candidateList = JSON.parse(responseText);
        $("#candList").append(candidateList.cid);
    });
    $("#candList").change(function(){
        clearForm();
        let cid = $("#candList").val();
        if(cid === ''){
            swal("Nothing has been selected", "Please select and id", "error");
            return;
        }
        data = {data : cid};
        $.post("ShowCandidateControllerServlet", data, function(responseText){
        let details = JSON.parse(responseText);
        $("#addresp").append(details.subdetails);
        console.log(details.subdetails);
    });
    });
}
function clearForm()
{
    $("#addresp").empty();
}


