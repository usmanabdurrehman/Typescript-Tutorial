const items = [1, 2, 3, undefined, 5];
const filteredItems = items.filter(Boolean);

fetch("url")
  .then((res) => res.json())
  .then((res) => {
    if(Array.isArray(res)){
      
    }else if(typeof res==='string'){
      
    }
    console.log(res);
  });

const users = ["matt", "sofia", "waqas"] as const;

users.includes("bryan");
users.indexOf("bryan");
users.lastIndexOf("bryan");

const userSet = new Set(users);
userSet.has("bryan");

const userMap = new Map([
  ["matt", 0],
  ["sofia", 1],
  ["waqas", 2],
] as const);
userMap.has("bryan");
