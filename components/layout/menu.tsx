import React from "react";
import styles from "../../styles/layout/menu.module.scss";
import Link from 'next/link'
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
        <Link href="/">
          <a>
            <h1>BRUNO</h1>
          </a>
        </Link>
      </div>


      <ul className={styles.menuRigth}>

        <li>
          <Link href="/login">
            <div className={styles.menuItem}>
              <img src="/svg/user.svg" alt="" width={20} />
              <p>Owner Information</p>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/setting">
            <div className={styles.menuItem}>
              <img src="/svg/gear.svg" alt="" width={20} />
              <p>Unit Price Setting </p>
            </div>
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default Menu;
