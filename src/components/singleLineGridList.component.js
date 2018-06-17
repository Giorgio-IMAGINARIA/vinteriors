import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

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
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
});

const tileData = [
    {
        img: 'https://cdn.shopify.com/s/files/1/1035/1939/products/image_06e3d9de-158b-4919-b707-f01f526abeed_1024x1024.jpg?v=1519390908',
        title: 'Image',
        author: 'author',
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/1035/1939/products/image_06e3d9de-158b-4919-b707-f01f526abeed_1024x1024.jpg?v=1519390908',
        title: 'Image',
        author: 'author',
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/1035/1939/products/image_06e3d9de-158b-4919-b707-f01f526abeed_1024x1024.jpg?v=1519390908',
        title: 'Image',
        author: 'author',
    }
];

function SingleLineGridList(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
                {tileData.map((tile, index) => (
                    <GridListTile key={index}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton>
                                    <StarBorderIcon className={classes.title} />
                                </IconButton>
                            }
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
