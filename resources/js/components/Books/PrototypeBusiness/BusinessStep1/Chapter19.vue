<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/female-worker-consulting-client-phone_1163-3977.jpg">

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
        padding-bottom: 10px;">Arranging to meet (Prepositions with times and dates)
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
    <p>
      A: So, we need to have a meeting about this new project.<br />
      B: Yeah.<br />
      A: When can we meet? I'm free at the end of January.<br />
      B: The end of January? Um...yeah.<br />
      A: What about the twenty-eighth?<br />
      B: Um... Yes, I can make it on the twenty-eighth.<br />
      A: OK. The twenty-eighth of January, then.
    </p>
  </li>
  <li>
    <p>
      A: I'm free in February. Can we visit the factory then?<br />
      B: I'm busy at the beginning of February. What about the last week in February?<br />
      A: Yeah.<br />
      B: Monday the twenty-second?<br />
      A: Yes, that's fine
    </p>
  </li>
  <li>
    <p>
      A: We need to arrange a date for the meeting.<br />
      B: Yes. Um...<br />
      A: Can you make it on the fifth of April?<br />
      B: Yes. I'm free on the fifith. What time?<br />
      A: In the morning?<br />
      B: Yeah<br />
      A: At nine o'clock?<br />
      B: OK. Yes, That's fine.<br />
      A: OK. So, the fifth of April at nine am.
    </p>
  </li>
</ol>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          Write the dates as words.
        </p>
        <ol style="margin: 12px;">
          <li>
             10.05 ( &emsp; &emsp; &emsp; &emsp; )
          </li>
          <li>
             14.07 ( &emsp; &emsp; &emsp; &emsp; )
          </li>
        </ol>
        <p>
          Fill in the gaps with in,on,at
        </p>
        <ol style="margin: 12px;">
          <li>
            I can make it ( &emsp; ) the fifteenth.
          </li>
          <li>
            Can we meet ( &emsp; ) the beginning of the month?
          </li>
          <li>
            I’m going to the Toronto office the last week ( &emsp; ) March.
          </li>
        </ol>
        <p>
          Free response:<br />
          Arrange a date and time. You are busy on the highlighted dates.
        </p>
        <p>
          Are you free/busy…?<br />
          Can you make it…?
        </p>

        <v-container grid-list-md text-xs-center>
          <v-layout wrap align-content-center>

            <v-flex xs10 md4 >
              <v-card hover>

                <v-img src="images/calendar.jpg" />

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
                    On :Tuesday, July9th(dates)<br />
                    In: March(months), summer(seasons), the middle of…, the morning/afternoon/evening<br />
                    At: ten o’clock(times), the beginning, end of night, the weekend, Christmas
                    </p>
                    <p>
                      May 11th: May the eleventh<br />
                      11th May: The eleventh of May
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
