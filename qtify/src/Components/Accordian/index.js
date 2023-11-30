import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState} from 'react';
import './accordian.css';
import { green } from '@mui/material/colors';


export default function ControlledAccordions() {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel: false)
  }
    

  return (
    <div className='acordian'>
      <h1>FAQs</h1>
    <div >
      <Accordion  className='acc'  expanded={expanded === 'panel1'} 
      onChange={(e, isExpanded) => handleChange(isExpanded, 'panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color:' green'}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography >Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion className='acc'  expanded={expanded === 'panel2'}
       onChange={(e, isExpanded) => handleChange(isExpanded, 'panel2')}
       >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color:' green'}}/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography >
          Can I download and listen to songs offline?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Sorry, unfortunately we don't provide the service to download any songs.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
    </div>
  );
}