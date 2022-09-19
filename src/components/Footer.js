import fb from '../img/Facebook Icon.png'
import gh from '../img/GitHub Icon.png'
import tw from '../img/Twitter Icon.png'
import ig from  '../img/Instagram Icon.png'

export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://www.linkedin.com/in/abass-abdul-wasi-53883422a/"><img alt="twitter-icon" src={tw}/></a>
            <a href="https://www.linkedin.com/in/abass-abdul-wasi-53883422a/"><img alt="fb-icon" src={fb}/></a>
            <a href="https://www.linkedin.com/in/abass-abdul-wasi-53883422a/"><img alt="instagram-icon" src={ig}/></a>
            <a href="https://www.linkedin.com/in/abass-abdul-wasi-53883422a/"><img alt="github-icon" src={gh}/></a>
        </footer>
    )
}