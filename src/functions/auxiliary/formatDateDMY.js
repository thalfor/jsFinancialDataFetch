//
function formatDateDMY(year, month, day) {
  return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
};

module.exports.formatDateDMY = formatDateDMY;
//