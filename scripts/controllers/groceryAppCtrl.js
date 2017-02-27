angular.module("groceryApp").controller("groceryAppCtrl",function($scope){
    $scope.groceryTitle="";
    $scope.groceryList=["Apple","Orange","Banana"];
    $scope.addGrocery=function(){
        
        var temp=$scope.groceryTitle;
        $scope.groceryList.push(temp);
        $scope.groceryTitle="";
        
      
    };
});