<%-- 
    Document   : votingresponse
    Created on : 6 Jul, 2023, 5:54:24 PM
    Author     : Shreyanshi
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page import="evoting.dto.CandidateInfo"%>
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
            CandidateInfo c = (CandidateInfo)session.getAttribute("candidate");
            StringBuffer displayBlock=new StringBuffer();
            displayBlock.append("<div class='sticky'><div class='candidate'>VOTE FOR CHANGE</div><br>");
            if(c == null){
                displayBlock.append("<div class='subcandidate'>Sorry! Your vote could not be casted</div><br><br>");
                displayBlock.append("<div><h4 class='logout'><a href='LoginControllerServlet?logout=logout'>Logout</a></h4></div><br><br>");
                out.println(displayBlock);
            }
            else{
                displayBlock.append("<div class='subcandidate'>Thank your Voting!</div><br><br>");
                displayBlock.append("<div class='subcandidate'>Your vote has been Added Successfuly!</div>");
                displayBlock.append("<div class='candidateprofile'><p>CandidateId:"+c.getCandidateId()+"<br>");
                displayBlock.append("<strong>You voted for </strong><br><img src='data:image/jpg;base64,"+c.getSymbol()+"' style='width:300px;height:200px;'/>");
                displayBlock.append("<br><div class='candidateprofile'><p>CandidateId:"+c.getCandidateId()+"<br>");
                displayBlock.append("Candidate Name:"+c.getCandidateName()+"<br>");
                displayBlock.append("Party:"+c.getParty()+"<br></div>");
                out.println(displayBlock);
            }
        %>
    </body>
</html>