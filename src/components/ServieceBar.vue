<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span>预约维修服务</li>
        <li><span class="icon-7day"></span>7天无理由退换</li>
        <li><span class="icon-15day"></span>15天免费退货</li>
        <li><span class="icon-post"></span>满150元包邮</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import "../assets/scss/mixin.scss";
  .service{
    color: #666;
    font-size: 16px;
    .container{
      height: 40px;
      width: 1226px;
      margin: 0 auto;
      text-align: center;
      li{
        padding-top: 5px;
        display: inline-block;
        width: 24.8%;
        border-right: 1px solid #e5e5e5;
        span{
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-right: 10px;
          vertical-align: sub;
        }
        .icon-setting{
          @include bgImg(20px, 20px, '/imgs/icon-setting.png')
        }
        .icon-7day{
          @include bgImg(20px, 20px, '/imgs/icon-7day.png')
        }
        .icon-15day{
          @include bgImg(20px, 20px, '/imgs/icon-15day.png')
        }
        .icon-post{
          @include bgImg(20px, 20px, '/imgs/icon-post.png')
        }
      }
    }
  }
</style>