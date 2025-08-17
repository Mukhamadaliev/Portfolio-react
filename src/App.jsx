import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Sagbar from './components/Sagbar/Sagbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import NoteFound from './components/notefound/NoteFound';

const App = () => {
  const location = useLocation();

  // Ruxsat berilgan sahifalar
  const validPaths = ["/", "/about", "/skills", "/projects", "/contact", "/Sagbar"];

  // Agar path ruxsat berilganlardan bo‘lmasa -> Sidebar chiqmasin
  const hideSidebar = !validPaths.includes(location.pathname);

  return (
    <div>
      {!hideSidebar && <Sagbar />}
      <main>
        <div className="router">
          <Routes>
            <Route path="/Sagbar" element={<Sagbar />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoteFound />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;



// import { Routes, Route } from 'react-router-dom';
// import './App.css';

// import Sagbar from './components/Sagbar/Sagbar';
// import Home from './components/Home/Home';
// import About from './components/About/About';
// import Skills from './components/Skills/Skills';
// import Projects from './components/Projects/Projects';
// import Contact from './components/Contact/Contact';
// import NoteFound from './components/notefound/NoteFound';

// // Layout komponenti -> Sagbar + asosiy content
// const Layout = ({ children }) => {
//   return (
//     <div>
//       <Sagbar />
//       <main>
//         <div className="router">{children}</div>
//       </main>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Routes>
//       {/* Sagbar bo‘ladigan sahifalar */}
//       <Route
//         path="/"
//         element={
//           <Layout>
//             <Home />
//           </Layout>
//         }
//       />
//       <Route
//         path="/about"
//         element={
//           <Layout>
//             <About />
//           </Layout>
//         }
//       />
//       <Route
//         path="/skills"
//         element={
//           <Layout>
//             <Skills />
//           </Layout>
//         }
//       />
//       <Route
//         path="/projects"
//         element={
//           <Layout>
//             <Projects />
//           </Layout>
//         }
//       />
//       <Route
//         path="/contact"
//         element={
//           <Layout>
//             <Contact />
//           </Layout>
//         }
//       />

//       {/* 404 sahifa -> Sagbar chiqmaydi */}
//       <Route path="*" element={<NoteFound />} />
//     </Routes>
//   );
// };

// export default App;
