import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavbarMenu from '../../Components/NavbarMenu'
import '../../style.css'


let url = 'http://localhost:4000/recipe';
let token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ1ZDI4ZDI2LWM4YmEtNGFiOC1iOTIyLWYyYzk5OWQzYzc4MiIsImVtYWlsIjoiaXJAeWFob28uY28uaWQiLCJmdWxsbmFtZSI6Imlyc3lhZCByYW1hZGhhbiIsInByb2ZpbGVwaWMiOm51bGwsImlzX3ZlcmlmIjowLCJvdHAiOm51bGwsInRpbWVfY3JlYXRlIjoiMjAyMy0wMi0yNlQxOTowNDozMy42OTNaIiwiaWF0IjoxNjc4NjI1OTQxLCJleHAiOjE2Nzk5Mzk5NDF9.g6702GmM9M1m8-HZux9mOq3EYA6Vj3chhI51I7duyYM';

export default function Profile() {
  const [data, setData] = useState()

  const deleteData = (id) => {
    axios.delete(url+`/${id}`, {
      headers: {
        "Authorization": token
      }
    }).then((res) => {
      console.log('data deleted where data id', id);
      console.log(res)
      getData();
    }).catch((err) => {
      console.log(err);
    })
  }


  const getData = () => {
    axios.get(url+'/myrecipe', {
      headers: {
        "Authorization": token
      }
    }).then((res) => {
      console.log(res);
      setData(res.data.results);
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
        <NavbarMenu />
        <h1>My Recipe</h1>
        <div className="container">
        {data?.map((item,index)=>(
            <div key={index+1}>
              <div className="row">
                <div className="col">
                  <img className='img-thumbnail' src={item.image} alt="" />
                </div>
                <div className="col">
                  <h5>{item.title}</h5>
                  <p>Ingredient:</p>
                  <p>{item.ingredient}</p>
                </div>
                <div className="col">
                  <Link to={`/update/${item.id}`} className='btn btn-primary'>Edit</Link>
                  <button className='btn btn-danger' onClick={() => deleteData(item.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

