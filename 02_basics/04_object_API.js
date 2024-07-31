/* {
    name: "shell",
    game: "gtaV",
    playername: "shell0bee",                        // this is JSON which is simply an Object
    level: "27"
   }          
    
   
   // Also JSON is no always an object it can be array too

[{},{},{}]   <= like this

  ## Below Example
 
   https://randomuser.me/api/

   {"results":[{"gender":"female","name":{"title":"Miss","first":"Brooke","last":"Burton"},"location":{"street":{"number":7123,"name":"Mill Lane"},"city":"Newry","state":"Durham","country":"United Kingdom","postcode":"US12 8NH","coordinates":{"latitude":"-6.3405","longitude":"160.6818"},"timezone":{"offset":"-6:00","description":"Central Time (US & Canada), Mexico City"}},"email":"brooke.burton@example.com","login":{"uuid":"2143b795-f932-4747-bd5d-d0dbf9c70fc0","username":"ticklishsnake138","password":"empire","salt":"JpiDpEmY","md5":"dfd3cf8b2e525f1cf2764fe02b08d6ba","sha1":"9566316af60aacae3e74d3c8b9785f46b015d6a9","sha256":"64be849127c30d4573fdef6770491c7625b61ceaaa1878f6aca8fe4013f432b9"},"dob":{"date":"1992-11-04T06:20:15.279Z","age":31},"registered":{"date":"2016-03-26T23:56:06.682Z","age":8},"phone":"016977 0161","cell":"07153 501820","id":{"name":"NINO","value":"RT 41 42 55 A"},"picture":{"large":"https://randomuser.me/api/portraits/women/91.jpg","medium":"https://randomuser.me/api/portraits/med/women/91.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/91.jpg"},"nat":"GB"}],"info":{"seed":"ab7b0f734722f401","results":1,"page":1,"version":"1.4"}}
   
   */

// API is like taking help from others // or like giving out task to other



// Object Destructuring

let Obj = {
    name: "shell",
    game: "gtaV",
    playername: "shell0bee",                        
    level: "27"
}

// console.log(Obj.playername);
// console.log(Obj.playername);
// console.log(Obj.playername);           // Baar baar type na karna padhe is liye 
// console.log(Obj.playername);

const {playername} = Obj;
// console.log(playername);

const {playername : gName} = Obj;              //  {playername} => {playername : gName}
// console.log(gName);