import React, {useEffect, useState } from 'react';
import {Header, Sidebar} from "../../components/admin";
// import { ScriptNavbar } from '../../helper/scriptNavbar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct } from '../../redux/action';
import { useNavigate } from 'react-router-dom';
import '../../style/admin/main.css';

const Product = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    const [search, setSearch] = useState("")
    
    const handleDeleteProduct = (e) => {
        dispatch(deleteProduct(e.id, localStorage.token))
    }

    const toEditpage = (e) => {
        navigate(`/admin/edit-product/${e.id}`)
    }

    useEffect(()=> {
        if(!localStorage.token) navigate("/admin/login")
        // ScriptNavbar()
        dispatch(fetchProducts(localStorage.token, "name", search))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    // useLayoutEffect(() => {
    //     const script = document.createElement('script');
    
    //     script.src = "/script/sidebar.js"
    //     script.async = true
        
    //     document.body.appendChild(script)
        
    //     return () => {
    //         document.body.removeChild(script)
    //     }
    // })

  return (
    <>
    <Header />
    <Sidebar />
    <main className="product">
        <div className="product-box">
            <div className="head-bar-product">
                <p className="head-bar-title">PRODUCT</p>
                <div className="search-bar">
                    <input onChange={(e)=> setSearch(e.target.value)} value={search} className="search-product" type="search" name="search" placeholder="Search Product... ." id="" />
                    <button className="search-button">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <button className="create-product">
                    <Link to="/admin/add-product">
                        <i className="fa-solid fa-plus"></i>
                        <p>CREATE</p>
                    </Link>
                </button>
            </div>
            <div className="body-list-product">
                <table className="list-product">
                    <thead>
                        <tr>
                            <td>NO.</td>
                            <td>IMAGE</td>
                            <td>NAME</td>
                            <td>CATEGORY</td>
                            <td>ACTION</td>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.length >= 1 ? products.map((e, idx) => {
                            return (
                                <tr key={e.id}>
                                    <td>{idx + 1}</td>
                                    <td><img src={e.gambar_produk} alt="Product" /></td>
                                    <td>{e.nama_produk}</td>
                                    <td>{e.kategori_produk}</td>
                                    <td>
                                        <button onClick={()=> toEditpage(e)} className="edit"><i className="fa-solid fa-pen"></i></button>
                                        <button onClick={()=> handleDeleteProduct(e)} className="delete"><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        }) : null}
                    </tbody>
                </table>
            </div>
        </div>
    </main>
    </>
  )
}

export default Product