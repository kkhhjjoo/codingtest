function solution(s1, s2) {
    const intersection = s1.filter((x) => s2.includes(x));
    return intersection.length;
}

solution(["a","b","c"], ["com","b","d","p","c"]);