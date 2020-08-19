import Link from 'next/link';
import {useRouter} from 'next/router';
import {useLayoutEffect, useState, useEffect} from 'react'
import { route } from 'next/dist/next-server/server/router';
import "../../style/layout/_navbar.scss";
import Button from '@material-ui/core/Button';
import Cookies from 'js-cookie';
import transitions from '@material-ui/core/styles/transitions';

export default function Navbar(){
    const router = useRouter();
    const cookie = Cookies.get('authToken');
    const[header, setHeader] = useState( router.pathname === "/" ?  "header" : "header2");
    const[linkItem, setLinkItem] = useState(router.pathname === "/" ? "link-item" : "link-item2");
    const[logo, setLogo] = useState(router.pathname === "/" ? "logo" : "logo2");
    const[logoutButton, setLogoutButton] = useState(false);
    const[portalButton, setPortalButton] = useState(false);


    const listenScrollEvent = e => {
        if(window.scrollY < window.innerHeight / 6.5 && router.pathname ==="/"){
            return [setHeader("header"), setLinkItem("link-item"), setLogo("logo")];
        } else if (window.scrollY > window.innerHeight / 6.5 && router.pathname ==="/"){
            return [setHeader("header2"), setLinkItem("link-item2"), setLogo("logo2")];
        } else{
            return [setHeader("header2"), setLinkItem("link-item2"), setLogo("logo2")]
        }
    }

    const handleLogout = () =>{
        Cookies.remove("authToken")
        window.location.reload();
    }

    useEffect(() =>{
        window.addEventListener("scroll", listenScrollEvent);
        return () => window.removeEventListener("scroll", listenScrollEvent);
    },[])


    useEffect(()=>{
        if(cookie){
            setLogoutButton(true)
            setPortalButton(true)
        }
    },[])

    return(
        <div>
            <header className={header}>
                <div className={logo}><Link href="/"><a className="initials">DM</a></Link></div>
                    <ul className="links" id="nav">
                        <li><Button style={{paddingTop: "0px", paddingBottom: "0px"}}><Link href = "/blog"><a style={{textDecoration:"none", color: "white", paddingTop: "18px", paddingBottom: "18px"}}>Blog</a></Link></Button></li>

                        {
                            portalButton ? <li><Button style={{paddingTop: "0px", paddingBottom: "0px"}}><Link href = "/blog-portal"><a style={{textDecoration:"none", color: "white", paddingTop: "18px", paddingBottom: "18px"}}>Portal</a></Link></Button></li> : undefined
                        }

                        {
                            logoutButton ? <li><Button style={{paddingTop: "0px", paddingBottom: "0px"}} onClick={handleLogout}><a style={{textDecoration: "none", color: "white", paddingTop:"18px", paddingBottom: "18px"}}>Logout</a></Button></li> : undefined
                        }
                    </ul>     
            </header>
        </div>
    );
}