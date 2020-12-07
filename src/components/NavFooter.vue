<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://www.mi.com/">小米商城</a><span>|</span>
      <a href="https://home.miui.com/">MIUI</a><span>|</span>
      <a href="https://home.mi.com/index.html">米家</a><span>|</span>
      <a href="http://www.miliao.com/">米聊</a><span>|</span>
      <a href="https://www.duokan.com/">多看</a><span>|</span>
      <a href="javascript:;">政企服务</a><span>|</span>
      <a href="javascript:;">小米天猫店</a><span>|</span>
      <a href="javascript:;">小米集团隐私政策</a>
    </div>
    <div class="copyright">© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .footer{
    height: 234px;
    border-top: 4px solid #ff6600;
    background-color: #333333;
    color: #999999;
    font-size:16px;
    text-align:center;
    .footer-logo{
      margin-top: 46px;
      margin-bottom: 31px;
      img{
        width:53px;
        padding-bottom: 10px;
      }
    }
    .footer-link{
      a{
        color: #999999;
      }
      span{
        padding: 0 5px
      }
    }
  }
</style>