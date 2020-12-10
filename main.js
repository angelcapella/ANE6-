const promise =  axios.get('https://jsonplaceholder.typicode.com/users');

axios.post('https://jsonplaceholder.typicode.com/users', {id:'2'})

const promiseResult = promise.then((resolvedResult) => {
    const result = resolvedResult.data
    console.log(result);
}, (rejectResult) => {
    console.error(rejectResult.statusText);

});


