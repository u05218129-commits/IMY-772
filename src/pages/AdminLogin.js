import "./AdminLogin.css";
import heroImg from "../assets/images/admin.png";

function AdminLogin() {
    return (
        <div class="hero">
            <div class="hero-img">
                <img src={heroImg} alt="Home" />
            </div>
            <div>
                <div class="admin-title">
                    Admin Login
                </div>

                <div class="input-container">
                  <div class="input-label">Name:</div>
                  <div class="input-box">
                    <input placeholder="John"></input>
                  </div>
                </div>

                <div class="input-container">
                  <div class="input-label">Email:</div>
                  <div class="input-box">
                    <input placeholder="John@gmail.com"></input>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;