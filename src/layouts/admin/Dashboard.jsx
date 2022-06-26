import React, { useEffect, useLayoutEffect } from 'react';
import {Header, Sidebar} from "../../components/admin";
// import { ScriptNavbar } from '../../helper/scriptNavbar';
import { useNavigate } from 'react-router-dom';
// import '../../style/admin/main.css';

const PerformancePage = () => {
    const navigate = useNavigate()
    useEffect(()=> {
        if(!localStorage.token) navigate("/admin/login")
        // ScriptNavbar();
    }, [navigate]);

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
        <main className="peformance">
            <div className="income-box">
                <div className="income-box-preview">
                    <p className="income-title">MONTHLY REVENUE - BULAN</p>
                    <p className="income-detail">Rp <span id=''>0</span></p>
                </div>
                <div className="income-box-preview">
                    <p className="income-title">MONTHLY REVENUE - BULAN</p>
                    <p className="income-detail">Rp <span id=''>0</span></p>
                </div>
                <div className="income-box-preview">
                    <p className="income-title">MONTHLY REVENUE - BULAN</p>
                    <p className="income-detail">Rp <span id=''>0</span></p>
                </div>
            </div>
            <div className="status-box">
                <div className="status-box-preview">
                    <div className="status-color-pending"></div>
                    <div className="status-detail">
                        <p className="status-detail-title">MENUNGGU KONFIRMASI</p>
                        <p className="status-detail-info"><span id=''>0</span></p>
                    </div>
                    <i className="fa-regular fa-clock"></i>
                </div>
                <div className="status-box-preview">
                    <div className="status-color-success"></div>
                    <div className="status-detail">
                        <p className="status-detail-title">PESANAN DIPROSES</p>
                        <p className="status-detail-info"><span id=''>0</span></p>
                    </div>
                    <i className="fa-solid fa-arrows-rotate"></i>
                </div>
                <div className="status-box-preview">
                    <div className="status-color-expired"></div>
                    <div className="status-detail">
                        <p className="status-detail-title">PESANAN DIKIRIM</p>
                        <p className="status-detail-info"><span id=''>0</span></p>
                    </div>
                    <i className="fa-solid fa-truck-fast"></i>
                </div>
                <div className="status-box-preview">
                    <div className="status-color-failed"></div>
                    <div className="status-detail">
                        <p className="status-detail-title">SAMPAI TUJUAN</p>
                        <p className="status-detail-info"><span id=''>0</span></p>
                    </div>
                    <i className="fa-solid fa-map-location-dot"></i>
                </div>
            </div>
            <div className="recent-order-box">
                <div className="recent-order-title">
                    <p>RECENT ORDER</p>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <table className="recent-order-table">
                    <thead>
                        <tr>
                            <td>INVOICE Number</td>
                            <td>Customer Name</td>
                            <td>Status</td>
                            <td className='cr'>Created at</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="success"></i> Pesanan Diproses</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="pending"></i> Menunggu Kofirmasi</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="failed"></i> Sampai Tujuan</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="expired"></i> Sedang Dikirim</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="success"></i> Pesanan Diproses</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="pending"></i> Menunggu Kofirmasi</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="failed"></i> Sampai Tujuan</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="expired"></i> Sedang Dikirim</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="success"></i> Pesanan Diproses</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="pending"></i> Menunggu Kofirmasi</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="failed"></i> Sampai Tujuan</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="expired"></i> Sedang Dikirim</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="success"></i> Pesanan Diproses</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="pending"></i> Menunggu Kofirmasi</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="failed"></i> Sampai Tujuan</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="expired"></i> Sedang Dikirim</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    </>
  )
}

export default PerformancePage