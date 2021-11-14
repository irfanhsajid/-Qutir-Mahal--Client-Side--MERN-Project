import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../Shared/NavBar/NavBar';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://hidden-citadel-95408.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <>
            <NavBar />
            <div className="container my-5">

                <div className="container my-5 text-center">
                    <div className=" my-4">
                        <h2 className="title-bold-text">Trending Potteries And Handmade  Products</h2>
                    </div>
                    <p className="text-muted">All the potteries are amazing.! We Provide the best quality of vases. Definitely, <br /> You will be pleased with our products. Just Drop a call for any products. <br /> We will provide this to your doorstep within an hour.<br />
                    </p>
                    <p className="border-bottom d-flex mx-auto border-2 my-3 w-75"></p>
                </div>
                <div className="row g-4 justify-content-center">
                    {

                        products.map(product =>
                            <div key={product._id} className="col-12 col-md-4 text-center ">

                                <div className="h-100 card-container shadow-lg rounded-3 ">

                                    <div className="img-container">
                                        <img src={product.img} alt="products img" style={{}} className="card-img img-fluid" />
                                    </div>

                                    <div className="card-body">
                                        <h3 className="card-title fw-bold text-dark">{product.name}</h3>
                                        <div className="card-text">
                                            <b className="text-dark">Price : {product.price}.00 /-</b>  &nbsp; &nbsp;
                                        </div>
                                        <Link to={`productDetails/${product._id}`}>
                                            <button className="banner-btn border-1 rounded-1 mt-2">+ Add To Cart</button>
                                        </Link>

                                    </div>
                                </div>

                            </div>


                        )
                    }
                </div>
            </div>
        </>
    );
};

export default AllProducts;