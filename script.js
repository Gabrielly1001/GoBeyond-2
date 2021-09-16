const form = document.getElementById("formulario");
let funcionarios = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const salario = document.getElementById("salario").value;
  const salarioFormatado = parseFloat(salario);
  const salario2casas = salarioFormatado.toFixed(2);
  const totalVendas = document.getElementById("totalVendas").value;
  const totalVendasFormatado = parseFloat(totalVendas);
  const totalVendas2casas = totalVendasFormatado.toFixed(2);

  function salarioTotal(sal, totalVendas) {
    let total = (sal + totalVendas * 0.15).toFixed(2);
    return total
  }

  const salTot = (salarioTotal(salarioFormatado, totalVendasFormatado));
 
  let funcionarioData = {
    nome: nome,
    salario: salario2casas,
    totalEmVendas: totalVendas2casas,
    salarioTotal: salTot
  };
  funcionarios.push(funcionarioData);
  console.table(funcionarioData)
  console.table(funcionarios);
  alert(`Funcionário ${funcionarioData.nome} adicionado com sucesso!`)
});