import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavbarMenu from '../../Components/NavbarMenu'
import Footer from '../../Components/Footer/index'

let url = process.env.REACT_APP_API_KEY

export default function Home() {
  console.log(process.env.REACT_APP_API_KEY)
  const [data, setData] = useState()
  const [search, setSearch] = useState('')

  const getData = () => {
    axios.get(url).then((res) => {
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
        <input className='form-control my-3' type="text" placeholder='Search Recipe' onChange={e => setSearch(e.target.value)}/>
          <div> 
            {data?.filter((item) => {
              if (search === '') {
                return item;
              } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
                return item;
              }
            }).map((item,index)=>(
                <div key={index+1}>
                  <div className="row my-5">
                    <div className="col-3">
                      <img className='img-thumbnail' src={item.image} alt="" style={{width: "280px", height: "200px"}}/>
                    </div>
                    <div className="col-3" style={{borderLeft: "10px solid #EFC81A"}}>
                      <Link to={`/details/${item.id}`}>
                        <h2 style={{color: "#2E266F", fontWeight: "bold"}}>{item.title}</h2>
                      </Link>
                      <span style={{fontWeight: "bold"}}>Category :</span>
                      <br />
                      <small>{item.category}</small>
                      <br />
                      <span style={{fontWeight: "bold"}}>Creator :</span>
                      <br />
                      <small>{item.creator}</small>
                    </div>
                  </div>
                </div>
            ))}
          </div>
          </div>
          <br />
        <Footer />
    </div>
  )
}
