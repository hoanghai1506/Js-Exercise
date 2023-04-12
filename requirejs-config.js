/**
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2023 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */



var config = {
    "map": {
        "*": {
            "myCustomWidget": "Tigren_CustomerGroupCatalog/js/my-custom-widget",
            "modalExample": "Tigren_CustomerGroupCatalog/js/modal-example",
            "catalog-add-to-cart-mixin": "Tigren_CustomerGroupCatalog/js/catalog-add-to-cart-mixin",
            "test_Js": "Tigren_CustomerGroupCatalog/js/alertMessage"
        }
    },
    config: {
        mixins: {
            'Magento_Catalog/js/catalog-add-to-cart': {
                'Tigren_CustomerGroupCatalog/js/catalog-add-to-cart-mixin': true
            }
        }
    }
};
