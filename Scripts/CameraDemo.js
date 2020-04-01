
// === "File" toolbar ===

/**
 Creates UI button for capturing images from web camera.
*/
function __createCaptureImageButton() {
    var webcamDialog;
    var button = new Vintasoft.Imaging.DocumentViewer.UIElements.WebUiButtonJS({
        cssClass: "vsdv-button captureFromCamera",
        title: "Capture from camera",
        localizationId: "captureImageButton",
        onClick: function (event, uiElement) {
            if (webcamDialog != null)
                webcamDialog.open();
        }
    });
    $(button).one("activated", function () {
        var docViewer = this.get_DocumentViewer();
        if (docViewer != null) {
            var viewer = docViewer.get_ImageViewer();
            webcamDialog = new WebcamDialogJS(viewer);

            $(webcamDialog).on("frameUploading", function () {
                __blockUI(__localizeText("Image uploading"));
            });
            $(webcamDialog).on("frameUploaded frameUploadingFailed", __unblockUI);
        }
    });
    return button;
}



// === "View" toolbar ===

/**
 Creates UI button for showing image viewer settings dialog.
*/
function __createImageViewerSettingsButton() {
    var imageViewerSettingsDialog;
    // create the button that allows to show a dialog with image viewer settings
    return new Vintasoft.Imaging.DocumentViewer.UIElements.WebUiButtonJS({
        cssClass: "vsdv-button vsdv-imageViewerSettingsButton",
        title: "Show Image Viewer Settings",
        localizationId: "imageViewerSettingsButton",
        onClick: function (event, uiElement) {
            var docViewer = uiElement.get_DocumentViewer();
            if (docViewer != null) {
                var viewer = docViewer.get_ImageViewer();
                if (viewer != null) {
                    if (imageViewerSettingsDialog == null)
                        imageViewerSettingsDialog = new ImageViewerSettingsDialogJS(viewer);
                    imageViewerSettingsDialog.show();
                }
            }
        }
    });
}



// === "Tools" toolbar ===

/**
 Creates UI button for activating the visual tool, which allows to annotate and pan images in image viewer.
*/
function __createAnnotationAndPanToolButton() {
    return new Vintasoft.Imaging.DocumentViewer.UIElements.WebUiVisualToolButtonJS({
        cssClass: "vsdv-button vsdv-tools-panButton",
        title: "Pan",
        localizationId: "panToolButton"
    }, "AnnotationVisualTool,PanTool");
}

/**
 Creates UI button for activating the visual tool, which allows to select the rectangular image region in image viewer and annotate image in images viewer.
*/
function __createRectangularSelectionAndAnnotationToolButton() {
    return new Vintasoft.Imaging.DocumentViewer.UIElements.WebUiVisualToolButtonJS({
        cssClass: "vsdv-button vsdv-tools-rectSelectionButton",
        title: "Rectangular selection",
        localizationId: "rectangularSelectionToolButton"
    }, "RectangularSelectionTool,AnnotationVisualTool");
}

/**
 Creates UI button for activating the visual tool, which allows to magnify and annotate images in image viewer.
*/
function __createMagnifierAndAnnotationToolButton() {
    return new Vintasoft.Imaging.DocumentViewer.UIElements.WebUiVisualToolButtonJS({
        cssClass: "vsdv-button vsdv-tools-magnifierButton",
        title: "Magnifier",
        localizationId: "magnifierToolButton"
    }, "MagnifierTool,AnnotationVisualTool");
}

/**
 Creates UI button for activating the visual tool, which allows to zoom and annotate images in image viewer.
*/
function __createZoomAndAnnotationToolButton() {
    return new Vintasoft.Imaging.DocumentViewer.UIElements.WebUiVisualToolButtonJS({
        cssClass: "vsdv-button vsdv-tools-zoomButton",
        title: "Zoom",
        localizationId: "zoomToolButton"
    }, "ZoomTool,AnnotationVisualTool");
}

/**
 Creates UI button for activating the visual tool, which allows to zoom image region and annotate images in image viewer.
*/
function __createZoomSelectionAndAnnotationToolButton() {
    return new Vintasoft.Imaging.DocumentViewer.UIElements.WebUiVisualToolButtonJS({
        cssClass: "vsdv-button vsdv-tools-zoomSelectionButton",
        title: "Zoom selection",
        localizationId: "zoomSelectionToolButton"
    }, "ZoomSelectionTool,AnnotationVisualTool");
}

/**
 Creates UI button for recognition of barcodes.
*/
function __createBarcodeReadingButton() {
    with (Vintasoft.Imaging.DocumentViewer) {
        var qrCheckbox = new UIElements.WebUiCheckboxWithLabelJS({ checked: true, value: "QR" }, { text: "QR" });
        var dataMatrixCheckbox = new UIElements.WebUiCheckboxWithLabelJS({ value: "DataMatrix" }, { text: "DataMatrix" });
        var pdf417Checkbox = new UIElements.WebUiCheckboxWithLabelJS({ value: "PDF417" }, { text: "PDF417" });
        var aztecCheckbox = new UIElements.WebUiCheckboxWithLabelJS({ value: "Aztec" }, { text: "Aztec" });
        var code39Checkbox = new UIElements.WebUiCheckboxWithLabelJS({ checked: true, value: "Code39" }, { text: "Code39" });
        var code128Checkbox = new UIElements.WebUiCheckboxWithLabelJS({ checked: true, value: "Code128" }, { text: "Code128" });
        var ean8Checkbox = new UIElements.WebUiCheckboxWithLabelJS({ value: "EAN8" }, { text: "EAN8" });

        // create settings for a jQuery dialog with barcode recognition settings
        var dialogSettings = {
            title: "Read barcodes",
            width: "250px",
            height: "auto",
            modal: true,
            resizable: false,
            draggable: false,
            buttons: [
                {
                    text: "Read",
                    localizationId: "ReadButton",
                    click: function () {
                        var docViewer = qrCheckbox.get_DocumentViewer();
                        if (docViewer != null) {
                            var viewer = docViewer.get_ImageViewer();
                            var focusedImage = viewer.get_FocusedImage();
                            if (focusedImage != null) {
                                var barcodeTypes = new Vintasoft.Barcode.WebBarcodeTypeEnumJS("None");
                                var qrCheckboxObj = qrCheckbox.get_DomElement();
                                if (qrCheckboxObj != null && qrCheckboxObj.prop("checked"))
                                    barcodeTypes = barcodeTypes.add("QR");

                                var dataMatrixCheckboxObj = dataMatrixCheckbox.get_DomElement();
                                if (dataMatrixCheckboxObj != null && dataMatrixCheckboxObj.prop("checked"))
                                    barcodeTypes = barcodeTypes.add("DataMatrix");

                                var pdf417CheckboxObj = pdf417Checkbox.get_DomElement();
                                if (pdf417CheckboxObj != null && pdf417CheckboxObj.prop("checked"))
                                    barcodeTypes = barcodeTypes.add("PDF417");

                                var aztecCheckboxObj = aztecCheckbox.get_DomElement();
                                if (aztecCheckboxObj != null && aztecCheckboxObj.prop("checked"))
                                    barcodeTypes = barcodeTypes.add("Aztec");

                                var code39CheckboxObj = code39Checkbox.get_DomElement();
                                if (code39CheckboxObj != null && code39CheckboxObj.prop("checked"))
                                    barcodeTypes = barcodeTypes.add("Code39");

                                var code128CheckboxObj = code128Checkbox.get_DomElement();
                                if (code128CheckboxObj != null && code128CheckboxObj.prop("checked"))
                                    barcodeTypes = barcodeTypes.add("Code128");

                                var ean8CheckboxObj = ean8Checkbox.get_DomElement();
                                if (ean8CheckboxObj != null && ean8CheckboxObj.prop("checked"))
                                    barcodeTypes = barcodeTypes.add("EAN8");

                                if (barcodeTypes.toString() === "None") {
                                    alert("Error");
                                    return;
                                }
                                else {
                                    // create barcode reader
                                    var barcodeReader = new Vintasoft.Barcode.WebBarcodeReaderJS();
                                    // get barcode reader settings
                                    var barcodeReaderSettings = barcodeReader.get_Settings();
                                    // set the barcode types, which should be recognized
                                    barcodeReaderSettings.set_BarcodeType(barcodeTypes);



                                    /**
                                     Barcode recognition process is finished successfully.
                                     @param {object} data
                                    */
                                    function __readBarcodes__success(data) {
                                        __unblockUI();
                                        var docViewer = qrCheckbox.get_DocumentViewer();
                                        __showMessageAboutRecognitionResults(data.results);
                                        if (docViewer != null) {
                                            // create the objects, which will highlight the recognized barcodes on image
                                            var coloredObjects = __createHighlightingForBarcodes(data.results);
                                            var tool = viewer.get_VisualTool();
                                            if (tool == null || !(tool instanceof Vintasoft.Imaging.UI.VisualTools.WebHighlightToolJS)) {
                                                tool = new Vintasoft.Imaging.UI.VisualTools.WebHighlightToolJS();
                                                docViewer.set_CurrentVisualTool(tool);
                                            }
                                            tool.clearItems();
                                            // add the objects in highlight tool
                                            tool.addItems(coloredObjects);
                                        }
                                    }

                                    /**
                                     Shows information about recognized barcodes.
                                     @param {object} barcodes
                                    */
                                    function __showMessageAboutRecognitionResults(barcodes) {
                                        var message = __localizeText("Recognized barcodes") + ": " + barcodes.length;
                                        for (var i = 0; i < barcodes.length; i++) {
                                            var item = barcodes[i];
                                            message += "\n";
                                            message += '[' + (i + 1) + ':' + item.barcodeType + ']\n' + __localizeText('Value') + ': ' + item.value;
                                        }
                                        alert(message);
                                    }

                                    /**
                                     Creates an object, which will highlight the recognized barcode on an image.
                                     @param {object} barcodeInfo Information about recognized barcode.
                                     @returns {oject} An object, which will highlight the recognized barcode on an image.
                                    */
                                    function __createHighlightingForBarcode(barcodeInfo) {
                                        // create an array with points of barcode region
                                        var points = Array();
                                        var region = barcodeInfo.region;
                                        points.push({ x: region.leftTop.x, y: region.leftTop.y });
                                        points.push({ x: region.rightTop.x, y: region.rightTop.y });
                                        points.push({ x: region.rightBottom.x, y: region.rightBottom.y });
                                        points.push({ x: region.leftBottom.x, y: region.leftBottom.y });

                                        // creates an object, which will highlight the recognized barcode on an image
                                        var obj = Vintasoft.Imaging.UI.VisualTools.WebHighlightObjectJS.createObjectFromPolygon(points);
                                        // create the tooltip for highlighting
                                        obj.set_ToolTip(barcodeInfo.barcodeType + '\n' + barcodeInfo.value);
                                        // return the highlighting
                                        return obj;
                                    }

                                    /**
                                     Creates the objects, which will highlight the recognized barcodes on an image.
                                     @param {object|array} barcodeInfoArray An array with information about recognized barcodes.
                                     @returns {object} The objects, which will highlight the recognized barcodes on an image.
                                    */
                                    function __createHighlightingForBarcodes(barcodeInfoArray) {
                                        // an array with highlighting of barcodes
                                        var objects = Array();
                                        // for each recognized barcode
                                        for (var i = 0; i < barcodeInfoArray.length; i++) {
                                            // get information about recognized barcode
                                            var item = barcodeInfoArray[i];
                                            // create an object, which will highlight the recognized barcode on an image
                                            var obj = __createHighlightingForBarcode(item);

                                            // add highlighting to an array
                                            objects.push(obj);
                                        }
                                        // create the objects, which will highlight the recognized barcodes on an image
                                        return new Vintasoft.Imaging.UI.VisualTools.WebHighlightObjectsJS(objects, 'rgba(0,128,0,0.18)', 'rgba(0,128,0,0.75)');
                                    }



                                    // send an asynchronous request for barcode recognition
                                    barcodeReader.readBarcodes(focusedImage, __readBarcodes__success, __showErrorMessage);
                                    // block UI
                                    __blockUI(__localizeText('Read barcodes...'));
                                }
                            }
                            else
                                alert(__localizeText("No images to process."));
                        }
                        $(this).dialog("close");
                    }
                },
                {
                    text: "Cancel",
                    localizationId: "CancelButton",
                    click: function () {
                        $(this).dialog("close");
                    }
                }]
        };
        // create a jQuery dialog with barcode recognition settings
        var jQueryDialog = new Dialogs.jQuery.WebJqueryDialogJS([qrCheckbox, "br", dataMatrixCheckbox, "br", pdf417Checkbox,
            "br", aztecCheckbox, "br", code39Checkbox, "br", code128Checkbox, "br", ean8Checkbox],
            { cssClass: "vsdv-dialogContent", localizationId: "simpleBarcodeReadingDialog" }, dialogSettings);


        // create the button that allows to start the asynchronous barcode recognition process
        var readBarcodesButton = new UIElements.WebUiDialogButtonJS({
            cssClass: "vsdv-button barcodeReader",
            title: "Barcode reading",
            localizationId: "readBarcodesButton"
        }, jQueryDialog);



        /**
         Changes read barcode button state.
         @param {object} images Image collection.
        */
        function __updateReadBarcodeButtonState(images) {
            var isEnabled = images.get_Count() > 0;
            readBarcodesButton.set_IsEnabled(isEnabled);
        }



        // subscribe to the "activated" event of "Read barcodes" button
        $(readBarcodesButton).one("activated", function () {
            var docViewer = this.get_DocumentViewer();
            var imageViewer = docViewer.get_ImageViewer();
            var images = imageViewer.get_Images();

            // subscribe to the "changed" event of image collection of image viewer
            $(images).on("changed", function () {
                // clear information about recognized barcodes
                __updateReadBarcodeButtonState(this);
            });

            // clear information about recognized barcodes
            __updateReadBarcodeButtonState(images);
        });

        return readBarcodesButton;
    }
}



// === "Processing" toolbar ===

/**
 Creates UI panel with simple processing commands.
*/
function __createUiPanelWithSimpleImageProcessingCommands() {
    with (Vintasoft.Imaging.DocumentViewer) {
        var label = new UIElements.WebUiLabelElementJS({ "text": "Processing", localizationId: "processingLabel" });
        var button = new UIElements.WebUiElementContainerJS([label], { cssClass: "vsdv-subMenu-icon" });

        var invertCommandButton = new UIElements.WebUiButtonJS({
            cssClass: "vsdv-button invertButton",
            title: "Invert",
            localizationId: "invertImageButton",
            onClick: function (event, uiElement) {
                var invertCommand = new Vintasoft.Imaging.ImageProcessing.WebInvertCommandJS();
                var documentViewer = uiElement.get_DocumentViewer();
                __applyProccessingCommandToFocusedImage(documentViewer, invertCommand);
            }
        });

        var rotateCommandButton = new UIElements.WebUiButtonJS({
            cssClass: "vsdv-button rotate90Button",
            title: "Rotate 90",
            localizationId: "rotateImageButton",
            onClick: function (event, uiElement) {
                var rotateCommand = new Vintasoft.Imaging.ImageProcessing.WebRotateCommandJS();
                rotateCommand.set_Angle(90);
                var documentViewer = uiElement.get_DocumentViewer();
                __applyProccessingCommandToFocusedImage(documentViewer, rotateCommand);
            }
        });

        var flipXCommandButton = new UIElements.WebUiButtonJS({
            cssClass: "vsdv-button flipXButton",
            title: "FlipX",
            localizationId: "flipXImageButton",
            onClick: function (event, uiElement) {
                var flipXCommand = new Vintasoft.Imaging.ImageProcessing.WebFlipCommandJS();
                flipXCommand.set_RotateFlipType("RotateNoneFlipX");
                var documentViewer = uiElement.get_DocumentViewer();
                __applyProccessingCommandToFocusedImage(documentViewer, flipXCommand);
            }
        });

        var flipYCommandButton = new UIElements.WebUiButtonJS({
            cssClass: "vsdv-button flipYButton",
            title: "FlipY",
            localizationId: "flipYImageButton",
            onClick: function (event, uiElement) {
                var flipYCommand = new Vintasoft.Imaging.ImageProcessing.WebFlipCommandJS();
                flipYCommand.set_RotateFlipType("RotateNoneFlipY");
                var documentViewer = uiElement.get_DocumentViewer();
                __applyProccessingCommandToFocusedImage(documentViewer, flipYCommand);
            }
        });

        var cropCommandButton = new UIElements.WebUiButtonJS({
            cssClass: "vsdv-button cropButton",
            title: "Crop",
            localizationId: "cropImageButton",
            onClick: function (event, uiElement) {
                var cropCommand = new Vintasoft.Imaging.ImageProcessing.WebCropCommandJS();
                var documentViewer = uiElement.get_DocumentViewer();
                __applyProccessingCommandToFocusedImage(documentViewer, cropCommand);
            }
        });

        return new Panels.WebUiPanelJS(
            [invertCommandButton, rotateCommandButton, flipXCommandButton, flipYCommandButton, cropCommandButton, "vertDivider", "rectangularSelectionToolButton"],
            { cssClass: "vsdv-subMenu-contentPanel" }, button);
    }
}



// === "Annotations" toolbar ===

/**
 Creates UI panel with annotating functionality.
*/
function __createSimpleAnnotationPanel() {
    return new Vintasoft.Imaging.DocumentViewer.Panels.WebUiPanelJS(
        ["addRectangleAnnotationButton", "addTextAnnotationButton", "addLinesAnnotationButton",
            "vertDivider", "burnAnnotationsButton", "removeAnnotationButton"],
        { cssClass: "vsdv-subMenu-contentPanel" }, "annotationsMenuItem");
}



// === Init UI ===

/**
 Registers custom UI elements in "WebUiElementsFactoryJS".
*/
function __registerNewUiElements() {
    with (Vintasoft.Imaging.DocumentViewer) {
        // register the "Capture image" button in web UI elements factory
        WebUiElementsFactoryJS.registerElement("captureImageButton", __createCaptureImageButton);

        // register the "Image viewer settings" button in web UI elements factory
        WebUiElementsFactoryJS.registerElement("imageViewerSettingsButton", __createImageViewerSettingsButton);

        // register the "Pan" button in web UI elements factory
        WebUiElementsFactoryJS.registerElement("panToolButton", __createAnnotationAndPanToolButton);
        // register the "Rectangular selection" button in web UI elements factory
        WebUiElementsFactoryJS.registerElement("rectangularSelectionToolButton", __createRectangularSelectionAndAnnotationToolButton);
        // register the "Magnifier" button in web UI elements factory
        WebUiElementsFactoryJS.registerElement("magnifierToolButton", __createMagnifierAndAnnotationToolButton);
        // register the "Zoom" button in web UI elements factory
        WebUiElementsFactoryJS.registerElement("zoomToolButton", __createZoomAndAnnotationToolButton);
        // register the "Zoom selection" button in web UI elements factory
        WebUiElementsFactoryJS.registerElement("zoomSelectionToolButton", __createZoomSelectionAndAnnotationToolButton);
        // register the "Barcode recognition" button in web UI elements factory
        WebUiElementsFactoryJS.registerElement("barcodeReadingButton", __createBarcodeReadingButton);

        // register the "Image processing" panel in web UI elements factory
        WebUiElementsFactoryJS.registerElement("simpleProcessingMenuPanel", __createUiPanelWithSimpleImageProcessingCommands);

        // register the "Image annotating" panel in web UI elements factory
        WebUiElementsFactoryJS.registerElement("simpleAnnotationMenuPanel", __createSimpleAnnotationPanel);
    }
}

/**
 Initializes main menu of document viewer.
 @param {object} docViewerSettings Settings of document viewer.
*/
function __initMenu(docViewerSettings) {
    // get items of document viewer
    var items = docViewerSettings.get_Items();

    // get the main menu of document viewer
    var mainMenu = items.getItemByRegisteredId("mainMenu");
    // if main menu is found
    if (mainMenu != null) {
        // get items of main menu
        var mainMenuItems = mainMenu.get_Items();

        // add new items to the main menu

        mainMenuItems.addItem("simpleProcessingMenuPanel");
        mainMenuItems.addItem("simpleAnnotationMenuPanel");
    }

    // get the "File" menu panel
    var fileMenuPanel = items.getItemByRegisteredId("fileToolbarPanel");
    // if menu panel is found
    if (fileMenuPanel != null) {
        // get items of file menu panel
        var fileMenuPanelItems = fileMenuPanel.get_Items();
        // remove the "Upload file" button from menu panel
        fileMenuPanelItems.removeItemAt(0);
        // add the "Capture image" button to the menu panel
        fileMenuPanelItems.insertItem(0, "captureImageButton");
    }

    // get the "View" menu panel
    var viewMenuPanel = items.getItemByRegisteredId("viewMenuPanel");
    // if menu panel is found
    if (viewMenuPanel != null) {
        // get items of menu panel
        var viewMenuPanelItems = viewMenuPanel.get_Items();
        // add the "Image viewer settings" button to the menu panel
        viewMenuPanelItems.insertItem(viewMenuPanelItems.get_Count() - 1, "imageViewerSettingsButton");
    }

    // get the "Visual tools" menu panel
    var visualToolsToolbarPanel = items.getItemByRegisteredId("visualToolsToolbarPanel");
    // if menu panel founded
    if (visualToolsToolbarPanel != null) {
        // get items of visual tool menu panel
        var visualToolsToolbarPanelItems = visualToolsToolbarPanel.get_Items();

        // add "Barcode reading" button to the menu panel
        visualToolsToolbarPanelItems.addItem("barcodeReadingButton");
    }
}

/**
 Initializes side panel of document viewer.
 @param {object} docViewerSettings Settings of document viewer.
*/
function __initSidePanel(docViewerSettings) {
    // get items of document viewer
    var items = docViewerSettings.get_Items();

    // get the thumbnail viewer panel of document viewer
    var thumbnailViewerPanel = items.getItemByRegisteredId("thumbnailViewerPanel");
    // if panel is found
    if (thumbnailViewerPanel != null)
        // subscribe to the "actived" event of the thumbnail viewer panel of document viewer
        $(thumbnailViewerPanel).one("activated", __thumbnailsPanelActivated);
}

/**
 Thumbnail viewer panel of document viewer is actived.
*/
function __thumbnailsPanelActivated() {
    var thumbnailViewer = this.get_ThumbnailViewer();
    if (thumbnailViewer != null) {
        // specify that the thumbnail viewer must use the progress image for indicating the thumbnail loading progress
        thumbnailViewer.set_ProgressImage(progressImage);

        // additional bottom space for text with page number under thumbnail
        var textCaptionHeight = 18;
        var padding = thumbnailViewer.get_ThumbnailPadding();
        padding[2] += textCaptionHeight
        thumbnailViewer.set_ThumbnailPadding(padding);
        thumbnailViewer.set_DisplayThumbnailCaption(true);
    }
}



// === Block/unblock UI ===

/**
 Blocks the UI. 
 @param {string} text Message that describes why UI is blocked.
*/
function __blockUI(text) {
    $.blockUI({ message: '<h1>' + text + '</h1><img src="Images/fileUploadProgress.gif"/>' })
}

/**
 Unblocks the UI.
*/
function __unblockUI() {
    $.unblockUI();
}



// === Image processing ===

/**
 Applies specified command to the image, which is focused in image viewer.
 @param {object} docViewer The document viewer.
 @param {object} command Processing command.
*/
function __applyProccessingCommandToFocusedImage(docViewer, command) {
    if (docViewer != null) {
        var viewer = docViewer.get_ImageViewer();

        var focusedImage = viewer.get_FocusedImage();
        if (focusedImage != null) {

            if ((command instanceof Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionJS) ||
                (command instanceof Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS)) {

                // get rectangular selection tool
                var rectangularSelectionTool = docViewer.getVisualToolById("RectangularSelectionTool");
                // if tool is active
                if (rectangularSelectionTool.get_IsEnabled()) {
                    // get region of interest from rectangular selection visual tool
                    var rect = rectangularSelectionTool.get_Rectangle();
                    // set region of interest in image processing command
                    command.set_Region(rect.x, rect.y, rect.width, rect.height);
                }
            }

            // apply command to the image
            var commandApplicable = command.execute(focusedImage, __unblockUI, __showErrorMessage);
            if (commandApplicable)
                // block the UI
                __blockUI(__localizeText("Image processing"));
            else
                alert(__localizeText("Select region at image."));
        }
        else
            alert(__localizeText("No images to process."));
    }
}




// === Utils ===

/**
 Shows an error message.
 @param {object} data Information about error.
*/
function __showErrorMessage(data) {
    __unblockUI();
    new ErrorMessageDialogJS(data);
}



// === Visual Tools ===

/**
 Initializes visual tools.
 @param {object} docViewer The document viewer.
*/
function __initializeVisualTools(docViewer) {
    var zoomTool = docViewer.getVisualToolById("ZoomTool");
    var panTool = docViewer.getVisualToolById("PanTool");
    var magnifierTool = docViewer.getVisualToolById("MagnifierTool");
    var zoomSelectionTool = docViewer.getVisualToolById("ZoomSelectionTool");

    var zoomCursor = "url('Content/Cursors/Zoom.cur'), auto";
    var magnifierCursor = "url('Content/Cursors/Magnifier.cur'), auto";
    var panCursor = "url('Content/Cursors/CloseHand.cur'), auto";

    panTool.set_Cursor("pointer");
    panTool.set_ActionCursor(panCursor);

    magnifierTool.set_Cursor(magnifierCursor);

    zoomTool.set_Cursor(zoomCursor);
    zoomTool.set_ActionCursor(zoomCursor);

    zoomSelectionTool.set_ActionCursor(zoomCursor);
}





// === Localize text ===

function __localizeText(text) {
    var localizator = window.localizator;
    if (localizator == null || !localizator.get_IsReady())
        return text;

    var key;
    switch (text) {
        case "Image Viewer Settings":
            key = "imageViewerSettingsTitle";
            break;
        case "Cancel":
            key = "cancelButtonText";
            break;
        case "Upload file":
            key = "uploadFileMessage";
            break;
        case "Image uploading":
            key = "imageUploadingMessage";
            break;
        case "Download file":
            key = "downloadFileMessage";
            break;
        case "Image prepared to print":
            key = "imagePreparedToPrintMessage";
            break;
        case "Image processing":
            key = "imageProcessingMessage";
            break;
        case "Select region at image.":
            key = "selectRegionAtImageMessage";
            break;
        case "No images to process.":
            key = "noImageToProcessMessage";
            break;
        case "Read barcodes...":
            key = "readBarcodesMessage";
            break;
        case "Burn annotations":
            key = "burnAnnotationsMessage";
            break;
        case "Capture from camera":
            key = "captureFromCameraTitle";
            break;
        case "Your browser doesn't support 'mediaDevices'.":
            key = "doesntSupportMediaDevicesMessage";
            break;
        case "Video devices are not found.":
            key = "noVideoDevicesMessage";
            break;
        case "Wrong page indexes.":
            key = "wrongPageIndexesMessage";
            break;
        case "Argument type exception.":
            key = "argumentTypeExceptionMessage";
            break;
        case "Error":
            key = "errorTitle";
            break;
        case "Recognized barcodes":
            key = "recognizedBarcodesText";
            break;
        case "Value":
            key = "barcodeValueText";
            break;
    }
    if (key == null)
        return text;
    var localizedText = localizator.getLocalizationInfo(key);
    if (localizedText == null)
        localizedText = text;
    return localizedText;
}





// === Main ===

with (Vintasoft.Shared) {
    // set the session identifier
    WebImagingEnviromentJS.set_SessionId($("#hiddenSessionField").val());

    // specify web services, which should be used in this demo
    var fileService = new WebServiceHandlerJS("Handlers/File/CameraDemoImageFileHandler.ashx");

    WebServiceJS.defaultFileService = fileService;
    WebServiceJS.defaultImageCollectionService = new WebServiceHandlerJS("Handlers/ImageCollection/MyVintasoftImageCollectionHandler.ashx");
    WebServiceJS.defaultImageService = new WebServiceHandlerJS("Handlers/ImageRendering/MyVintasoftImageHandler.ashx");
    WebServiceJS.defaultImageProcessingService = new WebServiceHandlerJS("Handlers/ImageProcessing/MyVintasoftImageProcessingHandler.ashx");
    WebServiceJS.defaultBarcodeService = new WebServiceHandlerJS("Handlers/Barcodes/MyVintasoftBarcodeHandler.ashx");
    WebServiceJS.defaultAnnotationService = new WebServiceHandlerJS("Handlers/Annotations/MyVintasoftAnnotationCollectionHandler.ashx");
}

var localizator = new Vintasoft.Shared.VintasoftLocalizationJS();
window.localizator = localizator;
window.localizeText = __localizeText;

// create the progress image
var progressImage = new Image();
progressImage.src = "Images/fileUploadProgress.gif";

// register new UI elements
__registerNewUiElements();

// create the document viewer settings
var docViewerSettings = new Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS("documentViewerContainer", { annotations: true });

// initialize main menu of document viewer
__initMenu(docViewerSettings);

// initialize side panel of document viewer
__initSidePanel(docViewerSettings);

// create the document viewer
var docViewer = new Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS(docViewerSettings);

// subscribe to the "warningOccured" event of document viewer
$(docViewer).on("warningOccured", function (event, message) {
    var localizedMessage = __localizeText(message);
    // show the alert if warning occured
    alert(localizedMessage);
});

// subscribe to the asyncOperationStarted event of document viewer
$(docViewer).on("asyncOperationStarted", function (event, data) {
    // get description of asynchronous operation
    var description = data.description;

    // if image is prepared for printing
    if (description === "Image prepared to print") {
        // do not block UI when images are preparing for printing
    }
    else {
        var localizedDescription = __localizeText(data.description);
        // block UI
        __blockUI(localizedDescription);
    }
});

// subscribe to the asyncOperationFinished event of document viewer
$(docViewer).on("asyncOperationFinished", function (event, data) {
    // unblock UI
    __unblockUI();
});

// subscribe to the asyncOperationFailed event of document viewer
$(docViewer).on("asyncOperationFailed", function (event, data) {
    // unblock UI
    __unblockUI();

    // get description of asynchronous operation
    var description = data.description;
    // get additional information about asynchronous operation
    var additionalInfo = data.data;
    // if additional information exists
    if (additionalInfo != null)
        // show error message
        new ErrorMessageDialogJS(additionalInfo);
    // if additional information does NOT exist
    else
        // show error message
        new ErrorMessageDialogJS(description + ": unknown error.");
});

__initializeVisualTools(docViewer);


if (localizator.get_IsReady()) {
    docViewer.localize();
    localizator.localizeDocument();
}
else
    $(localizator).on("ready", function () {
        docViewer.localize();
        this.localizeDocument();
    });

$(docViewer).on("localize", function (event, data) {
    var id = data.id;
    var res = localizator.getLocalizationInfo(id);
    if (res != null)
        data.val = res;
});

var interactionAreaAppearanceManager = docViewer.getInteractionAreaAppearanceManager();
var rotationPoint = interactionAreaAppearanceManager.get_RotationPoint();
// set the cursor for interaction point that allows to rotate annotation
rotationPoint.set_Cursor("url('Content/Cursors/Rotate.cur'), auto");

// get the image viewer of document viewer
var imageViewer1 = docViewer.get_ImageViewer();
// specify that image viewer must show images in the single continuous column mode
imageViewer1.set_DisplayMode(new Vintasoft.Imaging.WebImageViewerDisplayModeEnumJS("SingleContinuousColumn"));
// specify that image viewer must show images in the fit width mode
imageViewer1.set_ImageSizeMode(new Vintasoft.Imaging.WebImageSizeModeEnumJS("FitToWidth"));
// specify that the image viewer must use the progress image for indicating the image loading progress
imageViewer1.set_ProgressImage(progressImage);

