import List2 from "./list2.tsx";
import Table2 from "./table2.tsx";
import Form2 from "./form2.tsx";

export default function hobby2() {

    return (
        <body>
        <p className="paragraph">
            Badminton is a sport where you hit a shuttlecock around a court. I picked up badminton
            last year and began watching the badminton world tour which you can find in the link below.
            Below is also a picture of my favorite badminton Lee Chong Wei.
            <img alt="badminton photo" width="640" height="540" src="/lcw.jpeg"></img>
        </p>

        <ul>
            <li><a href="https://www.youtube.com/@bwftv"> BWF YOUTUBE</a></li>
            <li><a href="https://bwfworldtourfinals.bwfbadminton.com/">BWF Website</a></li>
            <li><a href="https://www.instagram.com/leechongweiofficial/?hl=en">Lee Chong Wei IG</a></li>
        </ul>
        <List2 />
        <Table2 />
        <Form2 />
        </body>

    )
}