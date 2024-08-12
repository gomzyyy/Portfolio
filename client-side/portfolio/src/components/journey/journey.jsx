import { SchoolJourney, CollageJourney, CodingJourney } from "./context-journey";

const Journey = () => {

    return (
        <main className="main journey">
            <CodingJourney />

            <div className="upper">
                <SchoolJourney />
                <CollageJourney />
            </div>
        </main>
    )
}
export default Journey;