<%-- 
    Document   : votedenied
    Created on : 11 Jul, 2023, 12:06:10 PM
    Author     : Shreyanshi
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.ArrayList, evoting.dto.CandidateInfo"%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="jsscript/vote.js"></script>
        <script src="jsscript/jquery.js"></script>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <link href="stylesheet/backgroundimage.css" rel="stylesheet">
        <link href="stylesheet/pageheader.css" rel="stylesheet">
        <link href="stylesheet/showcandidate.css" rel="stylesheet">
        <title>Show Already Voted Candidate</title>
    </head>
    <body>
        <%
            String userid=(String)session.getAttribute("userid");
            if(userid==null)
            {
                response.sendRedirect("accessdenied.html");
                return;
            }
            StringBuffer displayBlock=new StringBuffer("");
            displayBlock.append("<div class='sticky'><div class='candidate'>VOTE FOR CHANGE</div><br>"+
                                 "<div class='subcandidate'>Sorry! You have already casted your vote</div>"+
                                 "<div class='logout'><a href='login.html'>logout</a></div>"+
                                 "</div><div class='buttons' class='candidateprofile'>");
            CandidateInfo candidate = (CandidateInfo)request.getAttribute("candidate");
            displayBlock.append("<div class='candidateprofile'>You casted your vote in favour of :</div><br>");
            displayBlock.append("<lable for='"+candidate.getCandidateId()+"'> <img src='data:image/jpg;base64,"+candidate.getSymbol()+"' style='width:300px;height:200px;'/><br>");
            displayBlock.append("<br><div class='candidateprofile'><p>Candidate Id : "+candidate.getCandidateId()+"<br>");
            displayBlock.append("<p>Candidate Name : "+candidate.getCandidateName()+"<br>");
            displayBlock.append("<p>Party : "+candidate.getParty()+"<br><br>");
            out.println(displayBlock);
        %>
    </body>
</html>