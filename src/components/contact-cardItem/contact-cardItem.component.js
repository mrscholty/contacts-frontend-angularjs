'use strict';
angular.module('contact-cardItem')
    .component('contactCardItem', {
        templateUrl: 'components/contact-cardItem/contact-cardItem.template.html',
        controller: [function ContactCardItemController() {
        }],
        bindings: {
            contact: '<'
        }
    });