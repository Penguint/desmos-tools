var state;
var stateString;
var explist;
var isLoaded = false;

var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt, {border: false});

var uMin,uMax,vMin,vMax;

function update() {
	state = calculator.getState();
	explist = state.expressions.list;
	
	uMin = explist[15].latex;
	uMax = explist[16].latex;
	vMin = explist[20].latex;
	vMax = explist[21].latex;
	
	calculator.setExpression({
		id: 'border.u', domain: {min: uMin, max: uMax}
	});
	calculator.setExpression({
		id: 'border.v', domain: {min: vMin, max: vMax}
	});
}

function loadini() {
	$.getJSON('./inistate.json', function(state) {
		calculator.setDefaultState(state);
		calculator.setState(state);
		
		$('.loading-container').hide();
		isLoaded = true;
	});
}

window.onload = function() {
	if (!isLoaded) {
		loadini();
		
		calculator.observeEvent('change', function() {
			if (isLoaded) {
				update();
			}
		});
	}
};
