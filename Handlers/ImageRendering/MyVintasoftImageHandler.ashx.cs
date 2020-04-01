using System;

using Vintasoft.Imaging.Pdf;
using Vintasoft.Imaging.Web.HttpHandlers;

namespace AspNetDemo.Handlers
{
    /// <summary>
    /// HTTP handler that handles HTTP requests from clients and
    /// allows to get information about image or render image thumbnail/tile.
    /// </summary>
    public class MyVintasoftImageHandler : VintasoftImageHandler
    {

        /// <summary>
        /// Initializes a new instance of the <see cref="MyVintasoftImageHandler"/> class.
        /// </summary>
        public MyVintasoftImageHandler()
        {
            // subscribe to the DocumentOpened event of PdfDocumentController class (event occurs
            // when PDF document is opened)
            PdfDocumentController.DocumentOpened += new EventHandler<PdfDocumentEventArgs>(ConnectCustomFontProgramsController);
        }



        /// <summary>
        /// Handler of the PdfDocumentController.DocumentOpened event.
        /// </summary>
        private static void ConnectCustomFontProgramsController(object sender, PdfDocumentEventArgs e)
        {
            // set the custom font program controller for PDF document
            e.Document.FontProgramsController = new CustomFontProgramsController();
        }

    }
}