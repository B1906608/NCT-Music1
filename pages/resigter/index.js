export default function Resigter() {  return (
<div style={{width:"fit-content", height:"100%", margin:"0 auto"}}>
    <div style={{boxShadow: "2px 0px 10px 10px #264d0dcf", border: "2px solid #007e10", padding: "15px", width: "438px", height: "fit-content", margin: "auto", marginTop: "150px", backgroundColor: "#ffffff", position: "relative",}}>
    <h2 style={{textAlign: "center", color: "white", fontSize: "2.5rem", backgroundColor: "#007e10"}}>Đăng Ký</h2>
        <form style={{display: "flex", flexDirection: "column", textAlign: "center", width: "fit-content", margin: "auto",}} action="" method="get">
            <input style={{width: "100%", margin: "6px", padding: "12px", fontSize: "18px", height: "34px", borderRadius: "25px", backgroundColor: "#e1deb09c", borderColor: "#0f0f0f", border: "1px solid black", color: "#48b600"}} type="text" name="user" placeholder="Tên người dùng" required/>
            <input style={{width: "100%", margin: "6px", padding: "12px", fontSize: "18px", height: "34px", borderRadius: "25px", backgroundColor: "#e1deb09c", borderColor: "#0f0f0f", border: "1px solid black", color: "#48b600"}} type="text" name="hoten" placeholder="Họ tên" required/>
            <input style={{width: "100%", margin: "6px", padding: "12px", fontSize: "18px", height: "34px", borderRadius: "25px", backgroundColor: "#e1deb09c", borderColor: "#0f0f0f", border: "1px solid black", color: "#48b600"}} type="email" name="email" placeholder="Email" required/>
            <input style={{width: "100%", margin: "6px", padding: "12px", fontSize: "18px", height: "34px", borderRadius: "25px", backgroundColor: "#e1deb09c", borderColor: "#0f0f0f", border: "1px solid black", color: "#48b600"}} type="number" name="sdt" placeholder="Số điện thoại" required/>
            <input style={{width: "100%", margin: "6px", padding: "12px", fontSize: "18px", height: "34px", borderRadius: "25px", backgroundColor: "#e1deb09c", borderColor: "#0f0f0f", border: "1px solid black", color: "#48b600"}} type="password" name="pass" placeholder="Mật khẩu" required/>
            <input style={{width: "100%", margin: "6px", padding: "12px", fontSize: "18px", height: "34px", borderRadius: "25px", backgroundColor: "#e1deb09c", borderColor: "#0f0f0f", border: "1px solid black", color: "#48b600"}} type="password" name="repass" placeholder="Nhập lại mật khẩu" required/>
            <button onClick="return validateRegister()" type="submit" style={{backgroundColor: "#48b600", width: "fit-content", margin: "auto", borderRadius: "41px", border: "none", color: "white", fontSize: "22px", padding: "8px", fontWeight: "700", ":hover":{backgroundColor: "#0f0e0e"}}}>Đăng ký</button>
        </form>
        <div style={{position: "absolute", backgroundSize: "contain", width: "36px", height: "36px", backgroundImage: "url(../images/cancel.png)", top: "-5px", right: "-7px", backgroundColor: "#48b600", borderRadius: "50%", ":hover":{width: "39px", height: "39px", cursor: "pointer"} }} ></div>
    </div>
</div>)}
