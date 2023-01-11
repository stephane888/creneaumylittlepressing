"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkcreneaux_reservation"] = (typeof self !== 'undefined' ? self : this)["webpackChunkcreneaux_reservation"] || []).push([[479],{

/***/ 2479:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ CreneauFilters; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/admin/Forms/CreneauFilters.vue?vue&type=template&id=538aad66&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-form', [_c('div', {
    staticClass: "ctn-action-button d-flex justify-content-end mb-2"
  }, [_c('b-button', {
    attrs: {
      "variant": "outline-info",
      "size": "sm"
    },
    on: {
      "click": function ($event) {
        return _vm.FilterAdd();
      }
    }
  }, [_vm._v(" Ajouter un filtre + ")])], 1), _c('div', {
    staticClass: "accordion",
    attrs: {
      "role": "tablist"
    }
  }, _vm._l(_vm.creneauFilters, function (filter, index) {
    return _c('b-card', {
      key: index,
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
        value: 'config-accordion-' + index,
        expression: "'config-accordion-' + index"
      }],
      attrs: {
        "block": "",
        "variant": "transparent"
      }
    }, [_c('strong', [_vm._v(" Filtre " + _vm._s(index + 1) + ": " + _vm._s(filter.titre) + " ")])]), _c('div', {
      staticClass: "ctn-action-button static"
    }, [_c('b-button', {
      attrs: {
        "variant": "outline-danger",
        "size": "sm"
      },
      on: {
        "click": function ($event) {
          return _vm.FilterRemove(index);
        }
      }
    }, [_c('b-icon', {
      attrs: {
        "icon": "trash-fill"
      }
    })], 1)], 1)], 1), _c('b-collapse', {
      attrs: {
        "id": 'config-accordion-' + index,
        "visible": index === 0 ? true : false,
        "accordion": "my-accordion",
        "role": "tabpanel"
      }
    }, [_c('b-card-body', [_c('b-form-group', [_c('b-form-group', {
      attrs: {
        "label": "Titre du filtre"
      }
    }, [_c('b-form-input', {
      staticClass: "mb-2",
      model: {
        value: filter.titre,
        callback: function ($$v) {
          _vm.$set(filter, "titre", $$v);
        },
        expression: "filter.titre"
      }
    })], 1), _c('b-form-group', {
      attrs: {
        "label": "Données à desactiver"
      }
    }, [_c('b-form-radio-group', {
      attrs: {
        "options": _vm.type_disabled_options,
        "name": "radio-options",
        "debounce": "2000"
      },
      model: {
        value: filter.type_disabled,
        callback: function ($$v) {
          _vm.$set(filter, "type_disabled", $$v);
        },
        expression: "filter.type_disabled"
      }
    })], 1), filter.type_disabled === 'hours' ? _c('div', [_c('h3', {
      staticClass: "border-bottom pb-2 mb-2 mt-4"
    }, [_vm._v(" desactiver une plage d'heures. ")]), _c('b-form-group', {
      attrs: {
        "description": "format H:M, example 8:30"
      },
      scopedSlots: _vm._u([{
        key: "label",
        fn: function () {
          return [_c('strong', {
            staticClass: "mt-3 mb-2 d-block"
          }, [_vm._v(" Selectionner la plage d'heure à desactiver ")])];
        },
        proxy: true
      }], null, true)
    }, [_c('b-row', [_c('b-col', {
      attrs: {
        "sm": "6"
      }
    }, [_c('b-form-input', {
      staticClass: "mb-2",
      attrs: {
        "placeholder": "Heure debut",
        "size": "sm",
        "debounce": "2000"
      },
      model: {
        value: filter.h_debut,
        callback: function ($$v) {
          _vm.$set(filter, "h_debut", $$v);
        },
        expression: "filter.h_debut"
      }
    })], 1), _c('b-col', {
      attrs: {
        "sm": "6"
      }
    }, [_c('b-form-input', {
      attrs: {
        "placeholder": "Heure fin",
        "size": "sm",
        "debounce": "2000"
      },
      model: {
        value: filter.h_fin,
        callback: function ($$v) {
          _vm.$set(filter, "h_fin", $$v);
        },
        expression: "filter.h_fin"
      }
    })], 1)], 1)], 1), _c('hr'), _c('b-form-group', {
      scopedSlots: _vm._u([{
        key: "label",
        fn: function () {
          return [_c('strong', {
            staticClass: "mt-3 mb-2 d-block"
          }, [_vm._v(" Selectionner les jours de la semaine ")])];
        },
        proxy: true
      }], null, true)
    }, [_c('b-form-group', [_c('b-form-checkbox', {
      attrs: {
        "id": 'checkbox-jr-' + index,
        "size": "sm",
        "value": "all",
        "unchecked-value": "manuel"
      },
      on: {
        "change": function ($event) {
          return _vm.SelectAllDate($event, index, filter.jours_select);
        }
      },
      model: {
        value: filter.jourmode,
        callback: function ($$v) {
          _vm.$set(filter, "jourmode", $$v);
        },
        expression: "filter.jourmode"
      }
    }, [_vm._v(" Tous les jours ")])], 1), _c('b-form-group', {
      attrs: {
        "label": "Jours"
      },
      scopedSlots: _vm._u([{
        key: "default",
        fn: function ({
          ariaDescribedby
        }) {
          return [_c('b-form-checkbox-group', {
            attrs: {
              "id": 'checkbox-jour-group-' + index,
              "options": _vm.joursActiveOptions,
              "aria-describedby": ariaDescribedby,
              "size": "sm"
            },
            on: {
              "change": function ($event) {
                return _vm.SelectOneDate(index);
              }
            },
            model: {
              value: filter.jours_select,
              callback: function ($$v) {
                _vm.$set(filter, "jours_select", $$v);
              },
              expression: "filter.jours_select"
            }
          })];
        }
      }], null, true)
    })], 1), _c('hr')], 1) : _vm._e(), filter.type_disabled === 'days' ? _c('h3', {
      staticClass: "border-bottom pb-2 mb-2 mt-4"
    }, [_vm._v(" Desactivation des jours ")]) : _vm._e(), filter.type_disabled !== '' ? _c('div', [_c('b-form-group', {
      scopedSlots: _vm._u([{
        key: "label",
        fn: function () {
          return [_c('div', {
            staticClass: "d-flex justify-content-between aligns-items-center mt-3"
          }, [_c('strong', [_vm._v(" Selectionner les dates ")]), _c('div', {
            staticClass: "ctn-action-button"
          }, [_c('b-button', {
            attrs: {
              "variant": "outline-info",
              "size": "sm"
            },
            on: {
              "click": function ($event) {
                return _vm.FilterAddDatedisabled(filter.date_desactivee);
              }
            }
          }, [_vm._v(" Ajouter une date + ")])], 1)])];
        },
        proxy: true
      }], null, true)
    }, [_c('div', [_c('b-row', _vm._l(filter.date_desactivee, function (date, in_dd) {
      return _c('b-col', {
        key: in_dd,
        staticClass: "d-flex align-items-center",
        attrs: {
          "sm": "4"
        }
      }, [_c('b-input-group', {
        staticClass: "mb-2",
        attrs: {
          "size": "sm"
        }
      }, [_c('b-form-datepicker', {
        attrs: {
          "id": 'datepicker-' + index + '-' + in_dd,
          "min": _vm.min_date,
          "locale": "fr"
        },
        model: {
          value: date.date,
          callback: function ($$v) {
            _vm.$set(date, "date", $$v);
          },
          expression: "date.date"
        }
      }), _c('b-input-group-append', [_c('b-button', {
        attrs: {
          "variant": "outline-danger",
          "size": "sm"
        },
        on: {
          "click": function ($event) {
            return _vm.FilterRemoveDateDesactivee(in_dd, filter.date_desactivee);
          }
        }
      }, [_c('b-icon', {
        attrs: {
          "icon": "trash-fill"
        }
      })], 1)], 1)], 1)], 1);
    }), 1)], 1)]), _c('hr'), _c('b-form-group', {
      scopedSlots: _vm._u([{
        key: "label",
        fn: function () {
          return [_c('div', {
            staticClass: "d-flex justify-content-between aligns-items-center mt-3"
          }, [_c('strong', [_vm._v(" Selectionner les periodes ")]), _c('div', {
            staticClass: "ctn-action-button"
          }, [_c('b-button', {
            attrs: {
              "variant": "outline-info",
              "size": "sm"
            },
            on: {
              "click": function ($event) {
                return _vm.FilterAddPeriodedisabled(filter.periode_desactivee);
              }
            }
          }, [_vm._v(" Ajouter une periode + ")])], 1)])];
        },
        proxy: true
      }], null, true)
    }, [_c('div', [_c('b-row', _vm._l(filter.periode_desactivee, function (date, in_pd) {
      return _c('b-col', {
        key: in_pd,
        attrs: {
          "sm": "6"
        }
      }, [_c('b-input-group', {
        staticClass: "mb-2",
        attrs: {
          "size": "sm"
        }
      }, [_c('b-form-datepicker', {
        attrs: {
          "id": 'datedebut-' + index + '-' + in_pd,
          "placeholder": "Date de debut",
          "min": _vm.min_date
        },
        model: {
          value: date.debut,
          callback: function ($$v) {
            _vm.$set(date, "debut", $$v);
          },
          expression: "date.debut"
        }
      }), _c('b-form-datepicker', {
        attrs: {
          "id": 'datefin-' + index + '-' + in_pd,
          "placeholder": "Date de fin",
          "min": _vm.FilterMinDateFin(date.debut)
        },
        model: {
          value: date.fin,
          callback: function ($$v) {
            _vm.$set(date, "fin", $$v);
          },
          expression: "date.fin"
        }
      }), _c('b-input-group-append', [_c('b-button', {
        attrs: {
          "variant": "outline-danger",
          "size": "sm"
        },
        on: {
          "click": function ($event) {
            return _vm.FilterRemovePeriodeDesactivee(in_pd, filter.periode_desactivee);
          }
        }
      }, [_c('b-icon', {
        attrs: {
          "icon": "trash-fill"
        }
      })], 1)], 1)], 1)], 1);
    }), 1)], 1)]), _c('hr'), _c('b-form-group', {
      scopedSlots: _vm._u([{
        key: "label",
        fn: function () {
          return [_c('div', {
            staticClass: "d-flex justify-content-between aligns-items-center mt-3"
          }, [_c('strong', [_vm._v(" Gerer les zones ")]), _c('div', {
            staticClass: "ctn-action-button"
          }, [_c('b-button', {
            attrs: {
              "variant": "outline-info",
              "size": "sm"
            },
            on: {
              "click": function ($event) {
                return _vm.FilterAddZone(filter.pobox);
              }
            }
          }, [_vm._v(" Ajouter une zone + ")])], 1)])];
        },
        proxy: true
      }], null, true)
    }, [_c('div', {
      staticClass: "row"
    }, _vm._l(filter.pobox, function (box, i) {
      return _c('div', {
        key: i,
        staticClass: "col-md-6"
      }, [_c('div', {
        staticClass: "bg-light px-3 mb-2"
      }, [_c('div', {
        staticClass: "row"
      }, [_c('b-form-group', {
        staticClass: "col-md-6",
        attrs: {
          "label": "Nom de la zone"
        }
      }, [_c('b-form-input', {
        attrs: {
          "trim": "",
          "required": ""
        },
        model: {
          value: box.text,
          callback: function ($$v) {
            _vm.$set(box, "text", $$v);
          },
          expression: "box.text"
        }
      })], 1), _c('b-form-group', {
        staticClass: "col-md-6",
        attrs: {
          "label": "Code postale"
        }
      }, [_c('b-form-input', {
        attrs: {
          "trim": "",
          "required": ""
        },
        model: {
          value: box.value,
          callback: function ($$v) {
            _vm.$set(box, "value", $$v);
          },
          expression: "box.value"
        }
      })], 1)], 1)])]);
    }), 0)]), _c('hr')], 1) : _vm._e()], 1)], 1)], 1)], 1);
  }), 1)])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(7658);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(3822);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/admin/Forms/CreneauFilters.vue?vue&type=script&lang=js&


// import Utilities from '../../../js/Utilities'
/* harmony default export */ var CreneauFiltersvue_type_script_lang_js_ = ({
  name: "CreneauBase",
  components: {
    //
  },
  props: {
    joursActive: {
      type: Array,
      required: true
    }
  },
  data() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const minDate = new Date(today);
    return {
      // filters: [Utilities.filter()],
      min_date: minDate,
      type_disabled_options: [{
        text: "Desactive les plages d'heures",
        value: "hours"
      }, {
        text: "Desactive les jours",
        value: "days"
      }]
    };
  },
  computed: {
    ...(0,vuex_esm/* mapState */.rn)(["creneauFilters"]),
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
    FilterAddDatedisabled(date_desactivee) {
      date_desactivee.push({
        date: ""
      });
    },
    FilterAddPeriodedisabled(periode_disabled) {
      periode_disabled.push({
        debut: "",
        fin: ""
      });
    },
    FilterAddSelectJour() {
      //
    },
    SelectAllDate(check, i) {
      if (this.creneauFilters[i]) {
        this.creneauFilters[i].jours_select = [];
        if (check === "all") {
          this.joursActive.forEach(item => {
            this.creneauFilters[i].jours_select.push(item.indice);
          });
        }
      }
    },
    SelectOneDate(i) {
      if (this.creneauFilters[i]) {
        if (this.creneauFilters[i].jours_select.length >= this.joursActive.length) {
          this.creneauFilters[i].jourmode = "all";
        } else {
          this.creneauFilters[i].jourmode = "manuel";
        }
      }
    },
    FilterRemoveDateDesactivee(i, dates) {
      if (dates[i]) {
        dates.splice(i, 1);
      }
    },
    FilterRemovePeriodeDesactivee(i, dates) {
      if (dates[i]) {
        dates.splice(i, 1);
      }
    },
    FilterMinDateFin(min_date) {
      if (!min_date) {
        return this.min_date;
      }
      return min_date;
    },
    FilterAdd() {
      // this.creneauFilters.push(Utilities.filter());
      this.$store.dispatch("SetFilterAdd");
    },
    FilterRemove(i) {
      if (this.creneauFilters[i]) {
        this.creneauFilters.splice(i, 1);
      }
    },
    FilterAddZone(zones) {
      zones.push({
        text: "",
        value: ""
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/App/components/admin/Forms/CreneauFilters.vue?vue&type=script&lang=js&
 /* harmony default export */ var Forms_CreneauFiltersvue_type_script_lang_js_ = (CreneauFiltersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/App/components/admin/Forms/CreneauFilters.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  Forms_CreneauFiltersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "538aad66",
  null
  
)

/* harmony default export */ var CreneauFilters = (component.exports);

/***/ })

}]);
//# sourceMappingURL=creneauxMylittlepressing.common.479.js.map