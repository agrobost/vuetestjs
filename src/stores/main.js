import { defineStore } from "pinia";
import axios from "axios";

export const useStore = defineStore("main", {
  state: () => ({
    counter: 1,
    prizes: null,
    loading: true,
    hasError: false,
    error: null,
  }),
  actions: {
    increment() {
      this.count++;
    },
    async getPrizes() {
      function sleep(ms) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
      }
      await sleep(1000);
      try {
        const response = await axios.get("https://api.agify.io/?name=bella", {
          firstName: "Fred",
          lastName: "Flintstone",
        });
        //this.prizes = response.data;
        this.prizes = `{"success":true,"drawId":188601,"prizes":[{"rank":1,"label":"Une voiture","desc":"En location offerte jusqu’à 24 mois, hors frais d'assurance, entretien et remise en état. Offre réservée aux clients VIP GIFI, voir conditions en magasin.","claimMethod":"Vous serez contacté très prochainement pour votre lot.","merchantUrl":null,"infoAction":null,"infoActionLbl":null,"imgUrl":"https://gilo-prize-pics.s3-eu-west-1.amazonaws.com/HD/gifi/gilo_01_car2.png","imgUrlLarge":"https://gilo-prize-pics.s3-eu-west-1.amazonaws.com/HD/gifi/gilo_01_car2.png","homeImageUrl":"https://gilo-prize-pics.s3-eu-west-1.amazonaws.com/HD/gifi/home_car2.png","homeFooterTxt":"* location offerte de 12 à 24 mois, hors frais d'assurance, entretien et remise en état, voir règlement du jeu","offerImgUrl":"","gain_def_id":"284","prize_id":"1888","prize_qty":"1.00","prize_currency":"EUR","cat":"coupon","nbMjTicket":0,"nbPoints":0,"showResultFlg":"Y","disclaimer":null,"compo":[{"label":"Une voiture","desc":"En location offerte jusqu’à 24 mois, hors frais d'assurance, entretien et remise en état. Offre réservée aux clients VIP GIFI, voir conditions en magasin.","claimMethod":"Vous serez contacté très prochainement pour votre lot.","merchantUrl":null,"infoAction":null,"infoActionLbl":null,"imgUrl":"https://gilo-prize-pics.s3-eu-west-1.amazonaws.com/HD/gifi/gilo_01_car2.png","imgUrlLarge":"https://gilo-prize-pics.s3-eu-west-1.amazonaws.com/HD/gifi/gilo_01_car2.png","prize_id":"1888","cat":"coupon"}]},{"rank":2,"label":"Carte cadeau GIFI 5 €","desc":"Carte cadeau de 5 € sans condition dans le magasin GIFI de votre choix. Offre réservée aux clients VIP GIFI, voir conditions en magasin.","claimMethod":"Sans condition d'achat.","merchantUrl":null,"infoAction":null,"infoActionLbl":null,"imgUrl":"https://gilo-prize-pics.s3-eu-west-1.amazonaws.com/HD/gifi/gilo_06_CC05.png","imgUrlLarge":"https://gilo-prize-pics.s3-eu-west-1.amazonaws.com/HD/gifi/gilo_06_CC05.png","homeImageUrl":"","homeFooterTxt":null,"offerImgUrl":"","gain_def_id":"163","prize_id":"2361","prize_qty":"1.00","prize_currency":"EUR","cat":"coupon","nbMjTicket":0,"nbPoints":0,"showResultFlg":"Y","disclaimer":null,"compo":[{"label":"Carte cadeau GIFI 5 €","desc":"Carte cadeau de 5 € sans condition dans le magasin GIFI de votre choix. Offre réservée aux clients VIP GIFI, voir conditions en magasin.","claimMethod":"Sans condition d'achat.","merchantUrl":null,"infoAction":null,"infoActionLbl":null,"imgUrl":"https://gilo-prize-pics.s3-eu-west-1.amazonaws.com/HD/gifi/gilo_06_CC05.png","imgUrlLarge":"https://gilo-prize-pics.s3-eu-west-1.amazonaws.com/HD/gifi/gilo_06_CC05.png","prize_id":"2361","cat":"coupon"}]},{"rank":3,"label":"Bon d'achat GIFI 10 €","desc":"Bon de réduction de 10 € avec minimum d'achat de 50 € <color=#FF0000>hors éco participation</color> dans le magasin GIFI de votre choix. Offre réservée aux clients VIP GIFI, voir conditions en magasin.","claimMethod":"Montant d'achat minimum : 50 € <color=#FF0000>hors éco participation</color>.\\n Valable sur ouverture de l'application en caisse et présentation de ce bon.","merchantUrl":null,"infoAction":null,"infoActionLbl":null,"imgUrl":"https://gilo-prize-pics.s3-eu-west-1.amazonaws.com/HD/gifi/gilo_06_BA_10_50.png","imgUrlLarge":"https://gilo-prize-pics.s3-eu-west-1.amazonaws.com/HD/gifi/gilo_06_BA_10_50.png","homeImageUrl":"","homeFooterTxt":null,"offerImgUrl":"","gain_def_id":"161","prize_id":"2362","prize_qty":"1.00","prize_currency":"EUR","cat":"coupon","nbMjTicket":0,"nbPoints":0,"showResultFlg":"Y","disclaimer":null,"compo":[{"label":"Bon d'achat GIFI 10 €","desc":"Bon de réduction de 10 € avec minimum d'achat de 50 € <color=#FF0000>hors éco participation</color> dans le magasin GIFI de votre choix. Offre réservée aux clients VIP GIFI, voir conditions en magasin.","claimMethod":"Montant d'achat minimum : 50 € <color=#FF0000>hors éco participation</color>.\\n Valable sur ouverture de l'application en caisse et présentation de ce bon.","merchantUrl":null,"infoAction":null,"infoActionLbl":null,"imgUrl":"https://gilo-prize-pics.s3-eu-west-1.amazonaws.com/HD/gifi/gilo_06_BA_10_50.png","imgUrlLarge":"https://gilo-prize-pics.s3-eu-west-1.amazonaws.com/HD/gifi/gilo_06_BA_10_50.png","prize_id":"2362","cat":"coupon"}]},{"rank":4,"label":"Le produit de votre choix offert dans la zone 1,2,3 € \\n<size=32>Sous condition d'achat.</size>","desc":"+ de 1000 références au choix à l’entrée de votre magasin ou en Click&Collect.\\nRemis sous condition d’achat d'un minimum de 5€.\\nOffre réservée aux clients VIP GiFi, voir cond. en mag.","claimMethod":"Valable sur ouverture de l’application en caisse et présentation de ce bon, et à condition d’effectuer un achat d’un minimum de 5€.","merchantUrl":"https://glprodk.gerwinsoftware.com/to?userId=$USERID&redirId=1439","infoAction":null,"infoActionLbl":null,"imgUrl":"https://gilo-prize-pics.s3-eu-west-1.amazonaws.com/HD/gifi/gilo_04_zone123.png","imgUrlLarge":"https://gilo-prize-pics.s3-eu-west-1.amazonaws.com/HD/gifi/gilo_04_zone123.png","homeImageUrl":"","homeFooterTxt":null,"offerImgUrl":"","gain_def_id":"6","prize_id":"1890","prize_qty":"1.00","prize_currency":"EUR","cat":"coupon","nbMjTicket":0,"nbPoints":0,"showResultFlg":"Y","disclaimer":null,"compo":[{"label":"Le produit de votre choix offert dans la zone 1,2,3 € \\n<size=32>Sous condition d'achat.</size>","desc":"+ de 1000 références au choix à l’entrée de votre magasin ou en Click&Collect.\\nRemis sous condition d’achat d'un minimum de 5€.\\nOffre réservée aux clients VIP GiFi, voir cond. en mag.","claimMethod":"Valable sur ouverture de l’application en caisse et présentation de ce bon, et à condition d’effectuer un achat d’un minimum de 5€.","merchantUrl":"https://glprodk.gerwinsoftware.com/to?userId=$USERID&redirId=1439","infoAction":null,"infoActionLbl":null,"imgUrl":"https://gilo-prize-pics.s3-eu-west-1.amazonaws.com/HD/gifi/gilo_04_zone123.png","imgUrlLarge":"https://gilo-prize-pics.s3-eu-west-1.amazonaws.com/HD/gifi/gilo_04_zone123.png","prize_id":"1890","cat":"coupon"}]},{"rank":5,"label":"Bon d'achat GIFI 5 €","desc":"Bon de réduction de 5 €  avec minimum d'achat de 40 € <color=#FF0000>hors éco participation</color> dans le magasin GIFI de votre choix. Offre réservée aux clients VIP GIFI, voir conditions en magasin.","claimMethod":"Montant d'achat minimum : 40 € <color=#FF0000>hors éco participation</color>.\\n Valable sur ouverture de l'application en caisse et présentation de ce bon.","merchantUrl":null,"infoAction":null,"infoActionLbl":null,"imgUrl":"https://gilo-prize-pics.s3-eu-west-1.amazonaws.com/HD/gifi/gilo_06_BA_05_40.png","imgUrlLarge":"https://gilo-prize-pics.s3-eu-west-1.amazonaws.com/HD/gifi/gilo_06_BA_05_40.png","homeImageUrl":"","homeFooterTxt":null,"offerImgUrl":"","gain_def_id":"162","prize_id":"2363","prize_qty":"1.00","prize_currency":"EUR","cat":"coupon","nbMjTicket":0,"nbPoints":0,"showResultFlg":"Y","disclaimer":null,"compo":[{"label":"Bon d'achat GIFI 5 €","desc":"Bon de réduction de 5 €  avec minimum d'achat de 40 € <color=#FF0000>hors éco participation</color> dans le magasin GIFI de votre choix. Offre réservée aux clients VIP GIFI, voir conditions en magasin.","claimMethod":"Montant d'achat minimum : 40 € <color=#FF0000>hors éco participation</color>.\\n Valable sur ouverture de l'application en caisse et présentation de ce bon.","merchantUrl":null,"infoAction":null,"infoActionLbl":null,"imgUrl":"https://gilo-prize-pics.s3-eu-west-1.amazonaws.com/HD/gifi/gilo_06_BA_05_40.png","imgUrlLarge":"https://gilo-prize-pics.s3-eu-west-1.amazonaws.com/HD/gifi/gilo_06_BA_05_40.png","prize_id":"2363","cat":"coupon"}]}]}`;
      } catch (error) {
        this.hasError = true;
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
  getters: {
    doubleCount: (state) => state.counter * 2,
    doubleCountPlusOne() {
      // autocompletion ✨
      return this.doubleCount + 1;
    },
  },
});
