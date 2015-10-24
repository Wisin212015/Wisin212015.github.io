function Pokemon(n,g,v,a,i)
{
	this.grito = g;
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.imagen = i;
	this.gritar = function ()
	{
		alert(this.grito);
	}
}

//se crea una funcion inicio y se pega todo es dentro de la funcion
function inicio(nom,gri,vid,ata,ima)
{
	//alert("Esto es despues del inicio");
	var pika = new Pokemon(nom,gri,vid,ata,ima);
	fotoPokemon.setAttribute("src",pika.imagen); 
	nombrePokemon.innerText = pika.nombre;
	datosPokemon.innerText = "Grito: "+ pika.grito + "\n\n Vida: " + pika.vida + "\n\n Ataque: " + pika.ataque;
}


function Mostrar() 
{
		var nombre = document.getElementById("busca").value;
	
		if(nombre=="Pikachu")
		{
			inicio("Pikachu","Pika!!",100,70,"pikachu.jpg");
		}
		else if(nombre=="Bulbasaur")
		{
			inicio("Bulbasaur","Bull!!",90,60,"bulbasaur.jpg");
		}

		else if(nombre=="Charmander")
		{
			inicio("Charmander","Char!!",90,50,"charmander.jpg");
		}

}
	
//alert("Esto es antes del inicio");







