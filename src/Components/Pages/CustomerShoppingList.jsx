import React,{useState} from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../Common/HOC'
import "../Home/Home.css"
import CustomerSidebar from '../../Sidebar/CustomerSidebar'


const CustomerShoppingList = (props) => {
    const [Customersidebar, setCustomersidebar] = useState(false);

    const sidebaropen = () => {

        setCustomersidebar(!Customersidebar)
    }
    return (
        <>
            <section>
                <div className="home_padding mb-4">
                    <div className='container'>
                        <div className='home_table'>
                            <Card className="home_table_card_color_shopping p-3">
                                <div className='wdwq'>
                                    <Grid className='Component_main_grid'>
                                    <Grid item md={2} xs={12}> <div className="col-md-12 pb-3">
                                    <div className='pl-3'>
                                        <div className='pl-2 mt-1' onClick={sidebaropen}>
                                            <i class="fa fa-bars" style={{ fontSize: "30px" }}></i>
                                        </div>
                                        </div>
                                        </div></Grid>
                                        <Grid item md={5} xs={12}> <div className="col-md-12 pb-3">
                                            <h5 className='' style={{color:"#FFF"}}>Customer Shopping List</h5>
                                        </div></Grid>
                                        <Grid item md={2} xs={12}>
                                            <div className="col-md-12 pb-3">
                                                <input
                                                    disabled
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Brand"
                                                />
                                            </div></Grid>
                                        <Grid item md={2} xs={12}>
                                            <div className="col-md-12 pb-3"><input
                                                disabled
                                                type="text"
                                                class="form-control"
                                                placeholder="Item name"
                                            /></div></Grid>

                                        <Grid item md={1} xs={6}> <div className="search_area col-md-12">
                                            <i class="fa fa-search"></i>
                                        </div></Grid>
                                      
                                    </Grid>
                                </div>
                                <div className='p-3'>
                                    <Grid className='Component_main_grid'>
                                    <Grid item md={2} xs={12}>
                                           

                                        </Grid>
                                        <Grid item md={4} xs={12}>
                                            <div className=''>
                                                <h5>WS Vendors/Distributor Name</h5>
                                            </div>

                                        </Grid>
                                        <Grid item md={3} xs={12}>
                                            <div className=''>
                                                <div className='mb-2' style={{ justifyContent: "center" }}><div className='photo_table_shopping'><span className='table_span_home'>Shipping<i class='fa fa-arrow-down pl-2' style={{ fontSize: "20px" }}></i></span></div></div>
                                            </div>

                                        </Grid>
                                        <Grid item md={3} xs={12}>
                                            <Grid className='Component_main_grid'>

                                                <Grid item md={6} xs={12}>
                                                    <div className='mt-1' >
                                                        <h5>Min.Order:</h5><div></div>
                                                    </div>
                                                </Grid>
                                                <Grid item md={6} xs={12}>
                                                    <div className='' >
                                                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="$" />
                                                    </div>
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                </div>
                                {/* ///data grid */}
                                <section>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Category A</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Category B</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Category C</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Category etc..</span></div></div></Grid>
                                            <Grid item md={4} xs={12}></Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='mb-2' ><div className='text-center pl-1'><span className='' ><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item#</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Brand</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>$ Price</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Per</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Qty.</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Msrmt</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>Qty.</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>$ Total</span></div></div></Grid>

                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='mb-2' ><div className='text-center pl-1'><span className='' ><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item#</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Brand</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>$ Price</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Per</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Qty.</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Msrmt</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>Qty.</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>$ Total</span></div></div></Grid>

                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='mb-2' ><div className='text-center pl-1'><span className='' ><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item#</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Brand</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>$ Price</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Per</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Qty.</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Msrmt</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>Qty.</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>$ Total</span></div></div></Grid>

                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='mb-2' ><div className='text-center pl-1'><span className='' ><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item#</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Brand</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>$ Price</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Per</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Qty.</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Msrmt</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>Qty.</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>$ Total</span></div></div></Grid>

                                        </Grid>
                                    </div>
                                </section>


                                        <div>
                                            <Grid className='Component_main_grid'>
                                            <Grid item md={4} xs={12}>
                                                <div className='text-center mt-5 mb-3'>
                                                <button type="button" class="shiping_list btn btn-primary" onClick={()=> props.history.push("/addnewItemPage")}><span className='border_bottom'>Category A Total</span></button>
                                                </div>
                                            </Grid>
                                            <Grid md={4} xs={12}>
                                            <div className='text-center mt-5 mb-3'>
                                                <button type="button" class="shiping_list btn btn-primary" onClick={()=> props.history.push("/addnewItemPage")}><span className='border_bottom'>Order Subtotal</span></button>
                                                </div>
                                            </Grid>
                                            <Grid md={4} xs={12}>
                                                <div className='text-center mt-5 mb-3'>
                                            <button type="button" class="shiping_list btn btn-success " onClick={()=> props.history.push("/customer-purchace-order")}><span className='border_bottom'>Submit</span></button>
                                            </div>
                                            </Grid>
                                            </Grid>
                                        </div>


                            </Card>
                        </div>

                    </div>
                </div>
                <CustomerSidebar open={Customersidebar} close={sidebaropen}/>
                </section>
        </>
    )
}

export default HOC(CustomerShoppingList)
