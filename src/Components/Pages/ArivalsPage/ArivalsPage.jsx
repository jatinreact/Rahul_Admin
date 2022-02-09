import React from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../../Common/HOC'
import "../../Home/Home.css"
import youtube from "../../../Images/youtube-logo.jpg"

const ArivalsPage = (props) => {
    return (
        <>
            <section>
                <div className="home_padding mb-4">
                    <div className='container'>
                        <div className='home_table'>
                            <Card className="home_table_card_color p-3">

                                <div className='p-3'>
                                    <Grid className='Component_main_grid'>

                                        <Grid item md={5} xs={12} sm={12}>
                                            <div className='new_arivalss'>
                                                <span>NEW ARRIVALS</span>
                                            </div>
                                        </Grid>

                                    </Grid>
                                </div>
                                {/* ///data grid */}
                                <section>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Brand</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home border_bottom' style={{cursor:"pointer"}} onClick={() => props.history.push("/customer-shopping-list")}>WS Vendor</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area <i class="fa fa-arrow-down"></i></span></div></div></Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Brand</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home border_bottom' style={{cursor:"pointer"}} onClick={() => props.history.push("/customer-shopping-list")}>WS Vendor</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area <i class="fa fa-arrow-down"></i></span></div></div></Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Brand</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home border_bottom' style={{cursor:"pointer"}} onClick={() => props.history.push("/customer-shopping-list")}>WS Vendor</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area <i class="fa fa-arrow-down"></i></span></div></div></Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Brand</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home border_bottom' style={{cursor:"pointer"}} onClick={() => props.history.push("/customer-shopping-list")}>WS Vendor</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area <i class="fa fa-arrow-down"></i></span></div></div></Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Brand</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home border_bottom' style={{cursor:"pointer"}} onClick={() => props.history.push("/customer-shopping-list")}>WS Vendor</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area <i class="fa fa-arrow-down"></i></span></div></div></Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Brand</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home border_bottom'  style={{cursor:"pointer"}} onClick={() => props.history.push("/customer-shopping-list")}>WS Vendor</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area <i class="fa fa-arrow-down"></i></span></div></div></Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Brand</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home border_bottom' style={{cursor:"pointer"}} onClick={() => props.history.push("/customer-shopping-list")}>WS Vendor</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area <i class="fa fa-arrow-down"></i></span></div></div></Grid>
                                        </Grid>
                                    </div>
                                </section>

                                <div className=' float-right'>
                                    <button type="button" class="Customer_log_arrival" onClick={() => props.history.push("/custonerLogin")}>Customer-Log-In</button>
                                </div>




                            </Card>
                        </div>

                    </div>
                </div></section>
        </>
    )
}

export default HOC(ArivalsPage)
