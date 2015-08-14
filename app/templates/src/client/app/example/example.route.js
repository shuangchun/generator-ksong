(function() {
    'use strict';

    angular
        .module('app.example')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'example',
                config: {
                    url: '/example',
                    templateUrl: 'app/example/example.html',
                    controller: 'ExampleController',
                    controllerAs: 'vm',
                    title: 'example',
                    settings: {
                        nav: 2,
                        content: 'example example'
                    }
                }
            }
        ];
    }
})();
