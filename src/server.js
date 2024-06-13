const express = require('express');
const app = express();
const php = require('php-express').cgi;


app.use('/api', php.cgi('"C:/xampp/php/php.exe"')); // adjust the path to your PHP executable

app.post('/send_mail.php', (req, res) => {
  const formData = req.body;
  // execute the PHP script here
  const phpScript = `<?php
    // your PHP code here
    $to = "lumamantelli9@gmail.com";
    $subject = "Formulário de contato";
    $message = "Name: ${formData.name}\nWhatsapp: ${formData.whatsapp}\nTipo de Pessoa: ${formData.tipo_pessoa}\nMessage: ${formData.message}";
    mail($to, $subject, $message);
 ?>`;
  php.cgi(phpScript, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Error sending email' });
    } else {
      res.send({ message: 'Email sent successfully' });
    }
  });
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});