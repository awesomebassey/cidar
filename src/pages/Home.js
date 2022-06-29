import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
import About from "../components/About"
import Reel from "../components/Reel"

export default function Home() {
    return (
        <>
            <Header transparent={true} />
            <Hero />
            <Reel />
            <Services />
            <About />
            <Testimonials />
            <Footer />
        </>
    )
}
