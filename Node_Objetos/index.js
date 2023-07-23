const pessoa = ["pedro", 20, "programador", "pedro.contato24@gmail.com"];

//console.log(pessoa[1]);

const outraPessoa = {
    nome: "João",
    idade: 30,
    profissao: "engenheiro",
    email: "joao@example.com"
}

outraPessoa.nome = "pedro"; //é possivel alterar os valores, não as chaves.
outraPessoa.altura = 1.75; //também é possível adcionar mais chaves caso não existam.
delete outraPessoa.idade; // quase não se usa, mas existe a opção de deletar.


//console.log(outraPessoa);

//array de objetos

const chars = [
    {
        nome: "pedro",
        dataNas: 2002,
        profissao: "programador",
    },
    {
        nome: "joao",
        dataNas: 2006,
        profissao: "Ortopedista",
    }
];

console.log(chars[0].nome);