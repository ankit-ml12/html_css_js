const url = 'https://restcountries.com/v3.1/name/india'

const request = fetch(url)
  .then((res) => {
    console.log(res)
    return res.json()
  })
  .then((data) => {
    console.log(data)
  })

console.log(request)

// initially request is in pending state

//promise is a container for a future value
//lefecycle of promise
//initially is in pending state
//at the end it is settled

//in settled it is either fulfilled or rejected

const request2 = fetch(url)
  .then((res) => {
    console.log(res)
    return res.json()
  })
  .then((data) => {
    console.log(data)
  })

// in the above code once we get promise we can again call then method to resolve the promise return by first then
//this is how we can protect our self from callback hell

//promises do not help in get rid from call back instead they help from get rid from callback hell

//to handell cancell promise
//we use catch statement

//.finally()

// In JavaScript Promises, the finally() method is a method that can be called on a Promise instance. It allows you to attach a callback function that will be called regardless of whether the Promise was fulfilled or rejected.

// The finally() method takes a single argument, which is a function that will be executed when the Promise is settled (either resolved or rejected). The function does not receive any arguments and its return value is ignored.

// Here is an example usage of the finally() method:
somePromise()
  .then((result) => {
    // handle successful fulfillment of the Promise
  })
  .catch((error) => {
    // handle error that occurred during Promise fulfillment
  })
  .finally(() => {
    // this code will execute regardless of whether the Promise was fulfilled or rejected
  })

  //In the above example, the finally() method is used to execute code that needs to run regardless of the outcome of the Promise. This could be useful, for example, for releasing resources or performing clean-up tasks that need to be done regardless of whether an operation was successful or not.

  //fetch('https://example.com/data')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error fetching data')
    }
    return response.json()
  })
  .then((data) => {
    // handle the data
  })
  .catch((error) => {
    // handle the error
  })

//   In the above code, if the response from the "fetch" request is not "ok", the "throw" statement is used to throw a custom error with the message "Error fetching data". This error can then be caught by the "catch" block and handled appropriately.

// In summary, while the "try-catch" block is not the appropriate method for handling errors that occur during a fetch request, the "throw" statement can be used to create custom errors and handle them with a "try-catch" block.

//learn from this video detailed explanation of asynchronous js
