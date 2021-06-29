import { NavLink } from "react-router-dom";

export default function Navbar(){
  const user = false;

  return (
    <section className="navbar">
      {
        user ? 
        <NavLink>
          <button className="navbar__btn">exit</button> 
        </NavLink>
        : 
          <button className="navbar__btn">login</button>
        
      }
      
      
    </section>
  )
}