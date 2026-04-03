var http = require ('http');

http.createServer (function (req,res){ //req - requisição / res - resposta
    res.writeHead(200, {'Content-Type': 'text/plain'}) // 200 = sucesso / text-plain é retornar o texto em html puro
    res.end ('ola...')
}) .listen(8080); //vai funcionar na porta 8080


/* 

EXEMPLO DE RETORNO EM JSON:

http.createServer (function (req,res){
    res.writeHead(200, {'Content-Type': 'text/json'}) 
    res.end (JSON.stringify({"ano": "1995", "nome" : "Park Jimin"})) 
}) .listen(8080);

*/
