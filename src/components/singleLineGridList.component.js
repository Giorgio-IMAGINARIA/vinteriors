import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: grey['50'],
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
});

function SingleLineGridList(props) {
    const { classes, beerToDisplay } = props;
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
                {beerToDisplay.map((tile, index) => (
                    <GridListTile key={index}>
                        <img src={tile.image_url} alt={tile.beer} />
                        <GridListTileBar
                            title={tile.beer}
                            subtitle={<span>only: {tile.quantity_in_stock} left</span>}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

SingleLineGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);
