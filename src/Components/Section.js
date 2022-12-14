import Sectionend from "./SectionComponents/SectionEnd";
import SectionFifth from "./SectionComponents/SectionFifth";
import SectionFourth from "./SectionComponents/SectionFourth";
import SectionSix from "./SectionComponents/SectionSix";
import SectionTeth from "./SectionComponents/SectionTeth";
import SectionThrid from "./SectionComponents/SectionThrid";
import SectionTwo from "./SectionComponents/SectionTwo";
import { useState, useEffect } from "react"
import { getElementByType, getElementByVideo } from "../api";

export default function Section(){
    const [carousel, setCarousel] = useState([])
    const [video, setVideo] = useState([])

    useEffect(() => {
        getElementByType().then(data => {
            setCarousel(data)
        })
        getElementByVideo().then(data => {
            setVideo(data)
        })
    }, [])
    return(
        <div>
            <SectionTeth />
            <SectionTwo carousel={carousel} video={video}/>
            <SectionThrid/>
            <SectionFourth/>
            <SectionFifth/>
            <SectionSix />
            <Sectionend />
        </div>
    )
}