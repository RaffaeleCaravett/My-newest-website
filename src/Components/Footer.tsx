import Tech from '../assets/tech.png'
import Web from '../assets/web-development.svg'
import Elect from '../assets/robot.svg'
import Robot from '../assets/gaming.svg'
function Footer() {

    const footerImages = [
        {
            img: Tech,
            title: 'Servizi tecnologici informatici',
            alt: 'Tech_image'
        },
        {
            img: Web,
            title: 'Servizi web',
            alt: 'Web_image'
        },
        {
            img: Elect,
            title: 'Passione per l\'elettronica',
            alt: 'Electronic_image'
        },
        {
            img: Robot,
            title: 'Passione per la robotica',
            alt: 'Robot_image'
        },

    ]

    return (
        <footer className="bg-warning p-3">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12 py-3">
                        <p className="fs-2">Raffaele Caravetta®</p>
                    </div>
                    <div className="col-md-6 py-3">
                        <p className="fs-4">Fullstack Web developer</p>
                        <p>Esperienza in aziende di consulenza, pubblica amministrazione, privati. Confortevole a lavorare su tecnologie datate, creare applicazioni web complesse, ristrutturare codici esistenti.
                            Disponibilità a lavorare in full-remote.
                        </p>
                    </div>
                    <div className="col-md-6 py-3">
                        <div className="row">
                            {footerImages && footerImages.map((fI, key) =>
                                <div className="col-6" key={key}>
                                    <img src={fI.img} alt={fI.alt} title={fI.title} className="w-75 m-auto" />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-8 m-auto py-5">
                        <p className="fs-7">
                            Per ogni richiesta, informazione, o contatto visita la sezione "contatti" accessibile dal menù a tendina presente nella navbar. Da li puoi mandarmi
                            direttamente una mail personalizzata, la leggerò e la analizzerò e cercherò di rispondere il prima possibile.
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default Footer;