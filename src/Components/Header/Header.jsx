import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="container position-fixed top-0 w-100">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid d-flex justify-content-between">

                    <div>
                        <Link className="navbar-brand" to="#"><img style={{ width: "70px ", height: "40px" }} src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png" alt="" /></Link>
                    </div>
                    <div className=" d-flex justify-content-between">

                        <NavLink to="/" className={({ isActive }) => (`${isActive ? 'text-danger' : 'text-secondary'} 
                            me-4`)}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => (`${isActive ? 'text-danger' : 'text-secondary'} 
                            me-4`)}>
                            About
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => (`${isActive ? 'text-danger' : 'text-secondary'} 
                            me-4`)}>
                            Contact
                        </NavLink>
                    </div>

                </div>
            </nav>
        </div>
    )
}