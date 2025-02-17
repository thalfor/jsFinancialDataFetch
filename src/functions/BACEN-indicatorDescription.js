//
// run this at the beginning
//
const knex = require('../database');

async function insertSQL(){

  await knex('db_financialIndicators').insert([
    { code: '11', indicator: 'Selic', description: 'taxa de juros', period: 'D' }, 
    { code: '1178', indicator: 'Selic', description: 'anualizada base 252', period: 'D' }, 
    { code: '4189', indicator: 'Selic', description: 'acumulada no mês', period: 'M' }, 
    { code: '4390', indicator: 'Selic', description: 'acumulada no mês anualizada base 252', period: 'M' }, 
    { code: '4447', indicator: 'IPCA', description: 'comercializáveis', period: 'M' }, 
    { code: '4448', indicator: 'IPCA', description: 'não comercializáveis', period: 'M' }, 
    { code: '4449', indicator: 'IPCA', description: 'preços monitorados total', period: 'M' }, 
    { code: '4466', indicator: 'IPCA', description: 'números médias aparadas com suavização', period: 'M' }, 
    { code: '10841', indicator: 'IPCA', description: 'bens não duráveis', period: 'M' }, 
    { code: '10842', indicator: 'IPCA', description: 'bens semi duráveis', period: 'M' }, 
    { code: '10843', indicator: 'IPCA', description: 'duráveis', period: 'M' }, 
    { code: '10844', indicator: 'IPCA', description: 'serviços', period: 'M' }, 
    { code: '11426', indicator: 'IPCA', description: 'núcleo médias aparadas sem suavização', period: 'M' }, 
    { code: '11427', indicator: 'IPCA', description: 'núcleo por exclusão sem monitorados', period: 'M' }, 
    { code: '11428', indicator: 'IPCA', description: 'ítens livres', period: 'M' }, 
    { code: '16121', indicator: 'IPCA', description: 'núcleo por exclusão', period: 'M' }, 
    { code: '16122', indicator: 'IPCA', description: 'núcleo de dupla ponderação', period: 'M' }, 
    { code: '21379', indicator: 'IPCA', description: 'índice de difusão', period: 'M' }, 
    { code: '27803', indicator: 'Selic', description: 'fator diário extra mercado', period: 'D' }, 
  ]);

  knex.destroy();

};

//insertSQL();

module.exports.insertSQL = insertSQL;
//