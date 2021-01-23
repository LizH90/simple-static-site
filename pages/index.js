import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <h1>Andy & Lizzie</h1>
        <p>July 9th 2022, Hayne, Devon</p>
      </div>
      <div className={styles.image}>
        <Image 
          src={'/flowers.jpg'}
          height={600}
          width={1100}
          responsive='responsive'
        />
      </div>
      <div className={styles.imageWrapper}>
        <Image 
        className={styles.circle}
        src={'/cottage.jpg'}
        height={400}
        width={400}
      />
      </div>
      <div className={styles.timetable}>
        <h3>Running order of the day</h3>
        <strong>Friday</strong>
        <p>BBQ for happy campers</p>
        <strong>Saturday</strong>
        <p>Bar open 12.30pm</p>
        <p>Service 2pm</p>
        <p>Canapés and Lawn Games 3pm</p>
        <p> Wedding Breakfast 5pm</p>
        <p>Cut the cake</p>
        <p>Firepit and Dancing</p>
        <p>Carriages 1am</p>
        <strong>Sunday</strong>
        <p>Breakfast for campers</p>
      </div>
      <div className={styles.details}>Dress code: Smart Casual</div>
      <div className={styles.details}>Car park on site</div>
      <div className={styles.details}> Cars can be picked up the next day</div>
    </>
  )
}
