import { AppHeader, Text, Avatar } from "elysium-cloud-ui";
import CompanyLogo from "..//assets/images/JFH_Start-Restart-Rise.png";
import { NAV_ITEMS } from "../configs";
const Header = ({ ...props }) => (
  <AppHeader
    className='app-header'
    logo={
      <div className='logo-cntnr'>
        <img src={CompanyLogo} alt='JobsForHer' />
        <i className='fas fa-bars hidden-xs' />
      </div>
    }
    secondaryIcon={null}
    onIconClick={() => {
      console.log("Header Icon Clicked");
    }}
    profileIcon={
      <Avatar size='L'>
        <div className='user-avatar'></div>
      </Avatar>
    }
  >
    <div className='nav-cntnr hidden-xs'>
      <Text type='h4'>Dashboard</Text>
      <Text type='h4'>Packages</Text>
      <Text type='h4'>Events</Text>
      <Text type='h4'>Blogs</Text>
    </div>
    <div className='nav-cntnr hidden-md'>
      {NAV_ITEMS.map((nav, i) => (
        <Text
          key={i}
          type='h4'
          className={`nav-row ${NAV_ITEMS.length === i + 1 ? "active" : ""}`}
        >
          <img src={nav.icon} alt={nav.title} /> {nav.title}
        </Text>
      ))}
    </div>
  </AppHeader>
);
export default Header;
