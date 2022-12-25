import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';
import WebAssetIcon from '@mui/icons-material/WebAsset'; 
import ArticleIcon from '@mui/icons-material/Article';
import { useCallback, useMemo, useState } from 'react';
import { styled } from '@mui/system';
import { Grid } from '@mui/material';

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

function AuthorList(props) {
    const authorStringComponents = useMemo(() => {
        const endIndex = props.authors.findIndex((element) => element.substr(0, 19) === "Karthik Dharmarajan");
        const prevSlice = props.authors.slice(0, endIndex);
        const prevString = prevSlice.join(', ');
        const endSlice = props.authors.slice(endIndex + 1, props.authors.length);
        const endString = endSlice.join(', ');
        return [prevString, props.authors[endIndex], endString];
    }, [props.authors]);

    return (
        <StyledDescription>
            { authorStringComponents[0] ? authorStringComponents[0] + ", " : "" }
            <strong>
                { authorStringComponents[1] }
            </strong>
            { authorStringComponents[2] ? ", " + authorStringComponents[2] : "" }
        </StyledDescription>
    )
}

function ChangingCardMedia(props) {
    const [isOver, setIsOver] = useState(false);

    return (
        <StyledCardMedia
            component="img" src={isOver ? props.hoverImage: props.image}
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
                            {props.title}
                        </StyledCardTitle>
                        {props.authors ?
                        <AuthorList authors={props.authors}/> :
                        null
                        }
                        <StyledDescription component="p" sx={{ fontStyle: 'italic' }}>
                            {props.conference}
                        </StyledDescription>
                        <InfoButtons arXiv={props.arXiv} github={props.github}
                              tweet={props.tweet} paper={props.paper} video={props.video}
                              website={props.website}/>
                        <StyledDescription component="p">
                            {props.description}
                        </StyledDescription>
                    </Grid>
                </Grid>
            </StyledCard>
            );
}  