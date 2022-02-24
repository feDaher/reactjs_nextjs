import { useState } from "react" //Ele retorna um array, usar para chamar a variavel e mostrar para o usuario, so funciona em funções de componentes react e que retorne no HTML
import Head from "next/head"
import Title from "../src/componentes/title/title"
import Subtitle from "../src/componentes/subtitle/subtitle"
import Button from "../src/componentes/button/button"
//import Header from "../src/componentes/header/header"

function HomePage () {
  const [click, setClick] = useState(0) // primeiro é a variavel, segundo é a função que altera a variavel, usa o "useState" colocando dentro da função o numero inicial que no caso é 0
  const handleClick = () => {
    setClick (click + 1)
  }

  return (
    <>
    <Head>
      <title>Título da Home Page:</title>
    </Head>
    <div>
      <Title>Coloque o Título Aqui.</Title>
      <Subtitle text="Primeiro Subtítulo" />
      <p>Um paragrago qualquer</p>
      <Title>Outro Texto</Title>
      <Subtitle text="Segundo Subtítulo"/>
      <p>Hello World, NextJs + ReactJs</p>
      <Button 
        onClick={handleClick}
      >
        Botão Teste
      </Button>
      <p>Quantidade de Cliques: {click} </p>
    </div>
    </>
  )
}

export default HomePage