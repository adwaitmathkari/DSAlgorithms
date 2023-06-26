
/*
consider

S = ab#c
T = ad#c, 
# - backspace
after operations,
S = ac and T = ac.
output - true


S = a###d and T = a#x#
output = false

*/

let fn = (a, b) => {
    

}

let calculate  = (s) => {
    let l = s.length;
    let list1 = s.split('');
    // console.log(list1)
    let output = '';

    for (let char of list1){
        if (char === '#'){
            if (output.length > 0){
                output = output.slice(0, output.length-1)
            }
        } else{
            output+= char;
        }
    } 
    console.log(output);
    return output
}


calculate('####1')