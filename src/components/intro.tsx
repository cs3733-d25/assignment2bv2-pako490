type IntroProps = {
    name1: string,
    name2: string
}

function Intro ({name1, name2}: IntroProps) {
    return (
        <>
            <h2>{name1}</h2>
            <p className={"paragraph"}>My name is Jake, and I am a Junior CS and IMGD double major from Rhode Island. I like to play video games, travel and
                golf.</p>
            <h2>{name2}</h2>
            <p className={"paragraph"}>Hello, my name is Pakorn Liengsawangwong. I am currently a sophmore computer science major at WPI
                and in my free time, I like to lift weights, play badminton, and read manga. I am from Mandeville, Louisiana,
                where I have there cats at home named Tangerine, Milo, and Miu Miu.</p>
        </>
    )
}

export default Intro;