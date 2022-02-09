import React, { useState } from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../Common/HOC'
import "../Home/Home.css"
import Expand from "react-expand-animated";
import CustomerSidebar from '../../Sidebar/CustomerSidebar';

const CustomerPurchaceOrder = (props) => {
    const [Customersidebar, setCustomersidebar] = useState(false);

    const sidebaropen = () => {

        setCustomersidebar(!Customersidebar)
    }
    const [Expendbox, setExpendbox] = useState(false)
    return (
        <>
            <section>
                <div className="home_padding mb-4">
                    <div className='p-5'>
                        <div className='home_table'>
                            <Card className="home_table_card_color_Customer_inv_list p-3">
                                <div className='wdwq'>
                                    <Grid className='Component_main_grid'>
                                    <Grid item md={1} xs={12}> <div className="col-md-12 pb-3">
                                    <div className='pl-3'>
                                        <div className='pl-2 mt-1' onClick={sidebaropen}>
                                            <i class="fa fa-bars" style={{ fontSize: "30px" }}></i>
                                        </div>
                                        </div>
                                        </div></Grid>
                                        <Grid item md={4} xs={12}> <div className="col-md-12 pb-3">
                                            <h5 className='' style={{color:"#FFF"}}>Customer Invoices List</h5>
                                        </div></Grid>
                                        <Grid item md={3} xs={12}>
                                            <div className="col-md-12 pb-3">
                                                <input
                                                    disabled
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="WS Vender/Distributer Name"
                                                />
                                            </div></Grid>
                                        <Grid item md={3} xs={12}>
                                            <div className="col-md-12 pb-3"><input
                                                disabled
                                                type="text"
                                                class="form-control"
                                                placeholder="Invoice #"
                                            /></div></Grid>

                                        <Grid item md={1} xs={6}> <div className="search_area col-md-12">
                                            <i class="fa fa-search"></i>
                                        </div></Grid>

                                    </Grid>
                                </div>

                                {/* ///data grid */}
                                <section>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}></Grid>
                                            <Grid item md={1} xs={12}><h6 className='text-center'>Inv#</h6></Grid>
                                            <Grid item md={2} xs={12}><h6 className='text-center'>Date</h6></Grid>
                                            <Grid item md={4} xs={12}><h6 className='text-center'>Venders Name</h6></Grid>
                                            <Grid item md={1} xs={12}><h6 className='text-center'>Contact Info</h6></Grid>
                                            <Grid item md={2} xs={12}><h6 className='text-center'>Inv. Total</h6></Grid>
                                            <Grid item md={1} xs={12}><h6 className='text-center'>Action</h6></Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'><i class="fa fa-plus"></i></span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Inv.#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>mm/dd/yy</span></div></div></Grid>
                                            <Grid item md={4} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>WS Vendor/Distributer Name</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Phone #</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>$Sub Total</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_gree'><span className='table_span_home' >Accept</span></div></div></Grid>


                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}>
                                                <div className='d-flex mb-2' style={{ justifyContent: "center" }}>

                                                  
                                                        {Expendbox === false ? (
                                                              <div className='photo_table'onClick={() => setExpendbox(!Expendbox)} >
                                                            <span className='table_span_home'  >
                                                                <i class="fa fa-plus"></i>
                                                            </span>
                                                            </div>
                                                        ) : (<div className='photo_table_blue'onClick={() => setExpendbox(!Expendbox)} ><span className='photo_table_blue'  >
                                                            <i className="fa fa-minus-square"></i>
                                                        </span></div>)}





                                                    
                                                </div>
                                            </Grid>


                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Inv.#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>mm/dd/yy</span></div></div></Grid>
                                            <Grid item md={4} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>WS Vendor/Distributer Name</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Phone #</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>$Sub Total</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_gree'><span className='table_span_home' >Accept</span></div></div></Grid>


                                        </Grid>
                                    </div>
                                    <Expand open={Expendbox}>
                                        <div>
                                            <Grid className='Component_main_grid'>

                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>item #</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Brand</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>$Price</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Per</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Qty</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Msrmt</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>Qty.</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>$Total</span></div></div></Grid>
 
                                             


                                            </Grid>
                                        </div>
                                        <div>
                                            <Grid className='Component_main_grid'>

                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>item #</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Brand</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>$Price</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Per</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Qty</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Msrmt</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>Qty.</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>$Total</span></div></div></Grid>
 
                                             


                                            </Grid>
                                        </div>
                                        <div>
                                            <Grid className='Component_main_grid'>

                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>item #</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Brand</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>$Price</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Per</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Qty</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Msrmt</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>Qty.</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>$Total</span></div></div></Grid>
 
                                             


                                            </Grid>
                                        </div>
                                    </Expand>


                                    <div>
                                        <Grid className='Component_main_grid'>
                                            
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>Shopping</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>$Price</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>Admin Fees</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>$Price</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>Invoice Sub-Total</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>$Sub Total</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_gree'><span className='table_span_home' >Accept</span></div></div></Grid>   
                                            <Grid item md={2} xs={12}></Grid>

                                        </Grid>
                                    </div>


                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'><i class="fa fa-plus"></i></span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Inv.#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>mm/dd/yy</span></div></div></Grid>
                                            <Grid item md={4} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>WS Vendor/Distributer Name</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Phone #</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>$Sub Total</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_gree'><span className='table_span_home' >Accept</span></div></div></Grid>


                                        </Grid>
                                    </div>

                                </section>




                            </Card>
                        </div>

                    </div>
                </div>
                <CustomerSidebar open={Customersidebar} close={sidebaropen}/>
                </section>
        </>
    )
}

export default HOC(CustomerPurchaceOrder)
