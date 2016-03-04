(function(){
    
    angular.module("socialNetwork")
        .controller("editController",["$scope", "$state", "$http", "Upload", function($scope, $state, $http, Upload){
        
       $scope.$watch(function(){return $scope.file}, function(){
           
           $scope.upload_photo($scope.file);
           
       });
       
       $scope.upload_photo = function(file){
           
           if(file){
               
               Upload.upload({
                    url: '/edit/upload_dp',
                    data: {file: file, userid: JSON.stringify(localStorage.udata).userid }
                    }).then(function (resp) {
                        console.log('Success ' + resp);
                    }, function (err) {
                        console.log('Error: ' + err);
                    }, function (evt) {
                        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                        console.log('progress: ' + progressPercentage + '% ');
                });
               
            }
           
        };
            
        $scope.upload_info = function(){
            
            $http.post("/edit/upload_info", $scope.edited).success(function(res){
                
                console.log(res);
                
            }).error(function(err){
                
                console.log(err);
                
            });
            
        }
        
    }]);
    
    
}());