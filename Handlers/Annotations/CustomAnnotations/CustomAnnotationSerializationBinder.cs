using System;
using Vintasoft.Imaging.Annotation.Formatters;

namespace AspNetDemo.Handlers
{
    /// <summary>
    ///  Allows user to control the annotation loading process and select the annotation to load.
    /// </summary>
    public class CustomAnnotationSerializationBinder : AnnotationSerializationBinder
    {

        /// <summary>
        /// Initializes a new instance of the <see cref="CustomAnnotationSerializationBinder"/> class.
        /// </summary>
        public CustomAnnotationSerializationBinder()
            : base()
        {
        }



        /// <summary>
        /// Controls the binding of a serialized object to a annotationType.
        /// </summary>
        /// <param name="assemblyName">Specifies the System.Reflection.Assembly name of
        /// the serialized object.</param>
        /// <param name="typeName">Specifies the System.Type name of the serialized object.</param>
        /// <returns>
        /// The annotationType of the object the formatter creates a new instance of.
        /// </returns>
        public override Type BindToType(string assemblyName, string typeName)
        {
            if (assemblyName.StartsWith("AnnotationDemo"))
                assemblyName = System.Reflection.Assembly.GetExecutingAssembly().FullName;

            if (typeName == "AnnotationDemo.TriangleAnnotationData")
                typeName = "AspNetDemos.Handlers.Annotations.TriangleAnnotationData";

            if (typeName == "AnnotationDemo.MarkAnnotationData")
                typeName = "AspNetDemos.Handlers.Annotations.MarkAnnotationData";

            return base.BindToType(assemblyName, typeName);
        }

    }
}