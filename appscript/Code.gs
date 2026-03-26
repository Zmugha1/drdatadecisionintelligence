/**
 * BNI chapter web app — deploy as Web app (execute as you, anyone / anonymous).
 * Script property SPREADSHEET_ID = Google Sheet ID.
 * Sheet "Submissions": row 1 = timestamp | member_name | company | type | content | link
 */

function doGet(e) {
  var params = e.parameter;
  if (params.action === 'submit') {
    var submitBody = {
      member_name: params.member_name || '',
      company: params.company || '',
      type: params.type || '',
      content: params.content || '',
      link: params.link || ''
    };
    return handleSubmit(submitBody);
  }

  try {
    var mode = params.mode || '';
    if (mode === 'today') {
      return ContentService.createTextOutput(JSON.stringify(getTodayRows()))
        .setMimeType(ContentService.MimeType.JSON);
    }
    if (mode === 'history') {
      var weeks = parseInt(params.weeks, 10);
      if (isNaN(weeks)) weeks = 12;
      return ContentService.createTextOutput(JSON.stringify(getHistoryRows(weeks)))
        .setMimeType(ContentService.MimeType.JSON);
    }
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: 'Unknown mode' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: String(err.message || err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function handleSubmit(body) {
  try {
    var sheet = getSubmissionsSheet();
    var ts = new Date();
    sheet.appendRow([
      ts,
      body.member_name || '',
      body.company || '',
      body.type || '',
      body.content || '',
      body.link || ''
    ]);
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: String(err.message || err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    return handleSubmit(body);
  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false, error: err.message
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getSubmissionsSheet() {
  var id = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  if (!id) throw new Error('SPREADSHEET_ID not set in Script Properties');
  var ss = SpreadsheetApp.openById(id);
  var sheet = ss.getSheetByName('Submissions');
  if (!sheet) throw new Error('Sheet Submissions not found');
  return sheet;
}

function rowFromValues(headers, row) {
  var o = {};
  for (var i = 0; i < headers.length; i++) {
    o[String(headers[i])] = row[i];
  }
  var ts = o.timestamp;
  if (ts instanceof Date) {
    o.timestamp = ts.toISOString();
  } else if (ts != null) {
    o.timestamp = String(ts);
  }
  return {
    timestamp: o.timestamp,
    member_name: o.member_name != null ? String(o.member_name) : '',
    company: o.company != null ? String(o.company) : '',
    type: o.type != null ? String(o.type) : '',
    content: o.content != null ? String(o.content) : '',
    link: o.link != null ? String(o.link) : ''
  };
}

function getTodayRows() {
  var sheet = getSubmissionsSheet();
  var data = sheet.getDataRange().getValues();
  if (data.length < 2) return [];
  var headers = data[0];
  var tz = Session.getScriptTimeZone() || 'America/Chicago';
  var todayStr = Utilities.formatDate(new Date(), tz, 'yyyy-MM-dd');
  var out = [];
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var ts = row[0];
    if (!(ts instanceof Date)) continue;
    var rowDate = Utilities.formatDate(ts, tz, 'yyyy-MM-dd');
    if (rowDate === todayStr) {
      out.push(rowFromValues(headers, row));
    }
  }
  return out;
}

function getHistoryRows(weeks) {
  var sheet = getSubmissionsSheet();
  var data = sheet.getDataRange().getValues();
  if (data.length < 2) return [];
  var headers = data[0];
  var cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - (weeks * 7));
  var out = [];
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var ts = row[0];
    if (!(ts instanceof Date)) continue;
    if (ts >= cutoff) {
      out.push(rowFromValues(headers, row));
    }
  }
  return out;
}
