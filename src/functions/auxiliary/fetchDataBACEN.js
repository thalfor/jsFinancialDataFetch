//
const axios = require('axios');

async function fetchDataBACEN(seriesCode, startDate, endDate) {
  const url = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${seriesCode}/dados?formato=json&dataInicial=${startDate}&dataFinal=${endDate}`;
  const response = await axios.get(url);
  return response.data;
};

module.exports.fetchDataBACEN = fetchDataBACEN;
//