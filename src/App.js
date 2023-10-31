import Header from "./components/header";
import NavColumn from "./components/navcolumn";
import Dashboard from "./components/dashboard";
const App = ({ ...props }) => {
  return (
    <div className='app-container'>
      <Header />
      <div className='page-container'>
        <NavColumn />
        <Dashboard />
      </div>
    </div>
  );
};
export default App;
