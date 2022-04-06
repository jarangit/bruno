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

        <li style={{ background: "#707070", display: "flex", gap: "5px" }} >
          <img src="/svg/search.svg" alt="" width={20} />
          <input type="text" className={styles.inputSearch} />
        </li>

      </ul>


      <div>
        <h1>BRUNO</h1>
      </div>


      <ul>

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
