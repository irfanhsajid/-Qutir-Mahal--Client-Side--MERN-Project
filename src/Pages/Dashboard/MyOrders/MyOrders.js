import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../Login-Register/Hooks/useAuth';
import swal from 'sweetalert';
const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);
    useEffect(() => {
        fetch(`https://hidden-citadel-95408.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDeleted, user.email]);
    //delete method 
    const handleDelete = (id) => {
        console.log(id);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover, You've to Order It Again Manually!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your Order has been deleted!", {
                        icon: "success",
                    });
                    fetch(`https://hidden-citadel-95408.herokuapp.com/deleteOrder/${id}`, {
                        method: "DELETE",
                        headers: { "content-type": "application/json" }
                    })
                        .then(res => res.json())
                        .then(result => {
                            // console.log(result.deletedCount)
                            if (result.deletedCount) {
                                setIsDeleted(true)
                            }
                            else {
                                setIsDeleted(false)
                            }
                        });
                } else {
                    swal("Your Order is unchanged!");
                }
            });
    };
    return (
        <div className='container my-4'>
            <h3 data-aos="fade-up" data-aos-duration="1500" className="text-center text-danger mb-4 fw-bold"> Total Orders : {orders.length}</h3>
            <Table striped bordered hover responsive>
                <thead>
                    <tr className="text-primary">
                        <th>#</th>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Payment By</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td className=" fw-bold">{pd?.productName}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.phone}</td>
                            <td>{pd?.payment}</td>
                            <td>{pd?.location}</td>
                            <td align="center"> <button onClick={() => handleDelete(pd?._id)} className="btn btn-danger px-2"><i className="far fa-trash-alt"></i></button></td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default MyOrders;