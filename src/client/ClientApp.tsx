import { Outlet, Routes, Route } from 'react-router';
import ClientNavbar from './ClientNavbar';
import ClientHome from './ClientHome';
import Rezervacija from './Rezervacija';

const ClientApp = () => {
	return (
            <div>
                <ClientNavbar />

                <Routes>
                    <Route element={<><h1>Client App</h1><Outlet /></>}>
                        <Route index element={<ClientHome />} />
                        <Route path='rezervacija' element={<Rezervacija /> } />
                    </Route>
                    <Route path='*' element={<h1>Not Found 404</h1>}/>
                </Routes>

            </div>
        );
};

export default ClientApp;