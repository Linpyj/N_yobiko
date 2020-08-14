'use strict';
function add(numbers) {
    let result = 0;
    for (num of numbers) {
        result = result + num;
    };
    return result;
};

// module.exports = {
//     add: add
// }

//　プロパティの名前と変数名が一致するとき、以下の省略記法が使える
module.exports = { add };