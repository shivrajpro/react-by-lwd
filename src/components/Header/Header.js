import { Link, NavLink } from 'react-router-dom';

export function Header(props) {
    return (
        <div className='flex justify-between bg-purple-400 px-3 py-1'>
            <div>
                <Link
                    to={{
                        pathname: '/',
                        hash: '#leelawebdev',
                        search: '?channel=leelawebdev',
                        state: { dashboard: true },
                    }}
                >
                    React Router
                </Link>
            </div>
            <div>
                <ul className='flex'>
                    <li className='mr-2'>
                        <NavLink to='/' exact
                        activeClassName='underline decoration-sky-500'>
                            Home
                        </NavLink>
                    </li>
                    <li className='mr-2'>
                        <NavLink to='/about' 
                        activeClassName='underline decoration-sky-500'>
                            About
                        </NavLink>
                    </li>
                    <li className='mr-2'>
                        <NavLink
                            to='/contact'
                            activeClassName='underline decoration-sky-500'
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li className='mr-2'>
                        <NavLink to='/posts/12' 
                        activeClassName='underline decoration-sky-500'>
                            Posts
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}