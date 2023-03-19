import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import NavbarMenu from "../../Components/NavbarMenu";
import Footer from "../../Components/Footer/index";

let url = process.env.REACT_APP_API_KEY

export default function Details() {
    const [data, setData] = useState(); // <---------------
    const {id} = useParams();
    const getData = () => {
        axios.get(`${url}/recipe/${id}`).then((res) => {
            console.log(res);
            setData(res.data.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getData();
    }, [])
  
    return (
    <div style={{minHeight: "100vh", position: "relative", paddingBottom: "192.29px"}}>
        <NavbarMenu />
        <div className="container">
            <div className="container">
                {data?.map((item, index) => (
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
