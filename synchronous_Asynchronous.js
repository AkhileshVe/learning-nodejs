// synchronous and asynchronous

// Que  = Is javascript synchronous or asynchronous and single threaded or multithreaded ?

// Javascript is a synchronous single threaded language. This means that it
// executes line by line in order and each line must finish executing before
// the next line starts.
// However, javascript has can handle asynchronous operations using
// mechanisms like callbacks, promises and async/await. These mechanisms
// allows javascript to perform tasks such as network requests, file reading,
// setTimeout/setInterval without blocking the main thread.
// These mechanisms allow JavaScript to delegate tasks to the browser and
// then continue executing other code while waiting for those tasks to
// complete. This asynchronous behavior gives the illusion of concurrency,
// even though JavaScript itself remains single-threaded.



//synchronous
console.log("first")
console.log("second")
console.log("third")


//asynchronous
console.log("first")

setTimeout(() => {
    console.log("second")
}, 2000);

console.log("third")