import List1 from "./list1.tsx";
import Table1 from "./table1.tsx";
import Form1 from "./form1.tsx";

function hobby1() {
    return(
    <>
        <p className="paragraph">
            My hobby is playing video games. I like to play a lot of different types of games both single and multiplayer. Some
            of my favorite game genres are RPGs like Xenoblade and FPSs like Overwatch 2.
            <img width={640} src={"/xenoblade_banner.jpg"} alt={"Xenoblade Banner"}></img>
        </p>

        <List1 />
        <Table1 />
        <Form1 />
    </>
    )
}

export default hobby1;