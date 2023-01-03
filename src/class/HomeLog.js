class HomeLog{
  constructor(){
  }

  setNotion(notionToken, notionDatabaseId){
    const notionRecord = Notion.initRecord();

    notionRecord.setTitle('名前', `homeLog ${dayjs.dayjs().format('YYYY/MM/DD HH:mm')}`);
    notionRecord.setIcon('🌡️');
    notionRecord.setPropertiesNumber('温度', 0);
    notionRecord.setPropertiesNumber('湿度', 0);

    Notion.initManager(notionToken).createRecord(notionDatabaseId, notionRecord);
  }
}