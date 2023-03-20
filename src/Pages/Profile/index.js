import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavbarMenu from '../../Components/NavbarMenu'
import Footer from '../../Components/Footer'
import { useSelector, useDispatch } from 'react-redux';
import { deleteMenu, getMyMenu } from '../../Storages/Actions/menu'

export default function Profile() {
//  const user = useSelector((state) => state.user.data);
 const menu = useSelector((state) => state.my_menu);
 const delete_menu = useSelector((state) => state.delete_menu);
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(getMyMenu());
 }, []);

 useEffect(() => {
  dispatch(getMyMenu());
 }, [delete_menu.data]);

 const name = localStorage.getItem("name");
  
 const deleteData = (id) => {
  dispatch(deleteMenu(id));
 }

  return (
    <div style={{minHeight: "100vh", position: "relative", paddingBottom: "192.29px"}}>
        <NavbarMenu />
        <div className="container">
        <h2 style={{color: "#2E266F"}}>{name}'s Recipe</h2>
        {menu.data?.map((item,index)=>(
          <div key={index+1}>
              <div className="row my-5">
                <div className="col-3">
                  <img className='img-thumbnail' src={item.image} alt="" style={{width: "280px", height: "200px"}} />
                </div>
                <div className="col-6" style={{borderLeft: "10px solid #EFC81A"}}>
                  <Link to={`/details/${item.id}`}>
                        <h2 style={{color: "#2E266F", fontWeight: "bold"}}>{item.title}</h2>
                  </Link>
                  <span style={{fontWeight: "bold"}}>Category: </span><br />
                  <span>{item.category}</span><br />
                  <span style={{fontWeight: "bold"}}>Created At: </span><br />
                  <span>{item.time_create}</span><br />
                  
                  <Link to={`/update/${item.id}`} className='btn btn-primary' style={{marginTop: "5px", marginRight: "10px"}}>Edit</Link>
                  <button className='btn btn-danger' onClick={() => deleteData(item.id)} style={{marginTop: "5px"}}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
    </div>
  )
}

