<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADQ5KOtx9I/1/screen_2x/canva-a-man-at-work-MADQ5KOtx9I.jpg">

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
        padding-bottom: 10px;">Describing a company (Present simple: positive and questions)
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
      Frank: At this factory, we make steel products. And at the other factory in Munich, they make products from aluminium.<br />
      Jane:  Right. Where does your steel come from?<br />
      Frank: Where do we buy it?<br />
      Jane:  Yeah.<br />
      Frank: From a supplier here, in Hamburg.<br />
      Jane:  Right. And does it come from Germany?<br />
      Frank: No. It comes from China. Our supplier is an importer.<br />
      Jane:  OK.<br />
      Frank: We buy about two hundred and fifty tonnes a year. So we’re only a small buyer. But… with two hundred and fifty
             tonnes of steel, We make twelve thousand products.<br />
      Jane:  Right. So you make twelve thousand products a year at this factory. Where do you sell your products?<br />
      Frank: We sell fifteen percent of them in Germany, and… the other eighty-five percent…all over the world.
             We have customers in…. twenty-two countries.<br />
      Jane:  Huh, OK.<br />
      Frank: In the UK, we sell a lot of equipment to a company in….
    </p>


      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Exercise</h3>
      <div style="padding : 16px;">

        <p><b><u>Underline</u> the correct words in the questions.</b></p>

        <ol style="margin: 12px;">
          <li>
             Where (do/does) your steel (come/comes) from?
          </li>
          <li>
             Where (do/does) we (buy/buys) it?
          </li>
          <li>
             (Do/Does) it (come/comes) from Germany?
          </li>
          <li>
             Where (do/does) you (sell/sells) your products?
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
                      현재형
                    </p>
                    <p>
                      긍정문 They <b>own</b> the company. He has Australian nationality..<br />
                      의문문 <b>Do</b> they <b>have</b> customers in China? Where <b>does</b> she <b>come</b> from?
                    </p>
                    <p>
                      250= two hundred and fifty<br />
                      12,000= twelve thousand<br />
                      50,000= fifty thousand<br />
                      2.5 million= two point five million<br />
                      3 billion= three billion
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
