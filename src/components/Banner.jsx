import '../SASS/components/banner.scss'

const Banner = (props) => {
    let alpha = (props.title !== undefined && props.title !== "") ? 0.6 : 0;
    return (
        <div className='banner' style={{backgroundImage:'url(${props.bgImage})', backgroundColor:'rgba(0,0,0,${alpha}'}}>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Banner