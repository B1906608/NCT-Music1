import { faMoon, faSearch, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cls from "classnames";
import Image from "next/dist/client/image";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import MusicPlayerContext from "../../context/MusicPlayerContext";
import styles from "../../scss/common/Header.module.scss";
import Song from "../player/Song";
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
            <FontAwesomeIcon icon={faMoon} style={{fontSize: "30px"}} />
          </div>
          <div>
            <FontAwesomeIcon icon={faGear} style={{fontSize: "30px" ,marginLeft: "20px", marginRight: "20px"}} />
          </div>
          <div style={{position: "absolute", marginRight: "20px"}}>
            <Image
            onClick={()=>login()}
            className={cls(styles.avatarImg)}
            src="/images/avt.webp"
            width={35}
            height={35}
            layout="fixed"
            alt="hello"
          />
            <div style={{position: "absolute", width: "120px", right: "5px"}}>
              <ul id="account" style={{marginTop: "10px", borderRadius: "10px"}}>
                <Link href={"/login"}>
                  <li style={{textAlign:"center",marginBottom: "5px", borderBottom: "2px solid #000", borderRadius: "20px", padding: "10px", backgroundColor: "grey"}}>
                    Đăng nhập</li>
                </Link>
                <Link href={"/resigter"}>
                  <li style={{textAlign: "center", borderRadius: "20px", padding: "10px", backgroundColor: "grey"}}>
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
