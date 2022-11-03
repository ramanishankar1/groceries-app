import './header.css'
import Product from '../Products/product';
function Header(props) {


    return (

        <header>
            {/* <div className='container'> */}
                <div className="headerWrapper">
                    <span className='groc'>Gro</span>
                    <div className='logo'>cr</div>
                    <input type='text' className='searchBar' placeholder='Search Groceries' />
                    <nav>
                        <a href='#' className='navItem'>Login</a>
                        <a href='#' className='navItem'>SignUp</a>
                        <a href='#' className='navItem'>&#128722;
                        <span className='cartCount'>5</span>
                        </a>
                    </nav>
                </div>
            {/* </div> */}
        </header>

    )

}
export default Header;