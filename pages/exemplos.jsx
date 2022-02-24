import Head from "next/head"
import Header from "../src/componentes/header/Header"
import Title from "../src/componentes/title/title"
import Subtitle from "../src/componentes/subtitle/subtitle"

function ExemploPage () {
  return (
    <>
    <Head>
      <title>
        Pagina Exemplo. 
      </title>
    </Head>
    <Header>
      <Title>Café Dev</Title>
      <Subtitle text= "O Melhor Café está aqui."/>
    </Header>
    </>
  )
}

export default ExemploPage