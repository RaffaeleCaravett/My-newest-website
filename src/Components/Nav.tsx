import { useState } from "react"
import { Link } from "react-router-dom"
/* eslint-disable @typescript-eslint/no-explicit-any */
function Nav() {
  const [drop, setDrop] = useState(false)
  const openDrop = (event: any) => {
    event.preventDefault()
    //  const personalPadding= document.getElementsByClassName('personal-padding')[0]
    if (drop) {
      setDrop(false)
      //  personalPadding.classList.remove('pb-5')
    } else {
      setDrop(true)
      //  personalPadding.classList.add('pb-5')
    }
  }
  return (
    <div className="p-5 bg-info text-white w-100">
      <div className="row">
        <div className="col-md-6 text-start p-1">
          <h2>Raffaele Caravetta</h2>
        </div>
        <div className="col-md-6 text-end personal-padding p-1">
          <button className="btn fs-1 text-white shadow-none py-0" onClick={(e) => openDrop(e)}>
            {!drop && <i className="bi bi-door-closed"></i>}
            {drop && <i className="bi bi-door-open"></i>}
          </button>
          {drop && <div className="drop-container">
            <div className="text-center drop">
              <button className="btn shadow-none text-white py-0"> <Link to={'/home'} onClick={(e) => setDrop(false)}>Home </Link></button><br />
              <button className="btn shadow-none text-white py-0"><Link to={'/contatti'} onClick={(e) => setDrop(false)}> Contatti </Link></button>
            </div>
          </div>}
        </div>
      </div>
    </div>
  )
}
export default Nav;