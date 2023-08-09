import propTypes from 'prop-types'
import './header.scss'
import { MdDarkMode , MdLightMode } from "react-icons/md";

export const Header = (props) => {
    const {theme,setTheme} = props

    const ToggleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }
    return (
        <header>
            <div className="logo">
                <span>Task Management</span>
            </div>
            <div className="theme-container">
                <span>{theme === "light" ? "Light Mode" :  "Dark Mode"}</span>
                <span className="icon" onClick={ToggleTheme}>{theme === "light" ? <MdLightMode/> : <MdDarkMode/>}</span>
            </div>
        </header>
    )
}

Header.propTypes = {
    theme: propTypes.string.isRequired,
    setTheme: propTypes.func,
}
