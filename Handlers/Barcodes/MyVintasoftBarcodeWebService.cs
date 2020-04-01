using System.Drawing;
using System.IO;

using Vintasoft.Barcode.Web.Services;
using Vintasoft.Data;
using Vintasoft.Imaging;
using Vintasoft.Imaging.Codecs.Decoders;
using Vintasoft.Shared.Web;

namespace AspNetDemo.Handlers
{

    /// <summary>
    /// A platform-independent web service
    /// that handles HTTP requests from clients and allows to read and write barcodes.
    /// </summary>
    public class MyVintasoftBarcodeWebService : VintasoftBarcodeWebService
    {

        /// <summary>
        /// Initializes a new instance of the <see cref="MyVintasoftBarcodeWebService"/> class.
        /// </summary>
        /// <param name="dataStorage">Data storage.</param>
        public MyVintasoftBarcodeWebService(IDataStorage dataStorage) :
            base(dataStorage)
        {

        }



        WebRenderingSettings _settings;
        /// <summary>
        /// Gets or sets a rendering settings for PDF documents.
        /// </summary>
        public WebRenderingSettings RenderingSettings
        {
            get { return _settings; }
            set { _settings = value; }
        }



        /// <summary>
        /// Returns a bitmap of the specified image from data storage.
        /// </summary>
        /// <param name="fileId">A file identifier, for example, file name.</param>
        /// <param name="pageIndex">Zero based image index in image file.</param>
        /// <returns>A bitmap of the specified image.</returns>
        protected override Bitmap GetBitmapFromDataStorage(string fileId, int pageIndex)
        {
            Bitmap bitmap = null;
            Stream stream = null;
            try
            {
                stream = (Stream)SessionDataStorage.GetItemCopy(fileId);
                using (ImageCollection images = new ImageCollection())
                {
                    images.Add(stream);
                    VintasoftImage image = images[pageIndex];

                    if (_settings != null)
                    {
                        if (image.IsVectorImage && !_settings.IsEmpty)
                        {
                            image.RenderingSettings = new RenderingSettings(
                                _settings.resolution.x,
                                _settings.resolution.y,
                                _settings.interpolationMode,
                                _settings.smoothingMode);
                        }
                    }
                    bitmap = image.GetAsBitmap();

                    images.ClearAndDisposeItems();
                }
            }
            finally
            {
                if (stream != null)
                    stream.Close();
            }
            return bitmap;
        }

    }
}