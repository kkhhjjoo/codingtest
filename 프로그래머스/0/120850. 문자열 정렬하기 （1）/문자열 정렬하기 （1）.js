function solution(my_string) {
    // 1. 문자열에서 숫자만 추출
    // 정규 표현식 /[0-9]/g를 사용하여 문자열 내의 모든 숫자 문자를 찾습니다.
    // match() 메서드는 매칭되는 문자열들을 배열로 반환합니다.
    const numberStrings = my_string.match(/[0-9]/g);
    
    // 2. 숫자로 변환
    // 추출된 숫자 문자 배열을 순회하며 각 요소를 Number 타입으로 변환합니다.
    const numbers = numberStrings.map(str => Number(str));

    // 3. 오름차순 정렬
    // sort() 메서드에 비교 함수 (a, b) => a - b 를 사용하여 오름차순으로 정렬합니다.
    // (a - b가 음수이면 a가 b보다 앞으로, 양수이면 b가 a보다 앞으로 정렬)
    numbers.sort((a, b) => a - b);
    
    return numbers;
}

solution("hi12392");