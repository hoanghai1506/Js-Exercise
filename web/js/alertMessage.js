/**
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2023 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

define([
    "jquery",
    "Magento_Ui/js/modal/alert",
    "jquery/ui"
], function($, alert) {
    return function(config, element) {
        // on click event
        $(element).click(function() {
            console.log("test");
            $.widget("mage.alertMessage", {
                options: {
                    confirmMsg: "This is a test message. ＼(^_^)／",
                },
                _create: function () {
                    var self = this;
                    alert({
                        content: self.options.confirmMsg,
                    });
                    $("#texttest").hover(function () {
                        var test = $("#texttest").val();
                        console.log(test);
                    });
                },
            });
            // call the alertMessage widget
            $.mage.alertMessage({
                divElement: element,
            });
        });
    }
});
