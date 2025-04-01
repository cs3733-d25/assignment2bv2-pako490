
export default function form2() {
    return(
            <>
                <h2>Subscribe to Blog Form</h2>
                <form className="paragraph">
                    <label htmlFor="firstname">Enter Your First Name: </label>
                    <input type="text" id="firstname"/>
                    <br/>
                    <label htmlFor="lastname">Enter Your Last Name: </label>
                    <input type="text" id="lastname"/>
                    <br/>
                    <input type="checkbox" id="cats"/>
                    <label htmlFor="cats">Do you like cats?</label>
                    <br/>
                    <input type="checkbox" id="badminton"/>
                    <label htmlFor="badminton">Want to see more badminton?</label>
                    <br/>
                    <input type="checkbox" id="other"/>
                    <label htmlFor="other">Want other topics?</label>
                    <br/>
                    <label htmlFor="otherTopics">If so, share want you more of:</label>
                    <input type="textarea" id="otherTopics"/>
                    <br/>
                    <input type="radio" id="cats" name="fav_language" value="cats"/>
                    <label htmlFor="cats">Cats</label><br/>
                    <input type="radio" id="dogs" name="fav_language" value="dogs"/>
                    <label htmlFor="dogs">Dogs</label><br/>
                    <input type="radio" id="both" name="fav_language" value="both"/>
                    <label htmlFor="both">Both</label>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </>
    )
}
