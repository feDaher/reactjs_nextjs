import Header from "../src/componentes/header/header"
import Title from "../src/componentes/title/title"
import Subtitle from "../src/componentes/subtitle/subtitle"

function ExemploPage () {
  return (
    <> 
      <Header>
        <Title> Café Dev </Title> 
        <Subtitle text="O Melhor Café!"/>
      </Header>
    </>
  )
}

export default ExemploPage

/* React Fragment:
<>
Contedudo...
</>
Serve para ter múltiplos elementos.
"Você pode usar <></> da mesma forma que você usaria qualquer outro elemento, exceto que ele não suporta chaves
 ou atributos." - veremos mais pra frente.
 */