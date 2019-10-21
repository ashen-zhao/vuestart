<template>
  <div class="content">
    <div class="top-line">
      <div class="blue"></div>
      <div class="red"></div>
    </div>
    <div class="company">
      <div class="name">
        <i>{{infos.companyName}}</i>
      </div>
      <div class="name-en">
        <i>{{infos.companyNameEn}}</i>
      </div>
    </div>
    <div class="person">
      <div class="person-name">
        <label class="name">{{infos.personName}}</label>
        <label class="work">{{infos.work}}</label>
      </div>
      <div class="person-address">地址：{{infos.address}}</div>
      <div class="person-phone">手机：{{infos.phone}}</div>
      <div class="person-email">邮箱：{{infos.email}}</div>
      <div class="person-wechat">微信：{{infos.wechat}}</div>
    </div>
    <div class="bottom-line">
      <div class="blue">{{infos.signOne}}</div>
      <div class="red">{{infos.signTwo}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    infos: Object
  }
};
</script>

<style lang="scss" scoped>
* {
  background-color: #ececec;
}
.content {
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
  width: 100%;
  .top-line {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 15px;
    .blue {
      width: 30%;
      background-color: blue;
      height: 15px;
    }
    .red {
      width: 30%;
      height: 15px;
      background-color: red;
    }
  }
  .company {
    margin-left: 20px;
    margin-top: 10px;
    text-align: left;
    .name {
      font-size: 20px;
      color: #244987;
    }
    .name-en {
      font-size: 12px;
      color: #244987;
      margin-left: 2.5px;
    }
  }

  .person {
    margin-left: 40%;
    width: 60%;
    text-align: left;
    .name {
      font-size: 22px;
      color: #000;
    }
    .work {
      font-size: 12px;
      color: #000;
      margin-left: 8px;
    }
    .person-address {
      margin-top: 8px;
    }
    .person-address,
    .person-phone,
    .person-email,
    .person-wechat {
      font-size: 12px;
    }
  }

  .bottom-line {
    display: flex;
    justify-content: flex-start;
    margin-top: 15px;
    .blue {
      font-size: 15px;
      line-height: 30px;
      text-align: center;
      color: #fff;
      width: 40%;
      background-color: blue;
      height: 30px;
    }
    .red {
      font-size: 15px;
      text-align: center;
      color: #fff;
      width: 60%;
      background-color: red;
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>