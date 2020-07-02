
import Layout from '../components/layout/Layout';
import Hero from '../components/layout/Hero';
import Description from '../components/Description';
import Contact from '../components/Contact';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import "../style/pages/home.scss";

export default function Home(){
    return(
        <Layout>
            <Hero/>

            <div className="content">

            <div className="mainparent">
                <aside className="sidebarright">
                    <div className="column">
                        <div className="links">
                            <ul>
                                <li style={{listStyleType: "none", marginBottom: "10px", textAlign:"left"}}>
                                <LocationOnIcon style={{verticalAlign:"middle", paddingRight: "10px", fontSize:'20px', transform: "translatey(-2px)", color: "grey"}}/>Dallas, TX</li>
                                <li style={{listStyleType: "none", marginBottom: "10px", textAlign:"left"}}>
                                <a 
                                href = "https://www.linkedin.com/in/daniel-mendez-326267192/" 
                                target="_blank">
                                <LinkedInIcon style={{verticalAlign:"middle", paddingRight: "10px", fontSize:'20px', transform: "translatey(-2px)", color: "grey"}}/>daniel-mendez-326267192</a></li>
                                
                                <li style={{listStyleType: "none", marginBottom: "10px", textAlign:"left"}}>

                                <a 
                                href = "https://mail.google.com/mail/?view=cm&fs=1&to=dmtx97@gmail.com" 
                                target="_blank">
                                <MailIcon style={{verticalAlign:"middle", paddingRight: "10px", fontSize:'20px', transform: "translatey(-2px)", color: "grey"}}/>dmtx97@gmail.com</a></li>

                                <li style={{listStyleType: "none", marginBottom: "10px", textAlign:"left"}}>
                                <a 
                                href = "https://github.com/dmtx97" 
                                target="_blank">
                                <GitHubIcon style={{verticalAlign:"middle", paddingRight: "10px", fontSize:'20px', transform: "translatey(-2px)", color: "grey"}}/>dmtx97</a></li>
                            </ul>       
                        </div>

                            <div className="contact"><Contact/></div>
                    </div>
                </aside>
                <section className="main">
                    <Description/>   
                </section>
            </div>
            </div>
        </Layout>
    );

}