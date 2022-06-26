import React from "react";
import { Routes, Route , BrowserRouter as Router } from "react-router-dom";
import {
  Dashboard, 
  Login,
  Product,
  Category,
  AddProduct,
  EditProduct,
  Order,
  DetailOrder,
  CustomerList,
  Banner
} from "./layouts/admin";
import { Provider } from "react-redux";
import store from './redux/store';

const App = () => {
  return(
    <>
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/admin/login" element={<Login />} />

            {/* path Admin */}
            <Route path="/admin/product" element={<Product />} />
            <Route path="/admin/add-product" element={<AddProduct />} />
            <Route path="/admin/edit-product/:id" element={<EditProduct />} />
            <Route path="/admin/category" element={<Category />} />
            <Route path="/admin/order" element={<Order />} />
            <Route path="/admin/detail-order/:id" element={<DetailOrder />} />
            <Route path="/admin/customer-list" element={<CustomerList />} />
            <Route path="/admin/banner" element={<Banner />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
      </Provider>
    </>
  )
};

export default App;