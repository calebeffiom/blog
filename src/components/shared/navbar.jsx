import Container from "./container"
import { Link } from "react-router-dom";
// import profile from "../../assets/images/profile.png"
// import SearchIcon from '@mui/icons-material/Search';
import "../../styles/navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <Container>
                <div className="nav-inner flex justify-between items-center py-[10px]">
                    <div className="logo-cont text-[30px] font-[600] text-[#2E2E2E]">
                        <h2>Ink Labs</h2>
                    </div>
                    <div className="nav-search-profile-cont flex items-center">
                        <div className="nav-links-cont flex items-center justify-between">
                            <ul className="flex gap-[30px] items-center text-[#2E2E2E]">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Trending Stories</Link></li>
                                <li><Link to="/">Latest Stories </Link></li>
                                <li><Link to="/">Signin</Link></li>
                                <li className="rounded-[20px] bg-[#2E2E2E] text-[#fff]"><Link to="/" className="py-[8px] px-[30px] block">Get Started</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    )
}
export default Navbar