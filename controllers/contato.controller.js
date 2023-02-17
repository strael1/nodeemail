const nodemailer = require('nodemailer');

exports.getContato = (req,res,next) => {
    res.render('contato/contato', {
        pageTitle: 'Contato'
    })
}

exports.postContato = (req,res,next) => {
    const email = req.body.email;
    const nome  = req.body.nome;
    const telefone = req.body.telefone;
    const descricao = req.body.descricao;
    const html = `
        <div style="background: #020202;padding: 30px; border-left: solid 10px orange;">
            <h1 style="color: white;">Central de dúvida <${email}></h1>
            <h3 style="color: white;">Remetente: ${nome}</h3>
            <p style="color: white;">Telefone: ${telefone}</p>
            <h4 style="color: white;">Descrição</h4>
            <p style="color:white;">${descricao}</p>
        </div>`
    ;

    const transport = nodemailer.createTransport({
        host:'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
            user: 'rafaelmacedosilva1234@hotmail.com',
            pass: 'R@fael50'
        }
    })

    transport.sendMail({
        from: 'Contato - <rafaelmacedosilva1234@hotmail.com>',
        to: email,
        subject: 'Contato - Cliente do site',
        html: html,
        text: 'Vimos que você se inscreveu em nossa newsletter.'
    }).then(response => {
        res.redirect('/contato')
    }).then(err => {
        console.log('Não foi dessa vez.')
    })
}