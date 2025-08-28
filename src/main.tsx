import './styles.css';
import { lazy, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

const AdminApp = lazy(() => import('./admin'));
const ClientApp = lazy(() => import('./client'));

const hostname = window.location.hostname;
const isAdmin = hostname.startsWith('admin.');

createRoot(document.getElementById('root')!).render(
	<StrictMode>
        <BrowserRouter>
            {isAdmin ? <AdminApp /> : <ClientApp />}
        </BrowserRouter>
	</StrictMode>
);
