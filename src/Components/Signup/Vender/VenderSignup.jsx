import React from 'react'
import HOC from '../../../Common/HOC'
import { Grid, Card } from "@material-ui/core"
import "../Customer/Customer.css"

const VenderSignup = (props) => {
    return (
        <>
            <section>
                <div className="home_padding mb-4">
                    <div className='sign_up_customer d-flex'>
                        <Grid className="Component_main_grid" style={{ justifyContent: "center" }}>
                            <Grid item md={6}>

                                <Card className="Card_shadow">

                                    <div className="card_color_customer_vender p-3">
                                        <h4 className='text-center mt-2 mb-4' style={{ color: "#fff", fontSize: "30px" }}>WS Vendor Sign-Up</h4>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Business name</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Enter Email"
                                                />
                                            </div></Grid>
                                        </Grid>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Address</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Street"
                                                />
                                            </div>

                                                <div className='pl-2 pr-2'>
                                                    <Grid className='Component_main_grid'>
                                                        <Grid item md={4} xs={12}>
                                                            <div className="pb-3 m-1">
                                                                <input
                                                                    type="text"
                                                                    class="form-control"
                                                                    placeholder="City"
                                                                />
                                                            </div>
                                                        </Grid>
                                                        <Grid item md={4} xs={12}>
                                                            <div className="pb-3 m-1">
                                                                <input
                                                                    type="text"
                                                                    class="form-control"
                                                                    placeholder="State"
                                                                />
                                                            </div>
                                                        </Grid>

                                                        <Grid item md={4} xs={12}>
                                                            <div className="pb-3 m-1 ">
                                                                <input
                                                                    type="text"
                                                                    class="form-control"
                                                                    placeholder="zip"
                                                                />
                                                            </div>
                                                        </Grid>
                                                    </Grid>
                                                </div>
                                            </Grid>
                                        </Grid>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Phone No</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="XXX-XXXX-XXX"
                                                />
                                            </div></Grid>

                                        </Grid>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Email</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Email"
                                                />
                                            </div></Grid>


                                        </Grid>

                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* EIN</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="EIN"
                                                />
                                            </div></Grid>
                                        </Grid>

                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Username</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="username"
                                                />
                                            </div></Grid>
                                        </Grid>

                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Password</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Password"
                                                />
                                            </div></Grid>
                                        </Grid>

                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Authorized Distributers</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <select class="form-control">

                                                    <option>Dist. A</option>
                                                    <option>Dist. B</option>
                                                    <option>Dist. C</option>
                                                    <option>Dist. D</option>
                                                    <option>Dist. E</option>
                                                </select>
                                            </div></Grid>

                                        </Grid>

                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Covered area</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <select class="form-control">
                                                    <option>All US States</option>
                                                    <option>Alabama</option>
                                                    <option>Alaska</option>
                                                    <option>Arizonz</option>
                                                    <option>Arkanas</option>
                                                </select>
                                            </div></Grid>

                                        </Grid>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Min. Order</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="$"
                                                />
                                            </div></Grid>

                                        </Grid>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Bank Name</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Bank Name"
                                                />
                                            </div></Grid>

                                        </Grid>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Routing</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Routing"
                                                />
                                            </div></Grid>

                                        </Grid>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Account</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Account"
                                                />
                                            </div></Grid>

                                        </Grid>






                                        <div className="pricing_btn text-right mb-3 mr-4">
                                            <button type="button" class="btn btn-success" onClick={() => props.history.push("/VenderLogin")}>
                                                Log In
                                            </button>
                                        </div>
                                    </div>

                                </Card>
                            </Grid>


                        </Grid>

                    </div>
                </div>
            </section>
        </>
    )
}

export default HOC(VenderSignup)
