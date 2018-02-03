function createDocs() {
  // trim function for String class
  if(typeof(String.prototype.trim) === "undefined")
  {
    String.prototype.trim = function() 
    {
      return String(this).replace(/^\s+|\s+$/g, '');
    };
  }
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var data = sheet.getDataRange().getValues();
  var yearAndSem = Browser.inputBox("Insert current year and semester: (Spring 2017, Fall 2018, Fall 2052, etc.)").trim();
  var dir = DriveApp.createFolder("Interviews " + yearAndSem);
  
  for (var i = Math.min(2, data.length); i <= data.length; i++) {
    var candidateName = sheet.getRange(i, 1).getValues()[0][0].trim();
    var doc = DocumentApp.create(candidateName + " interview profile " + yearAndSem);
    var body = doc.getBody();

    var nameRow;
    if (i < data.length) { 
      nameRow = data[i];
    } else { // edge case (last row), rows and cols are indexed differently
      nameRow = data[i - 1];
    }
    var infoRow = data[i - 1]

    for (var j = Math.min(0, nameRow.length); j < nameRow.length; j++) { 
      var header = body.appendParagraph(data[0][j]);
      header.setHeading(DocumentApp.ParagraphHeading.HEADING3);
      body.appendParagraph(infoRow[j]);
      body.appendParagraph("");
    }
  } 
  var file = DriveApp.getFileById(doc.getId());
  dir.addFile(file);
  DriveApp.removeFile(file);
}
