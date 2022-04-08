import React from 'react'
import styles from './contact.module.css'

const ContactSocial = () => {
  return (
        <div className={styles.contactsocial}>
            <h3>Connect with us</h3>
            <div className={styles.social}>
            <div className={`${styles.sbox} ${styles.instagram}`}>
                <img src="https://firebasestorage.googleapis.com/v0/b/alumini-reconnect.appspot.com/o/Images%2Finstagram.png?alt=media&token=35ff579c-cbb5-4a44-9d89-df9beb9bfbc8" className={styles.imagefluid} alt="instagram icon" />
                <p>Instagram</p>
            </div>
            <div className={`${styles.sbox} ${styles.facebook}`}>
                <img src="https://firebasestorage.googleapis.com/v0/b/alumini-reconnect.appspot.com/o/Images%2Ffacebook.png?alt=media&token=56198ca7-9a39-4043-a62f-255fe85e2e57" className={styles.imagefluid} alt="Facebook icon" />
                <p>Facebook</p>
            </div>
            <div className={`${styles.sbox} ${styles.linkedin}`}>
                <img src="https://firebasestorage.googleapis.com/v0/b/alumini-reconnect.appspot.com/o/Images%2Flinkedin.png?alt=media&token=f62536ee-2128-4b71-8003-e4c3c356b5f7" className={styles.imagefluid} alt="Linkedin Icon" />
                <p>Linked In</p>
            </div>
            <div className={`${styles.sbox} ${styles.twitter}`}>
                <img src="https://firebasestorage.googleapis.com/v0/b/alumini-reconnect.appspot.com/o/Images%2Ftwitter.png?alt=media&token=60267bcc-1332-4b87-8df7-c9231a8b6851" className={styles.imagefluid} alt="twitter icon" />
                <p>Twitter</p>
            </div>
            <div className={`${styles.sbox} ${styles.youtube}`}>
                <img src="https://firebasestorage.googleapis.com/v0/b/alumini-reconnect.appspot.com/o/Images%2Fyoutube.png?alt=media&token=9de11710-4655-40d3-8e4c-45ad187b445b" className={styles.imagefluid} alt="youtube icon" />
                <p>Youtube</p>
            </div>
            </div>
    </div>
  )
}

export default ContactSocial