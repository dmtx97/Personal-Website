import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';

export default function Links(){
    return(

        <div className="link-component">

            <ul>

                <li style={{listStyleType: "none", marginBottom: "10px", textAlign:"left"}}>
                <LocationOnIcon style={{verticalAlign:"middle", paddingRight: "10px", fontSize: "1.7em", transform: "translatey(-1px)", color: "#808080"}}/>Dallas, TX</li>
                <li style={{listStyleType: "none", marginBottom: "10px", textAlign:"left"}}>
                <a 
                href = "https://www.linkedin.com/in/daniel-mendez-326267192/" 
                target="_blank">
                <LinkedInIcon style={{verticalAlign:"middle", paddingRight: "10px", fontSize: "1.7em", transform: "translatey(-1px)", color: "#808080"}}/>daniel-mendez-326267192</a></li>
                
                <li style={{listStyleType: "none", marginBottom: "10px", textAlign:"left"}}>

                <a 
                href = "mailto:dmtx97@gmail.com"
                >
                <MailIcon style={{verticalAlign:"middle", paddingRight: "10px", fontSize: "1.7em", transform: "translatey(-1px)", color: "#808080"}}/>dmtx97@gmail.com</a></li>

                <li style={{listStyleType: "none", marginBottom: "10px", textAlign:"left"}}>
                <a 
                href = "https://github.com/dmtx97" 
                target="_blank">
                <GitHubIcon style={{verticalAlign:"middle", paddingRight: "10px", fontSize: "1.7em", transform: "translatey(-1px)", color: "#808080"}}/>dmtx97</a></li>
            </ul>

    <style jsx>{`

        ul{
            padding-inline-start: 0;
        }

        li{
            list-style-type: none;
            margin-bottom: 10px;
            padding: 0px 20px 0px 20px;
            text-align: left;
            font-weight: 300;
        }

        .link-component a{
            color: #1F1128;
        }
    
    `}</style>      
        </div>

    );
}