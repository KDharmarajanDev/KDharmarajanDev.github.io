import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import Collapse from '@mui/material/Collapse';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import { useCallback } from 'react';
import { styled } from '@mui/system'

const selectTechnologies = state => state.project;

function containsAnyItem(firstSet, secondSet) {
  for (const element of firstSet) {
    if (secondSet[element]) {
      return true;
    }
  }
  return false;
}

const StyledCard = styled(Card, {
  shouldForwardProp: (_) => true
})(({ theme }) => ({
    border: "none",
    "border-radius": "10px",
    height: "fit-content",
    padding: 10,
    "background-color": "#61892F",
}));

const StyledCardMedia = styled(CardMedia, {
  shouldForwardProp: (_) => true
})(({ theme }) => ({
  objectFit: 'contain',
  height: '400px'
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
  
export default function ProjectCard(props) {
    const clickCallback = useCallback(() => {
      window.open(props.link)
    }, [props.link]);

    const websiteCallback = useCallback(() => {
      window.open(props.website)
      }, [props.website]);

    const technologies = useSelector(selectTechnologies);
    const hasValidTechnology = containsAnyItem(props.technologies, technologies);

    return (<Collapse in={hasValidTechnology} timeout={"auto"} unmountOnExit>
              <StyledCard className="project-container" key={props.name}>
                <CardHeader title={props.name} className="project-container-title"/>
                <StyledCardMedia component="img" image={props.image}/>
                <StyledDescription component="p">
                  {props.description}
                </StyledDescription>
                <ButtonContainer>
                  {props.link &&
                    <CardActions>
                      <StyledButton variant="outlined"
                        startIcon={<GitHubIcon/>} onClick={clickCallback}>
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
                </ButtonContainer>
              </StyledCard>
            </Collapse>);
}  