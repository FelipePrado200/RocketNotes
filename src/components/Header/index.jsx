import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'
import { useAuth } from '../../hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { api } from '../../services/api';
export function Header() {

    const {SignOut , user} = useAuth();
    const navigation = useNavigate();

    function handleSignOut(){
      navigation("/")
      SignOut();
    }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder;

  return (  
    <Container>
      <Profile to="/profile">
        <img
          src={avatarUrl}
          alt={user.name}
        />

        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}