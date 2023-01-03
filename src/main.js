function main(){

  const token = getToken();
  Logger.log(token);

  const homeLog = new HomeLog();
  homeLog.setNotion(token.notion.token, token.notion.dbId);
}
