<template>
  <div class="container">
    <div class="header">
      <div class="avator">
        <img :src="infos.u.header[0]" />
      </div>
      <div class="name-passtime">
        <div class="name">{{infos.u.name}}</div>
        <div class="passtime">{{infos.passtime}}</div>
      </div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "baisi",
  props: {
    infos: Object
  }
};
</script>

<style lang="scss" scoped>
* {
  background-color: #fff;
}

$name-height: 27px;
.container {
  .header {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    padding-top: 10px;
    .avator {
      background-color: #f5f5f5;
      margin-left: 10px;
      width: 55px;
      height: 55px;
      border-radius: 10px;
      text-align: center;
      vertical-align: middle;
      img {
        margin-top: 1px;
        width: 53px;
        height: 53px;
        border-radius: 10px;
      }
    }
    .name-passtime {
      font-size: 17px;
      padding-left: 10px;
      .name {
        height: $name-height;
        text-align: left;
        line-height: $name-height;
      }
      .passtime {
        height: $name-height;
        line-height: $name-height;
        text-align: left;
      }
    }
  }
  .content {
    margin: 0px;
    text-align: left;
    padding: 10px;
  }
}
</style>