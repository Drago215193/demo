const Mysym = "MyKey01"

const JsUser = {

    name : "Drago",
    age : 23,
    [Mysym] : "key01",
    email : "drago@google.com",
    Logged_In : false,
    LastLoggedIn : ["Saturday", "Monday"]

}

console.log(JsUser["age"])
console.log(JsUser.email);
console.log(JsUser[Mysym])

   
JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());