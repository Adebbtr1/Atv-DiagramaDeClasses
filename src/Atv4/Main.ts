import { Livro } from './Livro'; 
import { Usuario } from './Usuario';
import { Emprestimo } from './Emprestimo'; 

function main() {
  
  const livro1 = new Livro(1, 'Harry Potter e a Pedra Filosofal', 'J.K. Howling');
  const usuario1 = new Usuario(1, 'Débora');

  console.log(`Livro: ${livro1.getTitulo()} (${livro1.getAutor()}) Disponível: ${livro1.isDisponivel()}`);
  console.log(`Usuário: ${usuario1.getNome()}`);
 
  try {
    livro1.emprestar();
    console.log(`Livro emprestado. Disponível: ${livro1.isDisponivel()}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Erro desconhecido ocorreu.');
    }
  }

  const emprestimo1 = new Emprestimo(livro1, usuario1, new Date());
  console.log(`Empréstimo realizado em: ${emprestimo1.getDataEmprestimo()}`);

  livro1.devolver();
  console.log(`Livro devolvido. Disponível: ${livro1.isDisponivel()}`);
}

main();
