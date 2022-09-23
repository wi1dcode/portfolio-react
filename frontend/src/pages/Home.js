import { useEffect, useState } from "react"
import About from "../components/About"
import Container from "../components/Container"
import Footer from '../components/Footer'
import Navbar from "../components/Navbar"
import Title from "../components/Title"
import Window from "../components/Window"

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
        <Navbar/>
      <main className="flex flex-wrap">
        <header>
          <Container>
            <Window/>
          </Container>
        </header>
          <Container>
            <section className="about">
              <Title>About</Title>
              <About/>
            </section>
          </Container>
      </main>
      <Footer/>
      </>
    )
  }
  
  export default Home