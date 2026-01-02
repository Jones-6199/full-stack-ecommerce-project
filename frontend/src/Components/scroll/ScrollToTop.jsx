import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Zoom } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';






export default function ScrollToTop() {


  

  return (
    <Zoom in={useScrollTrigger({threshold: 500})
} >
      <Fab onClick={() => {
        window.scrollTo(500,0)
      }} variant="extended" sx={{position: "fixed" ,  bottom:33, right: 33 , }}  size='small' color="primary" aria-label="add">
        <ArrowUpwardIcon />
      </Fab>
    </Zoom>
  );
}
