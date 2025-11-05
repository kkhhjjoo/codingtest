function solution(my_string, num1, num2) {
    // 1. 문자열을 문자 배열로 변환합니다.
    const arr = [...my_string]; // 또는 my_string.split('')
    
    // 2. 임시 변수를 사용하여 두 문자의 위치를 교환(swap)합니다.
    const temp = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = temp;
    
    // 3. 배열을 다시 문자열로 합쳐서 반환합니다.
    return arr.join('');
}
solution("hello", 1, 2);