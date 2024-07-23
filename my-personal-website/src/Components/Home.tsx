import { useState } from "react"
import fotoProfilo from "../assets/fotoProfilo.jpg"
function Home() {

    const [myAge,setMyAge]=useState(0)
    const today= new Date().getFullYear()
setTimeout(()=>{
    setMyAge(today-1994)
},2000)
    return(
        <div className="container">
            <div className="row">
<div className="col-md-12 py-5">
    <h1>Ciao a tutti! 😁
    </h1>
</div>
<div className="col-md-12 py-5">
    <p className="fs-5">Mi presento ...</p>
    <p className="fs-5"  data-aos="zoom-out" data-aos-duration="3000">Mi Chiamo Raffaele Caravetta ed ho {myAge} anni.
        Ho conseguito il diploma nel 2013 in ambito umanistico e col passare degli anni ho maturato un interesse prima e una passione poi per l'informatica, e il mondo IT in generale.
        Ho Ho conseguito certificazioni importanti come quella di Epicode, con la quale sono riconosciuto come Fullstack Developer.      
    </p>
<h2 className="py-5">Il mio stack tecnlogico:</h2>
</div>
<div className="col-md-6 p-5" >
<img src={fotoProfilo} className="w-75 rounded border shadow" alt=""  data-aos="fade-right" data-aos-duration="3000"/>
</div>
<div className="col-md-6 py-5"  >
<h2>Che tipo di professionista sono?</h2>
<p className="fs-5" data-aos="fade-left" data-aos-duration="3000">Mi reputo un professionista serio, puntuale e preciso.
    Mi piace aggiornarmi, fare gruppo, lavorare per obiettivi.
    Credo nel lavoro di squadra e nell'essere consapevoli dei propri mezzi.
    Quando incontro un problema, lo destrutturo e analizzo pezzo per pezzo arrivando
    al fulcro e attuando soluzioni semplici, leggere e scalabili.
</p>
</div>
            </div>
        </div>
    )
}
export default Home;