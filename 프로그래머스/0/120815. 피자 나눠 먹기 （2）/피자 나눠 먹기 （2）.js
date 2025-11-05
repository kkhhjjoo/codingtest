function solution(n) {
    // 1. 최대공약수(GCD)를 구하는 함수 (유클리드 호제법)
    // a와 b의 최대공약수를 찾습니다.
    const getGCD = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    // 2. n과 6의 최대공약수를 구합니다.
    const gcd = getGCD(n, 6);
    
    // 3. 최소공배수(LCM)를 구합니다.
    // LCM(n, 6) = (n * 6) / GCD(n, 6)
    const lcm = (n * 6) / gcd;
    
    // 4. 최소 피자 판 수를 구합니다.
    // 최소 피자 판 수 = LCM / 6
    // 계산을 간단히 하면: ((n * 6) / gcd) / 6 = n / gcd
    return n / gcd;
}

solution(6);