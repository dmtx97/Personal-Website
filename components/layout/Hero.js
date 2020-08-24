import hero from '../../public/mono-clouds1.png';
import "../../style/components/_hero.scss";

export default function Hero(){

    return(
        <div className="hero-container">
                <div className="hero-content">
                    <h1 className="name">Daniel Mendez</h1>
                    <h2 className="description"> Software | Web Design | Networking  </h2>                    
        </div>

            <style jsx>{`

                //cannot import images thorugh css for some reason
                .hero-container{
                    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.6);
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

                @media screen and (max-width: 1700px){

                    .hero-container{
                        height: 100vh;
                    }
                }

                @media only screen and (max-width: 1366px) {
                    .hero-container {
                      background-attachment: scroll;
                    }
                  }


            `}</style>
        </div>
    );
}