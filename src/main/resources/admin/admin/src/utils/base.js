const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootpist4/",
            name: "springbootpist4",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootpist4/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "视频网站系统"
        } 
    }
}
export default base
