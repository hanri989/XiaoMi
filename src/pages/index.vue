<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, j) in item" :key="j">
                    <a :href="sub ? '/#/product/'+sub.id : ''">
                      <img :src="sub ? sub.img : '/imgs/item-box-1.png'" alt="">
                      {{sub ? sub.name : '小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 智能音箱</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">配电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in slideList" :key="item.img">
            <a :href="'/#/product/'+item.id"><img :src="item.img" alt=""></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot='button-prev'></div>
          <div class="swiper-button-next" slot='button-next'></div>
        </swiper>
      </div>
      <div class="ads-box">
        <div class="top">
          <a :href="'/#/product/'+item.id" v-for='(item, i) in adsList' :key="i"><img :src="item.img" alt=""></a>
        </div>
        <div class="down">
          <a href="/#/product/30">
            <img src="/imgs/banner-1.png" alt="">
          </a>
        </div>
      </div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <serviece-bar></serviece-bar>
  </div>
</template>

<script>
import servieceBar from '../components/ServieceBar'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  components: {
    swiper,
    swiperSlide,
    servieceBar
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 0,
          shadowScale: 0
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: [
        {
          id:'42',
          img: '/imgs/slider/slide-1.jpg'
        },
        {
          id:'45',
          img: '/imgs/slider/slide-2.jpg'
        },
        {
          id:'46',
          img: '/imgs/slider/slide-3.jpg'
        },
        {
          id:'',
          img: '/imgs/slider/slide-4.jpg'
        },
        {
          id:'',
          img: '/imgs/slider/slide-5.jpg'
        },
      ],
      menuList: [
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: "小米CC9"
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版'
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro'
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区'
          }
        ],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ],
      adsList: [
        {
          id:33,
          img:'/imgs/ads/ads-1.png'
        },
        {
          id:48,
          img:'/imgs/ads/ads-2.jpg'
        },
        {
          id:45,
          img:'/imgs/ads/ads-3.png'
        },
        {
          id:47,
          img:'/imgs/ads/ads-4.jpg'
        }
      ]
    } 
  }
}
</script>

<style lang='scss'>
  @import '../assets/scss/mixin.scss';
 .index {
   position: relative;
   .swiper-box{
     .nav-menu{
       position: absolute;
       width: 264px;
       height: 460px;
       z-index: 2;
       padding: 26px 0;
       box-sizing: border-box;
       background-color: rgba(0,0,0,0.3);
       .menu-wrap{
         .menu-item{
           height: 50px;
           line-height: 50px;
           &:hover{
              background-color: #ff6600;
              .children{
                display: block;
              }
            }
           a{
             position: relative;
             display: block;
             font-size: 16px;
             color: #fff;
             padding-left: 30px;
             &:after{
               content: '';
               position: absolute;
               right: 30px;
               top: 17.5px;
               @include bgImg(10px, 15px, '/imgs/icon-arrow.png')
              }
            }
            .children{
              display: none;
              width: 962px;
              height: 460px;
              background-color: #ffffff;
              position: absolute;
              top: 0;
              left: 264px;
              border: 1px solid #e5e5e5;
              ul{
                display: flex;
                justify-content: space-between;
                height: 75px;
                li{
                  line-height: 75px;
                  flex: 1;
                  padding-left: 23px;
                }
                a{
                  color: #333;
                  font-size: 14px;
                }
                img{
                  width: 42px;
                  height: 35px;
                  vertical-align: middle;
                  margin-right: 15px;
                }
              }
            }
         }
       }
     }
   }
   .swiper-button-prev{
     left: 274px;
   }
   .ads-box{
     margin-top: 10px;
     height: 350px;
     .top{
       display: flex;
       a{
         flex: 1;
         display: block;
         height: 150px;
         img{
           display: block;
           width: 250px;
           height: 150px;
           margin: 0 auto;
         }
       }
     }
     .down{
       img{
         display: block;
         margin: 0 auto;
         padding-top: 25px;
       }
     }
   }
 }
</style>