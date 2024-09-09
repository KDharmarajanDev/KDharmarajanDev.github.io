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
import FogROS2SGC from './assets/FogROS2SGC.png';
import RAVSI from './assets/RAVSI.png';
import ORBITFirst from './assets/ORBITFirst.png';
import ORBIT from './assets/ORBIT.gif';
import STITCHFirst from './assets/STITCHFirst.png';
import STITCH from './assets/STITCH.gif';
import MirageFirst from './assets/MirageFirst.png';
import Mirage from './assets/Mirage.gif';
import BOMPFirst from './assets/BOMPFirst.png';
import BOMP from './assets/BOMP.gif';
import ROVI from './assets/ROVI.png';

export const StyledLink = styled(Link, {
        shouldForwardProp: (prop) => true
    })(({ theme }) => ({
        color: theme.palette.text.link
    }));

export function Introduction (props) {
    return (
        <>
            <Typography variant="p" color={"theme.palette.text.main"}>
                I'm a Stanford Master's student studying computer science with a passion for autonomous systems and intelligent robotics.
            </Typography>

            <br />
            <br />

            <Typography variant="p" color={"theme.palette.text.main"}>
                Previously, I earned my B.S. in Electrical Engineering and Computer Science from UC Berkeley where I worked in <StyledLink href="https://goldberg.berkeley.edu/" underline="hover">Prof. Ken Goldberg's</StyledLink> <StyledLink href="https://autolab.berkeley.edu/" underline="hover">AUTOLAB</StyledLink> on
                cross-embodiment transfer of robot policies, fog robotics, surgical robotics, and motion planning.
                I also interned at Roblox, AWS, and Databricks, working on core infrastructure and large scale data processing pipelines.
            </Typography>
        </>
    );
}

export const publications = [
    {
        title: "RoVi-Aug: Robot and Viewpoint Augmentation for Cross-Embodiment Robot Learning",
        authors: ["Lawrence Yunliang Chen*", "Chenfeng Xu*", "Karthik Dharmarajan", "Zubair Irshad", 
            "Richard Cheng", "Kurt Keutzer", "Masayoshi Tomizuka", "Quan Vuong", "Ken Goldberg"
        ],
        conference: "Conference on Robot Learning (CoRL) 2024",
        description: "",
        website: "https://rovi-aug.github.io/",
        arXiv: "https://arxiv.org/abs/2409.03403",
        tweet: "https://twitter.com/Chenfeng_X/status/1831731664810340419",
        special: "Oral Presentation",
        image: ROVI,
        hoverImage: ROVI
    },
    {
        title: "BOMP: Bin-Optimized Motion Planning",
        authors: ["Zachary Tam", "Karthik Dharmarajan", "Tianshuang Qiu", "Yahav Avigal", "Jeffrey Ichnowski",
            "Ken Goldberg"],
        conference: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2024",
        description: "",
        image: BOMPFirst,
        hoverImage: BOMP
    },
    {
        title: "Mirage: Cross-Embodiment Zero-Shot Policy Transfer with Cross-Painting",
        authors: ["Lawrence Yunliang Chen*", "Kush Hari*", "Karthik Dharmarajan*", "Chenfeng Xu", "Quan Vuong",
            "Ken Goldberg"],
        conference: "Robotics: Science and Systems (RSS) 2024",
        description: "",
        github: "https://github.com/BerkeleyAutomation/mirage",
        arXiv: "https://arxiv.org/abs/2402.19249",
        tweet: "https://twitter.com/Lawrence_Y_Chen/status/1763237997284405620",
        image: MirageFirst,
        hoverImage: Mirage
    },
    {
        title: "STITCH: Augmented Dexterity for Suture Throws Including Thread Coordination and Handoffs",
        authors: ["Kush Hari*", "Hansoul Kim*", "Will Panitch", "Kishore Srinivas", "Vincent Schorp", "Karthik Dharmarajan",
            "Shreya Ganti", "Tara Sadjadpour", "Ken Goldberg"],
        conference: "International Symposium on Medical Robotics (ISMR) 2024",
        description: "",
        special: "Best Paper Finalist",
        website: "https://sites.google.com/berkeley.edu/stitch",
        arXiv: "https://arxiv.org/abs/2404.05151",
        news: [
            {
                publisher: "MIT Technology Review",
                link: "https://www.technologyreview.com/2024/02/22/1088780/watch-this-robot-as-it-learns-to-stitch-up-wounds/"
            }
        ],
        image: STITCHFirst,
        hoverImage: STITCH
    },
    {
        title: "ORBIT-Surgical: An Open-Simulation Framework for Learning Surgical Augmented Dexterity",
        authors: ["Qinxi Yu*", "Masoud Moghani*", "Karthik Dharmarajan", "Vincent Schorp", "Will Panitch",
            "Jingzhou Liu", "Kush Hari", "Huang Huang", "Mayank Mittal", "Ken Goldberg", "Animesh Garg"],
        conference: "IEEE International Conference on Intelligent Robots and Systems (ICRA) 2024",
        description: "",
        website: "https://orbit-surgical.github.io/",
        github: "https://github.com/orbit-surgical/orbit-surgical",
        tweet: "https://x.com/MasoudMoghani/status/1790939952278323434",
        arXiv: "https://arxiv.org/abs/2404.16027",
        news: [
            {
                publisher: "NVIDIA Blog",
                link: "https://blogs.nvidia.com/blog/orbit-surgical-robotics-research-icra/"
            },
            {
                publisher: "NVIDIA Developer",
                link: "https://developer.nvidia.com/blog/nvidia-presents-new-robotics-research-on-geometric-fabrics-surgical-robots-and-more-at-icra/"
            },
            {
                publisher: "The Robot Report",
                link: "https://www.therobotreport.com/nvidia-orbit-surgical-teach-surgical-robots-key-skills-simulation/"
            },
            {
                publisher: "The Decoder",
                link: "https://the-decoder.com/orbit-surgical-uses-nvidias-physics-simulation-and-ray-tracing-to-train-surgical-robots/"
            }
        ],
        image: ORBITFirst,
        hoverImage: ORBIT
    },
    {
        title: "Robot-Assisted Vascular Shunt Insertion with the dVRK Surgical Robot",
        authors: ["Karthik Dharmarajan", "Will Panitch", "Baiyu Shi", "Huang Huang", 
        "Lawrence Yunliang Chen", "Masoud Moghani", "Qinxi Yu", 
        "Kush Hari", "Thomas Low", "Danyal Fer",  "Animesh Garg", "Ken Goldberg"],
        conference: "Journal of Medical Robotics Research (JMRR), vol. 8, no. 03n04",
        description: "",
        paper: "https://www.worldscientific.com/doi/epdf/10.1142/S2424905X23400068",
        website: "https://sites.google.com/berkeley.edu/ravsi",
        image: RAVSI,
        hoverImage: RAVSI
    },
    {
        title: "FogROS2-SGC: A ROS2 Cloud Robotics Platform for Secure Global Connectivity",
        authors: ["Kaiyuan Chen", "Ryan Hoque", "Karthik Dharmarajan", "Edith LLontop", 
                "Simeon Adebola", "Jeffrey Ichnowski", "John Kubiatowicz"," Ken Goldberg"],
        conference: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2023",
        description: "",
        arXiv: "https://arxiv.org/abs/2306.17157",
        website: "https://sites.google.com/view/fogros2-sgc",
        paper: "https://ieeexplore.ieee.org/document/10341719/",
        github: "https://github.com/data-capsule/fogros2-sgc",
        image: FogROS2SGC,
        hoverImage: FogROS2SGC
    },
    {
        title: "FogROS2: An Adaptive Platform for Cloud and Fog Robotics Using ROS 2",
        authors: ["Jeffrey Ichnowski*", "Kaiyuan Chen*", "Karthik Dharmarajan", "Simeon Adebola", 
                    "Michael Danielczuk", "Víctor Mayoral-Vilches", "Nikhil Jha",
                    "Hugo Zhan", "Edith LLontop", "Derek Xu", "John Kubiatowicz", 
                    "Ion Stoica", "Joseph Gonzalez", "Ken Goldberg"],
        conference: "International Conference on Robotics and Automation (ICRA) 2023",
        description: "",
        arXiv: "https://arxiv.org/abs/2205.09778",
        paper: "https://ieeexplore.ieee.org/document/10161307",
        github: "https://github.com/BerkeleyAutomation/FogROS2",
        news: [
            {
                publisher: "TechCrunch",
                link: "https://techcrunch.com/2022/05/23/fogros-brings-robotic-cloud-computing-to-the-robot-operating-system/"
            }
        ],
        image: FogROS2,
        hoverImage: FogROS2
    },
    {
        title: "Automating Vascular Shunt Insertion with the dVRK Surgical Robot",
        authors: ["Karthik Dharmarajan*", "Will Panitch*", "Muyan Jiang", "Kishore Srinivas", 
                    "Baiyu Shi", "Yahav Avigal", "Huang Huang",
                    "Thomas Low", "Danyal Fer", "Ken Goldberg" ],
        conference: "International Conference on Robotics and Automation (ICRA) 2023",
        description: "",
        arXiv: "https://arxiv.org/abs/2211.02293",
        paper: "https://ieeexplore.ieee.org/document/10160966",
        website: "https://sites.google.com/berkeley.edu/autolab-avsi",
        image: AutomatedShunt,
        hoverImage: AutomatedShunt
    },
    {
        title: "A Trimodal Framework for Robot-Assisted Vascular Shunt Insertion When a Supervising Surgeon is Local, Remote, or Unavailable",
        authors: ["Karthik Dharmarajan*", "Will Panitch*", "Baiyu Shi", "Huang Huang", "Lawrence Yunliang Chen", "Thomas Low", "Danyal Fer", "Ken Goldberg"],
        conference: "International Symposium on Medical Robotics (ISMR) 2023",
        description: "",
        paper: "https://ieeexplore.ieee.org/document/10130195",
        image: TrimodalFramework,
        hoverImage: TrimodalFramework
    },
    {
        title: "Fleet-DAgger: Interactive Robot Fleet Learning with Scalable Human Supervision",
        authors: ["Ryan Hoque", "Lawrence Yunliang Chen", "Satvik Sharma", "Karthik Dharmarajan", 
                    "Brijen Thananjeyan", "Pieter Abbeel", "Ken Goldberg"],
        conference: "Conference on Robot Learning (CoRL) 2022",
        description: "",
        special: "Oral Presentation (6.5% of papers)",
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