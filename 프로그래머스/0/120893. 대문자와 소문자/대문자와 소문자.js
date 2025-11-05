function solution(my_string) {
    let result = '';
    
    // 문자열의 각 문자를 순회합니다.
    for (const char of my_string) {
        // 현재 문자를 소문자로 변환한 것과 비교하여 원래 문자가 대문자인지 확인합니다.
        if (char === char.toUpperCase()) {
            // 대문자라면 -> 소문자로 변환하여 추가
            result += char.toLowerCase();
        } else {
            // 소문자라면 -> 대문자로 변환하여 추가
            result += char.toUpperCase();
        }
    }
    
    return result;
}
solution("cccCCC");