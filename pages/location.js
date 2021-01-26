import styles from '../styles/Location.module.css'

export default function Location() {
  return (
    <>
      <div className="titleWrapper">
        <h1 className="title">Location</h1>
      </div>
      <div className={styles.textWrapper}>
        <p>Directions:</p>
        <p>Hayne, Zeal Monachorum EX17 6DE</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3138.3170677234666!2d-3.8258277320108407!3d50.81513210151705!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc3e9cb5ae7647df3!2sHayne%20Devon!5e0!3m2!1sen!2suk!4v1611687075494!5m2!1sen!2suk" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        <p>By Road:</p>
        <p>
          From London / Bristol
          Exit M5 Junction 27 follow A361 to Tiverton, then follow signs to Bickleigh (A396). 
          In Bickleigh follow signs to Crediton (A3072). In Crediton follow signs for Copplestone 
          (A377) and after 2 miles turn left onto the B3220. Then in 1.5 miles turn left to Zeal Monachorum. 
          Keeping the church on your left follow the road around to the left through the village, 
          down the hill and out of the village. After 1/2 mile Hayne is on the right.
        </p>
        <p>By Rail</p>
        <p>
          Head to Copplestone Station (London Paddington – Exeter St David’s – Copplestone).
          London Paddington to Exeter St Davids on the fast train takes approx 2 hours.  
          Then take the train from Exeter St Davids to Copplestone (20-25 min journey on The Tarka Line).
          Taxis should be pre-booked to meet you at Copplestone (from here it is 10 mins to Hayne)
        </p>
        <img className={styles.illustration} src="https://haynedevon.co.uk/wp-content/uploads/2016/06/hayne-larger-area-map-1500x1263.jpg" />
        <p>Taxi Services:</p>
        <div>
        Crediton Cars

01363 777 714

White Swan Taxis

01363 777 786

Express Cars of Crediton

01363 777 177

Okehampton Taxis

01837 535 55

Eds Taxis 

07802 372 964

Oke Taxis

01837 52 421

Smartway Taxi

01837 88 055

Galaxy Taxi 

01837 82 005

Hatherleigh Taxis

07809 207 678

Mid Devon Coach & Minibus

01363 82 200

Powells Coach & Minibus

01363 83 468
        </div>
      </div>
    </>
  )
}