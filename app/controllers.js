(function(angular) {
    "use strict";

    var app = angular.module("SuperCoolApp");

    app.controller("VoteController", function ($scope) {
        $scope.upVote = function () {
            $scope.votes++;
        }

        $scope.downVote = function () {
            $scope.votes--;
        }

        $scope.votes = 0;

    });

    app.controller("CommentsController", function ($scope) {
        $scope.publishComment = function () {
            $scope.submit.comment;
        }

        $scope.deleteComment = function () {
            $scope.delete.comment;
        }
    })
})(window.angular);