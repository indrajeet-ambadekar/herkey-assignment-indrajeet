import { Text } from "elysium-cloud-ui";
import ClientLogo from "../assets/images/Image-271.png";
import { NAV_ITEMS } from "../configs";
const NavColumn = ({ ...props }) => {
  return (
    <div className='nav-column hidden-xs'>
      <div className='nav-cntnr'>
        <div className='client-card'>
          <img src={ClientLogo} alt='Client Logo' className='client-logo' />{" "}
          <Text type='h1'>Hello,</Text>
          <Text type='h5' className='client-name'>
            Hewlett Packard E...
            <i className='fa fa-chevron-right' />
          </Text>
        </div>
        <div className='nav-list-wrapper'>
          {NAV_ITEMS.map((nav, i) => (
            <div
              key={i}
              className={`nav-row ${
                NAV_ITEMS.length === i + 1 ? "active" : ""
              }`}
            >
              <img src={nav.icon} alt={nav.title} />
              {nav.title}
            </div>
          ))}
        </div>
      </div>
      <div className='nav-footer'>
        <Text type='b2'>Contact Us</Text>
        <Text type='caption'>Email: admin@jobsforher.com</Text>
      </div>
    </div>
  );
};
export default NavColumn;
