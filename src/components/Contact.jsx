import { useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = "service_vk3cqvn";
    const templateID = "ejs-test-mail-service";
    const userID = "51YnLemQ9GraULBkv";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Erro ao enviar e-mail:", err);
        alert("Ocorreu um erro. Tente novamente mais tarde.");
      });
  };

  return (
    <div
      style={{
        backgroundColor: "#1A1E23",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center", // Centraliza horizontalmente
        alignItems: "center", // Centraliza verticalmente
        color: "#FFF",
        fontFamily: "'IBM Plex Mono', monospace",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "768px",
          backgroundColor: "#1A1E23",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Bolinha verde */}
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "#12F7D6",
            borderRadius: "50%",
            marginBottom: "10px",
          }}
        ></div>
        {/* Texto "Contact" */}
        <p
          style={{
            fontSize: "64px",
            color: "#12F7D6",
            marginBottom: "20px",
          }}
        >
          Contact
        </p>

        {/* Título */}
        <p
          style={{
            fontSize: "16px",
            color: "#FFF",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          I’m currently available for freelance work
        </p>

        {/* Formulário */}
        <form
          style={{
            width: "100%",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            style={{
              background: "none",
              border: "none",
              borderBottom: "2px solid #12F7D6",
              color: "#FFF",
              fontSize: "16px",
              fontFamily: "'Ubuntu', sans-serif",
              width: "100%",
              padding: "10px 0",
            }}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            style={{
              background: "none",
              border: "none",
              borderBottom: "2px solid #12F7D6",
              color: "#FFF",
              fontSize: "16px",
              fontFamily: "'Ubuntu', sans-serif",
              width: "100%",
              padding: "10px 0",
            }}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Enter your needs"
            style={{
              background: "none",
              border: "none",
              borderBottom: "2px solid #12F7D6",
              color: "#FFF",
              fontSize: "16px",
              fontFamily: "'Ubuntu', sans-serif",
              width: "100%",
              padding: "10px 0",
              resize: "none",
            }}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            style={{
              backgroundColor: "#12F7D6",
              color: "#1A1E23",
              border: "none",
              padding: "15px",
              width: "100%",
              maxWidth: "325px",
              borderRadius: "50px",
              fontSize: "24px",
              fontFamily: "'IBM Plex Mono', monospace",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.3s ease",
            }}
          >
            Send Message <span>✈️</span>
          </button>
        </form>

        {/* Traço entre formulário e ícones */}
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#12F7D6",
            margin: "20px 0",
          }}
        ></div>

        {/* Ícones */}
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <a
            href="https://www.linkedin.com/in/joane-alves-ribeiro/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#1A1E23",
              border: "2px solid #12F7D6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#12F7D6",
            }}
          >
            <FaLinkedin style={{ fontSize: "18px" }} />
          </a>
          <a
            href="https://github.com/joanealves"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#1A1E23",
              border: "2px solid #12F7D6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#12F7D6",
            }}
          >
            <FaGithub style={{ fontSize: "18px" }} />
          </a>
          <a
            href="https://wa.me/5531985201743"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#1A1E23",
              border: "2px solid #12F7D6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#12F7D6",
            }}
          >
            <FaWhatsapp style={{ fontSize: "18px" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;