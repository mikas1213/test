import { Link } from 'react-router';
export const NavBar = () => {
    
	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>Pradžia</Link>
				</li>
				<li>
					<Link to='/admin'>Admin</Link>
				</li>
				<li>
					<Link to='/home'>HOme</Link>
				</li>
                <li>
					<Link to='/home/about'>About</Link>
				</li>
			</ul>
		</nav>
	);
};
