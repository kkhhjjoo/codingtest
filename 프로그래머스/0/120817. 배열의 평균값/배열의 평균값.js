function solution(numbers) {
    var sum = 0;
    for(let i=0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum/numbers.length;
    
}
solution([1,2,3,4,5]);