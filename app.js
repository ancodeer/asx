var Price = {
    images: [],
    name: '',
    price: 0.0
};

(function (angular) {
    function MainController($scope, $http) {
        $scope.products = [];

        $http
            .get('res/data.json?time=' + new Date().getTime())
            .success(function (data) {
                for(var i = 0; i < data.length; i++) {
                    data[i].retail = Math.ceil(data[i].price) * 6;
                }
                $scope.products = data;
                setTimeout(function () {
                    $('.swipebox').swipebox();
                }, 100);
            });
    }

    angular
        .module('asx', [])
        .controller('MainController', ['$scope', '$http', MainController]);
    angular.bootstrap(document, ['asx']);

})(angular);