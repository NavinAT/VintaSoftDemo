using Vintasoft.Barcode.Web.HttpHandlers;
using Vintasoft.Barcode.Web.Services;
using Vintasoft.Data;

namespace AspNetDemo.Handlers
{
    /// <summary>
    /// HTTP handler for reading barcodes from web image.
    /// </summary>
    public class MyVintasoftBarcodeHandler : VintasoftBarcodeHandler
    {

        /// <summary>
        /// Initializes a new instance of the <see cref="MyVintasoftBarcodeHandler"/> class.
        /// </summary>
        public MyVintasoftBarcodeHandler()
            : base()
        {
        }



        /// <summary>
        /// Reads information about barcodes from web image.
        /// </summary>
        /// <param name="requestParams">Parameters for barcode reader.</param>
        /// <returns>Information about searched barcodes.</returns>
        protected override BarcodeReadResponseParams ReadBarcodes(BarcodeReadRequestParams requestParams)
        {
            MyVintasoftBarcodeWebService service = (MyVintasoftBarcodeWebService)CreateWebService(requestParams.sessionId);
            service.RenderingSettings = requestParams.renderingSettings;
            return service.ReadBarcodes(requestParams);
        }

        /// <summary>
        /// Creates the <see cref="VintasoftBarcodeWebService"/>
        /// that handles HTTP requests from clients and allows to read and write barcodes.
        /// </summary>
        /// <returns>
        /// The <see cref="VintasoftBarcodeWebService"/>
        /// that handles HTTP requests from clients and allows to read and write barcodes.
        /// </returns>
        protected override VintasoftBarcodeWebService CreateWebService(string sessionId)
        {
            IDataStorage storage = CreateSessionDataStorage(sessionId);
            return new MyVintasoftBarcodeWebService(storage);
        }

    }
}