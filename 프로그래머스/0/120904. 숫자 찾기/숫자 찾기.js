function solution(num, k) {
    // 1. num과 k를 문자열로 변환합니다.
    const numStr = String(num);
    const kStr = String(k);
    
    // 2. 문자열 numStr에서 kStr이 처음 나타나는 인덱스를 찾습니다.
    //    indexOf()는 찾는 문자가 없으면 -1을 반환합니다.
    const index = numStr.indexOf(kStr);
    
    // 3. 결과에 따라 자리수를 계산하거나 -1을 반환합니다.
    if (index === -1) {
        // k가 num에 포함되어 있지 않은 경우
        return -1;
    } else {
        // k가 num에 포함되어 있는 경우, 인덱스(0부터 시작)에 1을 더하여 자리수(1부터 시작)를 반환합니다.
        return index + 1;
    }
}
solution(29183, 1);