/*The name of the file does not matter. You can keep as many controllers as you want.
However a controller will be called by Angular only if you declare in HTML that for a 
given view this controller is to be used. This is how you declare:

<div ng-controller="myController"></div>

*/
var scope;

function myController($scope){
	// window.alert("Inside Controller: called when DOM tree is created");

	$scope.stockPrice = {
		"Google":  "600$",
		"Microsoft": "400$",
		"VMWare": "500$"
	};

	$scope.selectedCompany = "VMWare";

	scope = $scope;
}

function subscribeBtnClicked(){
	alert("Mail id:  " + scope.emailId);
}

function onDomLoaded(){
	window.alert("inside HTML onload, called when DOM is rendered");
}