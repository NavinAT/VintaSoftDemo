/**
 A dialog that allows to change settings of image viewer.
*/
ImageViewerSettingsDialogJS = function (viewer) {

    ImageViewerSettingsDialogJS.prototype.show = function () {
        $('#imageViewerSettingsDialogWindow').dialog("open");
    }

    /**
     Creates a dialog with image viewer settings.
    */
    function __create(dialog) {
        var title = "Image Viewer Settings";
        var cancelButtonText = "Cancel"
        if (window.localizeText != null) {
            title = window.localizeText(title);
            cancelButtonText = window.localizeText(cancelButtonText);
        }
        // create a dialog settings
        var settings = {
            modal: true,
            resizable: false,
            draggable: false,
            closeOnEscape: true,
            title: title,
            width: "auto",
            height: "auto",
            autoOpen: false,
            maxWidth: window.innerWidth,
            maxHeight: window.innerHeight,
            open: function () {
                __initialize(dialog);
            },
            buttons: [
                {
                    text: "OK",
                    click: function () {
                        if (__applySettingsToViewer(dialog))
                            $(this).dialog("close");
                    }
                },
                {
                    text: cancelButtonText,
                    click: function () { $(this).dialog("close"); }
                }
            ]
        };

        $('#imageViewerSettingsDialogWindow').dialog(settings);
        return false;
    }

    /**
     Initializes an image viewer settings dialog.
    */
    function __initialize(dialog) {
        // get image viewer
        var viewer = dialog._viewer;

        // get image viewer settings
        var renderingSettings = viewer.get_RenderingSettings();
        if (renderingSettings == null)
            renderingSettings = dialog._renderingSettings;

        var centerImage = viewer.get_CenterImage();
        var tileSize = viewer.get_TileSize()
        var tileHeight = tileSize.height;

        // get background color of image viewer
        var backgroundColor = $(viewer.get_Control()).css("background-color");

        var tileSizeValue = "512x512";
        // set information about tile size
        switch (tileHeight) {
            case 1024:
                tileSizeValue = "1024x1024";
                break;
            case 2048:
                tileSizeValue = "2048x2048";
                break;
        }
        $("#imageViewerTileSize").val(tileSizeValue);

        // define that image viewer uses the default rendering settings
        var isDefaultRenderingSettings = renderingSettings.isEmpty();
        // initialize "default rendering settings" checkbox
        $("#imageViewerDefaultRendSettingsCheckbox").prop("checked", isDefaultRenderingSettings ? "checked" : "");
        var resolution;
        // if image viewer uses custom rendering settings
        if (!isDefaultRenderingSettings) {
            resolution = renderingSettings.get_Resolution();
        }
        // if image viewer uses the default settings
        else {
            resolution = { x: 96, y: 96 };
        }

        var tds = $(".customRenderingSettings td");
        // enable or disable with custom settings
        tds.children().prop("disabled", isDefaultRenderingSettings ? "disabled" : "");

        // set information about resolution
        $("#imageViewerRendSettingsHorRes").val(resolution.x);
        $("#imageViewerRendSettingsVertRes").val(resolution.y);

        // get interpolation mode
        var interpolation = renderingSettings.get_InterpolationMode();
        // set information about interpolation
        $("#imageViewerRendSettingsInterpolation").val(interpolation.toString());

        // get smoothing mode
        var smoothingMode = renderingSettings.get_SmoothingMode();
        // set information about smoothing
        $("#imageViewerRendSettingsSmoothing").val(smoothingMode.toString());

        if (dialog._pdfRenderingSettings != null) {
            var drawNonMarkupAnnotation = dialog._pdfRenderingSettings.get_DrawNonMarkupAnnotations()
            $("#drawNonMarkupAnnotations").prop("checked", drawNonMarkupAnnotation ? "checked" : "");
        }

        // set information about color management
        $("#imageViewerColorManagementCheckbox").prop("checked", dialog._decodingSettings ? "checked" : "");

        // set information about "centerImage" property
        $("#imageViewerCenterImageCheckbox").prop("checked", centerImage ? "checked" : "");

        // set information about background color
        $("#imageViewerBackgroundColor").val(backgroundColor);

        var imageAnchor = viewer.get_ImageAnchor();
        var multipageDisplayMode = viewer.get_MultipageDisplayMode();
        var multipageLayoutDirection = viewer.get_MultipageDisplayLayoutDirection();
        var multipageImagesInRow = viewer.get_MultipageDisplayRowCount();
        var useAppearanceInSinglePageMode = viewer.get_UseImageAppearancesInSinglePageMode();
        var multipageImagesPadding = viewer.get_MultipageDisplayImagePadding();

        $("#imageAnchorSelect").val(imageAnchor.toString());
        $("#multipageDisplayModeSelect").val(multipageDisplayMode.toString());
        $("#multipageLayoutDirectionSelect").val(multipageLayoutDirection.toString());
        $("#multipageImagesInRowInput").val(multipageImagesInRow);
        $("#multipageImagesPadding").val(multipageImagesPadding[0]);

        $("#useAppearanceInSinglePageMode").prop("checked", useAppearanceInSinglePageMode ? "checked" : "");

        var imageAppearance = viewer.get_ImageAppearance();

        $("#imageAppearanceBackColorInput").val(imageAppearance.get_BackColor());
        $("#imageAppearanceBorderColorInput").val(imageAppearance.get_BorderColor());
        $("#imageAppearanceBorderWidthInput").val(imageAppearance.get_BorderWidth());

        var focusedImageAppearance = viewer.get_FocusedImageAppearance();

        $("#focusedImageAppearanceBackColorInput").val(focusedImageAppearance.get_BackColor());
        $("#focusedImageAppearanceBorderColorInput").val(focusedImageAppearance.get_BorderColor());
        $("#focusedImageAppearanceBorderWidthInput").val(focusedImageAppearance.get_BorderWidth());
    }

    /**
     The "Default settings" checkbox is changed.
    */
    function __useDefaultRenderingSettingsCheckboxChanged(event) {
        var useDefaultRenderingSettings = $(this).prop("checked");
        var propValue = useDefaultRenderingSettings ? "disabled" : "";
        var tds = $(".customRenderingSettings td");
        tds.children().prop("disabled", propValue);
    }

    /**
     Applies the settings to the image viewer.
    */
    function __applySettingsToViewer(dialog) {
        // get image viewer
        var viewer = dialog._viewer;
        // get background color
        var backgroundColor = $("#imageViewerBackgroundColor").val();
        // create rendering settings
        var renderingSettings = dialog._renderingSettings;
        renderingSettings.beginInit();
        // if custom settings are used
        if (!$("#imageViewerDefaultRendSettingsCheckbox").prop("checked")) {
            // get information about resolution
            var resX = parseFloat($("#imageViewerRendSettingsHorRes").val());
            var resY = parseFloat($("#imageViewerRendSettingsVertRes").val());
            // get information about interpolation mode
            var interpolation = $("#imageViewerRendSettingsInterpolation").val();
            // get information about smoothing mode
            var smoothing = $("#imageViewerRendSettingsSmoothing").val();

            if (isNaN(resX) || isNaN(resY) || resX < 0 || resY < 0) {
                alert("Wrong parameters!");
                __initialize(dialog);
                return false;
            }

            // change rendering settings
            renderingSettings.set_Resolution(resX, resY);
            renderingSettings.set_InterpolationMode(interpolation);
            renderingSettings.set_SmoothingMode(smoothing);

            if (dialog._pdfRenderingSettings != null) {
                var drawNonMarkupAnnotation = $("#drawNonMarkupAnnotations").prop("checked");
                dialog._pdfRenderingSettings.set_DrawNonMarkupAnnotations(drawNonMarkupAnnotation);
            }
        }
        else {
            renderingSettings.set_Resolution(0, 0);
            renderingSettings.set_InterpolationMode("HighQualityBilinear");
            renderingSettings.set_SmoothingMode("AntiAlias");

            if (dialog._pdfRenderingSettings != null) {
                dialog._pdfRenderingSettings.set_DrawNonMarkupAnnotations(true);
            }
        }
        renderingSettings.endInit();
        // get information about color management
        var useDecodingSettings = $("#imageViewerColorManagementCheckbox").prop("checked");
        // if color management is used
        if (useDecodingSettings) {
            // create decoding settings
            dialog._decodingSettings = new Vintasoft.Shared.WebDecodingSettingsJS();
            // subscribe to the "change" event of image collection
            $(viewer.get_Images()).on("changed.decodingSettings", { dialog: dialog }, __imageViewerImagesChanged);
        }
        // else
        else {
            // clear information about decoding settings
            dialog._decodingSettings = null;
            // unsubscribe from the "change" event of image collection
            $(viewer.get_Images()).off("changed.decodingSettings");
        }

        // new tile size
        var tileSize;
        switch ($("#imageViewerTileSize").val()) {
            case "512x512":
                tileSize = { width: 512, height: 512 };
                break;
            case "1024x1024":
                tileSize = { width: 1024, height: 1024 };
                break;
            case "2048x2048":
                tileSize = { width: 2048, height: 2048 };
                break;
        }

        // need center image
        var centerImage = $("#imageViewerCenterImageCheckbox").prop("checked");

        // change the background color
        $(viewer.get_Control()).css("background-color", backgroundColor);

        var imageAnchor = $("#imageAnchorSelect").val();
        var useAppearanceInSinglePageMode = $("#useAppearanceInSinglePageMode").prop("checked");
        var multipageDisplayMode = $("#multipageDisplayModeSelect").val();
        var multipageLayoutDirection = $("#multipageLayoutDirectionSelect").val();
        var multipageImagesInRow = parseInt($("#multipageImagesInRowInput").val());
        var multipageImagesPadding = parseInt($("#multipageImagesPadding").val());

        var imageAppearanceBackColor = $("#imageAppearanceBackColorInput").val();
        var imageAppearanceBorderColor = $("#imageAppearanceBorderColorInput").val();
        var imageAppearanceBorderWidth = parseInt($("#imageAppearanceBorderWidthInput").val());

        var focusedImageAppearanceBackColor = $("#focusedImageAppearanceBackColorInput").val();
        var focusedImageAppearanceBorderColor = $("#focusedImageAppearanceBorderColorInput").val();
        var focusedImageAppearanceBorderWidth = parseInt($("#focusedImageAppearanceBorderWidthInput").val());

        if (isNaN(multipageImagesInRow) || isNaN(multipageImagesPadding) || multipageImagesInRow < 1 || multipageImagesPadding < 0
            || isNaN(imageAppearanceBorderWidth) || isNaN(focusedImageAppearanceBorderWidth) || imageAppearanceBorderWidth < 0
            || focusedImageAppearanceBorderWidth < 0) {
            alert("Wrong parameters!");
            __initialize(dialog);
            return false;
        }

        viewer.beginInit();

        // apply changes
        if (viewer.get_RenderingSettings() == null) {
            viewer.set_RenderingSettings(renderingSettings);
        }
        viewer.set_CenterImage(centerImage);
        viewer.set_TileSize(tileSize.width, tileSize.height);

        viewer.get_Images().setDecodingSettings(dialog._decodingSettings);

        viewer.set_ImageAnchor(imageAnchor);
        viewer.set_MultipageDisplayMode(multipageDisplayMode);
        viewer.set_MultipageDisplayLayoutDirection(multipageLayoutDirection);
        viewer.set_MultipageDisplayRowCount(multipageImagesInRow);
        viewer.set_UseImageAppearancesInSinglePageMode(useAppearanceInSinglePageMode);
        viewer.set_MultipageDisplayImagePadding(multipageImagesPadding);


        var imageAppearance = viewer.get_ImageAppearance();
        imageAppearance.set_BackColor(imageAppearanceBackColor);
        imageAppearance.set_BorderColor(imageAppearanceBorderColor);
        imageAppearance.set_BorderWidth(imageAppearanceBorderWidth);

        var focusedImageAppearance = viewer.get_FocusedImageAppearance();
        focusedImageAppearance.set_BackColor(focusedImageAppearanceBackColor);
        focusedImageAppearance.set_BorderColor(focusedImageAppearanceBorderColor);
        focusedImageAppearance.set_BorderWidth(focusedImageAppearanceBorderWidth);

        viewer.endInit();

        return true;
    }

    /**
     Image collection of viewer is changed.
    */
    function __imageViewerImagesChanged(event, eventArgs) {
        var dialog = event.data.dialog;
        if (dialog._decodingSettings != null)
            viewer.get_Images().setDecodingSettings(dialog._decodingSettings);
    }



    this._viewer = viewer;
    this._decodingSettings = null;
    this._renderingSettings = new Vintasoft.Shared.WebRenderingSettingsJS();

    $("#imageViewerDefaultRendSettingsCheckbox").on("change", __useDefaultRenderingSettingsCheckboxChanged);
    var colorPickerOptions = {
        alpha: true,
        colorFormat: "RGBA",
        parts: ['map', 'bar', 'rgb', 'alpha', 'footer'],
        part: {
            map: { size: 128 },
            bar: { size: 128 }
        },
        position: {
            my: 'left top',
            at: 'left bottom',
            of: 'element',
            collision: 'fit flip'
        },
        showOn: 'click alt',
        containment: "document",
        draggable: true,
        showCancelButton: false,
        closeOnOutside: true
    }

    $("#imageAppearanceBackColorInput").colorpicker(colorPickerOptions);
    $("#imageAppearanceBorderColorInput").colorpicker(colorPickerOptions);
    $("#focusedImageAppearanceBackColorInput").colorpicker(colorPickerOptions);
    $("#focusedImageAppearanceBorderColorInput").colorpicker(colorPickerOptions);

    colorPickerOptions.alpha = false;
    $('#imageViewerBackgroundColor').colorpicker(colorPickerOptions);

    __create(this);

    if (Vintasoft.Imaging.Pdf != null) {
        $(".pdfRenderingSettings").css("display", "table-row");
        this._pdfRenderingSettings = new Vintasoft.Imaging.Pdf.WebPdfRenderingSettingsJS();

        var compositeRenderingSettings = new Vintasoft.Shared.WebCompositeRenderingSettingsJS([this._renderingSettings, this._pdfRenderingSettings]);

        this._renderingSettings = compositeRenderingSettings;
    }

    viewer.set_RenderingSettings(this._renderingSettings);
}