import { Link } from 'react-router';
import getEnvironmentConfig from '../utils';

const AdminNavbar = () => {
    const hostpath = getEnvironmentConfig();
    console.log('hostpath: ', hostpath);
    
    return (
        <nav>
            <ul style={{
                display: 'flex',
                gap: '10px'
            }}>
                <li>
                    <Link to={hostpath.homeUrl}>ClientApp</Link>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='users'>Users</Link>
                </li>
            </ul>
        </nav>
    );
};

export default AdminNavbar;