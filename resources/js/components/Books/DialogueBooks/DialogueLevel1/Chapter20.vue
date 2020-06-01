<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/wEX3A/MAD29pwEX3A/1/s2/canva-woman-in-yellow-shirt-writing-on-white-paper-MAD29pwEX3A.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgba(13, 20, 12, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Review
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #8F6154; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

    <p>
      Answer the questions (질문에 답하세요):
    </p>

  <p>

    <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


        <v-flex xs12>
          <v-card light color="#C2CBD1">
            <v-card-text class="px-10">
              <ol style="margin: 12px;">
                <li>
                  Where is your teacher from?
                </li>
                <li>
                  What’s your last name?
                </li>
                <li>
                  Are you married?
                </li>
                <li>
                  What’s your phone number?
                </li>
                <li>
                  How far is your office (school) from your home?
                </li>
                <li>
                  Who is your favorite singer?
                </li>
                <li>
                  Is she (he) a good singer?
                </li>
              </ol>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </p>

  <p>
    Choose the correct word: 답을 찾아 주세요.
  </p>

<p>

  <v-container grid-list-md text-xs-left>
    <v-layout row wrap>


      <v-flex xs12>
        <v-card light color="#C2CBD1">
          <v-card-text class="px-10">
            <ol style="margin: 12px;">
              <li>
                 ( &emsp; &emsp; &emsp; ) books are expensive.<br />
                 a) This; b) They; c) Those
              </li>
              <li>
                 This is Mr. Jones. ( &emsp; &emsp; &emsp; ) is a singer.<br />
                 a) Her; b) She; c) He
              </li>
              <li>
                 ( &emsp; &emsp; &emsp; ) is that woman? – She’s Nancy Paine.<br />
                 a) How; b) Who; c) Where
              </li>
              <li>
                 ( &emsp; &emsp; &emsp; ) is Nick? – He’s at the garage.<br />
                 a) Where; b) What; c) How
              </li>
              <li>
                 ( &emsp; &emsp; &emsp; ) Mr. Poole and give ( &emsp; &emsp; &emsp; ) the information.<br />
                 a) Call - her; b) Call - him; c) Talk – he
              </li>
              <li>
                 My ( &emsp; &emsp; &emsp; ) is 205 Oak Street.<br />
                 a) phone number; b) address; c) office
              </li>
              <li>
                 There’s Maria. Let’s talk with ( &emsp; &emsp; &emsp; ).<br />
                 a) him; b) she; c) her
              </li>
              <li>
                 This is Miss Jones. ( &emsp; &emsp; &emsp; ) secretary.<br />
                 a) She is; b) He is the; c) She is a
              </li>
              <li>
                 Those are my post cards. Don’t take ( &emsp; &emsp; &emsp; ).<br />
                 a) it; b) they; c) them
              </li>
              <li>
                 Those men are tourists. They’re ( &emsp; &emsp; &emsp; ) England.<br />
                 a) for; b) from; c) of
              </li>
            </ol>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</p>


    </div>


  </v-layout>
</v-container>
</v-layout>
</v-container>
</div>



</template>



<script>
export default {

  props: ['fontSize'],

  data(){

    return{


    }

  },


  beforeMount(){


  },

  methods:{


  },

  watch:{

    fontSize(current, old){

      console.log(current, 'current')
      console.log(old, 'previous')


    }
  }
}
</script>

<style scoped lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

}

li{


}

body{

  font-size: 16px;
}

.border:before {
  content: "";
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 40px 40px 0px 0px;
  transform: rotate(180deg);
  border-color: transparent #8F6154 transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #8F6154;
  padding-left: 10px;

}
.profile {
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  padding-top : 330px;
  padding-left : 10px;
  padding-bottom: 10px;
}


</style>
