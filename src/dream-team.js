module.exports = function createDreamTeam(members) {
  let chars = [];
  if (!Array.isArray(members)) return false;
  members.forEach(el => {
    if (typeof el == 'string'){
      chars.push(el.trim()[0].toUpperCase());
    }
  });
  return chars.length === 0 ? false : [...chars].sort().join('');
};
