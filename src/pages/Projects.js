import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'

export default function Projects() {
    return (
        <>
            <Header />
            <Hero title={'Our Projects'} sub={'With good looking effects like exploded views, x ray views and different simulations, we can express your products in ways that are not possible with traditional videography tools'} />
            <Services />
            <Footer />
        </>
    )
}
