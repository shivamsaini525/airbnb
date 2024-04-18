import Card from './Card'
import styles from './Home.module.css';
const CardsData=[
    {
        id :"1",
        title:"Peaceful Piano",
        description: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1645207213625-aa6367cbab66?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   },
   {
        id :"2",
        title: "Deep Focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1645860265927-02deb3fe4359?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {
        id :"3",
        title: "Instrumental Study",
        description: "Focus with soft study music in the background ",
        imgUrl: "https://images.unsplash.com/photo-1646734329499-0afb2db25fb3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {    
        id :"4",
        title: "Focus Flow",
        description: "Up tempo instrumental hip hop beats ",
        imgUrl: "https://images.unsplash.com/photo-1645036993886-efdfd96ca97f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {
        id :"5",
        title: "Beats to think to",
        description: "Focus with deep base techno ",
        imgUrl: "https://images.unsplash.com/photo-1645207213625-aa6367cbab66?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   }
];


const Home=()=>{
    return (
        <>
          <div className={`mt-4 ms-4 ${styles.home}`}>
          {
            CardsData.map((item)=>{
            return <Card title={item.title} description={item.description} image={item.imgUrl} id={item.id} key={item.id} />

          })
       
          }
          </div>
         
        </>
    )
}

export default Home