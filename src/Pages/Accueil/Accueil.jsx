import Banner from "../../components/Banner"
import imgBannerHome from '../../assets/IMG.png'
import logements from "../../data/logements.json"
import Card from "../../components/CardsList/Card/Card"

const Accueil = () => {
    return (
        <div>
            <div>
            <Banner title="Chez vous, partout et ailleurs" bgImage={imgBannerHome} alt='falaise et océan'/>
        </div>
        <div className="CardsListWrapper">
           {
                logements.map( (logement)=> <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
                )
            }
       </div>
        </div>
    )
}

export default Accueil