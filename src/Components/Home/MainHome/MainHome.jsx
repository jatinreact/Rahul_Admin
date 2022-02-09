import React from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../../Common/HOC'
import "./HomePage.css"
import youtube from "../../../Images/youtube-logo.jpg"

const MainHome = (props) => {
    return (
        <>
            <section>
                <div className="home_padding mb-4">
                    <div className='container'>
                        <div className='home_table'>
                            <Card className="home_table_card_color p-3">
                                <div className='wdwq'>
                                    <Grid className='Component_main_grid'>

                                        <Grid item md={3} xs={12}>
                                            <div className="col-md-12 pb-3">
                                                <input
                                                    disabled
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Brand"
                                                />
                                            </div></Grid>
                                        <Grid item md={3} xs={12}>
                                            <div className="col-md-12 pb-3"><input
                                                disabled
                                                type="text"
                                                class="form-control"
                                                placeholder="Item name"
                                            /></div></Grid>
                                        <Grid item md={2} xs={12}> <div className="col-md-12 pb-3">
                                            <input
                                                disabled
                                                type="text"
                                                class="form-control"
                                                placeholder="Area"
                                            />
                                        </div></Grid>
                                        <Grid item md={1} xs={6}> <div className="search_area col-md-12" onClick={()=> props.history.push("/searchitem")}>
                                            <i class="fa fa-search"></i>
                                        </div></Grid>
                                        <Grid item md={3} xs={12}> <div className="table_vender_home col-md-12">
                                            <span style={{ fontSize: "17px" }}>WS Vendors & Distributers List</span>
                                        </div></Grid>
                                    </Grid>
                                </div>
                                <div className='p-3'>
                                    <Grid className='Component_main_grid'>

                                        <Grid item md={5} xs={12}>
                                            <div className='new_arivals'>
                                                <span>NEW ARRIVALS</span>
                                            </div>
                                        </Grid>
                                        <Grid item md={5} xs={12}> 
                                         <div className='new_arivalss_home click_arival ' style={{cursor:"pointer"}} onClick={()=> props.history.push("/arivalspage")}>
                                            <span className='border_bottom' >Click here for more</span>
                                        </div>
                                        </Grid>
                                        <Grid item md={2} xs={12}> 
                                        
                                        </Grid>
                                    </Grid>
                                </div>
                                {/* ///data grid */}
                                <section>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Brand</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>WS Vendor</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area <i class="fa fa-arrow-down"></i></span></div></div></Grid>
                                            <Grid item md={3} xs={12}></Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Brand</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>WS Vendor</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area <i class="fa fa-arrow-down"></i></span></div></div></Grid>
                                            <Grid item md={3} xs={12}></Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Brand</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>WS Vendor</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area <i class="fa fa-arrow-down"></i></span></div></div></Grid>
                                            <Grid item md={3} xs={12}></Grid>
                                        </Grid>
                                    </div>
                                </section>

                                {/* ///spacil and discount */}

                                <div className='p-3'>
                                    <Grid className='Component_main_grid'>

                                        <Grid item md={5} xs={12}>
                                            <div className='new_arivals'>
                                                <span>Specials & Discounts</span>
                                            </div>
                                        </Grid>
                                        <Grid item md={5} xs={12}>  <div className='new_arivalss_home click_arival' style={{cursor:"pointer"}} onClick={()=>props.history.push("/spacialdiscount")} >
                                            <span className='border_bottom'>Click here for more</span>
                                        </div></Grid>
                                        <Grid item md={2} xs={12}>  </Grid>
                                    </Grid>
                                </div>
                                {/* ///data grid */}
                                <section>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Brand</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>WS Vendor</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area <i class="fa fa-arrow-down"></i></span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>% Disct.</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Period</span></div></div></Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Brand</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>WS Vendor</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area <i class="fa fa-arrow-down"></i></span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>% Disct.</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Period</span></div></div></Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Brand</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>WS Vendor</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area <i class="fa fa-arrow-down"></i></span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>% Disct.</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Period</span></div></div></Grid>
                                        </Grid>
                                    </div>
                                </section>

                                {/* ///DEMO VEDIO */}
                                <section>
                                    <div className='mt-4'>
                                        <Grid className='Component_main_grid'>
                                        <Grid item md={2}>
                                            <div className='ws_vender_img p-3'>
                                                <img style={{height:"100px",width:"100px"}} src={youtube} alt='' />
                                                <span className='demo_vedio'>WS' demo vedio</span>
                                                </div>
                                               
                                            </Grid>
                                        <Grid item md={4}> <div className="table_home_youtube col-md-12 mt-5" onClick={()=> props.history.push("/VenderLogin")}>
                                            <span className="text-center border_bottom" style={{ fontSize: "17px" }}>Wholeselers /Dist. Log-In</span>
                                        </div></Grid>
                                        <Grid item md={2}> <div className='ws_vender_img p-3'>
                                                <img style={{height:"100px",width:"100px"}} src={youtube} alt='' />
                                                <span className='demo_vedio'>Customer's Demo vedio</span>
                                                </div></Grid>
                                        <Grid item md={4}> <div className="table_home_cus_login col-md-12 mt-5" onClick={()=> props.history.push("/custonerLogin")}>
                                            <span className="border_bottom" style={{ fontSize: "17px" }}>Customers Log-in</span>
                                        </div></Grid>
                                        </Grid>
                                    </div>
                                </section>

                            </Card>
                        </div>

                    </div>
                </div></section>
        </>
    )
}

export default HOC(MainHome)
