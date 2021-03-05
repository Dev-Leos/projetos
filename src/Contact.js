import React from 'react'
import './App.css';

function Contact() {
  return (
    <div class='contact'>

   
   <form name="meu_form">

              <h1>Entre em contato</h1>

              <input type="text" id="nomeid" placeholder="digite seu nome" required="required" name="nome" />
              <label for="nome">Nome</label><br></br>

              <input type="tel" id="foneid" placeholder="(xx)xx-xx-xx-xx" name="fone" />
              <label for="fone">Fone</label><br></br>

              <input type="email" id="emailid" placeholder="fulano@mail.com" name="email" />
              <label for="email">Email</label><br></br>

              <textarea placeholder="Sua mensagem"></textarea><br></br>

              <input type="submit" class="enviar" onclick="Enviar();" value="Enviar" />
    </form>

    </div>



               
  );
  
  }

export default Contact;

