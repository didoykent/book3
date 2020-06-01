<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADQ5Pc4eDs/1/screen_2x/canva-untitled-MADQ5Pc4eDs.jpg">

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
        padding-bottom: 10px;">Coping with difficult language (Could…? How…?)
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
      A: My name’s Linda Sammerson. And I’m from Hughes Insurance.<br />
      B: Sorry? Could you say that again?<br />
      A: Linda Sammerson. S-A double M-E-R-S-O-N.<br />
      B: Could you speak more slowly, please?<br />
      A: Sorry. S-A double M-E-R-S-O-N.<br />
      B: S-A double M-E-R-S-O-N<br />
      A: That’s right. And I’m from Hughes Insurance.<br />
      B: Hughes? Could you spell that, please?<br />
      A: H-U-G-H-E-S.<br />
      B: H-U-G-H-E-S.<br />
      A: That’s right.<br />
      B: OK. Well, thanks very much for your call. I’ll check..
    </p>


      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Exercise</h3>
      <div style="padding : 16px;">

        <p>Put the workd in order. Make sentences.</p>

        <ol style="margin: 12px;">
          <li>
              you/ could/ that/ say/ again? ( &emsp; &emsp; &emsp; &emsp; )
          </li>
          <li>
              spell/ you/ that/ could? ( &emsp; &emsp; &emsp; &emsp; )
          </li>
          <li>
              repeat/ your/ you/ could/ please/ name? ( &emsp; &emsp; &emsp; &emsp; )
          </li>
          <li>
              me/ write/ could/ for/ number/ the/ you? ( &emsp; &emsp; &emsp; &emsp; )
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
                      공손한 표현 Could…?<br />
                      Could you spell that, please?
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
