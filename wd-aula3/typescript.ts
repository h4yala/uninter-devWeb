// DECLARAR VARIÁVEIS
let nome: string = "Jimin";
let idade: number = 30;
let ativo: boolean = true;

// FUNÇÕES
function somar(a: number, b: number) : number {
    return a + b;
}

let resultado: number = somar(5,3);

// TIPOS DE OBJETOS
interface Pessoa {
    nome: string;
    idade: number;
    ativo: boolean;
}

let pessoa: Pessoa = {
    nome: "Jungkook",
    idade: 28,
    ativo: true
}

// CLASSES
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    ola() {
        console.log('Olá, sou um ${this.name}.');
    }

}

var animal = new Animal ("Gato");
animal.ola();