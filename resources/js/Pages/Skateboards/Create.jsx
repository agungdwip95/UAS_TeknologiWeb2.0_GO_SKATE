//import hook useState from react
import React, { useState } from "react";

//import layout
import Layout from "../../Layouts/Default";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

export default function CreateSkateboard({ errors }) {

    //define state
    const [jenis_skateboard, setJenisSkateboard] = useState('');
    const [merk, setMerk] = useState('');
    const [harga, setHarga] = useState('');
    const [keterangan, setKeterangan] = useState('');

    // Daftar pilihan untuk ComboBox
    const options = [
        'Longboard',
        'Cruiser',
        'Old School',
    ];

    $(document).ready(function () {
        $(".harga").simpleMoneyFormat();

        $(document).on("keypress", ".angkaSemua", function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                return false;
            }
        });
    });

    //function "storePost"
    const storeSkateboard = async (e) => {
        e.preventDefault();

        Inertia.post('/skateboards/store', {
            jenis_skateboard: jenis_skateboard,
            merk: merk,
            harga: harga,
            keterangan: keterangan
        });
    }

    return (
        <Layout>
            <div className="row" style={{  marginTop: '100px' }}>
                <div className="col-12">
                    <div className="card border-0 rounded shadow-sm border-top-success">
                        <div className="card-header">
                            <span className="font-weight-bold">ADD SKATEBOARD</span>
                        </div>
                        <div className="card-body">
                            <form onSubmit={storeSkateboard}>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">TYPE OF SKATEBOARDS</label>
                                    <select className="form-control" name="jenis_skateboard" value={jenis_skateboard} onChange={(e) => setJenisSkateboard(e.target.value)} >
                                        <option value="">-- Select The Type Of Skateboard --</option>
                                        {options.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                        ))}
                                    </select>
                                    {/* <input type="text" className="form-control" value={jenis_skateboard}
                                        onChange={(e) => setJenisSkateboard(e.target.value)} placeholder="Enter The Type Of Skateboard" /> */}
                                </div>
                                {errors.jenis_skateboard && (
                                    <div className="alert alert-danger">
                                        {errors.jenis_skateboard}
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label fw-bold">BRAND</label>
                                    <textarea className="form-control" value={merk}
                                        onChange={(e) => setMerk(e.target.value)} placeholder="Enter The Skateboard Brand" rows={4}>
                                        
                                    </textarea>
                                </div>
                                {errors.merk && (
                                    <div className="alert alert-danger">
                                        {errors.merk}
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label fw-bold">PRICE</label>
                                    <div className="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">RP.</span>
                                    <input className="form-control angkaSemua harga" value={harga} id="harga"
                                        onChange={(e) => setHarga(e.target.value)} placeholder="Enter The Price Of The Skateboard" rows={4}>
                                        
                                    </input>
                                    </div>
                                </div>
                                {errors.harga && (
                                    <div className="alert alert-danger">
                                        {errors.harga}
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label fw-bold">INFORMATION</label>
                                    <textarea className="form-control" value={keterangan}
                                        onChange={(e) => setKeterangan(e.target.value)} placeholder="Enter A Skateboard Description" rows={4}>
                                        
                                    </textarea>
                                </div>
                                {errors.keterangan && (
                                    <div className="alert alert-danger">
                                        {errors.keterangan}
                                    </div>
                                )}

                                <div>
                                    <a type="button" href="/skateboards/produk" className="btn btn-md btn-danger me-2"><i className="fa fa-redo"></i>
                                        CANCEL</a>
                                    <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i>
                                        SAVE</button>
                                    {/* <button type="reset" className="btn btn-md btn-warning me"><i className="fa fa-redo"></i>
                                        RESET</button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


