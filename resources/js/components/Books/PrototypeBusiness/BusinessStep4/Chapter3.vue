<template>
<div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

        <v-layout column>
            <v-img src="https://marketplace.canva.com/MADGxuuv5YY/4/screen_2x/canva-blue-and-yellow-graph-on-stock-market-monitor-MADGxuuv5YY.jpg">

                <v-layout align-end fill-height pa-0 white--text>
                    <h1 style="background-color: rgba(107, 190, 242, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Talking about the economy (Review of tenses)
                    </h1>
                </v-layout>
            </v-img>

            <div style=" border-color: #1A6DD9; border-style: solid; border-width: 2px;">
            </div>
            <h3 class="border white--text">Today's topic</h3>
            <div style="padding : 16px;">

                <p>
                    <li style="list-style-type: none;">Interviewer: How important are property prices in the economy?</li>
                    <li style="list-style-type: none;">Roy: In the UK, most people invest most of their money in their house. So property prices are extremely important.</li>
                    <li style="list-style-type: none;">Interviewer: Mmm. What’s your view on the UK property market? Do you think prices are too high?</li>
                    <li style="list-style-type: none;">Roy: Well, in recent years, prices have gone up… ten to twenty percent a year, um… in some years even more.
                        But inflation has been just two or three percent a year. So I think it’s clear that, um… the boom has to end.</li>
                    <li style="list-style-type: none;">Interviewer: Mmm. The last property market crash, in the UK, was in the late 1980s, and it put the UK economy into a recession. Do you think the same thing will happen again?</li>
                    <li style="list-style-type: none;">Roy: I don’t think prices will crash. The… the economic situation was different in the late 80s… interest rates rose quite fast just before property prices fell. Today, the Bank of England is
                        much more careful with… with changes in interest rates. The other important difference, I think, is that then unemployment was quite high. Today,
                        it’s very low – about five percent. So the economic situation’s completely different. So I don’t think prices will crash,
                        but it is possible they’ll fall a little bit. Or stay at the same level for a few years.</li>
                    <li style="list-style-type: none;">Interviewer: Banks have lent people a lot of money in recent years. People have got big mortgages.
                        Do you think that’ll be a problem? Will people have less money to spend in the future?</li>
                    <li style="list-style-type: none;">Roy: Oh, certainly. Because the loans haven’t just been mortgages – people have also borrowed money to spend in the shops. So far, that’s helped the economy, because spending has been high. But
                        at the end of the day, people will have to pay the money back. So I think we’ll see lower consumer spending over the next few years.</li>
                </p>






                <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #1A6DD9; border-style: solid; border-width: 2px;">
                </div>
                <h3 class="border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #1A6DD9;">Exercise</h3>
                <div style="padding : 16px;">

                    <p>
                        Does Roy agree (A) or disagree (D) with 1-4? Write A or D in the boxes.
                    </p>


                    <ol style="margin: 12px;">
                        <li>
                            Property prices are important in the economy. ( )
                        </li>
                        <li>
                            Prices will continue to increase quickly. ( )
                        </li>
                        <li>
                            Today, the situation is the same as in the late 1980s. ( )
                        </li>
                        <li>
                            People will spend less in the future. ( )
                        </li>
                    </ol>

                    <p>
                        Free response:<br />
                        Talk about the economy in your country.<br />
                        What has the economic situation been like recently? What’s it like now?<br />
                        Do you think the economy will get better or worse in the next twelve months? Why?
                    </p>

                </div>

                <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #1A6DD9; border-style: solid; border-width: 2px;">
                </div>
                <h3 class="border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #1A6DD9;">Self Study</h3>
                <div style="padding : 16px;">


                    <p>
                        Notes
                    </p>

                    <p>

                        <v-container grid-list-md text-xs-left>
                            <v-layout row wrap>


                                <v-flex xs12>
                                    <v-card light color="#2E97F2">
                                        <v-card-text class="px-10">
                                            <p>
                                                Useful language<br />
                                                Unemployment is very high at the moment. It’s over 12%<br />
                                                Prices are increasing fast. Inflation is 5%<br />
                                                Interest rates increased a lot last year. They went up 1.5%<br />
                                                People have borrowed a lot of money, and will have to pay back large debts.
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

    data() {

        return {


        }

    },


    beforeMount() {


    },

    methods: {


    },

    watch: {

        fontSize(current, old) {

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
  border-color: transparent #1A6DD9 transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #1A6DD9;
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
