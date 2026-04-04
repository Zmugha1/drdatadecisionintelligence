var SHEET_NAME = "BNI_Submissions";
var HEADERS = [
  "date",
  "week_number",
  "member_name",
  "company",
  "pitch",
  "event",
  "event_link",
  "announcement",
  "timestamp"
];

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    var headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
    headerRange.setBackground("#2D4459");
    headerRange.setFontColor("#FFFFFF");
    headerRange.setFontWeight("bold");
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 100);
    sheet.setColumnWidth(2, 80);
    sheet.setColumnWidth(3, 140);
    sheet.setColumnWidth(4, 180);
    sheet.setColumnWidth(5, 320);
    sheet.setColumnWidth(6, 240);
    sheet.setColumnWidth(7, 220);
    sheet.setColumnWidth(8, 280);
    sheet.setColumnWidth(9, 90);
  }
  return sheet;
}

function getWeekNumber(date) {
  var d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  var yearStart = new Date(d.getFullYear(), 0, 1);
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

function formatDate(date) {
  var d = new Date(date);
  var month = String(d.getMonth() + 1).padStart(2, "0");
  var day = String(d.getDate()).padStart(2, "0");
  return d.getFullYear() + "-" + month + "-" + day;
}

function doGet(e) {
  try {
    var params = e.parameter || {};

    if (params.action === "submit") {
      if (!params.member_name) {
        return ContentService
          .createTextOutput(JSON.stringify({ success: false, error: "member_name is required." }))
          .setMimeType(ContentService.MimeType.JSON);
      }
      var now = new Date();
      var submitSheet = getSheet();
      var submitRow = [
        formatDate(now),
        getWeekNumber(now),
        params.member_name.trim(),
        (params.company || "").trim(),
        (params.pitch || "").trim(),
        (params.event || "").trim(),
        (params.event_link || "").trim(),
        (params.announcement || "").trim(),
        Utilities.formatDate(now, Session.getScriptTimeZone(), "h:mm a")
      ];
      submitSheet.appendRow(submitRow);
      return ContentService
        .createTextOutput(JSON.stringify({ success: true }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var mode = params.mode || "today";
    var sheet = getSheet();
    var data = sheet.getDataRange().getValues();

    if (data.length <= 1) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: true, rows: [], count: 0 }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var headers = data[0];
    var rows = [];
    for (var i = 1; i < data.length; i++) {
      var rowObj = {};
      for (var j = 0; j < headers.length; j++) {
        rowObj[headers[j]] = data[i][j];
      }
      rows.push(rowObj);
    }

    var filtered = [];
    var today = formatDate(new Date());

    if (mode === "today") {
      filtered = rows.filter(function(row) {
        return formatDate(row.date) === today;
      });
    } else if (mode === "date" && params.date) {
      filtered = rows.filter(function(row) {
        return formatDate(row.date) === params.date;
      });
    } else if (mode === "history") {
      var weeksBack = parseInt(params.weeks || "12", 10);
      var cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - (weeksBack * 7));
      filtered = rows.filter(function(row) {
        return new Date(row.date) >= cutoff;
      });
    } else if (mode === "all") {
      filtered = rows;
    }

    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        rows: filtered,
        count: filtered.length,
        mode: mode,
        fetched_at: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doOptions(e) {
  return ContentService
    .createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}
