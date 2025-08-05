import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const { cart } =useSelector(state=>state.shopping)

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            Webinoo.ir
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={data=>data.isActive? "nav-link active":"nav-link"} aria-current="page" to="/"> Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={data=>data.isActive? "nav-link active":"nav-link"} to="/products"> Products</NavLink>
              </li>
            </ul>
            <div className="ms-auto me-2" >
               <NavLink className={data=>data.isActive? "nav-link active":"nav-link"} to="/cart">
                    <span className="badge rounded-pill text-bg-primary">{cart.length}</span>
                    <i className="bi bi-basket-fill fs-3"></i>
                </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
