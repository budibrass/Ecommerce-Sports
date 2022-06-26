import React, { useEffect, useState } from 'react';
import {Header, Sidebar} from "../../components/admin";
// import { ScriptNavbar } from '../../helper/scriptNavbar';
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/action";
import { useNavigate } from "react-router-dom";
import '../../style/admin/main.css';

const AddProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [submitForm, setSubmitForm] = useState({
        nama_produk: "",
        kategori_produk: "",
        stok: 0,
        bahan: "",
        harga_produk: 0,
        ukuran: "",
        deskripsi: "",
        gambar_produk: "",
    })

    const uploadImage =  (e) => {
        let uploaded = e.target.files[0];
        setImage(URL.createObjectURL(uploaded));

        // save image to backend
        let formData = new FormData();
        formData.append("photo", uploaded);
    
        fetch("http://localhost:3000/upload", {
            method: "POST",
            body: formData,
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, `<<<< data`);
            setSubmitForm({
                ...submitForm,
                gambar_produk: data.image
            })
        });
    }

    const handleAddProduct = (e) => {
        e.preventDefault();
        console.log(submitForm, `<<< submitForm`);
        dispatch(addProduct(submitForm, localStorage.token));
        navigate("/admin/product")
    }

    useEffect(()=> {
        // ScriptNavbar()
    }, []);
  return (
    <>
    <Header />
    <Sidebar />
    <main className="product-create">
        <div className="product-create-box">
            <div className="head-bar-product-create">
                <p className="head-bar-title"><span className="create">CREATE</span><span className="edit" hidden>EDIT</span> PRODUCT</p>
            </div>
            <div className="body-product-create">
                <form className="form-product-create" onSubmit={handleAddProduct}>
                    <p className="title">IMAGE</p>
                    <div className="image-view-upload">
                        <div className="image-view">
                            <p><input type="file"  accept="image/*" name="image" id="file"  onChange={uploadImage} style={{ display: "none" }} /></p>
                            <p>
                                <img src={image} id="output" width="150px" height="150px" className="img-thumbnail" alt="" />
                            </p>
                        </div>
                        <div className="image-upload">
                            <button disabled="action"><label htmlFor="file" style={{ cursor: "pointer" }}><i className="fa-solid fa-file-arrow-up"></i>Upload Image</label></button>
                        </div>
                    </div>
                    <p className="title">PRODUCT NAME</p>
                    <input className="product-name" type="text" name="product-name" id="" onChange={(e)=> setSubmitForm({ ...submitForm, nama_produk: e.target.value})} placeholder="Ex. Adidas Mythical Shoes - Black" />
                    <div className="detail-product">
                        <div className="detail-product-left">
                            <p className="title">CATEGORY</p>
                            <input className="product-category" type="text" onChange={(e)=> setSubmitForm({ ...submitForm, kategori_produk: e.target.value})} name="product-category" id="" placeholder="Ex. Football" />
                            <p className="title">PRICE</p>
                            <input className="product-price" type="number" onChange={(e)=> setSubmitForm({ ...submitForm, harga_produk: Number(e.target.value)})} name="product-price" id="" placeholder="Ex. 5000000" />
                        </div>
                        <div className="detail-product-left">
                            <p className="title">BAHAN</p>
                            <input className="product-category" type="text" onChange={(e)=> setSubmitForm({ ...submitForm, bahan: e.target.value})} name="product-category" id="" placeholder="Ex. Katun" />
                            <p className="title">UKURAN</p>
                            <input className="product-price" type="text" onChange={(e)=> setSubmitForm({ ...submitForm, ukuran: e.target.value})} name="product-price" id="" placeholder="Ex. S, L, M , XL, etc" />
                        </div>
                        <div className="detail-product-right">
                            <p className="title">STOCK</p>
                            <input className="product-stock" type="number" onChange={(e)=> setSubmitForm({ ...submitForm, stok: +e.target.value})} name="product-stock" id="" placeholder="Ex. 50" />
                            {/* <p className="title">DISCOUNT (%)</p>
                            <input className="product-discount" type="number" name="product-discount" id="" placeholder="Ex. 20" /> */}
                        </div>
                    </div>
                    <p className="title">DESCRIPTION</p>
                    <textarea className="product-description" onChange={(e)=> setSubmitForm({ ...submitForm, deskripsi: e.target.value})} name="product-description" id="" cols="30" rows="10"></textarea>
                    <button className="form-save" type="submit" id="">
                        <i className="fa-solid fa-floppy-disk"></i>
                        <p>save</p>
                    </button>
                    <button className="form-reset" type="reset" id="">
                        <i className="fa-solid fa-arrow-rotate-left"></i>
                        <p>reset</p>
                    </button>
                </form>
            </div>
        </div>
    </main>
    </>
  )
}

export default AddProduct