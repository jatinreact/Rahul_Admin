import React, { useState } from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../../Common/HOC'
import "../../Home/Home.css"
import VenderSidebar from "../../../Sidebar/VenderSidebar"

const VenderItemList = (props) => {
    const [mobilesidebar, setmobilesidebar] = useState(false);
    const sidebaropen = () => {

        setmobilesidebar(!mobilesidebar)
    }

    return (
        <>
            <section>
                <div className="home_padding mb-4">
                    <div className='container'>
                        <div className='home_table'>
                            <Card className="home_table_final_inv_data p-3">
                                <div className='wdwq'>
                                    <Grid className='Component_main_grid'>
                                        <Grid item md={2} xs={12}> <div className='pl-3'>
                                        <div className='pl-2 mt-1' onClick={sidebaropen}>
                                            <i class="fa fa-bars" style={{ fontSize: "30px" }}></i>
                                        </div>
                                        </div></Grid>
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

                                        <Grid item md={1} xs={6}> <div className="search_area col-md-12">
                                            <i class="fa fa-search"></i>
                                        </div></Grid>
                                        <Grid item md={3} xs={12}> <div className="table_vender_home col-md-12 text-center">
                                            <span className="text-center" style={{ fontSize: "17px", cursor: "pointer" }} onClick={() => props.history.push("/addnewItemPage")}><span className='border_bottom'>Add New item</span></span>
                                        </div></Grid>
                                    </Grid>
                                </div>
                                <div className='p-3'>
                                    <Grid className='Component_main_grid'>

                                        <Grid item md={8} xs={12}>
                                            <div className=''>
                                                <h5>WS Vendors/Distributor Name</h5>
                                            </div>

                                        </Grid>
                                        <Grid item md={4} xs={12}>
                                            <Grid className='Component_main_grid'>

                                                <Grid item md={4} xs={12}>
                                                    <div className='' >
                                                        <span>Min.Order</span><div></div>
                                                    </div>
                                                </Grid>
                                                <Grid item md={8} xs={12}>
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
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Category D</span></div></div></Grid>
                                            <Grid item md={4} xs={12}></Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Brand</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>$ Price</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Per</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Status</span></div></div></Grid>
                                            
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "space-around" }}><div className=''><span className='table_span_home'><i class="fa fa-pencil pr-2" style={{ fontSize:"25px" }}></i> <i class="fa fa-times" style={{ color: "red",fontSize:"25px" }}></i></span></div></div></Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Brand</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>$ Price</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Per</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Status</span></div></div></Grid>
                                            
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "space-around" }}><div className=''><span className='table_span_home'><i class="fa fa-pencil pr-2" style={{ fontSize:"25px" }}></i> <i class="fa fa-times" style={{ color: "red",fontSize:"25px" }}></i></span></div></div></Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Brand</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>$ Price</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Per</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Status</span></div></div></Grid>
                                            
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "space-around" }}><div className=''><span className='table_span_home'><i class="fa fa-pencil pr-2" style={{ fontSize:"25px" }}></i> <i class="fa fa-times" style={{ color: "red",fontSize:"25px" }}></i></span></div></div></Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Brand</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>$ Price</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Per</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Status</span></div></div></Grid>
                                            
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "space-around" }}><div className=''><span className='table_span_home'><i class="fa fa-pencil pr-2" style={{ fontSize:"25px" }}></i> <i class="fa fa-times" style={{ color: "red",fontSize:"25px" }}></i></span></div></div></Grid>
                                        </Grid>
                                    </div>
                                </section>





                            </Card>
                        </div>

                    </div>
                </div>
                <VenderSidebar open={mobilesidebar} close={sidebaropen}/>
            </section>
        </>
    )
}

export default HOC(VenderItemList)
