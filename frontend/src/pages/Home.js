import { useEffect, useState } from "react"
import Container from "../components/Container"
// import Footer from '../components/Footer'
// import Navbar from "../components/Navbar"


const Home = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    const request = await fetch("http://localhost:5000/projects")
    const response = await request.json()
    setCategories(response)
  }


    return (
      <>
        {/* <Navbar/> */}
        {/* <Header/> */}
        <Container>
      <main className="flex flex-wrap">
      </main>
      </Container>
      {/* <Footer/> */}
      </>
    )
  }
  
  export default Home