<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGyfUCSlo/4/screen_2x/canva-brown-concrete-india-gate-MADGyfUCSlo.jpg">

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
        padding-bottom: 10px;">Talking about past events (be: past simple, how many...?)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #899857; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border" >Today's topic</h3>
  <div style = "padding : 16px;">

    <p>
      Colleague: Were you at the trade fair last week, Hanna? In India?<br />
      Hanna:      Yes.<br />
      Colleague: Where was it? Delhi?<br />
      Hanna:      Yeah.<br />
      Colleague: How was it? OK?<br />
      Hanna:      It was very good, yeah.<br />
      Colleague: Was it big?<br />
      Hanna:      Yeah. There were thousands of people.<br />
      Colleague: How many companies were there?<br />
      Hanna:      Um... about four hundred, I think.<br />
      Colleague: Really?<br />
      Hanna:      Yeah, it was big. I was surprised.  I wasn't there last year. I was there two years ago, in Calcutta, and um...
      there weren't a lot of companies there. Only about a hundred.<br />
      Colleague: So this wasn't your first visit to India, then?<br />
      Hanna:      No, my second.<br />
      Colleague: Right. Were you the only person there, from the company?<br />
      Hanna:      No. Ingrid Werner was there, from the Frankfurt office. And Rafael and Maria, you know from, um...<br />
      Colleague: Oh, from Barcelona? <br />
      Hanna:      Yeah.<br />
      Colleague: Were you all in the same hotel?<br />
      Hanna:      We weren't in the same hotel, no. Um... But it was a good trip. Long, though.
    </p>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Exercise</h3>
    <div style="padding : 16px;">

      <p>
        Fill the gaps with was, wasn't were or weren't
      </p>

      <ol style="margin: 12px;">
        <li>
          A: Where ( &emsp; ) you yesterday?<br />
          B: We ( &emsp; ) in a meeting.
        </li>
        <li>
          A: ( &emsp; ) Julia at the trade fair last year?<br />
          B: No, she ( &emsp; ) there.
        </li>
      </ol>

      <p>
        Fill in the gaps.<br />
        ago, last, yesterday, night
      </p>
      <ol style="margin: 12px;">
        <li>
          He was in New York ten days ( &emsp; ).
        </li>
        <li>
          HToday is Monday so, ( &emsp; ) was Sunday.
        </li>
        <li>
          There was a problem at the factory last ( &emsp; ).
        </li>
        <li>
          I was in Australia ( &emsp; ) month.
        </li>
      </ol>
      <p>
        Free response:<br />
        Work with a partner. Talk about where you were:<br />
        - yesterday evening<br />
        - last Saturday<br />
        - a week ago
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
                    be: past simple
                  </p>
                  <p>
                    긍정문: The conference was good last week.<br />
                    의문문: Was John there?<br />
                    부정문: The presentation wasn't very good.
                  </p>
                  <p>
                    Time references to the past
                  </p>
                  <p>
                    <b>last</b> + (Tuesday, March, week, month, year, summer, Christmas)<br />
                    (two days, three months, a year)+ <b>ago</b>
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
