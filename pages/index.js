import Header from "../components/layout/header";
import About from "../components/home/about";
import Projects from "../components/home/projects";
import Skills from "../components/home/skills";
import Hero from "../components/home/hero";
import Exprience from "../components/home/exprience";

const Home = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <About/>
            <Exprience/>
            <Projects/>
            <Skills/>
        </>
    )
}

export default Home