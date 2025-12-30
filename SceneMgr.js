//SceneMgr.js
//シーンの表示、シーンの切り替え

class SceneMgr
{
	constructor()
	{
		this.titleScene = new Title();
		this.nowScene = this.titleScene;
		this.nowScene.display();//htmlを描画（初回のみ)

	}


	getKey(key)
	{
		//シーンごとのキー操作処理
		//例：タイトルシーンでEnterキーが押されたらグラフシーンへ移動
		if(this.nowScene instanceof Title)
		{
			if(key === "Enter")
			{
				this.graphScene = new Graph();
				this.nowScene = this.graphScene;
				this.nowScene.display();//htmlを描画（初回のみ)
			}
			//タイトルシーンでHキーが押されたら履歴シーンへ移動
			else if(key === "h" || key === "H")
			{
				this.historyScene = new History();
				this.nowScene = this.historyScene;
				this.nowScene.display();//htmlを描画（初回のみ)
			}
		}
		//グラフシーンでEscキーが押されたらタイトルシーンへ移動
		else if(this.nowScene instanceof Graph)
		{
			if(key === "Escape")
			{
				this.nowScene = this.titleScene;
				this.nowScene.display();//htmlを描画（初回のみ)
			}
		}
	}

	
}

