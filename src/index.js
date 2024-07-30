import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    nome: "Java",
    nivel: "avancado",
    cor: "orange",
  },

  {
    nome: "Spring",
    nivel: "iniciante",
    cor: "green",
  },

  {
    nome: "Javascript",
    nivel: "intermediario",
    cor: "yellow",
  },

  {
    nome: "React",
    nivel: "iniciante",
    cor: "lightBlue",
  },
];

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
      {skills.map((skill) => (
        <Skills
          nome={skill.nome}
          nivel={skill.nivel}
          cor={skill.cor}
          key={skill.nome}
        />
      ))}
    </div>
  );
}

function Skills({ nome, nivel, cor }) {
  return (
    <div className="skill" style={{ backgroundColor: cor }}>
      <span>{nome}</span>
      <span>
        {nivel === "avancado" ? "💪" : nivel === "iniciante" ? "👶" : "👍"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
