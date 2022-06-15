import Section from "./Section"
export default function Services() {

    const description = "We help companies sell their products by attracting more customers using stunning product animations and photorealistic 3D renders"
    const images = process.env.PUBLIC_URL + "/assets/images"

    return (
        <>
            <div className="container py-5 bg-white rounded-4">
                <div className="text-center col-lg-6 mx-auto">
                    <h3>Here's what we can do for you</h3>
                    <p>We help companies sell their products by attracting more
                        customers using stunning product animations and photorealistic
                        3D renders
                    </p>
                </div>
                <Section bg={ images + "/services/services.png" } title={"Photorealistic Render"} desc={description} />
                <Section bg={ images + "/services/services.png" } title={"Photorealistic Render"} desc={description} reverse={true} />
                <Section bg={ images + "/services/services.png" } title={"Photorealistic Render"} desc={description} />
            </div>
        </>
    )
}
