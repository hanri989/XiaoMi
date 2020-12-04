<template>
  <div class="navheader">
    <div class="topHeader">
      <div class="container">
        <div class="leftHeader">
          <a href="javascript:;">小米商城</a>
          <span class="sep">|</span>
          <a href="javascript:;">MIUI</a>
          <span class="sep">|</span>
          <a href="javascript:;">loT</a>
          <span class="sep">|</span>
          <a href="javascript:;">有品</a>
          <span class="sep">|</span>
          <a href="javascript:;">云服务</a>
          <span class="sep">|</span>
          <a href="javascript:;">用户协议</a>
        </div>
        <div class="rightHeader">
          <a href="">登录</a>
          <a href="" class="car"><span></span>购物车(0)</a>
        </div>
      </div>
    </div>
    <div class="navHeader">
      <div class="container">
        <div class="logo">
          <a href=""></a>
        </div>
        <div class="nav">
          <div class="nav-item" @mouseover="hover" @mouseleave="leave">
            <span>小米手机</span>
          </div>
          <div class="nav-item" >
            <span>Redmi红米</span>
          </div>
          <div class="nav-item" @mouseover="hover" @mouseleave="leave">
            <span>电视</span>
          </div>
          <div class="nav-item">
            <span>笔记本</span>
          </div>
          <div class="nav-item">
            <span>家电</span>
          </div>
          <div class="nav-item">
            <span>路由器</span>
          </div>
          <div class="nav-item">
            <span>服务</span>
          </div>
          <div class="nav-item">
            <span>社区</span>
          </div>
        </div>
        <div class="search">
          <input type="text" placeholder="请输入搜索内容">
          <a href="javascript:;"></a>
        </div>
        <div id="navMenu" v-show="isActive">
          <ul>
            <li class="product">
              <a href="">
                <div class="img">
                  <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                </div>
                <div class="title">小米cc9</div>
                <p class="price">1799元起</p>
              </a>
            </li>
            <li class="product">
              <a href="">
                <div class="img">
                  <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                </div>
                <div class="title">小米cc9</div>
                <p class="price">1799元起</p>
              </a>
            </li>
            <li class="product">
              <a href="">
                <div class="img">
                  <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                </div>
                <div class="title">小米cc9</div>
                <p class="price">1799元起</p>
              </a>
            </li>
            <li class="product">
              <a href="">
                <div class="img">
                  <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                </div>
                <div class="title">小米cc9</div>
                <p class="price">1799元起</p>
              </a>
            </li>
            <li class="product">
              <a href="">
                <div class="img">
                  <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                </div>
                <div class="title">小米cc9</div>
                <p class="price">1799元起</p>
              </a>
            </li>
            <li class="product">
              <a href="">
                <div class="img">
                  <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                </div>
                <div class="title">小米cc9</div>
                <p class="price">1799元起</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    hover() {
      this.isActive = true
    },
    leave() {
      this.isActive = false
    }
  }
}
</script>

<style lang='scss' scoped>
  .topHeader{
    height: 40px;
    line-height: 40px;
    background-color: #333;
    .container{
      height: 40px;
      width: 1226px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .leftHeader{
        font-size: 12px;
        text-align: center;
        line-height: 40px;
        .sep{
          margin: 0 5px;
          color: #424242;
        }
        a{
          display: inline-block;
          color: #b0b0b0;
          &:hover {
            color: #fff
          }
        }
      }
      .rightHeader{
        font-size: 12px;
        text-align: center;
        line-height: 40px;
        .car{
          width: 110px;
          background-color: #f60;
          color: #fff;
        }
        a{
          display: inline-block;
          color: #b0b0b0;
          margin-right: 17px;
          &:hover{
            color: #fff
          }  
          span{
            display: inline-block;
            width: 16px;
            height: 12px;
            background: url('/imgs/icon-cart.png');
            background-size: contain;
            margin-right: 4px;
          }
        }
      }
    }
  }
  .navHeader{
    height: 100px;
    .container{
      width: 1226px;
      height: 100px;
      line-height: 100px;
      margin: 0 auto;
      position: relative;
      .logo{
        width: 55px;
        height: 55px;
        float: left;
        background-color: #ff6700;
        margin-top: 22px;
        a{
          display: inline-block;
          width: 110px;
          height: 55px;
          &::before {
            content: '';
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url('/imgs/mi-logo.png') center;
            transition: margin .2s;
          }
          &::after {
            content: '';
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url('/imgs/mi-home.png') center;
          }
          &:hover::before{
            margin-left: -55px;
            transition:  margin .2s;
          }
        }
      }
      .nav{
        float: left;
        padding-left: 100px;
        display: flex;
        font-size: 16px;
        color: #333;
        .nav-item{
          margin-right: 20px;
          cursor: pointer;
          &:hover{
            color: #ff6700;
          }
        }
      }
      .search{
        float: right;
        display: flex;
        align-items: center;
        height: 100px;
        input{
          width: 264px;
          border:1px solid #e0e0e0;
          height: 50px;
        }
        a{
          display: inline-block;
          border:1px solid #e0e0e0;
          width: 50px;
          height: 50px;
          background: url('/imgs/icon-search.png') no-repeat center;
          background-size: 18px;
          transition: all .2s;
          &:hover{
            background-color: #ff6700;
            color: #fff;
            transition: all .2s;
          }
        }
      }
      #navMenu{
        position: absolute;
        top: 100px;
        width: 1226px;
        height: 230px;
        box-shadow: 0 5px 6px 0 rgba(0,0,0,.11);
        .product{
          float: left;
          font-size: 12px;
          padding: 35px 12px 0;
          text-align: center;
          line-height: 20px;
          position: relative;
          &::after{
            content: '';
            position: absolute;
            top: 40px;
            right: 0;
            width: 1px;
            height: 100px;
            border-left: 1px solid #e0e0e0;
          }
          &:last-child::after{
            display: none;
          }
          img{
            height: 110px;
            width: 160px;
          }
          .title{
            color: #333;
            font-weight: bold;
            margin-top: 5px;
          }
          .price{
            color:#ff6700
          }
        }
      }
    }
  }
</style>