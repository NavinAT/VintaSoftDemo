<%@ Page Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="FileListByFolderName.aspx.cs" Inherits="MobileScanner_OpenSource.FileListByFolderName" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <!DOCTYPE html>

    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title></title>
        <style>
            .imageThumbnail
            {
                height: 150px;
                width: 150px;
            }

            .folderName
            {
                text-align: center;
                padding-top: 5% !important;
            }
            figure
            {
                display: inline-block;
                margin: 15px;
            }
            .GoBack
            {
                height: 40px;
                width: 40px;
            }
        </style>
    </head>
    <body>
    <div class="jumbotron">
        <asp:ImageButton ImageUrl="css/images/GoBack.jpg" AlternateText="GoBack" ToolTip="GoBack" CssClass="GoBack" runat="server" OnClick="GoBack"></asp:ImageButton>

        <h3 runat="server" ID="folderName"></h3>
        <div>
            <asp:Table ID="FileList" runat="server" class="table table-bordered table-striped">
            </asp:Table>
        </div>
        <% string strFolderName = this.Request.QueryString["FileName"];%>
        <a class="btn btn-primary" href="ScanOptions.aspx?FileName=<%=strFolderName %>">Scan</a>
    </div>
    </body>
    </html>
</asp:Content>