function solution(my_string) {
    let sum = 0;
    
    // 1. 문자열을 순회하면서 각 문자가 숫자인지 확인합니다.
    for (const char of my_string) {
        // isNaN() 함수를 사용하여 문자가 숫자로 변환될 수 있는지 확인합니다.
        // Number(char)를 사용하거나 parseInt(char)를 사용해도 됩니다.
        if (!isNaN(Number(char))) {
            // 2. 숫자 문자를 실제 숫자 타입으로 변환하여 합산합니다.
            sum += Number(char);
        }
    }
    
    return sum;
}

solution("aAb1B2cC34oOp");