import moment from 'moment';
import React from 'react'
import styles from '../../styles/dashboard/monitor.module.scss'
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
  const current = moment();
  console.log(current.minutes());


  const ShowTime = () => {
    const current = moment();
    return (
      <div className='flex gap-1'>
        <div>
          {`${current.hours() <= 9 ? `0${current.hours()}` : current.hours()}`}
        </div>
        <div>:</div>
        <div>
          {`${current.minutes() <= 9 ? `0${current.minutes()}` : current.minutes()}`}
        </div>
      </div>
    )
  }
  return (
    <div>

      <div className={styles.title}>
        <h2> ประเทศไทย</h2>
      </div>

      <div className={styles.mainBox}>
        <div className={styles.mainBox_item}>
          <div className={styles.subItem}>
            <div className={`${styles.text}  items-center flex`}>
              <div>
                <div className={`text-xl`}>
                  {now.getHours() < 16 ? "สวัสดีตอนเช้า" : "สวัสดีตอนเย็น"}
                </div>
                <p className={`text-sm`}>
                  {/* พฤหัสบดี 16 พฤศจิกายน 2564 */}
                  {now.toLocaleDateString('th-TH', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    weekday: 'long',
                  })}
                </p>
              </div>

              <div className='text-4xl'>
                <ShowTime />
                {/* {`${now.getHours()}:${now.getMinutes()}`} */}
                {/* 9:55 */}
              </div>
            </div>

            <section className={styles.text}>
              <div>
                <figure className='icon'>
                  <img src="/svg/bearLine.svg" width={60} alt="" />
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
                <p className={`text-orange-400`}>Bangkok</p>
                <div className={styles.degree}>
                  {Math.round(temperature)}<span>ºc</span>
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


