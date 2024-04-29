import React from "react"
import { Routes, Route } from "react-router-dom";
import { Signup, LandingPage,UserPage, Catagori,Manage,Selectmusic} from "./index";

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/UserPage" element={<UserPage />} />
                <Route path="/Manage" element={<Manage />}/>
                <Route path="/Selectmusic" element={<Selectmusic />}/>
                <Route path="/Catagori" element={<Catagori />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    )
}

export default Main;