var state;
var stateString;

var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt, {
	border: false
});
calculator.setExpression({
	id: 'graph1',
	latex: 'y=x^2'
});

var box = document.getElementById('print-box-textarea');

var clipboard = new Clipboard('.copy-btn');
/*
var editor = CodeMirror.fromTextArea(box, {
	mode: 'text/javascript',
	lineWrapping: true,
	inputStyle: 'textarea'
});

editor.setSize('100%','100%');
*/

$('.get-btn').click(function() {
	state = calculator.getState();
	stateString = JSON.stringify(state);
	box.value = stateString;
});

$('.set-btn').click(function() {
	stateString = box.value;
	state = JSON.parse(stateString);
	calculator.setState(state);
});

$('.copy-btn').click(function() {
	var tempString = editor.getValue();
	box.value = tempString;
	box.select();
	document.execCommand('copy');
});

window.onload = function() {
	$('.loading-container').hide();
};
