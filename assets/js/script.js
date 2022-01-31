const maca = {
    value: 2,
}

const laranja = {
    value: 5,
}

function mapComThis(arr, thisArg){
    return arr.map(function(item) {
        return item * this.value
    }, thisArg );
};

function mapSemThis(arr){
    return arr.map((item) => item * 2)
};

//Como function normal
// function mapSemThis(arr){
//     return arr.map(function(item){
//         return item * 2;
//     });
// };

const nums = [1,2];
const nums2 = [2,3,6,8,10];
 
console.log(`this -> maçã`, mapComThis(nums,maca));

console.log(`this -> laranja`, mapComThis(nums,laranja));

console.log(`Map sem this`, mapSemThis(nums2));
