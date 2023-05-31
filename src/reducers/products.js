var initialState = [
    {
        id : 1,
        name : "Iphone 6 plus",
        price : 400,
        status : true
    },
    {
        id : 2,
        name : "Iphone 7 plus",
        price : 500,
        status : false
    },
    {
        id : 3,
        name : "Iphone 8 plus",
        price : 600,
        status : false
    }
];
const products = (state = initialState,action) => {
    switch(action.types){
        default: return [...state];
    }
}
export default products;