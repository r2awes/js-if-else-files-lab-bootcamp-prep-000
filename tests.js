var index = require("./index.js")

if (index.name === "Ziggy Heil") {
    console.log("The name is correct")
} else {
    console.log("Expected: Jane, Received: "+index.name)
}



if (index.height === 74) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+index.height)
}
