const fs = require('fs');

import basePath from "./path";

const createDirectoryIfNotExist = (name: string) => {
  // create new directory
  try {
    // check if directory already exists
    if (!fs.existsSync(`${basePath}/${name}`)) {
      fs.mkdirSync(`${basePath}/${name}`);
      console.log("Directory is created.");
    } else {
      console.log("Directory already exists.");
    }
  } catch (err) {
    console.log(err);
  }
}

export default createDirectoryIfNotExist;