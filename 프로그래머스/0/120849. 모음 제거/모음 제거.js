function solution(my_string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return my_string
    .split('')               // 문자열 → 문자 배열
    .filter(ch => !vowels.includes(ch)) // 모음이 아닌 문자만 남기기
    .join('');               // 다시 문자열로 합치기
}    
solution("bus");    