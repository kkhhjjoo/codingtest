function solution(n) {
  let sum = 0;

  while (n > 0) {
    sum += n % 10;        // 마지막 자리 더하기
    n = Math.floor(n / 10); // 마지막 자리 제거
  }

  return sum;
}