editide.controller('LandingCtrl', ['$scope', function ($scope) {
	$scope.sassModel = "";
	$scope.aceModel = "";
	$scope.sassModel = "";
	$scope.jsModel = "";
	$scope.html_headerModel = "HTML";
	$scope.sass_headerModel = "CSS";
	$scope.js_headerModel = "JS";
	
	$scope.iframe_ready = false;

	$scope.html_editor = "";
	$scope.sass_editor = "";
	$scope.js_editor = "";
	$scope.editor_array = [];


	$scope.header_editor = "";
	
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

    window.iframe_callback = function(data) {
    	 $scope.iframe_ready = true;
    };

	$scope.headerLoaded = function(_editor) {
	    // Options
	  
	    $scope.editor_array.push(_editor);
	    
	    _editor.renderer.$cursorLayer.element.style.opacity=0;
	    _editor.commands.commmandKeyBinding={};

	   
	   _editor.getSession().setMode("ace/mode/html");
	   _editor.setTheme("ace/theme/solarized_light");
	       _editor.setOptions({
	        enableBasicAutocompletion: true,
	        enableSnippets: true,
	        fontSize: '15px',
	        displayIndentGuides: true,
	        firstLineNumber: 1,
	        highlightSelectedWord: false,
	        maxLines: 1,
	        showLineNumbers: false,
	        showGutter: false,
	        highlightActiveLine: false,
    		highlightGutterLine: false,
	  		readOnly:true,
	        wrapBehavioursEnabled: true
	    });

	  };

	$scope.aceLoaded = function(_editor) {
	    // Options
	   // _editor.setReadOnly(true);
	   //$scope.html_editor = _editor;
	   $scope.editor_array.push(_editor);
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
	     if($scope.iframe_ready){
	     	$scope.updateIframe();	
	     }
	     
	 //    $scope.editor.setTheme("ace/theme/twilight");

	  }

	  $scope.sassLoaded = function(_editor) {
	    // Options
	   // _editor.setReadOnly(true);
	   //$scope.sass_editor = _editor;
	   $scope.editor_array.push(_editor);
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
	  		if($scope.iframe_ready){
	  			$scope.updateIframe();	
	  		}
	  		
	  }

	  $scope.jsLoaded = function(_editor) {
	    // Options
	   // _editor.setReadOnly(true);
	   //$scope.js_editor = _editor;
	   $scope.editor_array.push(_editor);
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
	  	if($scope.iframe_ready){
	  		$scope.updateIframe_js();	
	  	}
	  };

	  $scope.set_theme = function(theme) {
	 //  	$scope.html_editor.setTheme("ace/theme/" + theme);
	 // 	$scope.sass_editor.setTheme("ace/theme/" + theme);
	 // 	$scope.js_editor.setTheme("ace/theme/" + theme);
	  	
	  	angular.forEach($scope.editor_array, function(editor_key){
	  		editor_key.setTheme("ace/theme/" + theme);
	  	});

	  };


	  
}]);