(function () {
    'use strict';

    angular
    .module('app.example')
    .controller('ExampleController', ExampleController);

    ExampleController.$inject = ['logger'];
    /* @ngInject */
    function ExampleController(logger) {
        var vm = this;
        vm.title = 'Example';

        activate();

        function activate() {
            logger.info('Activated Example View');
        }
    }
})();
