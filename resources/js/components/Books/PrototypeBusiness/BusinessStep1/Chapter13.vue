<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGv4SUQ4g/6/screen_2x/canva-group-oo-people-having-a-meeting--MADGv4SUQ4g.jpg">

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
        padding-bottom: 10px;">Asking about business facilities (there is/are need(to))
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
      Customer: So, there are meeting rooms at the hotel.<br />
      Receptionist: Yes, we have a business center with four rooms.<br />
      Customer: Right. So for a meeting with three people, um…<br />
      Receptionist: Oh yes, that’s no problem. There are six chairs in each room, so…<br />
      Customer: OK. That’s fine, then.<br />
      Receptionist: Then in reception there’s a photocopier, if you need to make copies.<br />
      Customer: Right.<br />
      Receptionist: There’s a fax machine, um… a drinks machine… Do you need a telephone?<br />
      Customer: Er, no.<br />
      Receptionist: OK. It’s just we don’t have phones in the rooms. Most people have mobiles, so…<br />
      Customer: Of course, yeah. No, that’s no problem.
      Er…Just a question about computers. Um…<br />
      Receptionist: We don’t have computers, I’m afraid.<br />
      Customer: No,no,that’s OK. It’s just I have a laptop. Um…<br />
      Receptionist: Oh, I see.<br />
      Customer: Are there power sockets?<br />
      Receptionist: Yes.<br />
      Customer: Great. And is there a phone socket, for an Internet connection? So I can send emails.<br />
      Receptionist: Um… We don’t have phone sockets in the meeting rooms, so…no. Um…<br />
      Customer: Well, no. It’s not a problem. I can connect to the phone socket in the bedroom.<br />
      Receptionist: Oh, yes. The bedrooms all have phones, so…<br />
      Customer: OK. That’s fine then. Um…OK, so can I book…
    </p>


    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Exercise</h3>
    <div style="padding : 16px;">

      <p>Fill in the gaps.</p>

      <ol style="margin: 12px;">
        <li>
          There ( &emsp; &emsp; ) meeting rooms.
        </li>
        <li>
          There ( &emsp; &emsp; ) a photocopier.
        </li>
        <li>
          ( &emsp; &emsp; ) there power sockets?
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
                    There is/are
                  </p>
                  <p>
                    단수: There is…<br />
                    복수: There are…<br />
                    의문문: Is there…? Are there…?<br />
                    부정문: There isn’t/aren’t…
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
