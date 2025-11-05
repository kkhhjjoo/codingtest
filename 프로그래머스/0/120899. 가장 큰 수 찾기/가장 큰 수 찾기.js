function solution(array) {
    let maxVal = -Infinity; // 초기 최댓값은 가능한 가장 작은 값으로 설정
    let maxIdx = -1;        // 초기 인덱스는 -1로 설정

    // 배열을 순회하며 최댓값과 그 인덱스를 찾습니다.
    for (let i = 0; i < array.length; i++) {
        // 현재 요소가 지금까지의 최댓값보다 크다면 갱신합니다.
        if (array[i] > maxVal) {
            maxVal = array[i];
            maxIdx = i;
        }
    }
    
    // [가장 큰 수, 그 수의 인덱스] 형태의 배열을 반환합니다.
    return [maxVal, maxIdx];
}
solution([1, 8, 3]);