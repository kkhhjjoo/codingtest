function solution(n) {
    const answer = []
    for (let i = 1; i <= n; i++) {   // ✅ 0이 아닌 1부터 시작
        if (n % i === 0) {
            answer.push(i)
        }
    }
    return answer.length
}