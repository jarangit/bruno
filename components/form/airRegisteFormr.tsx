import React from 'react'
import styles from '../../styles/form/airRegisterForm.module.scss'
import { airData } from '../../data/airData'

type Props = {
  title: string
}

const AirRegisterForm = ({ title }: Props) => {

  return (
    <div>

      <div className={styles.title}>
        {title}
      </div>


      <form className={styles.box_form}>

        {airData &&
          airData.map((item, key) => (
            <div className={styles.form_item} key={key}>
              <label className="container_label">
                {item.name}
                <input
                  type="checkbox"
                  disabled={item.disable ? true : false}
                  defaultChecked={item.checked ? true : false}
                   
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