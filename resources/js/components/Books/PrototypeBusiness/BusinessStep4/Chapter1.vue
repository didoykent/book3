<template>
<div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

        <v-layout column>
            <v-img src="https://marketplace.canva.com/MADQtjo4N98/2/screen_2x/canva-extreme-paragliding-in-beautiful-paradise-MADQtjo4N98.jpg">

                <v-layout align-end fill-height pa-0 white--text>
                    <h1 style="background-color: rgba(107, 190, 242, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Discussing interesting experience (Describing feelings and experiences)
                    </h1>
                </v-layout>
            </v-img>

            <div style=" border-color: #1A6DD9; border-style: solid; border-width: 2px;">
            </div>
            <h3 class="border white--text">Today's topic</h3>
            <div style="padding : 16px;">

                <p>
                    <li style="list-style-type: none;">Brendan: You’ve done a parachute jump?</li>
                    <li style="list-style-type: none;">Lisa: Yeah.</li>
                    <li style="list-style-type: none;">Brendan: Seriously?</li>
                    <li style="list-style-type: none;">Lisa: Yeah!</li>
                    <li style="list-style-type: none;">Brendan: When?</li>
                    <li style="list-style-type: none;">Lisa: About… four years ago. A group of us went, from my last company.</li>
                    <li style="list-style-type: none;">Brendan: Wow! I’m impressed! So what was it like?</li>
                    <li style="list-style-type: none;">Lisa: Fantastic! When you jump out of the plane, it’s… it’s just amazing.</li>
                    <li style="list-style-type: none;">Brendan: You weren’t too scared, then?</li>
                    <li style="list-style-type: none;">Lisa: I was before I jumped. Everyone’s frightened before their first jump. But as soon as your parachute opens, it’s…
                                                       it’s actually quite relaxing. You’re just there in the air – you’ve got this incredible view…</li>
                    <li style="list-style-type: none;">Brendan: Yeah, I bet. And what about the landing?</li>
                    <li style="list-style-type: none;">Lisa: It was OK. Not too hard.</li>
                    <li style="list-style-type: none;">Brendan: Because that’s the most dangerous moment, isn’t it?</li>
                    <li style="list-style-type: none;">Lisa: Well, yeah! Even if you jump without a parachute, it’s not dangerous until you land!</li>
                    <li style="list-style-type: none;">Brendan: No, good point!</li>
                </p>






                <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #1A6DD9; border-style: solid; border-width: 2px;">
                </div>
                <h3 class="border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #1A6DD9;">Exercise</h3>
                <div style="padding : 16px;">

                    <p>
                        Are these sentences true(T) or false(F)?
                    </p>

                    <ol style="margin: 12px;">
                        <li>
                            Lisa did a parachute jump last year. ( &emsp; )
                        </li>
                        <li>
                            She enjoyed the experience. ( &emsp; )
                        </li>
                        <li>
                            She was frightened before she jumped. ( &emsp; )
                        </li>
                        <li>
                            After her parachute opened, she was scared. ( &emsp; )
                        </li>
                        <li>
                            She had a very hard landing. ( &emsp; )
                        </li>
                    </ol>

                    <p>
                        Free response:<br />
                        Talk about your most memorable or interesting experiences.
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
                                                Have you ever driven a sports car?<br />
                                                Yes, I’ve driven a Porsche. My friend’s got one.<br />
                                                It was incredible!<br />
                                                It was amazing!<br />
                                                I was a bit scared though
                                            </p>
                                            <p>
                                                Some adjectives have two forms, one ending –ed, the other –ing.<br />
                                                Amazed/amazing : frightened/frightening : relaxed/relaxing : bored/boring : interested/interesting<br />
                                                Tired/tiring
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
