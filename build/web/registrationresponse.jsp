<%-- 
    Document   : registrationresponse
    Created on : 7 Jun, 2023, 11:39:51 AM
    Author     : Shreyanshi
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    boolean result = (boolean)request.getAttribute("result");
    boolean userfound = (boolean)request.getAttribute("userfound");
    if(userfound == true)
        out.println("uap");
    else if(result == true)
        out.println("success");
    else
        out.println("error");
%>
