import { useState } from "react"
import { Link } from "react-router-dom"
/* eslint-disable @typescript-eslint/no-explicit-any */
function Nav() {
    const [drop,setDrop] = useState(false)
    const openDrop = (event:any)=>{
        event.preventDefault()
      //  const personalPadding= document.getElementsByClassName('personal-padding')[0]
        if(drop){
            setDrop(false)
          //  personalPadding.classList.remove('pb-5')
        }else{
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
 <button className="btn fs-3 text-white shadow-none py-0" onClick={(e)=>openDrop(e)}>
    {!drop&&<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg>}
{drop&&<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
</svg>}
   </button>
{drop&&<div className="drop-container">
    <div className="text-center drop">
    <button className="btn shadow-none text-white py-0"> <Link to={'/home'}>Home </Link></button><br />
    <button className="btn shadow-none text-white py-0"><Link to={'/contatti'}> Contatti </Link></button>
 </div>
</div>}
    </div>
</div>
        </div>
    )
}
    export default Nav;