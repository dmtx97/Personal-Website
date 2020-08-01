import Link from 'next/link';
import {useRouter} from 'next/router';
import {useLayoutEffect, useState, useEffect} from 'react'
import { route } from 'next/dist/next-server/server/router';
import "../../style/layout/_navbar.scss";

export default function Navbar(){
    const router = useRouter();
    const[header, setHeader] = useState( router.pathname === "/" ?  "header" : "header2");
    const[linkItem, setLinkItem] = useState(router.pathname === "/" ? "link-item" : "link-item2");
    const[logo, setLogo] = useState(router.pathname === "/" ? "logo" : "logo2");

    const listenScrollEvent = e => {
        if(window.scrollY < window.innerHeight / 6.5 && router.pathname ==="/"){
            return [setHeader("header"), setLinkItem("link-item"), setLogo("logo")];
        } else if (window.scrollY > window.innerHeight / 6.5 && router.pathname ==="/"){
            return [setHeader("header2"), setLinkItem("link-item2"), setLogo("logo2")];
        } else{
            return [setHeader("header2"), setLinkItem("link-item2"), setLogo("logo2")]
        }
    }

    useEffect(() =>{
        window.addEventListener("scroll", listenScrollEvent);
        return () => window.removeEventListener("scroll", listenScrollEvent);
    },[])

    return(
        <div>
            <header className={header}>
                <div className={logo}><Link href="/"><a>DM</a></Link></div>
                <ul className="links">
                    <li id="blog"><Link href = "/blog"><a>Blog</a></Link></li> 
                </ul>        
            </header>
        </div>
    );
}