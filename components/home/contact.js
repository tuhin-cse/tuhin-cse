import profile from "../../data/profile";
import {FaGithub, FaHackerrank, FaLinkedin} from "react-icons/fa";
import {SiCodeforces, SiStopstalk} from "react-icons/si";
import Image from "next/image";

const Contact = () => {
    return (
        <div className="container section" id="s-contact">
            <h3 className="section-title">Contact</h3>
            <div className="flex justify-center">
                <a href={"mailto:" + profile.email} className="btn btn-outline mr-2.5">
                    email me
                </a>
            </div>
            <div className="flex gap-4 justify-center pt-2 mt-8">
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
    )
}

export default Contact