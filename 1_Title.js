//Title.js

class Title
{
	constructor()
	{
		

	}

	//html描画(初回だけで十分)
	display(leftPos)
	{
		document.getElementById('disp').innerHTML = `

		<div class="menu-wrapper">
		<input type="checkbox" id="menu-toggle" hidden>
		
		<label class="menu-icon" for="menu-toggle">
			<span></span>
			<span></span>
			<span></span>
		</label>
		
		<div class="overlay"></div>
		
		<nav class="menu">
			<ul>
			<li onClick="gm.setKey('Enter')">推移を見る</li>
			<li onClick="gm.setKey('h')">入力履歴を見る</li>
			<li onClick="alert('バージョン情報: 1.0.0')">バージョン</li>
			<li><a href="#">問い合わせ</a></li>
			</ul>
		</nav>
		</div>

	
	
		<div class="parent">
			<h1 class="child title">目指せ2026km!!</h1>
			<div class="child userName">こんにちは。太郎さん<div>
			<div class="child currentDistance">現在：12km<div>
			<div class="child totalDistance">全員：120km<div>
			
			
			<select id="item" name="item" class="child itemSelect">
				<option value="">-- 選択してください --</option>
				<option value="1hashiru">1km走る</option>
				<option value="2hashiru">2km走る</option>
				<option value="3hashiru">3km走る</option>
			</select>
		
			<div class="child apply" onClick="apply()">申請する<div>
		</div>
		
		`;
		
	}
}

function apply()
{
	// GASのurl
	const url = "https://script.google.com/macros/s/AKfycbyQ0mg8nZlaMJU-VG42Kabg-QV8ihYADgP4hdiuvjXUSZnnVjuiijkhckUpcV-Pz1BrZA/exec";
	const options = {
	  method: "POST",
	  headers: {
	    "Content-Type": "application/json",
	  },
	  body: JSON.stringify({
	    sheet: "シート1",
	    cell: "A1",
	    value: "test",
	  }),
	};
	fetchData(url, options);
	// alert("申請が完了しました！");
}

async function fetchData(url, options) 
{
  try 
  {
	const response = await fetch(url, options);
	const data = await response.json();
  } 
  catch (error) 
  {
	console.error("Error:", error);
  }
}
