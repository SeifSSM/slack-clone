import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import {HeaderContainer,HeaderLeft,HeaderAvatar,HeaderSearch,HeaderRight} from './Header.styles';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
function Header() {
  const [user] = useAuthState(auth);
  console.log('user',user);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          fontSize="large"
          src={user?.photoURL}
          alt={user?.displayName}
          onClick={() => auth.signOut()}
        />
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search Slack" />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutlineOutlinedIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

