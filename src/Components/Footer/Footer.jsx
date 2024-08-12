import { Link, NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="d-flex justify-container-around">
                        <div>
                            <Link class="navbar-brand" to="#"><img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721606400&semt=sph" alt="" /></Link>
                        </div>
                        <div>
                            <NavLink to="/" className={({ isActive }) => {
                                { isActive ? "Red" : "gray" }

                            }}>
                                Home
                            </NavLink>
                            <NavLink to="/about" className={({ isActive }) => {
                                { isActive ? "Red" : "gray" }

                            }}>
                                About
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}