
/**********tamrin 1 :  */
/*
function keyset(key) {
     let user = {};

    return function valueset(inp){
        let rezult = {            
            setername(inp){
                this[`${key}`] = inp
            }
        }
        rezult.setername.call(user, inp)
        console.log(user)
    }
}
    
keyset('name')("milad")
keyset('age')("29")
keyset('lastname')("khoshnadim")
*/

/***********tamrin 2:  */
/*
function createlement (el , callbackfn){
    console.log(el)
    let elem =  document.createElement(`${el}`); 
    callbackfn(elem)
}

function setstyle(divv){
    console.log(divv)
    divv.style.backgroundColor = "aqua";
    let tex = document.createTextNode("hi and how are you?");
    divv.appendChild(tex);
    document.getElementById("new").appendChild(divv);
}

createlement("div",setstyle)

*/

/*****tamrin 3: */
/*
function makeAdder(x=0) {
    return function (y=0) {
      return x=x + y;
    };
}
    
  const add = makeAdder();
  console.log(add()); // 0
  console.log(add()); // 0
  console.log(add(1)); // 1
  console.log(add()); // 1
  console.log(add(3)); // 4
  console.log(add(7)); // 11
  console.log(add(-5)); // 6
*/

/*****tamrin 4: */

//IIEFs:
// Simply put from its full name, Immediately Invoked Function Expression,
//  it’s a JavaScript function  that runs as soon as it’s defined. The name IIFE is promoted by Ben Alman in his blog
// IIEFs are well-known for protecting variables scope.
// It is a design pattern contains two major parts:
// The first is the anonymous function with lexical scope enclosed within the Grouping Operator ().
//  This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately invoked function expression () 
// through which the JavaScript engine will directly interpret the function.

// An IIFE is a good way to secure the scope. 
// You can use IIFEs to prevent global variables’ definition issues, alias variables,
//  protect private data, and avoid conflicts of using many libraries that export the same object name.
// When combining a closure with an IIFE, you get two great benefits.
// The first is that the scopes of variables are secured to prevent unexpected behaviors.
// The second one, you can modify variables inside a function from the outside. 
// It sounds like we are breaking the first benefit. Except we don’t. 
// Because you can’t modify the variables’ values directly but only from an exposing function. And it’s safe.



