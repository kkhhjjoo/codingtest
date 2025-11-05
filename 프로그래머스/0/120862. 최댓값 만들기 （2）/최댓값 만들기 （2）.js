function solution(numbers) {
    // 1. 배열을 오름차순으로 정렬합니다.
    numbers.sort((a, b) => a - b);
    
    const n = numbers.length;
    
    // 2. 가장 큰 양수 두 개의 곱 (배열의 가장 끝 두 원소)
    //    numbers[n-1]은 가장 큰 수, numbers[n-2]는 두 번째로 큰 수입니다.
    const maxPositiveProduct = numbers[n - 1] * numbers[n - 2];
    
    // 3. 가장 작은 음수 두 개의 곱 (배열의 가장 앞 두 원소)
    //    numbers[0]은 가장 작은 수, numbers[1]은 두 번째로 작은 수입니다.
    //    두 음수의 곱은 양수가 되며, 절댓값이 클수록 큰 양수가 됩니다.
    const maxNegativeProduct = numbers[0] * numbers[1];
    
    // 4. 두 곱셈 결과 중 최댓값을 반환합니다.
    return Math.max(maxPositiveProduct, maxNegativeProduct);
}
solution([1, 2, -3, 4, -5]);