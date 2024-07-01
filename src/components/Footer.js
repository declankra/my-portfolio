import React from 'react';
import './Footer.css';

import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div className="Footer">
      <p>see github repo for online portfolio updates: <a href="https://github.com/declankra/my-portfolio"><GitHubIcon /> declankra/my-portfolio</a></p>
      <p>website was last updated: 7/01/24</p>
    </div>
  );
};

export default Footer;