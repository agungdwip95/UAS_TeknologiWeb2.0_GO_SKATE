//import hook useState from react
import React, { useState } from "react";

//import layout
import Layout from "../../Layouts/Default";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

export default function HomeSkateboard({ errors, skateboard }) {

    return (
        <Layout>
            <div className="row" style={{  marginTop: '100px' }}>
                <div className="text-center mb-2">
                    <img src="/img/slogan_logo.png" height={60} className="col-5 center-block" alt="..."/>
                </div>
                <img src="/img/slogan.png" height={50} className="mb-2" alt="..."/>
                <div className="col-12">
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="2000">
                            <img src="/img/dashboard1.jpg" height={200} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                            <img src="/img/dashboard2.jpg" height={200} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                            <img src="/img/dashboard3.jpg" height={200} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                </div>
            </div>
            <div className="row mt-4">
                <img src="/img/gambar1.jpg" height={250} className="col-3" alt="..."/>
                <img src="/img/gambar2.jpg" height={250} className="col-3" alt="..."/>
                <img src="/img/gambar3.jpg" height={250} className="col-3" alt="..."/>
                <img src="/img/gambar4.jpg" height={250} className="col-3" alt="..."/>
            </div>
            
        </Layout>
    )
}

