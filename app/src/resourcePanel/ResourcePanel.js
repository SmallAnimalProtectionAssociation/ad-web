(function() {
    'use strict';
    angular.module('resourcePanel', ['ngMaterial', 'ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('resourcePanel', {
                    url: '/resourcePanel',
                    templateUrl: '/app/src/resourcePanel/view/main.html',
                    controller: 'ResourcePanelController'
                })
                .state('lbcenter', {
                    url: '/resourcePanel/lbcenter',
                    params: {
                      _id:null
                    },
                    templateUrl: '/app/src/resourcePanel/view/LBcenter.html',
                    controller: 'LBcenterController'
                });
        });
})();