import React, { useEffect, useState } from 'react';
import {Header, Sidebar} from "../../components/admin";
// import { ScriptNavbar } from '../../helper/scriptNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, addCategory, deleteCategory } from '../../redux/action';
import { useNavigate } from 'react-router-dom';
import '../../style/admin/main.css';

const Category = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const categories = useSelector(state => state.categories);

    const [image, setImage] = useState(null);
    const [submitForm, setSubmitForm] = useState({
        nama_kategori: "",
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

    const handleAddCategory = async (e) => {
        e.preventDefault();
        dispatch(addCategory(submitForm, localStorage.token));
    }

    const handleDeleteCategory = (e) => {
        dispatch(deleteCategory(e.id, localStorage.token))
    }

    useEffect(()=> {
        if(!localStorage.token) navigate("/admin/login")
        // ScriptNavbar()
        dispatch(fetchCategories(localStorage.token))
    }, [dispatch, navigate]);

  return (
    <>
    <Header />
    <Sidebar />
    <main className="category">
        <div className="add-category-box">
            <div className="head-bar-category-create">
                <p className="head-bar-title">ADD CATEGORY</p>
            </div>
            <div className="body-category-create">
                <form onSubmit={handleAddCategory} id="">
                    <div className="image-view-upload">
                        <p><input type="file"  accept="image/*" name="image" id="file"  onChange={uploadImage} style={{ display: "none" }} /></p>
                        <p>
                            <img src={image} id="output" width="140px" height="140px" className="img-thumbnail" alt="" />
                        </p>
                        <button className="category-image-upload" disabled="action"><label htmlFor="file" style={{ cursor: "pointer" }}><i className="fa-solid fa-file-arrow-up"></i>Upload Image</label></button>
                    </div>
                    <div className="category-upload">
                        <div className="category-name">
                            <p>NAME</p>
                            <input className="add-category-name" onChange={(e)=> setSubmitForm({ ...submitForm, nama_kategori: e.target.value})} type="text" name="add-category-name" id="" />
                        </div>
                        <button className="add-category-action" type="submit">
                            <i className="fa-solid fa-plus"></i>
                            <p>ADD</p>
                        </button>
                        <button className="reset-category-action" type="reset">
                            <i className="fa-solid fa-arrow-rotate-left"></i>
                            <p>RESET</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div className="category-list-box">
            <div className="head-bar-category-list">
                <p className="head-bar-title">CATEGORY</p>
            </div>
            <div className="body-category-list">
                <table className="category-list">
                    <thead>
                        <tr>
                            <td>NO.</td>
                            <td>IMAGE</td>
                            <td>NAME</td>
                            <td>ACTION</td>
                        </tr>
                    </thead>
                    <tbody>
                        {categories && categories.length >= 1 ? categories.map((e, idx) => {
                            return (
                                <tr key={e.id}>
                                    <td>{idx + 1}</td>
                                    <td><img src={e.gambar_produk} alt="Category" /></td>
                                    <td>{e.nama_kategori}</td>
                                    <td>
                                        <button onClick={()=> handleDeleteCategory(e)} className="delete"><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        }): null}
                    </tbody>
                </table>
            </div>
        </div>
    </main>
    </>
  )
}

export default Category