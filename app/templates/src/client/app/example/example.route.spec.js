/* jshint -W117, -W030 */
describe('example routes', function () {
    describe('state', function () {
        var view = 'app/example/example.html';

        beforeEach(function() {
            module('app.example', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        it('should map state example to url /example ', function() {
            expect($state.href('example', {})).to.equal('/example');
        });

        it('should map /example route to example View template', function () {
            expect($state.get('example').templateUrl).to.equal(view);
        });

        it('of example should work with $state.go', function () {
            $state.go('example');
            $rootScope.$apply();
            expect($state.is('example'));
        });
    });
});
