const url="https://geeksforgeeks.com/login/username=val1&password=val2";

const option ={}

const pr=fetch(url,option);

console.log(pr);

let successCB=(res)=>{
    console.log("data fetched successfully",res);
}

pr.then().catch();

let errorCB=(res)=>{
    console.log("data failed",res);
}

pr.then(successCB).catch(errorCB);

console.log("data fetched succcessfully",pr);
