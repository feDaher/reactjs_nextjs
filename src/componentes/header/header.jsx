import styles from "./header.module.css"

function Header ({children, image}) {
  return (
    <Header
      className={styles.header}
      style={{
        background: `url('${image}')`,
        backgroundPposition: "center",
        backgroundRepeat: "no-repeat",
        background: "cover",
      }}
    >
      <div className={styles.headerContent}>
       {children}
      </div>
    </Header>
  )
}

Header.defaultProps = {
  image: 'https://sejadev-web-app-public-files.s3.amazonaws.com/courses/coffee1.jpg'
}

export default Header