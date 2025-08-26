import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
const isAdmin = window.location.hostname.startsWith('admin')

const AdminApp = lazy(() => import('./components/admin/AdminApp'));
const UserApp = lazy(() => import('./components/user/UserApp'));


createRoot(document.getElementById('root')!).render(
	<StrictMode>
        <Suspense fallback={<h1>Loading...</h1>}>
		    { isAdmin ? <AdminApp /> : <UserApp /> }
        </Suspense>
	</StrictMode>
);

