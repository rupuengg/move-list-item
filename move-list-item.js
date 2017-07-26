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
						   				'<ul>'+
						   					'<li ng-repeat="obj in mlist">'+
						   						'<a ng-click="self.moveRight($index)" href="javascript:;">{{obj.title}}</a>'+
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
						   				'<ul>'+
						   					'<li ng-repeat="obj in rlist">'+
						   						'<a ng-click="self.removeRight($index)" href="javascript:;">'+
						   							'{{obj.title}}'+
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
					scope.wd = angular.isNumber(scope.width) ? scope.width + 'px' : scope.width;
				},
				controller : function($scope){
					var self = this;

					self.moveRight = function(index){
						if(!checkItem($scope.rlist, $scope.mlist[index].id))
							$scope.rlist.push($scope.mlist[index]);
					};

					self.removeRight = function(index){
						$scope.rlist.splice(index, 1);
					};

					function checkItem(list, id){
						var chkBln = false;

						angular.forEach(list, function(value, key){
							if(value.id == id){
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