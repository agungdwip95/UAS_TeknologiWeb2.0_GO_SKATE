//import React
import React from "react";

//import layout
import Layout from "../../Layouts/Default";

//import Link
import { Link } from "@inertiajs/inertia-react";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

// import NumberFormat from 'react-number-format';s
import { NumericFormat } from 'react-number-format';

export default function SkateboardIndex({ skateboards, session }) {

    //method deletePost
    const deleteSkateboard = async (id) => {
        Inertia.delete(`/skateboards/${id}`);
    }
    
    return (
        <Layout>
            <div style={{ marginTop: '100px' }}>

                <div className="text-center mb-4">
                    <img src="/img/products.png" height={70} className="col-5 center-block" alt="..."/>
                </div>

                <Link href="/skateboards/create" className="btn btn-success btn-md mb-3">ADD SKATEBOARD</Link>

                {session.success && (
                    <div className="alert alert-success border-0 shadow-sm rounded-3">
                        {session.success}
                    </div>
                )}

                <div className="card border-0 rounded shadow-sm">
                    <div className="card-body">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">TYPE OF SKATEBOARDS</th>
                                    <th scope="col">BRAND</th>
                                    <th scope="col">PRICE</th>
                                    <th scope="col">INFORMATION</th>
                                    <th scope="col">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                { skateboards.map((skateboard, index) => (
                                    <tr key={ index }>
                                        <td>{ skateboard.jenis_skateboard }</td>
                                        <td>{ skateboard.merk }</td>
                                        {/* <td>{ skateboard.harga }</td> */}
                                        <td><NumericFormat
                                            value={skateboard.harga}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'Rp '}
                                        /></td>
                                        <td>{ skateboard.keterangan }</td>
                                        <td className="text-center">
                                            <Link href={`/skateboards/${skateboard.id}/edit`} className="btn btn-sm btn-primary me-2">EDIT</Link>
                                            <button onClick={() => deleteSkateboard(skateboard.id)} className="btn btn-sm btn-danger">DELETE</button>
                                        </td>
                                    </tr>
                                )) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

