import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Header, Sidebar} from "../../components/admin";
// import { ScriptNavbar } from '../../helper/scriptNavbar';
import { getOneOrder } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import '../../style/admin/main.css';

const DetailOrder = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    
    const order = useSelector(state => state.order);

    useEffect(()=> {
        // ScriptNavbar();
        dispatch(getOneOrder(id, localStorage.token));
    }, [dispatch, id]);

    console.log(order, `<<<< order`);

  return (
    <>
    <Header />
    <Sidebar />
    <main className="orders-detail">
        <div className="orders-detail-box">
            <div className="head-bar-orders-detail">
                <p className="head-bar-title">ORDERS DETAIL</p>
            </div>
            <div className="body-orders-detail">
                <ul>
                    <li>
                        <p className="detail-name">No. Invoice</p>
                        <p className="detail-description" id="">{order.nomor_invoice}</p>
                    </li>
                    <li>
                        <p className="detail-name">Customer</p>
                        <p className="detail-description" id="">{order.nama_pemesan}</p>
                    </li>
                    <li>
                        <p className="detail-name">Status</p>
                        <span className="detail-description" id="">
                            <i className="fa-solid fa-circle" id="success"></i>
                            <p className="status-detail">{order.status}</p>
                        </span>
                    </li>
                    <li>
                        <p className="detail-name">Orders</p>
                        <ul className="detail-description" id="">
                            <li>
                                <p id="">Nama Barang 1 (x1)</p>
                                <p id="">Rp. 1.999.000</p>
                            </li>
                            <li>
                                <p id="">Nama Barang 1 (x1)</p>
                                <p id="">Rp. 1.999.000</p>
                            </li>
                            <li>
                                <p id="">Nama Barang 1 (x1)</p>
                                <p id="">Rp. 1.999.000</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p className="detail-name">Total</p>
                        <p className="detail-description" id="">Rp. {order.total_pembayaran}</p>
                    </li>
                    <li>
                        <p className="detail-name">Address</p>
                        <p className="detail-description" id="">{order.alamat}</p>
                    </li>
                    <li>
                        <p className="detail-name">Courier</p>
                        <p className="detail-description" id="">JNE Express</p>
                    </li>
                </ul>
            </div>
        </div>
    </main>
    </>
  )
}

export default DetailOrder