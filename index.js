const prskEpoch = 1600214400000; // 2020-9-16
const resultDate = document.getElementById("result");

document.getElementById("idInput").addEventListener("input", e => {
    if (!/^\d+$/.test(e.target.value)) {
        resultDate.textContent = "プロセカのユーザーidではありません";   
    }
    const date = new Date(Number(BigInt(e.target.value) >> 22n) + prskEpoch);
    resultDate.textContent = date.toLocaleString("ja-JP");
});