define([
    "jquery", "Magento_Ui/js/modal/modal"
], function (
    $,
    modal,
    alert
) {
        return function(config, element) {
            $(element).click(function() {
                var options = {
                    type: 'popup',
                    responsive: true,
                    innerScroll: true,
                    title: 'Example Modal',
                    buttons: [{
                        text: $.mage.__('OK'),
                        class: '',
                        click: function () {
                            window.alert("Success ＼(^_^)／");
                            this.closeModal();
                        }
                    },
                        {
                            text: $.mage.__('Cancel'),
                            class: '',
                            click: function () {
                                this.closeModal();
                            }
                        }
                    ],
                };
                var popup = modal(options, $('#modal-content'));
                $('#modal-content').modal('openModal');
            });
        }

    }
);
