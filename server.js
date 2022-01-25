const http =require('http');
const PORT=5000;
var url=require("url");
var querystring=require("querystring");
var server= http.createServer(function (req,res){
var page= url.parse(req.url).pathname;
console.log(page);
var params =querystring.parse(url.parse(req.url).query);
if(page=='/'){   
//res.writeHead(302,{"Content-type":"text/html"});//changer le code de retour
    res.write('<!DOCTYPE html>'+
    '<html>'+
      '<head>'+
      '</head>'+
      '<body>'+
      '<b>Text Mohamed Nalouti Boss</b> '+
      '</body>'+
      '</html>')
    //res.write("Ahla wa sahla Mohamed");//Modifire le response body 
res.end("<p>Nalouti text en <b> gras</b> </p>");
}
else if('id'in params && 'login' in params){
res.write('Votre id est '+params['id']+'votre login est'+params['login']);

}
else if(page=='/contact')
{res.write('your are in the contact page')}
else if(page=='/product')
{res.write('your are in the product page')}
else{
    res.writeHead(404,"please enter a defined url")
    res.write("please enter a defined url")
}
res.end();
});

server.listen(PORT);
console.log("server runing on port " + PORT);