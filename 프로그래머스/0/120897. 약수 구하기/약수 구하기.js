function solution(n) {
    const divisors = [];
    
    // 1부터 n까지 반복하며 약수인지 확인합니다.
    for (let i = 1; i <= n; i++) {
        // n을 i로 나누었을 때 나머지가 0이면 i는 n의 약수입니다.
        if (n % i === 0) {
            divisors.push(i);
        }
    }
    
    // 약수들은 이미 1부터 n까지 순서대로 검사했기 때문에 오름차순으로 담겨 있습니다.
    return divisors;
}
solution(24);