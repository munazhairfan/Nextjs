import styles from "./heroSection.module.css";
export default function HeroSection(){
    return(
        <>
        <div className={styles.google}>
      <div className={styles.googleLogo}></div>
      <div className={styles.bar}>
        <div className={styles.searchLogo}><i className="fa-solid fa-magnifying-glass"></i></div>
        <input className={styles.input} type="search" placeholder="Search Google or type a URL" />
        <div className={styles.mic}><i className="fa-solid fa-microphone"></i></div>
        <div className={styles.camera}><i className="fa-solid fa-camera"></i></div>
      </div>
      <div className={styles.buttons}>
      <button className={styles.button1}>Google Search</button>
      <button className={styles.button2}>I'm Feeling Lucky</button>
      </div>
      
      <div className={styles.languages}>
        Google offered in:
        <a className={styles.lang} href="#" >English</a>
        <a className={styles.lang} href="#" >اُردُو</a>
        <a className={styles.lang} href="#" >Hindi</a>
      </div>
      </div>
        </>
    )
}