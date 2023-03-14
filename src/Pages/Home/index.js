// import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavbarMenu from '../../Components/NavbarMenu'
import Footer from '../../Components/Footer/index'
import '../../style.css'

let url = process.env.REACT_APP_API_KEY

export default function Home() {
  // console.log(process.env.REACT_APP_API_KEY)
  const [data, setData] = useState()
  const [search, setSearch] = useState('')

  const getData = () => {
    axios.get(url).then((res) => {
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
        <div className="container">
        <input className='form-control' type="text" placeholder='Search Recipe' onChange={e => setSearch(e.target.value)}/>  
        {data?.filter((item) => {
          if (search === '') {
            return item;
          } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        }).map((item,index)=>(
            <div key={index+1}>
              <div className="row my-5">
                <div className="col-4 text-end">
                  <img className='food-img' src={item.image} alt="" />
                </div>
                <div className="col-4">
                  <Link to={`/details/${item.id}`}>
                    <h5 className='my-text-blue'>{item.title}</h5>
                  </Link>
                  <p>Ingredient:</p>
                  <p>{item.ingredient}</p>
                  <p>Creator: {item.creator}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
    </div>
  )
}
