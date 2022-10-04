import './header.css'
function Header() {

    return (

        <header>
            <div className='container'>
                <div className="headerWrapper">
                    <span className='groc'>Gro</span>
                    <div className='logo'>cr</div>
                    <input type='text' className='searchBar' placeholder='Search Groceries' />
                    <nav>
                        <a href='#' className='navItem'>Login</a>
                        <a href='#' className='navItem'>SignUp</a>
                        <a href='#' className='navItem'>&#128722;Cart</a>
                    </nav>
                </div>
            </div>
        </header>

    )

}
export default Header;