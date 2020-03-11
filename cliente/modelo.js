function Sistema(){
	this.usuarios={};
	this.agregarUsuario=function(nick,clave){
		//email
		if (!this.usuarios[nick]){
			this.usuarios[nick]=new Usuario(nick,clave);
		}
		else{
			console.log("El usuario ya existe");
		}
	}
	this.obtenerUsuario=function(nick){
		return this.usuarios[nick];
	}
	// muchas consultas sobre usuarios

	this.eliminarUsuario=function(nick){
		if (this.usuarios[nick]){
			delete this.usuarios[nick];
		}
	}
}

function Usuario(nick,clave){
	this.nick=nick;
	this.clave=clave;
}