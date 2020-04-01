<%@ Page Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="FileCategoryList.aspx.cs" Inherits="MobileScanner_OpenSource.FileCategoryList" %>
<%@ Import Namespace="System.IO" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <style>
        .imageThumbnail
        {
            height: 100px;
            width: 100px;
        }
        .addImage
        {
            height: 30px;
            width: 30px;
        }
        .View
        {
            text-align: center;
        }
        .jumbotron
        {
            padding-top: 20px !important;
        }
    </style>
</head>
<body>
<div class="jumbotron">
    <h3><b>Scanned Documents</b></h3>
    <div style="padding-bottom: 3px">
    <asp:ImageButton ImageUrl="css/images/icon-add-image.png" AlternateText="Add Icon" ToolTip="Add New Row" CssClass="addImage" runat="server" OnClick="AddRow"/>
</div>

<asp:Table runat="server" ID="CategoryTable" class="table table-bordered table-striped">
    <asp:TableHeaderRow runat="server">
        <asp:TableHeaderCell runat="server">Category</asp:TableHeaderCell>
        <asp:TableHeaderCell runat="server" CssClass="View">View</asp:TableHeaderCell>
    </asp:TableHeaderRow>
</asp:Table>
    </div>
    
<script type="text/javascript">
    $('.newFolder').on('blur',
        function()
        {
            var elParent = $(this).parent();
            elParent.html(this.value);

            $(elParent).next().find("#viewDocuments").attr("href", "FileListByFolderName.aspx?FileName=" + this.value);

            //$.ajax({
            //    url: 'FileCategoryList.aspx/CreateFolder',
            //    method: 'GET',
            //    crossDomain: true,
            //    contentType: 'application/json; charset=utf-8',
            //    data: '{strFolderName:' + this.value + '}',
            //    dataType: 'jsonp',
            //    async: false,
            //    cache: false,
            //    success: function (data) {
            //    },
            //    error: function (error) {
            //    }
            //});

            window.PageMethods.CreateFolder(this.value);
        });
</script>

    </body>
    </html>
</asp:Content>