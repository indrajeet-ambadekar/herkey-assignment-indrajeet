import { AppHeader, Text, Avatar } from "elysium-cloud-ui";
import CompanyLogo from "..//assets/images/JFH_Start-Restart-Rise.png";
export default ({ ...props }) => (
  <AppHeader
    className="app-header"
    logo={CompanyLogo}
    secondaryIcon={null}
    onIconClick={() => {
      console.log("Header Icon Clicked");
    }}
    profileIcon={
      <Avatar size="L">
        <div className="user-avatar"></div>
      </Avatar>
    }
  >
    <div className="nav-cntnr">
      <Text type="h4">Dashboard</Text>
      <Text type="h4">Packages</Text>
      <Text type="h4">Events</Text>
      <Text type="h4">Blogs</Text>
    </div>
  </AppHeader>
);
