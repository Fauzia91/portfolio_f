import Nav from "./Nav";
import Footer from "./Footer";
import React, {useState} from "react";
import sample from "../assets/sample1.jpg";





export default function Portfolio ({setScreen}){

    const portfolio = [{
        title: "About Me Portfolio",
        github: "https://github.com/Fauzia91/About-Me-Portfolio/",
        img: sample
    },{
        title: "fantastic-umbrella",
        github: "https://github.com/Fauzia91/fantastic-umbrella",
        img: sample
    },{
        title: "Tech Blog",
        github: "https://github.com/Fauzia91/Tech_Blog_R",
        img: sample
    },{
        title: "Employee Tracker",
        github: "https://github.com/Fauzia91/sql-employee-tracker",
        img: sample
    },{
        title: "Weather App",
        github: "https://github.com/Fauzia91/weather-app",
        img: sample
    },{
        title: "Coding Quiz",
        github: "https://github.com/Fauzia91/Coding-Quiz-",
        img: sample
    }]




    return  <>
        <Nav setScreen={setScreen} />
        <main>
            <div>
                <div className="pContainer">
                {
                    portfolio.map(
                        p => {
                            return <div className={"pBox"}>

                                <img src={p.img}/>
                                <h4>{p.title}</h4>
                                <div className={"controls"}>
                                    <a className={"btn btn-small"} href={p.github}>View Repo</a>
                                </div>
                            </div>
                        }
                    )
                }
                </div>
            </div>
        </main>

        <Footer/>
    </>
}
