import * as React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import {Link} from "react-scroll";

function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    target: window ? window : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
  return (
    <Zoom in={trigger}>
      <Box
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 0 }}
      >
          <Link
              to='home'
              className='navbar-brand m-3'
              spy={true} smooth={true}
              offset={-255}
              duration={50}>
              {children}
          </Link>
      </Box>
    </Zoom>
  );
}
ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};
export default function BackToTop(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon/>
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}