# Scripts
Random scripts. <br />

## GS code for google docs for interviews.js
Creates Google Docs for each Applicant on a Google Sheet. Each G-Doc contains the applicant's name and information. This is designed to make interviews easier for organizations conducting lots of interviews. <br /> <br />
Requirements:
<ul>
  <li> Google Sheets file must have 1 row of headers. </li>
  <li> The file's first column must be name information </li>
  <li> The root drive must have enough capacity for an additional folder and as many Google Docs as there are names in the spreadsheet.
</ul>
<br />
Instructions: 
<ul>
  <li> Create or import a Sheets file. </li>
  <li> In Sheets, go under `Tools` and select `Script Editor...`. Alternatively, search up `Script Editor` in the search bar and select the first result. </li>
  <li> Paste the code from this script over the entire boilerplate/template code. </li>
  <li> Hit `Run`.</li>
  <li> Accept permissions. This script will basically be creating and removing files and making directories in your Google Drive. </li>
  <li> In the page containing the spreadsheet, a dialog box will open, asking for details regarding the interviews being conducted. This is to construct a folder with an appropriate name. (The folder will be named "Interviews " + whatever details you describe). </li>
  <li> Check the Google Drive root to see the new folder created. All files will be in that folder, named using the applicants' names. </li>
</ul>
