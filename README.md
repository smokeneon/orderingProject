主要功能  
前台：登录注册，购物车选购，菜品列表，单个菜品详情，用户评价
后台：用户身份管理（角色：管理员，商家）
    　管理员：管理用户总数，用户的增删改查
    　商家：菜品增删改查，金额数据统计（日收入，月收入，总收入）
    　

登录　Post
    {
        userId:'leon',
        password:'admin'
    }
    return
    {
        success:true/false,
        message:'相关错误信息'
    }

获取验证码 Post
    {
        email:'leon@hooc.top'
    }
    return
    {
        code:'123456',
        message:'发送成功／失败'
    }

注册 Post
    {
        email:'leon@hooc.top',
        <!-- 昵称 -->
        Nickname:'本宝宝',
        password:'admin',
        code:'123456'
    }
    return
    {
        success:true/false,
        message:'注册成功／失败'
    }

获取首页菜品信息 Get /meal?page=0
return
{
    <!-- 菜品总页数１０页 -->
    mealTotalPage:10，
    <!-- 当前页数 -->
    currentPage:0,
    <!-- 菜品总数 -->
    mealTotal:50，
    <!-- 菜品列表 -->
    mealList:{
        <!-- 菜品０ -->
        {
            <!-- 菜品图片 -->
            mealPictureURL:'http://...'，
            <!-- 菜品名 -->
            mealTitle:'豪华单人餐',
            <!-- 菜品单价　-->
            mealUnitPrice:'37'
        }，
         <!-- 菜品１ -->
        {
            <!-- 菜品图片 -->
            mealPictureURL:'http://...'，
            <!-- 菜品名 -->
            mealTitle:'豪华双人餐',
            <!-- 菜品价格 -->
            mealPrice:'50'
        }
        ...
    }  
}

获取菜品详细信息　get　／mealDetails?id=xxx
    return
    {
        <!-- 菜品图片 -->
                <!-- 菜品ID -->
                mealId:'1001',
                <!-- 菜品图片 -->
                mealPictureURL:'http://...'，
                <!-- 菜品名 -->
                mealTitle:'豪华双人餐',
                <!-- 菜品价格 -->
                mealPrice:'50',
                <!-- 菜品介绍 -->
                mealIntroduction:'这是一道很美味很美味的菜肴'，
                <!-- 用户评价 -->
                appraise:{
                    {
                        mealId:'1001'
                        Nickname：'小猪猪'，
                        appraiseContent:'这道菜真好吃',
                        
                    }
                }
    }

购物车点击付款　Post　
{
    orderingMealList:{
        <!-- 菜品０ -->
        {
            <!-- 菜品ID -->
            mealId:'1001',
            <!-- 菜品单价 -->
            mealUnitPrice:37,
            <!-- 菜品数量 -->
            mealMount:2,
            <!-- 单个总价 -->
            singleMealTotalPrice:72,
        }
        <!-- 菜品１ -->
        {
            <!-- 菜品ID -->
            mealId:'100２',
            <!-- 菜品单价 -->
            mealUnitPrice:30,
            <!-- 菜品数量 -->
            mealMount:2,
            <!-- 单个总价 -->
            singleMealTotalPrice:60,
        }
    },
     <!-- 下单时间 -->
    OrderingTime:'2020-02-13-15:00:00',
    <!-- 所有菜品总价 -->
    allMealTotalPrice:132
}
return　
{
    <!-- 此时应该在每个订单里存储几个状态，已下单成功未付款，已下单已付款等 -->
    <!-- 下单成功／失败 -->
    orderSuccess:true/false,
    <!-- 付款成功／失败 -->
    paymentSuccess:true/false,

}

<!-- 未完待续。。。

记录用户是否给菜品已经下过单，如果下过单可以在该菜品下评价
 -->



