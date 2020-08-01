import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
// import "../../style/layout/_footer.scss";

export default function Footer(){


    return(

    <div className= "footer-container">

            <div className="footer-content">
            <footer>
            <h3>© Daniel Mendez {new Date().getFullYear()}</h3>
                <ul style={{paddingInlineStart:"0px", marginBlockEnd: "0em"}}>
                    <li className="link-icon">
                        <a href = "https://github.com/dmtx97" target="_blank"><GitHubIcon style={{ fontSize: 20 }}/></a>
                    </li>
                    <li className="link-icon">
                        <a href = "https://www.linkedin.com/in/daniel-mendez-326267192/" target="_blank"><LinkedInIcon style={{ fontSize: 20 }}/></a>
                    </li>
                    <li className="link-icon">
                        <a href = "mailto:dmtx97@gmail.com"><MailIcon style={{ fontSize: 20 }}/></a>
                    </li>
                </ul>
            </footer>
            </div>

            <style jsx>{`

                * {
                    box-sizing: border-box;
                }

                *:before,
                *:after {
                    box-sizing: border-box;
                }

                h3{
                    margin: 0;
                    font-weight: 300;
                }

                footer{
                    position: relative;
                    width: 100%
                }

                hr{
                    margin-top: 0;
                
                }

                .footer-container{
                    min-height: 50px;
                    overflow:hidden;
                    position:relative;
                    // padding-top: 1em;
                    padding-bottom: 1em;
                    position: relative;
                    left: 0;
                    // background-color: #161512;
                    // background-size: cover;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .footer-content{
                    color: gray;
                }

                li{
                    justify-content: center;
                    list-style-type: none;
                    display: inline;
                    padding: 22px;
                }

                .link-icon a{
                    color: gray;                    
                }            
            `}</style>
    </div>
    );

}