import Link from "next/link";
import {MdBrightness2, MdOutlineWbSunny} from "react-icons/md";
import {useTheme} from "../../contexts/theme";
import {FiMenu, FiX} from "react-icons/fi";

const Header = () => {
    const {theme, setTheme} = useTheme()
    const sections = ['about', 'experience', 'projects', 'contact']

    const goToSection = (section) => {
        document.querySelector('.menu')?.classList.remove('show')
        let element = document.getElementById('s-' + section)
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    }

    return (
        <header className="h-24 sm:h-32 container flex items-center justify-between">
            <Link
                href="/"
                onClick={() => document.body.scrollTo({top: 0, behavior: 'smooth'})}
                className="link text-2xl font-bold">
                AR.
            </Link>
            <div className="flex items-center gap-6">
                <div className="menu">
                    <button
                        onClick={() => document.querySelector('.menu')?.classList.remove('show')}
                        className="absolute sm:hidden right-4 top-4">
                        <FiX size={22}/>
                    </button>

                    {sections.map((section, index) => (
                        <a
                            key={index}
                            role="button"
                            onClick={() => goToSection(section)}
                            className="link font-medium">
                            {section}
                        </a>
                    ))}
                </div>
                <button
                    onClick={() => {
                        setTheme(theme === 'light' ? 'dark' : 'light')
                    }}
                    className="text-primary mb-1">
                    {theme === 'dark' ? <MdOutlineWbSunny size={22}/> : <MdBrightness2 size={22}/>}
                </button>

                <button
                    onClick={() => document.querySelector('.menu')?.classList.toggle('show')}
                    className="sm:hidden mb-1">
                    <FiMenu size={22}/>
                </button>

            </div>
        </header>
    )
}


export default Header