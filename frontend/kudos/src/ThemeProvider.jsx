import { useContext, useState, createContext } from "react"
const ThemeContext = createContext(null);
const TheemeProvider = ({children}) =>{
    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light")
    }
    return (
       <ThemeContext.Provider value={{theme, toggleTheme}}>
          <div className={theme}>{children}</div>
       </ThemeContext.Provider>

    )

};
export {TheemeProvider, ThemeContext};
