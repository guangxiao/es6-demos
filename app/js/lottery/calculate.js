/**
 * [计算注数]
 * @param {number} active [当前选中号码的个数]
 * @param {string} play_name [当前的玩法的标识 任三，任四，任五]
 * @return {number}         [注数]
 */
class Calculate {
    // 选中了6个数，玩法选任3，就是组合运算C63的组合
    computeCount(active, play_name) {
        let count = 0;
        // play_list map类型
        const exist = this.play_list.has(play_name);
        const arr = new Array(active).fill('0'); // active - 数组的长度
        // 判断当前玩法是不是支持
        if (exist && play_name.at(0) === 'r') {
            count = Calculate.combine(arr, play_name.split('')[1]);
        }
        return count;
    }

    /**
     * [computeBonus 奖金范围预测] 
     * @param {number} active [当前选中的号码]
     * @param {string} play_name [当前的玩法标识]
     * @return {array}           [奖金范围]
     */
    computeBonus(active, play_name) {
        const play = play_name.split('');
        const self = this;
        let arr = new Array(play[1] * 1).fill(0);
        let min, max;
        if (play[0] === 'r') {
            // 最小命中数
            let min_active = 5 - (11 -active);
            if (min_active > 0) {
                // play[1] 当前玩法的基数
                if (min_active - play[1] >= 0) {
                    
                }
            }
        }

    }

    // 静态方法
    /**
     * [combine 组合运算]
     * @param {array} arr [参与组合运算的数组]
     * @param {number} size [组合运算的基数]
     * @return {[number]}   [计算注数]
     */
    static combine(arr, size) {
        let allResult = [];
        (function f(arr, size, result) {
            let arrLen = arr.length;

            if (size > arrLen) {
                return;
            }

            if (size == arrLen) {
                allResult.push([].concat(result, arr))
            } else {
                for (let i = 0; i < arrLen; i++) {
                    let newResult = [].concat(result);
                    newResult.push(arr[i]);
                    if (size === 1) {
                        allResult.push(newResult);
                    } else {
                        let newArr = [].concat(arr);
                        newResult.splice(0, i + 1);
                        f(newArr, size - 1, newResult);
                    }
                }
            }
        })(arr, size, [])
    }
}