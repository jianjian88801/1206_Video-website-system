
var projectName = '视频网站系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '视频分享',
	url: './pages/shipinfenxiang/list.html'
}, 
{
	name: '视频排名',
	url: './pages/shipinpaiming/list.html'
}, 

{
	name: '交流论坛',
	url: './pages/forum/list.html'
}, 
{
	name: '留言反馈',
	url: './pages/messages/list.html'
}
]

var adminurl =  "http://localhost:8080/springbootpist4/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["查看","删除","审核","查看评论"],"menu":"视频分享","menuJump":"列表","tableName":"shipinfenxiang"}],"menu":"视频分享管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"视频排名","menuJump":"列表","tableName":"shipinpaiming"}],"menu":"视频排名管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"平台公告","menuJump":"列表","tableName":"pingtaigonggao"}],"menu":"平台公告管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"视频类型","menuJump":"列表","tableName":"shipinleixing"}],"menu":"视频类型管理"},{"child":[{"buttons":["新增","查看","删除"],"menu":"交流论坛","tableName":"forum"}],"menu":"交流论坛"},{"child":[{"buttons":["查看","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","查看评论"],"menu":"视频分享列表","menuJump":"列表","tableName":"shipinfenxiang"}],"menu":"视频分享模块"},{"child":[{"buttons":["查看","查看评论"],"menu":"视频排名列表","menuJump":"列表","tableName":"shipinpaiming"}],"menu":"视频排名模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"视频分享","menuJump":"列表","tableName":"shipinfenxiang"}],"menu":"视频分享管理"}],"frontMenu":[{"child":[{"buttons":["查看","查看评论"],"menu":"视频分享列表","menuJump":"列表","tableName":"shipinfenxiang"}],"menu":"视频分享模块"},{"child":[{"buttons":["查看","查看评论"],"menu":"视频排名列表","menuJump":"列表","tableName":"shipinpaiming"}],"menu":"视频排名模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
