 export default {
    template:"<div>{{t}}</div>",
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