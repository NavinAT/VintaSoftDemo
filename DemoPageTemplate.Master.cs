using System;
using System.Web.UI;

namespace AspNetDemo
{
    public partial class DemoPageTemplate : System.Web.UI.MasterPage
    {
        public DemoPageTemplate()
        {
            VintasoftImaging.VintasoftImagingLicense.Register();
            VintasoftBarcode.VintasoftBarcodeLicense.Register();
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                hiddenSessionField.Value = Page.Session.SessionID;
                Session["init"] = 0;
            }
        }
    }
}