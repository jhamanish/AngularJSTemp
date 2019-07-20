
var headyApp = angular.module("headyApp", ["ngRoute"]).config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/details", {
            templateUrl: "/Templates/details.htm",
            controller: "detailsController"
        })
        .when("/description", {
            templateUrl: "Templates/description_1.htm",
            controller: "descriptionController"
        })
        .when("/reviews", {
            templateUrl: "/Templates/reviews.htm",
            controller: "reviewsController"
        })
        .when("/related", {
            templateUrl: "Templates/related.htm",
            controller: "relatedController"
        }).otherwise({
            redirectTo: "/details"
        });
    //    $locationProvider.html5mode(true);

}]).controller("descriptionController",function($scope) {
  $scope.message="description";
});
 angular.module("headyApp").controller("detailsController", function ($scope) {
    $scope.message = "I love Paris";
});
// angular.module("headyApp").controller("descriptionController", function ($scope) {
  //  $scope.message = "I love Paris";
//});
headyApp.controller("reviewsController", function ($scope) {
    $scope.message = "Reviews Page";
});
headyApp.controller("relatedController", function ($scope) {
    $scope.message = "Related Page";
});

//var changeText = function(id) {
//    var getText = document.getElementById(id).innerText;
//    document.getElementById("verticalText").innerText = getText;
//}
