import React from 'react'
import { BiLogIn } from 'react-icons/bi'

const Navbar = () => {
  return (
    <>
      <nav className='navBar row text-white border-bottom border-warning border-5 shadow py-2 g-0'>
        <div className='col-12 col-lg-9 px-3'><img src="eci-logo.png" alt="" className="img-fluid"/></div>
        <div className='col-12 col-lg-3 text-end pe-3'>
          <a className="link-light text-decoration-none h2" data-bs-toggle="offcanvas" href="#offcanvas" role="button" aria-controls="offcanvas">
            <BiLogIn />
          </a>
        </div>
      </nav>
      <div className="bg-saffron bg-opacity-50 p-2 text-center text-light">
        <span>
          <span className="fw-bold">Disclaimer:</span> ECI is displaying the information as being filled in the system by the Returning Officers from their respective Counting Centres.The final data for each AC/PC will be shared in Form-20.
        </span>
      </div>
    </>
  )
}

export default Navbar