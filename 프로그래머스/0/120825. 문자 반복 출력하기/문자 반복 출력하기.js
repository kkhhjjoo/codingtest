function solution(my_string, n) {
  return my_string
    .split('')                 // 1) 문자열 → 글자 배열
    .map(str => str.repeat(n)) // 2) 각 글자를 n번 반복
    .join('');                 // 3) 다시 문자열로 합치기
}

solution("hello", 3); // "hhheeelllllooo"