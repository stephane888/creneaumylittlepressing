"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkcreneaux_reservation"] = (typeof self !== 'undefined' ? self : this)["webpackChunkcreneaux_reservation"] || []).push([[749],{

/***/ 8749:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ TypeLivraion; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/admin/Forms/TypeLivraion.vue?vue&type=template&id=60e3e1c6&scoped=true&lang=html&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-form', [_c('h4', [_vm._v("Type de livraison")]), _c('div', {
    staticClass: "accordion",
    attrs: {
      "role": "tablist"
    }
  }, _vm._l(_vm.creneauType, function (type, i) {
    return _c('b-card', {
      key: i,
      staticClass: "mb-2",
      attrs: {
        "no-body": ""
      }
    }, [_c('b-card-header', {
      staticClass: "p-1",
      attrs: {
        "header-tag": "header",
        "role": "tab"
      }
    }, [_c('b-button', {
      directives: [{
        name: "b-toggle",
        rawName: "v-b-toggle",
        value: 'config-accordion-' + i,
        expression: "'config-accordion-' + i"
      }],
      attrs: {
        "block": "",
        "variant": "transparent"
      }
    }, [_c('strong', [_vm._v(" Type " + _vm._s(i + 1) + " : "), _c('i', [_vm._v(_vm._s(type.titre))])])])], 1), _c('b-collapse', {
      attrs: {
        "id": 'config-accordion-' + i,
        "visible": i === 0 ? true : false,
        "accordion": "my-accordion-type",
        "role": "tabpanel"
      }
    }, [_c('b-card-body', [_c('b-form-group', {
      scopedSlots: _vm._u([{
        key: "label",
        fn: function () {
          return [_c('strong', {
            staticClass: "mt-3 mb-2 d-block"
          }, [_vm._v(" Type de livraison. ")])];
        },
        proxy: true
      }], null, true)
    }, [_c('b-form-group', {
      attrs: {
        "label": "Selectionner le type de livraison"
      }
    }, [_c('b-form-input', {
      staticClass: "mb-2",
      attrs: {
        "placeholder": "Titre du type de livraison"
      },
      model: {
        value: type.titre,
        callback: function ($$v) {
          _vm.$set(type, "titre", $$v);
        },
        expression: "type.titre"
      }
    })], 1)], 1), _c('b-form-group', {
      attrs: {
        "label": "Description"
      },
      scopedSlots: _vm._u([{
        key: "description",
        fn: function () {
          return [_c('div', {
            pre: true
          }, [_vm._v(" vous pouvez utiliser les champs dynamic suivants: {{ titre }}, {{ montant }}, {{ creneau }}, {{ delai_next_creneau }}, {{ delai }} ")])];
        },
        proxy: true
      }], null, true)
    }, [_c('b-form-textarea', {
      staticClass: "mb-2",
      attrs: {
        "placeholder": "Enter something...",
        "rows": "3",
        "max-rows": "3"
      },
      model: {
        value: type.body,
        callback: function ($$v) {
          _vm.$set(type, "body", $$v);
        },
        expression: "type.body"
      }
    })], 1), _c('b-form-group', {
      attrs: {
        "label": "Montant"
      },
      scopedSlots: _vm._u([{
        key: "description",
        fn: function () {
          return [_c('div', {
            pre: true
          }, [_vm._v(" Remplissez le montant avec la devise. Ex: 100€ ")])];
        },
        proxy: true
      }], null, true)
    }, [_c('b-form-input', {
      staticClass: "mb-2",
      attrs: {
        "placeholder": "montant"
      },
      model: {
        value: type.montant,
        callback: function ($$v) {
          _vm.$set(type, "montant", $$v);
        },
        expression: "type.montant"
      }
    })], 1), _c('b-form-group', {
      attrs: {
        "label": "Type"
      }
    }, [_c('b-form-input', {
      staticClass: "mb-2",
      attrs: {
        "placeholder": "type"
      },
      model: {
        value: type.type,
        callback: function ($$v) {
          _vm.$set(type, "type", $$v);
        },
        expression: "type.type"
      }
    })], 1), _c('b-form-group', {
      attrs: {
        "label": "Durée d'un creneau"
      }
    }, [_c('b-form-input', {
      staticClass: "mb-2",
      attrs: {
        "placeholder": "creneau",
        "type": "number"
      },
      model: {
        value: type.creneau,
        callback: function ($$v) {
          _vm.$set(type, "creneau", $$v);
        },
        expression: "type.creneau"
      }
    })], 1), _c('b-form-group', {
      attrs: {
        "label": "interval entre les creneaux"
      }
    }, [_c('b-form-input', {
      staticClass: "mb-2",
      attrs: {
        "placeholder": "delai_next_creneau",
        "type": "number"
      },
      model: {
        value: type.delai_next_creneau,
        callback: function ($$v) {
          _vm.$set(type, "delai_next_creneau", $$v);
        },
        expression: "type.delai_next_creneau"
      }
    })], 1), _c('b-form-group', {
      attrs: {
        "label": "Delai en jour(s)"
      }
    }, [_c('b-form-input', {
      staticClass: "mb-2",
      attrs: {
        "placeholder": "delai",
        "type": "number"
      },
      model: {
        value: type.delai,
        callback: function ($$v) {
          _vm.$set(type, "delai", $$v);
        },
        expression: "type.delai"
      }
    })], 1), _c('b-form-group', {
      attrs: {
        "label": "Selectionner le produit"
      }
    }, [_c('b-form-select', {
      attrs: {
        "options": _vm.products
      },
      model: {
        value: type.id,
        callback: function ($$v) {
          _vm.$set(type, "id", $$v);
        },
        expression: "type.id"
      }
    })], 1), _c('b-form-group', [_c('b-form-checkbox', {
      attrs: {
        "size": "sm",
        "value": true,
        "unchecked-value": false
      },
      model: {
        value: type.active,
        callback: function ($$v) {
          _vm.$set(type, "active", $$v);
        },
        expression: "type.active"
      }
    }, [_vm._v(" Activé par defaut ")])], 1), _c('hr'), _c('h5', [_vm._v("Surchagé le delai de livraison en function du jour.")]), _c('div', {
      staticClass: "ctn-action-button d-flex justify-content-end mb-2"
    }, [_c('b-button', {
      attrs: {
        "variant": "outline-info",
        "size": "sm"
      },
      on: {
        "click": function ($event) {
          return _vm.OverrideAdd(i);
        }
      }
    }, [_vm._v(" Ajouter une surcharge + ")])], 1), _c('div', {
      staticClass: "accordion",
      attrs: {
        "role": "tablist"
      }
    }, _vm._l(type.delais_jour, function (override, ii) {
      return _c('b-card', {
        key: ii,
        staticClass: "mb-2",
        attrs: {
          "no-body": ""
        }
      }, [_c('b-card-header', {
        staticClass: "p-1",
        attrs: {
          "header-tag": "header",
          "role": "tab"
        }
      }, [_c('b-button', {
        directives: [{
          name: "b-toggle",
          rawName: "v-b-toggle",
          value: 'config-accordion-over' + ii,
          expression: "'config-accordion-over' + ii"
        }],
        attrs: {
          "block": "",
          "variant": "transparent"
        }
      }, [_c('strong', [_vm._v(" Surcharge " + _vm._s(ii + 1) + " : " + _vm._s(_vm.getJour(override.day)) + " ")])])], 1), _c('b-collapse', {
        attrs: {
          "id": 'config-accordion-over' + ii,
          "visible": ii === 0 ? false : false,
          "accordion": "my-accordion-surcharge",
          "role": "tabpanel"
        }
      }, [_c('b-card-body', [_c('b-form-group', {
        scopedSlots: _vm._u([{
          key: "label",
          fn: function () {
            return [_c('strong', {
              staticClass: "mt-3 mb-2 d-block"
            }, [_vm._v(" Surcharger un delai de livraison. ")])];
          },
          proxy: true
        }], null, true)
      }, [_c('b-row', [_c('b-col', {
        attrs: {
          "sm": "4"
        }
      }, [_c('b-form-group', {
        attrs: {
          "label": "Selectionner le jour de la semaine"
        }
      }, [_c('b-form-select', {
        attrs: {
          "options": _vm.joursActiveOptions
        },
        model: {
          value: override.day,
          callback: function ($$v) {
            _vm.$set(override, "day", $$v);
          },
          expression: "override.day"
        }
      })], 1)], 1), _c('b-col', {
        attrs: {
          "sm": "4"
        }
      }, [_c('b-form-group', {
        attrs: {
          "label": "Delai en jour(s)"
        }
      }, [_c('b-form-input', {
        staticClass: "mb-2",
        attrs: {
          "placeholder": "delai",
          "type": "number"
        },
        model: {
          value: override.delai,
          callback: function ($$v) {
            _vm.$set(override, "delai", $$v);
          },
          expression: "override.delai"
        }
      })], 1)], 1)], 1)], 1)], 1)], 1)], 1);
    }), 1)], 1)], 1)], 1);
  }), 1), _c('hr')]), _vm._v(" conf: "), _c('pre', [_vm._v(_vm._s(_vm.creneauType))])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(7658);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(3822);
// EXTERNAL MODULE: ./src/App/js/Utilities.js
var Utilities = __webpack_require__(1092);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/admin/Forms/TypeLivraion.vue?vue&type=script&lang=js&


//
// import magentoSynchroListSites from "./ListSites.vue";

/* harmony default export */ var TypeLivraionvue_type_script_lang_js_ = ({
  name: "TypeLivraion",
  props: {
    joursActive: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      products: [{
        text: "32583132807228",
        value: "32583132807228"
      }, {
        text: "32583132839996",
        value: "32583132839996"
      }, {
        text: "32583132872764",
        value: "32583132872764"
      }]
    };
  },
  computed: {
    ...(0,vuex_esm/* mapState */.rn)(["creneauType"]),
    joursActiveOptions() {
      const result = [];
      this.joursActive.forEach(jour => {
        result.push({
          text: jour.text,
          value: jour.indice
        });
      });
      return result;
    }
  },
  methods: {
    OverrideAdd(i) {
      if (this.creneauType[i]) {
        this.creneauType[i].delais_jour.push(Utilities/* default.getDefaultDelaiOverride */.Z.getDefaultDelaiOverride());
      }
    },
    DeleteOverride(i, ii) {
      if (this.creneauType[i] && this.creneauType[i].delais_jour[ii]) {
        this.creneauType[i].delais_jour.splice(ii, 1);
      }
    },
    getJour(indice) {
      for (const i in this.joursActive) {
        if (this.joursActive[i].indice === indice) {
          return this.joursActive[i].text;
        }
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/App/components/admin/Forms/TypeLivraion.vue?vue&type=script&lang=js&
 /* harmony default export */ var Forms_TypeLivraionvue_type_script_lang_js_ = (TypeLivraionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/App/components/admin/Forms/TypeLivraion.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  Forms_TypeLivraionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "60e3e1c6",
  null
  
)

/* harmony default export */ var TypeLivraion = (component.exports);

/***/ })

}]);
//# sourceMappingURL=creneauxMylittlepressing.common.749.js.map