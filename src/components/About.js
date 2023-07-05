import Nav from "./Nav";

import profile from "../assets/photo.png";
import Footer from "./Footer";
import React from "react";


export default function About ({setScreen}){
    return <>
        <Nav setScreen={setScreen} />
        <main>
            <div>
                    <div className="profileImg">
                    <img src={profile}/>
                    </div>
                    <p>
                        Hi, my name is Fauzia Azad. I'm currently enrolled in Columbia's full stack development program. As we reach the end of our program be sure to check out my portfolio to see recent assignments I've created as a beginner level full stack developer! 
                    </p>
            </div>
        </main>

        <Footer/>
    </>
        
}

