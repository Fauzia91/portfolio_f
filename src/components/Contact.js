import Nav from "./Nav";
import Footer from "./Footer";
import React from "react";


export default function Contact ({ setScreen }) {
    return (
        <>
            <Nav setScreen={setScreen} />
            <main>

            <div>
                <h1>Contact</h1>
                <form>
                    <fieldset>
                    <label>Name:</label>
                    <input type="text" />
                    </fieldset>
                    <fieldset>
                    <label>Email:</label>
                    <input type="text" required pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                    </fieldset>
                    <fieldset>
                    <label>Message:</label>
                    <textarea rows={8} type="text" /> 
                    <input type="Submit" className={"btn"} value="Send Message"  />
                    </fieldset>
                </form>
            </div>
            </main>
            
            <Footer />
            </>

    );
}

