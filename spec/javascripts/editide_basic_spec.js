//= require angular-resource
//= require angular-route
//= require angular-sanitize
//= require angular-mocks
//= require iframe_app


describe('Landing', function() {
	var scope,
    controller;

    beforeEach(function () {
        module('editide');
    });

	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		controller = $controller('LandingCtrl', {
		    '$scope': scope
		});
	}));

	it("check theme settings", function() {
		expect(scope.themes.dark).toBe("solarized_dark");
	});

	it('change html editor model and check html content', function () {
	    scope.aceModel = "hello";
	    scope.aceChanged();
	    expect(scope.html_content).toBe('<div>hello</div>');
	    expect(scope.iframe_ready).toBe(false);
    });

});


describe('IframeApp', function() {
	var scope,
    controller;

    beforeEach(function () {
        module('IFrameApp');
    });

	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		controller = $controller('IframeCtrl', {
		    '$scope': scope
		});
	}));

	it("check basic scope settings", function() {
		expect(scope.iframe_agent.name).toBe("moondram832001");
	});

	it("check iframe markup update", function() {
		scope.updatedata("hello");
		expect(scope.iframe_agent.markup).toBe('<div>hello</div>');
	});

	it('check model updates within directive ', function () {
	    element = angular.element(' <editide />');
	    inject(function ($compile) {
	        	$compile(element)(scope);
				scope.$digest();
				expect(scope.checkapplied).toBe('<div><h1>hello world !</h1></div>');
				scope.updatedata("hello");
		    	expect(scope.checkapplied).toBe('<div>hello</div>');
			});
	});

	it('check html string compilation within directive ', function () {
	    element = angular.element(' <editide />');
    	inject(function ($compile) {
        	$compile(element)(scope);
			scope.$digest();
			var html_string = '<div><h1>hello world !</h1></div>';
			expect(scope.checkapplied).toBe(html_string);
			var dom_node = $compile(html_string)(scope);
	    	expect(dom_node.length).toBe(1);
	    	expect(dom_node[0].children[0].innerHTML).toBe("hello world !");
	    	expect(dom_node[0].children[0].nodeName).toBe("H1");
		});

    });

});

