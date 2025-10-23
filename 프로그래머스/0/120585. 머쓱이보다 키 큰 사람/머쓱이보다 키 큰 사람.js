function solution(array, height) {
    var answer = array.filter(item => item > height);
    return answer.length;
    
}


solution([149, 180, 192, 170], 167);