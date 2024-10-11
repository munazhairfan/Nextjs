import styles from "./footer.module.css";
export default function Footer(){
    return(
        <>
         <footer className={styles.footer}>
      <div className={styles.footer1}>Pakistan</div>
      <hr></hr>
      <div className={styles.footer2}>
        <div className={styles.leftDiv}>
          <a className={styles.footerAnchors} href="#">About</a>
          <a className={styles.footerAnchors} href="#">Advertising</a>
          <a className={styles.footerAnchors} href="#">Business</a>
          <a className={styles.footerAnchors} href="#">How search works</a>
        </div>
        <div className={styles.rightDiv}>
          <a className={styles.footerAnchors} href="#">Privacy</a>
          <a className={styles.footerAnchors} href="#">Terms</a>
          <a className={styles.footerAnchors} href="#">Settings</a>
        </div>
      </div>
    </footer>
        </>
    )
}