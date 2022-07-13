import React, { useState } from 'react'
import styles from '../../styles/form/airRegisterForm.module.scss'
// import { airData } from '../../data/airData'
import Image from 'next/image'
type Props = {
  title: string;
  data: any;
  airSelected: any;
  setAirSelected:any;
}

const AirRegisterForm = ({ title, data, airSelected, setAirSelected }: Props) => {
  const [showMore, setShowMore] = useState(false)
  const onSelect = (id: any) => {
    if (id) {
      const found = airSelected.find((item:any) => item == id )
      if(found == id){
         const del = airSelected.filter((item:any) => item !== id)
         setAirSelected(del)
      }else{
        airSelected.push(id)
      }
    }
  }
  console.log(airSelected.find((item:any) => item == 162 ? true : false)
  )
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
                    // disabled={item.status === "on" ? true : false}
                    defaultChecked={airSelected.find((air:any) => air == item.id ? true : false)}
                    // defaultChecked= {true}
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

