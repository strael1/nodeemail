const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'banco_teste_custom'
})

exports.getCadastro = (req,res,next) => {
    res.render('cadastro/cadastro', {
        pageTitle: 'Cadastro'
    })
}

exports.postCadastro = (req,res,next) => {
    const nome = req.body.nomeCad;
    const email = req.body.emailCad;
    const telefone = req.body.telefoneCad;

    const result = connection.execute('INSERT INTO usuarios(nome,email,telefone) VALUES(?,?,?)',[nome,email,telefone])
    if(result.values.length > 0){
        res.redirect('/usuarios'); 
    }
}

exports.getAllUsers = (req,res,next) => {
    connection.execute('SELECT * FROM usuarios',(err,results,fields) => {
        res.render('usuarios/usuarios', {
            users: results,
            pageTitle: 'Usuários'
        })
    })
}