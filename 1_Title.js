async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}
// GASのurlにクエリパラメータ（?sheetName=シート名&cell=セル名）を付ける
const url =
  "https://script.google.com/macros/s/AKfycbyQ0mg8nZlaMJU-VG42Kabg-QV8ihYADgP4hdiuvjXUSZnnVjuiijkhckUpcV-Pz1BrZA/exec?sheetName=test260417&cell=A1";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
fetchData(url, options);
// GASのurl
const url = "https://script.google.com/macros/s/GASのデプロイID/exec";
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    sheet: "シート名",
    cell: "セル名",
    value: "値",
  }),
};
fetchData(url, options);
