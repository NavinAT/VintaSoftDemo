<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="ScanOptions.aspx.cs" Inherits="MobileScanner_Dynamsoft.ScanOptions" %>
<%@ Import Namespace="MobileScanner_Dynamsoft" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <style>
        #myDIV
        {
            display: none;
        }
        .GoBack
        {
            height: 40px;
            width: 40px;
        }
    </style>
    <div class="jumbotron">
        <asp:ImageButton ImageUrl="css/images/GoBack.jpg" AlternateText="GoBack" ToolTip="GoBack" CssClass="GoBack" runat="server" OnClick="GoBack"></asp:ImageButton>
        <h4 class="lead">Upload on <b><%=strFileName %></b></h4><br/>
        <a class="btn btn-primary btn-lg" href="CaptureImage.aspx?FileName=<%=strFileName %>">Use Camera</a><br/><br/>
        <input type="button" runat="server" ID="Button1" class="btn btn-primary btn-lg" onclick="myFunction()" value="Scan from Mobile"/><br/><br/>

        <div id="myDIV">
            <input runat="server" id="EmailID" style="margin-right: 30px; height: 40px;" type="text" value="" placeholder="Gmail ID only..."/>
            <asp:Button runat="server" ID="sendMail" class="btn btn-primary btn-lg" Text="Scan"/><br/>
        </div>

        <asp:Label class="msgLabel" ID="lblMessage" style="font-size: 15px;" runat="server" />
    </div>
    <script>
        function myFunction() 
        {
            var x = document.getElementById("myDIV");

            $(x).toggle();

            document.getElementsByClassName("msgLabel")[0].innerText = "";
        }
    </script>
</asp:Content>
