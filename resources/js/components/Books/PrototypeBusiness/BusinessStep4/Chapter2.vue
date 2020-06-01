<template>
<div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

        <v-layout column>
            <v-img src="//live.staticflickr.com/1299/992914260_e7657039ff_k.jpg">

                <v-layout align-end fill-height pa-0 white--text>
                    <h1 style="background-color: rgba(107, 190, 242, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Understanding business news (Present perfect: today, this week/month/year)
                    </h1>
                </v-layout>
            </v-img>

            <div style=" border-color: #1A6DD9; border-style: solid; border-width: 2px;">
            </div>
            <h3 class="border white--text">Today's topic</h3>
            <div style="padding : 16px;">

                <p>
                    <li style="list-style-type: none;">Presenter: It’s been an excellent start to the year for Geo-Core.
                        Your share price has risen by forty-two percent in the first quarter of this year.
                        Not a bad performance - the S&P 500 has fallen by three percent so far this year.</li>
                    <li style="list-style-type: none;">Alan: Yes. We’re obviously very happy with the results we’ve had.
                        Our profit has increased by twenty-six percent this quarter…
                        which is better than we forecast – our forecast was for a twenty percent increase.</li>
                    <li style="list-style-type: none;">Presenter: What’s the main reason for that?</li>
                    <li style="list-style-type: none;">Alan: I think, simply, it’s because demand has been very strong. Our sales have been good.
                        Um… the oil price has risen, um…</li>
                    <li style="list-style-type: none;">Presenter: Obviously, your company doesn’t sell oil – you’re an exploration company, you work for oil companies and…
                        and look for new oil reserves.</li>
                    <li style="list-style-type: none;">Alan: That’s right.</li>
                    <li style="list-style-type: none;">Presenter: But what do high oil prices mean for your business?</li>
                    <li style="list-style-type: none;">Alan: Well, prices are high because, basically, there isn’t enough oil to meet demand.
                        That means we need to find more… which is our job, so… rising oil prices are certainly good news for us…</li>
                    <li style="list-style-type: none;">Presenter: And looking to the future, do you think that…</li>
                </p>






                <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #1A6DD9; border-style: solid; border-width: 2px;">
                </div>
                <h3 class="border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #1A6DD9;">Exercise</h3>
                <div style="padding : 16px;">


                    <ol style="margin: 12px;">
                        <li>
                            Has business been good for Geo-Core so far this year?
                        </li>
                        <li>
                            What does Geo-Core do?
                        </li>
                        <li>
                            Why is the oil price high?
                        </li>
                    </ol>

                    <p>
                        Free response:<br />
                    </p>
                    <ol style="margin: 12px;">
                        <li>
                            Talk about recent movements in share prices, oil prices and exchange rates.
                        </li>
                        <li>
                            Describe things you've done;
                        </li>
                    </ol>

                    <p>
                        - today<br />
                        - this week<br />
                        - this month<br />
                        - this year<br />
                        A: I've made three phone calls today.<br />
                        B: I haven't made any.
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
                                                Present perfect: today, this week/month/year
                                            </p>
                                            <p>
                                                Share prices have risen today.<br />
                                                The price has gone up this week.<br />
                                                The index has fallen this year.
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
