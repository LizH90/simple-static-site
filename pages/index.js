import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.names}>Andy & Lizzie</h1>
        <p>July 9th 2022, Hayne, Devon</p>
      </div>
      <div className={styles.image}>
        <Image 
          src={'/flowers.jpg'}
          layout='fill'
        />
      </div>
      <div className="textWrapper">
        <div className={styles.letter}>
          <p>Dear Friends and Relatives</p>
          <p>We are delighted to share this special moment in our lives with you, please join us for a celebrations.</p>
          <p>We have created this site with all the information you will need for the big day.</p>
          <p>We’ll see you in Devon.</p>
          <p className={styles.signature}>Andy & Lizzie</p>
        </div>


        {/* <h2>Countdown</h2> */}
      </div>
    </>
  )
}
