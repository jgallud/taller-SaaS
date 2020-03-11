
var fs=require("fs");
var config=JSON.parse(fs.readFileSync("config.json"));
var host=config.host;
var port=config.port;
var exp=require("express");
var app=exp(); 

var modelo=require("./servidor/modelo.js");

var sistema= new modelo.Sistema();

app.get('/', function(request, response) {
 	var contenido=fs.readFileSync("./cliente/index.html");    
	response.setHeader("Content-type","text/html");
	response.send(contenido);  
});

app.get("/agregarUsuario/:nick/:clave",function(request,response){

	var nick=request.params.nick;
	var clave=request.params.clave;

	sistema.agregarUsuario(nick,clave,function(usr){
		response.send(usr);
	});
});

app.get("/obtenerUsuarios",function(request,response){
	sistema.obtenerUsuarios(function(lista){
		response.send(lista);
	})
})

console.log("Servidor escuchando en "+host+":"+port);
app.listen(port,host);