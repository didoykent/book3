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
        padding-bottom: 10px;">Giving an update (Past simple:regular verbs)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #899857; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border" >Today's topic</h3>
  <div style = "padding : 16px;">

    <p>
      Hanna: Martin, are you free for five minutes? Can we talk about your trip to Mexico?<br />
      Martin: Yeah, sure.<br />
      Hanna: So, how was it?<br />
      Martin: It was OK.<br />
      Hanna: When did you arrive?<br />
      Martin: Last Tuesday. Tuesday evening. I stayed Tuesday night, worked all day Wednesday and then travelled back
      Wednesday evening.<br />
      Hanna: Right. So where did you stay? What hotel were you in?<br />
      Martin: The Socorro Hotel. Near the office.<br />
      Hanna: Oh, yeah. It's good there.<br />
      Martin: Yeah. Um... Yes, so I presented the business plan on Wednesday morning.<br />
      Hanna: Right. Was Pedro happy?<br />
      Martin: Well... I wasn't sure at first. He didn't talk a lot after the presentation. We started at nine. I talked about the plan for
      thirty minutes, and ...that was it. There were no questions. We finished at half past nine.<br />
      Hanna: Oh.<br />
      Martin: Hmm... I think he wanted to look at the numbers in the report.<br />
      Hanna: Hmm.<br />
      Martin: He needed time to read it. Anyway, he phoned yesterday, with one or two questions. Just small points. And, er...
      he's happy. No problems.<br />
      Hanna: OK. That's fine, then. And did you talk about the cost of materials?<br />
      Martin: Yes. I talked to Miguel after the meeting. We discussed suppliers, as well, um... He's now talking to two new
      companies. I received an email this morning, saying he has a meeting with one company today, and
      one next Friday. So...<br />
      Hanna: OK. That's good. And did you visit the factory?<br />
      Martin: No. There was no time. So I didn't look at the new production line.<br />
      Hanna: Well, you're going again next month.<br />
      Martin: Yeah, that's right. I can see it then.<br />
      Hanna: OK. So, a good trip, then?<br />
      Martin: Yeah. So, how was your trip to Delhi?
    </p>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Exercise</h3>
    <div style="padding : 16px;">

      <p>
        Make sentences in the past simple.
      </p>

      <ol style="margin: 12px;">
        <li>
          he/present/sales report/last Friday.<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          we/not discuss/prices/yesterday.<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          she/phone Gavin/last week?<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          they/email you/yesterday?<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          she/talk to Sally/yesterday.<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
      </ol>

      <p>
        Free response:<br />
        Talk to a partner. When did you last:<br />
        - work late?<br />
        - stay in a hotel?<br />
        - use a fax machine?<br />
        - travel by train?<br />
        - visit a client?<br />
        - travel abroad?
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
                    Past simple: regular verbs
                  </p>
                  <p>
                    긍정문(infinitive + -ed)<br />
                    I presented the business plan last week.<br />
                    의문문(did + subject + infinitive)<br />
                    Did you receive my email yesterday?<br />
                    부정문(didn't + infinitive)<br />
                    I didn't talk to Jenny
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
