import styles from "./Title.module.css"

function Title (props){
  return(
    <h1 className={styles.title}>
      {props.children}
    </h1> //sempre usar {o nome da variavel que foi importado e a classe}
  )
}

export default Title