import { useState, useEffect } from "react"
import {FiSun} from "react-icons/fi"
import {BsMoon} from "react-icons/bs"

const ThemeSwitchButton = () => {
    const [isChecked, setIsChecked] = useState(true)
    const [themeValue, setThemeValue] = useState("light")
    const handleChange = () => {
        setIsChecked(prev => !prev)
        if(isChecked === true) {
            setThemeValue("dark")
        }else{
            setThemeValue("light")
        }
    }
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", themeValue)
      }, [themeValue])
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
