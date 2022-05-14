import React from 'react'
import styles from '../../styles/dashboard/monitor.module.scss'
import { data } from '../charts/LineChart'
import GoogleMap from '../google-map/googleMap'
type Props = {
  temperature: number;
  lat: string;
  lng: string;
  weather_outsides: string;
  total_user: number;
  total_floor: number;
}
const Monitor = ({ temperature, lat, lng, weather_outsides, total_floor, total_user }: Props) => {
  const now = new Date()
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
                  {now.getHours() < 16 ? "สวัสดีตอนเช้า" : "สวัสดีตอนเย็น"}
                </h3>
                <p className={styles.date}>
                  {/* พฤหัสบดี 16 พฤศจิกายน 2564 */}
                  {now.toLocaleDateString('th-TH', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    weekday: 'long',
                  })}
                </p>
              </div>

              <h1>
                {`${now.getHours()}:${now.getMinutes()}`}
                {/* 9:55 */}
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
                  {temperature}<span>ºc</span>
                </div>
              </div>
              <div>
                <figure className='icon'>
                  <img src="/svg/sun.svg" width={60} alt="" />
                </figure>
                <div>
                  {weather_outsides}
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className={styles.mainBox_item}>
          <div className={styles.Gmap}>
            <GoogleMap
              coordinates={undefined}
              setcoordinates={undefined}
              setbounds={undefined}
              lat={lat}
              lng={lng} />
          </div>
        </div>

        <div className={styles.mainBox_item}>
          <div className={styles.subItem}>
            <div className={styles.subItem_right}>
              <figure className='icon'>
                <img src="/svg/builder.svg" width={40} alt="" />
              </figure>
              <p>{total_floor}</p>
              <p>ซั้น</p>
            </div>
          </div>

          <div className={styles.subItem}>
            <div className={styles.subItem_right}>
              <figure className='icon'>
                <img src="/svg/userOrange.svg" width={40} alt="" />
              </figure>
              <p>{total_user}</p>
              <p>ผู้เช้า</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Monitor