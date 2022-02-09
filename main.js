 function getRandomValue(min, max) {
     return Math.floor(Math.random() * (max - min)) + min;
 }
 const app = Vue.createApp({
     data() {
         return {
             playerHealth: 100,
             monstorHealth: 100,
             roundCounter: 0,
             winner:null
         }
     },
     computed: {
         playerBarStyle() {
             return {
                 width: this.playerHealth + '%'
             }
         },
         monstorBarStyle() {
             return {
                 width: this.monstorHealth + '%'
             }
         },
         specialAttack() {

             return this.roundCounter % 3 !== 0;
         }
     },
     watch: {
         playerHealth(value) {
             if (value <= 0 && this.monstorHealth < 0) {

             } else if (value <= 0) {

             }

         },
         monstorHealth(value) {
             if (value <= 0 && this.playerHealth < 0) {

             } else if (value <= 0) {

             }
         }
     },
     methods: {
         AttackMonstor() {
             this.roundCounter++;
             const attackValue = getRandomValue(5, 12);
             this.monstorHealth -= attackValue;
             this.AttackPlayer();
         },
         AttackPlayer() {
             const attackValue = getRandomValue(8, 15);
             this.playerHealth -= attackValue;
         },
         superAttack() {
             this.roundCounter++;
             const attackValue = getRandomValue(10, 25);
             this.monstorHealth -= attackValue;
             this.AttackPlayer();
         },
         heal() {
             this.roundCounter++;
             const healValue = getRandomValue(8, 20);
             if (healValue + this.playerHealth > 100) {
                 playerHealth = 100;
             } else {
                 this.playerHealth += healValue;
             }
             this.AttackPlayer();
         }
     }
 })
 app.mount('#game')