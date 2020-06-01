<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/picture-young-guy-talking-smartmobile-while-looking-his-watch-being-late_171337-5224.jpg">

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
        padding-bottom: 10px;">Talking about daily routines (Present simple: negative)
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
      A: Good morning.<br />
      B: Morning. Sorry I’m late.<br />
      A: Oh, you’re not late. It’s only five past eight.<br />
      B: Five minutes late.<br />
      A: No problem. Would you like a coffee?<br />
      B: Oh, yes please. Five past eight. It isn’t late for me, it’s early!<br />
      A: What time do you start work then?<br />
      B: Nine o’clock. I’m not a morning person!<br />
      A: We start at seven thirty.<br />
      B: Seven thirty!<br />
      A: But we don’t work late… We aren’t evening people!<br />
      B: My boss isn’t a morning person or an evening person! He starts at nine and finishes at four… But he doesn’t have lunch.<br />
      Right. He doesn’t have time!<br />
      B: No!
    </p>


      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Exercise</h3>
      <div style="padding : 16px;">

        <p>doesn’t / don’t / isn’t / aren’t / not / isn’t</p>

        <ol style="margin: 12px;">
          <li>
             It ( &emsp; ) late.
          </li>
          <li>
             I’m ( &emsp; ) a morning person.
          </li>
          <li>
             We ( &emsp; ) work late.
          </li>
          <li>
             We ( &emsp; ) evening people.
          </li>
          <li>
             My boss ( &emsp; &emsp; ) a morning person.
          </li>
          <li>
             He ( &emsp; &emsp; ) have lunch.
          </li>
        </ol>

        <p>
          Free response:<br />
          What time do you start work? Do you start early?<br />
          What time do you have lunch?<br />
          Do you have coffee breaks?<br />
          What time do you finish work? Do you work late?<br />
          What time do you have dinner?
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
                      부정문<br />
                      be동사: I’m not…, You aren’t…, He isn’t…<br />\
                      일반동사: They don’t work…, She doesn’t start….
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
