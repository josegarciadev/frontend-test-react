import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className="d-flex flex-column justify-content-between text-center clearfix vh-100 shadow">
        <div>
          <h3 className="py-5" style={{color:'#d7c5ff'}}>Test</h3>
          <ul className="nav flex-column p-0 m-0">
            <Link className="text-decoration-none " style={{background:'#1b1833'}} to="/">
              <li className="nav-item my-3">Inicio</li>
            </Link>
            <Link className="text-decoration-none" to="/category">
              <li className="nav-item my-3 hover">Categorias</li>
            </Link>
            <Link className="text-decoration-none p-0" to="/products">
              <li className="nav-item my-3">Productos</li>
            </Link>
            
          </ul>
        </div>
        <h5>By Jose Garcia</h5>
      </div>
    </aside>
  );
};

export default SideBar;
