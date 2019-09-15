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
  var yearAndSem = Browser.inputBox("Insert current year followed by semester: (Spring 2017, Fall 2018, Fall 2052, etc.)").trim();
  var dir = DriveApp.createFolder("Interviews " + yearAndSem);
  
  for (var i = data.length; i <= data.length; i++) {
    var candidateName = sheet.getRange(i, 1).getValues()[0][0].trim();
    var doc = DocumentApp.create(candidateName + " interview profile " + yearAndSem);
    var body = doc.getBody();
    if (i < data.length) {
      for (var j = Math.min(0, data[i].length); j < data[i].length; j++) { 
        var header = body.appendParagraph(data[0][j]);
        header.setHeading(DocumentApp.ParagraphHeading.HEADING3);
        body.appendParagraph("" + data[i - 1][j]);
        body.appendParagraph("");
      }
    } else { // edge case, last row was wacky b/c rows and cols are slightly differently indexed
      for (var j = Math.min(0, data[i - 1].length); j < data[i - 1].length; j++) { 
        var header = body.appendParagraph(data[0][j]);
        header.setHeading(DocumentApp.ParagraphHeading.HEADING3);
        body.appendParagraph("" + data[i - 1][j]);
        body.appendParagraph("");
      }            
    }
    var file = DriveApp.getFileById(doc.getId());
    dir.addFile(file);
    DriveApp.removeFile(file);
  }
}
