'use strict';
angular.module('contact-cardview')
    .component('contactCardview', {
        templateUrl: 'components/contact-cardview/contact-cardview.template.html',
        controller: [function ContactCardViewController() {
        }],
        bindings: {
            contacts: '<'
        }
    });