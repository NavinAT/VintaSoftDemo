using System;
using System.IO;

using Vintasoft.Imaging.Pdf;
using Vintasoft.Imaging.Pdf.Tree;
using Vintasoft.Imaging.Pdf.Tree.Fonts;

namespace AspNetDemo.Handlers
{
    /// <summary>
    /// Provides access to fonts located in the specified directory
    /// and system fonts.
    /// </summary>
    public class CustomFontProgramsController : FileFontProgramsController
    {

        #region Fields

        /// <summary>
        /// Standard font program name.
        /// </summary>
        const string DefaultStandardFontName = "Arial";

        /// <summary>
        /// Warning message template.
        /// </summary>
        const string WarningMessageTemplate = "Font program '{0}' was not found, '{1}' program is used.";

        /// <summary>
        /// The temporary document for default font.
        /// </summary>
        PdfDocument _defaultFontTempDocument;

        /// <summary>
        /// The font that will be used instead of missing font.
        /// </summary>
        PdfFont _defaultFont;

        #endregion



        #region Constructor

        /// <summary>
        /// Initializes a new instance of the
        /// <see cref="CustomFontProgramsController"/> class.
        /// </summary>
        public CustomFontProgramsController()
            : base(true, @"fonts\")
        {
        }

        #endregion



        #region Methods

        /// <summary>
        /// Returns a TrueType font program using specified font and font name.
        /// </summary>
        /// <param name="font">The font.</param>
        /// <param name="fontName">Font name.</param>
        /// <returns>The <see cref="System.IO.Stream"/> that contains the font
        /// program in TrueType format if font is found successfully;
        /// otherwise, <b>null</b>.</returns>
        public override Stream GetTrueTypeFontProgram(PdfFont font, string fontName)
        {
            Stream result = base.GetTrueTypeFontProgram(font, fontName);

            // if font program is not found then
            if (result == null)
            {
                string message = null;

                if (fontName.Contains("+"))
                {
                    int index = fontName.IndexOf('+');
                    if (index > 0)
                    {
                        string commonFontName = fontName.Substring(0, index);
                        result = base.GetTrueTypeFontProgram(font, commonFontName);
                        if (result != null)
                            message = string.Format(WarningMessageTemplate, fontName, commonFontName);
                    }
                }

                if (result == null)
                {
                    // use substitution font
                    string substitutionFontName = "Arial";

                    if (fontName.StartsWith("Courier"))
                        substitutionFontName = "CourierNew";
                    else if (fontName.Contains("TimesNewRoman"))
                        substitutionFontName = "TimesNewRoman";

                    string fontNameUpper = fontName.ToUpperInvariant();
                    if (fontNameUpper.EndsWith("BOLD ITALIC") || fontNameUpper.EndsWith("-BOLDITALICMT"))
                        substitutionFontName += "-BoldItalic";
                    else if (fontNameUpper.EndsWith("BOLD") || fontNameUpper.EndsWith("-BOLDMT"))
                        substitutionFontName += "-Bold";
                    else if (fontNameUpper.EndsWith("ITALIC") || fontNameUpper.EndsWith("-ITALICMT"))
                        substitutionFontName += "-Italic";

                    result = base.GetTrueTypeFontProgram(font, substitutionFontName);

                    if (result != null)
                        message = string.Format(WarningMessageTemplate, fontName, substitutionFontName);
                }

                if (message != null && font != null)
                    font.Document.AddRuntimeMessage(new PdfRuntimeWarning("FontProgramsController", message));
            }

            return result;
        }

        /// <summary>
        /// Method is executed when font instance is created.
        /// </summary>
        /// <param name="resources">The resources of content stream.</param>
        /// <param name="font">The font that was created.</param>
        /// <param name="fontSize">The font size.</param>
        /// <param name="resourceName">Name of the font resource.</param>
        public override void FontInstanceCreated(PdfResources resources, ref PdfFont font, ref float fontSize, string resourceName)
        {
            base.FontInstanceCreated(resources, ref font, ref fontSize, resourceName);

            if (font == null)
            {
                font = GetDefaultFont();
                if (font != null)
                {
                    string message = string.Format("Font resource '{0}' was not found, '{1}' font is used.", resourceName, font.FontName);
                    if (resources != null)
                        resources.Document.AddRuntimeMessage(new PdfRuntimeError("FontProgramsController", new Exception(message)));
                }
            }
        }

        /// <summary>
        /// Releases all resources used by this font programs controller.
        /// </summary>
        public override void Dispose()
        {
            if (_defaultFontTempDocument != null)
            {
                _defaultFontTempDocument.Dispose();
                _defaultFontTempDocument = null;
                _defaultFont = null;
            }
        }

        /// <summary>
        /// Gets the default font.
        /// </summary>
        /// <returns>PdfFont object instance.</returns>
        private PdfFont GetDefaultFont()
        {
            lock (this)
            {
                if (_defaultFont == null)
                {
                    Stream fontProgramStream = GetTrueTypeFontProgram(null, DefaultStandardFontName);
                    if (fontProgramStream != null)
                    {
                        _defaultFontTempDocument = new PdfDocument();
                        _defaultFont = _defaultFontTempDocument.FontManager.CreateSimpleFontFromTrueTypeFont(fontProgramStream);
                    }
                }
                return _defaultFont;
            }
        }

        #endregion

    }
}
