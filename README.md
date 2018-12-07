# Scripts

## `interview_gdoc_creator.js`
Creates Google Docs for each row on a Google Sheet. Useful for deliberating between candidates who sign up or apply using Google Forms. Each row contains the applicant's name and application information. The script converts the row into a separate Google Doc that can be the candidate's interview profile, the ideal place to take interview notes and centralize all info on the candidate. <br /> <br />
Requirements:
<ul>
  <li> The top row of the Google Sheets file must contain column headers. </li>
  <li> The file's first column must have some unique **Name** information (or some form of candidate ID). This will be used when naming the file made for that candidate. </li>
  <li> The root drive must have enough capacity for an additional folder and room for as many Google Docs as there are names in the spreadsheet.
</ul>
<br />
Instructions: 
<ul>
  <li> Create or import a Sheets file. </li>
  <li> In Sheets, go under `Tools` and select `Script Editor...`. Alternatively, search up `Script Editor` in the search bar and select the first result. </li>
  <li> Paste the code from this script over the entire boilerplate/template code. </li>
  <li> Hit `Run`.</li>
  <li> Accept permissions. This script will create and remove certain files and make directories in your Google Drive. </li>
  <li> In the page containing the spreadsheet, a dialog box will open, asking for details regarding the interviews being conducted. The  information entered here will be used to build a folder with an appropriate name. (The folder will be named "Interviews " + whatever details you describe). </li>
  <li> Check the Google Drive root (**My Drive**) to see the new folder created. All files will be in that folder and will be named using the applicants' names. </li>
</ul>
Designed for use by ANova @ Berkeley, Spring 2018, a student-run volunteering organization that sends quality CS materials and mentorship resources to students at under-resourced high schools and middle schools in the Bay Area. See more at: https://berkeleyanova.org
