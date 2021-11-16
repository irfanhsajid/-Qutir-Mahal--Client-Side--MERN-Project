import React from 'react';
import { Button } from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Home from '../../Home/Home/Home';

import useAuth from '../../Login-Register/Hooks/useAuth';
import './Dashboard.css';
import DashBoardHome from '../DashboardHome/DashBoardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import AddProduct from '../AddProduct/AddProduct';
import AdminRoute from '../../Login-Register/AdminRoute/AdminRoute';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth();
    if (!user?.email) {
        return <Home></Home>
    }
    return (

        <div>
            <div className="py-3 bg-dark text-light dash-bar">
                <h2 className="ms-4">DASHBOARD</h2>
            </div>

            <div className="row" >
                <div className="col-12 col-md-2 dash-left">
                    <ul className="my-5">
                        <li> <i className="fas fa-home me-1"></i> <Link to='/home'>Home</Link> </li>
                        <li> <Link to={url}></Link> </li>
                        <li><i className="fas fa-list me-1"></i> <Link to={`${url}/orders`}>My Orders</Link> </li>

                        {
                            !admin && <>
                                <li> <i className="fas fa-money-check-alt me-1"></i> <Link to={`${url}/payment`}>Payment</Link> </li>
                                <li> <i className="fas fa-star me-1"></i> <Link to={`${url}/review`}>Reveiw Item</Link> </li>
                            </>
                        }
                        {
                            admin && <>
                                <li> <i className="fas fa-user me-1"></i> <Link to={`${url}/makeAdmin`}>Make Admin</Link> </li>
                                <li> <i className="fas fa-add me-1"></i> <Link to={`${url}/addProduct`}>Add a Product</Link> </li>

                            </>
                        }

                        {
                            user?.email && <li> <Button onClick={logOut} className=" px-3 py-0 btn btn-outline-dark" variant="light">Log Out </Button> </li>
                        }

                    </ul>
                </div>
                <div className="col-12 col-md-10 ">
                    <div className="dashboard-text mt-5">
                        <Switch>
                            <Route exact path={path}>
                                <DashBoardHome></DashBoardHome>
                            </Route>
                            <Route path={`${path}/orders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>

                            <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>


                            <AdminRoute path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>


                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;