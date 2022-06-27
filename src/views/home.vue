<template>
  <div class="home">
    <div class="main box-size">
      <div class="avigation box-size">
        <img
          src="../assets/icon/icon_return.png"
          class="icon-20 ml-36"
          alt=""
        />
        <p class="font-center">Local screencast</p>
        <div></div>
      </div>
      <div class="search box-size">
        <input type="text" class="search_input" />
        <div class="search_icon al-cen">
          <img src="../assets/icon/icon_search.png" class="icon-20" alt="" />
        </div>
      </div>
      <div class="banner">
        <div class="banner_box">
          <img src="../assets/img/people.png" class="banner_box_img" alt="" />
          <div class="banner_box_text">
            <p class="banner_text_title">Mirror guide</p>
            <p class="banner_text_introduce">common problem</p>
          </div>
        </div>
      </div>
      <div class="classification">
        <div class="classification_item">
          <div class="classification_item_icon al-cen">
            <img src="../assets/icon/icon_photo.png" class="icon-30" alt="" />
          </div>
          <div class="classification_item_text mt-20">
            <p class="classification_item_text_title">Mirror guide</p>
            <p class="classification_item_text_introduce">common problem</p>
          </div>
        </div>
        <div class="classification_item">
          <div class="classification_item_icon al-cen">
            <img src="../assets/icon/icon_photo.png" class="icon-30" alt="" />
          </div>
          <div class="classification_item_text mt-20">
            <p class="classification_item_text_title">Mirror guide</p>
            <p class="classification_item_text_introduce">common problem</p>
          </div>
        </div>
        <div class="classification_item">
          <div class="classification_item_icon al-cen">
            <img src="../assets/icon/icon_photo.png" class="icon-30" alt="" />
          </div>
          <div class="classification_item_text mt-20">
            <p class="classification_item_text_title">Mirror guide</p>
            <p class="classification_item_text_introduce">common problem</p>
          </div>
        </div>
        <div class="classification_item">
          <div class="classification_item_icon al-cen">
            <img src="../assets/icon/icon_photo.png" class="icon-30" alt="" />
          </div>
          <div class="classification_item_text mt-20">
            <p class="classification_item_text_title">Mirror guide</p>
            <p class="classification_item_text_introduce">common problem</p>
          </div>
        </div>
      </div>
      <div class="screenbox">
        <Screen></Screen>
      </div>
    </div>
  </div>
</template>

<script>
import Screen from "../components/screen.vue";

export default {
  components: {
    Screen,
  },
  data() {
    return {};
  },
};
</script>

<style lang="postcss" scoped>
.home {
  height: 100vh;
  background-image: linear-gradient(#c5aff7, #d8deec);
}

.main {
  height: 100vh;
  border-radius: 3.5rem;
  background-image: linear-gradient(#d7caf8, #e9edf6, #efecf3);
  padding: 2.4rem 0;
}
.avigation {
  padding: 2rem 0;
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.search {
  padding: 0.3rem 2.8rem;
  overflow: hidden;
  display: grid;
  grid-template-columns: 8fr 1fr;
}
.search_input {
  padding: 2rem 0;
  border-radius: 2rem 0 0 2rem;
  outline: none;
  text-indent: 2rem;
  font-size: 1rem;
}
.search_icon {
  border-radius: 0 2rem 2rem 0;
  background-color: white;
}
.banner {
  padding: 3.5rem 2.4rem;
}
.banner_box {
  background-color: white;
  border-radius: 5rem;
  padding: 3rem 0;
  position: relative;
}
.banner_box_img {
  position: absolute;
  bottom: 0;
  left: 2rem;
  height: 115%;
  width: 30%;
}
.banner_box_text {
  margin-left: 15rem;
}
.banner_text_title {
  font-size: 2rem;
  font-weight: 700;
}
.banner_text_introduce {
  font-size: 1rem;
}
.classification {
  padding-left: 1.6rem;
  display: flex;
  overflow-x: scroll;
}
.classification_item {
  padding: 2.6rem 1.2rem;
  background-color: #7468fc;
  border-radius: 3rem;
  margin: 0 0.8rem;
  text-align: center;
  min-width: 13.4rem;
  display: inline-block;
}
.classification_item_icon {
  padding: 2rem;
  background-color: #cfd1ff;
  border-radius: 2rem;
  display: inline-block;
}
.classification_item_text {
  font-size: 1.5rem;
}
.classification_item_text_title {
  font-weight: 800;
  color: white;
}
.classification_item_text_introduce {
  color: #a197ff;
}
::-webkit-scrollbar {
  display: none;
}
</style>
