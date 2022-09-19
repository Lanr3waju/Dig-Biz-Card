import linkedin from '../img/Icon.png'
import email from '../img/Vector.png'
export default function Info() {
    return (
        <section className="info">
        <div className='info-img-placeholder'></div>
        <h3>Abass Olanrewaju</h3>
        <p className="info-title">Frontend Developer</p>
        <p className="info-website">abassolanrewaju.website</p>
        <div className="info-btns">
        <button className="info-email-btn"><img className="info-email-icon" src={linkedin} alt="Email-Icon" />Email</button>
        <button className="info-linkedin-btn"><img className="info-linkedin-icon" src={email} alt="LinkedIn-Icon" />LinkedIn</button>
        </div>
        </section>
    )
}