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
        <Image
          src="/images/logo.png"
          width={50}
          height={50}
          layout="responsive"
        />
      </div>
      <div className={styles.links}>
        <ul>
          <li className={cls(styles.active)}>
              {/* <Link href={"/pages/player"}> */}
              <FontAwesomeIcon icon={faMusic} />
              <span>Trang chủ</span>
            {/* </Link> */}
          </li>
          <li>
            <Link href={"/pages/Liked"}>
            <FontAwesomeIcon icon={faHeart} />
            <span>Yêu thích</span>
            </Link>
          </li>
          <li>
            <Link href={"/pages/Top100"}>
            <FontAwesomeIcon icon={faStar} />
            <span>Top 100</span>
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faRankingStar} />
            <span>Bảng xếp hạng</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faShapes} />
            <span>Danh mục</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleDot} />
            <span>Khám phá</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
