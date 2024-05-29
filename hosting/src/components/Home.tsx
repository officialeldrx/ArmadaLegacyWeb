import { Typography } from "@mui/material";
import Header from "./header";
import SubHeader from "./subHeader";
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
                It stands as a testament to the collective creativity and dedication of the Star Wars: Armada community. Born from a shared vision to create fun and interesting Armada content.
            </Typography>

            <Typography>
                Join us, as we keep the game moving forward, bringing new ships to life, and upholding Armada's <i>Legacy</i> of excellence.
            </Typography>


            <Header text="FAQ"/>
            <SubHeader text="Isn't Star Wars: Armada still officially supported?"/>
            <Typography>Yes it Is! Atomic Mass Games currently supports Star Wars: Armada. However, the release schedule has been very sparse. The founders of Armada Legacy felt that the game and the community deserved more frequent updates so they took it upon themselves to make them!​</Typography>
            <SubHeader text="What if new content is released that overlaps Armada Legacy content?"/>
            <Typography>If Atomic Mass Games were to release a new wave of Star Wars: Armada that shares any content released by Armada Legacy, we will pull our version in favor of the official content. We are not looking to replace the official developers in the eyes of the community but we are looking to keep the community excited about the game we love.</Typography>
            <SubHeader text="Can I fly an Armada Legacy fleet against a standard Armada fleet?"/>
            <Typography>No. Armada Legacy fleets are meant to be flown against other Armada Legacy fleets. This is unofficial, community built content and should only be flown against an opponent that is flying the same. Anything else leads to frustration among the larger community and resentment towards our work.​​</Typography>
            <SubHeader text="Is Armada Legacy free and if so how can I support the project?"/>
            <Typography>Armada Legacy is a free not for profit project and will always remain as such. There is currently no way to support the project financially and if there were it would only cover cost of maintenance and development. However, you can support us by telling others about it, flying our content, and maybe even joining our team! Check out our discord for more info.</Typography>
        </>
    )
}