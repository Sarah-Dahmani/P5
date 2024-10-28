import Banner from "../../components/Banner";
import imgBannerAbout from "../../assets/Banner-About.png";
import Collapse from "../../components/Collapse/Collapse";
import aproposJson from "../../data/apropos.json";
import './apropos.scss';

const Apropos = () => {
    return (
        <div>
            <Banner bgImage={imgBannerAbout} alt="montagne et forêt" />
            <div className="containerCollapseApropos">            

            {aproposJson.map((item, index) => {


              return <Collapse key={index} titre={item.title}>{item.description}</Collapse> }

            )}

            </div>
        </div>
    )
}

export default Apropos