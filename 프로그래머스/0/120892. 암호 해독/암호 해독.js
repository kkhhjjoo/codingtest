function solution(cipher, code) {
    let decrypted = '';
    
    // 문자열을 순회하며 code의 배수 번째 글자를 찾습니다.
    for (let i = 0; i < cipher.length; i++) {
        // i는 0부터 시작하는 인덱스입니다.
        // (i + 1)은 1부터 시작하는 순서(번째)를 나타냅니다.
        
        // (i + 1)이 code의 배수인지 확인합니다.
        // 즉, (i + 1)을 code로 나누었을 때 나머지가 0인지 확인합니다.
        if ((i + 1) % code === 0) {
            decrypted += cipher[i];
        }
    }
    
    return decrypted;
}

solution("pfqallllabwaoclk", 2);