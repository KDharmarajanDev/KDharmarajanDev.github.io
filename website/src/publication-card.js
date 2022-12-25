import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
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
    padding: 10,
    backgroundColor: theme.palette.background.default,
    boxShadow: "none"
}));

const StyledButton = styled(Button, {
  shouldForwardProp: (_) => true,
})(({ theme }) => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  borderColor: 'white',
  color: 'white'
}));

const StyledDescription = styled(Typography, {
  shouldForwardProp: (_) => true,
})(({ theme }) => ({
  color: "white",
  textAlign: "center",
  marginTop: 10,
  padding: "10px"
}));

const ButtonContainer = styled('div', {
  shouldForwardProp: (_) => true
})(({ theme }) => ({
  display: "flex",
  justifyContent: "center"
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
        <Typography>
            { authorStringComponents[0] ? authorStringComponents[0] + ", " : "" }
            <strong>
                { authorStringComponents[1] }
            </strong>
            { authorStringComponents[2] ? ", " + authorStringComponents[2] : "" }
        </Typography>
    )
}

function ChangingCardMedia(props) {
    const [isOver, setIsOver] = useState(false);

    return (
        <StyledCardMedia
            component="img" src={isOver ? props.hoverImage: props.image}
            onMouseOver={() => setIsOver(true)}
            onMouseOut={() => setIsOver(false)}
         />
    )
}
  
const StyledCardMedia = styled(CardMedia, {
    shouldForwardProp: (_) => true
  })(({ theme }) => ({
    objectFit: 'contain',
  }));

export default function PublicationCard(props) {
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

    return (
            <StyledCard key={props.title}>
                <Grid container spacing={1}>
                    <Grid item sm={6}>
                        <ChangingCardMedia image={props.image} hoverImage={props.hoverImage}/>
                    </Grid>
                    <Grid item sm={6}>
                        <CardHeader title={props.title}/>
                        <AuthorList authors={props.authors}/>
                        <StyledDescription component="p">
                            {props.conference}
                        </StyledDescription>
                        <ButtonContainer>
                            {props.paper &&
                            <CardActions>
                                <StyledButton variant="outlined"
                                startIcon={<ArticleIcon/>}
                                onClick={paperCallback}>
                                Paper
                                </StyledButton>
                            </CardActions>
                            }
                            {props.arXiv &&
                            <CardActions>
                                <StyledButton variant="outlined"
                                onClick={arxivCallback}>
                                arXiv
                                </StyledButton>
                            </CardActions>
                            }
                            {props.github &&
                            <CardActions>
                                <StyledButton variant="outlined"
                                startIcon={<GitHubIcon/>} onClick={githubCallback}>
                                Code
                                </StyledButton>
                            </CardActions>
                            }
                            {props.website &&
                            <CardActions>
                                <StyledButton variant="outlined"
                                startIcon={<WebAssetIcon/>} onClick={websiteCallback}>
                                Website
                                </StyledButton>
                            </CardActions>
                            }
                            {props.tweet &&
                            <CardActions>
                                <StyledButton variant="outlined"
                                onClick={tweetCallback}>
                                Tweet
                                </StyledButton>
                            </CardActions>
                            }
                        </ButtonContainer>
                        <StyledDescription component="p">
                            {props.description}
                        </StyledDescription>
                    </Grid>
                </Grid>
            </StyledCard>
            );
}  