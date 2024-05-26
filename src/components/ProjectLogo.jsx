import React from 'react';
import { NavLink } from 'react-router-dom';

function ProjectLogo() {
  return (
    <>
      <div className='uswapp-logo'>
        {/* <NavLink to="/"> */}
          <img src="/assets/images/uswapp-logo.svg" alt="uSwapp-logo" />
        {/* </NavLink> */}
      </div>
    </>
  )
}

export default ProjectLogo;