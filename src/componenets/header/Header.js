import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import {HeaderContainer,HeaderLeft,HeaderAvatar,HeaderSearch,HeaderRight} from './Header.styles';
function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          fontSize="large"
          // TODO : Add onClick
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

