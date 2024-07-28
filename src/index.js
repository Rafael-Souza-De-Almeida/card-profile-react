import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Introducao />
        <ListaDeSkills />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="perfil.jpeg" alt="profile"></img>;
}

function Introducao() {
  return (
    <div>
      <h1>Rafael Almeida</h1>
      <p>
        Programador Java e estudante de Ciência da Computação na UFRRJ. Estou me
        aventurando com React pela primeira vez e achando bem legal. Meus
        hobbies favoritos são: programar, jogar videogames e passar tempo com as
        pessoas que amo.
      </p>
    </div>
  );
}

function ListaDeSkills() {
  return (
    <div className="skill-list">
      <Skills nome="Java" emoji="⭐" color="orange" />
      <Skills nome="Spring" emoji="💚" color="green" />
      <Skills nome="React" emoji="🤖" color="blue" />
      <Skills nome="Javascript" emoji="💻" color="yellow" />
    </div>
  );
}

function Skills(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.nome}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
