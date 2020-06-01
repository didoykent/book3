<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/aMskc/MADyRQaMskc/1/s2/canva-people-eating-pizza-MADyRQaMskc.jpg">

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
        padding-bottom: 10px;">Discussing future arrangements (Present continuous: future arrangements Who..? Why…?)
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
  Lilly:  When are you going to Europe, Gary? Next week?<br />
  Gary: Yes. I’m leaving Los Angeles on Monday.<br />
  Lilly:  Where are you going? To the London office?<br />
  Gary: Yes.<br />
  Lilly:  Uhuh. Who are you meeting? Tanya Dolan again?<br />
  Gary: Yes. I’m working with Tanya onTuesday. Then I’m meeting Sue Redman and
        James Barker on Wednesday, then I’m going to Paris.<br />
  Lilly:  Really? Why are you going to Paris? On business?<br />
  Gary: No. I’m talking a break. I’m having two days off.<br />
  Lilly:  Great. Good idea. So, how are you travelling to Paris? Are you driving?<br />
  Gary: No. I’m talking the train-the Eurostar.<br />
  Lilly:  Oh, right.<br />
  Gary: Then I’m staying in Paris for three nights.<br />
  Lilly:  Great. So are you flying back to LA from Paris? Or…<br />
  Gary: No. I’m coming back to London on the train. Then I’m flying home on Saturday afternoon.<br />
  Lilly:  OK.<br />
  Gary: I’m arriving in LA in the middle of the night. Just after midnight.<br />
  Lilly:  Mmm. So, is it just one flight between LA and London?<br />
  Gary: No. I’m not flying direct. I’m going LA, New York, London. Then, on the flight home, I’m changing in Chicago.
</p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          Fill in the gaps.<br />
          Who / Why/ How/arriving/ flying / staying
        </p>
        <ol style="margin: 12px;">
          <li>
             ( &emsp; &emsp; &emsp; &emsp; ) are you going to Paris? On business?
          </li>
          <li>
             ( &emsp; &emsp; &emsp; &emsp; ) are you meeting? Tanya Dolan again?
          </li>
          <li>
             ( &emsp; &emsp; &emsp; &emsp; ) are you travelling to Paris? Are you driving?
          </li>
          <li>
             When are you ( &emsp; &emsp; &emsp; &emsp; ) in London? At 20.30.
          </li>
          <li>
             Are you ( &emsp; &emsp; &emsp; &emsp; ) to Barcelone? Yes, with Lufthansa.
          </li>
          <li>
             Where are you ( &emsp; &emsp; &emsp; &emsp; ) in Avignon? At the hotel ibis.
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
                      현재진행형:<br />
                      I’m flying to London on Monday.<br />
                      She’s meeting a colleague this afternoon.
                    </p>
                    <p>
                      Who..? Why?:<br />
                      Who are you working with? I’m working with John.<br />
                      Why are you going to Hamburg? I’m going to a meeting.
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
