// https://developer.nature.global/
// https://swagger.nature.global/

function getNatureDeviceList(natureToken){

  const options = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${natureToken}`,
    },
  };

  const res = UrlFetchApp.fetch(
    `https://api.nature.global/1/devices`,
    options
  );
  return JSON.parse(res.getContentText());
}