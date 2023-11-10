import {useTheme} from "../../contexts/theme";
import {FaGithub, FaHackerrank, FaLinkedin} from "react-icons/fa";
import {SiCodeforces} from "react-icons/si";

const Hero = () => {
    return (
        <div className="container py-12 relative">
            <div className="flex flex-col gap-6 relative text-center">
                <h1 className="text-5xl sm:text-6xl font-bold">Hi, I am <span className="text-primary block pt-2.5 sm:inline">MD. A. Razzak</span></h1>
                <h2 className="text-3xl sm:text-4xl font-bold">Full Stack Web Developer</h2>
                <p className="max-w-xl mx-auto text-sm sm:text-base">Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis
                    perspiciatis corporis nulla
                    aspernatur. Autem eligendi rerum delectus modi quisquam?
                    Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.</p>

                <div className="flex justify-center items-center gap-6">
                    <a className="btn btn-outline">
                        Resume
                    </a>

                    <div className="flex gap-4 justify-center pt-2">
                        <a href="https://github.com/tuhin-cse" target="_blank" className="link">
                            <FaGithub size={22} className="mb-1"/>
                        </a>
                        <a href="https://github.com/tuhin-cse" target="_blank" className="link">
                            <FaLinkedin size={22} className="mb-1"/>
                        </a>
                        <a href="https://github.com/tuhin-cse" target="_blank" className="link">
                            <SiCodeforces size={22} className="mb-1"/>
                        </a> <a href="https://github.com/tuhin-cse" target="_blank" className="link">
                            <FaHackerrank size={22} className="mb-1"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Hero
