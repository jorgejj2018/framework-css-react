

const NavBar = () =>{
    return(
        <nav className="navbar navbar-ligth bg-dark">
        <div className="container">
            <a className="navbar-brand" href="#">
            <img  className="rounded-circle"src="https://i.ibb.co/kK4pxc6/logo-decencia-Figma.png" alt="" width="70" height="50"/>
            </a>
        </div>
        </nav>
    )
}
export default function Bootstrap(){
    return(
        <>
        <h2>Bootstrap</h2>
        <NavBar/>
        </>
    )
}