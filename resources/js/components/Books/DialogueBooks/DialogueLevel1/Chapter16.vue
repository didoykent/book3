<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/partners-handshaking_1098-14306.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgba(13, 20, 12, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Address; age; numbers
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #8F6154; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">What’s your name, Miss? – My name’s Lena Kim.</li>
      <li style="list-style-type: none;">Is Kim your surname or your first name? – It’s my surname.</li>
      <li style="list-style-type: none;">How old are you? – I’m nineteen.</li>
      <li style="list-style-type: none;">What’s your address? – It’s 25 Maple Street, Los Angeles, California.</li>
      <li style="list-style-type: none;">Are you American? – No, I’m not. I’m originally from South Korea.</li>
      <li style="list-style-type: none;">What’s your phone number? – It’s 801-5225.</li>
      <li style="list-style-type: none;">Is your home far from here? – Not very far. It’s only fifteen minutes by bus.</li>
      <li style="list-style-type: none;">This is your brother, right? How old is he? – He’s twelve years old.</li>
      <li style="list-style-type: none;">Eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty</li>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #8F6154; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #8F6154;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          <u>빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요.</u>
        </p>

        <ol style="margin: 12px;">
          <li>
             Barney의 주소는 무엇입니까?<br />
             <u> &emsp; &emsp; &emsp; </u> Barney’s address?
          </li>
          <li>
            Ben은 몇살입니까?<br />
            How <u> &emsp; &emsp; &emsp; </u> &nbsp; <u> &emsp; &emsp; &emsp; </u> Ben?
          </li>
          <li>
            그는 15살입니다.<br />
            He’s <u> &emsp; &emsp; &emsp; </u>.
          </li>
        </ol>

        <p>
          Free response:<br />
          What’s your address?<br />
          What’s your phone number?
        </p>

      </div>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #8F6154; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #8F6154;">Self Study</h3>
      <div style="padding : 16px;">


          <p>
            Translation
          </p>

        <p>

          <v-container grid-list-md text-xs-left>
            <v-layout row wrap>


              <v-flex xs12>
                <v-card light color="#C2CBD1">
                  <v-card-text class="px-10">
                    <p>
                      아가씨, 당신의 이름은 무엇입니까? - 제 이름은 김례나입니다.<br />
                      Kim은 성입니까? 이름입니까? - 성입니다.<br />
                      당신은 몇살입니까? - 19살입니다.<br />
                      당신의 주소는 무엇입니까? California주, Los Angeles, Maple 25가입니다.<br />
                      당신은 미국 사람입니까? - 아니오, 저는 미국 사람이 아닙니다. 저는 원래 한국에서 왔습니다.<br />
                      당신의 전화번호는 무엇입니까? - 801-5225입니다.<br />
                      당신의 집은 여기서 멉니까? - 그렇게 멀지 않습니다. 버스로 15분만 걸립니다.<br />
                      이 분은 당신의 오빠이지요? 몇살이세요? - 12살입니다.
                    </p>
                    <p>
                      11, 12, 13, 14, 15, 16, 17, 18, 19, 20
                    </p>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

        </p>

        <p>
          Notes
        </p>

      <p>

        <v-container grid-list-md text-xs-left>
          <v-layout row wrap>


            <v-flex xs12>
              <v-card light color="#C2CBD1">
                <v-card-text class="px-10">
                  <ol style="margin: 12px;">
                    <li>
                       나이를 물을 때 : How old 동사 주어?
                    </li>
                  </ol>
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
  border-color: transparent #8F6154 transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #8F6154;
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
