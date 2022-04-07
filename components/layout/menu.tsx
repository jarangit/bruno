import React from "react";
import styles from "../../styles/layout/menu.module.scss";
const Menu = () => {
  return (
    <div className={styles.menu}>
      <ul>

        <li>
          <select className={styles.menuSelector}>
            <option value="1">อาคาร</option>
            <option value="1">ชั้น</option>
          </select>
        </li>

        <li>
          <select className={styles.menuSelector}>
            <option value="1">ชั้น</option>
            <option value="1">item</option>
          </select>
        </li>

        <li className={styles.li_inputSearch} >
          <img src="/svg/search.svg" alt="" width={20} />
          <input type="text" className={styles.inputSearch} placeholder="ค้นหาชั้น,ผู้เช่า" />
        </li>

      </ul>


      <div className={styles.logo}>
        <h1>BRUNO</h1>
      </div>


      <ul className={styles.menuRigth}>

        <li>
          <a href="#">
            <div className={styles.menuItem}>
              <img src="/svg/user.svg" alt="" width={20} />
              <p>Owner Information</p>
            </div>
          </a>
        </li>

        <li>
          <a href="#">
            <div className={styles.menuItem}>
              <img src="/svg/gear.svg" alt="" width={20} />
              <p>Unit Price Setting </p>
            </div>
          </a>
        </li>

      </ul>
    </div>
  );
};

export default Menu;
