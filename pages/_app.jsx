//_app.jsx: Padrão do Nextjs para fazer funcionar os padrões, importar as coisas globais do projeto.
//Tag título dentro do app serve para toadas a paginas que nao seu titulo definido.

import Head from "next/head"

import "../src/style.css"

function App ({Component, pageProps}) {
  return ( 
  <> 
    <Head>
      <title>Título Padrão.</title> 
    </Head>
    <Component {...pageProps} />
  </> //Fragment: serve para deixar o arquivo como um unica tag nao quebrando o html e ainda respeitar o react, caso precise passar mais de uma tag principal.
  )
}

export default App