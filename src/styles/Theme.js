// 자주 사용하게 될 색상코드, 사이즈, 폰트 미디어 쿼리 등의 정보를 변수로 생성해 사용하면 일관적인 스타일 관리가 가능 

const margins = {
    sm : '.5rem',
    base : '1rem',
    lg : '2rem',
    xl : '3rem',
};

const paddings = {
    sm : '.5rem',
    base : '1rem',
    lg : '2rem',
    xl : '3rem',
};

const fonts = {
    family: {
        base: `'Noto Sans KR', sans-serif`,
        title: `'Merriweather', serif`,
    },
    size : {
        sm : '1.4rem',
        base : '1.6rem',
        lg : '2rem',
        xl : '2.5rem',
        title : '6rem',
    }, 
    weight : {
        light : 100,
        normal : 400,
        bold : 700,
    }
};

const colors = {
    red: "#ff4d4d",
    yellow: "#ffff4d",
    blue: "#0099ff",
};

const size = {
    mobile : '425px',
    tablet : '768px',
    desktop : '1440px',
};

const device = {
    mobile : `@media only screen and (max-width : ${size.mobile})`,
    tablet : `@media only screen and (max-width : ${size.tablet})`,
    desktop : `@media only screen and (max-width : ${size.desktop})`
};

// 테마에 따라 다른 값을 갖는 색상 값
const lightThemeColors = {
    ...colors,
    primary : '#333',
    secondary : '#fff',
    tertiary : '#808080',
};

const darkThemeColors = {
    ...colors,
    primary: "#fff",
    secondary: "#333",
    tertiary: "#d4d0c4",
};

// 테마와 관련없이 공통으로 사용되는 변수
const defaultTheme = {
    margins,
    paddings,
    fonts,
    device,
};

// 각 테마는 공통 변수와 함께, 각기 다른 색상 값들을 갖는다
export const darkTheme = {
    ...defaultTheme,
    colors : darkThemeColors,
}

export const lightTheme = {
    ...defaultTheme,
    colors : lightThemeColors,
}