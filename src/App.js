import React from 'react'
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'

// CSS
import GlobalStyle from './styles/GlobalStyle';

// Components
import Header from './components/Header';
import MainTodo from './components/MainTodo';
import MainCalendar from "./components/MainCalendar";
import GlobalState from './context/GlobalState';


const App = () => {
   
    return (
        <div>
                <GlobalState >
                    <GlobalStyle />
                    <Router>
                        <Header />
                        <Route path="/" exact component={MainTodo} />
                        <Route path="/calendar" exact component={MainCalendar} />
                    </Router>
                </GlobalState>
        </div>
    )
}

export default App;

