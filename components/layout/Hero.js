import hero from '../../public/purple_wave.png';
import "../../style/components/_hero.scss";

export default function Hero(){

    return(
        <div className="hero-container">
                <div className="hero-content">
                    <h1 className="name">Daniel Mendez</h1>
                    <h2 className="description"> Software | UI/UX | Networking | Virtual Reality </h2>                    
        </div>


            <style jsx>{`

                //cannot import images thorugh css for some reason
                .hero-container{
                    // box-shadow: inset 0 0 0 1000px rgba(0,0,0,.5);
                    background: url(${hero});
                    background-size: cover;
                    height: 25vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-attachment: fixed;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;

                }

                @media screen and (max-width: 1500px){

                    .hero-container{
                        height: 100vh;
                    }
                }
            `}</style>
         
        </div>

    );
}