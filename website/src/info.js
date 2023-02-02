import SandboxImage from './assets/Sandbox.jpeg';
import LEDLightStripScheduler from './assets/LEDLightStripScheduler.png';
import { Link, Typography } from '@mui/material';
import { styled } from '@mui/system';
import FleetDAgger from './assets/FleetDAgger.gif';
import FleetDAggerFirst from './assets/FleetDAggerFirst.png';
import DTFramework from './assets/DTFramework.png';
import TrimodalFramework from './assets/TrimodalFramework.png';
import AutomatedShunt from './assets/AutomatedShunt.png';
import FogROS2 from './assets/FogROS2.png';

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
        title: "FogROS2: An Adaptive Platform for Cloud and Fog Robotics Using ROS 2",
        authors: ["Jeffrey Ichnowski*", "Kaiyuan Chen*", "Karthik Dharmarajan", "Simeon Adebola", 
                    "Michael Danielczuk", "Víctor Mayoral-Vilches", "Nikhil Jha",
                    "Hugo Zhan", "Edith LLontop", "Derek Xu", "John Kubiatowicz", 
                    "Ion Stoica", "Joseph Gonzalez", "Ken Goldberg"],
        conference: "International Conference on Robotics and Automation (ICRA) 2023 (To Appear)",
        description: "",
        arXiv: "https://arxiv.org/abs/2205.09778",
        image: FogROS2,
        hoverImage: FogROS2
    },
    {
        title: "Automating Vascular Shunt Insertion with the dVRK Surgical Robot",
        authors: ["Karthik Dharmarajan*", "Will Panitch*", "Muyan Jiang", "Kishore Srinivas", 
                    "Baiyu Shi", "Yahav Avigal", "Huang Huang",
                    "Thomas Low", "Danyal Fer", "Ken Goldberg" ],
        conference: "International Conference on Robotics and Automation (ICRA) 2023 (To Appear)",
        description: "",
        arXiv: "https://arxiv.org/abs/2211.02293",
        image: AutomatedShunt,
        hoverImage: AutomatedShunt
    },
    {
        title: "A Trimodal Framework for Robot-Assisted Vascular Shunt Insertion When a Supervising Surgeon is Local, Remote, or Unavailable",
        authors: ["Karthik Dharmarajan*", "Will Panitch*", "Baiyu Shi", "Huang Huang", "Lawrence Yunliang Chen", "Thomas Low", "Danyal Fer", "Ken Goldberg"],
        conference: "International Symposium on Medical Robotics (ISMR) 2023 (To Appear)",
        description: "",
        image: TrimodalFramework,
        hoverImage: TrimodalFramework
    },
    {
        title: "Fleet-DAgger: Interactive Robot Fleet Learning with Scalable Human Supervision",
        authors: ["Ryan Hoque", "Lawrence Yunliang Chen", "Satvik Sharma", "Karthik Dharmarajan", 
                    "Brijen Thananjeyan", "Pieter Abbeel", "Ken Goldberg"],
        conference: "Conference on Robot Learning (CoRL) 2022. Oral Presentation (6.5% of papers)",
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
        conference: "IEEE International Conference on Automation Science and Engineering (CASE) 2022",
        description: "",
        paper: "https://ieeexplore.ieee.org/document/9926585",
        image: DTFramework,
        hoverImage: DTFramework,
        video: "https://drive.google.com/file/d/1rTC0sgW_r2_yqQ7-F6LpVbpZPcr5BdOH/view"
    },
]

export const projects = [
    {
        title: "Sandbox",
        image: SandboxImage,
        hoverImage: SandboxImage,
        github: "https://github.com/shreystechtips/106a-final-project",
        website: "https://sandbox-106a.weebly.com/",
        description: "The Sandbox is an intelligent kinetic sand table that is able to draw patterns on sand by moving the steel ball. Input for the design can be taken as mathematical " +
                    "functions, G-code files, or as a drawing from a user interface. The Sandbox also has an interactive mode that tracks a finger.",
        authors: ["Shrey Aeron*", "Sravya Basvapatri*", "Karthik Dharmarajan*", "Ryan Koh*"],
        conference: "EECS 106A Final Project",
        technologies: ["Python", "React"]
    },
    {
        title: "LED Light Strip Scheduler",
        image: LEDLightStripScheduler,
        hoverImage: LEDLightStripScheduler,
        github: "https://github.com/KDharmarajanDev/led-light-strip-android-app",
        description: "LED Light Strip Scheduler is a simple and powerful application on the " 
        + "Android operating system that allows users to control an Arduino operating RGB LED Strips with over one billion possible sequences.",
        technologies: ["C++", "Java"]
    }
]