"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkcreneaux_reservation"] = (typeof self !== 'undefined' ? self : this)["webpackChunkcreneaux_reservation"] || []).push([[546],{

/***/ 5546:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ CreneauBase; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/admin/Forms/CreneauBase.vue?vue&type=template&id=8d454aee&scoped=true&lang=html&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-form', [_c('b-form-group', {
    scopedSlots: _vm._u([{
      key: "label",
      fn: function () {
        return [_c('strong', [_vm._v(" Selectionner les jours ouvrables. ")])];
      },
      proxy: true
    }])
  }, [_c('div', {
    staticClass: "d-flex flex-wrap align-items-center"
  }, _vm._l(_vm.creneauConfigs.days, function (checkbox, index) {
    return _c('b-form-checkbox', {
      key: index,
      staticClass: "mr-3 d-inline-flex align-items-center",
      attrs: {
        "id": 'checkbox-' + index,
        "value": 1,
        "unchecked-value": 0
      },
      model: {
        value: checkbox.value,
        callback: function ($$v) {
          _vm.$set(checkbox, "value", $$v);
        },
        expression: "checkbox.value"
      }
    }, [_vm._v(" " + _vm._s(checkbox.text) + " ")]);
  }), 1)]), _c('b-form-group', {
    attrs: {
      "description": "l'heure au format HH:MM, example : 15:30"
    },
    scopedSlots: _vm._u([{
      key: "label",
      fn: function () {
        return [_c('strong', [_vm._v(" Definir l'heure de debut et de fin ")])];
      },
      proxy: true
    }])
  }, [_c('div', {
    staticClass: "d-flex flex-wrap"
  }, _vm._l(_vm.creneauConfigs.days, function (input, index) {
    return _c('div', {
      key: index,
      staticClass: "d-flex mr-3"
    }, [_c('b-form-group', {
      scopedSlots: _vm._u([{
        key: "label",
        fn: function () {
          return [_c('span', [_vm._v(" " + _vm._s(input.text) + " ")])];
        },
        proxy: true
      }], null, true)
    }, [_c('b-form-input', {
      staticClass: "mb-2",
      attrs: {
        "placeholder": "Heure debut"
      },
      model: {
        value: input.debut,
        callback: function ($$v) {
          _vm.$set(input, "debut", $$v);
        },
        expression: "input.debut"
      }
    }), _c('b-form-input', {
      attrs: {
        "placeholder": "Heure fin"
      },
      model: {
        value: input.fin,
        callback: function ($$v) {
          _vm.$set(input, "fin", $$v);
        },
        expression: "input.fin"
      }
    })], 1)], 1);
  }), 0)]), _c('b-form-group', {
    attrs: {
      "label": "Nombre semaine affichée sur le calendrier"
    }
  }, [_c('b-form-input', {
    staticClass: "mb-2",
    attrs: {
      "placeholder": "Heure debut",
      "type": "number"
    },
    model: {
      value: _vm.creneauConfigs.nombre_semaine,
      callback: function ($$v) {
        _vm.$set(_vm.creneauConfigs, "nombre_semaine", $$v);
      },
      expression: "creneauConfigs.nombre_semaine"
    }
  })], 1), _c('b-form-group', {
    attrs: {
      "label": "Nombre reservation par creneau"
    }
  }, [_c('b-form-input', {
    staticClass: "mb-2",
    attrs: {
      "placeholder": "Heure debut",
      "type": "number"
    },
    model: {
      value: _vm.creneauConfigs.nombre_res_creneau,
      callback: function ($$v) {
        _vm.$set(_vm.creneauConfigs, "nombre_res_creneau", $$v);
      },
      expression: "creneauConfigs.nombre_res_creneau"
    }
  })], 1), _c('b-form-group', {
    attrs: {
      "label": "Titre de l'application"
    }
  }, [_c('b-form-input', {
    staticClass: "mb-2",
    attrs: {
      "placeholder": "titre du block"
    },
    model: {
      value: _vm.creneauConfigs.title,
      callback: function ($$v) {
        _vm.$set(_vm.creneauConfigs, "title", $$v);
      },
      expression: "creneauConfigs.title"
    }
  })], 1), _c('b-form-group', {
    attrs: {
      "label": "Decallage entre l'heure reelle et le premier creneau (en minutes)"
    }
  }, [_c('b-form-input', {
    staticClass: "mb-2",
    attrs: {
      "type": "number"
    },
    model: {
      value: _vm.creneauConfigs.deccalage_creneau_depart,
      callback: function ($$v) {
        _vm.$set(_vm.creneauConfigs, "deccalage_creneau_depart", _vm._n($$v));
      },
      expression: "creneauConfigs.deccalage_creneau_depart"
    }
  })], 1), _c('b-form-group', {
    attrs: {
      "label": "Montant min d'une commande (en euros)"
    }
  }, [_c('b-form-input', {
    staticClass: "mb-2",
    attrs: {
      "type": "number"
    },
    model: {
      value: _vm.creneauConfigs.montant_min,
      callback: function ($$v) {
        _vm.$set(_vm.creneauConfigs, "montant_min", _vm._n($$v));
      },
      expression: "creneauConfigs.montant_min"
    }
  })], 1), _c('b-form-group', {
    attrs: {
      "label": "Texte alert montant min"
    }
  }, [_c('b-form-input', {
    staticClass: "mb-2",
    model: {
      value: _vm.creneauConfigs.text_alert_montant_min,
      callback: function ($$v) {
        _vm.$set(_vm.creneauConfigs, "text_alert_montant_min", $$v);
      },
      expression: "creneauConfigs.text_alert_montant_min"
    }
  })], 1)], 1)], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(3822);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/admin/Forms/CreneauBase.vue?vue&type=script&lang=js&

/* harmony default export */ var CreneauBasevue_type_script_lang_js_ = ({
  name: "CreneauBase",
  props: {},
  data() {
    return {};
  },
  computed: {
    ...(0,vuex_esm/* mapState */.rn)(["creneauConfigs"])
  }
});
;// CONCATENATED MODULE: ./src/App/components/admin/Forms/CreneauBase.vue?vue&type=script&lang=js&
 /* harmony default export */ var Forms_CreneauBasevue_type_script_lang_js_ = (CreneauBasevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/App/components/admin/Forms/CreneauBase.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  Forms_CreneauBasevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "8d454aee",
  null
  
)

/* harmony default export */ var CreneauBase = (component.exports);

/***/ })

}]);
//# sourceMappingURL=creneauxMylittlepressing.common.546.js.map