import { useState } from "react";

function Contatti ()  {


const [nomeError,setNomeError]= useState('')
const [cognomeError,setCognomeError]= useState('')
const [aziendaError,setAziendaError]= useState('')
const [emailError,setEmailError]= useState('')
const [commentoError,setCommentoError]= useState('')


return (
    <div className="container py-5">
<div className="row py-5">
    <div className="col-md-12 py-5">
        <h1>Entriamo in contatto!</h1>
        <p>Completa il form qui sotto per mandarmi una mail. Risponderò il prima possibile.</p>
    </div>
    <div className="col-md-12">
        <form action="" className="w-75 m-auto">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="" className="py-3">Nome</label>
            <input type="text" className="form-control" placeholder="Inserisci il nome" id="nome"/>
            {nomeError!=''&&<p className="text-danger"></p>}
                </div>
                <div className="col-md-6">
            <label htmlFor="" className="py-3">Cognome</label>
            <input type="text" className="form-control" placeholder="Inserisci il cognome" id="cognome"/>
            {cognomeError!=''&&<p className="text-danger"></p>}
                </div>
                 <div className="col-md-6">
                 <label htmlFor="" className="py-3">Nome azienda (opzionale)</label>
            <input type="text" className="form-control" placeholder="Inserisci il nome dell'azienda" id="azienda"/>
            {aziendaError!=''&&<p className="text-danger"></p>}
            </div>
            <div className="col-md-6">
            <label htmlFor="" className="py-3">Email</label>
            <input type="email" className="form-control" placeholder="Inserisci l'email" id="email"/>
            {emailError!=''&&<p className="text-danger"></p>}
            </div>
            <div className="col-md-12">
                <label htmlFor="" className="py-3">Testo</label>
                <textarea className="form-control" placeholder="Lascia un commento" id="commento">
                </textarea>
                {commentoError!=''&&<p className="text-danger"></p>}
            </div>
            </div>
<button className="btn py-5" type="submit">Invia</button>
        </form>
    </div>
</div>
    </div>
)
}
export default Contatti;