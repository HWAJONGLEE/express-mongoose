const myType = {
    myNumber : 3,
    myStr : 'Hello World',
    myBool : true,
    myArray : [],
    myObject : {}
}
for (const key in myType) {
    console.log(typeof myType[key]);
}
