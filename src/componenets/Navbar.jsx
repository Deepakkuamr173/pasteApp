import React from 'react'
import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar

const Navbar = () => {
  return (

    <div className='homepage'>
      <NavLink
      to="/">
        Home
      </NavLink>
<br />
      <NavLink
      to="/pastes">
        pastes
      </NavLink>
 
    </div>
  );
};

export default Navbar;
