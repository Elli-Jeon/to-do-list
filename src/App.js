import React, { useState, createContext } from "react";
import { ThemeProvider } from 'styled-components';
// ThemeProvider : 반드시 theme 속성을 갖는 컴포넌트. theme 속성의 값으로 설정된 객체를 모든 하위 컴포넌트들의 props로 전달 (styled-components의 context라고 보면 될 듯)
import { darkTheme, lightTheme } from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Container from "./components/Container";


// context도 컴포넌트이니깐 컴포넌트 바깥에서 정의해서. 
export const MyContext = createContext("H");

const App = () => {
    const [ theme, setTheme ] = useState(lightTheme);
    const [ currentThemeText, setCurrentThemeText ] = useState("Light Theme");
    
    // 각 theme은 state로 관리
    const switchTheme = () => {
        const nextTheme = theme === lightTheme ? darkTheme : lightTheme;
        setTheme(nextTheme);
        const nextThemeText = theme === lightTheme ? "Dark Theme" : "Light Theme";
        setCurrentThemeText(nextThemeText);
    };


    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MyContext.Provider value = "Elli is Here!">
                <Header switchTheme={switchTheme} />
                <Container currentThemeText={currentThemeText} />
            </ MyContext.Provider>
        </ThemeProvider>
    )
}

export default App;
