(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('directiveExample', directiveExample);

    directiveExample.$inject = [
      'config'
    ];
    
    /* @ngInject */
    function directiveExample (config) {
        /* More code */
    }
})();
