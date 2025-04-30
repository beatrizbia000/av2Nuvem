const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send(`
    <html>
      <head><title>Início</title></head>
      <body>
        <h1>Bem-vindo à Página Inicial!</h1>
        <p>Esta é a rota /</p>
      </body>
    </html>
  `)
});


app.get("/Sobre",function(req,res){
    res.send(`
    <html>
      <head><title>Sobre</title></head>
      <body>
        <h1>Sobre Nós</h1>
        <p>Esta é a rota /sobre</p>
      </body>
    </html>
  `)
});

app.get("/Produtos",function(req,res){
    res.send(`
    <html>
      <head><title>Contato</title></head>
      <body>
        <h1>Contato</h1>
        <p>Esta é a rota /contato</p>
      </body>
    </html>
  `)

});

app.listen(4000,function(erro){
    if(erro){
        console.log("Erro ao iniciar");
    }else{
        console.log("Servidor iniciado");
    }
});