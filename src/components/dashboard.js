import { Text, FlatIcon, Column, RadioButton } from "elysium-cloud-ui";
import "../assets/styles/dashboard.scss";
import EditIcon from "../assets/images/edit.svg";
const Dashboard = ({ ...props }) => {
  return (
    <div className='dashboard-container'>
      <div className='nav-breadcumb'>
        Dashboard | <em className='blue-text'>My Account</em>
      </div>
      <div className='profile-wrapper'>
        <div className='wrapper-header'>
          <FlatIcon name='icon-arrow-left' size={22} />{" "}
          <Text type='b2'>My Account</Text>
        </div>
        <Column md={12}>
          <div className='content-wrapper'>
            <div className='title-bar'>
              My Profile <img src={EditIcon} alt='edit icon' />
            </div>
            <div className='content-section'>
              <Column md={3} xs={4}>
                <div className='user-profile-pic'>
                  <div className='edit-icon'>
                    <img src={EditIcon} alt='edit icon' />
                  </div>
                </div>
              </Column>
              <Column md={9} xs={8}>
                <div className='user-info'>
                  <Text type='h2'>Divya Chattejee</Text>
                  <Text type='b1' className='label'>
                    Designation
                  </Text>
                  <Text type='h5'>Assistant Manager - HR</Text>
                  <Text type='b1' className='label'>
                    Company Name
                  </Text>
                  <Text type='h5'>XXY Company Name</Text>
                </div>
              </Column>

              <Column md={12}>
                <div className='profile-description'>
                  <div className='label'>About Me</div>
                  Microsoft enables digital transformation for the era of an
                  intelligent cloud and an intelligent edge. Its mission is to
                  empower every person and every organization on the planet to
                  achieve more. Microsoft set up its India operations in 1990.
                  Microsoft in India offers its global cloud services from local
                  data centers to accelerate digital transformation across
                  Indian start-ups, businesses, and government agencies.
                </div>
              </Column>
            </div>
          </div>
        </Column>
        <Column md={6} xs={12}>
          <div className='content-wrapper'>
            <div className='title-bar'>
              Application Settings <img src={EditIcon} alt='edit icon' />
            </div>
            <div className='content-section'>
              <Column md={6} xs={12}>
                <div className='user-info'>
                  <Text type='b2' className='label'>
                    Full Name<sup>*</sup>
                  </Text>
                  <Text type='h5'>Divya Chatterjee</Text>
                </div>
              </Column>
              <Column md={6} xs={12}>
                <div className='user-info'>
                  <Text type='b2' className='label'>
                    Designation
                  </Text>
                  <Text type='h5'>Assistant Manager - HR</Text>
                </div>
              </Column>
              <Column md={6} xs={12}>
                <div className='user-info'>
                  <Text type='b2' className='label'>
                    Phone / Landline*
                  </Text>
                  <Text type='h5'>7012248563</Text>
                </div>
              </Column>
              <Column md={6} xs={12}>
                <div className='user-info'>
                  <Text type='b2' className='label'>
                    &nbsp;
                  </Text>
                  <Text type='h5' className='blue-text'>
                    Change Password
                  </Text>
                </div>
              </Column>
            </div>
          </div>
        </Column>
        <Column md={6} xs={12}>
          <div className='content-wrapper'>
            <div className='title-bar'>
              My Account Settings <img src={EditIcon} alt='edit icon' />
            </div>
            <div className='content-section'>
              <Column md={12}>
                <div className='user-info'>
                  <Text type='b2' className='label'>
                    Receive job applications via
                  </Text>
                  <Text type='h5'>
                    <RadioButton
                      name='fruit'
                      value='Apple'
                      label='Only on my dashboard'
                      onChange={(val) => {}}
                      checked={true}
                      className='radio-input'
                    />
                  </Text>
                  <Text type='h5'>
                    <RadioButton
                      name='fruit'
                      value='Apple'
                      label='Email and on my dashboard'
                      onChange={(val) => {}}
                      checked={true}
                      className='radio-input'
                    />
                  </Text>
                  <Text type='b2' className='label'>
                    <sup>*</sup>Please note, this setting will not impact your
                    old job postings
                  </Text>
                </div>
              </Column>
            </div>
          </div>
        </Column>
      </div>
    </div>
  );
};
export default Dashboard;
