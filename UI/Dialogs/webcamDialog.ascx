<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="webcamDialog.ascx.cs" Inherits="AspNetDemo.UI.Dialogs.webcamDialog" %>

<script src="Scripts/UI/videoInputDeviceManager.js"></script>
<script src="Scripts/UI/Dialogs/webcamDialog.js"></script>

<div id="webCameraDialogWindow" localizationId="webCamDialog" class="modalDialog" style="overflow: hidden;">
    <div style="text-align: center; width: 780px; height: 490px; overflow: auto">
        <video id="webCamVideo" autoplay="autoplay"></video>
    </div>
    <div style="text-align:center;margin-top:5px">
        <label id="videoInputLabel" localizationId="videoInputLabel" style="margin-left:5px; margin-right:5px;">Video source: </label><select id="videoSourceSelect"></select>
        <input type="button" id="refreshDevicesListButton" value="Refresh devices" localizationId="refreshDevicesButton" />
        <br />
        <input id="captureVideoFrameButton" type="button" value="Capture image" localizationId="captureImageButton" disabled />
        <canvas id="capturedFrameCanvas" style="display:none"></canvas>
    </div>
</div>
