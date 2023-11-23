let funcionarios = [{
    nome: 'Joao',
    idade: 35,
    sexo: 'M',
    salario: 8000
}, {
    nome: 'Pedro',
    idade: 17,
    sexo: 'M',
    salario: 1500
}, {
    nome: 'Marcos',
    idade: 25,
    sexo: 'M',
    salario: 6500
}, {
    nome: 'Carol',
    idade: 28,
    sexo: 'F',
    salario: 5000
}, {
    nome: 'Isabela',
    idade: 16,
    sexo: 'F',
    salario: 2000
}]



function montarTabela(funcionarios) {
    const tabela = document.querySelector("#tabela-body");
    tabela.innerHTML = '';

    funcionarios.forEach(funcionario => {
        let template = `
        <tr>
            <td>${funcionario.nome}</td>
            <td>${funcionario.idade}</td>
            <td>${funcionario.sexo}</td>
            <td>R$ ${funcionario.salario}</td>
        </tr>
        `

        tabela.insertAdjacentHTML("beforeend", template);
    });
}

function calcularTotalSalario(funcionarios) {
    let valorTotal = 0;

    funcionarios.forEach(funcionario => {
        valorTotal += funcionario.salario;
    })

    document.querySelector("#total").innerHTML = valorTotal;
}

calcularTotalSalario(funcionarios);
montarTabela(funcionarios);


// funcionarios = adicionarDecimoTerceiro(funcionarios);
// function adicionarDecimoTerceiro(funcionarios) {
//     return funcionarios.map(funcionario => {
//         funcionario.salario = funcionario.salario * 2;
//         return funcionario;
//     });
// }

// function adicionarDecimoTerceiro(funcionarios) {
//     const funcionariosCopy = JSON.parse(JSON.stringify(funcionarios));

//     funcionariosCopy.forEach(funcionario => {
//         funcionario.salario = funcionario.salario * 2;
//     });

//     return funcionariosCopy;
// }


function filtrar(funcionarios) {
    let funcionariosCopia = JSON.parse(JSON.stringify(funcionarios));

    funcionariosCopia = filtrarSexo(funcionariosCopia);
    funcionariosCopia = filtrarIdade(funcionariosCopia);

    montarTabela(funcionariosCopia);
}

function filtrarSexo(funcionarios) {
    const valorInput = document.querySelector('#filtro-sexo').value;
    let valorSexo;

    if (valorInput === 'masculino') {
        valorSexo = 'M';
    } else if (valorInput === 'feminino') {
        valorSexo = 'F';
    } else {
        valorSexo = 'todos';
    }

    return funcionarios.filter(funcionario => {
        if (valorSexo === 'todos') {
            return true;
        } else {
            return funcionario.sexo === valorSexo;
        }
    })
}

function filtrarIdade(funcionarios) {
    const valorInput = document.querySelector('#filtro-idade').value;

    return funcionarios.filter(funcionario => {
        if (valorInput === 'maiores') {
            return funcionario.idade > 18;
        } else if (valorInput === 'menores') {
            return funcionario.idade < 18;
        } else {
            return true
        }

    })
}