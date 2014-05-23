var Schedule = angular.module('schedule', []);

Schedule.factory('rooms', function () {
    return [
        { 'id' : 'murdoch', 'label' : 'Murdoch Room' },
		{ 'id' : 'tower', 'label' : 'Tower Block' },
		{ 'id' : 'main', 'label' : 'Main Hall' },
		{ 'id' : 'coltman', 'label' : 'Coltman Hut Hall' },
		{ 'id' : 'amphitheatre', 'label' : 'The Amphitheatre' }
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
            ]
        }
    ];
});



Schedule.controller('ScheduleController', function($scope, $http, $q, rooms, days, sessions) {
    $scope.rooms = rooms;
});
