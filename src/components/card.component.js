import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
    card: {
        width: 320,
        height: 320
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    wrapper: {
        marginBottom: '20px'
    }
});

class RecipeReviewCard extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const { classes, imageSrc, alcohol, review, beer } = this.props;
        return (
            <div className={classes.wrapper}>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={<Avatar aria-label="Beer" className={classes.avatar}>{beer.substring(0, 1)}</Avatar>}
                        title={beer}
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        className={classes.media}
                        src={imageSrc}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography component="p">Alcohol: {alcohol}%</Typography>
                        <Typography component="p">Review: {review} out of 5</Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
