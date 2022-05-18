import React from 'react'
import styles from '../../styles/form/airRegisterForm.module.scss'
// import { airData } from '../../data/airData'

type Props = {
  title: string;
  data:any
}

const AirRegisterForm = ({ title, data }: Props) => {

  return (
    <div>

      <div className={styles.title}>
        {title}
      </div>


      <form className={styles.box_form}>

        {data &&
          data.map((item:any, key:any) => (
            <div className={styles.form_item} key={key}>
              <label className="container_label">
                {item.name}
                <input
                  type="checkbox"
                  disabled={item.status === "on" ? true : false}
                  defaultChecked={item.status === "on" ? true : false}
                   
                  value = {item.name}
                />
                <span className="checkmark"></span>
              </label>
            </div>
          ))}

      </form>


    </div>
  )
}

export default AirRegisterForm