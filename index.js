// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

// Async function with id parameter.

async function getUserData(id) {

  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3

  };

  try {

    const [dbName, vaultData] = await Promise.all([central(id), vault(id)]);
    const dbData = await dbs[dbName](id);

// Return an object containing specific data associated with the user with the given id.

  return {

    id: id,
    name: vaultData.name,
    username: dbData.username,
    email: vaultData.email,
    address: vaultData.address,
    phone: vaultData.phone,
    website: dbData.website,
    company: dbData.company,

  }
    
  } catch (error) {

// console.log(error.message);

// Return a rejeced promise. If one of these databases encounters an error,
// your function should return a rejected promise indicating which database failed.

    return Promise.reject(error);
    
  };
};

// you should test your function using id values between 1 and 10 (inclusive).
// Use values outside of this range to test for error cases.

/* getUserData(1).then(console.log);

Object
address: {street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {…}}
company: {name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets'}
email: "Sincere@april.biz"
id: 1
name: "Leanne Graham"
phone: "1-770-736-8031 x56442"
username: "Bret"
website: "hildegard.org"
[[Prototype]]: Object

*/

// getUserData(5).then(console.log)
// {id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca', address: {…}, …}

// getUserData(9).then(console.log)
// {id: 9, name: 'Glenna Reichert', username: 'Delphine', email: 'Chaim_McDermott@dana.io', address: {…}, …}

// getUserData(0).then(console.log)
// Uncaught (in promise) Error: Invalid Input -- Out of Range

// getUserData(14).then(console.log)
// Uncaught (in promise) Error: Invalid Input -- Out of Range

// getUserData("Testing").then(console.log)
// Uncaught (in promise) Error: Invalid Input -- Not a Number    