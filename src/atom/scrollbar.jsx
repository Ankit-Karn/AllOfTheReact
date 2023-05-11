import styles from './scrollbar.module.css'

export default function Scroll(){
  const data=[
    {
        link:'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
        name:'Travis',
        des:'I am a photographer'
    },
    {
        link:'https://cdn.mos.cms.futurecdn.net/p5quSf4dZXctG9WFepXFdR-320-80.jpg',
        name:'Kendall',
        des:'I am a fashion designer'
    },
    {
        link:'https://media.istockphoto.com/id/1357723739/photo/studio-portrait-of-a-smiling-young-latin-woman.jpg?b=1&s=170667a&w=0&k=20&c=RIMvJI9S1mZytKJydukxUF4hRoyVbR1W3ix6gsdo72I=',
        name:'Scarlett',
        des:'I am a content creator'
    },
    {
        link:'https://img.freepik.com/free-photo/senior-man-face-portrait-wearing-bowler-hat_53876-148154.jpg',
        name:'Peter',
        des:'I am a retired Army personal'
    },
    {
        link:'https://images.squarespace-cdn.com/content/v1/5bd23b160cf57d87c87873f3/1604423962385-DRILL5WEF2YI5WVTIKI4/eduard+schneider.jpg',
        name:'Kim',
        des:'I am a Filmmaker'
    },
    {
        link:'https://media.istockphoto.com/id/1372641621/photo/portrait-of-a-businessman-on-gray-background.jpg?s=170667a&w=0&k=20&c=ANVoOOlGwLyuBvB0g0uus58tTE_aPL-twwN2PSBJL54=',
        name:'John',
        des:'I am a web developer'
    },
    {
        link:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/01/family-portrait-ideas-headshots.jpg?resize=1500%2C1200&ssl=1',
        name:'Jhonson',
        des:'I am a cricketer'
    }
  ]

    return(
        <>
        <div className={styles.outer}>

            {
                data.map(data=> (
                   <div className={styles.card}>
                    <div className={styles.person}>
                        <img className={styles.img} src={data.link}/>
                    </div>
                    <h4 className={styles.name}>{data.name}</h4>
                    <p className={styles.des}>{data.des}</p>
                   </div> 
                ))
            }

        </div>
        </>
    )
}