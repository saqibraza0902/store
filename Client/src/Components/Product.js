import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import Subscribe from './Subscribe';
import api from '../axios/axiosInstance';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/Actions/Actions'


const Product = () => {
    const [optionValue, setOptionValue] = useState()
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const products = useSelector((state) => state.product.products)
    console.log(products[0]?.name)
    const toComponentB = (id, image, Name, price, details) => {
        navigate(`/products/${id}`, { state: { id, Name, price, image, details } });
    };
    useEffect(() => {
        const getData = async () => {
            const { data } = await api.get('/product/get')
            dispatch(getProducts(data))
        }
        getData()
    }, [dispatch])
    return (
        <div>
            <Navbar />
            <div className="featured-page mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 mt-5">
                            <div className="section-heading">
                                <h1 className="text-black">Featured Items</h1>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-12 mt-5 mb-3">
                            <div id="filters" className="button-group d-md-flex justify-content-end">
                                <div className="form-md-select w-md-100">
                                    <select className="form-select form-select-md" aria-label=".form-select-sm example"
                                        onChange={(e) => { const selectOption = e.target.value; setOptionValue(selectOption); }}>
                                        <option>Sort By.....</option>
                                        <option value="asend">Price, Low to High</option>
                                        <option value="desend">Price, High to Low</option>
                                        <option value="newDate">Date, Newer to Older</option>
                                    </select>
                                </div>
                                <div className="search-input">
                                    <input type="text" className="form-control" placeholder="Search Products..." onChange={(e) => setSearch(e.target.value)} />
                                </div>
                                <div className="d-flex justify-content-center mt-2">
                                    <Link to="/products">
                                        <span className="text-black fw-bolder fs-6 p-2"> All Products</span>
                                    </Link>
                                    <Link to="/products/necklace">
                                        <span className="text-black fw-bolder p-2 fs-6">Necklace</span>
                                    </Link>
                                    <Link to="/products/rings">
                                        <span className="text-black fw-bolder fs-6 p-2">Rings</span>
                                    </Link>
                                    <Link to="/products/earring">
                                        <span className="text-black fw-bolder fs-6">Earrings</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mb-5">
                <div className="row posts">
                    {products?.filter((val) => {
                        if (search === '') {
                            return val
                        } else if (
                            val.name.toLowerCase().includes(search.toLowerCase()) ||
                            val.price.toString().includes(search.toString())
                        ) {
                            return val;
                        }
                        return null
                    }).map((p, id) => (
                        <div key={id} className="col-md-4 d-flex justify-content-center">
                            <span>
                                <div className="featured-item m-1">
                                    <span type='button' onClick={() => toComponentB(id, p.image, p.name, p.price, p.details)}>
                                        <img className="w-100" src={p.image} alt="" />
                                        <h4 className="fs-5 fw-bolder text-black">{p.name}</h4>
                                        <h6 className="fs-5 fw-bold ">${p.price}</h6>
                                        <p>{p.date}</p>
                                    </span>
                                    <div className="d-grid gap-2">
                                        {/* <button onClick={res[p.id].id ? () => deleleItem(p.id) : () => Add(p)}
                          className={res[p.id].id ? "btn btn-danger" : "btn btn-primary"}>
                          {res[p.id].id ? "Remove from cart" : "Add to cart"}
                        </button> */}
                                        <button className='btn btn-primary shadow-none'>Add to Cart</button>
                                    </div>
                                </div>
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <Subscribe />
            <Footer />
        </div>
    )
}

export default Product