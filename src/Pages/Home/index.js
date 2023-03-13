// import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import NavbarMenu from '../../Components/NavbarMenu'

let url = 'http://localhost:4000/recipe'

export default function Home() {
  const [data, setData] = useState()

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
        <h1>Home</h1>
        <div className="container">
        {data?.map((item,index)=>(
            <div key={index+1}>
              <h5>{item.title}</h5>
              <img className='img-thumbnail' src={item.image} alt="" />
            </div>
          ))}
        </div>
    </div>
  )
}
