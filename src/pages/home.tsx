const NavBar = () =>
{
    return(
    <>
        <header>
            <h2><a href="/events" className="logo">Event Manager</a></h2>
            <div className="navigation">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/events">Events</a>
                <a href="/login">Login</a>
                <a href="/signup">Sign Up</a>
                <a href="/adminlogin">Admin Login</a>
            </div>
        </header>
    </>
    );
}
const home = () => {
  return (
    <div>
        <NavBar/>
    </div>
  )
}

export default home;
