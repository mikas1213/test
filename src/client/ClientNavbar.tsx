import { Link } from 'react-router';
import getEnvironmentConfig from '../utils';

const ClientNavbar = () => {
    const hostpath = getEnvironmentConfig();
    console.log('hostpath: ', hostpath);

	return (
		<nav>
			<ul
				style={{
					display: 'flex',
					gap: '10px',
				}}
			>
				{/* <li>
					<Link to={hostpath.adminUrl}>AdminApp</Link>
				</li> */}
				<li>
					<Link to='/'>Home</Link>
				</li>
                <li>
					<Link to='/rezervacija'>Rezervacija</Link>
				</li>
				<li>
					<Link to={hostpath.adminUrl}>Admin</Link>
				</li>
			</ul>
		</nav>
	);
};

export default ClientNavbar;