import { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const NewsItem = styled(Box)(({ theme }) => ({
    marginTop: '10px',
    marginBottom: '10px',
    display: 'flex',
    gap: '10px'
}));

const NewsDate = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    minWidth: '100px',
    color: theme.palette.text.main
}));

const NewsContent = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.main
}));

const ShowMoreButton = styled(Button)(({ theme }) => ({
    marginTop: '10px',
    textTransform: 'none',
    color: theme.palette.text.link
}));

function NewsSection({ news }) {
    const [expanded, setExpanded] = useState(false);
    const INITIAL_DISPLAY_COUNT = 5;
    
    const displayedNews = expanded ? news : news.slice(0, INITIAL_DISPLAY_COUNT);
    const hasMore = news.length > INITIAL_DISPLAY_COUNT;

    return (
        <Box>
            {displayedNews.map((item, index) => (
                <NewsItem key={index}>
                    <NewsDate variant="body1">[{item.date}]</NewsDate>
                    <NewsContent variant="body1">{item.content}</NewsContent>
                </NewsItem>
            ))}
            {hasMore && (
                <ShowMoreButton
                    onClick={() => setExpanded(!expanded)}
                    endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                >
                    {expanded ? 'Show less' : `Show ${news.length - INITIAL_DISPLAY_COUNT} more`}
                </ShowMoreButton>
            )}
        </Box>
    );
}

export default NewsSection;
