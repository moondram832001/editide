var myAppModule = angular.module('IFrameApp', ['ngRoute','ngSanitize']); 

myAppModule.controller('IframeCtrl', [ '$scope', '$sce', '$compile',function($scope,$sce,$compile) {
  
    $scope.iframe_agent = {
      name: 'moondram832001',
      address: 'Amphitheatre',
      markup : '<div><h1>hello world !</h1></div>'
    };
    
    $scope.checkapplied = false;

    $scope.js_code = "";

    $scope.updatedata = window.updatedata = function(data) {
      $scope.$apply(function(){
            $scope.iframe_agent.markup =  '<div>' + data.toString() + '</div>';
      });
    };

     $scope.updatedata_js = window.updatedata_js = function(data) {
      $scope.$apply(function(){          
        $scope.js_code = data.toString();
      });

     };

}]);


myAppModule.directive('editide', ['$interval','$compile',function($interval,$compile) {
  var directive_obj = {};
  
  var post_func = function(scope ,elem) {
   
  var js_changed = false;
  

    scope.$watch('js_code', function(newValue, oldValue) {
        js_changed = true;          
    });

    var timeoutId = $interval(function() {
      if(js_changed) {
         
          try {
                eval(scope.js_code); 
          }
          catch(e) {
          
          }
          js_changed = false;
      }
    },1000);

      scope.$watch(' iframe_agent.markup', function() {
          applychanges(scope.iframe_agent.markup);
      });

      var applychanges = function(data) {
          elem.children().replaceWith($compile(data)(scope));
          scope.checkapplied = data;
      }

      window.parent.iframe_callback();
  };

  var pre_func = function(scope) {
 
  }

  var control_func = function($scope,$element,$attrs) {
  
  } 

  var compile_func = function() {
    return {
      pre : pre_func,
      post: post_func
    }
  };
  
  directive_obj =  {  
                    restrict: "EA",
                    templateNamespace: 'html',
                    controller: control_func,
                    compile: compile_func
                   };

  return directive_obj;
}]);
