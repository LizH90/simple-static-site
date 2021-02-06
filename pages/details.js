
import styles from '../styles/Details.module.css'
import Image from 'next/image';


export default function Weekend() {
  return (
    <>
      <div className={styles.image}>
        <Image 
        src={'/cottage.jpg'}
        layout='fill'
      />
      </div>
      <div className="textWrapper">
        <div className={styles.timetable}>
          <h3 className={styles.title}>Order of the day</h3>
          <div className={styles.divider}>~</div>
          <strong className={styles.day}>Friday</strong>
          <p><span className={styles.time}>19:00pm </span>BBQ for happy campers</p>
          <div className={styles.divider}>~</div>
          <strong className={styles.day}>Saturday</strong>
          <p><span className={styles.time}>13:00pm </span>Bar open</p>
          <p><span className={styles.time}>14:00pm </span>Service</p>
          <p><span className={styles.time}>15:00pm </span>Canapés and Lawn Games</p>
          <p><span className={styles.time}>17:00pm </span>Wedding Breakfast</p>
          <p>Cut the cake</p>
          <p>Firepit and Dancing</p>
          <p><span className={styles.time}>1:00am </span>Carriages</p>
          <div className={styles.divider}>~</div>
          <strong className={styles.day}>Sunday</strong>
          <p><span className={styles.time}>10:00am </span>Breakfast for campers</p>
          <div className={styles.divider}>~</div>
        </div>
        <div className={styles.details}>Dress code: Smart Casual</div>
        <div className={styles.details}>Car park on site</div>
        <div className={styles.details}> Cars can be picked up the next day</div>
      </div>
    </>
  )
}