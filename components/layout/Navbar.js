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
        if(window.scrollY < window.innerHeight / 5.5 && router.pathname ==="/"){
            return [setHeader("header"), setLinkItem("link-item"), setLogo("logo")];
        } else if (window.scrollY > window.innerHeight / 5.5 && router.pathname ==="/"){
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
                <div className={logo}>DM</div>
                <ul className="links">
                    {/* <li className={linkItem}><Link href = "/"><a>Home</a></Link></li>           */}
                    {/* <li className={linkItem}><Link href = "/about"><a>About</a></Link></li>
                    <li className={linkItem}><Link href = "/about"><a>Contact</a></Link></li> */}
                    {/* <li className={linkItem}><Link href = "/blog"><a>Blog</a></Link></li> */}
                </ul>        
            </header>

            {/* <style jsx>{`

                .header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    height: 60px;
                    transform: translateY(0);
                    z-index: 2;
                }
                
                .header2 {
                    position: fixed;
                    top: 0;
                    left: 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    height: 60px;
                    background-color: #0A0A0A;
                    transform: translateY(10);
                    transition: transform 1s ease;
                    animation: myanimation .5s;
                    z-index: 2;
                }
                
                @media screen and (max-width: 100px){

                    @keyframes myanimation {
                        0% {
                        background-color: transparent;
                        }
                        35% {
                        background-color: #0A0A0A;
                        }
                        100% {
                        background-color: #0A0A0A;
                        }
                    }
                }
                
                .header.shadow {
                    box-shadow: 0 9px 9px -9px rgba(0, 0, 0, 0.13);
                }
                
                .header.hidden {
                    transform: translateY(-110%);
                }
                
                .logo {
                    margin: 0 24px;
                    font-size: 28px;
                    color: #E9EAED;
                }

                .logo2 {
                    margin: 0 24px;
                    font-size: 28px;
                    color: #E9EAED;
                }
                
                .links {
                    padding: 0;
                    margin: 0 24px;
                }
                
                li{
                    list-style-type: none;
                    display: inline;
                }

                .link-item a{
                    color: #E9EAED;
                    display: inline-block;
                    text-decoration: none;
                    margin: 0 12px;
                    cursor: pointer;
                    font-weight: 300;
                }


                .link-item2 a{
                    color: #E9EAED;
                    text-decoration: none;
                    display: inline-block;
                    margin: 0 12px;
                    cursor: pointer;
                }

                @media screen and (max-width: 1500px){

                    .header, .header2{
                        background-color: #0A0A0A;
                    }

                    .logo, .logo2{
                        color: #E9EAED;
                        font-size: 20px;
                    }

                    .link-item a, .link-item2 a{
                        // font-size: 12px;
                        color: white;
                    }
                }
            `}
            </style> */}
        </div>
    );
}