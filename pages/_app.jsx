//Padrão do Nextjs para fazer funcionar os padrões, importar as coisas globais do projeto.
import "../src/style.css"
function App ({Component, pageProps}) {
  return <Component {...pageProps} />
}

export default App