function deretKaskus(n) {
    const jwb = []
    for (let i = 3; i <= 3 * n; i += 3) {
        if (i % 5 == 0 && i % 6 == 0) {
            jwb.push('KASKUS')
        } else if (i % 5 == 0) {
            jwb.push("KAS")
        } else if (i % 6 == 0) {
            jwb.push("KUS")
        } else
            jwb.push(i)
    }
    return jwb;
}
console.log(deretKaskus(10));
