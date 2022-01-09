import { createContext, useState } from "react";

const themes = {
    dark:{
        backgroundColor:'white',
        color:'black',
        transition:' transform 2s'
    },
    light:{
        // backgroundColor:'white',
        // color:'black',
        backgroundColor:'black',
        color:'white',
        transition:' transform 2s'
    }
}

export const ThemeContext = createContext();

export const ThemeProvider = ({ children })=>{
    const [isDark, setIsDark] = useState(false);
    const theme = isDark?themes.dark:themes.light;
    const toggleTheme = ()=>{
        setIsDark(!isDark)
    }
   return( <ThemeContext.Provider value={[{theme ,isDark},toggleTheme]}>
    {children}
</ThemeContext.Provider>)
}