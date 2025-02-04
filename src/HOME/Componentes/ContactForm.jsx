import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css"
import ReCAPTCHA from "react-google-recaptcha"; // Importe o componente do reCAPTCHA

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: "",
  });

  const [captchaValue, setCaptchaValue] = useState(null); // Estado para armazenar o valor do reCAPTCHA

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value); // Atualiza o valor do reCAPTCHA
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifique se o reCAPTCHA foi preenchido antes de enviar o formulário
    if (!captchaValue) {
      alert("Por favor, complete o reCAPTCHA.");
      return; // Impede o envio do formulário
    }

    // Parâmetros para o EmailJS
    const templateParams = {
      from_name: formData.nome,
      telefone: formData.telefone,
      email: formData.email,
      mensagem: formData.mensagem,
    };

    emailjs
      .send(
        "service_wl8t6qg", // Seu service ID
        "template_ahe30oy", // Seu template ID
        templateParams, // Dados que você quer enviar
        "C1ZerpPZE9gG-3igP" // Seu user ID do EmailJS
      )
      .then(
        (result) => {
          console.log("Email enviado com sucesso:", result.text);
          alert("Mensagem enviada com sucesso!");

          // Limpar os campos após o envio bem-sucedido
          setFormData({
            nome: "",
            telefone: "",
            email: "",
            mensagem: "",
          });
          setCaptchaValue(null); // Resetar o reCAPTCHA após o envio
        },
        (error) => {
          console.log("Erro ao enviar e-mail:", error.text);
          alert("Erro ao enviar mensagem, tente novamente.");
        }
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-formulario">
      <div className="campo-nome">
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
      </div>
      <div className="campo-telefone">
        <label>Telefone:</label>
        <input
          type="text"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
        />
      </div>
      <div className="campo-email">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="campo-mensagem">
        <label>Mensagem:</label>
        <textarea
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
        />
      </div>
      

      {/* Adicionando o reCAPTCHA */}
      <ReCAPTCHA
        sitekey="6Lf288gqAAAAAI5Z8an73ToyiJW_NQYQUwEJyYmV" // Substitua pela sua Site Key
        onChange={handleCaptchaChange} // Atualiza o estado quando o reCAPTCHA for completado
      />
 
      <button type="submit" id="botao-envio-form">Enviar</button>
      </div>
    </form>
  );
};

export default ContactForm;
