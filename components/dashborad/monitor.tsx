import React from 'react'
import styles from '../../styles/dashboard/monitor.module.scss'
import GoogleMap from '../google-map/googleMap'
const Monitor = () => {
  return (
    <div>

      <div className={styles.title}>
        <h2> ประเทศไทย</h2>
      </div>

      <div className={styles.mainBox}>
        <div className={styles.mainBox_item}>
          <div className={styles.subItem}>
            <section className={styles.text}>
              <div>
                <h3>
                  สวัสดีตอนเช้า
                </h3>
                <p>
                  พฤหัสบดี 16 พฤศจิกายน 2564
                </p>
              </div>

              <h1>
                9:55
              </h1>
            </section>

            <section className={styles.text}>
              <div>
                <figure className='icon'>
                  <img src="/svg/bearLine.svg" width={30} alt="" />
                </figure>
              </div>

              <p>
                สภาพอากาศเช้านี้อากาศแจ่มใส ด้านนอกมีแดดจ้า
              </p>
            </section>
          </div>

          <div className={styles.subItem}>
            <section className={styles.weather}>
              <div>
                <p>Bangkok</p>
                <div className={styles.degree}>
                  30<span>ºc</span>
                </div>
              </div>
              <div>
                <figure className='icon'>
                  <img src="/svg/sun.svg" width={60} alt="" />
                </figure>
                <div>
                  Suny
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className={styles.mainBox_item}>
          <div className={styles.Gmap}>
            <GoogleMap coordinates={undefined} setcoordinates={undefined} setbounds={undefined} />
          </div>
        </div>

        <div className={styles.mainBox_item}>
          <div className={styles.subItem}>
            <div className={styles.subItem_right}>
              <figure className='icon'>
                <img src="/svg/builder.svg" width={40} alt="" />
              </figure>
              <p>6</p>
              <p>ซั้น</p>
            </div>
          </div>

          <div className={styles.subItem}>
            <div className={styles.subItem_right}>
              <figure className='icon'>
                <img src="/svg/userOrange.svg" width={40} alt="" />
              </figure>
              <p>50</p>
              <p>ผู้เช้า</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Monitor