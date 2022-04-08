import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div>
        <div className={`${styles.container} ${styles.newsletter}`}>
            <div className={`${styles.newsleft}`}>
                <p>KEEP ME UPDATED</p>
            </div>
            <div className={`${styles.newsright}`}>
                <form method="POST" id="newsletter">
                    <input type="text" name="name" id="names" placeholder="Name *" required />
                    <input type="email" name="email" id="emails" placeholder="Email *" required />
                    <input type="submit" value="Submit" className={styles.submit} />
                </form>
            </div>
        </div>
        
        

        <footer>
            <div className={`${styles.image}`}>
                <img src="https://firebasestorage.googleapis.com/v0/b/alumini-reconnect.appspot.com/o/Images%2Fvit%20full%20logo.png?alt=media&token=b1fad678-3e2d-4c0f-bd72-ba950faf1a52" alt="Vit ap Full logo" />
            </div>
            <div className={`${styles.footerinfo}`}>
                <p>Apply Knowledge. Improve Life</p>
                <p>All rights reserved. 2021. VIT AP UNIVERSITY</p>
            </div>
            
        </footer>
    </div>
  )
}

export default Footer