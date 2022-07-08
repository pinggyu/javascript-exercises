const ftoc = function(num) {
  let celcius = Number((((num - 32) * 5 / 9).toFixed(1)));
  if (celcius === '0.0') {
    celcius = 0;
  }
  return celcius;
};

const ctof = function(num) {
  let far = Number((((num * 9 / 5) + 32).toFixed(1)));
  if (far === '0.0') {
    far = 0;
  }
  return far;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
