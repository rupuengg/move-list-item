;(function(ng){
	ng
	.module('rup')
	.directive('moveListItem', [
		function(){
			return {
				restrict : 'E',
				template : '<div class="move-list-item" style="width:{{wd}};">'+
						   		'<div class="lft">'+
						   			'<div class="inner box">'+
						   				'<p ng-if="mlist.length > 0">'+
						   					'<a ng-click="self.moveAllRight()" href="javascript:;">Select All</a>'+
						   				'</p>'+
						   				'<ul>'+
						   					'<li ng-repeat="obj in mlist">'+
						   						'<a ng-click="self.moveRight($index)" href="javascript:;">{{obj[valueFormat]}}</a>'+
						   					'</li>'+
						   				'</ul>'+
						   			'</div>'+
						   		'</div>'+
						   		'<div class="cntr">'+
						   			'<div class="inner">'+
						   				'<span class="fa fa-arrow-right fa-3x"></span>'+
						   			'</div>'+
						   		'</div>'+
						   		'<div class="rht">'+
						   			'<div class="inner box">'+
						   				'<p ng-if="rlist.length > 0">'+
						   					'<a ng-click="self.removeAllRight()" href="javascript:;">Remove All</a>'+
						   				'</p>'+
						   				'<ul>'+
						   					'<li ng-repeat="obj in rlist">'+
						   						'<a ng-click="self.removeRight($index)" href="javascript:;">'+
						   							'{{obj[valueFormat]}}'+
						   							'<span class="fa fa-close"></span>'+
						   						'</a>'+
						   					'</li>'+
						   				'</ul>'+
						   			'</div>'+
						   		'</div>'+
						   		'<div class="clear"></div>'+
						   '</div>',
				scope : {
					width : '=width',
					mlist : '=mlist',
					rlist : '=rlist'
				},
				link : function(scope, element, attrs){
					console.log(attrs);
					scope.wd = angular.isNumber(scope.width) ? scope.width + 'px' : scope.width;
					scope.keyFormat = attrs.kFormat;
					scope.valueFormat = attrs.vFormat;
				},
				controller : function($scope){
					var self = this;

					self.moveAllRight = function(){
						angular.forEach($scope.mlist, function(value, key){
							if(!checkItem($scope.rlist, value[$scope.keyFormat]))
								$scope.rlist.push(value);
						});
					};

					self.moveRight = function(index){
						if(!checkItem($scope.rlist, $scope.mlist[index][$scope.keyFormat]))
							$scope.rlist.push($scope.mlist[index]);
					};

					self.removeAllRight = function(){
						$scope.rlist = [];
					};

					self.removeRight = function(index){
						$scope.rlist.splice(index, 1);
					};

					function checkItem(list, id){
						var chkBln = false;

						angular.forEach(list, function(value, key){
							if(value[$scope.keyFormat] == id){
								chkBln = true;
							}
						});

						return chkBln;
					}
				},
				controllerAs : 'self'
			};
		}
	]);
})(window.angular);