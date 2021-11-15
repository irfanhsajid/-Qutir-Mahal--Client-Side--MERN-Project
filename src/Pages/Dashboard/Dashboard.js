import React from 'react';
import { Button } from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Home from '../Home/Home/Home';

import useAuth from '../Login-Register/Hooks/useAuth';
import './Dashboard.css';
import DashBoardHome from './DashboardHome/DashBoardHome';
import MyOrders from './MyOrders/MyOrders';
import Payment from './Payment/Payment';
import Review from './Review/Review';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut } = useAuth();
    if (!user?.email) {
        return <Home></Home>
    }
    return (

        <div>
            <div className="py-3 bg-dark text-light">
                <h2 className="ms-3">DASHBOARD</h2>
            </div>

            <div className="row" >
                <div className="col-12 col-md-2 dash-left">
                    <ul className="my-5">
                        <li> <Link to='/home'>Home</Link> </li>
                        <li> <Link to={url}></Link> </li>
                        <li> <Link to={`${url}/orders`}>My Orders</Link> </li>
                        <li> <Link to={`${url}/review`}>Reveiw</Link> </li>
                        <li> <Link to={`${url}/payment`}>Payment</Link> </li>
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
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;