var cursoApp = angular.module("cursoApp",["ionic"])
.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

//cursoApp.service("cursoService",["$http","$rootScope",cursoService]);
//
//cursoApp.controller("cursoCtrl",["$scope","cursoService",cursoCtrl]);
//
//function cursoCtrl($scope,cursoService,$http){
//    
//    $scope.cursos = [];
//    $scope.$on("cursoApp.cursos",function(_,result){
//        
//        $scope.cursos = result;
//        
//    });
//    cursoService.loadCursos();
//       
//}


angular.module('cursoApp',['ionic']).controller('cursoCtrl', function($scope,$http){
    $scope.cursos = [];
    
    $http.get('http://localhost:8080/EscolaTNTWeb/rest/cursos').success(function(result){
       $scope.cursos = result;
    })
    
    $scope.addCurso = function(){            
            $scope.cursos.push({
                idCurso:$scope.cursos.idCurso,
                nomeCurso:$scope.cursos.nomeCurso});    
            
            var link = 'http://localhost:8080/EscolaTNTWeb/rest/cursos/manter?&idCurso='+cursos.idCurso+'&nomeCurso='+cursos.nomeCurso;
            //manterREST($scope.cursos);
        inserirCurso(link);
    }

    function inserirCurso(link){
        //inserir = 'http://localhost:8080/EscolaTNTWeb/rest/cursos/manter?&idCurso='+curso.idCurso+'&nomeCurso='+curso.nomeCurso;
        $http.get(link).success(function(result){
            console.log(result);
        })

    }
})

//function cursoService($http, $rootScope){
//
//    this.loadCursos = function(params){
//        
//        $http.get("http://localhost:8080/EscolaTNTWeb/rest/cursos").success(
//            function(result){
//                $rootScope.$broadcast("cursoApp.cursos",result);
//            }
//        ).error(
//            function(result){
//                alert("Erro ao carregar dados");
//                console.log("Erro ao carregar os Cursos! " + result);
//            }
//        );
//        
//    }; // fim loadCursos
//    
//    
//}; // fim cursoService