<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGv7uLs2Y/6/screen_2x/canva-people-at-la-poma-store-front-at-night-MADGv7uLs2Y.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgba(72, 87, 125, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Buying food (How much…?)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #43464C; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

    <p>
      <h3>Dialogue</h3>
    </p>

          <p>
            A: Could I have a burger, please?<br />
            B: Anything else?<br />
            A: Um. Yes, and a tea, please.<br />
            B: That’s four euros sixty-five, please.<br />
            A: Four sixty-five.<br />
            B: Thanks<br />
          </p>
          <p>
            A: Two hotdogs, please.<br />
            B: Two?<br />
            A: Yes, please. And two coffees. How much is that?<br />
            B: Um… eight seventy.<br />
            A: OK, eight dollars seventy.
          </p>
          <p>
            A: Two tuna sandwiches, please. And a cheese sandwich.<br />
            B: Anything else?<br />
            A: No. thanks.<br />
            B: OK. That’s seven pounds eighty.
          </p>


    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Exercise</h3>
    <div style="padding : 16px;">

      <h3>MPractise buying snacks and drinks in a café.</h3>

      <p>
        A: Could I have ( &emsp; &emsp; ), please<br />
        B: Anything else?<br />
        A: No, thanks./ Yes, ( &emsp; &emsp; )<br />
        B: €( &emsp; &emsp; ), please.
      </p>

      <v-container grid-list-md text-xs-center>
        <v-layout wrap align-content-center>

          <v-flex xs12 md6 >
            <v-card hover>

              <v-img src="images/snacksdrinks.jpg" />

            </v-card>
          </v-flex>

        </v-layout>
      </v-container>

<p>
  Free response:<br />
  What’s the currency in your country? How do you say it in English?<br />
  How much is a Big Mac in your country?
</p>

    </div>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Self Study</h3>
    <div style="padding : 16px;">


      <p>
        Notes
      </p>

      <p>

        <v-container grid-list-md text-xs-left>
          <v-layout row wrap>


            <v-flex xs12>
              <v-card light color="#9197A6">
                <v-card-text class="px-10">
                  <p>
                    복수<br />
                    A sandwich > Two sandwich<b>es</b><br />
                    A coffee > Three coffee<b>s</b>
                  </p>
                  <p>
                    <b>$=dollar €=euro ￥=yen ￡=pound$=dollar €=euro ￥=yen ￡=pound</b>
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>

      </p>

    </div>


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
  border-color: transparent #43464C transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #43464C;
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
