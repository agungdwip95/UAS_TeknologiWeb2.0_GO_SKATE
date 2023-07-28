//import hook useState from react
import React, { useState } from "react";

//import layout
import Layout from "../../Layouts/Default";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

export default function AboutSkateboard({ errors, skateboard }) {

    return (
        <Layout>
            <div style={{  marginTop: '100px' }}>
                <div className="text-center mb-4">
                    <img src="/img/about_us.png" height={60} className="col-5 center-block" alt="..."/>
                </div>
                <div className="card border-0 rounded shadow-sm">
                    <div className="card-body">
                        <p>
                            At Go Skate, we eat, sleep, and breathe skateboarding. We are more than just a skate shop.
                            We are a community of passionate skateboarders dedicated to spreading the love and excitement of this exhilarating sport. 
                            Since our inception, our mission has been simple: 
                            to provide the finest skateboarding gear and accessories, while fostering a supportive and inclusive environment for skaters of all 
                            ages and skill levels. <br /><br />
                            <b>Our Skateboarding Journey:</b><br />
                            Our journey in the skateboarding world began with a few enthusiastic skaters who recognized the need for a one-stop destination that 
                            not only offered top-quality products but also nurtured the spirit of skateboarding. With relentless dedication, we transformed our 
                            love for skating into a full-fledged skate shop that stands as a testament to our commitment to the sport.<br /><br />
                            <b>Our Vision:</b><br />
                            Our vision extends beyond just being a skate shop. We aspire to contribute positively to the skateboarding culture by organizing community 
                            events, workshops, and collaborations with local artists and skaters. Through these efforts, we aim to promote creativity, self-expression, 
                            and a healthy, active lifestyle among skateboarders. <br /><br />
                            <b>Join the Go Skate Movement:</b><br />
                            We invite you to be a part of our vibrant skateboarding family. Explore our website, find the perfect gear that matches your style, and embark 
                            on thrilling skateboarding adventures. Whether you're a seasoned rider or a curious beginner, we're here to support you every step of the way. 
                            Thank you for choosing Go Skate as your go-to skate shop. Let's ride together and make the skateboarding world even more awesome! 
                            <br /><br />
                            <b>Keep Shredding, Keep Gliding!</b><br />
                            Go Skate Team. <br />
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

