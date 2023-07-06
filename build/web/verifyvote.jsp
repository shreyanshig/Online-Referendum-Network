<%-- 
    Document   : verifyvote
    Created on : 6 Jul, 2023, 12:42:35 PM
    Author     : Shreyanshi
--%>

<%
    String userid=(String)session.getAttribute("userid");
    if(userid==null)
    {
        session.invalidate();
        response.sendRedirect("accessdenied.html");
        return;
    }
    boolean result = (boolean)request.getAttribute("result");
    if(result == true)
        out.println("success");
    else
        out.println("failed");
%>

