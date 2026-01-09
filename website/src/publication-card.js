import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';
import WebAssetIcon from '@mui/icons-material/WebAsset'; 
import ArticleIcon from '@mui/icons-material/Article';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { useCallback, useMemo, useState } from 'react';
import { styled } from '@mui/system';
import { Grid } from '@mui/material';

import arxiv_logo from './assets/arxiv_logo.png';

const StyledCard = styled(Card, {
  shouldForwardProp: (_) => true
})(({ theme }) => ({
    border: "none",
    height: "fit-content",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: theme.palette.background.default,
    boxShadow: "none"
}));

const StyledButton = styled(Button, {
  shouldForwardProp: (_) => true,
})(({ theme }) => ({
  color: theme.palette.text.main,
  textTransform: 'none',
  border: '2px solid',
  borderColor: theme.palette.secondary.main,
  '&:hover': {
    border: '1px solid',
    borderColor: theme.palette.secondary.main  
  }
}));

const StyledDescription = styled(Typography, {
  shouldForwardProp: (_) => true,
})(({ theme }) => ({
  color: theme.palette.text.main,
  paddingTop: 3,
  paddingBottom: 3,
  fontFamily: theme.typography.p.fontFamily
}));

const StyledCardTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.main,
    fontWeight: "bold"
}));

const formatSuperscript = (text) => {
    if (typeof text !== 'string') return text;
    const parts = text.split(/(†)/);
    return parts.map((part, index) => {
        if (part === '†') {
            return <sup key={index}>{part}</sup>;
        }
        return part;
    });
};

function AuthorList(props) {
    const authorComponents = useMemo(() => {
        const endIndex = props.authors.findIndex((element) => element.substr(0, 19) === "Karthik Dharmarajan");
        
        return props.authors.map((author, index) => {
            const isKarthik = index === endIndex;
            const content = formatSuperscript(author);
            return (
                <span key={index}>
                    {isKarthik ? <strong>{content}</strong> : content}
                    {index < props.authors.length - 1 ? ", " : ""}
                </span>
            );
        });
    }, [props.authors]);

    return (
        <StyledDescription>
            {authorComponents}
        </StyledDescription>
    )
}

function ChangingCardMedia(props) {
    const [isOver, setIsOver] = useState(false);
    const src = isOver ? props.hoverImage: props.image;
    const isVideo = src && (typeof src === 'string' && src.endsWith('.mp4'));

    return (
        <StyledCardMedia
            component={isVideo ? "video" : "img"}
            src={src}
            autoPlay={isVideo}
            loop={isVideo}
            muted={isVideo}
            playsInline={isVideo}
            onMouseEnter={() => setIsOver(true)}
            onMouseLeave={() => setIsOver(false)}
         />
    )
}
  
const StyledCardMedia = styled(CardMedia, {
    shouldForwardProp: (_) => true
  })(({ theme }) => ({
    objectFit: 'contain',
    maxWidth: '200px'
  }));

function InfoButtons(props) {
    const githubCallback = useCallback(() => {
        window.open(props.github)
    }, [props.github]);

    const websiteCallback = useCallback(() => {
    window.open(props.website)
    }, [props.website]);

    const tweetCallback = useCallback(() => {
        window.open(props.tweet)
    }, [props.tweet]);  

    const arxivCallback = useCallback(() => {
        window.open(props.arXiv)
    }, [props.arXiv]);

    const paperCallback = useCallback(() => {
        window.open(props.paper)
    }, [props.paper]);  

    const videoCallback = useCallback(() => {
        window.open(props.video)
    }, [props.video]);

    return (
        <Grid container 
        spacing={1.5}
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ marginTop: 0 }}>
            {props.paper &&
            <Grid item>
                <StyledButton variant="outlined"
                startIcon={<ArticleIcon/>}
                onClick={paperCallback}>
                Paper
                </StyledButton>
            </Grid>
            }
            {props.arXiv &&
            <Grid item>
                <StyledButton variant="outlined"
                startIcon={<img src={arxiv_logo} alt="arXiv" style={{height: 20}}/>}
                    onClick={arxivCallback}>
                    arXiv
                </StyledButton>
            </Grid>
            }
            {props.github &&
            <Grid item>
                <StyledButton variant="outlined"
                startIcon={<GitHubIcon/>} onClick={githubCallback}>
                Code
                </StyledButton>
            </Grid>
            }
            {props.video &&
            <Grid item>
                <StyledButton variant="outlined"
                startIcon={<YouTubeIcon/>} onClick={videoCallback}>
                Video
                </StyledButton>
            </Grid>
            }
            {props.website &&
            <Grid item>
                <StyledButton variant="outlined"
                startIcon={<WebAssetIcon/>} onClick={websiteCallback}>
                Website
                </StyledButton>
            </Grid>
            }
            {props.tweet &&
            <Grid item>
                <StyledButton variant="outlined"
                startIcon={<TwitterIcon/>} onClick={tweetCallback}>
                Tweet
                </StyledButton>
            </Grid>
            }
            {props.news &&
                props.news.map(news => (
                    <Grid item>
                        <StyledButton variant="outlined"
                        startIcon={<NewspaperIcon/>} onClick={() => window.open(news.link)}>
                        {news.publisher}
                        </StyledButton>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default function PublicationCard(props) {

    return (
            <StyledCard key={props.title} elevation={0}>
                <Grid container 
                      spacing={1.5}
                      direction="row"
                      justifyContent="center"
                      alignItems="flex-start"
                    >
                    <Grid item sm={3}>
                        <ChangingCardMedia image={props.image} hoverImage={props.hoverImage}/>
                    </Grid>
                    <Grid item sm={9}>
                        <StyledCardTitle>
                            {formatSuperscript(props.title)}
                        </StyledCardTitle>
                        {props.authors ?
                        <AuthorList authors={props.authors}/> :
                        null
                        }
                        {props.conference ? 
                        <StyledDescription component="p" sx={{ fontStyle: 'italic' }}>
                            {formatSuperscript(props.conference)}
                        </StyledDescription> : 
                        null}
                        {props.special ? 
                        <StyledDescription component="p">
                            <strong>
                                {formatSuperscript(props.special)}
                            </strong>
                        </StyledDescription> : 
                        null}
                        <StyledDescription component="p">
                            {formatSuperscript(props.description)}
                        </StyledDescription>
                        <InfoButtons arXiv={props.arXiv} github={props.github}
                              tweet={props.tweet} paper={props.paper} video={props.video}
                              website={props.website} news={props.news}/>
                    </Grid>
                </Grid>
            </StyledCard>
            );
}  