function solution(n) {
    var answer = 0;
    for(let m = 0; m <= n; m++) {
        if(m % 2 === 0) {
            answer += m;
        }
    }
    return answer;
}
solution(10)