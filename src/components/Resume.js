import Nav from "./Nav"
import profile from "../assets/profile.png";
import Footer from "./Footer";
import React from "react";
import resume from "../assets/downloadResume.png";



export default function Resume ({setScreen}){


    return <><Nav setScreen={setScreen} />
    <main>
        <div>
            <p>
                Fauzia Azad 
            </p>
            <h3>Company Name <small>Jan 22 - Present</small></h3>
            <h4>Job Title</h4>
            <p>
                Responsibility: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur hic laborum recusandae, repudiandae sapiente voluptatibus voluptatum. Alias commodi consequatur, cupiditate enim eveniet facilis harum iure nobis, non provident sint vel.
            </p>

            <h3>Company Name <small>Jan 21 - Dec 22</small></h3>
            <h4>Job Title</h4>
            <p>
                Responsibility: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur hic laborum recusandae, repudiandae sapiente voluptatibus voluptatum. Alias commodi consequatur, cupiditate enim eveniet facilis harum iure nobis, non provident sint vel.
            </p>
            <a className={"btn"} download href={resume}>Download Resume</a>




        </div>
    </main>

    <Footer/></>
}