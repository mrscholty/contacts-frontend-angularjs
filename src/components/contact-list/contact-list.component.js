'use strict';
angular.module('contact-list')
    .component('contactList', {
        templateUrl: 'components/contact-list/contact-list.template.html',
        controller: ['ContactsService', function ContactListController(ContactsService) {

            var ctrl = this;
            ctrl.contacts = [];
            ctrl.filteredContacts = [];
            ctrl.contactListView = 'table';
            ctrl.searchTerm = '';

            ctrl.filterContacts = function () {
                console.log('change');
                angular.copy(ctrl.contacts.filter(function (item) {
                        return ((item.first_name.toLowerCase()
                            .indexOf(ctrl.searchTerm.toLowerCase()) >= 0) ||
                        (item.last_name.toLowerCase()
                            .indexOf(ctrl.searchTerm.toLowerCase()) >= 0));
                    }),
                    ctrl.filteredContacts);
            };

            ctrl.setTableView = function () {
                ctrl.contactListView = 'table';
            };

            ctrl.setCardView = function () {
                ctrl.contactListView = 'card';
            };

            ContactsService.getAll()
                .then(function (data) {
                    angular.copy(data, ctrl.contacts);
                    ctrl.filterContacts();
                })
                .catch(function (err) {
                    console.log('Error');
                });

        }]
    });