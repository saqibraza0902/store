import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import Subscribe from './Subscribe';
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="caption">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="featured-page mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <div className="section-heading">
                                <h1 className="text-black fw-bolder mt-5 mb-5">Featured Items</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container mb-5" >
                    <div className="row posts">
                        {/* {currentPosts.map((p, id) =>
                            <div key={id} className="col-md-4 d-flex justify-content-center">
                                <span>
                                    <div className="featured-item">
                                        <Link to={`/products/${p.id}`}>
                                            <img style={{ height: "200px" }} className="img-fluid w-100" src={p.image} alt="" />
                                            <h4 className="fs-5 fw-bolder text-black">{p.Name}</h4>
                                            <h6 className="fs-5 fw-bold ">${p.price}</h6>
                                        </Link>
                                        <div className="d-grid gap-2">
                                        </div>
                                    </div>
                                </span>
                            </div>
                        )} */}
                    </div>
                </div>
            </div>
            <div className="mb-5">
                {/* <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} /> */}
            </div>

            <Subscribe />
            <Footer />

        </div>
    )
}

export default Home