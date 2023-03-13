
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavbarMenu from "../../Components/NavbarMenu";

let token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ1ZDI4ZDI2LWM4YmEtNGFiOC1iOTIyLWYyYzk5OWQzYzc4MiIsImVtYWlsIjoiaXJAeWFob28uY28uaWQiLCJmdWxsbmFtZSI6Imlyc3lhZCByYW1hZGhhbiIsInByb2ZpbGVwaWMiOm51bGwsImlzX3ZlcmlmIjowLCJvdHAiOm51bGwsInRpbWVfY3JlYXRlIjoiMjAyMy0wMi0yNlQxOTowNDozMy42OTNaIiwiaWF0IjoxNjc4NjI1OTQxLCJleHAiOjE2Nzk5Mzk5NDF9.g6702GmM9M1m8-HZux9mOq3EYA6Vj3chhI51I7duyYM';
let url = 'http://localhost:4000/recipe'

export default function Update() {
    const [inputData, setInputData] = useState({
        title: "", ingredient: "", category_id: 2
      })
    const [image, setImage] = useState()  
    const [showAlert, setShowAlert] = useState(false)
    const { id } = useParams();

    const handleChange = (e) => {
        setInputData({
          ...inputData,
          [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }
    
    const handleChangeImage = (e) => {
        setImage(e.target.files[0])
        console.log(e.target.files[0])
    }

    const postForm = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append("title", inputData.title)
        formData.append("ingredient", inputData.ingredient)
        formData.append("category_id", inputData.category_id)
        formData.append("image", image)
        console.log(formData)
        axios.put(url+`/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": token
          }
        }).then((res) => {
          setShowAlert(true) //<---
          console.log('update data success')
          console.log(res)
        }).catch((err) => {
          console.log('update data fail')
          console.log(err)
        })
      }

    return (
        <div>
            <NavbarMenu />
        <h2 className='text-center'>Add Menu</h2>
        <form onSubmit={postForm} className="container">
          <input type="text" value={inputData.title} name="title" placeholder='Title' required onChange={handleChange} className="form-control my-3" />
          <input type="text" value={inputData.ingredient} name="ingredient" placeholder='Ingredient' required onChange={handleChange} className="form-control my-3" />
          <input type="file" name="image" required onChange={handleChangeImage} className="form-control my-3" />
          <button type='submit' className='btn btn-warning my-5'>Add This Menu!</button>
        </form>
        <div className="container">
          { showAlert ? (<div className="alert alert-success" role="alert" onClick={() => setShowAlert(false)}>Success Update This Menu!</div>) : "" }
        </div>
        </div>
    )
}
