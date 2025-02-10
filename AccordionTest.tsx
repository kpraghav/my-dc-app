import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const App: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Controlled MUI Accordion
      </Typography>

      {/* Accordion 1 */}
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Section One</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Content for section one.</Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 2 */}
      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Section Two</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Content for section two.</Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default App;
