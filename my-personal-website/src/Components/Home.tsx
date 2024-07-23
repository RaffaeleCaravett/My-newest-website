import { useState } from "react"
import fotoProfilo from "../assets/fotoProfilo.jpg"
import Angular from '../assets/Angular_logo.svg.png'
import React from '../assets/react.svg'
import Java from '../assets/Java_Logo.svg'
import Spring from '../assets/spring-icon.svg'
import Mysql from '../assets/mysql-logo.svg'
import Git from '../assets/Git_icon.svg.png'
import Oracle from '../assets/oracle.svg'
import Jira from '../assets/jira-1.svg'
import Team from '../assets/team.svg'
import Job from '../assets/job.svg'
import Management from '../assets/management.svg'
import Linkedin from '../assets/linkedin.webp'
import GitHub from '../assets/github_logo.png'

function Home() {

    const [myAge,setMyAge]=useState(0)
    const today= new Date().getFullYear()
setTimeout(()=>{
    setMyAge(today-1994)
},2000)

const stack = 
    [
        {
        image:Angular,
        nome:'Angular',
        descrizione:'E\' un framework di sviluppo front-end che consente di creare applicazioni web dinamiche.'
        },
        {
            image:React,
            nome:'React',
            descrizione:'E\' una libreria JavaScript per costruire interfacce utente caratterizzata dal fatto che è dichiarativa, efficiente e flessibile.'
            },
            {
                image:Java,
                nome:'Java',
                descrizione:'E\' un linguaggio di programmazione e una piattaforma di elaborazione sviluppato da Sun Microsystems nel 1995.'
                },
                {
                    image:Spring,
                    nome:'Spring',
                    descrizione:'E\'  un framework Java per la costruzione di applicazioni aziendali.'
                    },
                    {
                        image:Git,
                        nome:'Git',
                        descrizione:'E\' il sistema di controllo delle versioni moderno di gran lunga più utilizzato attualmente a livello globale.'
                        },
                        {
                            image:Mysql,
                            nome:'MySql',
                            descrizione:'E\' un sistema di gestione di database relazionali (RDBMS) gratuito e open source che utilizza SQL (Structured Query Language).'
                            }
                            ,
                        {
                            image:Oracle,
                            nome:'Oracle Database',
                            descrizione:'E\' un sistema di gestione dei database relazionali (RDBMS) del produttore software e hardware Oracle.'
                            },
                        {
                            image:Jira,
                            nome:'Jira',
                            descrizione:'E\' l\'hub centrale per le fasi di codifica, collaborazione e rilascio.'
                            }
    ]
const soft = [
    {
        nome:"Team building",
        descrizione:"Mi piace fare team building. Credo nel potenziale di ognuno e nel potenziale del gruppo. Se si vogliono fare grandi cose, serve fare gruppo.",
        image:Team
    },
    {
        nome:"Hard work",
        descrizione:"L'attitudine al lavoro è fondamentale. L'idea di scalare la montagna è una cosa, mettersi le scarpe , incamminarsi e ammirare la vista dall'alto è un'altra.",
        image:Job
    },
    {
        nome:"Stress management",
        descrizione:"Lungo il tragitto incontri grandine, pioggia, vento, caldo, aria secca. Abbracciare questi eventi e capire che fanno parte del percorso aiuta a godersi il momento.",
        image:Management
    }
]

const links = [
    {
        nome:"LinkedIn",
        descrizione:"Entriamo in contatto su linkedin.",
        image:Linkedin,
        link:'https://linkedin.com/in/raffaele-caravetta-webdeveloper'
    },
    {
        nome:"Git Hub",
        descrizione:"Dai un'occhiata al mio GitHub",
        image:GitHub,
        link:'https://github.com/RaffaeleCaravett'
    }
]

    return(
        <div className="container py-5">
            <div className="row py-5">
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
{stack&& stack.map((s,key)=>
    <div className="col-md-4 position-relative p-3 stack-container" key={key}>
        <img src={s.image} alt="" className="stack-image" />
        <div className="content position-relative">
            <div className="to-absolute">
                  <h2>{s.nome}</h2>
            <p className="fs-7 fw-bold">{s.descrizione}</p>  
            </div>
        </div>
        .</div>
)}
<div className="col-md-6 p-5" >
<img src={fotoProfilo} className="w-75 rounded border shadow" alt=""  data-aos="fade-right" data-aos-duration="3000"/>
</div>
<div className="col-md-6 py-5"  >
<h2>Serietà, professionalita, puntualità.</h2>
<p className="fs-5" data-aos="fade-left" data-aos-duration="3000">Mi reputo un professionista serio, puntuale e preciso.
    Mi piace aggiornarmi, fare gruppo, lavorare per obiettivi.
    Credo nel lavoro di squadra e nell'essere consapevoli dei propri mezzi.
    Quando incontro un problema, lo destrutturo e analizzo pezzo per pezzo arrivando
    al fulcro e attuando soluzioni semplici, leggere e scalabili.
</p>
</div>
<div className="col-md-12 py-5">
    <h1>Quali sono le mie <span className="text-danger">soft skills?</span></h1>
</div>
{soft&&soft.map((s,key)=>
    <div className="col-md-4 p-2 position-relative soft" key={key}>
        <div className="content">
           <h2 className="py-2">{s.nome}</h2>
        <p>{s.descrizione}</p>  
        </div>
       <div className="image">
        <img src={s.image} alt="" className="w-25"/>
       </div>
    </div>
)}

<div className="col-md-10 m-auto my-5 py-5">
    <div className="row text-center">
        <h1>Referenze lavorative</h1>
       
       {links&&links.map((l,key)=>
        <div className="col-md-6 p-5 position-relative contacts" data-aos="zoom-in" data-aos-duration="3000" key={key}>
            <div className="header px-5">
   <h2>{l.nome}</h2>
   <p>{l.descrizione}</p> 
            </div>
                <a href={l.link} target="_blank" rel="noopener noreferrer" className="text-dark"> <img src={l.image} className="w-25 m-auto py-3" alt="" /></a>         
        </div>
       )} 
    </div>
</div>
            </div>
        </div>
    )
}
export default Home;