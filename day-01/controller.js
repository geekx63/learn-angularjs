function HelloController($scope){
	$scope.greeting = {text: 'ZhaoXiang,Hello'};	
}
function CalculatorController($scope){
	$scope.numa='';
	$scope.func='';
	$scope.formNum = function(numa){
		$scope.numa += ''+numa;
	}
	$scope.addNum = function(){
		$scope.func = '+';	
	}
	$scope.reduceNum = function(){
		$scope.func = '-';	
	}
}
