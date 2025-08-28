import { Outlet, Routes, Route } from 'react-router';
import AdminNavbar from './AdminNavbar';
import AdminHome from './AdminHome';
import Users from './Users';

const AdminApp = () => {
	return (
        <div>
            <AdminNavbar />
            <Routes>
                <Route element={<><h3>Admin App</h3><Outlet /></>}>
                    <Route index element={<AdminHome /> } />
                    <Route path='users' element={<Users /> }/>
                </Route>
                <Route path='*' element={<h1>Not Found 404</h1>}/>
            </Routes>
        </div>
    );
};

export default AdminApp;