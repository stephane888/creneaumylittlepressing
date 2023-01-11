"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkcreneaux_reservation"] = (typeof self !== 'undefined' ? self : this)["webpackChunkcreneaux_reservation"] || []).push([[58],{

/***/ 3058:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ UserCreneau; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/UserCreneau.vue?vue&type=template&id=5983a522&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "creneaux-mbt"
  }, [_c('div', {
    staticClass: "container first-block",
    attrs: {
      "currentCreneauType": _vm.currentCreneauType
    }
  }, [_c('div', {
    staticClass: "creneaux-mbt--block mt-5"
  }, [_c('app-title'), _vm.alert_message && _vm.alert_message != '' ? _c('div', {
    staticClass: "alert alert-danger"
  }, [_vm._v(" " + _vm._s(_vm.alert_message) + " ")]) : _vm._e(), _c('div', {
    staticClass: "block-left"
  }, [_c('tab-option')], 1), _c('div', {
    staticClass: "block-border"
  }, [_c('div', {
    staticClass: "row font-weight-bold type-livraison mb-2"
  }, [_c('inline-description')], 1), _c('div', {
    staticClass: "row d-flex justify-content-start commande-detail mb-5"
  }, [_c('div', {
    staticClass: "rectangle rond-left rond-right mx-3 mx-md-0 mb-3 mb-md-0 ml-md-5 mr-lg-5 pt-3 pl-3 pr-3 col-md-3"
  }, [_c('div', {
    staticClass: "h2 cursor-pointer"
  }, [_vm._v("ADRESSE")]), _c('div', {
    staticClass: "d-flex justify-content-between justify-content-md-start align-items-center"
  }, [_c('mapGoogle'), _c('div', {
    staticClass: "icone-map"
  })], 1)]), _c('div', {
    staticClass: "col-md-7"
  }, [_c('div', {
    staticClass: "row ml-md-4 h-100"
  }, [_c('creneau', {
    attrs: {
      "title": "Collecte",
      "type": "collecte"
    }
  }), _c('creneau', {
    attrs: {
      "title": "Livraison",
      "classes": "rond-right",
      "type": "livraison"
    }
  })], 1)])])])], 1)])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(3822);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/creneau/AppTitle.vue?vue&type=script&lang=js&

/* harmony default export */ var AppTitlevue_type_script_lang_js_ = ({
  name: "AppTitle",
  computed: {
    ...(0,vuex_esm/* mapState */.rn)(["creneauConfigs"])
  },
  render(createElement) {
    const elt = createElement;
    const content = this.creneauConfigs.title;
    const attr = {
      class: {
        "text-left": true,
        "font-weight-bold": true
      }
    };
    const titre = [elt("h1", attr, content)];
    return elt("div", titre);
  }
});
;// CONCATENATED MODULE: ./src/App/components/creneau/AppTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var creneau_AppTitlevue_type_script_lang_js_ = (AppTitlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/App/components/creneau/AppTitle.vue
var AppTitle_render, AppTitle_staticRenderFns
;



/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  creneau_AppTitlevue_type_script_lang_js_,
  AppTitle_render,
  AppTitle_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AppTitle = (component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/creneau/InlineDescription.vue?vue&type=template&id=43d28d6a&
var InlineDescriptionvue_type_template_id_43d28d6a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-12 width-100 d-flex flex-wrap mt-3 mb-3 font-weight-bold type-livraison",
    domProps: {
      "innerHTML": _vm._s(_vm.activeTabOption)
    }
  });
};
var InlineDescriptionvue_type_template_id_43d28d6a_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/creneau/InlineDescription.vue?vue&type=script&lang=js&

/* harmony default export */ var InlineDescriptionvue_type_script_lang_js_ = ({
  name: "InlineDesc",
  computed: {
    ...(0,vuex_esm/* mapGetters */.Se)(["activeTabOption"])
  }
});
;// CONCATENATED MODULE: ./src/App/components/creneau/InlineDescription.vue?vue&type=script&lang=js&
 /* harmony default export */ var creneau_InlineDescriptionvue_type_script_lang_js_ = (InlineDescriptionvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/App/components/creneau/InlineDescription.vue





/* normalize component */
;
var InlineDescription_component = (0,componentNormalizer/* default */.Z)(
  creneau_InlineDescriptionvue_type_script_lang_js_,
  InlineDescriptionvue_type_template_id_43d28d6a_render,
  InlineDescriptionvue_type_template_id_43d28d6a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InlineDescription = (InlineDescription_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/creneau/TabOption.vue?vue&type=template&id=ae3a7002&
var TabOptionvue_type_template_id_ae3a7002_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "first-row"
  }, _vm._l(_vm.creneauType, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "option btn",
      class: item.active ? 'option-badge' : '',
      on: {
        "click": function ($event) {
          return _vm.SelectTypeTab(index);
        }
      }
    }, [_c('div', {
      staticClass: "mx-auto h2 titre-tab"
    }, [_vm._v(" " + _vm._s(item.titre) + " "), index > 0 ? _c('span', {
      staticClass: "small small-text d-block"
    }, [_vm._v(" " + _vm._s(item.montant) + " ")]) : _vm._e()])]);
  }), 0);
};
var TabOptionvue_type_template_id_ae3a7002_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/creneau/TabOption.vue?vue&type=script&lang=js&

/* harmony default export */ var TabOptionvue_type_script_lang_js_ = ({
  name: "SelectionHoraire",
  computed: {
    ...(0,vuex_esm/* mapState */.rn)(["creneauType"])
  },
  methods: {
    SelectTypeTab(index) {
      this.$store.dispatch("SelectTypeTab", index);
    }
  }
});
;// CONCATENATED MODULE: ./src/App/components/creneau/TabOption.vue?vue&type=script&lang=js&
 /* harmony default export */ var creneau_TabOptionvue_type_script_lang_js_ = (TabOptionvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/App/components/creneau/TabOption.vue





/* normalize component */
;
var TabOption_component = (0,componentNormalizer/* default */.Z)(
  creneau_TabOptionvue_type_script_lang_js_,
  TabOptionvue_type_template_id_ae3a7002_render,
  TabOptionvue_type_template_id_ae3a7002_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TabOption = (TabOption_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/creneau/map-google.vue?vue&type=template&id=36b84a03&
var map_googlevue_type_template_id_36b84a03_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "h1 cursor-pointer"
  }), _c('p', {
    staticClass: "cursor-pointer"
  }), !_vm.location.city_on_map && !_vm.location.locality ? _c('span', {
    staticClass: "btn option-badge mt-4 mb-3",
    on: {
      "click": _vm.openPopupMap
    }
  }, [_vm._v(" Ajouter une adresse ")]) : _vm._e(), _vm.location.current_address !== '' ? _c('div', {
    staticClass: "h1 cursor-pointer",
    on: {
      "click": _vm.openPopupMap
    }
  }, [_vm._v(" " + _vm._s(_vm.location.locality) + " ")]) : _vm._e(), _vm.location.current_address !== '' ? _c('p', {
    staticClass: "cursor-pointer"
  }, [_vm._v(" " + _vm._s(_vm.location.current_address) + " ")]) : _vm._e(), _c('AppPopUpMap', {
    ref: "apppopupmap",
    attrs: {
      "etape-checkout": false,
      "action-after": false
    },
    on: {
      "update_location": _vm.update_location
    }
  })], 1);
};
var map_googlevue_type_template_id_36b84a03_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../map-google-location/src/AppPopUpMap.vue?vue&type=template&id=e610e3a0&scoped=true&
var AppPopUpMapvue_type_template_id_e610e3a0_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('map-google', {
    ref: "mapgoogle",
    attrs: {
      "configs": _vm.configs,
      "etape-checkout": _vm.etapeCheckout,
      "action-after": _vm.actionAfter
    },
    on: {
      "update_location": _vm.update_location
    }
  })], 1);
};
var AppPopUpMapvue_type_template_id_e610e3a0_scoped_true_staticRenderFns = [];

// EXTERNAL MODULE: ../map-google-location/src/store/index.js + 1 modules
var store = __webpack_require__(4888);
// EXTERNAL MODULE: ../map-google-location/node_modules/vuex/dist/vuex.esm.js
var dist_vuex_esm = __webpack_require__(1319);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../map-google-location/src/components/mapgoogle.vue?vue&type=template&id=6acee705&
var mapgooglevue_type_template_id_6acee705_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('section', {
    staticClass: "modal micromodal-slide",
    attrs: {
      "id": "map-popup-wbu"
    }
  }, [_c('div', {
    staticClass: "modal__overlay"
  }, [_c('div', {
    staticClass: "modal__container",
    attrs: {
      "role": "dialog",
      "aria-modal": "true",
      "aria-labelledby": "modal-1-title"
    }
  }, [_c('header', {
    staticClass: "modal__header"
  }, [_c('h2', {
    staticClass: "modal__title",
    attrs: {
      "id": "modal-1-title"
    }
  }, [_vm._v(" " + _vm._s(_vm.configs.titre_map.value) + " ")]), _c('a', {
    staticClass: "modal__close",
    attrs: {
      "href": "#",
      "rel": "modal:close"
    },
    on: {
      "click": function ($event) {
        return _vm.micromodal.close('map-popup-wbu');
      }
    }
  })]), _c('main', {
    staticClass: "modal__content",
    attrs: {
      "id": "modal-1-content"
    }
  }, [_c('div', {
    staticClass: "m-0 p-0 container-map"
  }, [_c('div', {
    attrs: {
      "id": "map-display-wbu"
    }
  }), _c('div', {
    staticClass: "text-over-lay"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.current_address,
      expression: "current_address"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "map-input-over",
      "type": "text",
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": _vm.current_address
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.current_address = $event.target.value;
      }
    }
  })]), _c('div', {
    staticClass: "center-marker"
  }), _c('div', {
    staticClass: "address-confirm"
  }, [_c('button', {
    staticClass: "btn btn-lg bg-cl1",
    on: {
      "click": _vm.save_localisation_cookie
    }
  }, [_vm._v(" Confirmer l'adresse ")])])])])])])])]);
};
var mapgooglevue_type_template_id_6acee705_staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(7658);
// EXTERNAL MODULE: ../map-google-location/node_modules/@googlemaps/js-api-loader/dist/index.esm.js
var index_esm = __webpack_require__(8984);
;// CONCATENATED MODULE: ../map-google-location/src/components/config.js


/* harmony default export */ var config = ({
  apiKey: "AIzaSyDurloZ0-xj8CNrQwkeSc53A-_n35Xji2Y",
  GoogleObejct: null,
  /**
   * On charge la map
   */
  createGoogleObject() {
    const loader = new index_esm/* Loader */.a({
      apiKey: this.apiKey,
      version: "weekly",
      libraries: ["places", "geometry"]
    });
    return new Promise(resolv => {
      loader.load().then(google => {
        this.GoogleObejct = google;
        resolv(google);
      }).catch(e => {
        console.log("Erreur initialisation de la MAP : ", e);
      });
    });
  },
  extractPathForPolygon(geoString) {
    const geojson = JSON.parse(geoString);
    const points = [];
    if (geojson.features && geojson.features[0] && geojson.features[0].geometry && geojson.features[0].geometry.coordinates) {
      for (const i in geojson.features[0].geometry.coordinates[0]) {
        const point = geojson.features[0].geometry.coordinates[0][i];
        points.push({
          lat: point[1],
          lng: point[0]
        });
      }
    }
    return points;
  },
  /**
   * Permet de slpit and trim chaque elment;
   * @param {*} string
   */
  convertNewLineToArray(string, serach = "\n") {
    return string.split(serach).map(item => item.trim());
  }
});
// EXTERNAL MODULE: ../map-google-location/node_modules/micromodal/dist/micromodal.es.js
var micromodal_es = __webpack_require__(3399);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../map-google-location/src/components/mapgoogle.vue?vue&type=script&lang=js&


/* harmony default export */ var mapgooglevue_type_script_lang_js_ = ({
  name: "MapGoogle",
  props: {
    configs: {
      type: Object,
      required: true
    },
    displayMarker: {
      type: Boolean,
      default: true
    },
    image: {
      type: String,
      default: "/localisation/img/marker.png"
    },
    urlGood: {
      type: String,
      default: "/cart"
    },
    urlBad: {
      type: String,
      default: "/pages/map-error"
    },
    etapeCheckout: {
      type: Boolean,
      default: true
    },
    actionAfter: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      id_html: "map-google-field",
      villes: config.convertNewLineToArray(this.configs.villes.value, ";"),
      list_box: config.convertNewLineToArray(this.configs.bps.value),
      micromodal: micromodal_es/* default */.Z,
      map: null,
      lat: 45.7941459,
      lon: 4.68941940000002,
      point_in_polygon: false,
      point_in_ville: false,
      point_in_box: false,
      titre_popup: "Merci de confirmer votre adresse",
      current_address: "",
      valide_text: "Commander maintenant",
      placeholder: "Entrez votre adresse"
    };
  },
  mounted() {
    this.point_in_box = false;
    this.point_in_polygon = false;
    this.point_in_ville = false;
    this.createGoogleObject();
    this.current_address = this.$store.state.location.current_address ? this.$store.state.location.current_address : "";
  },
  methods: {
    openPopupMap() {
      this.micromodal.show("map-popup-wbu");
    },
    closePopupMap() {
      this.micromodal.close("map-popup-wbu");
    },
    /**
     * On charge la map
     */
    createGoogleObject() {
      config.createGoogleObject().then(google => {
        this.GoogleObejct = google;
        this.getPlace();
        this.initMap();
        this.geocoder = new this.GoogleObejct.maps.Geocoder();
      });
    },
    /**
     * Permet d'ajouter la recherche de ville sur le champs qui est rattaché.
     */
    getPlace() {
      var self = this;
      /**
       * Pour obtenir les coordonnées
       * https://www.mapcoordinates.net/fr
       */
      var input = document.querySelector("#map-input-over");
      this.options = {
        componentRestrictions: {
          country: ["fr"]
        },
        types: ["address"],
        strictBounds: true
      };
      const autocomplete = new this.GoogleObejct.maps.places.Autocomplete(input, this.options);
      this.GoogleObejct.maps.event.addListener(autocomplete, "place_changed", function () {
        var place = autocomplete.getPlace();
        if (place && place.formatted_address) {
          self.current_address = place.formatted_address;
          self.city_on_map = place.vicinity;
          self.updateMap(place);
          self.openPopupMap();
        }
      });
    },
    initMap() {
      var self = this;
      var lat = this.lat;
      var lon = this.lon;
      // CrÃ©er l'objet "map" et l'insÃ¨rer dans l'Ã©lÃ©ment HTML qui a l'ID "map"
      this.map = new this.GoogleObejct.maps.Map(document.getElementById("map-display-wbu"), {
        // Nous plaÃ§ons le centre de la carte avec les coordonnÃ©es ci-dessus
        center: new this.GoogleObejct.maps.LatLng(lat, lon),
        // Nous dÃ©finissons le zoom par dÃ©faut
        zoom: 17,
        // Nous dÃ©finissons le type de carte (ici carte routiÃ¨re)
        mapTypeId: this.GoogleObejct.maps.MapTypeId.ROADMAP,
        // Nous activons les options de contrÃ´le de la carte (plan, satellite...)
        mapTypeControl: false,
        // Nous dÃ©sactivons la roulette de souris
        scrollwheel: false,
        mapTypeControlOptions: {
          // Cette option sert Ã  dÃ©finir comment les options se placent
          style: this.GoogleObejct.maps.MapTypeControlStyle.HORIZONTAL_BAR
        },
        // Activation des options de navigation dans la carte (zoom...)
        navigationControl: false,
        panControl: false,
        zoomControl: true,
        streetViewControl: false,
        fullscreenControl: false,
        navigationControlOptions: {
          // Comment ces options doivent-elles s'afficher
          style: this.GoogleObejct.maps.NavigationControlStyle.ZOOM_PAN
        },
        styles: [
        //desactive les localisations.
        /*
        {
          featureType: 'poi',
          elementType: 'labels.icon',
          stylers: [
            {visibility: 'off'}
          ]
        },
        */
        // couleur du texte.
        /*
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [
          	{color: '#ffffff'}
          ]
        },
        */
        {
          featureType: "poi",
          elementType: "labels.text.stroke",
          stylers: [{
            visibility: "off"
          }]
        }, {
          featureType: "landscape.natural",
          elementType: "geometry",
          stylers: [{
            color: "#b8cb92"
          }]
        }, {
          featureType: "landscape.man_made",
          elementType: "geometry",
          stylers: [{
            color: "#ece2d9"
          }]
        }, {
          featureType: "road",
          elementType: "geometry",
          stylers: [{
            color: "#ffffff"
          }]
        }, {
          featureType: "road.highway",
          elementType: "labels",
          stylers: [{
            visibility: "off"
          }]
        }]
      });
      this.setMarker();
      this.map.addListener("dragend", function () {
        window.setTimeout(function () {
          var centerPosition = self.map.getCenter();
          if (centerPosition) {
            self.lat = centerPosition.lat();
            self.lon = centerPosition.lng();
            self.city_on_map = "";
            self.obtenir_address_proche();
          }
        }, 1000);
      });
      this.buildpolygon();
      this.valide_selection();
    },
    updateMap: function (place) {
      if (place.geometry) {
        this.map.panTo(place.geometry.location);
        this.lat = place.geometry.location.lat();
        this.lon = place.geometry.location.lng();
        this.setMarker();
        this.valide_selection();
      }
    },
    valide_selection() {
      this.check_if_new_adress_in_polygon();
      this.check_if_new_adress_in_villes();
      this.check_if_new_adress_in_box();
    },
    obtenir_address_proche() {
      var self = this;
      var latlng = new this.GoogleObejct.maps.LatLng(this.lat, this.lon);
      this.geocoder.geocode({
        location: latlng
      }, function (results, status) {
        if (status == "OK") {
          self.current_address = results[0].formatted_address;
          self.updateMap(results[0]);
          self.getNameVilleFromPlace(results[0]);
        }
      });
    },
    setMarker() {
      if (!this.displayMarker) {
        return false;
      }
      var self = this;
      var lat = this.lat;
      var lon = this.lon;
      // Nous ajoutons un marqueur
      this.marker = new this.GoogleObejct.maps.Marker({
        position: {
          lat: lat,
          lng: lon
        },
        map: self.map,
        icon: this.image
      });
    },
    save_localisation_cookie() {
      if (this.current_address == "") {
        //localStorage.removeItem("wbu_localisation_map");
        this.$store.dispatch("setLocation", "");
        alert("Vous devez definir une adresse");
        return false;
      }
      if (this.point_in_polygon && this.point_in_ville && this.point_in_box) {
        /*
        localStorage.setItem(
          "wbu_localisation_map",
          JSON.stringify(this.current_address)
        );
        localStorage.setItem(
          "wbu_localisation_city",
          JSON.stringify(this.city_on_map)
        );
        localStorage.setItem("wbu_locality", this.locality);
        localStorage.setItem("wbu_route", this.route);
        /** */
        const location = {
          current_address: this.current_address,
          city_on_map: this.city_on_map,
          locality: this.locality,
          route: this.route
        };
        this.$store.dispatch("setLocation", location);
        this.$emit("update_location", location);
        // IMPORTANT;
        //$(document).trigger("adresseUpdate");
        if (this.etapeCheckout) {
          window.location.href = this.urlGood;
        } else {
          document.querySelector(".modal__close").click();
          if (this.actionAfter) {
            document.querySelector(".button.cart-checkout-custom").click();
          }
        }
      } else {
        //localStorage.removeItem("wbu_localisation_map");
        //localStorage.removeItem("wbu_localisation_city");
        // IMPORANT;
        //$(document).trigger("adresseUpdate");
        this.$store.dispatch("setLocation", "");
        window.location.href = this.urlBad;
      }
    },
    /**
     * -
     */
    buildpolygon() {
      this.polygon = new this.GoogleObejct.maps.Polygon({
        path: config.extractPathForPolygon(this.configs.zone_valide.value),
        geodesic: true,
        strokeColor: "#48a0d9",
        strokeOpacity: 0.5,
        strokeWeight: 4,
        fillColor: "#48a0d9",
        fillOpacity: 0.15
      });
      this.polygon.setMap(this.map);
    },
    check_if_new_adress_in_polygon() {
      var latLng = new this.GoogleObejct.maps.LatLng(this.lat, this.lon);
      if (this.GoogleObejct.maps.geometry.poly.containsLocation(latLng, this.polygon)) {
        this.point_in_polygon = true;
      } else {
        this.point_in_polygon = false;
      }
    },
    check_if_new_adress_in_villes() {
      const ville_in_name = () => {
        var view = false;
        if (this.current_address && this.current_address.length > 0) {
          var ar_ville = this.current_address.split(",");
          if (ar_ville[1].length > 0) {
            this.villes.forEach(ville => {
              if (ar_ville[1].indexOf(ville) >= 0) {
                view = true;
              }
            });
          }
        }
        return view;
      };
      //Check if is valide
      if (this.type_limitation != "polygon_ville") {
        this.point_in_ville = true;
        return false;
      }
      if (this.villes.indexOf(this.city_on_map) >= 0) {
        this.point_in_ville = true;
        return true;
      } else if (ville_in_name()) {
        this.point_in_ville = true;
        return true;
      } else {
        this.point_in_ville = false;
      }
    },
    /**
     * -
     */
    check_if_new_adress_in_box() {
      const ville_in_box = () => {
        var view = false;
        if (this.current_address && this.current_address.length > 0) {
          if (this.current_address) {
            this.list_box.forEach(box => {
              if (this.current_address.indexOf(box) >= 0) {
                view = true;
              }
            });
          }
        }
        return view;
      };
      if (this.type_limitation != "polygon_box") {
        this.point_in_box = true;
        return false;
      }
      if (ville_in_box()) {
        this.point_in_box = true;
        return true;
      } else {
        this.point_in_box = false;
        return true;
      }
    },
    /**
     * -
     */
    getNameVilleFromPlace(place) {
      var route = "";
      var locality = "";
      if (place.address_components) {
        for (const i in place.address_components) {
          var components = place.address_components[i];
          if (components.types && components.types.includes("locality") && locality == "") {
            locality = components.long_name;
          }
          if (components.types && components.types.includes("route") && route == "") {
            route = components.long_name;
          }
        }
        this.route = route;
        this.locality = locality;
      }
    }
  }
});
;// CONCATENATED MODULE: ../map-google-location/src/components/mapgoogle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_mapgooglevue_type_script_lang_js_ = (mapgooglevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../map-google-location/src/components/mapgoogle.vue





/* normalize component */
;
var mapgoogle_component = (0,componentNormalizer/* default */.Z)(
  components_mapgooglevue_type_script_lang_js_,
  mapgooglevue_type_template_id_6acee705_render,
  mapgooglevue_type_template_id_6acee705_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mapgoogle = (mapgoogle_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../map-google-location/src/AppPopUpMap.vue?vue&type=script&lang=js&



/* harmony default export */ var AppPopUpMapvue_type_script_lang_js_ = ({
  name: "AppPopUpMap",
  store: store/* default */.Z,
  components: {
    "map-google": mapgoogle
  },
  props: {
    etapeCheckout: {
      type: Boolean,
      required: true
    },
    actionAfter: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    ...(0,dist_vuex_esm/* mapState */.rn)(["configs"])
  },
  methods: {
    openModal() {
      this.$refs.mapgoogle.openPopupMap();
    },
    update_location(l) {
      this.$emit("update_location", l);
    }
  }
});
;// CONCATENATED MODULE: ../map-google-location/src/AppPopUpMap.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_AppPopUpMapvue_type_script_lang_js_ = (AppPopUpMapvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../map-google-location/src/AppPopUpMap.vue?vue&type=style&index=0&id=e610e3a0&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../map-google-location/src/AppPopUpMap.vue?vue&type=style&index=0&id=e610e3a0&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ../map-google-location/src/AppPopUpMap.vue



;


/* normalize component */

var AppPopUpMap_component = (0,componentNormalizer/* default */.Z)(
  src_AppPopUpMapvue_type_script_lang_js_,
  AppPopUpMapvue_type_template_id_e610e3a0_scoped_true_render,
  AppPopUpMapvue_type_template_id_e610e3a0_scoped_true_staticRenderFns,
  false,
  null,
  "e610e3a0",
  null
  
)

/* harmony default export */ var AppPopUpMap = (AppPopUpMap_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/creneau/map-google.vue?vue&type=script&lang=js&


/* harmony default export */ var map_googlevue_type_script_lang_js_ = ({
  name: "MapGoogle",
  components: {
    AppPopUpMap: AppPopUpMap
  },
  computed: {
    ...(0,vuex_esm/* mapState */.rn)(["location"])
  },
  methods: {
    openPopupMap() {
      this.$refs.apppopupmap.openModal();
    },
    update_location(location) {
      console.log(" update_location : ", location);
      this.$store.dispatch("setLocation", location);
    }
  }
});
;// CONCATENATED MODULE: ./src/App/components/creneau/map-google.vue?vue&type=script&lang=js&
 /* harmony default export */ var creneau_map_googlevue_type_script_lang_js_ = (map_googlevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/App/components/creneau/map-google.vue





/* normalize component */
;
var map_google_component = (0,componentNormalizer/* default */.Z)(
  creneau_map_googlevue_type_script_lang_js_,
  map_googlevue_type_template_id_36b84a03_render,
  map_googlevue_type_template_id_36b84a03_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var map_google = (map_google_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/creneau/creneau.vue?vue&type=template&id=10a98a85&
var creneauvue_type_template_id_10a98a85_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "rectangle mx-2 mx-md-0 mb-3 mb-md-0 mx-3 pt-4 pl-sm-3 col-md-6",
    class: _vm.classes
  }, [_c('div', {
    staticClass: "title-creneau h2"
  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
    staticClass: "d-flex justify-content-between justify-content-md-start line-creneau h1"
  }, [_c('hours', {
    attrs: {
      "type": _vm.type
    },
    on: {
      "selectNextDay": _vm.selectNextDay
    }
  }), _c('i', {
    staticClass: "icone-svg mb-md-1 mb-lg-2 cursor-pointer",
    on: {
      "click": function ($event) {
        _vm.showCalandar = !_vm.showCalandar;
      }
    }
  }, [_c('SvgCalandar')], 1)], 1), _c('p', {
    staticClass: "cursor-pointer",
    on: {
      "click": function ($event) {
        _vm.showCalandar = !_vm.showCalandar;
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.appDateDisplay) + " ")]), _vm.showCalandar ? _c('div', {
    staticClass: "over-container-date",
    on: {
      "click": function ($event) {
        _vm.showCalandar = !_vm.showCalandar;
      }
    }
  }) : _vm._e(), _c('calendar', {
    ref: "calendar",
    attrs: {
      "show-calandar": _vm.showCalandar,
      "type": _vm.type
    }
  })], 1);
};
var creneauvue_type_template_id_10a98a85_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/creneau/Hours.vue?vue&type=template&id=9581d0e6&
var Hoursvue_type_template_id_9581d0e6_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "triggerBuilder": _vm.triggerBuilder,
      "TriggerAfterHourBuild": _vm.TriggerAfterHourBuild
    }
  }, [_c('advanced-select', {
    attrs: {
      "disabled": _vm.disabled_creneau,
      "options": _vm.list_creneaux,
      "show-labels": false,
      "searchable": false,
      "placeholder": "00:00 - 00:00",
      "track-by": "begin",
      "open-direction": "bottom"
    },
    scopedSlots: _vm._u([{
      key: "singleLabel",
      fn: function ({
        option
      }) {
        return [_vm._v(" " + _vm._s(option.begin) + " - " + _vm._s(option.end) + " ")];
      }
    }, {
      key: "option",
      fn: function (props) {
        return [_c('span', {
          attrs: {
            "checkstatus": props.option.checkstatus
          }
        }, [_vm._v(" " + _vm._s(props.option.begin) + " - " + _vm._s(props.option.end) + " ")])];
      }
    }]),
    model: {
      value: _vm.current_creneau,
      callback: function ($$v) {
        _vm.current_creneau = $$v;
      },
      expression: "current_creneau"
    }
  }, [_c('template', {
    slot: "noOptions"
  }, [_c('span', [_vm._v(" Aucun créneau disponible à cette date ")])])], 2)], 1);
};
var Hoursvue_type_template_id_9581d0e6_staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vue-multiselect/dist/vue-multiselect.min.js
var vue_multiselect_min = __webpack_require__(396);
var vue_multiselect_min_default = /*#__PURE__*/__webpack_require__.n(vue_multiselect_min);
// EXTERNAL MODULE: ./src/App/js/Utilities.js
var Utilities = __webpack_require__(1092);
// EXTERNAL MODULE: ./src/store/index.js
var src_store = __webpack_require__(4239);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(6797);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
;// CONCATENATED MODULE: ./src/App/components/creneau/js/filtre.js



class filtre {
  constructor(dateMonth, type, creneauConfigs, currentCreneauType, creneauFilters, type_disabled = "days") {
    /**
     * Date de l'application sans les les heures.
     */
    this.dateMonth = dateMonth;
    this.IndexDayDisabled = [];
    this.DaysDisabledDate = [];
    this.DaysDisabledPeriode = [];
    this.location = src_store/* default.state.location */.Z.state.location;
    if (creneauConfigs.days) {
      this.setDaysDisabled(creneauConfigs.days);
    }
    this.type = type;
    this.currentCreneauType = currentCreneauType;
    if (creneauFilters.length) {
      for (const i in creneauFilters) {
        const filter = creneauFilters[i];
        if (filter.type_disabled === type_disabled) {
          this.setDaysDisabledDate(filter.date_desactivee, filter.pobox);
          this.setDaysDisabledPeriode(filter.periode_desactivee, filter.pobox);
        }
      }
    }
  }

  /**
   * Jours desactivés en function de l'indice du jour.
   */
  setDaysDisabled(days) {
    days.forEach(e => {
      if (!e.value) this.IndexDayDisabled.push(e.indice);
    });
  }

  /**
   * Jours desactivés en function des dates.
   */
  setDaysDisabledDate(date_desactivee, pobox) {
    // this.location.current_address
    let inBox = false;
    if (this.location.current_address) {
      pobox.forEach(b => {
        if (this.location.current_address.includes(b.value)) {
          inBox = true;
        }
      });
    }
    if (pobox.length === 0 || inBox) {
      date_desactivee.forEach(e => {
        this.DaysDisabledDate.push(e.date);
      });
    }
  }

  /**
   * Jours desactivés en function des periodes.
   */
  setDaysDisabledPeriode(periode_desactivee, pobox) {
    let inBox = false;
    if (this.location.current_address) {
      pobox.forEach(b => {
        if (this.location.current_address.includes(b.value)) {
          inBox = true;
        }
      });
    }
    if (pobox.length === 0 || inBox) {
      periode_desactivee.forEach(e => {
        if (e.debut !== "" && e.fin !== "") this.DaysDisabledPeriode.push(e);
      });
    }
  }

  /**
   * Permet de valider un date, active ou pas.
   * @param {*} date Doit etre un object moment.
   * @return true pour une date active et false sinon;
   */
  ValidationDay(date) {
    // this.disabledByCodePostal();
    return new Promise(resolvEnd => {
      // permet de dessactiver les jours avant le jour valide par l'application.
      if (date.diff(this.dateMonth, "minute") >= 0) {
        // permet de desactivée en function de l'indice.
        if (this.IndexDayDisabled.includes(date.day())) {
          resolvEnd(this.statusDate(date, false, "default-disable-day"));
        } else {
          /**
           * On verifie le jour  par rapport au tableau des jours desactivées.
           * à ce niveau on desactive en function des dates.
           */
          if (this.DaysDisabledDate.includes(date.format("YYYY-MM-DD"))) {
            resolvEnd(this.statusDate(date, false, "default-disable-date"));
          } else if (this.DaysDisabledPeriode.length) {
            /**
             * à ce niveau, on desactive en function de la periode.
             */
            for (const i in this.DaysDisabledPeriode) {
              const p = this.DaysDisabledPeriode[i];
              const p_d = date.diff(moment_default()(p.debut, "YYYY-MM-DD"), "minute");
              const p_f = date.diff(moment_default()(p.fin, "YYYY-MM-DD"), "minute");
              if (p_d >= 0 && p_f <= 0) {
                resolvEnd(this.statusDate(date, false, "default-disable-periode"));
                break;
              }
              const ii = parseInt(i) + 1;
              if (ii === this.DaysDisabledPeriode.length) {
                resolvEnd(this.statusDate(date, true, "default-actif-periode"));
              }
            }
          } else resolvEnd(this.statusDate(date, true, "default-actif-date"));
        }
      } else {
        resolvEnd(this.statusDate(date, false, "default-disable"));
      }
    });
  }
  disabledByCodePostal() {
    console.log("store : ", src_store/* default.state.location */.Z.state.location);
  }

  /**
   *
   * @param {*} date
   * @param {*} status
   * @param {*} custom_class
   * @param {*} select
   * @returns
   */
  statusDate(date, status, custom_class, select = false) {
    return {
      status: status,
      custom_class: custom_class,
      date: date.date(),
      select: select,
      date_string: date.format("YYYY-MM-DD")
    };
  }
}
/* harmony default export */ var js_filtre = (filtre);
;// CONCATENATED MODULE: ./src/App/components/creneau/js/filterHours.js



// import store from "../../../../store/index";
class filterHours {
  constructor(date, type, creneauFilters, CreneauxExterne = []) {
    this.type = type;
    this.date = date;
    this.filterHours = [];
    this.creneauFilters = creneauFilters;
    this.CreneauxExterne = CreneauxExterne;
  }
  getPlageDate(Filter) {
    this.dateBegin = this.date;
    if (Filter.h_debut != "" && Filter.h_fin != "") {
      const d = Filter.h_debut.split(":");
      const f = Filter.h_fin.split(":");
      if (d[1] && f[1]) {
        this.filterHours.push({
          Filter,
          dateBegin: moment_default()(this.date).set({
            hour: d[0],
            minute: d[1],
            second: 0
          }),
          dateEnd: moment_default()(this.date).set({
            hour: f[0],
            minute: f[1],
            second: 0
          })
        });
      }
    }
  }

  /**
   * On reconstruit le filtre afin d'ameliorer les perfomances.
   */
  async rebuildFilter() {
    for (const i in this.creneauFilters) {
      const Filter = this.creneauFilters[i];
      if (Filter.type_disabled === "hours") {
        if (Filter.h_debut != "" && Filter.h_fin != "") {
          const filterDate = new js_filtre(this.date, this.type, [], [], [Filter], "hours");
          const dayValid = await filterDate.ValidationDay(this.date);
          const d = Filter.h_debut.split(":");
          const f = Filter.h_fin.split(":");
          if (d[1] && f[1]) {
            this.filterHours.push({
              ...Filter,
              dayValid: dayValid.status,
              dateBegin: moment_default()(this.date).set({
                hour: d[0],
                minute: d[1],
                second: 0
              }),
              dateEnd: moment_default()(this.date).set({
                hour: f[0],
                minute: f[1],
                second: 0
              })
            });
          }
        }
      }
    }
  }

  /**
   * permet d'analyser un creneau et de determiner s'il est actif ou pas.
   * @param {*} c_min
   * @param {*} c_max
   * @returns false to not disable creneau and true to disabled this creneau.
   */
  async checkIsDisabled(c_min, c_max) {
    return new Promise(resolv => {
      // desactive les creneaux dont le nombre de reservation est superieur à nombre_max.
      const key = c_min.format("HH:mm") + " - " + c_max.format("HH:mm");
      if (this.CreneauxExterne.includes(key)) {
        resolv(true);
      }
      // si le tableau de filtre est vide, on ne desactive pas.
      if (this.filterHours.length === 0) {
        resolv(false);
      }
      const loop = filter => {
        const c_min_1 = c_min.diff(filter.dateBegin, "minute");
        const c_min_2 = c_min.diff(filter.dateEnd, "minute");
        const c_max_1 = c_max.diff(filter.dateBegin, "minute");
        const c_max_2 = c_max.diff(filter.dateEnd, "minute");
        if (c_min_1 >= 0 && c_min_2 < 0 || c_max_1 > 0 && c_max_2 <= 0 || c_min_2 < 0 && c_max_2 > 0) {
          return true;
        } else {
          return false;
        }
      };
      for (const i in this.filterHours) {
        const filter = this.filterHours[i];
        // Verifie les jours de la semaine.
        if (filter.jours_select.length) {
          if (filter.jours_select.includes(this.date.day())) {
            if (loop(filter) && !filter.dayValid) {
              resolv(true);
              break;
            }
          }
        }
        //
        else {
          if (loop(filter) && !filter.dayValid) {
            resolv(true);
            break;
          }
        }
        const ii = parseInt(i) + 1;
        if (this.filterHours.length === ii) {
          resolv(false);
        }
      }
    });
  }
}
/* harmony default export */ var js_filterHours = (filterHours);
;// CONCATENATED MODULE: ./src/App/components/creneau/js/hours.js



class Hours {
  constructor(date, creneauFilters, creneauConfigs, currentCreneauType, type) {
    this.date = date;
    this.creneauFilters = creneauFilters;
    this.creneauConfigs = creneauConfigs;
    this.currentCreneauType = currentCreneauType;
    this.list_creneaux = [];
    this.type = type;
  }

  /**
   * Recuperer la plage de date du jour.
   */
  getCurrentBandHour() {
    const creneauConfigs = this.creneauConfigs;
    return new Promise(resolv => {
      if (creneauConfigs.days) {
        for (const i in creneauConfigs.days) {
          const d = creneauConfigs.days[i];
          if (d.indice === this.date.day()) {
            resolv(d);
          }
        }
      }
    });
  }

  /**
   * -
   */
  async buildHour(CreneauxExterne = []) {
    const Filter = new js_filterHours(this.date, this.type, this.creneauFilters, CreneauxExterne);
    await Filter.rebuildFilter();
    const d = await this.getCurrentBandHour();
    const h_min = d.debut.split(":");
    const h_max = d.fin.split(":");
    const dateMin = moment_default()(this.date).set({
      hour: h_min[0],
      minute: h_min[1],
      second: 0
    });
    const dateMax = moment_default()(this.date).set({
      hour: h_max[0],
      minute: h_max[1],
      second: 0
    });
    return new Promise(resolv => {
      const addCreneau = () => {
        const endCreneau = moment_default()(dateMin).add(this.currentCreneauType.creneau, "minute");
        if (endCreneau.diff(dateMax) <= 0) {
          // const status = false;
          Filter.checkIsDisabled(dateMin, endCreneau).then(status => {
            const bloc_date = {
              begin: dateMin.format("HH:mm"),
              end: endCreneau.format("HH:mm"),
              $isDisabled: status,
              checkstatus: ""
            };
            if (dateMin.diff(this.date) > 0 && !status) {
              this.list_creneaux.push(bloc_date);
            }
            dateMin.add(this.currentCreneauType.delai_next_creneau, "minute");
            addCreneau();
          });
        } else {
          resolv(true);
        }
      };
      addCreneau();
    });
  }
}
/* harmony default export */ var hours = (Hours);
// EXTERNAL MODULE: ../wbuutilities/index.js + 71 modules
var wbuutilities = __webpack_require__(2420);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/creneau/Hours.vue?vue&type=script&lang=js&






/* harmony default export */ var Hoursvue_type_script_lang_js_ = ({
  name: "HoursComponent",
  components: {
    AdvancedSelect: (vue_multiselect_min_default())
  },
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      current_creneau: "",
      disabled_creneau: false,
      list_creneaux: []
    };
  },
  computed: {
    ...(0,vuex_esm/* mapGetters */.Se)(["appDate"]),
    ...(0,vuex_esm/* mapState */.rn)(["activeType", "creneauConfigs", "creneauFilters", "creneauType", "creneauCollecte", "creneauLivraison", "CreneauxExterne"]),
    WatchDateSelect() {
      if (this.appDate) {
        if (this.type === Utilities/* default.crex1.id */.Z.crex1.id) {
          const crex1H = moment_default()(this.creneauCollecte.date_string, "YYYY-MM-DD");
          if (this.appDate.format("YYYY-MM-DD") == this.creneauCollecte.date_string) {
            crex1H.set(this.getHours);
          }
          return crex1H;
        }
        if (this.type === Utilities/* default.crex2.id */.Z.crex2.id) {
          const crex2H = moment_default()(this.creneauLivraison.date_string, "YYYY-MM-DD").set(this.getHours);
          return crex2H;
        }
      }
      return null;
    },
    /**
     * On recupere l'heure en function de la date encours ou en function de l'heure de creneau collecte ( Cas de la livraison ).
     */
    getHours() {
      if (this.type === Utilities/* default.crex1.id */.Z.crex1.id) {
        return {
          hour: this.appDate.hour(),
          minute: this.appDate.minute() + parseInt(this.creneauConfigs.deccalage_creneau_depart),
          second: this.appDate.second()
        };
      }
      if (this.type === Utilities/* default.crex2.id */.Z.crex2.id && this.creneauCollecte.date) {
        return {
          hour: this.creneauCollecte.date.hour(),
          minute: this.creneauCollecte.date.minute(),
          second: this.creneauCollecte.date.second()
        };
      }
      return null;
    },
    /**
     * -
     */
    currentCreneauType() {
      return this.creneauType[this.activeType];
    },
    /**
     * Recuperer la plage de date du jour.
     */
    getCurrentBandHour() {
      if (this.creneauConfigs.days && this.WatchDateSelect && this.WatchDateSelect._isValid) {
        for (const i in this.creneauConfigs.days) {
          const d = this.creneauConfigs.days[i];
          if (d.indice === this.WatchDateSelect.day()) {
            return d;
          }
        }
      }
      return null;
    },
    /**
     * Declanche le debut de la construction
     */
    triggerBuilder() {
      if (this.getCurrentBandHour) {
        // empty data.
        this.emptyValue();
        //
        this.buildHours();
        return this.getCurrentBandHour;
      }
      return null;
    },
    /**
     * Action apres la construction du formaulaire.
     */
    TriggerAfterHourBuild() {
      if (this.list_creneaux.length) {
        this.selectFirtCreneau();
        return this.list_creneaux;
      }
      return null;
    }
  },
  watch: {
    current_creneau(val) {
      // console.log("watch current_creneau : ", this.type, " :: ", val);
      this.$store.dispatch("SetSelectHour", this.BuildPayload(val));
    }
  },
  methods: {
    selectFirtCreneau() {
      this.current_creneau = this.list_creneaux[0];
    },
    emptyValue() {
      this.current_creneau = false;
      this.list_creneaux = [];
    },
    BuildPayload(val) {
      if (!val) {
        return {
          type: this.type,
          hour: val,
          date: val
        };
      }
      const endCrex = val.begin.split(":");
      return {
        type: this.type,
        hour: val,
        date: moment_default()(this.WatchDateSelect).set({
          hour: endCrex[0],
          minute: endCrex[1],
          secodne: 0
        })
      };
    },
    buildHours() {
      const H = new hours(this.WatchDateSelect, this.creneauFilters, this.creneauConfigs, this.currentCreneauType, this.type);
      // Demande la liste des creneaux deja reservés pour le jour.
      const param = {
        month: this.WatchDateSelect.format("YYYY-MM-DD"),
        shop: wbuutilities/* AjaxBasic.isLocalDev */.EC.isLocalDev ? "my-little-pressing.myshopify.com" : window.ShopId,
        nombre_creneau: this.creneauConfigs.nombre_res_creneau,
        type: this.type
      };
      Utilities/* default.LoadCreneauxExterne */.Z.LoadCreneauxExterne(param).then(resp => {
        console.log(" LoadCreneauxExterne ", this.type, " : ", resp);
        H.buildHour(resp).then(() => {
          this.list_creneaux = H.list_creneaux;
        });
      });
    }
    // buildHoursNone() {
    //   this.list_creneaux = [];
    //   //console.log("getCurrentBandHour : ", this.getCurrentBandHour);
    //   const h_min = this.getCurrentBandHour.debut.split(":");
    //   const h_max = this.getCurrentBandHour.fin.split(":");
    //   const dateMin = moment(this.WatchDateSelect).set({
    //     hour: h_min[0],
    //     minute: h_min[1],
    //     second: 0
    //   });
    //   const dateMax = moment(this.WatchDateSelect).set({
    //     hour: h_max[0],
    //     minute: h_max[1],
    //     second: 0
    //   });
    //   const addCreneau = () => {
    //     const endCreneau = moment(dateMin).add(
    //       this.currentCreneauType.creneau,
    //       "minute"
    //     );
    //     if (endCreneau.diff(dateMax) <= 0) {
    //       //const status = await this.ValidHour(dateMin, endCreneau);
    //       //console.log("status : ", status);
    //       //const status = false;
    //       this.ValidHour(dateMin, endCreneau).then(status => {
    //         var bloc_date = {
    //           begin: dateMin.format("HH:mm"),
    //           end: endCreneau.format("HH:mm"),
    //           $isDisabled: status,
    //           checkstatus: ""
    //         };
    //         if (dateMin.diff(this.WatchDateSelect) > 0 && !status)
    //           this.list_creneaux.push(bloc_date);
    //         dateMin.add(this.currentCreneauType.delai_next_creneau, "minute");
    //         addCreneau();
    //       });
    //     } else {
    //       // Le bascule auto de la date au prochain jour ne fonctionne pas.
    //       setTimeout(() => {
    //         // if (this.list_creneaux.length === 0) this.$emit("selectNextDay", 1);
    //       }, 600);
    //     }
    //   };
    //   addCreneau();
    // },
    // ValidHour(c_min, c_max) {
    //   const H = new Hours(this.WatchDateSelect, this.type, this.creneauFilters);
    //   return new Promise(resolv => {
    //     H.getPlageDate2().then(() => {
    //       H.checkIsDisabled(c_min, c_max).then(resp => {
    //         resolv(resp);
    //       });
    //     });
    //   });
    // }
  }
});
;// CONCATENATED MODULE: ./src/App/components/creneau/Hours.vue?vue&type=script&lang=js&
 /* harmony default export */ var creneau_Hoursvue_type_script_lang_js_ = (Hoursvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/creneau/Hours.vue?vue&type=style&index=0&id=9581d0e6&prod&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/App/components/creneau/Hours.vue?vue&type=style&index=0&id=9581d0e6&prod&lang=css&

;// CONCATENATED MODULE: ./src/App/components/creneau/Hours.vue



;


/* normalize component */

var Hours_component = (0,componentNormalizer/* default */.Z)(
  creneau_Hoursvue_type_script_lang_js_,
  Hoursvue_type_template_id_9581d0e6_render,
  Hoursvue_type_template_id_9581d0e6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var creneau_Hours = (Hours_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/creneau/calendar.vue?vue&type=template&id=1433bd08&
var calendarvue_type_template_id_1433bd08_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showCalandar,
      expression: "showCalandar"
    }],
    staticClass: "container-date flat cercle",
    attrs: {
      "initCreneau": _vm.initCreneau,
      "ReInitCreneauLivraison": _vm.ReInitCreneauLivraison,
      "updateCurrentDateSelect": _vm.updateCurrentDateSelect
    }
  }, [_c('div', {
    staticClass: "single-date-picker__calendar-month-header"
  }, [_c('div', {
    staticClass: "single-date-picker__arrow left",
    on: {
      "click": _vm.previowMonth
    }
  }), _vm.calandarTitle != '' ? _c('div', {
    staticClass: "single-date-picker__year",
    domProps: {
      "innerHTML": _vm._s(_vm.calandarTitle)
    }
  }) : _vm._e(), _c('div', {
    staticClass: "single-date-picker__arrow right",
    on: {
      "click": _vm.nextMonth
    }
  })]), _c('ul', {
    staticClass: "d-flex flex-wrap justify-content-center"
  }, [_vm.showDayLabel ? _c('div', {
    staticClass: "d-flex flex-wrap justify-content-center w-100"
  }, [_c('li', {
    staticClass: "date day"
  }, [_vm._v("Lun")]), _c('li', {
    staticClass: "date day"
  }, [_vm._v("Mar")]), _c('li', {
    staticClass: "date day"
  }, [_vm._v("Mer")]), _c('li', {
    staticClass: "date day"
  }, [_vm._v("Jeu")]), _c('li', {
    staticClass: "date day"
  }, [_vm._v("Ven")]), _c('li', {
    staticClass: "date day"
  }, [_vm._v("Sam")]), _c('li', {
    staticClass: "date day"
  }, [_vm._v("Dim")])]) : _vm._e(), _vm._l(_vm.listCalanderDays, function (date, i) {
    return _c('li', {
      key: i,
      class: ['date', date.status ? 'actif' : 'disable', date.custom_class, date.select ? 'selected' : ''],
      on: {
        "click": function ($event) {
          return _vm.selectDate(date);
        }
      }
    }, [_c('span', {
      domProps: {
        "innerHTML": _vm._s(date.date)
      }
    })]);
  })], 2)]);
};
var calendarvue_type_template_id_1433bd08_staticRenderFns = [];

;// CONCATENATED MODULE: ./src/App/components/creneau/js/calendar.js



/**
 * On fournit une date et le script retourne la liste des jours du mois encours.
 * Doc : https://github.com/niinpatel/calendarHTML-Javascript/blob/master/scripts.js
 */
class calendar {
  constructor(date, appDate, type, creneauConfigs, currentCreneauType, creneauFilters) {
    this.currentDate = moment_default()(date);
    // indice du mois. [ Entre 0 et 11 ];
    this.currentMonth = this.currentDate.month();
    // indice du mois. [ Number ]
    this.currentYear = this.currentDate.year();
    //
    this.dates = [];
    /**
     * Date de l'application sans les les heures.
     * elle egalment le role de date de reference. (tous les dates en dessous sont desactivées);
     */
    this.dateMonth = moment_default()(appDate).set({
      hour: 0,
      minute: 0,
      second: 0
    });
    this.creneauConfigs = creneauConfigs;
    this.currentCreneauType = currentCreneauType;
    this.creneauFilters = creneauFilters;
    /**
     * C'est deux cas possible: collecte ou livraison.
     */
    this.type = type;
    /**
     *
     */
    this.CountDecallageAppliquer = 0;
    this.currentCreneauType.delai = parseInt(this.currentCreneauType.delai);
  }

  /**
   * -
   */
  buildDaysOfMonth() {
    // On s'assure que le mois a au moins un jour valide, sinon on passe au mois suivant.
    // ()=>{}
    const nombreSemaine = 6;
    const premierJourMois = moment_default()().set({
      year: this.currentYear,
      month: this.currentMonth,
      date: 1,
      hour: 0,
      minute: 0,
      second: 0
    });
    let indiceDuPremierJourDumois = premierJourMois.day();
    if (!indiceDuPremierJourDumois) indiceDuPremierJourDumois = 7;
    // Permet de mettre "premierJourMois" sur le premier jour dans le calendrier.
    premierJourMois.add(-indiceDuPremierJourDumois, "day");
    indiceDuPremierJourDumois--;

    // Nombre de jour dans le mois.
    const daysInMonth = 32 - moment_default()().set({
      year: this.currentYear,
      month: this.currentMonth,
      date: 32,
      hour: 0,
      minute: 0,
      second: 0
    }).date();
    const DernierJourMois = moment_default()().set({
      year: this.currentYear,
      month: this.currentMonth,
      date: daysInMonth,
      hour: 0,
      minute: 0,
      second: 0
    });
    let date = 1;
    for (let i = 0; i < nombreSemaine; i++) {
      if (date > daysInMonth) break;
      for (let j = 0; j < 7; j++) {
        const filter = new js_filtre(this.dateMonth, this.type, this.creneauConfigs, this.currentCreneauType, this.creneauFilters);
        // Si nous sommes sur la premiere semaine, et que l'indice du premier jour de mois est inferieur à la valeur encours,
        // On ajoute ces dates comme etant desactivées.
        if (i === 0 && j < indiceDuPremierJourDumois) {
          const pre_jour = premierJourMois.add(1, "day");
          filter.ValidationDay(pre_jour).then(stateValidationDay => {
            this.dates.push(this.DisabledBydelai(stateValidationDay));
          });
        } else if (date > daysInMonth) {
          // On commence avec les jours du prochain mois.
          const last_jour = DernierJourMois.add(1, "day");
          filter.ValidationDay(last_jour).then(stateValidationDay => {
            this.dates.push(this.DisabledBydelai(stateValidationDay));
          });
        } else {
          const next_jour = premierJourMois.add(1, "day");
          filter.ValidationDay(next_jour).then(stateValidationDay => {
            this.dates.push(this.DisabledBydelai(stateValidationDay));
          });
          date++;
        }
      }
    }
  }

  /**
   * On applique le delais, sur le bloc livraison, suivant plusieurs cas de figure.
   * Le delai est definit par la date de collecte,
   * Le delai par defaut est dans this.currentCreneauType.delai et peut etre surcharger par celui definit par par this.currentCreneauType.delais_jour
   * @param {*} stateValidationDay
   * @returns
   */
  DisabledBydelai(stateValidationDay) {
    if (this.type === "livraison") {
      if (this.CountDecallageAppliquer < this.currentCreneauType.delai && stateValidationDay.status) {
        this.CountDecallageAppliquer++;
        stateValidationDay.status = false;
        stateValidationDay.custom_class = "default-disable-delai";
      }
    }
    return stateValidationDay;
  }
}
/* harmony default export */ var js_calendar = (calendar);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/creneau/calendar.vue?vue&type=script&lang=js&




/* harmony default export */ var calendarvue_type_script_lang_js_ = ({
  name: "CalendarComponent",
  props: {
    showCalandar: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      /**
       * List calendar date, elle gere l'affichage du calendrier.
       */
      listCalanderDays: [],
      calendarNav: 0,
      calandarTitle: "",
      /**
       * Configuration de la date.
       */
      showMonthInDate: false,
      showDayLabel: true,
      dateSelect: null
    };
  },
  computed: {
    ...(0,vuex_esm/* mapGetters */.Se)(["appDate"]),
    ...(0,vuex_esm/* mapState */.rn)(["activeType", "creneauConfigs", "creneauFilters", "creneauType", "creneauCollecte", "creneauLivraison"]),
    /**
     * Permet de demarer le calendrier.
     * Si nous sommes dans le cas de la collecte, on utilise la date par defaut.
     * Si on est dans la livraison on utilise la date definit par la collecte.
     */
    initCreneau() {
      console.log("initCreneau : ", this.type);
      if (this.type === Utilities/* default.crex1.id */.Z.crex1.id) {
        if (this.appDate) {
          this.buildCalendar();
          return this.appDate;
        }
      } else if (this.type === Utilities/* default.crex2.id */.Z.crex2.id) {
        if (this.creneauCollecte.date_string) {
          this.buildCalendar();
          return this.creneauCollecte.date_string;
        }
      }
      return null;
    },
    /**
     * Re-initialise le creneau livaison si l'utilisateur change la date de livraison ou si l'utilisateur change de type de livraison.
     */
    ReInitCreneauLivraison() {
      if (this.creneauCollecte.date_string && this.currentCreneauType) {
        if (this.type === Utilities/* default.crex2.id */.Z.crex2.id) {
          this.emptyCurentDateSelect();
        }
      }
      return this.creneauCollecte.date_string;
    },
    /**
     * Permet de selectionner une date par defaut ou lorque le calendrier change change.
     * On met à jour la date creneauInfo[this.type].date si ce dernier est null.
     * Si creneauInfo[this.type].date n'est pas null, alors l'utilisateur a deja selectionné une date.
     *
     */
    updateCurrentDateSelect() {
      if (this.listCalanderDays.length) {
        if (this.type == Utilities/* default.crex1.id */.Z.crex1.id) {
          if (!this.creneauCollecte.date_string) {
            this.selectFirstActiveDate();
          } else {
            this.selectEgalActiveDate();
          }
        }
        if (this.type == Utilities/* default.crex2.id */.Z.crex2.id) {
          if (!this.creneauLivraison.date_string) {
            this.selectFirstActiveDate();
          } else {
            this.selectEgalActiveDate();
          }
        }
        return this.listCalanderDays.length;
      }
      return null;
    },
    /**
     * -
     */
    currentCreneauType() {
      return this.creneauType[this.activeType];
    }
  },
  methods: {
    emptyCurentDateSelect() {
      this.$store.dispatch("SetSelectDate", this.BuildPayload(false));
      this.calendarNav = 0;
    },
    BuildPayload(val) {
      return {
        type: this.type,
        date_string: val
      };
    },
    /**
     * Selectionne la premiere date active,
     * s'il nya pas de date active, dans le mois en cours, on incremente le mois.
     */
    selectFirstActiveDate() {
      for (const i in this.listCalanderDays) {
        const e = this.listCalanderDays[i];
        if (e.status) {
          e.select = true;
          this.$store.dispatch("SetSelectDate", this.BuildPayload(e.date_string));
          break;
        }
        const ii = parseInt(i) + 1;
        // si on a parcourut tout le tableau sans trouve de valeur active, on prend le prochain mois.
        if (this.listCalanderDays.length === ii) this.nextMonth();
      }
    },
    /**
     * permet de selectionner la prochaine date valide.
     *  - utiliser par les hours lorsque les horaires de la journée sont epuisées.
     */
    selectSpecifiqDateActive(ref = 1) {
      let active = 0;
      for (const i in this.listCalanderDays) {
        const e = this.listCalanderDays[i];
        if (e.status) {
          if (active == ref && active < 5) {
            e.select = true;
            this.$store.dispatch("SetSelectDate", this.BuildPayload(e.date_string));
            break;
          } else {
            e.select = false;
            e.status = false;
          }
          active++;
        }
        const ii = parseInt(i) + 1;
        // si on a parcourut tout le tableau sans trouve de valeur active, on prend le prochain mois.
        if (this.listCalanderDays.length === ii) this.nextMonth();
      }
    },
    /**
     * Cette function permet de selectionner la cellule sur le calendrier == la date precedament selectionné.
     * Elle declanche selectFirstActiveDate() si la date selectionné est desactivé;
     */
    selectEgalActiveDate() {
      for (const i in this.listCalanderDays) {
        const e = this.listCalanderDays[i];
        if (this.type === Utilities/* default.crex1.id */.Z.crex1.id) {
          if (e.date_string === this.creneauCollecte.date_string) {
            if (!e.status) this.selectFirstActiveDate();else e.select = true;
            break;
          }
        }
        if (this.type === Utilities/* default.crex2.id */.Z.crex2.id) {
          if (e.date_string === this.creneauLivraison.date_string) {
            if (!e.status) this.selectFirstActiveDate();else e.select = true;
            break;
          }
        }
        // Pour permettre à la livraison de toujours selectionné une date.

        const ii = parseInt(i) + 1;
        if (this.listCalanderDays.length == ii && this.type === Utilities/* default.crex2.id */.Z.crex2.id) {
          // this.selectFirstActiveDate();
        }
      }
    },
    selectDate(date) {
      if (!date.status) return false;
      this.listCalanderDays.forEach(e => {
        e.select = false;
      });
      date.select = true;
      this.$store.dispatch("SetSelectDate", this.BuildPayload(date.date_string));
    },
    previowMonth() {
      this.calendarNav--;
    },
    nextMonth() {
      this.calendarNav++;
    },
    buildCalendar() {
      let date, appDate;
      if (this.type === Utilities/* default.crex1.id */.Z.crex1.id) {
        date = moment_default()(this.appDate).add(this.calendarNav, "month");
        appDate = this.appDate;
      } else {
        date = moment_default()(this.creneauCollecte.date_string, "YYYY-MM-DD").add(this.calendarNav, "month");
        appDate = moment_default()(this.creneauCollecte.date_string, "YYYY-MM-DD");
      }
      // Build calendar.
      const cal = new js_calendar(date, appDate, this.type, this.creneauConfigs, this.currentCreneauType, this.creneauFilters);

      // demarre la construction des tableaux de dates.
      cal.buildDaysOfMonth();
      this.listCalanderDays = cal.dates;
      // Display current mois
      this.calandarTitle = moment_default()(date).locale("fr").format("MMMM  YYYY");
    }
  }
});
;// CONCATENATED MODULE: ./src/App/components/creneau/calendar.vue?vue&type=script&lang=js&
 /* harmony default export */ var creneau_calendarvue_type_script_lang_js_ = (calendarvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/creneau/calendar.vue?vue&type=style&index=0&id=1433bd08&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/App/components/creneau/calendar.vue?vue&type=style&index=0&id=1433bd08&prod&lang=scss&

;// CONCATENATED MODULE: ./src/App/components/creneau/calendar.vue



;


/* normalize component */

var calendar_component = (0,componentNormalizer/* default */.Z)(
  creneau_calendarvue_type_script_lang_js_,
  calendarvue_type_template_id_1433bd08_render,
  calendarvue_type_template_id_1433bd08_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var creneau_calendar = (calendar_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/creneau/SvgCalandar.vue?vue&type=template&id=6c5deeec&
var SvgCalandarvue_type_template_id_6c5deeec_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('svg', {
    staticStyle: {
      "enable-background": "new 0 0 122.88 122.88"
    },
    attrs: {
      "id": "Layer_1",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "x": "0px",
      "y": "0px",
      "viewBox": "0 0 122.88 122.88",
      "xml:space": "preserve"
    }
  }, [_c('g', [_c('path', {
    attrs: {
      "d": "M81.61,4.73c0-2.61,2.58-4.73,5.77-4.73c3.19,0,5.77,2.12,5.77,4.73v20.72c0,2.61-2.58,4.73-5.77,4.73 c-3.19,0-5.77-2.12-5.77-4.73V4.73L81.61,4.73z M66.11,103.81c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2H81.9 c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H66.11L66.11,103.81z M15.85,67.09c-0.34,0-0.61-1.43-0.61-3.2 c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H15.85L15.85,67.09z M40.98,67.09 c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H40.98 L40.98,67.09z M66.11,67.09c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2H81.9c0.34,0,0.61,1.43,0.61,3.2 c0,1.77-0.27,3.2-0.61,3.2H66.11L66.11,67.09z M91.25,67.09c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79 c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H91.25L91.25,67.09z M15.85,85.45c-0.34,0-0.61-1.43-0.61-3.2 c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H15.85L15.85,85.45z M40.98,85.45 c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H40.98 L40.98,85.45z M66.11,85.45c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2H81.9c0.34,0,0.61,1.43,0.61,3.2 c0,1.77-0.27,3.2-0.61,3.2H66.11L66.11,85.45z M91.25,85.45c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79 c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H91.25L91.25,85.45z M15.85,103.81c-0.34,0-0.61-1.43-0.61-3.2 c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H15.85L15.85,103.81z M40.98,103.81 c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H40.98 L40.98,103.81z M29.61,4.73c0-2.61,2.58-4.73,5.77-4.73s5.77,2.12,5.77,4.73v20.72c0,2.61-2.58,4.73-5.77,4.73 s-5.77-2.12-5.77-4.73V4.73L29.61,4.73z M6.4,45.32h110.07V21.47c0-0.8-0.33-1.53-0.86-2.07c-0.53-0.53-1.26-0.86-2.07-0.86H103 c-1.77,0-3.2-1.43-3.2-3.2c0-1.77,1.43-3.2,3.2-3.2h10.55c2.57,0,4.9,1.05,6.59,2.74c1.69,1.69,2.74,4.02,2.74,6.59v27.06v65.03 c0,2.57-1.05,4.9-2.74,6.59c-1.69,1.69-4.02,2.74-6.59,2.74H9.33c-2.57,0-4.9-1.05-6.59-2.74C1.05,118.45,0,116.12,0,113.55V48.52 V21.47c0-2.57,1.05-4.9,2.74-6.59c1.69-1.69,4.02-2.74,6.59-2.74H20.6c1.77,0,3.2,1.43,3.2,3.2c0,1.77-1.43,3.2-3.2,3.2H9.33 c-0.8,0-1.53,0.33-2.07,0.86c-0.53,0.53-0.86,1.26-0.86,2.07V45.32L6.4,45.32z M116.48,51.73H6.4v61.82c0,0.8,0.33,1.53,0.86,2.07 c0.53,0.53,1.26,0.86,2.07,0.86h104.22c0.8,0,1.53-0.33,2.07-0.86c0.53-0.53,0.86-1.26,0.86-2.07V51.73L116.48,51.73z M50.43,18.54 c-1.77,0-3.2-1.43-3.2-3.2c0-1.77,1.43-3.2,3.2-3.2h21.49c1.77,0,3.2,1.43,3.2,3.2c0,1.77-1.43,3.2-3.2,3.2H50.43L50.43,18.54z"
    }
  })])]);
};
var SvgCalandarvue_type_template_id_6c5deeec_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/creneau/SvgCalandar.vue?vue&type=script&lang=js&
/* harmony default export */ var SvgCalandarvue_type_script_lang_js_ = ({
  name: "SvgCalandar"
});
;// CONCATENATED MODULE: ./src/App/components/creneau/SvgCalandar.vue?vue&type=script&lang=js&
 /* harmony default export */ var creneau_SvgCalandarvue_type_script_lang_js_ = (SvgCalandarvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/App/components/creneau/SvgCalandar.vue





/* normalize component */
;
var SvgCalandar_component = (0,componentNormalizer/* default */.Z)(
  creneau_SvgCalandarvue_type_script_lang_js_,
  SvgCalandarvue_type_template_id_6c5deeec_render,
  SvgCalandarvue_type_template_id_6c5deeec_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SvgCalandar = (SvgCalandar_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/creneau/creneau.vue?vue&type=script&lang=js&





/* harmony default export */ var creneauvue_type_script_lang_js_ = ({
  name: "CreneauComponent",
  components: {
    hours: creneau_Hours,
    calendar: creneau_calendar,
    SvgCalandar: SvgCalandar
  },
  props: {
    title: {
      type: String,
      required: true
    },
    classes: {
      type: String,
      default: "rond-left"
    },
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showCalandar: false
    };
  },
  /**
   * Date affiché.
   */

  computed: {
    ...(0,vuex_esm/* mapState */.rn)(["creneauCollecte", "creneauLivraison", "creneauConfigs"]),
    appDateDisplay: {
      get() {
        if (this.type === "livraison" && this.creneauLivraison.date_string) {
          return moment_default()(this.creneauLivraison.date_string, "YYYY-MM-DD").locale("fr").format("dddd Do MMMM");
        } else if (this.type === "collecte" && this.creneauCollecte.date_string) {
          return moment_default()(this.creneauCollecte.date_string, "YYYY-MM-DD").locale("fr").format("dddd Do MMMM");
        }
        return "";
      }
    }
  },
  methods: {
    selectNextDay() {
      this.$refs.calendar.selectSpecifiqDateActive();
    }
  }
});
;// CONCATENATED MODULE: ./src/App/components/creneau/creneau.vue?vue&type=script&lang=js&
 /* harmony default export */ var creneau_creneauvue_type_script_lang_js_ = (creneauvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/App/components/creneau/creneau.vue





/* normalize component */
;
var creneau_component = (0,componentNormalizer/* default */.Z)(
  creneau_creneauvue_type_script_lang_js_,
  creneauvue_type_template_id_10a98a85_render,
  creneauvue_type_template_id_10a98a85_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var creneau = (creneau_component.exports);
;// CONCATENATED MODULE: ./src/App/js/defaultOptions.js


/* harmony default export */ var defaultOptions = ({
  show_cover: false,
  cart: null,
  creneauTypes: src_store/* default.state.creneauType */.Z.state.creneauType,
  creneauConfigs: src_store/* default.state.creneauConfigs */.Z.state.creneauConfigs,
  /**
   * Coontient la valeur de type de livraison dans la panier.
   */
  CartTypeLivraison: "",
  /**
   * Contient la valeur courante de type de livraiosn.( valeur fournit par la configuration ).
   * ne doit pas etre vide avant la vilidation.
   * (sinitialise des le debut)
   */
  TypeLivraison: {},
  show_alert: false,
  creneauCollecte: src_store/* default.state.creneauCollecte */.Z.state.creneauCollecte,
  creneauLivraison: src_store/* default.state.creneauLivraison */.Z.state.creneauLivraison,
  location: src_store/* default.state.location */.Z.state.location,
  alert_attribut_class: "alert-primary",
  /**
   *
   * @param {*} cents
   * @param {*} format
   * @returns
   */
  ShopifyFormatMoney(cents, format) {
    let value = "";
    const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    const formatString = format || this.money_format;
    if (typeof cents === "string") {
      cents = cents.replace(".", "");
    }
    function defaultOption(opt, def) {
      return typeof opt === "undefined" ? def : opt;
    }
    function formatWithDelimiters(number, precision, thousands, decimal) {
      precision = defaultOption(precision, 2);
      thousands = defaultOption(thousands, ",");
      decimal = defaultOption(decimal, ".");
      if (isNaN(number) || number == null) {
        return 0;
      }
      number = (number / 100.0).toFixed(precision);
      const parts = number.split(".");
      const dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + thousands);
      const cents = parts[1] ? decimal + parts[1] : "";
      return dollars + cents;
    }
    switch (formatString.match(placeholderRegex)[1]) {
      case "amount":
        value = formatWithDelimiters(cents, 2);
        break;
      case "amount_no_decimals":
        value = formatWithDelimiters(cents, 0);
        break;
      case "amount_with_comma_separator":
        value = formatWithDelimiters(cents, 2, ".", ",");
        break;
      case "amount_no_decimals_with_comma_separator":
        value = formatWithDelimiters(cents, 0, ".", ",");
        break;
    }
    return formatString.replace(placeholderRegex, value);
  },
  addProduct: function (id_product, qte = 1) {
    this.show_cover = true;
    return new Promise((resolv, reject) => {
      this.show_cover = true;
      wbuutilities/* AjaxBasic.post */.EC.post("/cart/add", {
        id: id_product,
        quantity: qte
      }).then(resp => {
        this.show_cover = false;
        resolv(resp);
      }).catch(() => {
        this.show_cover = false;
        reject(false);
      });
    });
  },
  async verification() {
    src_store/* default.state.alert_message */.Z.state.alert_message = "";
    this.show_alert = false;
    // var test1 = await this.verificationTypeLivraison();
    const test2 = await this.VerificationCrenaux();
    const test3 = await this.VerificationAddress();
    const test4 = await this.ValidationMontant();
    if (test2 && test3 && test4) {
      return true;
    } else {
      this.show_alert = true;
      this.alert_attribut_class = "alert-danger ml-md-4";
      return false;
    }
  },
  async VerificationCrenaux() {
    let livraison = true;
    let collecte = true;
    if (!this.creneauCollecte.date || !this.creneauCollecte.hour) {
      collecte = false;
      src_store/* default.state.alert_message */.Z.state.alert_message += "- Vous devez selectionner un creneau pour la collecte.<br />";
    }
    if (!this.creneauLivraison.date || !this.creneauLivraison.date) {
      livraison = false;
      src_store/* default.state.alert_message */.Z.state.alert_message += "- Vous devez selectionner un creneau pour la livraison.<br />";
    }
    if (livraison && collecte) return true;else return false;
  },
  /**
   *
   * @returns
   */
  async VerificationAddress() {
    if (this.location.current_address) {
      return true;
    } else {
      src_store/* default.state.alert_message */.Z.state.alert_message += " - Vous devez selectionner une adresse. <br /> ";
      return false;
    }
  },
  /**
   * Valide le montant dans le panier.
   */
  async ValidationMontant() {
    const montantMin = parseFloat(this.creneauConfigs.montant_min) * 10;
    const formatString = str => {
      const regex = /\{\{(.*?)\}\}/g;
      let found;
      let int = 0;
      while ((found = regex.exec(str)) !== null && int < 10) {
        int++;
        const attr = found[1].trim(" ");
        str = str.replace(found[0], this.creneauConfigs[attr] !== undefined ? this.creneauConfigs[attr] : "...");
      }
      return str;
    };
    if (montantMin >= this.cart.total_price) {
      src_store/* default.state.alert_message */.Z.state.alert_message += formatString(this.creneauConfigs.text_alert_montant_min);
      return false;
    }
    return true;
  },
  async buildAttribut() {
    //
    let livraison = "Livraison";
    livraison += "\r\n";
    livraison += "Date :" + this.creneauLivraison.date.format("DD-MM-YYYY HH:mm:ss");
    livraison += "\r\n";
    livraison += "Creneau :" + this.creneauLivraison.hour.begin + " - " + this.creneauLivraison.hour.end;
    //
    let collecte = "Collecte";
    collecte += "\r\n";
    collecte += "Date :" + this.creneauCollecte.date.format("DD-MM-YYYY HH:mm:ss");
    collecte += "\r\n";
    collecte += "Creneau :" + this.creneauCollecte.hour.begin + " - " + this.creneauCollecte.hour.end;
    /**
     * Données pour format Zapier
     */
    const z_collecte_date = this.creneauCollecte.date.format("DD-MM-YYYY");
    const z_collecte_heure = this.creneauCollecte.hour.begin + " - " + this.creneauCollecte.hour.end;
    //
    const z_livraison_date = this.creneauLivraison.date.format("DD-MM-YYYY");
    const z_livraison_heure = this.creneauLivraison.hour.begin + " - " + this.creneauLivraison.hour.end;
    return {
      attributes: {
        localisation: this.location.current_address,
        recuperation: collecte,
        livraison: livraison,
        z_collecte_date: z_collecte_date,
        z_collecte_heure: z_collecte_heure,
        z_livraison_date: z_livraison_date,
        z_livraison_heure: z_livraison_heure
      }
    };
  },
  SaveAttributeCart(datas) {
    return new Promise((resolv, reject) => {
      this.show_cover = true;
      wbuutilities/* AjaxBasic.post */.EC.post("/cart/update", datas).then(r => {
        this.show_cover = false;
        resolv(r);
      }).catch(e => {
        this.show_cover = false;
        if (wbuutilities/* AjaxBasic.isLocalDev */.EC.isLocalDev) resolv(e);else reject();
      });
    });
  },
  /**
   * -
   */
  saveOnExternalServer(datas) {
    return new Promise((resolv, reject) => {
      wbuutilities/* AjaxBasic.post */.EC.post("/shopify-api-rest/add-creneau-reserve", datas.attributes, {
        params: {
          shop: window.ShopId
        }
      }).then(r => {
        resolv(r);
      }).catch(e => {
        reject();
      });
    });
  },
  triggerCheckout() {
    document.querySelector(".creneaux-mbt .cart-checkout .submit-cart").click();
    console.log("verfication de la presence du bouton formulaire ", document.querySelector(".creneaux-mbt .cart-checkout .submit-cart"));
  },
  /**
   * Supprime un produit / ou supprime et ajoute un autre.( modifier la variante)
   */
  deleteUpdateProduct(id_product, new_product = null) {
    return new Promise((resolve, reject) => {
      const product = {
        updates: {}
      };
      this.show_cover = true;
      product.updates[id_product] = 0;
      wbuutilities/* AjaxBasic.post */.EC.post("/cart/update", product).then(() => {
        if (new_product) {
          resolve(this.addProduct(new_product));
        } else {
          this.show_cover = false;
          resolve(true);
        }
      }).catch(() => {
        this.show_cover = false;
        reject();
      });
    });
  }
});
;// CONCATENATED MODULE: ./src/App/js/shopifyCart.js




wbuutilities/* AjaxBasic.TestDomain */.EC.TestDomain = "http://app-habeuk.kksa";
/* harmony default export */ var shopifyCart = ({
  ...defaultOptions,
  /**
   *
   * @param {*} prefertCartProductLivraison
   */
  async initcreneau(prefertCartProductLivraison) {
    // on modifie les html
    this.HideStaticLoading();
    // On charge la panier.
    const status_cart = await this.loadcart();
    if (status_cart) {
      await this.getProductType();
      /**
       * Si les deux id sont different cela peut traduire que l'utilisateur a precedamant fait * une autre selection.
       * Bref : on concerve la valeur presente dans la panier.
       */
      if (this.TypeLivraison) {
        if (this.CartTypeLivraison && this.CartTypeLivraison.id && this.CartTypeLivraison.id !== this.TypeLivraison.id) {
          // si le produit qui est dans la panier est different de celui qui est selectionné, et que nous sommes à l'initialisation,
          // on garde la valeur dans le panier.
          if (prefertCartProductLivraison) {
            this.apply_type_livraison_by_id(this.CartTypeLivraison.id);
          }
          // si non, on retire le produit qui est dans le panier et on applique le nouveau.
          await this.deleteUpdateProduct(this.CartTypeLivraison.id, this.TypeLivraison.id);
          // on met à jour le panier.
          await this.loadcart();
        }
        // si le panier ne contient pas de produit de livraison.
        else if (this.TypeLivraison && !this.CartTypeLivraison.id) {
          await this.addDefaultProductTypeLivraison();
        }
        // on ecoute l'evenement
        this.setEvant();
      }
    }
  },
  HideStaticLoading() {
    // $(".londing-cover.static").fadeOut(600);
  },
  /**
   * Charge le panier.
   * Retourne true si la requte est terminée avec succes et false si non.
   */
  loadcart() {
    return new Promise((resolve, reject) => {
      this.show_cover = true;
      wbuutilities/* AjaxBasic.get */.EC.get("/cart.js").then(cart => {
        console.log("Panier textStatus : ", cart);
        this.show_cover = false;
        this.cart = cart.data;
        resolve(true);
      }).catch(() => {
        if (wbuutilities/* AjaxBasic.isLocalDev */.EC.isLocalDev) resolve(false);else reject();
      });
    });
  },
  /**
   * Permet de comparer le type de livraison dans le panier et celui en affichage.
   * Retourne  le product (type de livraison) actuelement present dans le panier.
   * @return l'object (type de livraison) ou false, si cest vide.
   */
  async getProductType() {
    if (this.cart && this.cart.item_count > 0) {
      const typeLivraisonIds = this.typeLivraisonIds();
      for (const i in this.cart.items) {
        const product = this.cart.items[i];
        if (typeLivraisonIds.includes(product.id)) {
          this.CartTypeLivraison = product;
          return product;
        }
      }
    } else {
      return false;
    }
  },
  typeLivraisonIds() {
    const ids = [];
    this.creneauTypes.forEach(type => {
      ids.push(type.id);
    });
    return ids;
  },
  /**
   * Applique un type de livraison.
   * Ce type de livraison est fournit par le panier.(produit precedament selectionne par le client )
   */
  apply_type_livraison_by_id(id) {
    for (const i in this.creneauTypes) {
      if (id == this.creneauTypes[i].id) {
        src_store/* default.dispatch */.Z.dispatch("SelectTypeTab", parseInt(i));
      }
    }
  },
  /**
   * Ajoute le produit permettant de definir le mode de livraiosn,
   * s"execute si le mode de livraiosn n'est pas definit.
   */
  async addDefaultProductTypeLivraison() {
    await this.addProduct(this.TypeLivraison.id);
    await this.loadcart();
    // await this.getProductType();
  },

  /**
   * Permet à un programme externe/interne d'execute le processus de sauvegarde.
   */
  setEvant() {
    const bt = document.querySelector(".btn.submit-cart-test");
    bt.classList.add("d-inline-block");
    bt.addEventListener("click", () => {
      bt.querySelector("i.fa-arrow-right").classList.add("d-none");
      bt.querySelector("i.fa-refresh").classList.remove("loadding");
      bt.querySelector("i.fa-refresh").classList.add("fa-spin");
      this.SaveCreneau(bt);
    });
    document.addEventListener("SaveCreneauxChechout", () => {
      this.SaveCreneau();
    });
  },
  /**
   * Processus de sauvegarde.
   */
  async SaveCreneau(elem = null) {
    const test = await this.verification();
    if (test) {
      const attribut = await this.buildAttribut();
      await this.SaveAttributeCart(attribut);
      this.saveOnExternalServer(attribut);
      // on verifie que le panier est ok.
      await this.loadcart();
      if (this.cart && this.cart.attributes && this.cart.attributes.livraison || !this.app_env_prod) {
        elem.querySelector("i.fa-arrow-right").classList.remove("d-none");
        elem.querySelector("i.fa-refresh").classList.add("loadding");
        // this.triggerCheckout();
      } else {
        elem.classList.add("bg-danger");
        this.show_alert = true;
        this.alert_attribut_class = "alert-danger ml-md-4";
        src_store/* default.state.alert_message */.Z.state.alert_message += '- Une erreur s"est produite lors de la sauvegarde de vos informations. <br /> Verifier votre connexion et actualiser la page <br />';
        return false;
      }
    } else {
      if (elem) {
        elem.classList.add("bg-danger");
        elem.querySelector("i.fa-refresh").classList.add("loadding");
        console.log("store.state.alert_message : ", src_store/* default.state.alert_message */.Z.state.alert_message);
      }
    }
  }
});
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/UserCreneau.vue?vue&type=script&lang=js&








/* harmony default export */ var UserCreneauvue_type_script_lang_js_ = ({
  name: "App",
  components: {
    TabOption: TabOption,
    InlineDescription: InlineDescription,
    AppTitle: AppTitle,
    mapGoogle: map_google,
    creneau: creneau
  },
  props: {
    /**
     * Date du jour.
     */
    dateDuJour: {
      type: [String, Object, Date],
      required: true
    }
  },
  data() {
    return {
      CreneauTypeProductId: null,
      // permet de reduire l'execution que si un nouveau elment est choisit.
      initAuto: true // permet de differentier le comportement auto et le click de l'utilisateur.(true => action auto ).
    };
  },

  computed: {
    ...(0,vuex_esm/* mapState */.rn)(["creneauType", "activeType", "alert_message"]),
    appDateDisplay: {
      get() {
        if (this.type === "livraison" && this.creneauLivraison.date_string) {
          return moment_default()(this.creneauLivraison.date_string, "YYYY-MM-DD").locale("fr").format("dddd Do MMMM");
        } else if (this.type === "collecte" && this.creneauCollecte.date_string) {
          return moment_default()(this.creneauCollecte.date_string, "YYYY-MM-DD").locale("fr").format("dddd Do MMMM");
        }
        return "";
      }
    },
    /**
     * -
     */
    currentCreneauType() {
      this.initManageCart(this.creneauType[this.activeType]);
      return this.creneauType[this.activeType];
    }
  },
  mounted() {
    // const d = moment("4-08-2021 18:00:00", "DD-MM-YYYY HH:mm:ss");
    const d = moment_default()(this.dateDuJour, "DD-MM-YYYY HH:mm:ss");
    // const d = moment();
    if (d._isValid) this.$store.dispatch("SetDateDuJour", d);
  },
  /**
   * Date affiché.
   */

  methods: {
    async initManageCart(currentCreneauType) {
      if (this.CreneauTypeProductId !== currentCreneauType.id) {
        this.CreneauTypeProductId = currentCreneauType.id;
        shopifyCart.TypeLivraison = currentCreneauType;
        await shopifyCart.initcreneau(this.initAuto);
        this.initAuto = false;
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/App/UserCreneau.vue?vue&type=script&lang=js&
 /* harmony default export */ var App_UserCreneauvue_type_script_lang_js_ = (UserCreneauvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/UserCreneau.vue?vue&type=style&index=0&id=5983a522&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/App/UserCreneau.vue?vue&type=style&index=0&id=5983a522&prod&lang=scss&

;// CONCATENATED MODULE: ./src/App/UserCreneau.vue



;


/* normalize component */

var UserCreneau_component = (0,componentNormalizer/* default */.Z)(
  App_UserCreneauvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var UserCreneau = (UserCreneau_component.exports);

/***/ })

}]);
//# sourceMappingURL=creneauxMylittlepressing.common.58.js.map