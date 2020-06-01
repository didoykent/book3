<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/female-tourist-waiting-train_23-2147981863.jpg">

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
        padding-bottom: 10px;">Using the Internet (can/can’t)
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
      Sue: Stephan?<br />
      Stephan: Yeah?<br />
      Sue: Can I buy train tickets for France here in the UK?<br />
      Stephan: Yeah. You can book on the Internet.<br />
      Sue: Right.<br />
      Stephan: At SNCF dot com.<br />
      Sue: SNCF-that’s the French train company?<br />
      Stephan: Yeah. Do you need to book a ticket?<br />
      Sue: I’m not sure. Possibly. So is this website just in French, or is it…?<br />
      Stephan: No. you can choose English.<br />
      Sue: And can you pay by credit card?<br />
      Stephan: Yeah, and they send the tickets by mail.<br />
      Sue: To your home address?<br />
      Stephan: Yeah.<br />
      Sue: You can’t receive tickets if you live in the UK, though…<br />
      Stephan: Yes, you can. they send tickets to different countries.<br />
      Sue: Oh, right. So SNCF dot com, then.<br />
      Stephan: That’s right<br />
      Sue: OK, thanks.<br />
      Stephan: No problem. If you have any questions, just give me a call…
    </p>


    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Exercise</h3>
    <div style="padding : 16px;">

      <p>Put the words in order. Make sentences.</p>

      <ol style="margin: 12px;">
        <li>
          buy/  products/ where/ I/ can/ the? ( &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          the/ can’t/ read/ I/ file. ( &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          internet/ on/ buy/ can/ books/ where/ we/ the? ( &emsp; &emsp; &emsp; &emsp; )
        </li>
      </ol>

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
                    Can<br />
                    긍정문 주어+Can ~<br />
                    부정문 Can’t ~<br />
                    의문형 Can+주어  ~
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
