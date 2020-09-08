
// 使用scp上传到服务器  方法一
// var scp2 = require("scp2");
// console.log(scp2)
// scp2.scp("./dist/",{
//   host:"81.68.105.76",
//   port:22,
//   username:"ubuntu",
//   password:"Chai123456",
//   path:"/usr/share/nginx/html/vueExport/"
// },function(err){
//   if(err)
//     console.log("upload fail.");
//   else
//     console.log("upload successfully.");
// })


// 使用scp上传到服务器  方法2
var Client = require("scp2").Client;
var client = new Client({
  host:"81.68.105.76",
  username:"ubuntu",
  password:"Chai123456"
});
console.log(client)
client.upload("./build/hello.txt","/usr/share/nginx/html",function(err){
  if(err)
    console.log("err:"+err)
  else
    console.log("upload successfully.");
})
