// eslint-disable-next-line import/no-anonymous-default-export
export default (...arr) => {
    const res = [];
    const len = arr.length;
    for (let i = 0; i < len; i++)
        if (arr[i])
            res.push(arr[i]);
    return res.join(' ');
}