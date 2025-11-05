function solution(numbers, direction) {
    if (direction === "right") {
        // 'right' 방향 회전: 배열의 마지막 원소를 꺼내서(pop) 맨 앞에 넣습니다(unshift).
        // 예: [1, 2, 3] -> 3을 꺼내서 -> [1, 2] -> 3을 맨 앞에 넣어 -> [3, 1, 2]
        
        const lastElement = numbers.pop();
        numbers.unshift(lastElement);
        
    } else if (direction === "left") {
        // 'left' 방향 회전: 배열의 첫 번째 원소를 꺼내서(shift) 맨 뒤에 넣습니다(push).
        // 예: [1, 2, 3] -> 1을 꺼내서 -> [2, 3] -> 1을 맨 뒤에 넣어 -> [2, 3, 1]
        
        const firstElement = numbers.shift();
        numbers.push(firstElement);
    }
    
    return numbers;
}
solution([1, 2, 3], "right");