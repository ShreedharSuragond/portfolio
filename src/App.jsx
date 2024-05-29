
// import { CustomNavbar } from "./components/CustomNavbar"
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Hero from "./components/Hero"


function App() {

  return (
    // <>
    //   <CustomNavbar/>
    // </>
    <div className="font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
