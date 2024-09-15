import * as React from 'react';
import {List, styled, IconButtonProps, Typography, IconButton, Card, CardHeader, CardMedia, CardContent, Grid, CardActions, Collapse} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <List>
        <Card>
            <CardHeader sx={{paddingBottom: 0}}
                title="Ship Name"
                titleTypographyProps={{fontFamily: 'Teuton Fett'}}
            />

            <CardActions disableSpacing>
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <CardMedia 
                                component="img"
                                image="https://res.cloudinary.com/dhjk6lir2/image/upload/v1717552771/Wave%20I/Ships/trident-assault-carriers_ozxqhz.png"
                            />
                        </Grid>
                        
                        <Grid item xs={6}>
                            <CardMedia
                                component="img"
                                image="https://res.cloudinary.com/dhjk6lir2/image/upload/v1717552771/Wave%20I/Ships/trident-assault-carriers_ozxqhz.png"
                            />
                        </Grid>
                    </Grid>
                </CardContent>

                <CardContent>
                    <Typography>Description</Typography>
                </CardContent>
            </Collapse>
        </Card>
    </List>
  );
}