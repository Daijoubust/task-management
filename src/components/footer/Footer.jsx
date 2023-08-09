import './footer.scss'
import { AiFillGithub } from "react-icons/ai";

export const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <p>Created by Daijoubust</p>
                <a href="https://github.com/Daijoubust"><AiFillGithub fontSize={25}/></a>
            </div>
        </footer>
    )
}
