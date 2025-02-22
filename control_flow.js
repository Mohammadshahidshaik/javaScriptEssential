let userRole = "admin";
let accessLevel;
let isLoggedIn = true
let userMessage;
if (userRole==="admin") {
    accessLevel = "Full access granted";
}
else if(userRole=== "manager"){
    accessLevel="Limited access granted";
}
else{
    accessLevel="No access granted";
}
console.log("access Level:", accessLevel);
if (isLoggedIn){
    if(userRole==="admin"){
        userMessage = "Welcome admin"
    }
    else{
        userMessage = "Welcom user!"
    }
}else{
    userMessage="Please log in to access the system"
}
// console.log("access Level:", accessLevel);
console.log("user message:", userMessage);

let userType ="subscriber";
let userCategory;
switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory ="manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}console.log("User Category:", userCategory);
