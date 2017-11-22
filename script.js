function allonger(signe){
	window.document.calculette.affiche.value = window.document.calculette.affiche.value + signe;
}

function evaluer (){
	var x = 0 ;
		x = eval(window.document.calculette.affiche.value);
		window.document.calculette.affiche.value = x;
}
function fonctpartic(lafonct){
	if(lafonct=="sqrt"){
		var x = 0 ;
		x = eval(window.document.calculette.affiche.value);
		window.document.calculette.affiche.value = Math.sqrt(x);
	}
	if(lafonct=="car"){
		var x = 0 ;
		x = eval(window.document.calculette.affiche.value);
		window.document.calculette.affiche.value = x*x;

	}
	if (lafonct=="log"){
		var x = 0 ;
		x = eval(window.document.calculette.affiche.value);
		window.document.calculette.affiche.value = Math.log(x)

	}


}