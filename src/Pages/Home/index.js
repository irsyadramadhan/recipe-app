import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavbarMenu from '../../Components/NavbarMenu'
import Footer from '../../Components/Footer/index'
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from '../../Storages/Actions/menu';
import { Pagination } from '../../Components/Pagination';


export default function Home() {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage]= useState(5);

  const [search, setSearch] = useState('')

  const menu = useSelector((state) => state.menu)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMenu());
  }, [])

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = menu.data?.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{minHeight: "100vh", position: "relative", paddingBottom: "192.29px"}}>
        <NavbarMenu />
        <div className="container">
        <input className='form-control my-3' type="text" placeholder='Search Recipe' onChange={e => setSearch(e.target.value)}/>
          <div> 
            {currentPosts?.filter((item) => {
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
            <Pagination postsPerPage={postsPerPage} totalPosts={menu.data?.length} paginate={paginate} />
          </div>
          </div>
          <br />
        <Footer />
    </div>
  )
}
