import { faMoon, faSearch, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cls from "classnames";
import Image from "next/dist/client/image";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import MusicPlayerContext from "../../context/MusicPlayerContext";
import styles from "../../scss/common/Liked.module.scss";
import Song from "../../components/player/Song";
export function Header() {
  const { dispatch, addNewSong } = useContext(MusicPlayerContext);
  const [search, setSearch] = useState("");
  const [list, setList] = useState([])

  const searchRef = useRef(null);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const account = () => {
    const ul = document.getElementById("account");
    console.log(ul);
    ul.style.display = ul.style.display==="block"?"none":"block";
  };

  const fetchSearch = async(name)=>{
    const res = await fetch(`/api/song/search/${name}`)
    const data = await res.json();
    console.log(data.data);
    setList(data.data)
  }

  useEffect(() => {
    const idTimeout = setTimeout(() => {
      if (search) {
        fetchSearch(search)
      }else{
        setList([])
      }
    }, 500);
    return () => {
      if (idTimeout) clearTimeout(idTimeout);
    };
  }, [search]);

  useEffect(() => {
    window.onkeydown = (e) => {
      if (searchRef.current !== document.activeElement) {
        if (e.code === "Space") dispatch({ type: "TOGGLE" });
      }
    };
  }, []);

  const handleNewSong = (song)=>{
    // console.log("New Song", song);
    addNewSong(song)
    setSearch("")
  }

  return (
    <div className={cls(styles.wrapper)}>
      <div className={cls(styles.header)}>
        <div className={cls(styles.search)}>
          <label htmlFor="searchInput">
            <FontAwesomeIcon icon={faSearch} />
          </label>
          <input
            ref={searchRef}
            value={search}
            onChange={onChange}
            id="searchInput"
            type="text"
            placeholder="Tìm kiếm bài hát..."
          ></input>
          <div className={cls(styles.searchResult)}>
            {list.map((song => (
              <Song key={song.id} song={song} noneHeart handleNewSong={handleNewSong}/>
            )))}
          </div>
        </div>
        <div className={cls(styles.links)}>
          <div>
            <FontAwesomeIcon icon={faMoon} className={cls(styles.links_icon1)} />
          </div>
          <div>
            <FontAwesomeIcon icon={faGear} className={cls(styles.links_icon2)} />
          </div>
          <div className={(styles.links_avatar)}>
            <Image
            onClick={()=>login()}
            className={cls(styles.avatarImg)}
            src="/images/avt.webp"
            width={35}
            height={35}
            layout="fixed"
            alt="hello"
          />
            <div className={cls(styles.link_avatar_account)}>
              <ul id="account" className={cls(styles.link_avatar_account_ul)}>
                <Link href={"/login"}>
                  <li className={cls(styles.account_ul_login)}>
                    Đăng nhập</li>
                </Link>
                <Link href={"/resigter"}>
                  <li className={cls(styles.account_ul_resigter)}>
                    Đăng ký</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
