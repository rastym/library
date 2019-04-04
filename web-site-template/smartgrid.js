const smartgrid = require("smart-grid");

const settings = {
  columns: 24,
  offset: "32px",
  container: {
    maxWidth: "1170px",
    fields: "25px"
  },
  oldSizeStyle: false
};

smartgrid("./src/precss", settings);
