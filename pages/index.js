import Header from "../components/layout/header";
import About from "../components/home/about";
import Projects from "../components/home/projects";
import Contact from "../components/home/contact";
import Hero from "../components/home/hero";
import Experience from "../components/home/exprience";
import {FiArrowUp} from "react-icons/fi";
import {useEffect} from "react";

const Home = () => {

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let scroll = document.body.scrollTop || document.documentElement.scrollTop
            document.querySelector('#goTop')?.classList.toggle('hidden', scroll < 200)
        })
    }, [])

    return (
        <>
            <Header/>
            <Hero/>
            <About/>
            <Experience/>
            <Projects/>
            <Contact/>
            <div
                id="goTop"
                role="button"
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-10 hidden">
                <FiArrowUp size={28} className="text-primary"/>
            </div>
        </>
    )
}

export default Home