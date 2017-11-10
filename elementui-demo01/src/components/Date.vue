<template>
    <div id="date">
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions0">
        </el-date-picker>
    </div>
</template>
<script>
export default{
    data(){
        return {
            value1:'',
            pickerOptions0:{
                disabledDate(time){     //过去的日期变成不能选的
                    return time.getTime() < Date.now() - 8.64e7;
                }
            }
        }
    }
}
</script>


