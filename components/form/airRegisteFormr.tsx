import React from 'react'
import styles from '../../styles/form/airRegisterForm.module.scss'
type Props = {}

const AirRegisterForm = (props: Props) => {
  return (
    <div>
      <div className={styles.title}>
        Title
      </div>


      <form className={styles.box_form}

      >
        <div  className={styles.form_item}>
          <label>
            item
          </label>
            <input type="checkbox" />
        </div>
      </form>
    </div>
  )
}

export default AirRegisterForm