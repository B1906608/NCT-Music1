/* eslint-disable jsx-a11y/alt-text */
import {
    faCircleDot,
    faHeart,
    faMusic,
    faRankingStar,
    faShapes,
    faStar,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import cls from "classnames";
  import Image from "next/dist/client/image";
  import Link from "next/link";
  import styles from "../../scss/player/NavBar.module.scss";
  
  function NavBar() {
    return (
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/player">
            <Image
              src="/images/logo.png"
              width={50}
              height={50}
              layout="responsive"
            />
          </Link>
        </div>
        <div className={styles.links}>
          <ul>
            <Link href={"/player"}>
              <li>
                <FontAwesomeIcon icon={faMusic} />
                <span>Trang chủ</span>
              </li>            
            </Link>
  
            <Link href={"/Liked"}>
              <li className={cls(styles.active)}>
                <FontAwesomeIcon icon={faHeart} />
                <span>Yêu thích</span>            
              </li>
            </Link>
  
            <Link href={"/Top100"}>
              <li>
                <FontAwesomeIcon icon={faStar} />
                <span>Top 100</span>
              </li>
            </Link>
  
            <Link href={"/Rankings"}>
              <li>
                <FontAwesomeIcon icon={faRankingStar} />
                <span>Bảng xếp hạng</span>
              </li>
            </Link>

            <Link href={"/NewMusic"}>
              <li>
                <FontAwesomeIcon icon={faCircleDot} />
                <span>Nhạc mới</span>
              </li>
            </Link>

            <li>
              <FontAwesomeIcon icon={faShapes} />
              <span>Danh mục</span>
            </li>

          </ul>
        </div>
      </div>
    );
  }
  
  export default NavBar;
  