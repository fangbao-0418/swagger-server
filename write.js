const fs = require("fs");
const json = [
  // {
  //   "name": "carbon",
  //   "url": "http://localhost:7001/swagger-ui/index.json",
  //   "swaggerVersion": "3.0",
  //   "location": "http://localhost:7001/swagger-ui/index.json"
  // },
  {
    "name": "官网",
    "url": "http://localhost:8084/v2/api-docs",
    "swaggerVersion": "3.0",
    "location": "http://localhost:8084/v2/api-docs"
  }
]

console.log(JSON.stringify(json))

fs.writeFileSync("./src/api.json", JSON.stringify(json))