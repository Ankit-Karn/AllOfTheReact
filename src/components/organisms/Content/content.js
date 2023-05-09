import design from './content.module.css'

export default function Content(){

    return(
        <>
        <div className={design.main}>        
            <div className={design.content}>
            <div className={design.image}>
                <img src="https://drscdn.500px.org/photo/77239757/m%3D900/v2?sig=1d6e53ad95015f656fa71ef23f0391eb23a5881d4c068e9654fc14f0bd0f1f90"/>
            </div>
            <div className={design.text}>
                <h2>ART</h2>
                <p className={design.para}>When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.</p>
                <button className={design.button}>See More</button>
            </div>
        </div>
        </div>

        </>
    )
}