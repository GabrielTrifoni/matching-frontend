import React, { useContext } from 'react';
import '../styles/Header.css'
import unespLogo from "../images/Logo_Unesp.svg"
import { FaRegUser } from "react-icons/fa";
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

export default function Header() {
  const { user, logout } = useContext(UserContext);

  return (
    <Navbar expand="lg" id="header">
      <Container>
        <Navbar.Brand className="nav-logo">
          <Nav.Link as={Link} to="/" className="nav-data">
            <img src={unespLogo} alt="unesp logo" />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/">Página Inicial</Nav.Link>
            <Nav.Link as={Link} to="/extensao">Extensão</Nav.Link>
            <NavDropdown
              title="Projetos"
              menuVariant="dark"
            >
              <NavDropdown.Item as={Link} to="/projetos-disponiveis">Disponíveis</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/projetos-em-andamento">Em andamento</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/projetos-concluidos">Concluídos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/noticias">Notícias</Nav.Link>
            {user ? (
              <>
                {user.role === 'ALUNO' ? (
                  <>
                    <NavDropdown title={user.nome} menuVariant='dark'>
                      <NavDropdown.Item as={Link} to="/perfil">Perfil</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/meus-projetos">Meus projetos</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/" onClick={logout}>Sair</NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <>
                    <NavDropdown title={user.nome} menuVariant='dark'>
                      <NavDropdown.Item as={Link} to="/perfil">Perfil</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/meus-projetos">Meus projetos</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/projetos-em-andamento">Propor projeto</NavDropdown.Item>
                      <NavDropdown.Item onClick={logout}>Sair</NavDropdown.Item>
                    </NavDropdown>
                  </>
                )}
              </>
            ) : (
              <Nav.Link as={Link} to="/login"><FaRegUser /> Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}