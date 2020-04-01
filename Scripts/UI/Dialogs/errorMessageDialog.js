/**
 A dialog that allows to show error message.
*/
ErrorMessageDialogJS = function (markup) {
    var title = "Error";
    if (window.localizeText != null)
        title = window.localizeText(title);
    // create a dialog settings
    var settings = {
        modal: true,
        resizable: false,
        draggable: false,
        closeOnEscape: true,
        title: title,
        width: 'auto',
        height: 'auto',
        maxWidth: window.innerWidth,
        maxHeight: window.innerHeight,
        close: function () {
            $("#errorMessageDialog").html("");
        },
        buttons: [
            {
                text: "OK",
                click: function () { $(this).dialog("close"); }
            }
        ]
    };

    var htmlMarkup;
    if (typeof markup == "string") {
        htmlMarkup = markup;
    }
    else if (typeof markup == "object") {
        if (markup.errorMessage) {
            htmlMarkup = markup.errorMessage;
        }
        else if (markup.responseJSON != null) {
            if (markup.responseJSON.Message != null && markup.responseJSON.MessageDetail != null) {
                htmlMarkup = markup.responseJSON.Message + "<br /><br />" + markup.responseJSON.MessageDetail;
            }
            else {
                htmlMarkup = markup.responseJSON.ExceptionMessage;
            }
        }
        else {
            if (markup.responseText.Message != null && markup.responseText.MessageDetail != null) {
                htmlMarkup = markup.responseText.Message + "<br /><br />" + markup.responseText.MessageDetail;
            }
            else {
                htmlMarkup = markup.responseText;
            }
        }
    }

    $("#errorMessageDialog").html(htmlMarkup);
    $("#errorMessageDialog").dialog(settings);
}