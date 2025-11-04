function solution(rsp) {
    // 상대방의 패(키)와 이기는 패(값)를 매핑하는 객체
    const winningMoves = {
        '2': '0', // 가위(2)는 바위(0)로 이긴다
        '0': '5', // 바위(0)는 보(5)로 이긴다
        '5': '2'  // 보(5)는 가위(2)로 이긴다
    };
    
    // 문자열을 배열로 분리하여 순회하고, 각 요소(패)에 대해 이기는 패를 찾아
    // 다시 문자열로 합쳐서 반환합니다.
    const result = rsp.split('').map(move => winningMoves[move]).join('');
    
    return result;
}
solution("2");