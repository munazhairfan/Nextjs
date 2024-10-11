import styles from "./header.module.css";
export default function Header(){
    return(
      <>
      <header>
     <div className={styles.headerDiv}> <a className={styles.headerAnchors} href="#">Gmail</a>
      <a className={styles.headerAnchors} href="#">Images</a>
      <div className={styles.grid}>
        <div id="dots"><i className="fa-solid fa-ellipsis-vertical"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i></div>
      </div>
      <button className={styles.signIn}>Sign in</button></div>
    </header>
      </>
    )
  }