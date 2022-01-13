const resultDate = document.getElementById("result");
const idInput = document.getElementById("idInput");
const expression = document.getElementById("expression");
const platformInputs = document.getElementsByName("type");
const Epochs = {
    tw: 1288834974657, // 2010-11-4
    discord: 1420070400000, // 2015-1-1
    prsk: 1600214400000 // 2020-9-16
};

const calculate = () => {
    let epoch;
    for (const e of platformInputs) {
        if (e.checked) {
            epoch = Epochs[e.id];
        }
    }
    if (!/^\d+$/.test(idInput.value)) {
        resultDate.textContent = "Snowflake IDではありません";
        expression.textContent = "解析不可能";
        return;
    }
    expression.textContent = `(${idInput.value} >> 22) + ${epoch}`;
    const date = new Date(Number(BigInt(idInput.value) >> 22n) + epoch);
    resultDate.textContent = date.toLocaleString("ja-JP");
};

idInput.addEventListener("input", calculate);

for (const e of platformInputs) {
    e.addEventListener("input", calculate);
}