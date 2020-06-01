<template>
  <v-app>

    <div v-if="$route.name === 'freetalking_beginner'">
      <v-layout>

        <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#5C8D89; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>

          <v-list class="pa-1">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>Free Talking Step 1</v-list-tile-title>
              </v-list-tile-content>


            </v-list-tile>
          </v-list>

          <v-divider></v-divider>
          <v-list>

            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>book</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Table of Contents</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list class="custom-list">
              <v-list-tile>
                <h2>Table of Contents</h2>
              </v-list-tile>

              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 1)">Ch. 1 Getting to Know</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 2)">Ch. 2 Travelling</v-list-tile>

              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 3)">Ch. 3 Colors</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/Unit1Chapter3')">- Unit 1</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/Unit2Chapter3')">- Unit 2</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/Unit3Chapter3')">- Unit 3</v-list-tile>

              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 4)">Ch. 4 Memories</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 5)">Ch. 5 Music</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 6)">Ch. 6 Food</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 7)">Ch. 7 Family Members</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 8)">Ch. 8 Friendship</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 9)">Ch. 9 The Weather</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 10)">Ch. 10 Favorite Things</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 11)">Ch. 11 Right Now</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 12)">Ch. 12 Past Happenings</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 13)">Ch. 13 The Future</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 14)">Ch. 14 Nature</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 15)">Ch. 15 The Fauna</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 16)">Ch. 16 The Flora</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 17)">Ch. 17 Time</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 18)">Ch. 18 Movies</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 19)">Ch. 19 Pets</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 20)">Ch. 20 Inspiring People</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 21)">Ch. 21 Superheroes</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 22)">Ch. 22 Time Travel</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 23)">Ch. 23 Hobbies</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 24)">Ch. 24 Personal Habits</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 25)">Ch. 25 Nations of the World</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 26)">Ch. 26 Business</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 27)">Ch. 27 Jobs and Occupation</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 28)">Ch. 28 Relaxation</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 29)">Ch. 29 Rights and Duties</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 30)">Ch. 30 Laws</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 31)">Ch. 31 Making Acquaintances and Friends</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 32)">Ch. 32 Culture</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 33)">Ch. 33 Neighborhood</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 34)">Ch. 34 My City</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 35)">Ch. 35 Superstition</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 36)">Ch. 36 Learning Foreign Languages</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 37)">Ch. 37 Fashion</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 38)">Ch. 38 Dreams</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 39)">Ch. 39 Science and Technology</v-list-tile>
              <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + 40)">Ch. 40 Holidays</v-list-tile>


            </v-list>
          </v-list>
        </v-navigation-drawer>

        <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #5C8D89;">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Free Talking Step 1</v-toolbar-title>
          <v-spacer></v-spacer>

          <template v-if="speechSlot" #extension>
            <v-container>
              <v-row>
                <v-toolbar-items>
                  <v-col cols="4">
                    <v-icon @click.native="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col cols="4">
                    <v-icon @click.native="stopSpeech()" large color="black">stop</v-icon>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col cols="4">
                    <v-menu offset-y>
                      <template v-slot:activator="{ on }">
                        <v-btn v-on="on" depressed block text color="#5C8D89">{{speechRateText}}</v-btn>
                      </template>
                      <v-list>
                        <v-list-item>
                          <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item>
                          <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item>
                          <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-col>
                </v-toolbar-items>
              </v-row>
            </v-container>
          </template>



          <!--  <v-menu v-model="speechInfo" offset-y offset-x>
          <template v-slot:activator="{ on }"> -->
          <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>
          <!--  </template>
          <v-card width="50" height="50">
          hi
        </v-card>
      </v-menu>  -->





      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>

          </v-toolbar-title>
        </template>

        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="15" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>

      </v-menu>

    </v-toolbar>
  </v-layout>

</div>




<div v-if="$route.name === 'freetalking_intermediate'">
  <v-layout>


    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#c38b8b; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>


      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Free Talking Step 2</v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>

      <v-divider></v-divider>
      <v-list>

        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>

        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/freetalking/intermediate/chapter' + n)" v-for="n in 21" :key="n">Chapter {{n}}</v-list-tile>

        </v-list>

      </v-list>
    </v-navigation-drawer>

    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #c38b8b;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Free Talking Step 2</v-toolbar-title>
      <v-spacer></v-spacer>

      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSpeech()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#c38b8b">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>

      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>

      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>

          </v-toolbar-title>
        </template>



        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="15" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>

      </v-menu>




    </v-toolbar>
  </v-layout>



</div>


<div v-if="$route.name === 'patterncourse_adultbasic'">
  <v-layout>

    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#9692af; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>

      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Pattern Course Adult Basic Step 1</v-list-tile-title>
          </v-list-tile-content>


        </v-list-tile>
      </v-list>

      <v-divider></v-divider>
      <v-list>

        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>

        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/pattercourse/adultbasic/chapter' + n)" v-for="n in 20" :key="n">Chapter {{n}}</v-list-tile>

        </v-list>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #9692af;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Pattern Course Adult Basic Step 1</v-toolbar-title>
      <v-spacer></v-spacer>

      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSpeech()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#9692af">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>

      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>

      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>

          </v-toolbar-title>
        </template>

        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="15" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>

      </v-menu>

    </v-toolbar>
  </v-layout>

</div>



<div v-if="$route.name === 'patterncourse_adultadv'">
  <v-layout>

    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#9692af; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>

      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Pattern Course Adult Advance Step 1</v-list-tile-title>
          </v-list-tile-content>


        </v-list-tile>
      </v-list>

      <v-divider></v-divider>
      <v-list>

        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>

        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/pattercourse/adultadv/chapter' + n)" v-for="n in 20" :key="n">Chapter {{n}}</v-list-tile>

        </v-list>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #9692af;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Pattern Course Adult Advance Step 1</v-toolbar-title>
      <v-spacer></v-spacer>

      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSpeech()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#9692af">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>

      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>

      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>

          </v-toolbar-title>
        </template>

        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="15" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>

      </v-menu>

    </v-toolbar>
  </v-layout>

</div>


<div v-if="$route.name === 'patterncourse_adultint'">
  <v-layout>

    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#ee8972; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>

      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Pattern Course Adult Intermediate Step 1</v-list-tile-title>
          </v-list-tile-content>


        </v-list-tile>
      </v-list>

      <v-divider></v-divider>
      <v-list>

        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>

        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/pattercourse/adultintermediate/chapter' + n)" v-for="n in 20" :key="n">Chapter {{n}}</v-list-tile>

        </v-list>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #ee8972;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Pattern Course Adult Intermediate Step 1</v-toolbar-title>
      <v-spacer></v-spacer>

      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSpeech()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#9692af">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>

      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>

      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>

          </v-toolbar-title>
        </template>

        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="15" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>

      </v-menu>

    </v-toolbar>
  </v-layout>

</div>












//PROTOTYPE BUSINESS BOOK STEP 1

<div v-if="$route.name === 'Business_Step1'">
  <v-layout>

    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color: #7690CF; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>

      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Business - Step 1</v-list-tile-title>
          </v-list-tile-content>


        </v-list-tile>
      </v-list>

      <v-divider></v-divider>
      <v-list>

        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>

        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep1/chapter' + n)" v-for="n in 20" :key="n">Chapter {{n}}</v-list-tile>

        </v-list>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #7690CF;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Business - Step 1</v-toolbar-title>
      <v-spacer></v-spacer>

      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSpeech()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#9692af">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>

      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>

      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>

          </v-toolbar-title>
        </template>

        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="15" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>

      </v-menu>

    </v-toolbar>
  </v-layout>

</div>

//PROTOTYPE BUSINESS STEP 2
<div v-if="$route.name === 'Business_Step2'">
  <v-layout>

    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color: #ffe75e; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>

      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Business - Step 2</v-list-tile-title>
          </v-list-tile-content>


        </v-list-tile>
      </v-list>

      <v-divider></v-divider>
      <v-list>

        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>

        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep2/chapter' + n)" v-for="n in 20" :key="n">Chapter {{n}}</v-list-tile>

        </v-list>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #ffe75e;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Business - Step 2</v-toolbar-title>
      <v-spacer></v-spacer>

      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSpeech()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#9692af">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>

      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>

      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>

          </v-toolbar-title>
        </template>

        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="15" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>

      </v-menu>

    </v-toolbar>
  </v-layout>

</div>

//PROTOTYPE BUSINESS STEP 3
<div v-if="$route.name === 'Business_Step3'">
  <v-layout>

    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color: #BF826B; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>

      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Business - Step 3</v-list-tile-title>
          </v-list-tile-content>


        </v-list-tile>
      </v-list>

      <v-divider></v-divider>
      <v-list>

        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>

        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep3/chapter' + n)" v-for="n in 20" :key="n">Chapter {{n}}</v-list-tile>

        </v-list>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #BF826B;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Business - Step 3</v-toolbar-title>
      <v-spacer></v-spacer>

      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSpeech()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#9692af">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>

      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>

      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>

          </v-toolbar-title>
        </template>

        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="15" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>

      </v-menu>

    </v-toolbar>
  </v-layout>

</div>

//PROTOTYPE BUSINESS STEP 4
<div v-if="$route.name === 'Business_Step4'">
  <v-layout>

    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color: #2AB0BF; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>

      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Business - Step 4</v-list-tile-title>
          </v-list-tile-content>


        </v-list-tile>
      </v-list>

      <v-divider></v-divider>
      <v-list>

        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>

        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/PrototypeBusiness/BusinessStep4/chapter' + n)" v-for="n in 20" :key="n">Chapter {{n}}</v-list-tile>

        </v-list>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #2AB0BF;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Business - Step 4</v-toolbar-title>
      <v-spacer></v-spacer>

      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSpeech()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#9692af">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>

      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>

      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>

          </v-toolbar-title>
        </template>

        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="15" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>

      </v-menu>

    </v-toolbar>
  </v-layout>

</div>


//DIALOGUE BOOKS LEVEL 1
<div v-if="$route.name === 'Dialogue_Books1'">
  <v-layout>


    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#BC8462; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>


      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Dialogue Books</v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>

      <v-divider></v-divider>
      <v-list>

        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>book</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Table of Contents</v-list-tile-title>
          </v-list-tile>
        </template>

        <v-list class="custom-list">
          <v-list-tile>
            <h2>Table of Contents</h2>
          </v-list-tile>
          <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel1/chapter' + n)" v-for="n in 21" :key="n">Chapter {{n}}</v-list-tile>

        </v-list>

      </v-list>
    </v-navigation-drawer>

    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #BC8462;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Dialogue Books Level 1 - Step 1</v-toolbar-title>
      <v-spacer></v-spacer>

      <template v-if="speechSlot" #extension>
        <v-container>
          <v-row>
            <v-toolbar-items>
              <v-col cols="4">
                <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-icon @click="stopSpeech()" large color="black">stop</v-icon>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" depressed block text color="#c38b8b">{{speechRateText}}</v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </template>

      <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>

      <v-menu min-width="100%" offset-y>
        <template v-slot:activator="{ on }" style="min-width:100%;">
          <v-toolbar-title v-on="on">
            <span>ᴀA</span>

          </v-toolbar-title>
        </template>



        <v-list style="overflow-y: hidden;">
          <v-list-tile>
            <v-slider v-model="fontSize" :min="15" :max="30" :step="1"></v-slider>
          </v-list-tile>
        </v-list>

      </v-menu>




    </v-toolbar>
  </v-layout>

</div>


  //DIALOGUE BOOKS LEVEL 2
  <div v-if="$route.name === 'Dialogue_Books2'">
    <v-layout>


      <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#84a9ac; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>


        <v-list class="pa-1">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Dialogue Books</v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>
        </v-list>

        <v-divider></v-divider>
        <v-list>

          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>book</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>Table of Contents</v-list-tile-title>
            </v-list-tile>
          </template>

          <v-list class="custom-list">
            <v-list-tile>
              <h2>Table of Contents</h2>
            </v-list-tile>
            <v-list-tile @click="$router.push('/DialogueBooks/DialogueLevel2/chapter' + n)" v-for="n in 21" :key="n">Chapter {{n}}</v-list-tile>

          </v-list>

        </v-list>
      </v-navigation-drawer>

      <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #84a9ac;">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Dialogue Books Level 2 - Step 2</v-toolbar-title>
        <v-spacer></v-spacer>

        <template v-if="speechSlot" #extension>
          <v-container>
            <v-row>
              <v-toolbar-items>
                <v-col cols="4">
                  <v-icon @click="textToSpeech()" class="ml-5" large color="black">{{icon}}</v-icon>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="4">
                  <v-icon @click="stopSpeech()" large color="black">stop</v-icon>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="4">
                  <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                      <v-btn v-on="on" depressed block text color="#c38b8b">{{speechRateText}}</v-btn>
                    </template>
                    <v-list>
                      <v-list-item>
                        <v-list-item-title class="mx-2" @click="changeSpeechRate($event)"><center>0.75x</center></v-list-item-title>
                      </v-list-item>
                      <v-divider></v-divider>
                      <v-list-item>
                        <v-list-item-title  class="mx-2"  @click="changeSpeechRate($event)"><center>1x</center></v-list-item-title>
                      </v-list-item>
                      <v-divider></v-divider>
                      <v-list-item>
                        <v-list-item-title  class="mx-2" @click="changeSpeechRate($event)"><center>1.25x</center></v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-col>
              </v-toolbar-items>
            </v-row>
          </v-container>
        </template>

        <v-icon v-on="on" color="black" @click="speechSlot = !speechSlot" large>volume_up</v-icon>

        <v-menu min-width="100%" offset-y>
          <template v-slot:activator="{ on }" style="min-width:100%;">
            <v-toolbar-title v-on="on">
              <span>ᴀA</span>

            </v-toolbar-title>
          </template>



          <v-list style="overflow-y: hidden;">
            <v-list-tile>
              <v-slider v-model="fontSize" :min="15" :max="30" :step="1"></v-slider>
            </v-list-tile>
          </v-list>

        </v-menu>




      </v-toolbar>
    </v-layout>

</div>



<router-view :fontSize="fontSize"></router-view>


</v-app>
</template>

<script>
import Speech from 'speak-tts'
import Vue from 'vue'
export default {



  data() {
    return {
      drawer: null,
      pathname: window.location.pathname,
      items: [{
        title: 'Home',
        icon: 'dashboard'
      },
      {
        title: 'About',
        icon: 'question_answer'
      }
    ],
    mini: false,
    right: null,

    toolbar: {
      //
      fixed: true,
      // sets if the toolbar contents is leaving space for drawer (false) or not (true)
      clippedLeft: false,

    },
    icon: 'play_arrow',
    speech: new Speech(),
    stop_button: false,
    selectedString: '',
    speechRateText: '1x',
    speechRate: 1,



    fontSize: 15,

    speechInfo: true,
    speechSlot: false,


  }
},

watch: {

  fontSize(current, old) {





  }
},
mounted() {
  this.speech.cancel()
  console.log(this.pathname)

},
methods: {

  textToSpeech() {

    var string = this.$el.innerText
    var string2

    if(this.speechRate == 0.75 || this.speechRate == 1.25 ){
      string2 = string.slice(528, string.length).trim().replace(/\s/g,' ')
    }else if(this.speechRate == 1){
      string2 = string.slice(526, string.length).trim().replace(/\s/g,' ')
    }

    this.speech.init({
      volume: 1,
      lang: "en-US",
      rate: this.speechRate,
      pitch: 1,

    }).then((data) => {

    }).catch(e => {})

    this.speech.setVoice('Google US English')

    this.speech.speak({
      text: string2.trim()
    }).then(() => {
      console.log("Success !")
    }).catch(e => {
      console.error("An error occurred :", e)
    })

    if (this.speech.speaking()) {

      document.addEventListener('mouseup', event => {
        this.selectedString = event.target.innerText
        console.log(this.selectedString != "play_arrow" && this.selectedString != "pause" && this.selectedString != "0.5X" && this.selectedString != "1X" && this.selectedString != "1.5X")
        if(this.selectedString != "play_arrow" && this.selectedString != "pause" && this.selectedString != "0.5X" && this.selectedString != "1X" && this.selectedString != "1.5X" && this.selectedString != "0.5x" && this.selectedString != "1x" && this.selectedString != "1.5x"){
          this.speech.cancel();
          this.selectedTextToSpeech()
        }

        if(this.selectedString == "play_arrow"){
          console.log('resume')
          this.speech.resume()
          this.icon = "pause";
        }else if(this.selectedString == "pause"){
          console.log('pause')
          this.speech.pause()
          this.icon = "play_arrow";
        }

      })

      Vue.set(this.$data, 'icon', 'pause')

    }else{
      if(this.selectedString == "pause"){
        this.speech.pause()
        this.icon = "play_arrow"
      }else if(this.selectedString == "play_arrow"){
        this.speech.resume()
        this.icon = "pause"
      }
    }
  },

  stopSpeech() {
    Vue.set(this.$data, 'icon', 'play_arrow')
    this.speech.cancel()
  },

  selectedTextToSpeech() {

    if (!this.speech.speaking()) {

      this.speech.init({
        volume: 1,
        lang: "en-US",
        rate: this.speechRate,
        pitch: 1,

      }).then((data) => {}).catch(e => {})
      console.log(this.selectedString)
      this.speech.speak({
        text: this.selectedString,
        listeners: {
          onend: () => {
            Vue.set(this.$data, 'icon', 'play_arrow')
          }
        }
      }).then(() => {
        console.log("Success !")
      }).catch(e => {
        console.error("An error occurred :", e)
      })

      /*
      if(this.selectedString == "pause"){
      this.speech.pause()
      this.icon = "play_arrow"
    }else if(this.selectedString == "play_arrow"){
    this.speech.resume()
    this.icon = "pause"
  }*/

  Vue.set(this.$data, 'icon', 'pause')

}



},

changeSpeechRate(selected){
  this.speechRateText = selected.target.innerText

  if(selected.target.innerText == "0.5x"){
    this.speech.setRate(0.75)
    this.speechRate = 0.75
  }
  if(selected.target.innerText == "1x"){
    this.speech.setRate(1)
    this.speechRate = 1
  }
  if(selected.target.innerText == "1.5x"){
    this.speech.setRate(1.25)
    this.speechRate = 1.25
  }
}

}



}
</script>

<style>
.custom-list {
  max-height: 100vh;
  overflow-y: scroll;
}
</style>
