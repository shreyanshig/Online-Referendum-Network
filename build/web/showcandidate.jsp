<%-- 
    Document   : showcandidate
    Created on : 3 Jul, 2023, 7:45:18 PM
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
                                 "<div class='subcandidate'>Whome do you Want to Vote?</div>"+
                                 "<div class='logout'><a href='login.html'>logout</a></div>"+
                                 "</div><div class='buttons'>");
            ArrayList<CandidateInfo> candidateList = (ArrayList<CandidateInfo>)request.getAttribute("candidateList");
            for(CandidateInfo c : candidateList){
                displayBlock.append("<input type='radio' name='flat' id='"+c.getCandidateId()+"' value='"+c.getCandidateId()+"' onclick='addvote()'");
                displayBlock.append("<lable for='"+c.getCandidateId()+"'> <img src='data:image/jpg;base64,"+c.getSymbol()+"' style='width:300px;height:200px;'/></lable>");
                displayBlock.append("<br><div class='candidateprofile'><p>Candidate Id : "+c.getCandidateId()+"<br>");
                displayBlock.append("<p>Candidate Name : "+c.getCandidateName()+"<br>");
                displayBlock.append("<p>Party : "+c.getParty()+"<br><br>");
            }
            out.println(displayBlock);
        %>
    </body>
</html>