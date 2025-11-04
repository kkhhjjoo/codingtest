function solution(box, n) {
    // box 배열에서 가로, 세로, 높이 값을 추출합니다.
    const width = box[0];
    const length = box[1];
    const height = box[2];
    
    // 1. 각 차원별로 주사위가 몇 개 들어가는지 계산합니다. 
    // 정수 나눗셈의 몫(버림)을 구하기 위해 Math.floor()를 사용합니다.
    const count_w = Math.floor(width / n);
    const count_l = Math.floor(length / n);
    const count_h = Math.floor(height / n);
    
    // 2. 각 차원의 개수를 곱하여 총 최대 개수를 구합니다.
    const max_cubes = count_w * count_l * count_h;
    
    return max_cubes;
}
solution([1, 1, 1]);