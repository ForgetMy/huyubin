<template>
  <div class="indexs">
    <!-- 增加按钮 -->
    <el-button type="primary" class="addbtn" @click="addfn(1)">
      编辑添加,字段各种规则验证示例
    </el-button>
    <el-button type="primary" class="addbtn">
      本地导出表格
    </el-button>
    <el-table :data="arrs">
      <el-table-column prop="title" label="文章标题"> </el-table-column>
      <el-table-column prop="name" label="作者"> </el-table-column>
      <el-table-column prop="num" label="浏览量"> </el-table-column>
      <el-table-column prop="reply" label="回复"> </el-table-column>
      <el-table-column label="操作">
        <!-- 删除 -->
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    
    <!-- 弹窗 -->
    <!-- Form -->
    <el-dialog
      :title="i === 1 ? '添加用户' : '编辑'"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
          <el-form-item label="品牌名称" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="浮点(2位)" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input v-model="form.num" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="机构地址" :label-width="formLabelWidth">
          <el-input v-model="form.reply" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="管理员手机号" :label-width="formLabelWidth">
          <el-input v-model="form.reply" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.reply" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="fnsure">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import instance from "@/api/index"
export default {
    name:"ListView",
    data(){
        return{
            arrs:null,
            debounceedit:null,  //新业务防抖封装
            debouncedelete:null,
            dialogFormVisible:false, //弹窗显示不显示
            form:{
                title:0,
                name:"fengsk",
                num:234325,
                reply:21
            },
            formLabelWidth:"120px",
            i:0
        }
    },
    methods:{
        addfn(i){
            //添加业务
            this.i = i
            this.form.title = ""
            this.form.name = ""
            this.form.num = ""
            this.form.reply = ""
            this.dialogFormVisible = !this.dialogFormVisible
        },
        handleDelete(a,b){
            console.log(a,b)
            this.$confirm("您确定要删除该条信息吗","警告",{
                confirmButtonText:"确定",
                cancelButtonText:"取消",
                type:"warning"
            }).then(()=>{
                //确定的回调函数
                console.log("删除了")
                this.deleteHomeIndex(a)
            }).catch(()=>{
                //取消的回调函数
                console.log("您取消了")
            })
        },
        async getListView(){
            let {data} = await instance.get("/homeindex")
            console.log(data)
            this.arrs = data
        },
        //删除业务
        async deleteHomeIndex(index){
            let {data} = await instance.delete('/homeindex/'+index)
            console.log(data)
            this.getListView()
        }
    },
    created(){
        this.getListView()
    }
};
</script>

<style>
</style>