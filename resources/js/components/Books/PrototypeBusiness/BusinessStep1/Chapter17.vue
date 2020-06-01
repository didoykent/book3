<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/pXoRM/MADyQ8pXoRM/1/s2/canva-two-men-talking-on-focus-photography-MADyQ8pXoRM.jpg">

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
        padding-bottom: 10px;">Saying what you’re doing at the moment (present continuous)
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
      <p>
        <li>
          A: Hello. Is Steve there, please?<br />
          B: No, he’s having lunch at the moment.<br />
          A: OK, no problem. I can call back later.<br />
        </li>
      </p>
      <p>
        <li>
          A: Hello.<br />
          B: Hello, Olivia. It’s Rick.<br />
          A: Hi, Rick. Can I phone you later? I’m driving.<br />
          B: Yes, OK.
        </li>
      </p>
      <p>
        <li>
          A: Could I speak to Colin, please?<br />
          B: He’s having a meeting this morning.<br />
          A: Oh, right.
        </li>
      </p>
      <p>
        <li>
          A: Hi, it’s Mitch. Is Nadia there?<br />
          B: No. she’s not here, Mitch. She’s visiting a customer this week in Australia.<br />
          A: Australia!<br />
          B: Yeah.
        </li>
      </p>
    </ol>


    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Exercise</h3>
    <div style="padding : 16px;">

      <p>Make sentences. Use the present continuous.</p>

      <ol style="margin: 12px;">
        <li>
          he/ have/ coffee at the moment. ( &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          you/ leave/ now? ( &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          i/ not/ read/ the report now. ( &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          they/ not/ have/ a meeting this morning. ( &emsp; &emsp; &emsp; &emsp; )
        </li>
      </ol>
      <p>
        Free response:<br />
        What are you working on at the moment?
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
                    긍정문: I’m working on the report now.<br />
                    부정문: He isn’t making a phone call.<br />
                    의문형: What are you doing? / Are they working on the project?
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
