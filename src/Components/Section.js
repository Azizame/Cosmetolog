import Sectionend from "./SectionComponents/SectionEnd";
import SectionFifth from "./SectionComponents/SectionFifth";
import SectionFourth from "./SectionComponents/SectionFourth";
import SectionSix from "./SectionComponents/SectionSix";
import SectionTeth from "./SectionComponents/SectionTeth";
import SectionThrid from "./SectionComponents/SectionThrid";
import SectionTwo from "./SectionComponents/SectionTwo";

export default function Section(){
    return(
        <div>
            <SectionTeth />
            <SectionTwo />
            <SectionThrid/>
            <SectionFourth/>
            <SectionFifth/>
            <SectionSix />
            <Sectionend />
        </div>
    )
}