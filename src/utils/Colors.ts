interface ColorScheme {
  PRIMARY_COLOR: "#ff304f" | "#002651";
  SECONDARY_COLOR: "#002651" | "#ff304f";
  BORDER_COLOR: "#dbdbdb";
  BACKGROUD_COLOR: "#ffffff" | "#000000";
}

/**
 * Finish with dark options
 * save a defatul theme in storage and change when user use darkmode
 */
const ColorsDark: ColorScheme = {
  PRIMARY_COLOR: "#ff304f",
  SECONDARY_COLOR: "#002651",
  BORDER_COLOR: "#dbdbdb",
  BACKGROUD_COLOR: "#ffffff",
};
const ColorsLight: ColorScheme = {
  PRIMARY_COLOR: "#ff304f",
  SECONDARY_COLOR: "#002651",
  BORDER_COLOR: "#dbdbdb",
  BACKGROUD_COLOR: "#000000",
};

const selectTheme = (): ColorScheme => {
  return ColorsLight;
};

export const Colors: ColorScheme = selectTheme();
