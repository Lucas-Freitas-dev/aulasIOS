// let aluno01 = {
//     nome: "Lucas",
//     sobreNome: "Freitas",
//     RA: 49887,
//     matricula: {
//         curso: 'Dev. Web',
//         alunoMatriculado: true
//     }
// }
// console.log(aluno01.nome, aluno01.sobreNome);
// console.log(aluno01.RA);

// console.log("========================================================================================================================");
// let aluno02 = {
//     nome: "Zezo",
//     sobreNome: "França",
//     RA: 49888,
//     matricula: {
//         curso: 'Dev. Web',
//         alunoMatriculado: true
//     }
// }
// console.log(aluno02.nome, aluno02.sobreNome);
// console.log(aluno02.RA);

// console.log("========================================================================================================================")
// let aluno03 = {
//     nome: "José",
//     sobreNome: "Silva",
//     RA: 49889,
//     matricula: {
//         curso: 'Dev. Web',
//         alunoMatriculado: true
//     }
// }

// console.log(aluno03.nome, aluno03.sobreNome);
// console.log(aluno03.RA);

class Carros {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirInfo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
    static maisbonito(carro1, carro2){
        console.log(`O ${carro1.modelo} é mais bonito do que o ${carro2.modelo}`);
    }
    static compararAno(carro1, carro2) {
        if (carro1.ano > carro2.ano) {
            return `${carro1.marca} ${carro1.modelo} é mais novo que ${carro2.marca} ${carro2.modelo}`;
        } else if (carro1.ano < carro2.ano) {
            return `${carro2.marca} ${carro2.modelo} é mais novo que ${carro1.marca} ${carro1.modelo}`;
        } else {
            return `${carro1.marca} ${carro1.modelo} e ${carro2.marca} ${carro2.modelo} têm o mesmo ano`;
        }
    }
}

// Criando instâncias da classe Carro
let carro1 = new Carros("Subaru", "Impieza WRX", 1998);
let carro2 = new Carros("Lexus", "LFA", 2010);

// Chamando métodos nas instâncias
carro1.exibirInfo(); 
carro2.exibirInfo(); 

console.log(Carros.maisbonito(carro1, carro2));


// Chamando o método estático
console.log(Carros.compararAno(carro1, carro2)); // Saída: Toyota Corolla é mais novo que Honda Civic
