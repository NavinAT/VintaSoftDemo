using System;
using System.Net;
using System.Net.Mail;
using System.Reflection;
using System.Text.RegularExpressions;
using System.Web.UI;

namespace MobileScanner_Dynamsoft
{
    public partial class ScanOptions : Page
    {
        #region Fields
        public static string strFileName = string.Empty;
        #endregion

        #region Publics
        public void SenMail(object sender, EventArgs e)
        {
            string strToAddress = EmailID.Value;

            if(!strToAddress.Contains("@") || !strToAddress.Contains("."))
            {
                lblMessage.Text = "Enter valid Email ID";
                return;
            }

            string strURL = this.Context.Request.Url.ToString();

            MailMessage msg = new MailMessage();
            msg.From = new MailAddress("msindialeave@gmail.com", "MSIndia");
            msg.To.Add(strToAddress);
            msg.Subject = "Scan your document by clicking below link";
            msg.Body = strURL;

            msg.IsBodyHtml = true;

            try
            {
                Send(msg);
                lblMessage.Text = "Mail sent successfully!!!";
                EmailID.Value = string.Empty;
            }
            catch(Exception)
            {
                lblMessage.Text = "Mail not sent...";
            }
        }

        public void Send(MailMessage mailMessage)
        {
            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.sendgrid.net";
            smtp.EnableSsl = true;

            NetworkCredential NetworkCred = new NetworkCredential("apikey", "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");
            smtp.UseDefaultCredentials = true;

            smtp.Credentials = NetworkCred;
            smtp.Port = 587;
            smtp.Send(mailMessage);
        }
        #endregion

        #region Protecteds
        protected void Page_Load(object sender, EventArgs e)
        {
            sendMail.Click += SenMail;
            strFileName = this.Request.QueryString["FileName"];
        }

        protected void GoBack(object sender, EventArgs e)
        {
            this.Response.Redirect($"FileListByFolderName.aspx?FileName={this.Request.QueryString["FileName"]}");
        }
        #endregion
    }
}