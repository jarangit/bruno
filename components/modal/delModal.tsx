import React, { Dispatch, SetStateAction } from 'react'
import styles from '../../styles/modal/delModal.module.scss'
type Props = {
  title: string;
  onClose: Dispatch<SetStateAction<boolean>>;
}

const DelModal = ({ title, onClose }: Props) => {
  return (
    <div id="myModal" className={styles.modal}>
      <div className={styles.modal_content}>
        <p> {title}</p>
        <img
          src="/svg/close.svg"
          width={40} alt=""
          className={`${styles.close_icon} icon`}
          onClick={() => onClose(false)}

        />
        <img src="/svg/tashOpen.svg" width={150} alt="" />
        <div className={styles.box_but}>
          <button
            className='but_black'
            onClick={() => onClose(false)}
          >
            ยกเลิก
          </button>
          <button
            className='but_gray'
            onClick={() => onClose(false)}
          >ยืนยัน</button>
        </div>
      </div>
    </div>
  )
}

export default DelModal