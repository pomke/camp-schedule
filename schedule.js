var Schedule = angular.module('schedule', [];

Schedule.factory('rooms', function () {
    return [
        { 'id' : 'red', 'label' : 'Red Room 4' },
        { 'id' : 'green', 'label' : 'Green Room 7A' }
    ];
});

Schedule.factory('days', function () {
    return [
        { 'id' : 'fri', 'label' : 'Friday'},
        { 'id' : 'sat', 'label' : 'Saturday'},
        { 'id' : 'sun', 'label' : 'Sunday'},
        { 'id' : 'mon', 'label' : 'Monday'}
    ];
});

Schedule.factory('sessions', function () {
    return [
        {
            'id' : 'ns-func',
            'label' : 'Nodeschool - Functional Javascript',
            'times' : [
                {
                    'room' : 'red',
                    'day' : 'sat',
                    'start' : '09:00',
                    'end' : '10:20'
                },
                {
                    'room' : 'red',
                    'day' : 'sun',
                    'start' : '14:20',
                    'end' : '16:00'
                }
        },
    ];
});



Schedule.controller('ScheduleController', function($scope, $http, $q, rooms, days, sessions) {
    $scope.details = {};
    $scope.rooms = rooms;
    var git = [];
    //angular.forEach($scope.users, function(u) {
    //    git.push($http.get('https://api.github.com/users/'+u.github));
    //});
});
