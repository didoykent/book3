<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGxqzFFmw/4/screen_2x/canva-black-and-gray-digital-device-MADGxqzFFmw.jpg">

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

    <ol style="margin: 12px;">
      <li>
        <p>
          A: Is this your book or Jan’s?<br />
          B: It’s Jan’s<br />
          A: Is it his book or your book?<br />
          B: It’s his book.<br />
          A: Is this your pen or Laura’s?<br />
          B: It’s my pen.<br />
          <br />
          A: What’s Tony’s email address?<br />
          B: His email is abd_12@fff.com
        </p>
      </li>
      <li>
        <p>
          To: all managers and assistants<br />
          From: Susanne Flore-Training Manager-CC Software International (Geneva)<br />
          Subject: English training course
        </p>
        <hr />
        <p>
          Do you send and receive emails in English?<br />
          Do you read and write reports in English?<br />
          'Write English' is a training course for CC Software's managers and their assistants.<br />
          The course is at our head office in Geneva.<br />
          <br />
          Best regards,<br />
          <br />
          Susan Flore<br />
          Training Manager-CC Software International s.flore@cc-s.ch<br />
          Tel: +41 2290887250, extension 165
        </p>
      </li>
      <li>
        <p>
          To: Susanne Flore<br />
          From: Mario Toro<br />
          Subject: English training course
        </p>
        <hr />
        <p>
          Dear Ms Flore,<br />
          Two people from CC Software Italy would like to go to the 'Write English' training course.<br />
          They are Silvia Lardi, an assistant at our office in Milan, and Antonio Amato, the manager of the Rome office.<br />
          <br />
          Best regards,<br />
          <br />
          Mario Toro<br />
          Human Resources Manager-CC Software Italy m.toro@cc-s.it<br />
          Tel: +39 02449690791, extension 22
        </p>
      </li>
    </ol>


    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Exercise</h3>
    <div style="padding : 16px;">

      <p>Fill in the gaps.</p>

      <ol style="margin: 12px;">
        <li>
          yTom works here. This is  ( &emsp; )  office. (he)
        </li>
        <li>
          Where do you work? Where’s ( &emsp; ) office. (you)
        </li>
        <li>
          He’s the manager ( &emsp; ) the Rome office.
        </li>
      </ol>

      <p>
        Free response:<br />
        Do you send and receive emails in English?<br />
        Do you read and write reports in English?
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
                    Do you read and write reports in English?<br />
                    <font color="blue">I</font> => <font color="red">my</font> , <font color="blue">you</font> => <font color="red">your</font> ,
                    <font color="blue">she</font> => <font color="red">her</font> , <font color="blue">he</font> => <font color="red">his</font> ,
                    <font color="blue">it</font> => <font color="red">its</font><br />

                    <font color="blue">we</font> => <font color="red">our</font> , <font color="blue">you</font> => <font color="red">your</font> ,
                    <font color="blue">they</font> => <font color="red">their</font>
                  </p>
                  <p>
                    소유 ’S and of<br />
                    Where’s Andrew’s office?<br />
                    He’s the manager <b>of</b> the Rome office.
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
