<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGx7HePZE/4/screen_2x/canva-train-station-MADGx7HePZE.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgba(254, 183, 43, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Buying train tickets (would like to , want to)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #899857; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border" >Today's topic</h3>
  <div style = "padding : 16px;">

   <p>
      <li style="list-style-type: none;">Assistant: Hello.</li>
      <li style="list-style-type: none;">Gary:       Hi. I'd like to book two seats to Paris, please. For tomorrow.</li>
      <li style="list-style-type: none;">Assistant: At what time?</li>
      <li style="list-style-type: none;">Gary:       At about 5.00 pm. I don't have a timetable.</li>
      <li style="list-style-type: none;">Assistant: There's a train at 17.15. It arrives in Paris at 20.55, local time.</li>
      <li style="list-style-type: none;">Gary:       Right. OK, that's fine.</li>
      <li style="list-style-type: none;">Assistant: Would you like to travel first class or standard class?</li>
      <li style="list-style-type: none;">Gary:       Standard.</li>
      <li style="list-style-type: none;">Assistant: And would you like a single or a return ticket?</li>
      <li style="list-style-type: none;">Gary:       A round-trip, please.</li>
      <li style="list-style-type: none;">Assistant: When would you like to come back?</li>
      <li style="list-style-type: none;">Gary:       I want to return on Saturday, but I don't know what time.</li>
      <li style="list-style-type: none;">Assistant: Do you want to book the return trip now?</li>
      <li style="list-style-type: none;">Gary:       If I reserve a seat, Can I change the reservation?</li>
      <li style="list-style-type: none;">Assistant: With a standard fare, you can change or cancel the booking, yes.</li>
      <li style="list-style-type: none;">Gary:       OK. How much is the standard fare, then?</li>
      <li style="list-style-type: none;">Assistant: One moment.</li>
   </p>






      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          Complete the questions to match the answers.
        </p>

        <ol style="margin: 12px;">
          <li>
            A: ( &emsp; &emsp; ) would you like to go?<br />
            B: I'd like to go to Milan.
          </li>
          <li>
             A: ( &emsp; &emsp; ) do you want to pay?<br />
             B: I want to pay by credit card.
          </li>
          <li>
            A: ( &emsp; &emsp; ) you like a single or a return?<br />
            B: I'd like a single, please.
          </li>
          <li>
             A: ( &emsp; &emsp; ) do you want to come back?<br />
             B: I want to come back on Monday.
          </li>
          <li>
             A: ( &emsp; &emsp; ) you like to book a seat now?<br />
             B: Yes, I'd like to book a seat now.
          </li>
          <li>
             A: ( &emsp; &emsp; ) you want to travel second class?<br />
             B: No, I want to travel first class, please.
          </li>
        </ol>

        <p>
          Free response:<br />
          How often do you travel by train?<br />
          Do you like train travel?<br />
          Do you usually reserve a seat?
        </p>

      </div>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Self Study</h3>
      <div style="padding : 16px;">


          <p>
            Notes
          </p>

        <p>

          <v-container grid-list-md text-xs-left>
            <v-layout row wrap>


              <v-flex xs12>
                <v-card light color="#527318">
                  <v-card-text class="px-10">
                    <p>
                      want to + 부정사 / would like to + 부정사
                    </p>
                    <p>
                      I'd like to book a seat.<br />
                      I want to book a seat.
                    </p>
                    <p>
                      When would you like to leave?<br />
                      When do you want to leave?
                    </p>
                    <p>
                      When do you want to leave?
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
  border-color: transparent #899857 transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #899857;
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
