import { Typography } from "@mui/material";
import Header from "../components/header";
import SubHeader from "../components/subHeader";
import logo from '../assets/logo.svg'

export default function Home(){
    return(
        <>
            <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                <img width={'100%'} src={logo} style={{maxWidth: '600px', padding: '24px 0px'}}></img>
            </div>

            <Header text="what is legacy?"/>
            <Typography style={{paddingTop: 16}}>
                <b>Armada Legacy</b> is a collaborative effort to craft community expansions and rebalances for Star Wars: Armada that rival the quality of those produced by Fantasy Flight Games.
            </Typography>

            <Typography style={{margin: '8px 0px'}}>
                It stands as a testament to the collective creativity and dedication of the Star Wars: Armada community; born from a shared vision to create fun and interesting Armada content.
            </Typography>

            <Header text="FAQ"/>
            <SubHeader text="Isn't Star Wars: Armada still officially supported?"/>
            <Typography>Yes it is! Atomic Mass Games currently supports Star Wars: Armada and still host’s official tournaments. We support AMG and hope that it continues to receive official support and new content; however, some Armada players yearn for more. The founders of Armada Legacy were passionate about the game and felt the community deserved more frequent updates so they took it upon themselves to make them!​</Typography>
            <SubHeader text="What if new content is released that overlaps Armada Legacy content?"/>
            <Typography>If Atomic Mass Games were to release a new wave of Star Wars: Armada that shares any content released by Armada Legacy, we will pull our version in favor of the official content. We are not looking to replace the official developers in the eyes of the community but rather supplement Armada content to keep the community excited about the game we love.</Typography>
            <SubHeader text="Can I fly an Armada Legacy fleet against a standard Armada fleet?"/>
            <Typography>Official rules, pieces, and game play always take precedence. Armada Legacy fleets are designed to be flown against other Armada Legacy fleets. This is unofficial; community built content and should only be flown against an opponent that agrees to fly against. Anything else leads to frustration among the larger community and resentment towards our work. Our goal is to unite and expand the player base with exciting new releases and rebalancing of points cost for experienced players who desire more content. Only if you both agree to try new Legacy content, then we encourage you to try it, but never expect your opponent to allow unofficial Legacy content.​​</Typography>
            <SubHeader text="Is Armada Legacy free and if so how can I support the project?"/>
            <Typography>Armada Legacy is a free not-for-profit project and will always remain as such. There is currently no way to support the project financially and if there were, it would only cover cost of maintenance and development. However, you can support us by telling others about it, flying our content, and maybe even joining our team! Check out our discord for more info.</Typography>
            <SubHeader text="What is the difference between other homebrew and Armada Legacy?"/>
            <Typography>While some homebrew content is great, it often lacks balance and thorough testing. Armada Legacy benefits from a dedicated team focused on developing balanced content through rigorous playtesting and constant re-evaluation. Our volunteers contribute to graphic design, verbiage, rules consistency, playtesting, Table Top Simulator integration, a fleet-building website, and a mobile app. They bring skills from their professions, industry experience, Armada Worlds participation, and official playtesting.</Typography>
            <SubHeader text="Does Legacy sell plastic ships, stands, cards, or cardboard?"/>
            <Typography>No, Armada Legacy does not sell ships, stands, cards, or cardboard components. We provide free downloadable documents, Table Top Simulator integration, and fleet-building software. You will need to source your own ships, stands, and printing methods for our content. Please note that we are not affiliated with any stores or manufacturers that produce these products. Our focus is on creating high-quality, balanced content for the community to enjoy.</Typography>
        </>
    )
}