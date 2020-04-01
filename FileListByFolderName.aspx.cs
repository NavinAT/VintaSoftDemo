using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MobileScanner_OpenSource
{
    public partial class FileListByFolderName : Page
    {
        #region Properties
        private string UploadFolderName { get; } = "ScannedDocuments";

        private string FileRootPath { get; set; }
        private List<string> ImageNames { get; set; }
        #endregion

        #region Protecteds
        protected void Page_Load(object sender, EventArgs e)
        {
            string strFolderName = this.Request.QueryString["FileName"];
            this.FileRootPath = Path.Combine(this.UploadFolderName, strFolderName);
            folderName.InnerText = strFolderName;

            this.ImageNames = FetchImageNames();

            string strImages = "";
            TableRow row = new TableRow();
            TableCell cell2 = new TableCell();

            foreach(string imageName in this.ImageNames)
            {
                strImages += $"<figure><img src={Path.Combine(this.FileRootPath, imageName)} alt=\"{strFolderName} images\" runat=\"server\" class=\"imageThumbnail\" />" +
                             $"<figcaption><b><a target=\"_blank\" href={Path.Combine(this.FileRootPath, imageName)}>{imageName}</a></figcaption></figure>";
            }

            cell2.Text = strImages;
            row.Cells.Add(cell2);
            FileList.Rows.Add(row);
        }
        #endregion

        #region Privates
        private List<string> FetchImageNames()
        {
            return Directory.EnumerateFiles(Path.Combine(this.Request.MapPath("~"), this.FileRootPath)).Select(Path.GetFileName).ToList();
        }
        protected void GoBack(object sender, EventArgs e)
        {
            this.Response.Redirect($"FileCategoryList.aspx?FileName={this.Request.QueryString["FileName"]}");
        }
        #endregion
    }
}