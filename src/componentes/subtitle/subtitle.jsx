/* Exemplo de componente react com props (atributos)
function Subtitle (props) {
  return (
    <h4>{props.text}</h4>
  )
}

export default Subtitle
*/

//pode-se utilizar o destruction também para fazer as props ex:

function Subtitle ({text}){
  return (
    <h4>{text}</h4>
  )
}

/* Utlizar isso para definir padrões para a função que nao tiver definições, exemplo:
Subtitle.defaultProps = {
    text: "Qualquer Coisa"
}
*/
export default Subtitle