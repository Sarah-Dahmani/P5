import Banner from "../../components/Banner"
import imgBannerHome from '../../assets/Banner-Home.png'
import CardsList from "../../components/CardsList/CardsList"

const Accueil = () => {
    return (
        <div>
            <Banner title="Chez vous, partout et ailleurs" bgImage={imgBannerHome} alt='falaise et océan'/>
            <CardsList/>
        </div>
    )
}

export default Accueil