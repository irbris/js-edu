/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
 focus = 'family', 
 knowsProgramming = true, 
 config = { family: 4 }) {
  let totalTime;
  if(knowsProgramming) {
    totalTime = 800;
  } else {
    totalTime = 1300;
  }
  let timeOnWeek = config[focus];
  let res = Math.ceil(totalTime / timeOnWeek);
  return res;
};
  