
// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

if (label === undefined) {
    return false;
  }
  // eslint-disable-next-line no-useless-escape
  const regex = /[^a-zA-Z0-9]/;
  if (label.match(regex)) return true;

exports.isEmpty = isEmpty;


exports.isEmpty = isEmpty;
