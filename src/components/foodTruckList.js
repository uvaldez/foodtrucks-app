import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function FoodTruckList(props) {
  const { foodTrucks } = props;
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {foodTrucks.map((item, i) => {
        return (
          <div key={i}>
            <ListItem style={{ cursor: 'pointer', textAlign: 'center' }}> 
              <ListItemText
                primary={item.applicant}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Address:&nbsp;
                    </Typography>
                    {item.address}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Link to={`/${item.objectid}`} style={{ marginBottom: '10px', display: 'block' }}>View</Link>
          <Divider component="li" />
        </div>
        );
      })}
    </List>
  );
}
