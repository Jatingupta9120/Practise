import { BrowserRouter, Route, Routes } from "react-router-dom"
export default function App4() {

    return (

        <BrowserRouter>
            <Routes>

                <Route path='/' element={<LandingPage />} />
                <Route path='/game' element={<GamePage />} />
                <Route path='/news' element={<NewsPage />} />

            </Routes>
        </BrowserRouter>
    )
}
function LandingPage() {
    return (
        <>
            <h1>Hii I m Landing Page</h1>
        </>
    )
}
function GamePage() {
    return (
        <>
            <h1>Hii I m Game Page</h1>
        </>
    )
}
function NewsPage() {
    return (
        <>
            <h1>Hii I m News Page</h1>
        </>
    )
}