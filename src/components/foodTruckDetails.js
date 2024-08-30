import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import truck from '../images/truck.png';

const FoodTruckView = (props) => {
  const { foodTruck } = props;
  return (
    <Card sx={{ maxWidth: '50%', margin: 'auto' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {(foodTruck.applicant || '').charAt(0).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={foodTruck.applicant}
        subheader={foodTruck.address}
      />
      <img src={truck} alt='truck' style={{ maxWidth: '200px', margin: 'auto', display: 'block' }}/>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {foodTruck.fooditems}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph fontWeight={700}>Type</Typography>
          <Typography paragraph >{foodTruck.facilitytype}</Typography>
          <Typography paragraph fontWeight={700}>Hours:</Typography>
          <Typography paragraph>{foodTruck.dayshours}</Typography>
          <Typography paragraph fontWeight={700}>Address:</Typography>
          <Typography paragraph>{foodTruck.locationdescription}</Typography>
          <Typography paragraph fontWeight={700}>Lot:</Typography>
          <Typography paragraph>{foodTruck.lot}</Typography>
          <Typography paragraph fontWeight={700}>Permit:</Typography>
          <Typography paragraph>{foodTruck.permit}</Typography>
          <Typography paragraph><a href={foodTruck.schedule} target='_blank' rel="noreferrer">Schedule</a></Typography>
          <Link to='/'>Go Back</Link>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default FoodTruckView;
