﻿<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="imageViewerSettingsPanel.ascx.cs" Inherits="AspNetDemo.UI.Panels.imageViewerSettingsPanel" %>

<script src="Scripts/UI/Dialogs/imageViewerSettingsDialog.js" type="text/javascript"></script>
<div id="imageViewerSettingsDialogWindow" localizationId="imageViewerSettingsDialog" class="modalDialog">
    <table border="1" class="propertyTable">
        <tr>
            <td class="spoiler open" colspan="2">
                <label localizationId="imageDisplayModeLabel">Image display mode</label>
            </td>
        </tr>
        <tr>
            <td colspan="2" style="padding-left:10px;">
                <table border="1" class="propertyTable">
                    <tr>
                        <td><label localizationId="imageAnchorLabel">Image anchor:</label></td>
                        <td>
                            <select id="imageAnchorSelect" localizationId="imageAnchorSelect">
                                <option value="None" localizationId="noneOption">None</option>
                                <option value="TopLeft" localizationId="topLeftOption">Top|Left</option>
                                <option value="Top" localizationId="topOption">Top</option>
                                <option value="TopRight" localizationId="topRightOption">Top|Right</option>
                                <option value="Right" localizationId="rightOption">Right</option>
                                <option value="BottomRight" localizationId="bottomRightOption">Bottom|Right</option>
                                <option value="Bottom" localizationId="bottomOption">Bottom</option>
                                <option value="BottomLeft" localizationId="bottomLeftOption">Bottom|Left</option>
                                <option value="Left" localizationId="leftOption">Left</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label localizationId="multipageDisplayModeLabel">Multipage display mode:</label></td>
                        <td>
                            <select id="multipageDisplayModeSelect" localizationId="multipageDisplayModeSelect">
                                <option value="AllImages" localizationId="allImagesOption">AllImages</option>
                                <option value="FixedImages" selected localizationId="fixedImagesOption">FixedImages</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label localizationId="layoutDirectionLabel">Layout direction:</label></td>
                        <td>
                            <select id="multipageLayoutDirectionSelect" localizationId="multipageLayoutDirectionSelect">
                                <option value="Horizontal" localizationId="horizontalOption">Horizontal</option>
                                <option value="Vertical" selected localizationId="verticalOption">Vertical</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label localizationId="rowColumnCountLabel">Images in row/column: </label></td>
                        <td><input id="multipageImagesInRowInput" type="number" min="1" value="1" style="width:100px" /></td>
                    </tr>
                    <tr>
                        <td><label localizationId="imagesPaddingLabel">Images padding: </label></td>
                        <td> <input id="multipageImagesPadding" type="number" min="0" value="4" style="width:100px" /></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td colspan="2" class="spoiler open"><label localizationId="appearancesLabel">Appearances</label></td>
        </tr>
        <tr>
            <td colspan="2" style="padding-left:10px">
                <table border="1" class="propertyTable">
                    <tr>
                        <td colspan="2" class="spoiler open"><label localizationId="imageAppearanceLabel">Image appearance</label></td>
                    </tr>
                    <tr>
                        <td colspan="2" style="padding-left:10px">
                            <table border="1" class="propertyTable">
                                <tr>
                                    <td><label localizationId="imageAppearanceBackColorLabel">Back color:</label></td>
                                    <td><input id="imageAppearanceBackColorInput" type="text" style="width:95%" /></td>
                                </tr>
                                <tr>
                                    <td><label localizationId="imageAppearanceBorderColorLabel">Border color:</label></td>
                                    <td><input id="imageAppearanceBorderColorInput" type="text" style="width:95%" /></td>
                                </tr>
                                <tr>
                                    <td><label localizationId="imageAppearanceBorderWidthLabel">Border width:</label></td>
                                    <td><input id="imageAppearanceBorderWidthInput" type="number" min="0" max="32" value="1" /></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="spoiler open"><label localizationId="focusedImageAppearanceLabel">Focused image appearance</label></td>
                    </tr>
                    <tr>
                        <td colspan="2" style="padding-left:10px">
                            <table border="1" class="propertyTable">
                                <tr>
                                    <td><label localizationId="imageAppearanceBackColorLabel">Back color:</label></td>
                                    <td><input id="focusedImageAppearanceBackColorInput" type="text" style="width:95%" /></td>
                                </tr>
                                <tr>
                                    <td><label localizationId="imageAppearanceBorderColorLabel">Border color:</label></td>
                                    <td><input id="focusedImageAppearanceBorderColorInput" type="text" style="width:95%" /></td>
                                </tr>
                                <tr>
                                    <td><label localizationId="imageAppearanceBorderWidthLabel">Border width:</label></td>
                                    <td><input id="focusedImageAppearanceBorderWidthInput" type="number" min="0" max="32" value="1" /></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="useAppearanceInSinglePageMode" localizationId="useAppearanceInSinglePageModeLabel">Use image appearance in single-page mode</label>
                        </td>
                        <td>
                            <input type="checkbox" id="useAppearanceInSinglePageMode" />
                        </td>
                    </tr>
                </table>
            </td>
        </tr>       
        <tr>
            <td class="spoiler open" colspan="2">
                <label localizationId="renderingSettigsLabel">Rendering settings</label>
            </td>
        </tr>
        <tr>
            <td colspan="2" style="padding-left:10px;">
                <table border="1" class="propertyTable">
                    <tr>
                        <td>
                            <label for="imageViewerDefaultRendSettingsCheckbox" localizationId="defaultRenderingSettigsLabel">Default Settings</label>
                        </td>
                        <td>
                            <input id="imageViewerDefaultRendSettingsCheckbox" type="checkbox" checked />
                        </td>
                    </tr>
                    <tr class="customRenderingSettings">
                        <td><label for="imageViewerRendSettingsHorRes" localizationId="horResLabel">Horizontal Resolution:</label></td>
                        <td><input id="imageViewerRendSettingsHorRes" type="number" step="1" value="0" min="0" style="width:100px" disabled /></td>
                    </tr>
                    <tr class="customRenderingSettings">
                        <td><label for="imageViewerRendSettingsVertRes" localizationId="vertResLabel">Vertical Resolution:</label></td>
                        <td><input id="imageViewerRendSettingsVertRes" type="number" step="1" value="0" min="0" style="width:100px" disabled /></td>
                    </tr>
                    <tr class="customRenderingSettings">
                        <td><label localizationId="smoothingLabel">Smoothing Mode:</label></td>
                        <td>
                            <select id="imageViewerRendSettingsSmoothing" disabled>
                                <option>AntiAlias</option>
                                <option>Default</option>
                                <option selected>HighQuality</option>
                                <option>HighSpeed</option>
                                <option>None</option>
                            </select>
                        </td>
                    </tr>
                    <tr class="customRenderingSettings">
                        <td><label localizationId="interpolationLabel">Interpolation Mode:</label></td>
                        <td>
                            <select id="imageViewerRendSettingsInterpolation" disabled>
                                <option value="Bicubic">Bicubic</option>
                                <option value="Bilinear">Bilinear</option>
                                <option value="Default">Default</option>
                                <option value="High">High</option>
                                <option value="HighQualityBicubic">HighQualityBicubic</option>
                                <option value="HighQualityBilinear" selected>HighQualityBilinear</option>
                                <option value="Low">Low</option>
                                <option value="NearestNeighbor">NearestNeighbor</option>
                            </select>
                        </td>
                    </tr>
                    <tr class="customRenderingSettings pdfRenderingSettings" style="display:none">
                        <td>
                            <label for="drawNonMarkupAnnotations" localizationId="drawNonMarkupAnnotationsLabel">Draw non markup annotation</label>
                        </td>
                        <td>
                            <input id="drawNonMarkupAnnotations" type="checkbox" checked disabled/>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr>
            <td class="spoiler open" colspan="2">
                <label localizationId="otherSettigsLabel">Other settings</label>
            </td>
        </tr>
        <tr>
            <td colspan="2" style="padding-left:10px;">
                <table border="1" class="propertyTable">
                    <tr>
                        <td><label for="imageViewerColorManagementCheckbox" localizationId="colorManagementLabel">Enable color management:</label></td>
                        <td><input id="imageViewerColorManagementCheckbox" type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td><label for="imageViewerCenterImageCheckbox" localizationId="centerImageLabel">Center image:</label></td>
                        <td><input id="imageViewerCenterImageCheckbox" type="checkbox" checked /></td>
                    </tr>
                    <tr>
                        <td><label localizationId="tileSizeLabel">Tile size:</label></td>
                        <td>
                            <select id="imageViewerTileSize">
                                <option>512x512</option>
                                <option selected>1024x1024</option>
                                <option>2048x2048</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label localizationId="backgroundColorLabel">Background color:</label></td>
                        <td><input id="imageViewerBackgroundColor" type="text" style="width:95%" /></td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</div>