/**
 A dialog that allows to capture images from the camera.
*/
WebcamDialogJS = function (viewer) {

    /**
     Creates the dialog.
    */
    function __create() {
        var title = "Capture from camera";
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
            width: 800,
            height: 700,
            draggable: true,
            close: __close,
            buttons: [
                {
                    text: cancelButtonText,
                    click: function () { $(this).dialog("close"); }
                }
            ]
        };
        _dialog._webCameraDialogWindow.dialog(settings);
    }

    /**
     Opens the dialog.
    */
    WebcamDialogJS.prototype.open = function (event) {
        if (navigator.mediaDevices)
            this._videoInputDeviceManager.refreshDevices(__getVideoDevices_success, __handleError);
        else {
            var message = "Your browser doesn't support 'mediaDevices'.";
            if (window.localizeText != null)
                message = window.localizeText(message);
            __handleError(message);
        }
    }

    /**
     Closes the dialog.
    */
    function __close() {
        _dialog.set_SelectedDevice();
    }

    /**
     Sets a selected video device.
    */
    WebcamDialogJS.prototype.set_SelectedDevice = function (device) {
        if (device != null && !(device instanceof VideoInputDeviceJS))
            throw new Error("Argument type exception");
        // if previously selected device is defined
        if (this._selectedDevice != null) {
            // stop playing video
            this._selectedDevice.deactivate();
            $(this._selectedDevice).off();
        }

        // block the "Capture" button
        __blockCaptureFrameButton();

        // set new device as selected
        this._selectedDevice = device;

        // if new selected device is defined
        if (this._selectedDevice != null) {
            // start playing video
            this._selectedDevice.activate(this._videoElement, __unblockCaptureFrameButton, __handleError);
            $(this._selectedDevice).on("closed", __selectedVideoDeviceClosed);
        }
    }

    /**
     Selected device is closed.
    */
    function __selectedVideoDeviceClosed(event) {
        _dialog.set_SelectedDevice();
    }

    /**
     Selected video input is changed.
    */
    function videoSourceSelect_change() {
        // get new selected device id
        var newDeviceId = _dialog._deviceSelectList.value;
        // if selected device exist and have same id
        if (_dialog._selectedDevice != null && _dialog._selectedDevice.get_Id() === newDeviceId)
            // exit
            return;

        var newDevice = _dialog._videoInputDeviceManager.findDeviceById(newDeviceId);
        _dialog.set_SelectedDevice(newDevice);
    }

    /**
     Refreshes list of available devices.
    */
    function refreshDevicesListButton_click() {
        // block capture button
        __blockCaptureFrameButton();

        // refresh the list of available video devices
        _dialog._videoInputDeviceManager.refreshDevices(__getVideoDevices_success, __handleError);
    }

    /**
     Captures video frame.
    */
    function captureVideoFrameButton_click() {
        if (!_dialog._frameUploading) {
            if (_dialog._selectedDevice != null) {
                // get image as a Base64 string
                var frameAsBase64String = _dialog._selectedDevice.captureFrameAsBase64String(document.getElementById("capturedFrameCanvas"));

                // upload video frame to the server
                __uploadVideoFrame(frameAsBase64String);
            }
        }
    }

    /**
     Uploads video frame to the server.
    */
    function __uploadVideoFrame(frameAsBase64String) {
        // start the asynchronous frame uploading process
        Vintasoft.Imaging.VintasoftFileAPI.uploadBase64Image(frameAsBase64String, "camera.png", __uploadVideoFrame_success, __uploadVideoFrame_error);

        // specify that frame uploading is started
        _dialog._frameUploading = true;
    }

    /**
     Video frame is uploaded successfully.
    */
    function __uploadVideoFrame_success(data) {
        // add the uploaded frame image to the image viewer
        __addImageToImageViewer(data.imageInfo);

        // specify that frame uploading is finished
        _dialog._frameUploading = false;
    }

    /**
     Video frame is NOT uploaded.
    */
    function __uploadVideoFrame_error(data) {
        __handleError(data);
        _dialog._frameUploading = false;
    }

    /**
     Adds the image to the image viewer.
    */
    function __addImageToImageViewer(imageInfo) {
        var viewer = _dialog._viewer;
        var images = viewer.get_Images();

        var source = new Vintasoft.Shared.WebImageSourceJS(imageInfo.imageId);
        var image = new Vintasoft.Shared.WebImageJS(source, imageInfo.pageIndex);

        images.add(image);
        var imageCount = images.get_Count();
        viewer.set_FocusedIndex(imageCount - 1);
    }

    /**
     Information about video devices is received successfully.
    */
    function __getVideoDevices_success(videoInputDeviceManager) {
        var devices = videoInputDeviceManager.get_Devices();

        if (devices.length > 0) {
            // update information about available devices
            __updateDevicesList(devices);

            // if dialog is visible
            if (_dialog._webCameraDialogWindow.is(":visible")) {
                // if active device is NOT defined
                if (_dialog._selectedDevice == null)
                    // use the first video device as active device
                    _dialog.set_SelectedDevice(devices[0]);
                else
                    __unblockCaptureFrameButton();
            }
            // else
            else {
                // create dialog window
                __create();

                // after timeout activate first video device
                setTimeout(function () {
                    _dialog.set_SelectedDevice(devices[0]);
                }, 500);
            }
        }
        else {
            var message = "Video devices are not found.";
            if (window.localizeText != null)
                message = window.localizeText(message);
            __handleError(message);
        }
    }

    /**
     Updates information about available video devices in select element.
    */
    function __updateDevicesList(devices) {
        // id of selected device
        var selectedDeviceId;
        // if selected device exists
        if (_dialog._selectedDevice != null)
            // get id
            selectedDeviceId = _dialog._selectedDevice.get_Id();

        __clearDeviceSelectList();

        _fillDeviceSelectList(devices);

        __selectDeviceInDeviceSelectList(selectedDeviceId);
    }

    /**
     Clears list with information about available video devices.
    */
    function __clearDeviceSelectList() {
        _dialog._deviceSelectList.options.length = 0;
    }

    /**
     Writes information about available video devices in select element.
    */
    function _fillDeviceSelectList(devices) {
        // for each device info
        for (var i = 0; i < devices.length; i++) {
            // create option for device select list
            var opt = __createOptionElementForDeviceSelectList(devices[i]);

            // add option to the device select list
            _dialog._deviceSelectList.appendChild(opt);
        }
    }

    /**
     Creates option element for the specified video device.
    */
    function __createOptionElementForDeviceSelectList(device) {
        var deviceId = device.get_Id();

        // create option element
        var opt = document.createElement("option");
        // save information about device id
        opt.value = deviceId;
        // use device name as option text
        opt.text = device.get_Name();

        return opt;
    }

    /**
     Selects option element for the specified video device.
    */
    function __selectDeviceInDeviceSelectList(selectedDeviceId) {
        // for each device info
        for (var i = 0; i < _dialog._deviceSelectList.options.length; i++) {
            // create option for device select list
            var opt = _dialog._deviceSelectList.options[i];

            // if current device is selected
            if (selectedDeviceId === opt.value) {
                // specify that option is selected
                opt.selected = true;
                break;
            }
        }
    }

    /**
     Disables the "Capture frame" button.
    */
    function __blockCaptureFrameButton() {
        $("#captureVideoFrameButton").prop("disabled", true);
    }

    /**
     Enables the "Capture frame" button.
    */
    function __unblockCaptureFrameButton() {
        $("#captureVideoFrameButton").prop("disabled", false);
    }

    /** 
     Handles the error.
    */
    function __handleError(error) {
        var message = "";
        if (typeof error === "object") {
            if (error.constraintName)
                message += "constraintName: " + error.constraintName + "\n";
            if (error.name)
                message += "name: " + error.name + "\n";
            if (error.message)
                message += "message: " + error.message + "\n";
        }
        else
            message = error;

        new ErrorMessageDialogJS(message);

        // if dialog is visible
        if (_dialog._webCameraDialogWindow.is(":visible"))
            // close it
            _dialog._webCameraDialogWindow.dialog("close");
    }

        
    this._webCameraDialogWindow = $("#webCameraDialogWindow");
    this._deviceSelectList = $("#videoSourceSelect")[0];
    this._videoElement = $("#webCamVideo")[0];

    this._viewer = viewer;
    this._videoInputDeviceManager = new VideoInputDeviceManagerJS();
    this._frameUploading = false;
    this._selectedDevice = null;

    var _dialog = this;

    $("#captureVideoFrameButton").on("click", captureVideoFrameButton_click)
    $("#videoSourceSelect").on('change', videoSourceSelect_change);
    $("#refreshDevicesListButton").on("click", refreshDevicesListButton_click);

}