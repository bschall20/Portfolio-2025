import Apple from "./images/Apple.jpg"
import Finance from "./images/Finance.jpg"
import Graph from "./images/Graph.jpg"
import Battleship from "./images/Battleship.jpg"



const Projects = [
    {
        id: 1,
        image: Apple,
        alt: "Apple Watch.",
        projectClass: "apple",
        title: "Apple Watch",
        // description: "A landing page for Apple Watch that was modeled after the 2023 official <a href='https://www.apple.com/watch/' className='externalLink'>Apple Watch</a> page.",
        description: "A landing page for Apple Watch that was modeled after the 2023 official Apple Watch page.",
        skill1: "Bootstrap",
        skill2: "Responsive",
        skill3: "HTML5",
        website: "https://bschall20.github.io/Apple-Watch-Landing-Page/",
        github: "https://github.com/bschall20/Apple-Watch-Landing-Page",
    },
    {
        id: 2,
        image: Finance,
        alt: "Build My Finance website logo.",
        projectClass: "finance",
        title: "Build My Finance",
        description: "Personalize all of your incomes and expenses with graphic charts to better plan for your future.",
        skill1: "ExpressJS",
        skill2: "Postgresql",
        skill3: "Kinsta",
        website: "https://buildmyfinance-client-ib2kj.kinsta.app/",
        github: "https://github.com/bschall20/finance-website",
    },
    {
        id: 3,
        image: Graph,
        alt: "Stock graph.",
        projectClass: "graph",
        title: "StockHQ",
        description: "Track your favorite stock market tickers using the news section and candlestick charts.",
        skill1: "Firebase",
        skill2: "React",
        skill3: "RESTful API",
        website: "https://stockhq-2f8e2.web.app/",
        github: "https://github.com/bschall20/Stocks-Website",
    },
    {
        id: 4,
        image: Battleship,
        alt: "Battleship.",
        projectClass: "battleship",
        title: "Battleship",
        description: "Fight a friend or the computer in this battleship website game!",
        skill1: "JQuery",
        skill2: "NodeJS",
        skill3: "JavaScript",
        website: "https://bschall20.github.io/JS-Battleship/",
        github: "https://github.com/bschall20/JS-Battleship",
    }
];

export default Projects;