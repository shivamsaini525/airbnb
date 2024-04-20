import styles from './CardDetail.module.css';
const CardDeatil=()=>{
    return(
        <>
          <h1 className={styles.title}>StayVista at La Villa Farm w/ Pool, Lawn, Bonfire</h1>
          <h3 className={styles.city}>Spain</h3>
          <div className={styles.main}>
            
            <div className={styles.imgSection}>
                <img className={styles.bigimg} src="https://a0.muscache.com/im/pictures/miso/Hosting-948238209740182923/original/45fd0d30-d2b8-4028-b7d5-646397898b12.jpeg"></img>
            </div>
            <div className={styles.fourimg}>
                <img className={styles.smallfirst} src="https://a0.muscache.com/im/pictures/miso/Hosting-948238209740182923/original/497a2e8b-2bad-45c8-9b78-bddaa345ef10.jpeg"></img>
                <img className={styles.smallfirst} src="https://a0.muscache.com/im/pictures/miso/Hosting-948238209740182923/original/497a2e8b-2bad-45c8-9b78-bddaa345ef10.jpeg"></img>
                <img className={styles.smallfirst} src="https://a0.muscache.com/im/pictures/miso/Hosting-948238209740182923/original/497a2e8b-2bad-45c8-9b78-bddaa345ef10.jpeg"></img>
                <img className={styles.smallfirst} src="https://a0.muscache.com/im/pictures/miso/Hosting-948238209740182923/original/497a2e8b-2bad-45c8-9b78-bddaa345ef10.jpeg"></img>
            </div>

          </div>
        </>
    )
}
export default CardDeatil