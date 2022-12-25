import SandboxImage from './assets/Sandbox.jpeg';
import LEDLightStripScheduler from './assets/LEDLightStripScheduler.png';
import CoinConnect from './assets/CoinConnect.png';
import { Link, Typography } from '@mui/material';
import { styled } from '@mui/system';
import FleetDAgger from './assets/FleetDAgger.gif';
import FleetDAggerFirst from './assets/FleetDAggerFirst.png';
import DTFramework from './assets/DTFramework.png';

export const StyledLink = styled(Link, {
        shouldForwardProp: (prop) => true
    })(({ theme }) => ({
        color: theme.palette.text.link
    }));

export function Introduction (props) {
    return (
        <Typography variant="p" color={"theme.palette.text.main"}>
        I'm a UC Berkeley undergraduate studying electrical engineering and computer science with a passion for autonomous systems and intelligent robotics. 
        Currently, I'm in <StyledLink href="https://goldberg.berkeley.edu/" underline="hover">Prof. Ken Goldberg's</StyledLink> <StyledLink href="https://autolab.berkeley.edu/" underline="hover">AUTOLAB</StyledLink> working 
        on fog robotics, surgical robotics, real world reinforcement learning, and motion planning.
        Previously, I have interned at Roblox and AWS. I will be interning at Databricks in Summer 2023.
        </Typography>
    );
}

export const publications = [
    {
        title: "Fleet-DAgger: Interactive Robot Fleet Learning with Scalable Human Supervision",
        authors: ["Ryan Hoque", "Lawrence Yunliang Chen", "Satvik Sharma", "Karthik Dharmarajan", 
                    "Brijen Thananjeyan", "Pieter Abbeel", "Ken Goldberg"],
        conference: "Conference on Robot Learning (CoRL) 2022",
        description: "",
        arXiv: "https://arxiv.org/abs/2206.14349",
        github: "https://github.com/BerkeleyAutomation/ifl_benchmark",
        tweet: "https://twitter.com/ryan_hoque/status/1542932195949432832?ref_src=twsrc%5Etfw",
        image: FleetDAggerFirst,
        hoverImage: FleetDAgger
    },
    {
        title: "A Digital Twin Framework for Telesurgery in the Presence of Varying Network Quality of Service",
        authors: ["Sophea Bonne*", "Will Panitch*", "Karthik Dharmarajan*", "Kishore Srinivas*", "Jerri-Lynn Kincade", 
                "Thomas Low", "Bruce Knoth", "Cregg Cowan", "Danyal Fer", "Brijen Thananjeyan", "Justin Kerr", 
                "Jeffrey Ichnowski", "Ken Goldberg"],
        conference: "Conference on Automation Science and Engineering (CASE) 2022",
        description: "",
        paper: "https://ieeexplore.ieee.org/document/9926585",
        image: DTFramework,
        hoverImage: DTFramework,
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