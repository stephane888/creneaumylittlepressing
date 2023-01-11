"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkcreneaux_reservation"] = (typeof self !== 'undefined' ? self : this)["webpackChunkcreneaux_reservation"] || []).push([[203],{

/***/ 7203:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ manage_config; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../map-google-location/src/components/admin/manage-config.vue?vue&type=template&id=838671b8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('section', {
    staticClass: "border p-4 my-5"
  }, [_c('h1', {
    staticClass: "titre"
  }, [_vm._v("Configuration de la map")]), _c('b-form-group', {
    attrs: {
      "label": "Api Key"
    }
  }, [_c('b-form-input', {
    model: {
      value: _vm.configs.mapConfig.apiKey,
      callback: function ($$v) {
        _vm.$set(_vm.configs.mapConfig, "apiKey", $$v);
      },
      expression: "configs.mapConfig.apiKey"
    }
  })], 1), _c('hr'), _c('b-form-group', {
    attrs: {
      "label": "Selectionner le type de filtre"
    }
  }, [_c('b-form-radio-group', {
    attrs: {
      "options": _vm.configs.type_filtre.options,
      "stacked": ""
    },
    model: {
      value: _vm.configs.type_filtre.value,
      callback: function ($$v) {
        _vm.$set(_vm.configs.type_filtre, "value", $$v);
      },
      expression: "configs.type_filtre.value"
    }
  })], 1), _c('b-form-group', {
    attrs: {
      "label": "placeholder"
    }
  }, [_c('b-form-input', {
    model: {
      value: _vm.configs.input_placeholder.value,
      callback: function ($$v) {
        _vm.$set(_vm.configs.input_placeholder, "value", $$v);
      },
      expression: "configs.input_placeholder.value"
    }
  })], 1), _c('b-form-group', {
    attrs: {
      "label": "Text bouton"
    }
  }, [_c('b-form-input', {
    model: {
      value: _vm.configs.input_text_button.value,
      callback: function ($$v) {
        _vm.$set(_vm.configs.input_text_button, "value", $$v);
      },
      expression: "configs.input_text_button.value"
    }
  })], 1), _c('b-form-group', {
    attrs: {
      "label": "Titre du bloc"
    }
  }, [_c('b-form-input', {
    model: {
      value: _vm.configs.titre_map.value,
      callback: function ($$v) {
        _vm.$set(_vm.configs.titre_map, "value", $$v);
      },
      expression: "configs.titre_map.value"
    }
  })], 1), _c('b-form-group', {
    attrs: {
      "label": "Url de la page apres une adresse valide"
    }
  }, [_c('b-form-input', {
    model: {
      value: _vm.configs.redirect_true.value,
      callback: function ($$v) {
        _vm.$set(_vm.configs.redirect_true, "value", $$v);
      },
      expression: "configs.redirect_true.value"
    }
  })], 1), _c('b-form-group', {
    attrs: {
      "label": "Url de la page apres une adresse non valide"
    }
  }, [_c('b-form-input', {
    model: {
      value: _vm.configs.redirect_false.value,
      callback: function ($$v) {
        _vm.$set(_vm.configs.redirect_false, "value", $$v);
      },
      expression: "configs.redirect_false.value"
    }
  })], 1), _c('b-form-group', {
    attrs: {
      "label": "Zone valide",
      "description": "Creer la zone sur http://geojson.io/ et copier coller son contenu JSON, NB: le typde doit etre 'Polygon'"
    }
  }, [_c('b-form-textarea', {
    attrs: {
      "rows": "8"
    },
    model: {
      value: _vm.configs.zone_valide.value,
      callback: function ($$v) {
        _vm.$set(_vm.configs.zone_valide, "value", $$v);
      },
      expression: "configs.zone_valide.value"
    }
  })], 1), _c('b-form-group', {
    attrs: {
      "label": "Villes",
      "description": "Ajouter les villes separées par des points vigule (;)"
    }
  }, [_c('b-form-textarea', {
    attrs: {
      "rows": "8"
    },
    model: {
      value: _vm.configs.villes.value,
      callback: function ($$v) {
        _vm.$set(_vm.configs.villes, "value", $$v);
      },
      expression: "configs.villes.value"
    }
  })], 1), _c('b-form-group', {
    attrs: {
      "label": "Liste de BP",
      "description": "Ajouter les BP, un element par ligne"
    }
  }, [_c('b-form-textarea', {
    attrs: {
      "rows": "8"
    },
    model: {
      value: _vm.configs.bps.value,
      callback: function ($$v) {
        _vm.$set(_vm.configs.bps, "value", $$v);
      },
      expression: "configs.bps.value"
    }
  })], 1)], 1)]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(3797);
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);
// EXTERNAL MODULE: ../wbuutilities/index.js + 71 modules
var wbuutilities = __webpack_require__(2420);
// EXTERNAL MODULE: ../map-google-location/node_modules/query-string/index.js
var query_string = __webpack_require__(7403);
// EXTERNAL MODULE: ../map-google-location/node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(1319);
// EXTERNAL MODULE: ../map-google-location/node_modules/bootstrap-vue/esm/components/form/index.js + 2 modules
var components_form = __webpack_require__(9973);
// EXTERNAL MODULE: ../map-google-location/node_modules/bootstrap-vue/esm/components/form-input/index.js + 1 modules
var form_input = __webpack_require__(3027);
// EXTERNAL MODULE: ../map-google-location/node_modules/bootstrap-vue/esm/components/form-group/index.js + 3 modules
var form_group = __webpack_require__(6639);
// EXTERNAL MODULE: ../map-google-location/node_modules/bootstrap-vue/esm/components/form-select/index.js + 5 modules
var form_select = __webpack_require__(184);
// EXTERNAL MODULE: ../map-google-location/node_modules/bootstrap-vue/esm/components/form-radio/index.js + 7 modules
var form_radio = __webpack_require__(7377);
// EXTERNAL MODULE: ../map-google-location/node_modules/bootstrap-vue/esm/components/form-textarea/index.js + 3 modules
var form_textarea = __webpack_require__(2998);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../map-google-location/src/components/admin/manage-config.vue?vue&type=script&lang=js&





external_commonjs_vue_commonjs2_vue_root_Vue_default().use(components_form/* FormPlugin */.w6);
external_commonjs_vue_commonjs2_vue_root_Vue_default().use(form_input/* FormInputPlugin */.g);
external_commonjs_vue_commonjs2_vue_root_Vue_default().use(form_group/* FormGroupPlugin */.E);
external_commonjs_vue_commonjs2_vue_root_Vue_default().use(form_select/* FormSelectPlugin */.v5);
external_commonjs_vue_commonjs2_vue_root_Vue_default().use(form_radio/* FormRadioPlugin */.WA);
external_commonjs_vue_commonjs2_vue_root_Vue_default().use(form_textarea/* FormTextareaPlugin */.s);
const query = query_string.parse(window.location.search);
const keyConfig = "google-config";
wbuutilities/* AjaxBasic.TestDomain */.EC.TestDomain = "http://app-habeuk.kksa";
/* harmony default export */ var manage_configvue_type_script_lang_js_ = ({
  name: "ManageConfig",
  props: {
    // configs: {
    //   type: Object,
    //   //required: ture,
    //   default: function () {
    //     return {};
    //   },
    // },
  },
  data() {
    return {
      shop: wbuutilities/* AjaxBasic.isLocalDev */.EC.isLocalDev ? "creneaux-reservation.kksa" : query.shop,
      /** cette variable sera utiliser pour mettre a jour la configuration  de la map
       * @params {Object} configs
       */
      editableConfigs: this.configs
    };
  },
  computed: {
    ...(0,vuex_esm/* mapState */.rn)(["configs"])
  },
  mounted() {},
  methods: {
    SavePreProdConfig() {
      wbuutilities/* AjaxBasic.post */.EC.post("/shopify-api-rest/save-configs", this.configs, {
        params: {
          key: keyConfig,
          shop_domain: this.shop
        }
      });
    },
    /**
     * -
     */
    LoadValues() {
      return new Promise((resolv, reject) => {
        wbuutilities/* AjaxBasic.get */.EC.get("/shopify-api-rest/load-configs", {
          params: {
            key: keyConfig,
            shop_domain: this.shop
          }
        }).then(resp => {
          if (resp.data) {
            resolv(resp.data);
          } else reject();
        });
      });
    }
  }
});
;// CONCATENATED MODULE: ../map-google-location/src/components/admin/manage-config.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_manage_configvue_type_script_lang_js_ = (manage_configvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../map-google-location/src/components/admin/manage-config.vue?vue&type=style&index=0&id=838671b8&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../map-google-location/src/components/admin/manage-config.vue?vue&type=style&index=0&id=838671b8&prod&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ../map-google-location/src/components/admin/manage-config.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  admin_manage_configvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "838671b8",
  null
  
)

/* harmony default export */ var manage_config = (component.exports);

/***/ })

}]);
//# sourceMappingURL=creneauxMylittlepressing.common.203.js.map