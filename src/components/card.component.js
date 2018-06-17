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
        height: 600
    },
    media: {
        height: 330
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
    },
    image: {
        width:320
    }
});

class RecipeReviewCard extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const {
            classes,
            imageSrc,
            beer,
            alcohol,
            review,
            brewery,
            numberOfReviews,
            price,
            quantityInStock,
            size,
            sku
        } = this.props;
        return (
            <div className={classes.wrapper}>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={<Avatar aria-label="Beer" className={classes.avatar}>{beer.substring(0, 1)}</Avatar>}
                        title={beer}
                        subheader={brewery}
                    />
                    <CardMedia className={classes.media}>
                        <img className={classes.image} alt={beer} src={imageSrc} />
                    </CardMedia>
                    <CardContent>
                        <Typography component="p">Alcohol: {alcohol}%</Typography>
                        <Typography component="p">Review: {review} out of 5</Typography>
                        <Typography component="p">Review nr.: {numberOfReviews}</Typography>
                        <Typography component="p">Price: {price}</Typography>
                        <Typography component="p">In stock : {quantityInStock}</Typography>
                        <Typography component="p">Size : {size}</Typography>
                        <Typography component="p">SKU : {sku}</Typography>
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
