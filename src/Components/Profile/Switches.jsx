import React from "react";
import Switch from "@material-ui/core/Switch";

const Switches =()=> {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return(
      <>
        <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      </>
  )
};

export default Switches;