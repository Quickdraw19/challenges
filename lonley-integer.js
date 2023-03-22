function lonelyinteger(a) {
    let loner, seg;
    a.sort()
    for (let i = 0; i <= a.length; i = i + 2) {
        seg = a.slice(i, i + 2);
        if (seg[0] == seg[1]) {
            continue;
        } else {
            loner = seg[0];
            break;
        }
    }
    return loner;
}
