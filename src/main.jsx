import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "@fontsource/dm-sans";
import './index.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import Extensao from './pages/Extensao.jsx';
import Noticias from './pages/Noticias.jsx';
import ProjDisponiveis from './pages/ProjDisponiveis.jsx';
import ProjEmAndamento from './pages/ProjEmAndamento.jsx';
import ProjConcluidos from './pages/ProjConcluidos.jsx';
import ProjDispDetails from './pages/ProjDispDetails.jsx';
import ProjConcDetails from './pages/ProjConcDetails.jsx';
import ProjAndDetails from './pages/ProjAndDetails.jsx'
import Doacao from './pages/Doacao.jsx';
import NoticiaDetails from './pages/NoticiaDetails.jsx';
import MeusProjetos from './pages/MeusProjetos.jsx';
import ProporProjeto from './pages/ProporProjeto.jsx';
import Perfil from './pages/Perfil.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "/extensao",
        element: <Extensao />
      },
      {
        path:"/noticias",
        element: <Noticias />
      },
      {
        path: "noticias/:id",
        element: <NoticiaDetails />
      },
      {
        path: "/projetos-disponiveis",
        element: <ProjDisponiveis />
      },
      {
        path: "/projetos-disponiveis/:id",
        element: <ProjDispDetails />
      },
      {
        path: "/projetos-em-andamento",
        element: <ProjEmAndamento />
      },
      {
        path: "/projetos-em-andamento/:id",
        element: <ProjAndDetails />
      },
      {
        path: "/projetos-concluidos",
        element: <ProjConcluidos />
      },
      {
        path: "/projetos-concluidos/:id",
        element: <ProjConcDetails />
      },
      {
        path: "/doacao/:id",
        element: <Doacao />
      },
      {
        path: "/meus-projetos",
        element: <MeusProjetos />
      },
      {
        path: "/propor-projeto",
        element: <ProporProjeto />
      },
      {
        path: "/perfil",
        element: <Perfil />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
