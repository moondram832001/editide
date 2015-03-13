editide.controller('LandingCtrl', ['$scope', function ($scope) {
	$scope.sassModel = "";
	$scope.aceModel = "";
	$scope.sassModel = "";
	$scope.jsModel = "";

	$scope.updateIframe = function() {
         document.getElementById('myfrmme').contentWindow.updatedata($scope.src_render);
         document.getElementById('mymobile').contentWindow.updatedata($scope.src_render);
     };


	$scope.aceLoaded = function(_editor) {
	    // Options
	   // _editor.setReadOnly(true);
	   _editor.getSession().setMode("ace/mode/html");
	   _editor.setTheme("ace/theme/solarized_light");
	       _editor.setOptions({
	        enableBasicAutocompletion: true,
	        enableSnippets: true,
	  //      enableLiveAutocompletion: true,
	        fontSize: '20px',
	        displayIndentGuides: true,
	        firstLineNumber: 1,
	        showLineNumbers: true,
	        showGutter: true,
	        animatedScroll: true,
	        vScrollBarAlwaysVisible: false,
	        enableMultiselect: true,
	        wrapBehavioursEnabled: true
	    });

	  };

	  $scope.aceChanged = function() {
    
	     $scope.src_render = $scope.aceModel;
	    
	     $scope.updateIframe();

	  }

	  $scope.sassLoaded = function(_editor) {
	    // Options
	   // _editor.setReadOnly(true);
	   _editor.getSession().setMode("ace/mode/html");
	   _editor.setTheme("ace/theme/solarized_light");
	       _editor.setOptions({
	        enableBasicAutocompletion: true,
	        enableSnippets: true,
	        enableLiveAutocompletion: true,
	        fontSize: '20px',
	        displayIndentGuides: true,
	        firstLineNumber: 1,
	        showLineNumbers: true,
	        showGutter: true,
	        animatedScroll: true,
	        vScrollBarAlwaysVisible: false,
	        enableMultiselect: true,
	        wrapBehavioursEnabled: true
	    });

	  };

	  $scope.sassChanged = function() {

	  }

	  $scope.jsLoaded = function(_editor) {
	    // Options
	   // _editor.setReadOnly(true);
	   _editor.getSession().setMode("ace/mode/html");
	   _editor.setTheme("ace/theme/solarized_light");
	       _editor.setOptions({
	        enableBasicAutocompletion: true,
	        enableSnippets: true,
	        enableLiveAutocompletion: true,
	        fontSize: '20px',
	        displayIndentGuides: true,
	        firstLineNumber: 1,
	        showLineNumbers: true,
	        showGutter: true,
	        animatedScroll: true,
	        vScrollBarAlwaysVisible: false,
	        enableMultiselect: true,
	        wrapBehavioursEnabled: true
	    });

	  };

	  $scope.jsChanged = function() {

	  }


	  
}]);