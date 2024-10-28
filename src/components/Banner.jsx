import '../SASS/components/banner.scss'

const Banner = (props) => {
    return (
            <div className='banner'>
            <img src={props.bgImage} alt="banner" />
            { ( props.title !==undefined && props.title !=="" ) && 
                <div className="fond">
                    <h1>{props.title}</h1>
                </div>
            }
        </div>
    )
}

export default Banner