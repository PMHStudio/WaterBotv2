const Discord = require("discord.js");
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => {

     	 superagent.get("http://api.myjson.com/bins/j4s9w").then((res) => {
let StocksPrice = res.body;

let OneP = StocksPrice["Stocks"].OneStock
let TwoP = StocksPrice["Stocks"].TwoStock
let ThrP = StocksPrice["Stocks"].ThrStock
let ForP = StocksPrice["Stocks"].ForStock
let FivP = StocksPrice["Stocks"].FivStock
let SixP = StocksPrice["Stocks"].SixStock
let SevP = StocksPrice["Stocks"].SevStock
let EigP = StocksPrice["Stocks"].EigStock

let OnePs = StocksPrice["StocksB"].OneStockB
let TwoPs = StocksPrice["StocksB"].TwoStockB
let ThrPs = StocksPrice["StocksB"].ThrStockB
let ForPs = StocksPrice["StocksB"].ForStockB
let FivPs = StocksPrice["StocksB"].FivStockB
let SixPs = StocksPrice["StocksB"].SixStockB
let SevPs = StocksPrice["StocksB"].SevStockB
let EigPs = StocksPrice["StocksB"].EigStockB

var cprice1 = OnePs - OneP
var cprice2 = TwoPs - TwoP
var cprice3 = ThrPs - ThrP
var cprice4 = ForPs - ForP
var cprice5 = FivPs - FivP
var cprice6 = SixPs - SixP
var cprice7 = SevPs - SevP
var cprice8 = EigPs - EigP

if (OneP > OnePs) {
          cprice1 = `${cprice1}`
	     cprice1 = cprice1.replace("-", "");
     cprice1 = `- 멜론주식회사 : ${OneP} (` + ` ▼ ${cprice1})`
} else if (OneP < OnePs) {
     cprice1 = `+ 멜론주식회사 : ${OneP} (` + ` ▲ ${cprice1})`
} else { cprice1 = `0 멜론주식회사 : ${OneP} ( - 0 )` }
                
if (TwoP > TwoPs) {
          cprice2 = `${cprice2}`
	     cprice2 = cprice2.replace("-", "");
     cprice2 = `- 키위전자 : ${TwoP} (` + ` ▼ ${cprice2})`
} else if (TwoP < TwoPs) {
     cprice2 = `+ 키위전자 : ${TwoP} (` + ` ▲ ${cprice2})`
} else { cprice2 = `0 키위전자 : ${TwoP} ( - 0 )` }
                
if (ThrP > ThrPs) {
          cprice3 = `${cprice3}`
	     cprice3 = cprice3.replace("-", "");
     cprice3 = `- 도리치킨 : ${ThrP} (` + ` ▼ ${cprice3})`
} else if (ThrP < ThrPs) {
     cprice3 = `+ 도리치킨 : ${ThrP} (` + ` ▲ ${cprice3})`
} else { cprice3 = `0 도리치킨 : ${ThrP} ( - 0 )` }
                
if (ForP > ForPs) {
          cprice4 = `${cprice4}`
	     cprice4 = cprice4.replace("-", "");
     cprice4 = `- 오아시수 : ${ForP} (` + ` ▼ ${cprice4})`
} else if (ForP < ForPs) {
     cprice4 = `+ 오아시수 : ${ForP} (` + ` ▲ ${cprice4})`
} else { cprice4 = `0 오아시수 : ${ForP} ( - 0 )` }
                
if (FivP > FivPs) {
          cprice5 = `${cprice5}`
	     cprice5 = cprice5.replace("-", "");
     cprice5 = `- 요세미티전자 : ${FivP} (` + ` ▼ ${cprice5})`
} else if (FivP < FivPs) {
     cprice5 = `+ 요세미티전자 : ${FivP} (` + ` ▲ ${cprice5})`
} else { cprice5 = `0 요세미티전자 : ${FivP} ( - 0 )` }
		 
if (SixP > SixPs) {
          cprice6 = `${cprice6}`
	     cprice6 = cprice6.replace("-", "");
     cprice6 = `- 멜론농장 : ${SixP} (` + ` ▼ ${cprice6})`
} else if (SixP < SixPs) {
     cprice6 = `+ 멜론농장 : ${SixP} (` + ` ▲ ${cprice6})`
} else { cprice6 = `0 멜론농장 : ${SixP} ( - 0 )` }
		 
if (SevP > SevPs) {
          cprice7 = `${cprice7}`
	     cprice7 = cprice7.replace("-", "");
     cprice7 = `- 연어해산물 : ${SevP} (` + ` ▼ ${cprice7})`
} else if (SevP < SevPs) {
     cprice7 = `+ 연어해산물 : ${SevP} (` + ` ▲ ${cprice7})`
} else { cprice7 = `0 연어해산물 : ${SevP} ( - 0 )` }
		 
if (EigP > EigPs) {
          cprice8 = `${cprice8}`
	     cprice8 = cprice8.replace("-", "");
     cprice8 = `- 회사8 : ${EigP} (` + ` ▼ ${cprice8})`
} else if (EigP < EigPs) {
     cprice8 = `+ 회사8 : ${EigP} (` + ` ▲ ${cprice8})`
} else { cprice8 = `0 회사8 : ${EigP} ( - 0 )` }
 
let TimeLeft = StocksPrice["Timer"].left
		 
message.channel.send("< 베타 1 시즌 주식 차트>" + `

\`\`\`diff
${cprice1}
${cprice2}
${cprice3}
${cprice4}
${cprice5}
${cprice6}
${cprice7}
${cprice8}
\`\`\`

다음변동: ${TimeLeft}초 후

 ` +
"버그를 발견하신 분은 ~문의 로 버그제보좀"
)
});
}

module.exports.help = {
  name: "차트"
}
