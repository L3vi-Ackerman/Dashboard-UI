import '../App.css'
export function NavBar(){
    const navLinksList = [
        'Home',
        'About',
        'Services',
        'Contact Us',
    ]

    const navLinksItem = navLinksList.map(item => <li> <a href="#">{item}</a></li>);
    let isLoggedIn = true

    return (<>
        <div className='navbar flex '>
            <div className='logo '>
                <h1>Your Logo Here</h1>
            </div>
            <div className='nav-links '>
                    
                <ul>
                    {navLinksItem}
                    {isLoggedIn?(<li> <a href="#">Logout</a></li>):
                    (<li> <a href="#">Login</a></li>)}
                </ul>

            </div>
        </div>
    </>)
}