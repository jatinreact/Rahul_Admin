import React from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../Common/HOC'
import "../Home/Home.css"


const WSVenderList = (props) => {
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
                                                <span>WS Vendors List</span>
                                            </div>
                                        </Grid>

                                    </Grid>
                                </div>
                                {/* ///data grid */}
                                <section>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={5} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table' onClick={()=> props.history.push("/customer-shopping-list")}><span className='table_span_home' style={{cursor:"pointer"}}>WS Vendor Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table' ><span className='table_span_home'>Phone#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area<i class="fa fa-arrow-down pl-2"></i></span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table' onClick={()=> props.history.push("/WS-distributer-list")}><span className='table_span_home' style={{cursor:"pointer"}} >Distributers</span></div></div></Grid>
                                           
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={5} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table' onClick={()=> props.history.push("/customer-shopping-list")}><span className='table_span_home' style={{cursor:"pointer"}}>WS Vendor Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Phone#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area<i class="fa fa-arrow-down pl-2"></i></span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table' onClick={()=> props.history.push("/WS-distributer-list")}><span className='table_span_home' style={{cursor:"pointer"}} >Distributers</span></div></div></Grid>
                                           
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={5} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table' onClick={()=> props.history.push("/customer-shopping-list")}><span className='table_span_home' style={{cursor:"pointer"}}>WS Vendor Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Phone#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area<i class="fa fa-arrow-down pl-2"></i></span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table' onClick={()=> props.history.push("/WS-distributer-list")}><span className='table_span_home' style={{cursor:"pointer"}} >Distributers</span></div></div></Grid>
                                           
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={5} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table' onClick={()=> props.history.push("/customer-shopping-list")}><span className='table_span_home' style={{cursor:"pointer"}}>WS Vendor Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Phone#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area<i class="fa fa-arrow-down pl-2"></i></span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table' onClick={()=> props.history.push("/WS-distributer-list")}><span className='table_span_home' style={{cursor:"pointer"}} >Distributers</span></div></div></Grid>
                                           
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={5} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table' onClick={()=> props.history.push("/customer-shopping-list")}><span className='table_span_home' style={{cursor:"pointer"}}>WS Vendor Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Phone#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area<i class="fa fa-arrow-down pl-2"></i></span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table' onClick={()=> props.history.push("/WS-distributer-list")}><span className='table_span_home' style={{cursor:"pointer"}} >Distributers</span></div></div></Grid>
                                           
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={5} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table' onClick={()=> props.history.push("/customer-shopping-list")}><span className='table_span_home' style={{cursor:"pointer"}}>WS Vendor Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Phone#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area<i class="fa fa-arrow-down pl-2"></i></span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table' onClick={()=> props.history.push("/WS-distributer-list")}><span className='table_span_home' style={{cursor:"pointer"}} >Distributers</span></div></div></Grid>
                                           
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={5} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table' onClick={()=> props.history.push("/customer-shopping-list")}><span className='table_span_home' style={{cursor:"pointer"}}>WS Vendor Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Phone#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area<i class="fa fa-arrow-down pl-2"></i></span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table' onClick={()=> props.history.push("/WS-distributer-list")}><span className='table_span_home' style={{cursor:"pointer"}} >Distributers</span></div></div></Grid>
                                           
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

export default HOC(WSVenderList)
