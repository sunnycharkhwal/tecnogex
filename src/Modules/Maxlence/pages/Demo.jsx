import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
export const ControlledAccordions = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="checkout_div">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          className={
            expanded === "panel1" ? "checkout_inner_bg" : "checkout_inner_bg1"
          }
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel1" ? (
                <RadioButtonCheckedIcon className="checkout_inner_icon" />
              ) : (
                <RadioButtonUncheckedIcon />
              )
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 3, pl: 3 }}>
              General settings
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};
