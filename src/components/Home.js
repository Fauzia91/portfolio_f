import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";


export default function Home({ setScreen }) {

    return (
       <>
             <Nav setScreen={setScreen} />
             <main>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci animi at eligendi, fugit harum hic mollitia perferendis quae quia quidem repellendus sed tempore voluptatibus voluptatum! Aliquam aliquid animi architecto asperiores at consequatur cumque deleniti dolor esse itaque, libero mollitia necessitatibus omnis quasi, quisquam quod repellendus saepe sed soluta temporibus.
                </div>
             </main>

           <Footer/>
       </>
    );
}

















