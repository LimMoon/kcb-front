import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/core/styles';

const CustomAppBar = withStyles({
    alignItems: 'center',
    root: {
        backgroundColor: '#696868',
    },
})(AppBar);

const Footer = () => {
    return (
        <CustomAppBar position="static" >
            <Container maxWidth="md">
                <Box
                    spacing={1}
                    direction="row"
                    alignItems="center"
                    justifyContent="center">
                    <Box display="flex"
                        alignItems="center"
                        justifyContent="center">
                        <Typography style={{ color: '#ffffff' }} display="inline">지나친 음주는 뇌졸중, 기억력 손상이나 치매를 유발합니다. 임신 중 음주는 기형아 출생 위험을 높입니다.</Typography>

                    </Box>
                    <Box display="flex"
                        alignItems="center"
                        justifyContent="center">
                        <Typography style={{ color: '#ffffff' }} display="inline">lim.moon.95@gmail.com & bb9e.bb8.c3po.r2d2@gmail.com</Typography>

                    </Box>
                </Box>
            </Container>
        </CustomAppBar>
    )
}
export default Footer;