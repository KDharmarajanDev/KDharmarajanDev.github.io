import SandboxImage from './assets/Sandbox.jpeg';
import LEDLightStripScheduler from './assets/LEDLightStripScheduler.png';
import CoinConnect from './assets/CoinConnect.png';

export function Introduction (props) {
    return (
        <p id="about-description">
        I'm a UC Berkeley student studying electrical engineering and computer science with a passion for autonomous systems and intelligent robotics.
        <br></br>
        I enjoy creating software solutions that are intuitive and efficient.
        </p>
    );
}

export const publications = [
    {
        title: "",
        authors: [],
        description: ""
    },
]

export const projects = [
    {
        name: "LED Light Strip Scheduler",
        image: LEDLightStripScheduler,
        link: "https://github.com/KDharmarajanDev/led-light-strip-android-app",
        description: "LED Light Strip Scheduler is a simple and powerful application on the " 
        + "Android operating system that allows users to control an Arduino operating RGB LED Strips with over one billion possible sequences.",
        technologies: ["C++", "Java"]
    },
    // {
    //   name: "Knot Visualizer",
    //   image: "./assets/LEDLightStripScheduler.png",
    //   link: "https://github.com/KDharmarajanDev/knot-visualizer-app",
    //   description: "Knot Visualizer is an iOS application fueled by ARKit that displays the progression of knot tying in "
    //   + "one's environment with the goal of educating the end user.",
    //   technologies: ["Swift"]
    // },
    // {
    //   name: "Drone Control Web Server",
    //   image: "./assets/LEDLightStripScheduler.png",
    //   link: "https://github.com/KDharmarajanDev/drone-control-web-server",
    //   description: "Drone Control Web Server is a modular full-stack application that allows for ssensor data streaming and data plotting.",
    //   technologies: ["React", "Node.JS", "ROS"]
    // },
    {
        name: "CoinConnect",
        image: CoinConnect,
        description: "CoinConnect is a Discord bot that is a centralized means of managing cryptocurrency portfolios across various crypto exchanges. This bot utilizes "
                    + "The bot supports asset selling/buying, price data gathering, and showing the portfolio valuation. The GitHub code is not public.",
        technologies: ["Python"]
    },
    {
        name: "Sandbox",
        image: SandboxImage,
        link: "https://github.com/shreystechtips/106a-final-project",
        website: "https://sandbox-106a.weebly.com/",
        description: "The Sandbox is an intelligent kinetic sand table that is able to draw patterns on sand by moving the steel ball. Input for the design can be taken as mathematical " +
                    "functions, G-code files, or as a drawing from a user interface. The Sandbox also has an interactive mode that tracks a finger.",
        technologies: ["Python", "React"]
    }
]