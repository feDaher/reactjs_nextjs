//import Header from "../src/componentes/header/header"
import Title from "../src/componentes/title/title"
import Subtitle from "../src/componentes/subtitle/subtitle"
import Head from "next/head"
import Header from "../src/componentes/header/Header"

function OutroExemplo (){
  return (
  <> 
    <Head>
      <title> Outro Exemplo. </title>
    </Head>
    <Header image={"https://sejadev-web-app-public-files.s3.amazonaws.com/courses/coffee2.jpg"}> 
      <Title> Outro Café Dev </Title> 
      <Subtitle text="O Segundo Melhor Café!"/>
    </Header> 
  </>
  )
}


export default OutroExemplo