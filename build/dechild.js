
var exec = require('child_process').exec;

function execute(cmd){
	console.log(cmd)
    exec(cmd, function(error, stdout, stderr) {
        if(error){
            console.error(error);
        }
        else{
            console.log("success");
        }
    });
	
}
execute('ssh ubuntu@chailu.ink', 'sudo rm -rf /usr/share/nginx/html/vueExport/*');
execute('scp -r F:/vueDemo/excalexport/dist/* ubuntu@chailu.ink:/usr/share/nginx/html/vueExport');
// execute('sudo rm -rf /usr/share/nginx/html/vueExport/*');
// execute('scp -r F:/vueDemo/excalexport/dist/* ubuntu@chailu.ink:/usr/share/nginx/html/vueExport');