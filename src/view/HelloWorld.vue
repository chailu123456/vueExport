<template>
  <div class="hello">
  <Btn></Btn>
  <Input :currentValue="currentValue"></Input>
  <h1>vue表格导出--456---789-888-自动打包--本地--------</h1>
  <h1>vue表格导出--456---789-888-自动打包--本地--------</h1>
  <h1>vue表格导出--456---789-888-自动打包--本地--------</h1>
  <h1>vue表格导出--456---789-888-自动打包--本地--------哈哈哈哈</h1>
  <h1>vue表格导出--456---789-888-自动打包--本地--------2222</h1>
    <input type="file" ref="upload" accept=".xls,.xlsx" class="outputlist_upload">
    <div class="foot">
      <p>粤ICP备20058414号</p>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import XLSX from 'xlsx'
import axios from 'axios'
import echarts from 'echarts'
export default {
  name: 'tab1',
  data () {
    return {
      currentValue: 'hahahaha',
      outputs: []
    }
  },
  mounted() {
    this.$refs.upload.addEventListener('change', e => {//绑定监听表格导入事件
    this.readExcel(e);
    })
  },
  methods: {
     readExcel(e) {//表格导入
        var that = this;
        const files = e.target.files;
        console.log(files);
        if(files.length<=0){//如果没有文件名
          return false;
        } else if(!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())){
          this.$Message.error('上传格式不正确，请上传xls或者xlsx格式');
          return false;
        }
 
        const fileReader = new FileReader();
        fileReader.onload = (ev) => {
        try {
            const data = ev.target.result;
            const workbook = XLSX.read(data, {
            type: 'binary'
            });
            const wsname = workbook.SheetNames[0];//取第一张表
            const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]);//生成json表格内容
            console.log(ws);
            let datatime = []
            for(let t = 0;t<ws.length;t++) {
              let obj = {};
              obj.UUID = ws[t].UUID
              obj.color = ws[t].color
              obj.detail = ws[t].detail
              obj.detailwhere = ws[t].detailwhere
              obj.index = ws[t].index
              obj.lat = ws[t].lat
              obj.poiName = ws[t].poiName
              obj.name = ws[t].poiName
              obj.poi = ws[t].poi
              obj.where = ws[t].where
              obj.times = ws[t].times
              obj.wifi = ws[t].wifi
              obj.value = [ws[t].up, ws[t].startId, ws[t].endId]
              obj.itemStyle= {
                normal: {
                  color: ws[t].color
                }
              }
              datatime.push(obj)
            }
            console.log(datatime)

            axios.post('http://localhost:9000/user/login',{params: datatime}).then(res => {
              console.log(res)
            })

            // that.outputs = [];//清空接收数据
            // for(var i= 0;i<ws.length;i++){
            // var sheetData = {
            //     name: ws[i].name,
            //     sex: ws[i].sex,
            //     name: ws[i].age
            // }
            // that.outputs.push(sheetData);
            // }
            // this.$refs.upload.value = '';
 
        } catch (e) {
          return false;
        }
      };
      fileReader.readAsBinaryString(files[0]);
    },
    btn () {
      console.log(Vue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.foot{
    position: fixed;
    bottom: 0;
    text-align: center;
    width: 100%;
    height: 100px;
    background: #000;
    color: #fff;
}
p {
  line-height: 100px;
  margin: 0;
}
</style>