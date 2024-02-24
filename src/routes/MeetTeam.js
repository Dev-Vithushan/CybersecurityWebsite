import Profile from "../components/ProfileComponent"
import "../components/ProfileStyle.css"
import Navbar from "../components/Navbar";
// import Card from "../components/Card";


function MeetTeam() {
    return (
        <div>
            <Navbar />
            <Profile />
            {/* <Card
                imgSrc="https://picsum.photos/id/201/300/200"
                imgAlt="Card Image 1"
                title="Card Title"
                description="This is the card description section. You can add more details about the product here"
             /> */}
        </div>
    )

}


export default MeetTeam;