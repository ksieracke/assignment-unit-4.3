console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []
const maxItems=5
function addItem(item){
    if(isFull()){
        return false;
    }
    basket.push(item);
    return true;
}
console.log(basket);
addItem('pizza');
console.log(basket);
console.log(addItem('grapes'));
console.log(basket);


function listItems(){
    for(let item of basket){
        console.log(item);
    }
}

console.log(listItems());

function empty(){
    basket=[];

}
empty();
console.log(basket);



function isFull(){
    if(basket.length<maxItems){
        return false;
    }
    return true;
}
addItem('grapes');
addItem('pizza')


console.log(isFull());

console.log(addItem('bread'));
console.log(basket);

function removeItem(item){
    let itemLoc=basket.indexOf(item);
    if(itemLoc===-1){
        return null;
    }
    return basket.splice(itemLoc,1);
}

console.log(removeItem('pizza'));
console.log(basket);

console.log(removeItem('pears'));


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
