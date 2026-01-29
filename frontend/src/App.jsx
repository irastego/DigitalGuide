import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProperty from './pages/AddProperty';
import GuestView from './pages/GuestView';

function App() {

 return (
     <Router>
       <div className="min-h-screen bg-gray-50">
         <nav className="bg-blue-600 p-4 text-white shadow-lg">
           <h1 className="text-xl font-bold">Digital Guide Admin</h1>
         </nav>

         <div className="container mx-auto p-4">
           <Routes>
             <Route path="/" element={<div>Dashboard (U izradi)</div>} />
             <Route path="/add" element={<AddProperty />} />
             <Route path="/guide/:slug" element={<GuestView />} />
           </Routes>
         </div>
       </div>
     </Router>
   );
}

export default App
