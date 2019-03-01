var app=angular.module('myApp',['jkuri.datepicker']);
app.controller("ListController",['$scope','$http',function($scope,$http){


 /* $http({
      method:'GET',
      //url:'http://jsonplaceholder.typicode.com/posts'
      url:'http://192.168.101.188:7500/yamahabooking/dataprovider/downloadpayslip/?BooingId=18&UserName=akash_002@gmail.com'
    }).then(function successCallback(response){
      $scope.personalDetails=response.data
    },function errorCallback(response){

    });*/

  $scope.names=["student","govt.job","private job","others"];
	$scope.personalDetails=[
       {
       	'fname':'sabina',
       	'uname':'sabina12',
       	'email':'cse.sabina@gmail.com',
        'password':'1234',
        'phone':'01656754334',
        'birthdate':'25/12/2018',
        'cat':'private job'
       },
       {
       	 'fname':'sabina',
       	 'uname':'sabina12',
       	 'email':'cse.sabina@gmail.com',
         'password':'1234',
         'phone':'01656754334',
         'birthdate':'25/12/2018',
         'cat':'private job'

       },
       {
       	'fname':'sabina',
       	 'uname':'sabina12',
       	 'email':'cse.sabina@gmail.com',
         'password':'1234',
         'phone':'01656754334',
         'birthdate':'25/12/2018',
         'cat':'private job'
       }];
       console.log(angular.toJson($scope.personalDetails));

       $scope.addNew=function(personalDetail){
       	   $scope.personalDetails.push({
       	   	 'fname':"",
       	   	 'uname':"",
       	   	 'email':"",
             'password':"",
             'phone':"",
             'birthdate':"",
             'cat':""

       	   });
       };
       /*$scope.remove=function(){
       	  var newDataList=[];
       	  $scope.selectedAll=false;
       	  angular.forEach($scope.personalDetails,function(selected){
       	  	if(!selected.selected){
       	  		newDataList.push(selected);

       	  	}

       	  });
       	  $scope.personalDetails=newDataList;
       }*/

       $scope.remove=function(fname){
           var index=-1;
           var comArr=eval($scope.personalDetails);
           for(var i=0;i<comArr.length;i++){
              if(comArr[i].fname===fname){
                index=i;
                break;
              }
           }
           if(index===-1){
              alert("something went wrong");
           }

          $scope.personalDetails.splice(index,1);
       }

       /*$scope.checkAll=function(){
       	 if(!$scope.selectedAll){
       	 	$scope.selectedAll=true;

       	 }else{
       	 	$scope.selectedAll=false;
       	 }
       	 angular.forEach($scope.personalDetails,function(personalDetail){
       	 	personalDetail.selected=$scope.selectedAll;
       	 });
       };*/

	
}]);

