import Nav from "./Nav";

import profile from "../assets/profile.png";
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur hic laborum recusandae, repudiandae sapiente voluptatibus voluptatum. Alias commodi consequatur, cupiditate enim eveniet facilis harum iure nobis, non provident sint vel.
            </p>
            </div>
        </main>

        <Footer/>
    </>
        
}

