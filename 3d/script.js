var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt, {
	border: false
});

var state;
var uMin, uMax, vMin, vMax;

function updateU() {
	calculator.setExpression({
		id: 'border.u',
		domain: {
			min: String(uMin.numericValue),
			max: String(uMax.numericValue)
		}
	});
}

function updateV() {
	calculator.setExpression({
		id: 'border.v',
		domain: {
			min: String(vMin.numericValue),
			max: String(vMax.numericValue)
		}
	});
}

$.getJSON('./inistate.json', function(state) {
	calculator.setDefaultState(state);
	calculator.setState(state);
	
	uMin = calculator.HelperExpression({latex: 'u_{Min}'});
	uMax = calculator.HelperExpression({latex: 'u_{Max}'});
	vMin = calculator.HelperExpression({latex: 'v_{Min}'});
	vMax = calculator.HelperExpression({latex: 'v_{Max}'});

	uMin.observe('numericValue', function() {
		updateU();
	});
	uMax.observe('numericValue', function() {
		updateU();
	});
	vMin.observe('numericValue', function() {
		updateV();
	});
	vMax.observe('numericValue', function() {
		updateV();
	});
});

$('.loading-container').hide();
