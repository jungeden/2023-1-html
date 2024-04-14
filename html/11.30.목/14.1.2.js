let canvas, context; //전역변수
let colorInputObj, widthInputObj,mouseLocationObj;
let lineWidth;
let strokeColor;

function init() {
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");
	widthInputObj = document.getElementById("widthInput");
	
}