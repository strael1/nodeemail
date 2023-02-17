const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes/route.contato');
const path = require('path');

// Select 
// connection.query()
// connection.execute('SELECT * FROM usuarios', (err,results,fields) => {
    // console.log(results);
// })

// Insert 
// connection.execute('INSERT INTO usuarios(nome,email,telefone) VALUES(?,?,?)', ['Rinaldo','rinaldo@gmail.com','11988223344']);

app.set('view engine','ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));

// Middlewares
app.use(routes);

app.listen(PORT, () => console.log('O servidor está rodando em localhost:3000'));