const path = require("path");
const fs = require("fs");
const librariesPath = "public/static/data/libraries";

const librariesFolder = path.resolve(__dirname, librariesPath);
let result = {};
let OrderOfSolType = ["Jenkins", "Ansible", "Chef", "UrbanCode Deploy"]
function updateResult(library,sol,archtype,stage){
      const details = library[sol][archtype][stage];
      if (!result[sol][archtype][stage]) result[sol][archtype][stage] = [];
      result[sol][archtype][stage] = result[sol][archtype][stage].concat(details);
}

fs.readdir(librariesFolder, (err, files) => {
  files.forEach(fileName => {
    console.log(fileName);
    const library = JSON.parse(
      fs
        .readFileSync(path.resolve(__dirname, librariesPath, fileName))
        .toString()
    );
    const sol = Object.keys(library)[0];
    const arch = Object.keys(library[sol]);
    let stages = null;
    arch.map((archtype)=> {
      stages = Object.keys(library[sol][archtype]);
    })
    if (!result[sol]) result[sol] = {};
    if(Array.isArray(arch)) {
    arch.map((archtype)=> {
      if (!result[sol][archtype]) result[sol][archtype] = {};
    })
    }
    else {
      if (!result[sol][arch]) result[sol][arch] = {};
    }
    stages.forEach(stage => {
      if(Array.isArray(arch)) {
        arch.map((archtype)=> {
          updateResult(library,sol,archtype,stage);
        })
        }
        else {
          updateResult(library,sol,arch,stage)
        }
      
    });
  });

const orderedData = {}
OrderOfSolType.map((data,index)=>orderedData[data]= result[data])
fs.writeFileSync(
    path.resolve(__dirname, librariesPath, "../", "libraries.json"),
    JSON.stringify(orderedData, null, 2)
  );
});
