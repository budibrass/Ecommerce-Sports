import React, { useEffect, useState } from 'react';
import {Header, Sidebar} from "../../components/admin";
// import { ScriptNavbar } from '../../helper/scriptNavbar';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../redux/action';
import '../../style/admin/main.css';

const Order = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const orders = useSelector(state => state.orders);

    const [search, setSearch] = useState("")

    useEffect(()=> {
        if(!localStorage.token) navigate("/admin/login");
        // ScriptNavbar();
        dispatch(fetchOrders(localStorage.token, "invoice", search))
    }, [dispatch, navigate, search]);

  return (
    <>
    <Header />
    <Sidebar />
    <main className="orders">
        <div className="orders-box">
            <div className="head-bar-orders">
                <p className="head-bar-title">ORDERS</p>
                <div className="search-bar">
                    <input value={search} onChange={(e)=> setSearch(e.target.value)} className="search-orders" type="search" name="search" placeholder="Search Order List... ." id="" />
                    <button className="search-button">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
            <div className="body-list-orders">
                <table className="list-orders">
                    <thead>
                        <tr>
                            <td>NO.</td>
                            <td>INVOICE</td>
                            <td>CUSTOMER</td>
                            <td>STATUS</td>
                            <td>TOTAL</td>
                            <td>ACTION</td>
                        </tr>
                    </thead>
                    <tbody>
                        {orders ? orders.map((e, idx) => {
                            return (
                                <tr key={e.id}>
                                    <td>{idx + 1}</td>
                                    <td>{e.nomor_invoice}</td>
                                    <td>{e.nama_pemesan}</td>
                                    <td className="status">
                                        <i className="fa-solid fa-circle" id="success"></i>
                                        <p className="status-orders" id="">{e.status}</p>
                                    </td>
                                    <td>Rp. {e.total_pembayaran}</td>
                                    <td className='action'>
                                        <select name="status" id="" className="status-check">
                                            <option value="confirmation">Menunggu Konfirmasi</option>
                                            <option value="packaging">Pesanan Diproses</option>
                                            <option value="delivery">Pesanan Dikirim</option>
                                            <option value="arrive">Sampai Tujuan</option>
                                        </select>
                                        <button onClick={() => navigate(`/admin/detail-order/${e.id}`)} className="detail"><i className="fa-solid fa-list-ul"></i></button>
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

export default Order