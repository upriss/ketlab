const sqlPromise = initSqlJs({
    locateFile: file => `https://cdn.jsdelivr.net/gh/upriss/ketlab/utils/${file}` });
const dataPromise = fetch("https://cdn.jsdelivr.net/gh/upriss/ketlab/masterR.db").then(res => res.arrayBuffer());
const [SQL, buf] = await Promise.all([sqlPromise, dataPromise])
const db = new SQL.Database(new Uint8Array(buf));
export {db}
