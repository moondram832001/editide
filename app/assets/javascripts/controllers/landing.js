editide.controller('LandingCtrl', ['$scope', function ($scope) {
	$scope.sassModel = "";
	$scope.aceModel = "";
	$scope.sassModel = "";
	$scope.jsModel = "";
	
	$scope.html_editor = "";
	$scope.sass_editor = "";
	$scope.js_editor = "";

	$scope.html_content = "";
	$scope.scss_content = "";
	$scope.themes = {
		"dark" : "solarized_dark",
		"light" : "solarized_light",
		"monokai": "monokai"
	};

	$scope.updateIframe = function() {
		 $scope.src_render =  $scope.scss_content +  $scope.html_content ;
         document.getElementById('myfrmme').contentWindow.updatedata($scope.src_render);
         document.getElementById('mymobile').contentWindow.updatedata($scope.src_render);
    };

    $scope.updateIframe_js = function() {
	     document.getElementById('myfrmme').contentWindow.updatedata_js($scope.jsModel);
         document.getElementById('mymobile').contentWindow.updatedata_js($scope.jsModel);
    };

	$scope.aceLoaded = function(_editor) {
	    // Options
	   // _editor.setReadOnly(true);
	   $scope.html_editor = _editor;
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
    
	     $scope.html_content = '<div>' + $scope.aceModel + '</div>';
	     //$scope.src_render = $scope.aceModel;

	     $scope.updateIframe();
	 //    $scope.editor.setTheme("ace/theme/twilight");

	  }

	  $scope.sassLoaded = function(_editor) {
	    // Options
	   // _editor.setReadOnly(true);
	   $scope.sass_editor = _editor;
	   _editor.getSession().setMode("ace/mode/sass");
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
	  		$scope.scss_content = '<style>' + $scope.sassModel + '</style>';
	  		$scope.updateIframe();
	  }

	  $scope.jsLoaded = function(_editor) {
	    // Options
	   // _editor.setReadOnly(true);
	   $scope.js_editor = _editor;
	   _editor.getSession().setMode("ace/mode/javascript");
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
	  	$scope.updateIframe_js();
	  };

	  $scope.set_theme = function(theme) {
	  	console.log('setting theme'  + theme);
	  	$scope.html_editor.setTheme("ace/theme/" + theme);
	  	$scope.sass_editor.setTheme("ace/theme/" + theme);
	  	$scope.js_editor.setTheme("ace/theme/" + theme);
	  };


	  
}]);