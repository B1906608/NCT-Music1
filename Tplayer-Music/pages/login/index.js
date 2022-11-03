import { faCircleXmark, faSearch, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cls from "classnames";
import Link from "next/link";
import styles from "../../scss/player/NavBar.module.scss";

export default function Login() {  return (
 <div style={{display:"block", width:"fit-content", height:"300px", margin:"0 auto"}}>
  <div style={{boxShadow: "2px 0px 10px 10px #264d0dcf", border: "2px solid #007e10", padding: "15px", width: "438px", height: "fit-content", margin: "auto", marginTop: "150px", backgroundColor: "#ffffff", position: "relative"}}>
      <h2 style={{textAlign: "center", color: "white", fontSize: "2.5rem", backgroundColor: "#007e10"}}>Đăng Nhập</h2>
      <form style={{display: "flex", flexDirection: "column", textAlign: "center", width: "fit-content", margin: "auto"}} action="" method="get">
          <input style={{width: "100%", margin: "6px", padding: "12px", fontSize: "18px", height: "34px", borderRadius: "25px", backgroundColor: "#e1deb09c", borderColor: "#0f0f0f", border: "1px solid black", color: "#48b600"}} type="text" name="user" placeholder="Tên người dùng"/>
          <input style={{width: "100%", margin: "6px", padding: "12px", fontSize: "18px", height: "34px", borderRadius: "25px", backgroundColor: "#e1deb09c", borderColor: "#0f0f0f", border: "1px solid black", color: "#48b600"}} type="password" name="pass" placeholder="Mật khẩu"/>
          <div style={{margin: "auto", display: "flex"}}>
              <input style={{width: "fit-content", marginTop: "2px"}} type="checkbox" name="nhotoi" />
              <p style={{width: "fit-content", height: "fit-content", margin: "auto 8px"}}>Nhớ tôi</p>
          </div>
          <button onClick="return validateLogin()" type="submit" style={{backgroundColor: "#48b600", color: "white", fontSize: "22px", padding: "8px", borderRadius: "41px", border: "none", margin: "auto", width: "fit-content", fontWeight: "700", ":hover":{backgroundColor: "#0f0e0e"}}}>Đăng nhập</button>
      </form>
      <div style={{position: "absolute", backgroundSize: "contain", width: "36px", height: "36px", backgroundImage: "url(../images/cancel.png)", top: "-5px", right: "-7px", borderRadius: "50%", ":hover":{width: "39px", height: "39px", cursor: "pointer"} }} >
        <Link href={"/player"}>
            <FontAwesomeIcon icon={faCircleXmark} style={{ fontSize: 30}} />
        </Link>
      </div>
  </div>
</div>)
}