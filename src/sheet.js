const SHEET = {
  config: {
    name: 'config',
    range: {
      notion: {
        token: 'B1',
        dbId: 'B2',
      },
    },
  },
};

function getToken(){
  const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET.config.name);
  return {
    notion: {
      token: sheet.getRange(SHEET.range.notion.token),
      dbId: sheet.getRange(SHEET.range.notion.dbId),
    },
  };
}