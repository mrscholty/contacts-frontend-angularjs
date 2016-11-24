'use strict';
angular.module('contact-tableview')
    .component('contactTableview', {
        templateUrl: 'components/contact-tableview/contact-tableview.template.html',
        controller: [function ContactTableViewController() {
        }],
        bindings: {
            contacts: '<'
        }
    });