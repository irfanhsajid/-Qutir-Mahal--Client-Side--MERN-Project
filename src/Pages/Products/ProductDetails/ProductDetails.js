import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import NavBar from '../../Shared/NavBar/NavBar';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    useEffect(() => {
        fetch('https://hidden-citadel-95408.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    const detailsInfo = product.filter(data => data._id === productId);

    const onSubmit = data => {
        console.log(data)
        reset();
    }
    return (
        <div className="container">
            <NavBar />
            <div className="details-container my-5 row g-4 justify-content-center">
                <div className="details-left col-12 col-md-5">
                    <div className="details-img w-100">
                        <img className="img-fluid" style={{ height: '70vh', objectFit: 'cover' }} src={detailsInfo[0]?.img} alt="" />
                    </div>
                </div>
                <div className="details-right  col-12 col-md-7">
                    <h1 className="title fw-bold text-center">{detailsInfo[0]?.name}</h1>
                    <p className="border-bottom border-2 d-flex mx-auto w-50"></p>
                    <p className="">{detailsInfo[0]?.details}</p>
                    <div className="text-center">
                        <p><b>Price : </b><span className="text-danger">{detailsInfo[0]?.price}.00 /-</span></p>
                        <p><small>Only {detailsInfo[0]?.stock}+ in stock</small></p>
                        <p><b>Brand : </b> {detailsInfo[0]?.brand} </p>
                    </div>
                    <p className="border-bottom border-2 d-flex mx-auto w-75"></p>
                    <p>
                        <h5 className="fw-bold text-center">SURE TO BUY? <span className="text-danger">FILL</span> THE FORM AND <span className="text-danger">PRESS</span> THE BUTTON</h5>
                    </p>
                    <div className="order-form" >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                placeholder="Your Name"
                                className="px-3 py-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("email")}
                                required type='email'
                                placeholder="Your Email"
                                className="px-3 py-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("phone")}
                                type="number"
                                placeholder="Phone Number"
                                className="px-3 py-2 m-2 w-100"
                            /> <br />
                            <input
                                {...register("location")}
                                placeholder="Receiving Location"
                                className="px-3 py-2 m-2 w-100"
                            />
                            <br />
                            <select {...register("product", { required: true })} className="px-3 py-2 m-2 w-100">
                                <option value="bKash">bKash</option>
                                <option value="Nagad">Nagad</option>
                                <option value="VisaCard">VisaCard</option>
                                <option value="uPay">uPay</option>
                            </select>
                            <br />
                            {errors.exampleRequibKash && <span>This field is requibKash</span>}
                            <input type="submit" value="Place Order" className=" ms-2 w-100 btn btn-dark text-center px-3 py-2 my-3 confirm-btn" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;