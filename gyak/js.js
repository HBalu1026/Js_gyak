function Megszerkesztheto() {
	if (Math.pow(parseFloat(document.getElementById("aSzam").value), 2) + Math.pow(parseFloat(document.getElementById("bSzam").value), 2) == Math.pow(parseFloat(document.getElementById("cSzam").value), 2)) {
		alert("Szerkeszthető.");
	}
	else {
		alert("Nem szerkeszthető");
	}
}

function Random() {
	document.getElementById("aSzam").value = Math.round(Math.random()*90 + 10);
	document.getElementById("bSzam").value = Math.round(Math.random()*90 + 10);
	document.getElementById("cSzam").value = Math.round(Math.random()*90 + 10);
}

function Pitagorasz() {
	document.getElementById("cSzam").value = Math.sqrt(Math.pow(parseFloat(document.getElementById("aSzam").value), 2) + Math.pow(parseFloat(document.getElementById("bSzam").value), 2)); 
}