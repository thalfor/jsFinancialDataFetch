//
const { financialIndicatorsLoopFunction } = require('./routes/BACEN-engine');
const { stocksLoopFunction } = require('./routes/B3-engine');
//
//
//
const arrayIndicators = [
  // SELIC
  11,1178,4390,4189,27803,
  // IPCA
  10843,10844,4447,4448,10841,10842,11428,4449,21379,16122,16121,4466,11426,11427
  /*
  // Exchange Rates - TO BE UPDATED
  3695,21620,13621,
  // Monetary Aggregates - TO BE UPDATED
  27831,27832,27833,
  // Public Finances - TO BE UPDATED
  13762,14212,14029,
  // Foreign Sector - TO BE UPDATED
  22662,22663,22664,
  // Economic Activity - TO BE UPDATED
  24363,24364,
  // Market Indicators - TO BE UPDATED
  22066,26017,
  // Credit and Loans - TO BE UPDATED
  20439,20440,
  // Commodities - TO BE UPDATED
  22358,24365
  */
];
/*
financialIndicatorsLoopFunction(arrayIndicators, 2000, 2025)
  .then(() => console.log(`all indicators processed.`))
  .catch(() => console.error(`error, check function.`));
*/
//
//
//  
const arrayStocks = [
  'AALR3.SA'/*,'ABCB4.SA','ABEV3.SA','AERI3.SA','AFLT3.SA','AGRO3.SA','AGXY3.SA','AHEB3.SA','AHEB6.SA','ALLD3.SA','ALOS3.SA','ALPA3.SA','ALPA4.SA','ALPK3.SA','ALUP11.SA',
  'ALUP3.SA','ALUP4.SA','AMAR11.SA','AMAR3.SA','AMBP3.SA','AMER3.SA','ANIM3.SA','ARML3.SA','ASAI3.SA','ATMP3.SA','AURE3.SA','AVLL3.SA','AZEV11.SA','AZEV3.SA','AZEV4.SA',
  'AZUL4.SA','AZZA3.SA','B3SA3.SA','BALM3.SA','BALM4.SA','BAUH4.SA','BAZA3.SA','BBAS3.SA','BBDC3.SA','BBDC4.SA','BBSE3.SA','BDLL3.SA','BDLL4.SA','BEEF3.SA','BEES3.SA',
  'BEES4.SA','BGIP3.SA','BGIP4.SA','BHIA3.SA','BIOM11.SA','BIOM3.SA','BLAU3.SA','BMEB3.SA','BMEB4.SA','BMGB4.SA','BMIN3.SA','BMIN4.SA','BMKS3.SA','BMOB3.SA','BNBR3.SA',
  'BOBR4.SA','BPAC11.SA','BPAC3.SA','BPAC5.SA','BPAN4.SA','BRAP3.SA','BRAP4.SA','BRAV3.SA','BRBI11.SA','BRFS3.SA','BRKM3.SA','BRKM5.SA','BRKM6.SA','BRSR3.SA','BRSR5.SA',
  'BRSR6.SA','BRST3.SA','BSLI3.SA','BSLI4.SA','CAMB3.SA','CAML3.SA','CASH3.SA','CBAV3.SA','CCRO3.SA','CEAB3.SA','CEBR3.SA','CEBR5.SA','CEBR6.SA','CEDO3.SA','CEDO4.SA',
  'CEEB3.SA','CEED3.SA','CGAS3.SA','CGAS5.SA','CGRA3.SA','CGRA4.SA','CLSA3.SA','CLSC3.SA','CLSC4.SA','CMIG3.SA','CMIG4.SA','CMIN3.SA','COCE5.SA','COGN3.SA','CPFE3.SA',
  'CPLE3.SA','CPLE5.SA','CPLE6.SA','CRFB3.SA','CRPG5.SA','CRPG6.SA','CSAN3.SA','CSED3.SA','CSMG3.SA','CSNA3.SA','CSUD3.SA','CTKA3.SA','CTKA4.SA','CTSA3.SA','CTSA4.SA',
  'CURY3.SA','CVCB3.SA','CXSE3.SA','CYRE3.SA','DASA11.SA','DASA3.SA','DESK3.SA','DEXP3.SA','DEXP4.SA','DIRR3.SA','DMVF3.SA','DOHL3.SA','DOHL4.SA','DOTZ3.SA','DXCO3.SA',
  'EALT3.SA','EALT4.SA','ECOR3.SA','EGIE3.SA','EKTR4.SA','ELET3.SA','ELET5.SA','ELET6.SA','ELMD3.SA','EMAE3.SA','EMAE4.SA','EMBR3.SA','ENEV3.SA','ENGI11.SA','ENGI3.SA',
  'ENGI4.SA','ENJU3.SA','ENMT3.SA','ENMT4.SA','EPAR3.SA','EQMA3B.SA','EQPA3.SA','EQPA5.SA','EQTL3.SA','ESPA3.SA','ESTR4.SA','ETER3.SA','EUCA3.SA','EUCA4.SA','EVEN3.SA',
  'EZTC3.SA','FESA3.SA','FESA4.SA','FHER3.SA','FIEI3.SA','FIQE3.SA','FLRY3.SA','FRAS3.SA','FRIO3.SA','GEPA3.SA','GEPA4.SA','GFSA3.SA','GGBR3.SA','GGBR4.SA','GGPS3.SA',
  'GMAT3.SA','GOAU3.SA','GOAU4.SA','GOLL4.SA','GPAR3.SA','GRND3.SA','GSHP3.SA','GUAR3.SA','HAGA3.SA','HAGA4.SA','HAPV3.SA','HBOR3.SA','HBRE3.SA','HBSA3.SA','HBTS5.SA',
  'HETA4.SA','HOOT4.SA','HYPE3.SA','IFCM3.SA','IGTI11.SA','IGTI11.SA','IGTI3.SA','IGTI3.SA','IGTI4.SA','IGTI4.SA','INEP3.SA','INEP4.SA','INTB3.SA','IRBR3.SA','ISAE3.SA',
  'ISAE4.SA','ITSA3.SA','ITSA4.SA','ITUB3.SA','ITUB4.SA','JALL3.SA','JBSS3.SA','JFEN3.SA','JHSF3.SA','JSLG3.SA','KEPL3.SA','KLBN11.SA','KLBN3.SA','KLBN4.SA','KRSA3.SA',
  'LAND3.SA','LAVV3.SA','LEVE3.SA','LIGT3.SA','LIPR3.SA','LJQQ3.SA','LOGG3.SA','LOGN3.SA','LPSB3.SA','LREN3.SA','LUPA3.SA','LVTC3.SA','LWSA3.SA','MAPT3.SA','MAPT4.SA',
  'MATD3.SA','MBLY3.SA','MDIA3.SA','MDNE3.SA','MEAL3.SA','MELK3.SA','MGEL4.SA','MGLU3.SA','MILS3.SA','MLAS3.SA','MNDL3.SA','MNPR3.SA','MOVI3.SA','MRFG3.SA','MRSA3B.SA',
  'MRSA6B.SA','MRVE3.SA','MTRE3.SA','MTSA4.SA','MULT3.SA','MWET3.SA','MWET4.SA','MYPK3.SA','NEOE3.SA','NEXP3.SA','NGRD3.SA','NORD3.SA','NTCO3.SA','NUTR3.SA','ODPV3.SA',
  'OFSA3.SA','OIBR3.SA','OIBR4.SA','ONCO3.SA','OPCT3.SA','ORVR3.SA','OSXB3.SA','PATI3.SA','PATI4.SA','PCAR3.SA','PDGR3.SA','PDTC3.SA','PEAB3.SA','PETR3.SA','PETR4.SA',
  'PETZ3.SA','PFRM3.SA','PGMN3.SA','PINE11.SA','PINE3.SA','PINE4.SA','PLAS3.SA','PLPL3.SA','PMAM3.SA','PNVL3.SA','POMO3.SA','POMO4.SA','PORT3.SA','POSI3.SA','PPLA11.SA',
  'PRIO3.SA','PRNR3.SA','PSSA3.SA','PSVM11.SA','PTBL3.SA','PTNT3.SA','PTNT4.SA','QUAL3.SA','RADL3.SA','RAIL3.SA','RAIZ4.SA','RANI3.SA','RAPT3.SA','RAPT4.SA','RCSL3.SA',
  'RCSL4.SA','RDNI3.SA','RDOR3.SA','RECV3.SA','REDE3.SA','RENT3.SA','RNEW11.SA','RNEW3.SA','RNEW4.SA','ROMI3.SA','RPAD3.SA','RPAD5.SA','RPAD6.SA','RPMG3.SA','RSID3.SA',
  'RSUL4.SA','SANB11.SA','SANB3.SA','SANB4.SA','SAPR11.SA','SAPR3.SA','SAPR4.SA','SBFG3.SA','SBSP3.SA','SCAR3.SA','SEER3.SA','SEQL3.SA','SHOW3.SA','SHUL4.SA','SIMH3.SA',
  'SLCE3.SA','SMFT3.SA','SMTO3.SA','SNSY5.SA','SOJA3.SA','SRNA3.SA','STBP3.SA','SUZB3.SA','SYNE3.SA','TAEE11.SA','TAEE3.SA','TAEE4.SA','TASA3.SA','TASA4.SA','TCSA3.SA',
  'TECN3.SA','TEKA4.SA','TELB3.SA','TELB4.SA','TEND3.SA','TFCO4.SA','TGMA3.SA','TIMS3.SA','TKNO3.SA','TKNO4.SA','TOTS3.SA','TPIS3.SA','TRAD3.SA','TRIS3.SA','TTEN3.SA',
  'TUPY3.SA','UCAS3.SA','UGPA3.SA','UNIP3.SA','UNIP5.SA','UNIP6.SA','USIM3.SA','USIM5.SA','USIM6.SA','VALE3.SA','VAMO3.SA','VBBR3.SA','VITT3.SA','VIVA3.SA','VIVR3.SA',
  'VIVT3.SA','VLID3.SA','VSTE3.SA','VTRU3.SA','VULC3.SA','VVEO3.SA','WEGE3.SA','WEST3.SA','WHRL3.SA','WHRL4.SA','WIZC3.SA','WLMM3.SA','WLMM4.SA','YDUQ3.SA','ZAMP3.SA'*/
];
stocksLoopFunction(arrayStocks, '2000-01-20')
  .then(() => console.log(`all ticker processed.`))
  .catch(() => console.error(`error, check function.`));
//