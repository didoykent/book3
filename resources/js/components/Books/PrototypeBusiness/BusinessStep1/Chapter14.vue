<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADQ5BHZWrk/1/screen/canva-brunette-woman-on-white-background-MADQ5BHZWrk.jpg">

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
        padding-bottom: 10px;">Asking for and giving directions. (Imperative)
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
          A: Excuse me, where’s the exit?<br />
          B: The exit?<br />
          A: Yeah.<br />
          B: It’s just over there. Go to the end of the corridor, then turn left…
        </p>
      </li>
      <li>
        <p>
          A: Are there toilets on this floor?<br />
          B: Yes. They’re in the corridor. If you go out of the office, through…
        </p>
      </li>
      <li>
        <p>
          A: Is there a lift?<br />
          B: Sorry?<br />
          A: Is there a lift?<br />
          B: Yes, there is. It’s just past the stairs.
        </p>
      </li>
      <li>
        <p>
          A: Are you lost?<br />
          B: Um… yes. Where are the stairs?<br />
          A: Well, they’re just through the doors. If you go through those…
        </p>
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
              Look at the office plan. Can you match the questions and answers?
            </p>
            <ol style="margin: 12px;">
              <li>
                Excuse me. Where’s the lift? ( &emsp; )
              </li>
              <li>
                Excuse me. Where are the stairs? ( &emsp; )
              </li>
              <li>
                Where’s the computer room? ( &emsp; )
              </li>
              <li>
                Where’s the drinks machine? ( &emsp; )
              </li>
              <li>
                Where are the toilets, please? ( &emsp; )
              </li>
            </ol>
            <ol style="margin: 12px;" type = "a">
              <li>
                On the right, just after the lift.
              </li>
              <li>
                It’s over there. The first door on the right.
              </li>
              <li>
                It’s just past the stairs. The third door on the right.
              </li>
              <li>
                Go through the doors at the end, and they’re on the right.
              </li>
              <li>
                Go to the end of the corrodor, through the doors, and turn left.
              </li>
            </ol>
            <p>
              Free response:<br />
              Talk about your office.<br />
              The office building has… floors. Our office is on the … floor.<br />
              The entrance is on the … floor.<br />
              There’s a/ there are … lift(s)
            </p>
          </div>

          <v-flex xs10 md5>
            <v-card hover>
              <v-img src="images/officeplan.jpg" />
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
                    명령문
                    <b>Go</b> through the doors. <b>Turn</b> right.
                  </p>
                  <p>
                    수<br />
                    1<sup>st</sup> &emsp;&emsp;&ensp; 2<sup>nd</sup> &emsp;&ensp; &ensp; 3<sup>rd</sup> &emsp;&ensp;&ensp; 4<sup>th</sup>
                    &emsp;&ensp; &ensp; 5<sup>th</sup> &emsp;&ensp; 6<sup>th</sup> &emsp;&emsp;&ensp;
                    7<sup>th</sup> &emsp;&emsp;&emsp;  8<sup>th</sup> &emsp;&emsp;&ensp; 9<sup>th</sup> &emsp;&ensp; 10<sup>th</sup>
                    &emsp;&emsp;&ensp; 11<sup>th</sup> &emsp;&emsp;&ensp; 12<sup>th</sup><br />
                    first &emsp; second &emsp; third &emsp; fourth &emsp; fifth &emsp; sixth &emsp; seventh &emsp; eighth &emsp;
                    ninth &emsp; tenth &emsp; eleventh &emsp; twelfth
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
