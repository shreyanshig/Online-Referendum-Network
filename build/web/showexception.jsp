<%-- 
    Document   : showexception
    Created on : 7 Jun, 2023, 11:43:36 AM
    Author     : Shreyanshi
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    Exception ex = (Exception)request.getAttribute("Exception");
    System.out.println("Exception is:"+ex);
    out.println("Some exception occured:"+ex.getMessage());
%>
