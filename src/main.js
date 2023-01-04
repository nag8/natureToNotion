function main(){

  const token = getToken();

  const homeLog = new HomeLog(token.nature.token);
  homeLog.setNotion(token.notion.token, token.notion.dbId);
}
