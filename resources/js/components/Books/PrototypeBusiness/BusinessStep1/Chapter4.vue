<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGxiSRgAI/4/screen_2x/canva-smart-phone-stock-photos-MADGxiSRgAI.jpg">

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
        padding-bottom: 10px;">Telephone numbers and email addresses (what’s…?- It’s…, my and your)
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

    <ol style="margin: 12px;">
      <li>
         A: What’s your number?<br />
         B: My phone number?<br />
         A: Yes
      </li>
      <li>
         A: My Phone number’s two one two…<br />
         B: Sorry?<br />
         A: Two one two…
      </li>
      <li>
        A: Five eight?<br />
        B: No. nine eight.<br />
        A: Right.
      </li>
      <li>
        A: So, two one two, six three seven, four eight five nine<br />
        B: That’s right.
      </li>
      <li>
        A: What’s your email address?<br />
        B: My email address is abc_de@fgh.com
      </li>
    </ol>







    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Exercise</h3>
    <div style="padding : 16px;">

      <v-container>
        <v-layout wrap justify-space-around align-space-around fill-height>

            <div>
            <p>
              This is your business card. Fill in the gaps.
            </p>
            <p>
              The telephone number’s ( &emsp; &emsp; &emsp; &emsp; )<br />
              The mobile phone number’s ( &emsp; &emsp; &emsp; &emsp; )<br />
              The fax number’s ( &emsp; &emsp; &emsp; &emsp; ) <br />
              Free response: <br />
              What’s your phone/fax/mobile phone number? <br />
              What’s your email address?
            </p>
            </div>

          <v-flex xs8 md3>
            <v-card hover>
              <v-img src="images/businesscard.jpg" />
            </v-card>
          </v-flex>

        </v-layout>
      </v-container>

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
                    O(zero/oh), 1(one), 2,(two) 3(three), 4(four), 5(five), 6(six), 7(seven), 8(eight), 9(nine), 10(ten)
                  </p>
                  <p>
                    Email address<br />
                    . (dot),  - (dash),  _(underscore),  @(at)
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
