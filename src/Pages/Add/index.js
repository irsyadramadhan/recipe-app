
import { useState } from 'react';
import NavbarMenu from '../../Components/NavbarMenu';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addMenu } from '../../Storages/Actions/menu';

export default function Add() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const add_menu = useSelector((state) => state.add_menu);
  
  const [inputData, setInputData] = useState({
    title: "", ingredient: "", category_id: 2
  })

  const [image, setImage] = useState()

  
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
    dispatch(addMenu(formData, navigate));
  }

  //alert
  const [showAlert, setShowAlert] = useState(false)
  
  return (
    <div>
        <NavbarMenu />
        <h2 className='text-center' style={{color: "#2E266F", marginBottom: "50px", marginTop: "50px"}}>Add New Recipe!</h2>
        <form onSubmit={postForm} className="container" style={{width: "50%"}}>
          <input type="text" value={inputData.title} name="title" placeholder='Title' required onChange={handleChange} className="form-control my-3" />
          <input type="text" value={inputData.ingredient} name="ingredient" placeholder='Ingredient' required onChange={handleChange} className="form-control my-3" />
          <input type="file" name="image" required onChange={handleChangeImage} className="form-control my-3" />
          <button type='submit' className='btn btn-warning my-3'>Post</button>
        </form>
        <div className="container">
          { showAlert ? (<div className="alert alert-success" role="alert" onClick={() => setShowAlert(false)}>Success add this recipe!</div>) : "" }
          {add_menu.isLoading && <p>Loading...</p>}
          {add_menu.errorMessage}
        </div>
    </div>
  )
}