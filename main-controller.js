;(function(ng){
	ng
	.module('rup', [])
	.controller('mainController', [
		'$scope',
		function($scope){
			console.log('Main Controller');

			$scope.mainlist = [{
					id : 1,
					title : 'Amit'
				},{
					id : 2,
					title : 'Atharav'
				},{
					id : 3,
					title : 'Anil'
				},{
					id : 4,
					title : 'Babloo'
				},{
					id : 5,
					title : 'Chirag'
				},{
					id : 6,
					title : 'Dilip'
				},{
					id : 7,
					title : 'Ekta'
				},{
					id : 8,
					title : 'Fara'
				},{
					id : 9,
					title : 'Gaurav'
				},{
					id : 10,
					title : 'Heena'
				}];

			$scope.rightlist = [];
		}
	]);
})(window.angular);