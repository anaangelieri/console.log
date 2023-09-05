import './App.css'



//retorna os elementos que passam pelo filtro, no inspecionar console
const idades = [32, 33, 15, 11, 38];
console.log(idades.filter(checarAdulto));
console.log(idades.map(checarAdulto));
//retorna o valor booleano de cada elemento do array

function checarAdulto(idade){
  return idade >= 18;
  // return idade * 18;
}

function Item({nome, temSobrenome}){
  if(temSobrenome) {
    return <li className='item'>{nome} -- ok</li>
}
return <li className="item">{nome}</li>
// return null;

// uma outra opção de fazer o código todo do function
// return(
// <li className='item'>
// {temSobr4enome ? nome + '-- ok' : nome}
// </li>
// );
}

function App() {

  return (
    <>
      <section>
      <h1>Ana Laura's Lista de sobrenomes</h1>
        <Item 
        temSobrenome={true}
        nome ="Ana Laura"
        />
        <Item 
        temSobrenome={false}
        nome ="Ana Laura"
        />
      </section>
    </>
  )
}

export default App
