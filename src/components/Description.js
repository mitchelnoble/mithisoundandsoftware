import React from "react";
import "../styles/Description.css";
import GradingIcon from '@mui/icons-material/Grading';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Button } from "@mui/material";

const Description = () => {
  return (
    <div id="description-container">
      <h2 id="description-headline">A one stop shop</h2>
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
    <Button variant="outline" color="secondary">Learn More <ArrowRightIcon /></Button>
    </div>
  );
};

export default Description;
