<%@ Page Title="" Language="C#" MasterPageFile="~/DemoPageTemplate.Master" AutoEventWireup="true" CodeBehind="CaptureImage.aspx.cs" Inherits="AspNetDemo.Default" %>

<%@ Register Src="~/UI/Panels/imageViewerSettingsPanel.ascx" TagPrefix="uiPanel" TagName="imageViewerSettings" %>
<%@ Register Src="~/UI/Dialogs/webcamDialog.ascx" TagPrefix="uiDialog" TagName="webcam" %>

<asp:Content ID="Content1" ContentPlaceHolderID="requiredScripts" runat="server">
    <link href="Scripts/Vintasoft/Vintasoft.Imaging.DocumentViewer.css" rel="stylesheet" />
    <link href="Content/CameraDemo.css" rel="stylesheet" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <%--jquery.colorpicker--%> 
    <link href="Scripts/External/jquery.colorpicker/jquery.colorpicker.css")" rel="stylesheet" />
    <script src="Scripts/External/jquery.colorpicker/jquery.colorpicker.js")" type="text/javascript"></script>

    <%--multi select--%>
    <link href="Scripts/External/multiple-select/multiple-select.css" rel="stylesheet" />
    <script src="Scripts/External/multiple-select/multiple-select.js" type="text/javascript"></script>

    <script src="Scripts/External/raphael.js" type="text/javascript"></script>

    <script src="Scripts/Vintasoft/Vintasoft.Shared.js" type="text/javascript"></script>
    <script src="Scripts/Vintasoft/Vintasoft.Barcode.js" type="text/javascript"></script>
    <script src="Scripts/Vintasoft/Vintasoft.Imaging.Svg.js" type="text/javascript"></script>
    <script src="Scripts/Vintasoft/Vintasoft.Imaging.DocCleanup.js" type="text/javascript"></script>
    <script src="Scripts/Vintasoft/Vintasoft.Imaging.Annotation.Svg.js" type="text/javascript"></script>
    <script src="Scripts/Vintasoft/Vintasoft.Imaging.DocumentViewer.js" type="text/javascript"></script>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="demoDescription" runat="server">
    <h1>VintaSoft Camera Demo (ASP.NET WebForms)</h1>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="demoContent" runat="server">
    <div id="documentViewerContainer"></div>
    <uiPanel:imageViewerSettings runat="server" />
    <uiDialog:webcam runat="server" />
    <script src="Scripts/CameraDemo.js" type="text/javascript"></script>
    
</asp:Content>
