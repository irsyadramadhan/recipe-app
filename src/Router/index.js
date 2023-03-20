import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AuthChecker from "../Components/AuthChecker";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Add from "../Pages/Add";
import Update from "../Pages/Update";
import Details from "../Pages/Details";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="home" replace="true" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<AuthChecker><Profile /></AuthChecker>} />
                <Route path="/add" element={<AuthChecker><Add /></AuthChecker>} />
                <Route path="/update/:id" element={<Update />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;