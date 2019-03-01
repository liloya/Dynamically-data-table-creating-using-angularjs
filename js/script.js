var app=angular.module('myApp',['jkuri.datepicker']);
app.controller("ListController",['$scope','$http',function($scope,$http){

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

}]);

