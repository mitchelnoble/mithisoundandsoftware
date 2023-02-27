import React from "react";
import "../styles/Description.css";
import GradingIcon from '@mui/icons-material/Grading';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Button } from "@mui/material";
import Zoom from "@mui/material/Zoom";

const Description = (props) => {
  return (
    <div id="description-container">
      <Zoom in timeout={props.theme.transitions.duration.longer} easing={props.theme.transitions.easing.easeInOut}>
      <h2 id="description-headline">A one stop shop</h2>
      </Zoom>
      <ul id="description-list">
        <li>
          <GradingIcon fontSize="large" color="info"/>
          <h3>200% Ownership</h3>
        </li>
        <li>
          <TipsAndUpdatesIcon fontSize="large" color="info"/>
          <h3>Original Samples</h3>
        </li>
        <li>
          <ThumbUpOffAltIcon fontSize="large" color="info"/>
          <h3>Instrumentals & Stems Ready</h3>
        </li>
      </ul>
      <Button variant="outline" color="secondary" size="large" endIcon={<ArrowRightIcon />}>Learn More </Button>
    </div>
  );
};

export default Description;
