import React from "react";
import Blogpro from "./Blogpro";



const Blog = () =>{
    return(
        <>
            <div className="blog-outer">
        <div className="container">
            <div className="blog-title">
                <p>our latest blog</p>
                <div className="b-t"></div>
                <div className="blog-t">
                    Our car rental services, in the travel industry and business
                    industry,<br />
                    stand apart for their quality and great taste
                </div>
            </div>
            <div className="blog-inner">
               <Blogpro date="01" month="jun" title="This is how motor will look like in 10 years time." img="assets/image/blog1.jpg" img2="assets/image/blog4.jpg" name="shanna yanez" num="06"/>
               <Blogpro date="30" month="may" title="Different ways innovation has improved ton for your vehicles" img="assets/image/blog2.jpg" img2="assets/image/blog5.jpg" name=" philip lewis" num="10"/>
               <Blogpro date="29" month="may" title="15 facts that nobody told you about tires." img="assets/image/blog3.jpg" img2="assets/image/blog6.jpg" name=" katrina isakson" num="12"/>
            </div>
        </div>
    </div>

        </>
    )
}


export default Blog;