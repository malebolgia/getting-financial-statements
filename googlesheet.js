require('dotenv').config();

const { google } = require('googleapis');

const spreadsheetId = process.env.SPREADSHEET_ID;

// get auth token
  function getAuth() {
    const auth = new google.auth.GoogleAuth({
      keyFile: 'authgoog.json',
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });
    return auth;
  }

  // proccure googleSheet method
  async function getGoogleSheet(auth) {
    const client = await auth.getClient();
    const googleSheet = google.sheets({ version: 'v4', auth: client });
    return googleSheet;
  }

  async function sheetInfo(){
    const auth = getAuth();
    const googleSheet = await getGoogleSheet(auth);
  
    const getSheetData = await googleSheet.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: 'finan!A1:B15',
    }).then(function(result) {
        dataSheets = result;
     });
     
     console.log(dataSheets.data.values);
     console.log("Done");
  }

  sheetInfo();
  

