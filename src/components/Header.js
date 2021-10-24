import Box from '@material-ui/core/Box';
import logo from '../logo.png'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const Header = () => {
    return (
        <Box sx={{ height: '150px' }} display="flex" alignItems="center"
            justifyContent="center" bgcolor="#000000"    >
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="150"
                    image={logo}
                />
            </Card>
        </Box>
    )
}
export default Header;