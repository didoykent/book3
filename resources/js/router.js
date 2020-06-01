import Vue from 'vue'


import VueRouter from 'vue-router'



Vue.use(VueRouter)

const router = new VueRouter({



routes: [
{path: '/app', component: require('./App.vue').default},
//beginnerfreetalking
{path: '/freetalking/beginner/chapter1', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter1.vue').default},
{path: '/freetalking/beginner/chapter2', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter2.vue').default},
{path: '/freetalking/beginner/chapter3', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter3.vue').default},

{path: '/freetalking/beginner/Unit1Chapter3', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Unit1Chapter3.vue').default},
{path: '/freetalking/beginner/Unit2Chapter3', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Unit2Chapter3.vue').default},
{path: '/freetalking/beginner/Unit3Chapter3', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Unit3Chapter3.vue').default},

{path: '/freetalking/beginner/chapter4', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter4.vue').default},
{path: '/freetalking/beginner/chapter5', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter5.vue').default},
{path: '/freetalking/beginner/chapter6', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter6.vue').default},
{path: '/freetalking/beginner/chapter7', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter7.vue').default},
{path: '/freetalking/beginner/chapter8', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter8.vue').default},
{path: '/freetalking/beginner/chapter9', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter9.vue').default},
{path: '/freetalking/beginner/chapter10', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter10.vue').default},
{path: '/freetalking/beginner/chapter11', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter11.vue').default},
{path: '/freetalking/beginner/chapter12', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter12.vue').default},
{path: '/freetalking/beginner/chapter13', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter13.vue').default},
{path: '/freetalking/beginner/chapter14', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter14.vue').default},
{path: '/freetalking/beginner/chapter15', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter15.vue').default},
{path: '/freetalking/beginner/chapter16', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter16.vue').default},
{path: '/freetalking/beginner/chapter17', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter17.vue').default},
{path: '/freetalking/beginner/chapter18', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter18.vue').default},
{path: '/freetalking/beginner/chapter19', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter19.vue').default},
{path: '/freetalking/beginner/chapter20', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter20.vue').default},
{path: '/freetalking/beginner/chapter21', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter21.vue').default},
{path: '/freetalking/beginner/chapter22', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter22.vue').default},
{path: '/freetalking/beginner/chapter23', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter23.vue').default},
{path: '/freetalking/beginner/chapter24', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter24.vue').default},
{path: '/freetalking/beginner/chapter25', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter25.vue').default},
{path: '/freetalking/beginner/chapter26', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter26.vue').default},
{path: '/freetalking/beginner/chapter27', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter27.vue').default},
{path: '/freetalking/beginner/chapter28', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter28.vue').default},
{path: '/freetalking/beginner/chapter29', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter29.vue').default},
{path: '/freetalking/beginner/chapter30', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter30.vue').default},
{path: '/freetalking/beginner/chapter31', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter31.vue').default},
{path: '/freetalking/beginner/chapter32', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter32.vue').default},
{path: '/freetalking/beginner/chapter33', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter33.vue').default},
{path: '/freetalking/beginner/chapter34', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter34.vue').default},
{path: '/freetalking/beginner/chapter35', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter35.vue').default},
{path: '/freetalking/beginner/chapter36', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter36.vue').default},
{path: '/freetalking/beginner/chapter37', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter37.vue').default},
{path: '/freetalking/beginner/chapter38', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter38.vue').default},
{path: '/freetalking/beginner/chapter39', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter39.vue').default},
{path: '/freetalking/beginner/chapter40', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter40.vue').default},

//Intermediatefreetalking
{path: '/freetalking/intermediate/chapter1', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter1.vue').default},
{path: '/freetalking/intermediate/chapter2', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter2.vue').default},
{path: '/freetalking/intermediate/chapter3', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter3.vue').default},
{path: '/freetalking/intermediate/chapter4', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter4.vue').default},
{path: '/freetalking/intermediate/chapter5', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter5.vue').default},
{path: '/freetalking/intermediate/chapter6', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter6.vue').default},
{path: '/freetalking/intermediate/chapter7', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter7.vue').default},
{path: '/freetalking/intermediate/chapter8', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter8.vue').default},
{path: '/freetalking/intermediate/chapter9', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter9.vue').default},
{path: '/freetalking/intermediate/chapter10', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter10.vue').default},
{path: '/freetalking/intermediate/chapter11', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter11.vue').default},
{path: '/freetalking/intermediate/chapter12', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter12.vue').default},
{path: '/freetalking/intermediate/chapter13', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter13.vue').default},
{path: '/freetalking/intermediate/chapter14', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter14.vue').default},
{path: '/freetalking/intermediate/chapter15', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter15.vue').default},
{path: '/freetalking/intermediate/chapter16', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter16.vue').default},
{path: '/freetalking/intermediate/chapter17', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter17.vue').default},
{path: '/freetalking/intermediate/chapter18', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter18.vue').default},
{path: '/freetalking/intermediate/chapter19', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter19.vue').default},
{path: '/freetalking/intermediate/chapter20', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter20.vue').default},


//PatternAdultBasic
{path: '/pattercourse/adultbasic/chapter1', name: 'patterncourse_adultbasic', component: require('./components/Books/PatternCourse/Adult/PatternAdultBasic/Chapter1.vue').default},
{path: '/pattercourse/adultbasic/chapter2', name: 'patterncourse_adultbasic', component: require('./components/Books/PatternCourse/Adult/PatternAdultBasic/Chapter2.vue').default},
{path: '/pattercourse/adultbasic/chapter3', name: 'patterncourse_adultbasic', component: require('./components/Books/PatternCourse/Adult/PatternAdultBasic/Chapter3.vue').default},
{path: '/pattercourse/adultbasic/chapter4', name: 'patterncourse_adultbasic', component: require('./components/Books/PatternCourse/Adult/PatternAdultBasic/Chapter4.vue').default},
{path: '/pattercourse/adultbasic/chapter5', name: 'patterncourse_adultbasic', component: require('./components/Books/PatternCourse/Adult/PatternAdultBasic/Chapter5.vue').default},
{path: '/pattercourse/adultbasic/chapter6', name: 'patterncourse_adultbasic', component: require('./components/Books/PatternCourse/Adult/PatternAdultBasic/Chapter6.vue').default},
{path: '/pattercourse/adultbasic/chapter7', name: 'patterncourse_adultbasic', component: require('./components/Books/PatternCourse/Adult/PatternAdultBasic/Chapter7.vue').default},
{path: '/pattercourse/adultbasic/chapter8', name: 'patterncourse_adultbasic', component: require('./components/Books/PatternCourse/Adult/PatternAdultBasic/Chapter8.vue').default},
{path: '/pattercourse/adultbasic/chapter9', name: 'patterncourse_adultbasic', component: require('./components/Books/PatternCourse/Adult/PatternAdultBasic/Chapter9.vue').default},
{path: '/pattercourse/adultbasic/chapter10', name: 'patterncourse_adultbasic', component: require('./components/Books/PatternCourse/Adult/PatternAdultBasic/Chapter10.vue').default},
{path: '/pattercourse/adultbasic/chapter11', name: 'patterncourse_adultbasic', component: require('./components/Books/PatternCourse/Adult/PatternAdultBasic/Chapter11.vue').default},
{path: '/pattercourse/adultbasic/chapter12', name: 'patterncourse_adultbasic', component: require('./components/Books/PatternCourse/Adult/PatternAdultBasic/Chapter12.vue').default},
{path: '/pattercourse/adultbasic/chapter13', name: 'patterncourse_adultbasic', component: require('./components/Books/PatternCourse/Adult/PatternAdultBasic/Chapter13.vue').default},
{path: '/pattercourse/adultbasic/chapter14', name: 'patterncourse_adultbasic', component: require('./components/Books/PatternCourse/Adult/PatternAdultBasic/Chapter14.vue').default},
{path: '/pattercourse/adultbasic/chapter15', name: 'patterncourse_adultbasic', component: require('./components/Books/PatternCourse/Adult/PatternAdultBasic/Chapter15.vue').default},
{path: '/pattercourse/adultbasic/chapter16', name: 'patterncourse_adultbasic', component: require('./components/Books/PatternCourse/Adult/PatternAdultBasic/Chapter16.vue').default},
{path: '/pattercourse/adultbasic/chapter17', name: 'patterncourse_adultbasic', component: require('./components/Books/PatternCourse/Adult/PatternAdultBasic/Chapter17.vue').default},
{path: '/pattercourse/adultbasic/chapter18', name: 'patterncourse_adultbasic', component: require('./components/Books/PatternCourse/Adult/PatternAdultBasic/Chapter18.vue').default},
{path: '/pattercourse/adultbasic/chapter19', name: 'patterncourse_adultbasic', component: require('./components/Books/PatternCourse/Adult/PatternAdultBasic/Chapter19.vue').default},
{path: '/pattercourse/adultbasic/chapter20', name: 'patterncourse_adultbasic', component: require('./components/Books/PatternCourse/Adult/PatternAdultBasic/Chapter20.vue').default},

//PatternAdultAdvance
{path: '/pattercourse/adultadvance/chapter1', name: 'patterncourse_adultadv', component: require('./components/Books/PatternCourse/Adult/PatternAdultAdv/Chapter1.vue').default},

//PatternAdultIntermediate
{path: '/pattercourse/adultintermediate/chapter1', name: 'patterncourse_adultint', component: require('./components/Books/PatternCourse/Adult/PatternAdultInt/Chapter1.vue').default},
{path: '/pattercourse/adultintermediate/chapter2', name: 'patterncourse_adultint', component: require('./components/Books/PatternCourse/Adult/PatternAdultInt/Chapter2.vue').default},
{path: '/pattercourse/adultintermediate/chapter3', name: 'patterncourse_adultint', component: require('./components/Books/PatternCourse/Adult/PatternAdultInt/Chapter3.vue').default},
{path: '/pattercourse/adultintermediate/chapter4', name: 'patterncourse_adultint', component: require('./components/Books/PatternCourse/Adult/PatternAdultInt/Chapter4.vue').default},
{path: '/pattercourse/adultintermediate/chapter5', name: 'patterncourse_adultint', component: require('./components/Books/PatternCourse/Adult/PatternAdultInt/Chapter5.vue').default},
{path: '/pattercourse/adultintermediate/chapter6', name: 'patterncourse_adultint', component: require('./components/Books/PatternCourse/Adult/PatternAdultInt/Chapter6.vue').default},
{path: '/pattercourse/adultintermediate/chapter7', name: 'patterncourse_adultint', component: require('./components/Books/PatternCourse/Adult/PatternAdultInt/Chapter7.vue').default},
{path: '/pattercourse/adultintermediate/chapter8', name: 'patterncourse_adultint', component: require('./components/Books/PatternCourse/Adult/PatternAdultInt/Chapter8.vue').default},
{path: '/pattercourse/adultintermediate/chapter9', name: 'patterncourse_adultint', component: require('./components/Books/PatternCourse/Adult/PatternAdultInt/Chapter9.vue').default},
{path: '/pattercourse/adultintermediate/chapter10', name: 'patterncourse_adultint', component: require('./components/Books/PatternCourse/Adult/PatternAdultInt/Chapter10.vue').default},
{path: '/pattercourse/adultintermediate/chapter11', name: 'patterncourse_adultint', component: require('./components/Books/PatternCourse/Adult/PatternAdultInt/Chapter11.vue').default},


//PrototypeBusiness
//Business Step 1
{path: '/PrototypeBusiness/BusinessStep1/chapter1', name: 'Business_Step1', component: require('./components/Books/PrototypeBusiness/BusinessStep1/Chapter1.vue').default},
{path: '/PrototypeBusiness/BusinessStep1/chapter2', name: 'Business_Step1', component: require('./components/Books/PrototypeBusiness/BusinessStep1/Chapter2.vue').default},
{path: '/PrototypeBusiness/BusinessStep1/chapter3', name: 'Business_Step1', component: require('./components/Books/PrototypeBusiness/BusinessStep1/Chapter3.vue').default},
{path: '/PrototypeBusiness/BusinessStep1/chapter4', name: 'Business_Step1', component: require('./components/Books/PrototypeBusiness/BusinessStep1/Chapter4.vue').default},
{path: '/PrototypeBusiness/BusinessStep1/chapter5', name: 'Business_Step1', component: require('./components/Books/PrototypeBusiness/BusinessStep1/Chapter5.vue').default},
{path: '/PrototypeBusiness/BusinessStep1/chapter6', name: 'Business_Step1', component: require('./components/Books/PrototypeBusiness/BusinessStep1/Chapter6.vue').default},
{path: '/PrototypeBusiness/BusinessStep1/chapter7', name: 'Business_Step1', component: require('./components/Books/PrototypeBusiness/BusinessStep1/Chapter7.vue').default},
{path: '/PrototypeBusiness/BusinessStep1/chapter8', name: 'Business_Step1', component: require('./components/Books/PrototypeBusiness/BusinessStep1/Chapter8.vue').default},
{path: '/PrototypeBusiness/BusinessStep1/chapter9', name: 'Business_Step1', component: require('./components/Books/PrototypeBusiness/BusinessStep1/Chapter9.vue').default},
{path: '/PrototypeBusiness/BusinessStep1/chapter10', name: 'Business_Step1', component: require('./components/Books/PrototypeBusiness/BusinessStep1/Chapter10.vue').default},
{path: '/PrototypeBusiness/BusinessStep1/chapter11', name: 'Business_Step1', component: require('./components/Books/PrototypeBusiness/BusinessStep1/Chapter11.vue').default},
{path: '/PrototypeBusiness/BusinessStep1/chapter12', name: 'Business_Step1', component: require('./components/Books/PrototypeBusiness/BusinessStep1/Chapter12.vue').default},
{path: '/PrototypeBusiness/BusinessStep1/chapter13', name: 'Business_Step1', component: require('./components/Books/PrototypeBusiness/BusinessStep1/Chapter13.vue').default},
{path: '/PrototypeBusiness/BusinessStep1/chapter14', name: 'Business_Step1', component: require('./components/Books/PrototypeBusiness/BusinessStep1/Chapter14.vue').default},
{path: '/PrototypeBusiness/BusinessStep1/chapter15', name: 'Business_Step1', component: require('./components/Books/PrototypeBusiness/BusinessStep1/Chapter15.vue').default},
{path: '/PrototypeBusiness/BusinessStep1/chapter16', name: 'Business_Step1', component: require('./components/Books/PrototypeBusiness/BusinessStep1/Chapter16.vue').default},
{path: '/PrototypeBusiness/BusinessStep1/chapter17', name: 'Business_Step1', component: require('./components/Books/PrototypeBusiness/BusinessStep1/Chapter17.vue').default},
{path: '/PrototypeBusiness/BusinessStep1/chapter18', name: 'Business_Step1', component: require('./components/Books/PrototypeBusiness/BusinessStep1/Chapter18.vue').default},
{path: '/PrototypeBusiness/BusinessStep1/chapter19', name: 'Business_Step1', component: require('./components/Books/PrototypeBusiness/BusinessStep1/Chapter19.vue').default},
{path: '/PrototypeBusiness/BusinessStep1/chapter20', name: 'Business_Step1', component: require('./components/Books/PrototypeBusiness/BusinessStep1/Chapter20.vue').default},
//Business Step 2
{path: '/PrototypeBusiness/BusinessStep2/chapter1', name: 'Business_Step2', component: require('./components/Books/PrototypeBusiness/BusinessStep2/Chapter1.vue').default},
{path: '/PrototypeBusiness/BusinessStep2/chapter2', name: 'Business_Step2', component: require('./components/Books/PrototypeBusiness/BusinessStep2/Chapter2.vue').default},
{path: '/PrototypeBusiness/BusinessStep2/chapter3', name: 'Business_Step2', component: require('./components/Books/PrototypeBusiness/BusinessStep2/Chapter3.vue').default},
{path: '/PrototypeBusiness/BusinessStep2/chapter4', name: 'Business_Step2', component: require('./components/Books/PrototypeBusiness/BusinessStep2/Chapter4.vue').default},
{path: '/PrototypeBusiness/BusinessStep2/chapter5', name: 'Business_Step2', component: require('./components/Books/PrototypeBusiness/BusinessStep2/Chapter5.vue').default},
{path: '/PrototypeBusiness/BusinessStep2/chapter6', name: 'Business_Step2', component: require('./components/Books/PrototypeBusiness/BusinessStep2/Chapter6.vue').default},
{path: '/PrototypeBusiness/BusinessStep2/chapter7', name: 'Business_Step2', component: require('./components/Books/PrototypeBusiness/BusinessStep2/Chapter7.vue').default},
{path: '/PrototypeBusiness/BusinessStep2/chapter8', name: 'Business_Step2', component: require('./components/Books/PrototypeBusiness/BusinessStep2/Chapter8.vue').default},
{path: '/PrototypeBusiness/BusinessStep2/chapter9', name: 'Business_Step2', component: require('./components/Books/PrototypeBusiness/BusinessStep2/Chapter9.vue').default},
{path: '/PrototypeBusiness/BusinessStep2/chapter10', name: 'Business_Step2', component: require('./components/Books/PrototypeBusiness/BusinessStep2/Chapter10.vue').default},
{path: '/PrototypeBusiness/BusinessStep2/chapter11', name: 'Business_Step2', component: require('./components/Books/PrototypeBusiness/BusinessStep2/Chapter11.vue').default},
{path: '/PrototypeBusiness/BusinessStep2/chapter12', name: 'Business_Step2', component: require('./components/Books/PrototypeBusiness/BusinessStep2/Chapter12.vue').default},
{path: '/PrototypeBusiness/BusinessStep2/chapter13', name: 'Business_Step2', component: require('./components/Books/PrototypeBusiness/BusinessStep2/Chapter13.vue').default},
{path: '/PrototypeBusiness/BusinessStep2/chapter14', name: 'Business_Step2', component: require('./components/Books/PrototypeBusiness/BusinessStep2/Chapter14.vue').default},
{path: '/PrototypeBusiness/BusinessStep2/chapter15', name: 'Business_Step2', component: require('./components/Books/PrototypeBusiness/BusinessStep2/Chapter15.vue').default},
{path: '/PrototypeBusiness/BusinessStep2/chapter16', name: 'Business_Step2', component: require('./components/Books/PrototypeBusiness/BusinessStep2/Chapter16.vue').default},
{path: '/PrototypeBusiness/BusinessStep2/chapter17', name: 'Business_Step2', component: require('./components/Books/PrototypeBusiness/BusinessStep2/Chapter17.vue').default},
{path: '/PrototypeBusiness/BusinessStep2/chapter18', name: 'Business_Step2', component: require('./components/Books/PrototypeBusiness/BusinessStep2/Chapter18.vue').default},
{path: '/PrototypeBusiness/BusinessStep2/chapter19', name: 'Business_Step2', component: require('./components/Books/PrototypeBusiness/BusinessStep2/Chapter19.vue').default},
{path: '/PrototypeBusiness/BusinessStep2/chapter20', name: 'Business_Step2', component: require('./components/Books/PrototypeBusiness/BusinessStep2/Chapter20.vue').default},
//Business Step 3
{path: '/PrototypeBusiness/BusinessStep3/chapter1', name: 'Business_Step3', component: require('./components/Books/PrototypeBusiness/BusinessStep3/Chapter1.vue').default},
{path: '/PrototypeBusiness/BusinessStep3/chapter2', name: 'Business_Step3', component: require('./components/Books/PrototypeBusiness/BusinessStep3/Chapter2.vue').default},
{path: '/PrototypeBusiness/BusinessStep3/chapter3', name: 'Business_Step3', component: require('./components/Books/PrototypeBusiness/BusinessStep3/Chapter3.vue').default},
{path: '/PrototypeBusiness/BusinessStep3/chapter4', name: 'Business_Step3', component: require('./components/Books/PrototypeBusiness/BusinessStep3/Chapter4.vue').default},
{path: '/PrototypeBusiness/BusinessStep3/chapter5', name: 'Business_Step3', component: require('./components/Books/PrototypeBusiness/BusinessStep3/Chapter5.vue').default},
{path: '/PrototypeBusiness/BusinessStep3/chapter6', name: 'Business_Step3', component: require('./components/Books/PrototypeBusiness/BusinessStep3/Chapter6.vue').default},
{path: '/PrototypeBusiness/BusinessStep3/chapter7', name: 'Business_Step3', component: require('./components/Books/PrototypeBusiness/BusinessStep3/Chapter7.vue').default},
{path: '/PrototypeBusiness/BusinessStep3/chapter8', name: 'Business_Step3', component: require('./components/Books/PrototypeBusiness/BusinessStep3/Chapter8.vue').default},
{path: '/PrototypeBusiness/BusinessStep3/chapter9', name: 'Business_Step3', component: require('./components/Books/PrototypeBusiness/BusinessStep3/Chapter9.vue').default},
{path: '/PrototypeBusiness/BusinessStep3/chapter10', name: 'Business_Step3', component: require('./components/Books/PrototypeBusiness/BusinessStep3/Chapter10.vue').default},
{path: '/PrototypeBusiness/BusinessStep3/chapter11', name: 'Business_Step3', component: require('./components/Books/PrototypeBusiness/BusinessStep3/Chapter11.vue').default},
{path: '/PrototypeBusiness/BusinessStep3/chapter12', name: 'Business_Step3', component: require('./components/Books/PrototypeBusiness/BusinessStep3/Chapter12.vue').default},
{path: '/PrototypeBusiness/BusinessStep3/chapter13', name: 'Business_Step3', component: require('./components/Books/PrototypeBusiness/BusinessStep3/Chapter13.vue').default},
{path: '/PrototypeBusiness/BusinessStep3/chapter14', name: 'Business_Step3', component: require('./components/Books/PrototypeBusiness/BusinessStep3/Chapter14.vue').default},
{path: '/PrototypeBusiness/BusinessStep3/chapter15', name: 'Business_Step3', component: require('./components/Books/PrototypeBusiness/BusinessStep3/Chapter15.vue').default},
{path: '/PrototypeBusiness/BusinessStep3/chapter16', name: 'Business_Step3', component: require('./components/Books/PrototypeBusiness/BusinessStep3/Chapter16.vue').default},
{path: '/PrototypeBusiness/BusinessStep3/chapter17', name: 'Business_Step3', component: require('./components/Books/PrototypeBusiness/BusinessStep3/Chapter17.vue').default},
{path: '/PrototypeBusiness/BusinessStep3/chapter18', name: 'Business_Step3', component: require('./components/Books/PrototypeBusiness/BusinessStep3/Chapter18.vue').default},
{path: '/PrototypeBusiness/BusinessStep3/chapter19', name: 'Business_Step3', component: require('./components/Books/PrototypeBusiness/BusinessStep3/Chapter19.vue').default},
{path: '/PrototypeBusiness/BusinessStep3/chapter20', name: 'Business_Step3', component: require('./components/Books/PrototypeBusiness/BusinessStep3/Chapter20.vue').default},
//Business Step 4
{path: '/PrototypeBusiness/BusinessStep4/chapter1', name: 'Business_Step4', component: require('./components/Books/PrototypeBusiness/BusinessStep4/Chapter1.vue').default},
{path: '/PrototypeBusiness/BusinessStep4/chapter2', name: 'Business_Step4', component: require('./components/Books/PrototypeBusiness/BusinessStep4/Chapter2.vue').default},
{path: '/PrototypeBusiness/BusinessStep4/chapter3', name: 'Business_Step4', component: require('./components/Books/PrototypeBusiness/BusinessStep4/Chapter3.vue').default},
{path: '/PrototypeBusiness/BusinessStep4/chapter4', name: 'Business_Step4', component: require('./components/Books/PrototypeBusiness/BusinessStep4/Chapter4.vue').default},
{path: '/PrototypeBusiness/BusinessStep4/chapter5', name: 'Business_Step4', component: require('./components/Books/PrototypeBusiness/BusinessStep4/Chapter5.vue').default},
{path: '/PrototypeBusiness/BusinessStep4/chapter6', name: 'Business_Step4', component: require('./components/Books/PrototypeBusiness/BusinessStep4/Chapter6.vue').default},
{path: '/PrototypeBusiness/BusinessStep4/chapter7', name: 'Business_Step4', component: require('./components/Books/PrototypeBusiness/BusinessStep4/Chapter7.vue').default},
{path: '/PrototypeBusiness/BusinessStep4/chapter8', name: 'Business_Step4', component: require('./components/Books/PrototypeBusiness/BusinessStep4/Chapter8.vue').default},
{path: '/PrototypeBusiness/BusinessStep4/chapter9', name: 'Business_Step4', component: require('./components/Books/PrototypeBusiness/BusinessStep4/Chapter9.vue').default},
{path: '/PrototypeBusiness/BusinessStep4/chapter10', name: 'Business_Step4', component: require('./components/Books/PrototypeBusiness/BusinessStep4/Chapter10.vue').default},
{path: '/PrototypeBusiness/BusinessStep4/chapter11', name: 'Business_Step4', component: require('./components/Books/PrototypeBusiness/BusinessStep4/Chapter11.vue').default},
{path: '/PrototypeBusiness/BusinessStep4/chapter12', name: 'Business_Step4', component: require('./components/Books/PrototypeBusiness/BusinessStep4/Chapter12.vue').default},
{path: '/PrototypeBusiness/BusinessStep4/chapter13', name: 'Business_Step4', component: require('./components/Books/PrototypeBusiness/BusinessStep4/Chapter13.vue').default},
{path: '/PrototypeBusiness/BusinessStep4/chapter14', name: 'Business_Step4', component: require('./components/Books/PrototypeBusiness/BusinessStep4/Chapter14.vue').default},
{path: '/PrototypeBusiness/BusinessStep4/chapter15', name: 'Business_Step4', component: require('./components/Books/PrototypeBusiness/BusinessStep4/Chapter15.vue').default},
{path: '/PrototypeBusiness/BusinessStep4/chapter16', name: 'Business_Step4', component: require('./components/Books/PrototypeBusiness/BusinessStep4/Chapter16.vue').default},
{path: '/PrototypeBusiness/BusinessStep4/chapter17', name: 'Business_Step4', component: require('./components/Books/PrototypeBusiness/BusinessStep4/Chapter17.vue').default},
{path: '/PrototypeBusiness/BusinessStep4/chapter18', name: 'Business_Step4', component: require('./components/Books/PrototypeBusiness/BusinessStep4/Chapter18.vue').default},
{path: '/PrototypeBusiness/BusinessStep4/chapter19', name: 'Business_Step4', component: require('./components/Books/PrototypeBusiness/BusinessStep4/Chapter19.vue').default},
{path: '/PrototypeBusiness/BusinessStep4/chapter20', name: 'Business_Step4', component: require('./components/Books/PrototypeBusiness/BusinessStep4/Chapter20.vue').default},

//Dialogue Books Step1
{path: '/DialogueBooks/DialogueLevel1/chapter1', name: 'Dialogue_Books1', component: require('./components/Books/DialogueBooks/DialogueLevel1/Chapter1.vue').default},
{path: '/DialogueBooks/DialogueLevel1/chapter2', name: 'Dialogue_Books1', component: require('./components/Books/DialogueBooks/DialogueLevel1/Chapter2.vue').default},
{path: '/DialogueBooks/DialogueLevel1/chapter3', name: 'Dialogue_Books1', component: require('./components/Books/DialogueBooks/DialogueLevel1/Chapter3.vue').default},
{path: '/DialogueBooks/DialogueLevel1/chapter4', name: 'Dialogue_Books1', component: require('./components/Books/DialogueBooks/DialogueLevel1/Chapter4.vue').default},
{path: '/DialogueBooks/DialogueLevel1/chapter5', name: 'Dialogue_Books1', component: require('./components/Books/DialogueBooks/DialogueLevel1/Chapter5.vue').default},
{path: '/DialogueBooks/DialogueLevel1/chapter6', name: 'Dialogue_Books1', component: require('./components/Books/DialogueBooks/DialogueLevel1/Chapter6.vue').default},
{path: '/DialogueBooks/DialogueLevel1/chapter7', name: 'Dialogue_Books1', component: require('./components/Books/DialogueBooks/DialogueLevel1/Chapter7.vue').default},
{path: '/DialogueBooks/DialogueLevel1/chapter8', name: 'Dialogue_Books1', component: require('./components/Books/DialogueBooks/DialogueLevel1/Chapter8.vue').default},
{path: '/DialogueBooks/DialogueLevel1/chapter9', name: 'Dialogue_Books1', component: require('./components/Books/DialogueBooks/DialogueLevel1/Chapter9.vue').default},
{path: '/DialogueBooks/DialogueLevel1/chapter10', name: 'Dialogue_Books1', component: require('./components/Books/DialogueBooks/DialogueLevel1/Chapter10.vue').default},
{path: '/DialogueBooks/DialogueLevel1/chapter11', name: 'Dialogue_Books1', component: require('./components/Books/DialogueBooks/DialogueLevel1/Chapter11.vue').default},
{path: '/DialogueBooks/DialogueLevel1/chapter12', name: 'Dialogue_Books1', component: require('./components/Books/DialogueBooks/DialogueLevel1/Chapter12.vue').default},
{path: '/DialogueBooks/DialogueLevel1/chapter13', name: 'Dialogue_Books1', component: require('./components/Books/DialogueBooks/DialogueLevel1/Chapter13.vue').default},
{path: '/DialogueBooks/DialogueLevel1/chapter14', name: 'Dialogue_Books1', component: require('./components/Books/DialogueBooks/DialogueLevel1/Chapter14.vue').default},
{path: '/DialogueBooks/DialogueLevel1/chapter15', name: 'Dialogue_Books1', component: require('./components/Books/DialogueBooks/DialogueLevel1/Chapter15.vue').default},
{path: '/DialogueBooks/DialogueLevel1/chapter16', name: 'Dialogue_Books1', component: require('./components/Books/DialogueBooks/DialogueLevel1/Chapter16.vue').default},
{path: '/DialogueBooks/DialogueLevel1/chapter17', name: 'Dialogue_Books1', component: require('./components/Books/DialogueBooks/DialogueLevel1/Chapter17.vue').default},
{path: '/DialogueBooks/DialogueLevel1/chapter18', name: 'Dialogue_Books1', component: require('./components/Books/DialogueBooks/DialogueLevel1/Chapter18.vue').default},
{path: '/DialogueBooks/DialogueLevel1/chapter19', name: 'Dialogue_Books1', component: require('./components/Books/DialogueBooks/DialogueLevel1/Chapter19.vue').default},
{path: '/DialogueBooks/DialogueLevel1/chapter20', name: 'Dialogue_Books1', component: require('./components/Books/DialogueBooks/DialogueLevel1/Chapter20.vue').default},

//Dialogue Books Step2
{path: '/DialogueBooks/DialogueLevel2/chapter1', name: 'Dialogue_Books2', component: require('./components/Books/DialogueBooks/DialogueLevel2/Chapter1.vue').default},
{path: '/DialogueBooks/DialogueLevel2/chapter2', name: 'Dialogue_Books2', component: require('./components/Books/DialogueBooks/DialogueLevel2/Chapter2.vue').default},
{path: '/DialogueBooks/DialogueLevel2/chapter3', name: 'Dialogue_Books2', component: require('./components/Books/DialogueBooks/DialogueLevel2/Chapter3.vue').default},
{path: '/DialogueBooks/DialogueLevel2/chapter4', name: 'Dialogue_Books2', component: require('./components/Books/DialogueBooks/DialogueLevel2/Chapter4.vue').default},
{path: '/DialogueBooks/DialogueLevel2/chapter5', name: 'Dialogue_Books2', component: require('./components/Books/DialogueBooks/DialogueLevel2/Chapter5.vue').default},
{path: '/DialogueBooks/DialogueLevel2/chapter6', name: 'Dialogue_Books2', component: require('./components/Books/DialogueBooks/DialogueLevel2/Chapter6.vue').default},
{path: '/DialogueBooks/DialogueLevel2/chapter7', name: 'Dialogue_Books2', component: require('./components/Books/DialogueBooks/DialogueLevel2/Chapter7.vue').default},
{path: '/DialogueBooks/DialogueLevel2/chapter8', name: 'Dialogue_Books2', component: require('./components/Books/DialogueBooks/DialogueLevel2/Chapter8.vue').default},
{path: '/DialogueBooks/DialogueLevel2/chapter9', name: 'Dialogue_Books2', component: require('./components/Books/DialogueBooks/DialogueLevel2/Chapter9.vue').default},
{path: '/DialogueBooks/DialogueLevel2/chapter10', name: 'Dialogue_Books2', component: require('./components/Books/DialogueBooks/DialogueLevel2/Chapter10.vue').default},
],
scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}

})


export default router
