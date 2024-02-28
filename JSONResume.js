//1) Create resume in JSON format
var resume ={
    "BioData" :{
        "name" : "Sumitha V",
        "Email":"Sumitha0996@gmail.com",
        "Phone":[7358166655,7358466398],
        "Degree" :"B.E"
    }    ,
    "Location":{
        "Address" :"No.V Garden Phase 1",
        "PostalCode":600012,
        "City" :"Chennai",
        "Country":"India"
},
"Profiles":{
    "LinkedIn":"https://www.linkedin.com/in/sumitha-v-8b78a834",
    "Github": "https://github.com/Sumitha2502"
},
"Education":{
    "Institution":"Sriram Engineering College",
    "Department":"Computer Science Engineering"
},
"Technical skills and knowledge":{
    "Front_End":"HTML,CSS,Bootstrap",
    "Automation_Tool" : "Selenium Web driver",
    "Programming_Language" : "Javascript",
    "Frameworks" : "TDD, CuCumber (BDD), KDD",
    "Browsers" : "Chrome, Firefox, Microsoft Edge",
    "Documentation" : "Microsoft Office(Word, Power point, Excel)"
 }
}
//console.log(resume)
console.log(resume.BioData.Phone[0])
console.log(resume.Profiles.Github)