(function () {
  'use strict';

  angular.module('app', [
    'ngRoute',
    'ngAnimate'
  ]);

})();

(function () {
  'use strict';

  angular.module('app')
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'carousel/carousel.html',
          controller: 'CarouselController',
          controllerAs: 'vm'
        });
      $routeProvider.otherwise({redirectTo: '/'})
    }])
})();

(function () {
  'use strict';

  angular.module('app')
    .factory('DataService', ['$q', '$http', function($q, $http) {

      var response = {};

      return {
        getData: getData
      };

      /////////

      function getData() {
        var deferred = $q.defer();

        response = $http.get('../assets/data/images.json').then(function(response) {
          deferred.resolve(response);
        }, function(rejection) {
          deferred.reject(rejection);
        });

        return deferred.promise;
      }

    }])
})();

(function () {
  'use strict';

  angular.module('app')
    .controller('CarouselController', ['$scope', '$timeout', 'DataService', function ($scope, $timeout, DataService) {
      var vm = this;

      vm.slides = [];

      vm.currentSlide = 0;
      vm.setCurrentSlide = setCurrentSlide;
      vm.isCurrentSlide = isCurrentSlide;
      vm.nextSlide = nextSlide;
      vm.previousSlide = previousSlide;
      vm.timeout = false;

      activate();

      //////////

      function activate() {
        DataService.getData().then(function(response) {
          vm.slides = response.data;
        });

        setTimer();
      }

      function setCurrentSlide(index) {
        $timeout.cancel(vm.timeout);
        vm.currentSlide = index;
        setTimer();
      }

      function isCurrentSlide(index) {
        return vm.currentSlide === index;
      }

      function nextSlide() {
        $timeout.cancel(vm.timeout);
        vm.currentSlide = (vm.currentSlide + 1) % 4;
        setTimer();
      }

      function previousSlide() {
        $timeout.cancel(vm.timeout);
        if (vm.currentSlide === 0) {
          vm.currentSlide = vm.slides.length - 1;
          setTimer();
        } else {
          vm.currentSlide = (vm.currentSlide - 1) % 4;
          setTimer();
        }
      }

      function setTimer() {
        vm.timeout = $timeout(nextSlide, 3000);
      }

    }]);
})();