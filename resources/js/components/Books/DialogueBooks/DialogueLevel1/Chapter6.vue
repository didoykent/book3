<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/0pDns/MAD6Et0pDns/1/s2/canva-men-talking-in-kitchen-MAD6Et0pDns.jpg">

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
        padding-bottom: 10px;">People, occupations, adjectives
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #8F6154; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Who’s that? – Her name is Nancy Paine.</li>
      <li style="list-style-type: none;">She isn’t very pretty. – No, she’s not, but she’s really kind.</li>
      <li style="list-style-type: none;">Is she a businesswoman? – Yes, she is.</li>
      <li style="list-style-type: none;">And what’s his name? – His name is Tony Romero.</li>
      <li style="list-style-type: none;">What’s his job? - He’s a police officer.</li>
      <li style="list-style-type: none;">This is Anne Jones. She’s a movie star. She’s very pretty.</li>

      <p>
        Is he a pilot? – No, he isn’t. It’s Nick. He’s a mechanic.<br />
        You’re an excellent doctor. – Thank you. You are very polite.
      </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #8F6154; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #8F6154;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          Fill the blanks. Always answer with a whole sentece.<br />
          (빈칸에 알맞은 말을 채우세요. 답은 항상 문장으로 말해주세요.)
        </p>

        <ol style="margin: 12px;">
          <li>
            저 사람은 누구입니까?<br />
            <u> &emsp; &emsp; &emsp; </u> 저 사람은 누구입니까?
          </li>
          <li>
            그의 이름은 Jack입니다.<br />
            His <u> &emsp; &emsp; &emsp; </u> Jack.
          </li>
          <li>
            그는 택시 운전사입니다.<br />
            <u> &emsp; &emsp; &emsp; </u> a taxi driver.
          </li>
        </ol>

        <p>
          Free response:<br />
          What’s your father’s name?<br />
          What’s his job?
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
                      저 사람은 누구입니까? - 그녀는 Nancy Paine입니다.<br />
                      그리 예쁘지 않군요. - 네, 예쁘진 않아요, 하지만 그녀는 매우 친절합니다.<br />
                      그녀는 사업가입니까? - 네, 사업가입니다.<br />
                      그런데 그의 이름은 무엇입니까? - 그의 이름은 Tony Romero입니다.<br />
                      그의 직업은 무엇입니까? - 그는 경찰입니다.
                    </p>
                    <p>
                      이 분은 Anne Jones입니다. 그녀는 영화배우입니다. 매우 예쁩니다.
                    </p>
                    <p>
                      그는 조종사입니까? - 아니오, 그는 조종사가 아닙니다. 그는 Nick입니다. 그는 정비사입니다.<br />
                      당신은 훌륭한 의사이십니다. - 고맙습니다. 매우 친절하십니다.
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
                      인칭대명사의 소유격 :  I (my) / She (her) / He (his)<br />
                      소유격은 홀로  쓰일 수 없고 뒤에 반드시 명사가 옵니다.
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
