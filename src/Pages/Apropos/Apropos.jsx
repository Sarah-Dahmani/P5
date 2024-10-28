import Banner from "../../components/Banner"
import imgBannerAbout from "../../assets/Banner-About.png"

const Apropos = () => {
    return (
        <div>
            <Banner bgImage={imgBannerAbout} alt="montagne et forêt" />
            <p>à propos</p>
        </div>
    )
}

export default Apropos