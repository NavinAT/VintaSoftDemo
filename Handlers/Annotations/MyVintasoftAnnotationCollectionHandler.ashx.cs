using Vintasoft.Imaging.Annotation.Formatters;
using Vintasoft.Imaging.Annotation.UI;
using Vintasoft.Imaging.Annotation.Web.HttpHandlers;


namespace AspNetDemo.Handlers
{
    /// <summary>
    /// HTTP handler for managing (getting/setting) an annotation collection stored on a server.
    /// </summary>
    public class MyVintasoftAnnotationCollectionHandler : VintasoftAnnotationCollectionHandler
    {

        /// <summary>
        /// Initializes a new instance of the <see cref="MyVintasoftAnnotationCollectionHandler"/> class.
        /// </summary>
        public MyVintasoftAnnotationCollectionHandler():
            base()
        {
            // define custom serialization binder for correct deserialization of triangle and mark annotations
            AnnotationSerializationBinder.Current = new CustomAnnotationSerializationBinder();

            // set the custom annotation formatter
            Formatter = new CustomAnnotationJsonFormatter();

            // register view for mark annotation data
            AnnotationViewFactory.RegisterViewForAnnotationData(
                typeof(MarkAnnotationData),
                typeof(MarkAnnotationView));
        }

    }
}