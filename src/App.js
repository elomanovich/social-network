import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogsData={props.state.dialogsData} messagesData={props.state.messagesData} />}/>
                    <Route path='/profile' render={() => <Profile postData={props.state.postData} />}/>
                    <Route path='/news' render={() => <News />}/>
                </div>
            </div>
        </BrowserRouter>
    )
};


export default App;
