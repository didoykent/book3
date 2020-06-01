<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/female-financial-adviser-explaining-business-plan_1163-5352.jpg">

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
        padding-bottom: 10px;">Talking about your job (Present simple: positive and questions)
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
      A: So, you’re here on business?<br />
      B: Yeah. I work for a consulting company. Santia Partners.<br />
      A: And what do you do?<br />
      B: I’m an accountant.<br />
      A: Right.<br />
      B: I work at the office in Mexico City.<br />
      A: OK. So is it an international company, Santia?
    </p>
    <p>
      B: So. What company do you work for?<br />
      A: Irex Chemicals. I’m an engineer.<br />
      B: OK. And where do you work?<br />
      A: In a factory in Boston.<br />
      B: Right. And do you live in Boston?<br />
      A: Yes. I live near the coast, not far from…
    </p>


      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Exercise</h3>
      <div style="padding : 16px;">

        <h3>Make questions for these answer.</h3>

        <ol style="margin: 12px;">
          <li>
             ( &emsp; &emsp; &emsp; &emsp; )? Seoul.
          </li>
          <li>
             ( &emsp; &emsp; &emsp; &emsp; )? ICR Chemicals.
          </li>
          <li>
             ( &emsp; &emsp; &emsp; &emsp; )? In the head office, in Seoul.
          </li>
          <li>
             ( &emsp; &emsp; &emsp; &emsp; )? I’m a sales manager.
          </li>
        </ol>

        <p>
          Free response:<br />
          What do you do?<br />
          What company do you work for?<br />
          Where do you work?<br />
          Where do you live?
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
                      현재형<br />
                      긍정문 I live in London. I work for BDA.<br />
                      의문문 Where do you work? Do you live in Paris?
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
