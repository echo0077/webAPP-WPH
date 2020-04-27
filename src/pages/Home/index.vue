<template>
  <div class="HomeTopCtr">
    <div class="Home">
      <wheel-planting></wheel-planting>
    </div>
  </div>
</template>

<script type="text/javascript">
// import { setCookie } from '@/util/cookie'
import wheelPlanting from './components/wheelPlanting.vue'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {wheelPlanting},
  methods: {
  },
  created () {
  },
  mounted () {
  },
  beforeDestroy () {
  }
}
</script>

<style lang="less" scoped>
.HomeTopCtr {
  background-color: #f5f5f5;
}
.Home {
  background-color: #f5f5f5;
  .Home_nav {
    height: 58px;
    position: fixed;
    z-index: 9999;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    border-bottom: 2px solid #4195d6;
    .Home_nav_img {
      flex: 1;
      display: flex;
      > span {
        display: table-cell;
        vertical-align: middle;
        padding-left: 12px;
        padding-top: 12px;
        img {
          width: 156px;
        }
      }
      .Home_nav_shopping {
        text-align: right;
        width: 100%;
        .Home_nav_shopping_icon {
          height: 38px;
          margin-right: 25px;
          display: inline-block;
          position: relative;
          cursor: pointer;
          .Home_nav_shopping_icon_num {
            border-radius: 6px;
            background-color: #0096d6;
            color: #fff;
            position: absolute;
            text-align: center;
            top: 6px;
            right: 42px;
            width: 18px;
            height: 18px;
            font-size: 12px;
          }
          .Home_nav_shopping_icon_tit {
            color: #4195d6;
            font-size: 14px;
            line-height: 58px;
            margin-left: 8px;
          }
          img {
            width: 26px;
            transform: translateY(9px);
          }
        }
      }
    }
    .Home_nav_jump {
      width: 17%;
      color: #fff;
      font-size: 14px;
      line-height: 56px;
      span {
        border-radius: 2px;
        cursor: pointer;
        width: 48%;
        display: inline-block;
        background: linear-gradient(
          90deg,
          rgba(80, 179, 255, 1) 0%,
          rgba(65, 149, 214, 1) 100%
        );
        box-shadow: 0px 5px 30px 2px rgba(0, 0, 0, 0.1);
        height: 30px;
        line-height: 30px;
        text-align: center;
      }
    }
  }
  .homeImg {
    margin-bottom: 14px;
    display: flex;
    background-color: #fff;
    .homeImg_img {
      flex: 1;
      .homeImg_nav {
        min-width: 168px;
        position: absolute;
        z-index: 9;
        ul.homeImg_nav_ul {
          opacity: 0.6;
          background-color: #000;
          li {
            width: 168px;
            position: relative;
            padding: 3px 0 6px 12px;
            .homeImg_nav_tit {
              color: #666;
              > span {
                font-family: MicrosoftYaHei;
                font-size: 14px;
                width: calc(100% - 28px);
                display: inline-block;
                color: #fff;
              }
              > i {
                transform: translateY(1px);
                text-align: right;
                padding-right: 6px;
              }
              &:hover {
                > span {
                  color: #4195d6;
                }
                > i {
                  color: #4195d6;
                }
                cursor: pointer;
              }
            }
            .homeImg_nav_tit.active {
              cursor: pointer;
            }
          }
          li.active {
            background-color: #dcdcdc;
            color: #4195d6;
            .homeImg_nav_tit {
              color: #4195d6;
            }
          }
        }
        .homeImg_nav_none {
          opacity: 0.9;
          position: absolute;
          top: 0;
          right: 5px;
          z-index: 9999;
          transform: translateX(100%);
          border-radius: 2px;
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.4);
          background-color: #fff;
          padding: 6px 10px;
          width: 400px;
          word-wrap: break-word;
          .homeImg_nav_none_two {
            margin-bottom: 6px;
            h6 {
              font-size: 15px;
              font-weight: 600;
              cursor: pointer;
              display: inline-block;
              &:hover {
                color: #4195d6;
              }
            }
            .homeImg_nav_none_two_three {
              padding-left: 10px;
              li {
                display: inline-block;
                width: auto;
                margin-right: 10px;
                span {
                  font-size: 12px;
                  white-space: nowrap;
                  color: #000;
                  cursor: pointer;
                  &:hover {
                    color: #4195d6;
                  }
                }
              }
            }
          }
          &:hover {
            display: inline-block;
          }
        }
      }
    }
    .homeImg_user {
      width: 17%;
      min-width: 170px;
      .homeImg_user_top {
        text-align: center;
        padding-top: 8px;
        color: #4195d6;
        img {
          width: 50px;
        }
      }
      .homeImg_user_bottom {
        padding-top: 8px;
        text-align: center;
        h6 {
          font-size: 15px;
          font-weight: 600;
        }
        .homeImg_user_bottom_graph {
          font-size: 12px;
          color: #666;
          padding-top: 12px;
          display: flex;
          justify-content: space-around;
          white-space: nowrap;
          .homeImg_user_bottom_graph_txt {
            padding-bottom: 4px;
            display: inline-block;
            width: 53%;
            text-align: right;
          }
          .homeImg_user_bottom_graph_num {
            flex: 1;
            text-align: left;
            padding-left: 2%;
            span {
              font-size: 14px;
              font-weight: 600;
              color: #4195d6;
              margin-right: 3px;
            }
          }
        }
        .homeImg_user_bottom_ad {
          padding: 40px 10px 0 10px;
          .homeImg_user_bottom_ad_title {
            margin-bottom: 4px;
            display: flex;
            justify-content: space-between;
            span {
              color: #4195d6;
              font-size: 12px;
              line-height: 22px;
            }
          }
          ul {
            li {
              line-height: 24px;
              .colorSpan {
                border-radius: 50%;
                width: 10px;
                height: 10px;
                display: inline-block;
                transform: translateY(-7px);
              }
              .toolTipSpan {
                color: #666;
                cursor: pointer;
                font-size: 12px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                width: calc(100% - 21px);
                display: inline-block;
                text-align: left;
                margin-left: 6px;
                &:hover {
                  color: #4195d6;
                }
              }
            }
          }
        }
      }
    }
  }
  .resJump {
    background-color: #fff;
    .resJump_tit {
      font-size: 24px;
      font-weight: 600;
      text-align: center;
      padding: 10px 0;
      background-color: #f5f5f5;
    }
    .resJump_flex {
      padding: 12px 30px 12px 30px;
      .resJump_flex_name {
        margin-bottom: 6px;
        border-left: 2px solid #1ba1da;
        span {
          margin-left: 12px;
        }
      }
      .resJump_flex_ctr {
        display: flex;
        margin-bottom: 29px;
        .resJump_flex_ctr_moule {
          cursor: pointer;
          border: 1px solid #ddd;
          padding: 3px;
          margin-right: 29px;
          width: 18%;
          &:hover {
            border: 1px solid #4195d6;
          }
          .resJump_flex_ctr_moule_img {
            height: 135px;
            display: inline-block;
            text-align: center;
            overflow: hidden;
            width: 100%;
            img {
              height: 100%;
              width: 100%;
            }
          }
          .resJump_flex_ctr_moule_txt {
            padding: 3px;
            .resJump_flex_ctr_moule_txt_tit {
              display: flex;
              justify-content: space-between;
              padding: 6px 0;
              > div {
                font-size: 13px;
                color: #24a3db;
                img {
                  width: 14px;
                  margin-right: 3px;
                }
              }
              span {
                font-size: 12px;
                color: #666;
                line-height: 19px;
                white-space: nowrap;
              }
            }
            p {
              font-size: 12px;
              color: #666;
              min-height: 38px;
            }
            .resJump_flex_ctr_moule_txt_icon {
              span {
                color: #fff;
                font-size: 12px;
                margin-right: 4px;
                padding: 1px 6px 2px 6px;
                border-radius: 4px;
              }
              .orangeColor {
                background-color: #ff8100;
              }
              .yellowColor {
                background-color: #ffc900;
              }
              .redColor {
                background-color: #ff3d3e;
              }
            }
          }
        }
        .resJump_flex_ctr_moule:last-child {
          margin-right: 0px;
        }
        .airObj.resJump_flex_ctr_moule {
          border: none;
          cursor: inherit;
        }
        .hotImg.resJump_flex_ctr_moule {
          padding: 0;
          height: 243px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
.bottomBanner {
  background-color: #fff;
  padding: 20px 20px 10px 20px;
  margin-bottom: 20px;
}
</style>
<style lang="less">
.shoppingTooltip,
.articleTooltip {
  z-index: 999999 !important;
  border: 1px solid #4195d6 !important;
  color: #999 !important;
  font-size: 14px !important;
  .popper__arrow {
    border-bottom-color: #4195d6 !important;
  }
}
.articleTooltip {
  .popper__arrow {
    border-left-color: #4195d6 !important;
    border-bottom-color: transparent !important;
  }
}
.elTabs {
  .is-top.is-active {
    background-color: #0096d6;
    color: #fff;
  }
}
.carouselImg {
  width: 100%;
  min-width: 160px;
  .el-carousel__container {
    // height: 100% !important;
    margin-bottom: 10px;
    .lunbotu {
      width: 100%;
      cursor: pointer;
    }
  }
}
</style>
