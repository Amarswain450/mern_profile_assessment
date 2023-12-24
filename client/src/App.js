import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import CreateForm from './pages/createForm/CreateForm';
import Profile from './pages/profile/Profile';
import EditForm from './pages/editForm/EditForm';
import { routerConfigurations } from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={routerConfigurations.home} element={<CreateForm />} />
          <Route path={routerConfigurations.profile} element={<Profile />} />
          <Route path={`${routerConfigurations.edit}/:id`} element={<EditForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
