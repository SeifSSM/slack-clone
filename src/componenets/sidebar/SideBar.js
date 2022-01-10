import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from '@mui/icons-material/Add';
import SideBarOptions from "./sidebarOptions/SideBarOptions";
import { SidebarContainer, SidebarHeader, SidebarInfo } from "./SideBar.styles";

function SideBar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>NOVA LABS HQ</h2>
          <h3>
            <FiberManualRecordIcon />
            Seif Sallam
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <SideBarOptions Icon={InsertCommentIcon} title="Threads" />
      <SideBarOptions Icon={InboxIcon} title="Mentions & reactions" />
      <SideBarOptions Icon={DraftsIcon} title="Saved items" />
      <SideBarOptions Icon={BookmarkBorderIcon} title="Channel browser" />
      <SideBarOptions Icon={PeopleAltIcon} title="People & user groups" />
      <SideBarOptions Icon={AppsIcon} title="Apps" />
      <SideBarOptions Icon={FileCopyIcon} title="File browser" />
      <SideBarOptions Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SideBarOptions Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SideBarOptions Icon={AddIcon} addChannel0ption title="Add Channel" />
    </SidebarContainer>
  );
}

export default SideBar;
