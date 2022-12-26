import { useSelector } from 'react-redux';
import Collapse from '@mui/material/Collapse';
import PublicationCard from './publication-card';

const selectTechnologies = state => state.project;

function containsAnyItem(firstSet, secondSet) {
  for (const element of firstSet) {
    if (secondSet[element]) {
      return true;
    }
  }
  return false;
}

export default function ProjectCard(props) {
    const technologies = useSelector(selectTechnologies);
    const hasValidTechnology = containsAnyItem(props.technologies, technologies);

    return (<Collapse in={hasValidTechnology} timeout={"auto"} unmountOnExit>
              <PublicationCard {...props}/>
            </Collapse>);
}  