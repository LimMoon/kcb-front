import * as React from 'react';
import { Stack } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MyCommentsTab from '../components/MyCommentsTab';
import MyOrdersTab from '../components/MyOrdersTab';
import MyPointsTab from '../components/MyPointsTab';

const useStyles = makeStyles((theme) => ({
    container: {
        background: "#ffffff",
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const MyPage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.container} >
            <Stack spacing={2}>
                <Stack direction="row">
                    <h2>리디아 님, 안녕하세요</h2>
                </Stack>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example">
                        <Tab label="포인트 내역" {...a11yProps(0)} />
                        <Tab label="댓글 내역" {...a11yProps(1)} />
                        <Tab label="배송 주문 조회" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <MyPointsTab />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <MyCommentsTab />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <MyOrdersTab />
                </TabPanel>
            </Stack>
        </Container>
    );
};
export default MyPage;