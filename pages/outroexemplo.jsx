import Header from "../src/componentes/header/header"
import Title from "../src/componentes/title/title"
import Subtitle from "../src/componentes/subtitle/subtitle"
import Header from "../src/componentes/header/header"

function OutroExemplo (){
  return (
  <> 
    <Header image={'https://sejadev-web-app-public-files.s3.amazonaws.com/courses/coffee2.jpg'}>
      <Title> Outra Café Dev </Title> 
      <Subtitle text="O Segundo Melhor Café!"/>
    </Header>
  </>
  )
}


export default OutroExemplo