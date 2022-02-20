import Title from "../src/componentes/title/title"
import Subtitle from "../src/componentes/subtitle/subtitle"

function HomePage () {
  return (
    <div>
      <Title>Coloque o Título Aqui.</Title>
      <Subtitle text="Primeiro Subtítulo" />
      <p>Um paragrago qualquer</p>
      <Title>Outro Texto</Title>
      <Subtitle text="Segundo Subtítulo"/>
      <p>Hello World, NextJs + ReactJs</p>
    </div>
  )
}

export default HomePage