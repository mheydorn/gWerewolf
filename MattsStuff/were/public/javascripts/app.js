angular.module('game', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){

	$scope.addGame = function(){
		console.log("Creating Game in controller");
		return $http.post('/createGame',{name: $scope.title,players: $scope.players}).success(function(data){
			console.log("Create Game Success");
		});
	};
	$scope.joinGame = function(){
		console.log("In join game in controller");	
		return $http.get('/joinGame?q='+$scope.title_to_join).success(function(data){console.log("Join Game worked")});
			
	};
  }
]);
