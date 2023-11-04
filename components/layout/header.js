import Link from "next/link";
import {MdBrightness2, MdOutlineWbSunny} from "react-icons/md";
import {useTheme} from "../../contexts/theme";

const Header = () => {
    const {theme, setTheme} = useTheme()
    const sections = ['projects', 'skills', 'contact']

    return (
        <header className="h-24 sm:h-32 container flex items-center justify-between">
            <Link href="/" className="link text-2xl font-bold">
                AR.
            </Link>
            <div className="flex items-center gap-4">
                {sections.map((section, index) => (
                    <a
                        role="button"
                        onClick={() => {

                        }}
                        className="link font-medium">
                        {section}
                    </a>
                ))}
                <button
                    onClick={() => {
                        setTheme(theme === 'light' ? 'dark' : 'light')
                    }}
                    className="text-primary mb-1">
                    {theme === 'dark' ? <MdOutlineWbSunny size={22}/> : <MdBrightness2 size={22}/>}
                </button>
            </div>
        </header>
    )
}


export default Header