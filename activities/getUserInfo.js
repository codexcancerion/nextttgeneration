// convert this to typescript
function getUserInfo(user) {
    return `${user.name} is ${user.age} years old and works as a ${user.job}.`;
  }
  
  const user = {
    name: "Alice",
    age: 25,
    job: "Developer",
  };
  
  console.log(getUserInfo(user));
  