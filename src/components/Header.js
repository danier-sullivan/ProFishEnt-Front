import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
        <nav className='nav'>
            <Link to='/'>
                <div>Pro Fish Ent App</div>
            </Link>
        </nav>
    )
}

export default Header