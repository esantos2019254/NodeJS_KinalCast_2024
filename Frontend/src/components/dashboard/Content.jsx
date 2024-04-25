import { Route, Routes } from "react-router-dom";
import { Channel } from "../channel/Channels";
import { Settings } from "../settings/Settings";


export const Content = ({ channels }) => {
    return (
        <div className="content-container">
            <Routes>
                <Route path="settings" element={<Settings/>}/>
                <Route path="channels" element={<Channel channels={channels}/>}/>
            </Routes>
        </div>
    )
}