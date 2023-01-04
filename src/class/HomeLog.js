class HomeLog{
  constructor(natureToken){
    this.device = getNatureDeviceList(natureToken).shift();
  }

  setNotion(notionToken, notionDatabaseId){
    const notionRecord = Notion.initRecord();

    notionRecord.setTitle('名前', `homeLog ${dayjs.dayjs().format('YYYY/MM/DD HH:mm')}`);
    notionRecord.setIcon('🌡️');
    notionRecord.setPropertiesNumber('温度', this.device.newest_events.te.val);
    notionRecord.setPropertiesNumber('湿度', this.device.newest_events.hu.val / 100);

    Notion.initManager(notionToken).createRecord(notionDatabaseId, notionRecord);
  }
}