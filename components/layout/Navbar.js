import Link from 'next/link';
import {useRouter} from 'next/router';
import {useLayoutEffect, useState, useEffect} from 'react'
import { route } from 'next/dist/next-server/server/router';
import "../../style/layout/_navbar.scss";
import Button from '@material-ui/core/Button';
import Cookies from 'js-cookie';

export default function Navbar(){
    const router = useRouter();
    const cookie = Cookies.get('authToken');
    const[header, setHeader] = useState( router.pathname === "/" ?  "header" : "header2");
    const[linkItem, setLinkItem] = useState(router.pathname === "/" ? "link-item" : "link-item2");
    const[logo, setLogo] = useState(router.pathname === "/" ? "logo" : "logo2");
    const[logoutButton, setLogoutButton] = useState(false);

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
        }
    },[])

    return(
        <div>
            <header className={header}>
                <div className={logo}><Link href="/"><a className="initials">DM</a></Link></div>
                <ul className="links">
                    <li id="blog"><Button><Link href = "/blog"><a style={{textDecoration:"none"}}>Blog</a></Link></Button></li> 
                    {
                        logoutButton ? <li id="blog"><Button onClick={handleLogout} style={{color: "white"}}>Logout</Button></li> : undefined
                    }
                </ul>        
            </header>
        </div>
    );
}