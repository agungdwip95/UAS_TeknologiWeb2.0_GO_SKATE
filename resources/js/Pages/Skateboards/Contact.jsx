//import hook useState from react
import React, { useState } from "react";

//import layout
import Layout from "../../Layouts/Default";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

export default function ContactSkateboard({ errors, skateboard }) {

    return (
        <Layout>
            <div style={{  marginTop: '100px' }}>
                <div className="text-center mb-4">
                    <img src="/img/contact_us.png" height={60} className="col-5 center-block" alt="..."/>
                </div>
                <div className="card border-0 rounded shadow-sm">
                    <div className="card-body">
                        <div className="row text-center mt-3 mb-3" style={{  marginTop: '100px' }}>
                            <div className="col-4">
                                <h2><b>PHONE</b></h2>
                                <img src="/img/phone.png" height={100} className="" alt="..."/>
                                <h4 className="mt-3">(022) 123-4567</h4>
                            </div>
                            <div className="col-4">
                                <h2><b>EMAIL</b></h2>
                                <img src="/img/email.png" height={100} className="" alt="..."/>
                                <h4 className="mt-3">goskate@gmail.com</h4>
                            </div>
                            <div className="col-4">
                                <h2><b>ADDRESS</b></h2>
                                <img src="/img/address.png" height={100} className="" alt="..."/>
                                <h4 className="mt-3">Jl. Cemara I No.15b, RT.02/RW.04 Kec.Ngamprah Kab.Bandung Barat</h4>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

