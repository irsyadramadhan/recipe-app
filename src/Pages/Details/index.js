import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import NavbarMenu from "../../Components/NavbarMenu";
import Footer from "../../Components/Footer/index";
import '../../style.css';

// let url = 'http://localhost:4000/recipe'
let url = process.env.REACT_APP_API_KEY

export default function Details() {
    const [data, setData] = useState(); // <---------------
    const {id} = useParams();
    const getData = () => {
        axios.get(url + `/${id}`).then((res) => {
            console.log(res);
            setData(res.data.result);
        }).catch((err) => {
            console.log(err);
        })
    }

    const mystyle = {
        width: "550px",
        height: "350px"
    };

    useEffect(() => {
        getData();
    }, [])
  
    return (
    <div>
        <NavbarMenu />
        <div className="container">
            <h3>Details</h3>
            <div className="container my-3">
                {data?.map((item, index) => (
                    <div key={index}>
                        <h1 className="my-text-blue">{item.title}</h1>
                        <div className="text-center my-5">
                            <img src={item.image} alt="" style={mystyle} />
                        </div>
                        <div className="container my-3">
                            <h5>Ingredient:</h5>
                            <h6>{item.ingredient}</h6>
                        </div>
                        <div className="container my-3">
                            <h5>Creator: {item.creator}</h5>
                        </div>
                        <div className="container my-3">
                            <h5>Time Create: {item.time_create}</h5>
                        </div>
                    </div>
                ))}
            </div>
            <br />
            <div className="container my-6">
                <h3>Write your Comments!</h3>
                <textarea className="form-control" name="" id="" cols="30" rows="10" style={{resize: "none"}}></textarea>
                <button className="btn btn-lg btn-warning my-5">Post</button>
            </div>
        </div>
        <Footer />
    </div>
    )
}
