import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const CustomTab = withStyles({
    root: {
        backgroundColor: '#696868',
    },
    selected: {
        backgroundColor: '#696868',
    }
})(Tab);

const CustomTabs = withStyles({
    root: {
        backgroundColor: '#696868',
    },
    selected: {
        backgroundColor: '#696868',
    },
    indicator: {
        backgroundColor: "#696868"
    }
})(Tabs);


const NavBar = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <AppBar position="static">
                <Grid container justify={"center"} fullWidth>
                    <CustomTabs value={value} onChange={handleChange} fullWidth>
                        <CustomTab label="What's New" to="/" component={Link} />
                        <CustomTab label="Beer" to="/beer" component={Link} />
                        <CustomTab label="Breweries" to="/brewery" component={Link} />
                        <CustomTab label="Brewpubs" to="/brewpub" component={Link} />
                        <CustomTab label="Goods" to="/goods" component={Link} />
                        <CustomTab label="MyPage" to="/mypage" component={Link} />
                    </CustomTabs>
                </Grid>
            </AppBar>
        </>
    )
}
export default NavBar;