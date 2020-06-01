<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGvoQQFPQ/7/screen_2x/canva-four-people-playing-basketball-MADGvoQQFPQ.jpg">

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
        padding-bottom: 10px;">Saying what you do in your spare time (Gerund)
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
      A: So, what do you do when you’re not at work?<br />
      B: Um… I play basketball.<br />
      A: Basketball?<br />
      B: Yeah, I’m in a local team.<br />
      A: Right.<br />
      B: I do aerobics, as well. Um… What about you?<br />
      A: I go cycling sometimes.<br />
      B: Oh, I go cycling as well.<br />
      A: Right.<br />
      B: Yeah. Where do you go?<br />
      A: Er…
    </p>
    <p>
      A: So, you play football?<br />
      B: I play football, I do weight training two or three times a week, I go fishing…<br />
      A: What sort of fish do you catch?<br />
      B: Big ones! I have some photos I can show you…
    </p>
    <p>
      A: So, What do you do in your spare time?<br />
      B: Um… I play chess, um… I play the guitar.<br />
      A: Oh. Are you good?<br />
      B: At chess or the guitar? Well, actually I’m not very good at either, so…<br />
      A: Right!<br />
      B: I go running.<br />
      A: Yeah.<br />
      B: What about you?<br />
      A: Um…well…
    </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          <u>Underline</u> the correct form of the verbs.
        </p>
        <ol style="margin: 12px;">
          <li>
             I love (swim/<u>swimming</u>). I go every morning.
          </li>
          <li>
             I like (watch/watching) football, but I can’t (play/playing) very well.
          </li>
          <li>
             I hate (run/running). I much prefer (cycle/cycling).
          </li>
          <li>
             What do you like (do/doing) in your spare time?
          </li>
          <li>
             I can’t (ski/skiing) very well. It’s very difficult.
          </li>
        </ol>
        <p>
          Free response:<br />
          What do you do in your spare time?
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
                    Gerund (동명사)<br />
                    I hate walking.<br />
                    I like skiing.
                    </p>
                    <p>
                      go/play/do<br />
                      I go+noun with –ing<br />
                      I play +sports, games, musical instruments<br />
                      I do +aerobics, weight training
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
