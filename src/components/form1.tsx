function form1 () {
    return (
        <>
            <form className="paragraph">
                <label htmlFor="favoriteGame">Enter your favorite game:</label>
                <input type="text" id="favoriteGame"/>
                <br/>
                <br/>
                <label htmlFor="favoriteGameDeveloper">Enter the developer of your favorite game:</label>
                <input type="text" id="favoriteGameDeveloper"/>
                <br/>
                <br/>
                <hr/>
                <label htmlFor="checkboxes">Which of the follow games have you heard of?</label>
                <br/>
                <div id="checkboxes">
                    <label htmlFor="knowsGalaxy"> Super Mario Galaxy </label>
                    <input type="checkbox" id="knowsGalaxy"/>
                    <br/>
                    <label htmlFor="knowsOverwatch"> Overwatch 2 </label>
                    <input type="checkbox" id="knowsOverwatch" value="knowsOverwatch"/>
                    <br/>
                    <label htmlFor="knowsXenoblade"> Xenoblade </label>
                    <input type="checkbox" id="knowsXenoblade" value="knowsXenoblade"/>
                    <br/>
                    <label htmlFor="knowsPokemon"> Pokemon </label>
                    <input type="checkbox" id="knowsPokemon" value="knowsPokemon"/>
                    <br/>
                    <label htmlFor="knowsLeague"> League of Legends </label>
                    <input type="checkbox" id="knowsLeague" value="knowsLeague"/>
                </div>
                <br/>
                <hr/>
                <label htmlFor="radioBtns">Which game genre do you like the best?</label>
                <br/>
                <div id="radioBtns">
                    <label htmlFor="likesRPG"> RPG </label>
                    <input type="radio" id="likesRPG" name="genre" value="RPG"/>
                    <br/>
                    <label htmlFor="likesFPS"> FPS </label>
                    <input type="radio" id="likesFPS" name="genre" value="FPS"/>
                    <br/>
                    <label htmlFor="likesMOBA"> MOBA </label>
                    <input type="radio" id="likesMOBA" name="genre" value="MOBA"/>
                </div>
                <br/>
                <hr/>
                <label htmlFor="comments">Comments</label>
                <br/>
                <textarea rows={4} cols={50} id="comments"></textarea>
                <br/>
                <br/>
                <hr/>
                <label htmlFor="gameFeature">Which of the following do you think is the most important in a
                    game?</label>
                <br/>
                <select id="gameFeature">
                    <option value="graphics">Graphics</option>
                    <option value="gameplay">Gameplay</option>
                    <option value="story">Story</option>
                </select>
                <br/>
                <br/>
                <button id="submit">Submit</button>
            </form>
        </>
    )
}

export default form1;