import {FaGithub, FaHackerrank, FaLinkedin} from "react-icons/fa";
import {SiCodeforces, SiStopstalk} from "react-icons/si";
import Image from "next/image";
import profile from "../../data/profile";

const Hero = () => {
    return (
        <div className="container py-12 relative">
            <div className="flex flex-col gap-6 relative text-center">
                <h1 className="text-5xl sm:text-6xl font-bold">Hi, I am <span className="text-primary block pt-2.5 sm:inline">MD. A. Razzak</span></h1>
                <h2 className="text-3xl sm:text-4xl font-bold">Full Stack Engineer</h2>
                <p className="max-w-xl mx-auto text-sm sm:text-base">
                    A MERN Stack Developer with 4 years of experience,
                    I have specialized in creating efficient, scalable,
                    and robust web applications using MongoDB, Express.js,
                    React, and Node.js. My expertise in JavaScript, both on
                    the front end and back end, has allowed me to streamline
                    the development process and reuse code effectively.</p>
                <div className="flex justify-center items-center gap-6">
                    <a href={profile.resume} target="_blank" className="btn btn-outline">
                        Resume
                    </a>

                    <div className="flex gap-4 justify-center pt-2">
                        <a
                            title="Github"
                            href={profile.github} target="_blank" className="link">
                            <FaGithub size={22} className="mb-1"/>
                        </a>
                        <a
                            title="Linkedin"
                            href={profile.linkedin} target="_blank" className="link">
                            <FaLinkedin size={22} className="mb-1"/>
                        </a>
                        <a
                            title="Codeforces"
                            href={profile.codeforces} target="_blank" className="link">
                            <SiCodeforces size={22} className="mb-1"/>
                        </a>
                        <a
                            title="Hackerrank"
                            href={profile.hackerrank} target="_blank" className="link">
                            <FaHackerrank size={22} className="mb-1"/>
                        </a>
                        <a
                            title="StopStalk"
                            href={profile.stopStalk} target="_blank" className="link">
                            <SiStopstalk size={22} className="mb-1"/>
                        </a>
                        <a href={profile.uva} target="_blank" className="link">
                            <Image src="/icons/uva.png" width={22} height={22} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Hero
