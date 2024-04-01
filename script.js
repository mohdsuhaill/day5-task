// Create your own resume data in JSON format ... 

const resume ={
    "name":"MOhammed Suahil",
    "age":"22",
    "qulification":"B.com(ca)",
    "yearofpassing":"2022",
    "skills":["javascript","HTML","CSS"],
    "languages":["English","Urdu","Tamil","hindi"],
    "EmailID":"suhialabdmohammed@gmail.com",
    "phno":"7339313293"    
}

console.log(resume);

// for the above JSON ,iterate over all for loops (for,for in ,for of,for each)....
// for in loop ... 
for (var key in resume){
    console.log(key,resume[key]);
}

// for of ... use  to array ...
for (var sum of resume.skills)
{
    console.log("skills",sum);
}

// for each ... 
resume.languages.forEach((element) => {
    console.log("lang",element);
});
    


