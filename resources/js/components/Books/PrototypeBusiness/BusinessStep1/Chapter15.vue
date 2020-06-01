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
        padding-bottom: 10px;">Talking about your home (Adjectives quite/very)
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
      A: So, do you live near the office?<br />
      B: Yeah. My house is about… six, seven kilometers from here.<br />
      A: Oh, so you live in a house. Not an apartment.<br />
      B: Yeah. It’s quite small. Just two bedrooms.<br />
      A: Yeah.<br />
      B: But, you know, it’s near the center of town, so…<br />
      A: Yeah, that’s good. Does it have a garden?<br />
      B: Um…<br />
      A: You’re not sure!<br />
      B: There is a garden, but it’s, um.. very small. It’s about twenty-five square meters!<br />
      A: Right.<br />
      B: There’s just a bin!<br />
      A: OK.<br />
      B: It’s quite an old property, but, Um… It’s OK, you know. The problem here is property prices are crazy.<br />
      A: Expensive?<br />
      B: Oh, yeah. Very. Over the last… four, five years…
    </p>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Exercise</h3>
    <div style="padding : 16px;">

      <p>
        Make sentences. Use very or quite and the adjectives.
      </p>
      <ol style="margin: 12px;">
        <li>
          The house has nine bedrooms and three bathrooms. (big)<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          The building has six floors. (high)<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          My apartment has one bedroom and a living room. (small)<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          The corridor is 7 m. (long)<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
      </ol>
      <p>
        Free response:<br />
        Talk about property prices in your country.
      </p>
      <p>
        Are property prices high?<br />
        In what cities/regions is property expensive/cheap?<br />
        In what parts of your town/region is property expensive/cheap?
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
                  <v-container>
                    <v-layout wrap justify-space-around align-space-around fill-height>

                      <div>
                        <p>
                          Adjectives<br />
                          The apartment is big.<br />
                          It’s a big apartment.
                        </p>
                        <p>
                          Quite/very +adjective<br />
                          It’s very big.<br />
                          It’s quite big.<br />
                          It’s quite small.<br />
                          It’s very small.
                        </p>
                      </div>
                      <v-flex xs10 md5>
                        <v-card hover>
                          <v-img src="images/bigtosmall.jpg" />
                        </v-card>
                      </v-flex>

                    </v-layout>
                  </v-container>
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
