import React from 'react'
import styles from './aboutUs.module.css'

const AboutUs = () => {
  return (
<div>
    <div className={styles.rowContainer}>
    <div className={styles.row}>
    <div className={`${styles.container} ${styles.heading}`}>
        <h3>Chancellor's Message</h3>
    </div>
    <div className={`${styles.container} ${styles.sectionmain}`}>
        <div className={styles.imagesection}>
            <img src="https://raw.githubusercontent.com/bindhumadhavavarma/VIT-AP-ALUMNI/main/alumni-frontend-react/src/assets/img/chancellor.jpg?token=GHSAT0AAAAAABQ7BDXJK6IMYAJCDJHBGKMSYSQGXLQ" alt="Chancellor's image" />
            <div className={styles.message}>Chancellor Dr G Viswanathan</div>
        </div>
        <div className={`${styles.mattersection}`}>
            It is with great pride that Alumni Connect creates a platform for all students and cherished members of VIT-AP University’s 
            Alumni Association. I wholeheartedly encourage all alumni to visit this forum to relive your memories, share your 
            achievements, and pass on insights from your experiences to reconnect with your peers and juniors. I hope each of you 
            continue to excel in your respective fields and bring laurels to you and your alma mater. Apply the knowledge you gain, 
            and improve many lives as long-term members of the VIT-AP Alumni Association.
        </div>
      </div>
    </div>


    <div className={styles.row}>
    <div className={`${styles.container} ${styles.heading}`}>
        <h3>Vice Chancellor's Message</h3>
    </div>

    
    <div className={`${styles.container} ${styles.sectionmain} ${styles.vmatter}`}>
        <div className={styles.mattersection}>
            A very warm welcome to all members of the VIT-AP University’s Alumni Association to Alumni Connect. We are glad to 
            have you join us on this digital platform. Alumni Connect is designed with the vision to ensure that each and every 
            member of the VIT-AP University alumni community has the opportunity to stay connected with their alma-mater as they 
            leave us and move on to achieving further milestones. I urge all members of the alumni to use this app and renew their 
            bonds with the VIT-AP University community.
        </div>
        <div className={`${styles.imagesection} ${styles.vimage}`}>
            <img src="https://raw.githubusercontent.com/bindhumadhavavarma/VIT-AP-ALUMNI/main/alumni-frontend-react/src/assets/img/vchance.jpg?token=GHSAT0AAAAAABQ7BDXJXO5EC3KXZOG5PPKKYSQGX2Q" alt="Vice Chancellors Image" />
            <div className={styles.message}>Dr. S. V. Kota Reddy</div>
        </div>
      </div>
    </div>


    <div className={styles.row}>
    <div className={`${styles.container} ${styles.heading}`}>
        <h3>Vice President's Message</h3>
    </div>
    <div className={`${styles.container} ${styles.sectionmain}`}>
        <div className={styles.imagesection}>
            <img src="https://raw.githubusercontent.com/bindhumadhavavarma/VIT-AP-ALUMNI/main/alumni-frontend-react/src/assets/img/vice.jpg?token=GHSAT0AAAAAABQ7BDXIHURPZNT4LPYTJRAOYSQGYMA" alt="Vice President's image" />
            <div className={styles.message}>Dr. Sekar Viswanathan</div>
        </div>
        <div className={`${styles.mattersection}`}>
        Greetings to all members of the VIT-AP University’s Alumni Association. 
        VIT-AP is honoured to have you as active participants of Alumni Connect.
        As a digital extension of the VIT-AP family, we have launched Alumni Connect which will enable our alumni to 
        interact with each other and form a long-lasting relationship with the institute. My hope is that this platform will 
        facilitate a global network of VITians who are the torchbearers of VIT-AP University’s legacy.
        </div>
      </div>
      </div>

    <div className={`${styles.video} ${styles.container}`}>
        <iframe height="550" src="https://www.youtube.com/embed/5W7qdSss7Gk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
</div>
  )
}

export default AboutUs