/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function Contatti ()  {


const [nomeError,setNomeError]= useState('')
const [cognomeError,setCognomeError]= useState('')
const [aziendaError,setAziendaError]= useState('')
const [emailError,setEmailError]= useState('')
const [commentoError,setCommentoError]= useState('')
const contact = (e:any)=>{
    e.preventDefault()
    const nome = (document.getElementById('nome') as HTMLInputElement).value
    const cognome = (document.getElementById('cognome') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const azienda = (document.getElementById('azienda') as HTMLInputElement).value
    const testo= (document.getElementById('commento') as HTMLInputElement).value
    const emailRegex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
    if(nome==''||nome==undefined||nome==null){
        setNomeError("Inserisci un valore.")
    }else{
        setNomeError("")
    }
    if(cognome==''||cognome==undefined||cognome==null){
        setCognomeError("Inserisci un valore.")
    }else{
        setCognomeError("")
    }
    if(email==''||email==undefined||email==null){
        setEmailError("Inserisci un valore.")
    }else if(!emailRegex.test(email)){
        setEmailError("Inserisci un valore tipo 'mario@rossi.com'.")
    }else{
        setEmailError("")
    }
    if(testo==''||testo==undefined||testo==null){
        setCommentoError("Inserisci un valore.")
    }else{
        setCommentoError("")
    }
    setAziendaError('')

  if(nomeError==''&&cognomeError==''&&emailError==''&&aziendaError==''&&commentoError==''&&nome&&cognome&&email&&testo){
console.log(azienda)
console.log(e.target)
emailjs.sendForm('service_l053f3n', 'template_v9ffrwa', e.target, 'cYGPn-yEQLuIO4Ad9')
      .then((result) => {
        console.log(result)
        toast.success("Email mandata correttamente")
      }, (error) => {
        toast.error(error.text.toString())
          console.log(error.text);
      });
  }
}

return (
    <div className="container py-5">
<div className="row py-5">
    <div className="col-md-12 py-5">
        <h1>Entriamo in contatto!</h1>
        <p>Completa il form qui sotto per mandarmi una mail. Risponderò il prima possibile.</p>
    </div>
    <div className="col-md-12">
        <form  className="w-75 m-auto" onSubmit={(e)=>contact(e)}>
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="" className="py-3">Nome</label>
            <input type="text" className="form-control" placeholder="Inserisci il nome" name="nome" id="nome"/>
            {nomeError!=''&&<p className="text-danger">{nomeError}</p>}
                </div>
                <div className="col-md-6">
            <label htmlFor="" className="py-3">Cognome</label>
            <input type="text" className="form-control" placeholder="Inserisci il cognome" name="cognome" id="cognome"/>
            {cognomeError!=''&&<p className="text-danger">{cognomeError}</p>}
                </div>
                 <div className="col-md-6">
                 <label htmlFor="" className="py-3">Nome azienda (opzionale)</label>
            <input type="text" className="form-control" placeholder="Inserisci il nome dell'azienda" name="azienda" id="azienda"/>
            {aziendaError!=''&&<p className="text-danger">{aziendaError}</p>}
            </div>
            <div className="col-md-6">
            <label htmlFor="" className="py-3">Email</label>
            <input type="email" className="form-control" placeholder="Inserisci l'email" name="email" id="email"/>
            {emailError!=''&&<p className="text-danger">{emailError}</p>}
            </div>
            <div className="col-md-12">
                <label htmlFor="" className="py-3">Testo</label>
                <textarea className="form-control" placeholder="Lascia un commento" name="commento" id="commento">
                </textarea>
                {commentoError!=''&&<p className="text-danger">{commentoError}</p>}
            </div>
            </div>
<button className="shadow-none btn py-5" type="submit">Invia</button>
        </form>
    </div>
</div>
<ToastContainer />
    </div>
)
}
export default Contatti;