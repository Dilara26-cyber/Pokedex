import pattern from "../images/pattern.png"
import pikachu from "../images/pikachu.png"
const Hero = () => {

    return (
        <header>
                <section className="hero-section">
                    <div className="hero-text">
                    <h1 className="heading">Gotta Catch 'em All!</h1>
                    <p>Catch Your Favorite Pokemon and Create Your Pokédex.</p>
                    <div className="cta">
                    <a href="#explore"><button type="button" className="button">Explore</button></a>    
                    </div>
                    </div>
                    <div className="hero-img">
                    <img src={pattern} alt="pattern" className="background-img"/>
                    <img src={pikachu} alt="pikachu" className="main-img"/>
                </div>
                </section>
           
        </header>
    )
}

export default Hero;