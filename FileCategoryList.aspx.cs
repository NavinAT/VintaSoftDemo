using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MobileScanner_OpenSource
{
    public partial class FileCategoryList : Page
    {
        private static string strApproot;
        #region Properties
        private string UploadFolderName { get; } = "ScannedDocuments";

        private string AppRootPath { get; set; }
        #endregion

        #region Protecteds
        protected void Page_Load(object sender, EventArgs e)
        {
            this.AppRootPath = Path.Combine(this.Request.MapPath("~"), this.UploadFolderName);
            strApproot = this.AppRootPath;

            List<string> lstFolders = Directory.GetDirectories(this.AppRootPath).Select(Path.GetFileName).ToList();

            foreach(string lstFolder in lstFolders)
            {
                TableRow row = new TableRow();
                TableCell cell1 = new TableCell { Text = lstFolder };
                TableCell cell2 = new TableCell
                                  {
                                      Text = $"<a class=\"btn btn-primary btn - lg\" runat=\"server\" href=\"FileListByFolderName.aspx?FileName={lstFolder}\"><b>...</b></a>", CssClass = "View"
                                  };
                row.Cells.Add(cell1);
                row.Cells.Add(cell2);
                CategoryTable.Rows.Add(row);
            }
        }

        protected void AddRow(object sender, EventArgs e)
        {
            string strFolderName = "";

            TableRow row = new TableRow();
            TableCell cell1 = new TableCell();
            cell1.CssClass = "newCategory";
            cell1.Text = "<input class='newFolder' id='FolderName' type='text' />";
            TableCell cell2 = new TableCell { Text = $"<a id='viewDocuments' class='btn btn-primary' runat='server'><b>...</b></a>" };
            cell2.CssClass = "View";
            row.Cells.Add(cell1);
            row.Cells.Add(cell2);
            CategoryTable.Rows.Add(row);

           // CreateFolder("New");
        }
        #endregion

        #region Privates
        [System.Web.Services.WebMethod]
        public static void CreateFolder(string strFolderName)
        {
            string strFolderPath = Path.Combine(strApproot, strFolderName);

            if(!Directory.Exists(strFolderPath))
            {
                Directory.CreateDirectory(strFolderPath);
            }
        }
        #endregion
    }
}