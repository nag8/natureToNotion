function main(){

  const token = getToken();

  const homeLog = new HomeLog();
  homeLog.setNotion(token.notion.token, token.notion.dbId);


}
