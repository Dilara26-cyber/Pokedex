import { useState, useEffect } from "react"
import {FiSun} from "react-icons/fi"
import {BsMoon} from "react-icons/bs"
const theme = JSON.parse(localStorage.getItem("theme") || "light")
const checked = JSON.parse(localStorage.getItem("checked") || true)
const ThemeSwitchButton = () => {
    const [isChecked, setIsChecked] = useState(checked)
    const [themeValue, setThemeValue] = useState(theme)
    const handleChange = () => {
        setIsChecked(prev => !prev)
        if(isChecked === true) {
            setThemeValue("dark")
            document.documentElement.setAttribute("data-theme", themeValue)
        }else{
            setThemeValue("light")
            document.documentElement.setAttribute("data-theme", themeValue)
        }
    }
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(themeValue))
        localStorage.setItem("checked", JSON.stringify(isChecked))
        document.documentElement.setAttribute("data-theme", themeValue)
      }, [isChecked, themeValue])
    return ( 
        <div className="theme-switch-container">
            <span id="toggle-icon">
                <span className="toggle-text">{themeValue === "light" ? "Light Mode" : "Dark Mode"}</span>
                {themeValue === "light" ? <FiSun/> : <BsMoon/>}
            </span>
            <label className="theme-switch">
                <input type="checkbox" onChange={handleChange} checked={isChecked}/>
                <div className="slider round"></div>
            </label>
        </div>
    )
}

export default ThemeSwitchButton
