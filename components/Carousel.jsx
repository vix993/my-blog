import { useEffect, useState } from "react"

const websites = [
    {url: "https://proffys.vercel.app/", name: "Proffy", description: "A skill sharing platform.", github: "https://github.com/vix993/FrontendForProffy"},
    {url: "https://consume-it.vercel.app/", name: "ConsumeIt", description: "An ecommerce interface.", github: "https://github.com/vix993/consume-it"},
    {url: "https://victorgamedev.netlify.app/", name: "Life Death's First Mission", description: "A Javascript endless scroller.", github: "https://github.com/vix993/Life-Death-s-First-Mission"},
    {url: "https://h-appy.vercel.app/app", name: "hAppy", description: "A user based map of Children Homes in London.", github: "https://github.com/vix993/hAppy"},
    {url: "https://cub3d.vercel.app/", name: "Cub3D", description: "A javascript implementation of the Raycasting algorithm as coined in Wolfenstein 3D. Arrow keys to move.", github: "https://github.com/vix993/cub3d"},
    {url: "https://move-it-xp.vercel.app/", name: "Move It", description: "A platform in which users can segment their workflow and be provided with health based challenges.", github: "https://github.com/vix993/move-it"},
    {url: "http://rand-music-dev.herokuapp.com/", name: "RandMusic", description: "A platform to find random, unfiltered music.", github: "https://github.com/vix993/RandMusic"},
    {url: "https://desvious-order.vercel.app/", name: "Desvious-Order", description: "My bands website.", github: "https://github.com/vix993/DesviousOrderSite"},
    {url: "https://life-sort.vercel.app/", name: "Life-sort", description: "A task management app.", github: "https://github.com/vix993/DesviousOrderSite"},
    {url: "https://afraidat27.netlify.app/", name: "Afraid at 21", description: "A short 2D platformer based on a single released by DesviousOrder.", github: ""},
]

export const Carousel = ({}) => {
    const [selectedSiteIndex, setSelectedSiteIndex] = useState(0);
    const [currentSite, setCurrentSite] = useState(websites[selectedSiteIndex]);

    useEffect(() => {
        setCurrentSite(websites[selectedSiteIndex]);
    }, [selectedSiteIndex])

    const handleSelectedSiteChange = (changeValue) => {
        if ((selectedSiteIndex + changeValue) >= 0 && (selectedSiteIndex + changeValue) < websites.length) {
            setSelectedSiteIndex(selectedSiteIndex + changeValue);
        }
    }
    return (
        <main className="w-full h-full mx-auto rounded-2xl">
            <header></header>
            <section></section>
            <iframe src={currentSite.url} frameborder="0" width="100%" height="600px" className="rounded-2xl"></iframe>
            <section className="flex justify-evenly">
                <button className="w-12 h-12" onClick={() => handleSelectedSiteChange(-1)}>back</button>
                <button onClick={() => handleSelectedSiteChange(1)}>next</button>
            </section>
        </main>
    )
}