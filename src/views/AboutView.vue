<template>
  <div class="about">
    <div class="header_div">
          <span><a href="#" target="_blank" @click="goToHome()"> Home</a></span>
          <span @click="goToAbout()">
            Utility
            </span>
          <span><a
              href="https://www.dextools.io/app/ether/pair-explorer/0x811a10657440928c9cda3580eb54f271ac4b9a19?_sm_nck=1"
              target="_blank"> Chart</a></span>
          <span><a href="https://t.me/LaelapsPortal" target="_blank"> Telegram</a></span>
          <span><a href="https://twitter.com/LaelapsBot" target="_blank"> Twitter</a></span>
          <span><a href="https://medium.com/@LaelapsBot" target="_blank"> Medium</a></span>
          <span><a href="https://opensea.io/0xADC50022351F4AD58A2A4775Da4eDFD8ff58dEf3/created" target="_blank">
              Opensea</a></span>
        </div>
    <div class="div_about">
      <h1>Utility</h1>
      <p>Laelaps is a project that aims to enhance users' experience on the blockchain. By collecting and simplifying
        data, Laelaps acts as a trusted companion that thrives and improves alongside you as you fine-tune your own
        methods.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
       goToHome() {
         this.$router.push('/home');
       },
       goToAbout() {
        console.log(11111)
         this.$router.push('/about');
       }
     }
}
</script>
<style>
@media screen and (max-width: 600px) {
  .header_div {
    width: 99%;
    height: 60px;
    display: block !important;
    line-height: 30px;
    text-align: center;
    padding-left: 20px;
  }
  .div_about {
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
 padding-top:80px !important;
 align-items: center;
 font-family: digital;
}
  .div_about >h1{
 font-size: 60px !important;
  }
  .div_about >p{
    width: 400px !important;
    font-size: 30px !important;
    height: 600px !important;
  }
}
@font-face {
  font-family: 'digital';
  src: url('../../img/Adonais.e8871ad8.ttf');
}

.header_div {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  font-family: digital;
  font-size: 20px;
  color: white;
  height: 80px;
  /* border: 1px blue solid; */
}

.header_div>span a {
  color: white;
  text-decoration: none;
}

.header_div>span a:hover {
  color: rgb(141, 0, 8);
}

.div_about {
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
 padding-top:160px;
 align-items: center;
 font-family: digital;
}
.div_about >h1{
  font-size: 80px;
  color: rgb(251, 245, 145);
}
.div_about >p{
  padding-top: 30px;
  width: 1300px;
    font-size: 46px;
    line-height: 65px;
    font-weight: 600;
}

</style>1
