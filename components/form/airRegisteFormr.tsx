import React, { useState } from 'react'
import styles from '../../styles/form/airRegisterForm.module.scss'
// import { airData } from '../../data/airData'
import Image from 'next/image'
type Props = {
  title: string;
  data: any;
  airSelected: any
}

const AirRegisterForm = ({ title, data, airSelected }: Props) => {
  console.log('%cMyProject%cline:11%cdata', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(3, 22, 52);padding:3px;border-radius:2px', data)
  const [showMore, setShowMore] = useState(false)
  const onSelect = (id: any) => {
    if (id) {
      airSelected.push(id)
    }
  }
  return (
    <div>
      <div className={styles.title}>
        {title}
      </div>
      <form className={styles.box_form}>

        {data && data.length ?
          data.map((item: any, key: any) =>
            key <= `${showMore ? 100 : 9}` && (
              <div className={styles.form_item} key={key}>
                <label className="container_label">
                  {item.name}
                  <input
                    type="checkbox"
                    disabled={item.status === "on" ? true : false}
                    defaultChecked={item.status === "on" ? true : false}
                    onChange={() => onSelect(item.id)}
                    value={item.name}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            )
          ) : (
            <div className="text-center">
              ไม่พบรายการ Air
            </div>
          )}


        {data && data.length > 10 ? (
          <div className="w-full text-center cursor-pointer" onClick={() => setShowMore(!showMore)}>
            {showMore ? (
              <div>
                <div className="rotate-180">
                  <Image src={`/svg/arrowDown.svg`} alt="" width={10} height={10} />
                </div>
                <div>Hidden</div>
              </div>
            ) : (
              <div>
                <div>Show more</div>
                <div>
                  <Image src={`/svg/arrowDown.svg`} alt="" width={10} height={10} />
                </div>
              </div>
            )}
          </div>
        ) : null}
      </form>
    </div>
  )
}

export default AirRegisterForm

