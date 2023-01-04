const SHEET = {
  config: {
    name: 'config',
    range: {
      notion: {
        token: 'b1',
        dbId: 'b2',
      },
      nature: {
        token: 'b3',
      },
    },
  },
};

function getToken(){
  const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET.config.name);
  return {
    notion: {
      token: sheet.getRange(SHEET.config.range.notion.token).getValue(),
      dbId: sheet.getRange(SHEET.config.range.notion.dbId).getValue(),
    },
    nature: {
      token: sheet.getRange(SHEET.config.range.nature.token).getValue(),
    },
  };
}