const size_up = {
  medium: '40em',
  large: '64em',
  xlarge: '87.5em',
};

const size_down = {
  small: '39.9375em',
  medium: '63.9375em',
  large: '87.4375em',
};

const breakpointsUp = {
  medium: `(min-width: ${size_up.medium})`,
  large: `(min-width: ${size_up.large})`,
  xlarge: `(min-width: ${size_up.xlarge})`,
};

const breakpointsDown = {
  small: `(max-width: ${size_down.small})`,
  medium: `(max-width: ${size_down.medium})`,
  large: `(max-width: ${size_down.large})`,
};

export default { breakpointsUp, breakpointsDown };
