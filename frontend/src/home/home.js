import { useState, useEffect } from "react";
import bg from "./../images/t..png";
import toy from "./../images/DStv_Premiership_logo.svg.png";
import "./home.css";
import Header from "./../components/header/header";

function Home() {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const [user, setUser] = useState({});

    console.log("token: ", token);
    console.log("role: ", role);

    return (
        <div className="home">
            <div className="home_container">
                <Header />
                <div className="background">
                    <div className="background__content">
                        <img alt="logo" className="background__content__logo" src={toy} />
                        <h1>
                            DSTV premiership
                            <br />
                            South Africa 2022/2023
                            <br />
                            <br />
                            Match Tickets
                            
                        </h1>
                        {!token ? (
                            <div className="background__content__buttons">
                                <button className="background__content__buttons__button">
                                    <a href="/login">Login</a>
                                </button>
                                <button className="background__content__buttons__button">
                                    <a href="/register">Register</a>
                                </button>
                            </div>
                        ) : (
                            //matches

                            <div className="background__content__buttons">
                                <button className="background__content__buttons__button">
                                    <a href="/matches">Matches</a>
                                </button>
                                {role === "fan" && <button className="background__content__buttons__button">
                                    <a href="/reservations">Tickets</a>
                                </button>}
                            </div>
                        )}
                    </div>

                    <img alt="background" className="background-img" src={bg} />
                </div>
            </div>
        </div>
    );
}

export default Home;