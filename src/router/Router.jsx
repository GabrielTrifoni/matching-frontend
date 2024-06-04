import { Home } from "../pages/Home"
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import ForgotPassword from "../pages/ForgotPassword"
import Extensao from "../pages/Extensao"
import Noticias from "../pages/Noticias"
import NoticiaDetails from "../pages/NoticiaDetails"
import ProjDisponiveis from "../pages/ProjDisponiveis"
import ProjDispDetails from "../pages/ProjDispDetails"
import ProjEmAndamento from "../pages/ProjEmAndamento"
import ProjAndDetails from "../pages/ProjAndDetails"
import ProjConcluidos from "../pages/ProjConcluidos"
import ProjConcDetails from "../pages/ProjConcDetails"
import Doacao from "../pages/Doacao"
import Perfil from "../pages/Perfil"
import MeusProjetos from "../pages/MeusProjetos"
import ProporProjeto from "../pages/ProporProjeto"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { UserProvider } from "../components/UserContext"

export const Router = () => {
    const Layout = () => {
        return (
            <UserProvider>
                <Header />
                <Outlet />
                <Footer />
            </UserProvider>
        )
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/extensao" element={<Extensao />} />
                    <Route path="/noticias" element={<Noticias />} />
                    <Route path="/noticias/:id" element={<NoticiaDetails />} />
                    <Route path="/projetos-disponiveis" element={<ProjDisponiveis />} />
                    <Route path="/projetos-disponiveis/:id" element={<ProjDispDetails />} />
                    <Route path="/projetos-em-andamento" element={<ProjEmAndamento />} />
                    <Route path="/projetos-em-andamento/:id" element={<ProjAndDetails />} />
                    <Route path="/projetos-concluidos" element={<ProjConcluidos />} />
                    <Route path="/projetos-concluidos/:id" element={<ProjConcDetails />} />
                    <Route path="/doacao/:id" element={<Doacao />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/meus-projetos" element={<MeusProjetos />} />
                    <Route path="/propor-projeto" element={<ProporProjeto />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}