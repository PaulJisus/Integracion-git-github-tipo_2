function validacion(){
	var nombre, apellido, correo, expresion1, expresion2, elemento1, elemento2, ciudad, genero, seleccionado;
	nombre = document.getElementById("nombre").value;
	apellido = document.getElementById("apellido").value;
	correo = document.getElementById("correo").value;
	elemento1 = document.getElementById("ver1");
	elemento2 = document.getElementById("ver2");
	genero = document.getElementsByName("genero");
	ciudad = document.getElementById("ciudad").selectedIndex;
	expresion1 = /^[a-zA-Z]/;
	expresion2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	seleccionado = null;
	for(var i = 0; i < genero.length; i++){
		if(genero[i].checked == true){
			seleccionado = genero[i].value;
		}
	}
	if(!expresion1.test(nombre)){
		alert("Solo introduzca letras en el campo de nombre");
		document.formulario.nombre.focus();
		return false;
	}
	else if(!expresion1.test(apellido)){
		alert("Solo introduzca letras en el campo de apellidos");
		document.formulario.apellido.focus();
		return false;
	}
	else if(seleccionado == null){
		alert("Marque un campo en sexo");
		return false;
	}
	else if(!expresion2.test(correo)){
		alert("Correo invalido");
		document.formulario.correo.focus();
		return false;
	}
	else if(!elemento1.checked){
		alert("Campo de marcacion olbigatoria:Deseo recibir informacion sobre novedades y ofertas");
		document.formulario.ver1.focus();
		return false;
	}
	else if(!elemento2.checked){
		alert("Campo de marcacion olbigatoria:Declaro haber leído y aceptar las condiciones generales del programa y la normativa sobre protección de datos");
		document.formulario.ver2.focus();		
		return false;
	}
	else if(ciudad == null || ciudad == 0){
		alert("Seleccione una ciudad");
		document.formulario.ciudad.focus();
		return false;
	}
	alert("Gracias por completar el formulario");
	return true;
}