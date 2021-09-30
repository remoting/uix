 export default {
    template:"<div>{{t}}<el-button >ss</el-button></div>",
    name: 'test',
    data() {
        return {
            "t": "aaaaa"
        }
    },
    methods: {
        test(){
           // this.$axios.get("/api/xx")
        }
    }
}