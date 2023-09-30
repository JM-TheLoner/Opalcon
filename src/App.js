import Home from './Home';
import About from './About';
import Services from './Services';
import Login from './Login';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';
import Forgot from './Forgot';
import User from './usercomponents/User';
import Users from './usercomponents/Users';
import Employees from './usercomponents/Employees';
import UserServices from './usercomponents/UserServices';
import GetOneService from './GetOneService';
import GetEmployees from './usercomponents/GetEmployees';
import GetUserService from './usercomponents/GetUserService';
import GetUser from './usercomponents/GetUser';
import NewService from './usercomponents/NewService';
import EditService from './usercomponents/EditService';
import EditEmployee from './usercomponents/EditEmployee';
import CreateEmployee from './usercomponents/CreateEmployee';
import CreateUser from './usercomponents/CreateUser';
import EditUser from './usercomponents/EditUser';
import Pagenotfound from './pagenotfound';
import { Route, Routes } from 'react-router-dom'
import { DataProvider } from './context/DataContext';
import img from './bkgimg.jpg'

function App() {

  const BASE_URL = "https://opalconbackend.glitch.me"

  return (
    <div className="App" style={{
      backgroundImage:`url(${img})`,
      backgroundSize:'cover'
      }}>
      <DataProvider>
        <Header title={'Opalcon Ltd.'}/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/login" element={<Login url={BASE_URL}/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/services" element={<Services url={BASE_URL}/>}></Route>
          <Route exact path="/services/:id" element={<GetOneService/>}></Route>
          <Route exact path="/service" element={<UserServices url={BASE_URL}/>}></Route>
          <Route exact path="/service/create" element={<NewService url={BASE_URL}/>}></Route>
          <Route exact path="/service/edit/:id" element={<EditService url={BASE_URL}/>}></Route>
          <Route exact path="/service/:id" element={<GetUserService url={BASE_URL}/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path='/forgot' element={<Forgot/>}></Route>
          <Route exact path="/employees" element={<Employees url={BASE_URL}/>}></Route>
          <Route exact path="/employees/:id" element={<GetEmployees url={BASE_URL}/>}></Route>
          <Route exact path="/employees/edit/:id" element={<EditEmployee url={BASE_URL}/>}></Route>
          <Route exact path="/employees/create" element={<CreateEmployee url={BASE_URL}/>}></Route>
          <Route exact path="/users" element={<Users url={BASE_URL}/>}></Route>
          <Route exact path="/users/:id" element={<GetUser url={BASE_URL}/>}></Route>
          <Route exact path="/users/create" element={<CreateUser url={BASE_URL}/>}></Route>
          <Route exact path="/users/edit/:id" element={<EditUser url={BASE_URL}/>}></Route>
          <Route exact path='/user' element={<User url={BASE_URL}/>}></Route>
          <Route exact path='/*' element={<Pagenotfound/>}></Route>
        </Routes>
        <Footer/>
      </DataProvider>
    </div>
  );
}

export default App;
