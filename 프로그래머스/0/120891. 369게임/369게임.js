function solution(order) {
    let clapCount = 0;
    
    // 1. 숫자를 문자열로 변환하여 각 자릿수를 쉽게 확인합니다.
    const orderStr = String(order);
    
    // 2. 문자열의 각 문자를 순회합니다.
    for (const char of orderStr) {
        // 3. 현재 자릿수가 '3', '6', 또는 '9'인지 확인합니다.
        if (char === '3' || char === '6' || char === '9') {
            clapCount++;
        }
    }
    
    return clapCount;
}

solution(3);