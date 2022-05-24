var list = ["中国","广东","湛江","中山","珠海","深圳","广州"];
const url = "https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5";
变量 ala="";
功能现在时间（）{
 现在让 = 新日期（）；
 让时间 = now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
 返回时间
}
函数编号（位置，结果）{
  var loc = 位置；
  var resu = 结果；
  var loc_new = new RegExp(loc + "[\\s\\S]*?confirm[\\s\\S]{3}(\\d+)");
  var loc_now = new RegExp(loc + "[\\s\\S]*?nowConfirm[\\s\\S]{3}(\\d+)");
  让 loc_new_res = loc_new.exec(resu);
  让 loc_now_res = loc_now.exec(resu);
  如果（loc_new_res）{
    //console.log("已获取" + loc + "的信息");
    ala = ala +loc +" : " +loc_new_res[1].padStart(5,"\u0020")+":"+loc_now_res[1].padStart(5,"\u0020")+ "\n";
  } 别的 {
    //console.log("获取" + loc + "的信息失败");
    ala = ala + loc + " : 查无数据\n";
  }
};
$httpClient.get(url, function(error, response, data){
  让 res = 数据；
  for (var i = 0; i < list.length; i++) {
    数（列表[i]，水库）；
    if (i == list.length - 1) {
     $完成（{
       title: "疫情：新增 | 工具"+ " "+nowtime(),
       图标：“filemenu.and.cursorarrow”，
       "图标颜色":"#1E90FF",
       内容：ala.replace(/\n$/, "")
     });
    }
  }
});