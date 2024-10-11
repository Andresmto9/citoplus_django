import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/login/Login"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
