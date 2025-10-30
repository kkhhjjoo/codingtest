function solution(n) {
    for (let i = 1; i <= n; i++) {
        if (i * i === n) return 1   // i^2가 n과 같으면 완전제곱수
        if (i * i > n) return 2     // i^2가 n을 넘어가면 더 이상 같아질 수 없음 → 완전제곱수 아님
    }
}
solution(144);