const usuarios = [
  {
    nome: "Carlos",
    idade: 28,
    email: "carlos@exemplo.com",
    cidade: "São Paulo",
    interesses: ["Música", "Tecnologia", "Fotografia"]
  },
  {
    nome: "Beatriz",
    idade: 22,
    email: "beatriz@exemplo.com",
    cidade: "Rio de Janeiro",
    interesses: ["Viagens", "Leitura", "Cinema"]
  }
];

// Desafio 1: Extraia e imprima apenas o nome e a cidade do primeiro usuário usando destructuring.
const { nome, cidade } = usuarios[0];
console.log(`Desafio 1: Nome: ${nome}, Cidade: ${cidade}`);

// Desafio 2: Crie um novo array `usuariosDoNorte`, cópia do original, mas adicionando um novo usuário.
const usuariosDoNorte = [
  ...usuarios,
  {
    nome: "Ana",
    idade: 25,
    email: "ana@exemplo.com",
    cidade: "Manaus",
    interesses: ["Natureza", "Tecnologia"]
  }
];
console.log("Desafio 2:", usuariosDoNorte);

// Desafio 3: Crie um novo objeto `beatrizAtualizada` com todas as infos originais, mas com o email atualizado.
const beatrizAtualizada = {
  ...usuarios[1],
  email: "bia.dev@exemplo.com"
};
console.log("Desafio 3:", beatrizAtualizada);

// Desafio 4: Função que mostra interesses de um usuário usando destructuring
function mostrarInteresses({ nome, interesses }) {
  console.log(`Desafio 4: ${nome} tem interesse em: ${interesses.join(", ")}.`);
}

// Testando a função com Carlos e Beatriz
mostrarInteresses(usuarios[0]);
mostrarInteresses(usuarios[1]);
