import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <Link to='/about'>About</Link> <br />
            <a href='http://www.jasonhargroveart.com/'>www.jaosnhargroveart.com</a>
            {/* <a href='/about'>About</a> */}
        </footer>
    )
}

export default Footer
