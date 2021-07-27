import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
           <h4>Hi there. This is where I tell you all about the application. Or someting.</h4> <br />
            <Link to='/'>Go Back</Link>
           {/* <a href='/'>Go Back</a> */}
        </div>
    )
}

export default About
