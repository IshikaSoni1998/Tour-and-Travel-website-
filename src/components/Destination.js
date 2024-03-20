import taal1Image from '../components/assets/taal volcano 1.jpg';
import taal2Image from '../components/assets/taal volcano 2.jpg'
import './DestinationStyles.css';
import DestinationData from './DestinationData';
import mt1 from '../components/assets/mt.1.jpg';
import mt2 from '../components/assets/mt.2.jpg';

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>tour give you the opportunity to see a lot, within a time frame</p>
            <DestinationData 
            // className="first-des "
            heading ="Taal Volcano, Batangas "
            text= "One of the most Iconic views In Luzan, Mt. Toal boasts a volcano inside a lake inside an island.If you fancy a closer look, the hike up to the creater is a mere 45 minutes, and is easy enough for beginners.Guides will assist you most of the way,and you'll see the peculiar environment found on an active volcano,including volcanic rocks and stream vents.The hike can be dusty and hot, so plan for an early morning trip,and then unwind with some bulalo before heading back home."
            img1={taal1Image}
            img2={taal2Image}
          />
          <DestinationData 
        //   className="first-des-rev"
            heading ="Mt.Daguldul, Batangas "
            text= "If you're looking for a hike that's more challenging but still good for a beginner mountaineer,check out Mt.Daguldul in San Juan, Batangus.You'll start your hike from the beach and pass through tropical forest, different rock formations and small streams.There's a small store halfwayup the trail where you can take a break and drink buko juice,and though the summit itself may not have the best view, the breeze is fantastic.Once you've made it back down , head straight to the beach for a refreshing well- deserved swim. ."
            img1={mt1}
            img2={mt2}
          />
        </div>

    )
}
export default Destination;