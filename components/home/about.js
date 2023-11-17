import {useTheme} from "../../contexts/theme";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import profile from "../../data/profile";

const About = () => {
    return (
        <div className="container section" id="s-about">
            <h3 className="section-title">About me</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3 text-center md:text-left">
                    <p>Hello, I am&nbsp;
                        <span className="text-primary">Md. A. Razzak</span>&nbsp;
                        and my nick name is <span className="text-primary">Tuhin,</span>&nbsp;
                        I am a full stack web developer. I have been working as a web developer for about 4 years.
                    </p>
                    <p>
                        My journey started in 2017. From 2017 to 2019 i was involved in competitive programming. I have
                        participated in many programming contest online and offline. I have solved more than 700
                        problems
                        in different online judges. All my submissions are available on&nbsp;
                        <a href={profile.stopStalk} target="_blank" className="link">StopTalk.</a>
                    </p>
                    <p>I was active in&nbsp;
                        <a href={profile.codeforces} target="_blank" className="link">Codeforces</a>,&nbsp;
                        <a href={profile.hackerrank} target="_blank" className="link">Hackerrank</a> and&nbsp;
                        <a href={profile.uva} target="_blank" className="link">UVa Online Judge</a>.
                        Currently i am working as Full Stack Developer. My skills are</p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-2.5 mt-4">
                        {['Node.js', 'Express.js', 'React.js', 'Next.js', 'MongoDB', 'Tailwindcss', 'Html', 'CSS',
                            'JavaScript', 'Ant Design', 'Material UI', 'Bootstrap', 'Sass', 'Redux', 'React Native',
                            'Docker', 'AWS', 'Digital Ocean', 'Linux', 'Linux Server'].map((item, index) => (
                            <span key={index}
                                  className="skill">{item}</span>
                        ))}
                    </div>

                </div>
                <div className="flex justify-center md:justify-end">
                    <div className="relative w-80 aspect-square">
                        <div
                            className="absolute border-2 border-primary top-0 z-0 left-0 w-full aspect-square mt-2.5 ml-2.5 rounded"/>
                        <img src="/tuhin.jpg" className="absolute border border-gray-300 rounded z-10" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About

