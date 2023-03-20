import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavbarMenu from "../../Components/NavbarMenu";
import Footer from "../../Components/Footer/index";
import { useDispatch, useSelector } from "react-redux";
import { getDetailMenu } from "../../Storages/Actions/menu";

export default function Details() {
    const [data, setData] = useState();
    const {id} = useParams();
    
    const menu = useSelector((state) => state.detail_menu);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetailMenu(id));
    }, [])
  
    return (
    <div style={{minHeight: "100vh", position: "relative", paddingBottom: "192.29px"}}>
        <NavbarMenu />
        <div className="container">
            <div className="container">
                {menu.data?.map((item, index) => (
                    <div key={index}>
                        <div className="container text-center">
                            <h1 style={{fontWeight: "bold", color: "#2E266F", marginTop: "25px", marginBottom: "25px"}}>{item.title}</h1>
                            <img className="img-thumbnail" src={item.image} alt="" style={{width: "500px", height: "300px", marginBottom: "50px"}}/>
                        </div>
                        <div className="container" style={{borderLeft: "25px solid #EFC81A"}}>
                            <span style={{fontWeight: "bold", fontSize: "17pt"}}>Ingredient:</span>
                            <br />
                            <span style={{fontSize: "16pt"}}>{item.ingredient}</span>
                            <br />
                            <span>Created by: {item.creator} on {item.time_create}</span>
                        </div>
                    </div>
                ))}
            </div>
            <br />
        </div>
        <Footer />
    </div>
    )
}