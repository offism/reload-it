import NavbarMenu from './navbar/Navbar.jsx'
import Main from './main/Main.jsx';
import Course from './courses/Course.jsx';
import Footer from './Footer/Footer.jsx';
import EachCourse from './eachCourse/EachCourse.jsx';
function App() {
  return (
    <div className="App">
     <NavbarMenu/>
     <Main/>
     <Course/>
     <EachCourse/>
     <Footer/>
    </div>
  );
}

export default App;
