function solution(hp) {
    let minAnts = 0;
    
    // 1. 장군개미 (공격력 5) 수 계산
    // Math.floor()를 사용하여 몫을 구합니다.
    const generalAnts = Math.floor(hp / 5);
    minAnts += generalAnts;
    hp %= 5; // 나머지 체력 갱신

    // 2. 병정개미 (공격력 3) 수 계산
    const soldierAnts = Math.floor(hp / 3);
    minAnts += soldierAnts;
    hp %= 3; // 나머지 체력 갱신
    
    // 3. 일개미 (공격력 1) 수 계산
    // 남은 hp는 모두 일개미의 수와 같습니다.
    const workerAnts = hp;
    minAnts += workerAnts;

    return minAnts;
}

solution(23);