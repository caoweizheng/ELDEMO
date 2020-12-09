<!--
 * @Date: 2019-09-02 09:25:10
 * @LastEditors: xshaobaozi
 * @LastEditTime: 2020-06-18 18:30:06
 -->


<script>
import baseLayout from "./base-layout.vue";
import { select } from "./../props-config";
import * as API from "./base-enum-remote";
import { syncGetSearch } from "./base-search-remote";
import { handleEmitValue, string, handleEmitBlur } from "./../props-config";
let selectTimer = null;
function setValue(val) {
  if (isNumber(val)) return val + "";
  return val;
}

function isNumber(val) {
  return (
    isNaN(val) === false && val !== "" && val !== undefined && val !== null
  );
}
export default {
  render(h) {
    return (
      <base-layout
        {...{
          props: {
            readOnly: this.readOnly,
            value: this.showValue,
            labelWidth: this.labelWidth,
            textAlign: this.textAlign,
            styleType: this.styleType,
            isRequire: this.isRequire,
            label: this.label,
            isDipatch: this.isDipatch,
            isDipatchStyle: this.isDipatchStyle
          }
        }}
      >
        <el-select
          v-model={this.inputValue}
          {...{
            slot: "control",
            on: {
              "visible-change": this.visibleChange,
              "focus.native": this.handleFocus,
              change: this.handleChange
            },
            props: {
              disabled: this.disabled,
              filterable: this.filterable,
              multiple: this.multiple,
              remote: this.remote,
              remoteMethod: this.selectRemoteMethod,
              placeholder: this.placeholder,
              clearable: true
            }
          }}
        >
          {this.getOptions.filter(this.optionsFilter).map(item => {
            return (
              <el-option
                {...{
                  props: {
                    ...this.optionsFormat(item)
                    // label: item.comment,
                    // value: item.code
                  }
                }}
              >
                <span style="float: left;">{item.code}</span>
                <span style="float: right;">{item.comment}</span>
              </el-option>
            );
          })}
        </el-select>
      </base-layout>
    );
  },
  name: "base-select",
  components: {
    baseLayout
  },
  computed: {
    showValue() {
      if (this.getOptions.length === 0) return this.value;
      const index = this.getOptions.findIndex(item => item.code == this.value);
      if (index > -1) {
        return this.getOptions[index].comment;
      } else {
        return this.value;
      }
    },
    inputValue: {
      get() {
        if (this.multiple === true) {
          return this.value;
        } else {
          return setValue(this.value);
        }
      },
      set(val) {
        if (this.multiple === true) {
          return this.$emit("input", val);
        }
        if (this.isDipatch) {
          this.$emit("input", val);
          this.handleChange(val);
          this.$store.dispatch("updateObject", {
            obj: this.dipatchObj,
            attr: this.dipatchAttr,
            val: val
          });
        } else {
          this.$emit("input", val);
        }
      }
    },
    getOptions() {
      // 如果是拉去服务器下拉
      if (this.remote || this.apiName) {
        return this.list.map(formatValue);
      } else {
        return this.options.map(formatValue);
      }

      function formatValue(item) {
        return {
          ...item,
          comment: item.comment,
          code: setValue(item.code)
        };
      }
    }
  },
  watch: {
    // value(_new, _old) {
    //   console.log(_new)
    //   if (this.readOnly === true && _new) {
    //     this.init();
    //   }
    // },
    params(_new, _old) {
      // if (this.apiName && this.filterable === false && this.remote === false) {
      if (this.apiName) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          {
            this.init();
          }
          this.timer = null;
        }, 300);
      }
    }
  },
  props: {
    ...select,
    options: {
      type: Array,
      default: () => []
    },
    apiName: {
      type: String,
      default: ""
    },
    filterable: {
      type: Boolean,
      default: false
    },
    remote: {
      type: Boolean,
      default: false
    },
    // 接受固定参数
    params: {
      type: [Object, Array],
      default: () => ({})
    },
    value: {
      type: [String, Array, Number],
      default: ""
    },
    isCache: {
      type: Boolean,
      default: true
    },
    optionsFormat: {
      type: Function,
      default: function(item) {
        return {
          label: item.comment,
          value: item.code
        };
      }
    },
    optionsFilter: {
      type: Function,
      default: function(item) {
        return true;
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    visibleChange(type) {
      if (this.isFirst === true) {
        this.isFirst = false;
      }
      this.$emit("visible-change", type);
      if (type === false) {
        this.handleEmitBlur(this.selectItem);
      }
    },
    handleEmitBlur,
    handleChange(val) {
      if (this.isFirst === true) return false;
      if (!val) return false;
      this.selectItem = null;
      if (this.multiple === true) {
        //
      } else {
        if (this.getOptions && this.getOptions.length > 0) {
          this.selectItem = this.getOptions.find(item => item.code == val);
        }
        if (this.selectItem) {
          this.searchVal = this.selectItem.comment;
          this.$emit("handleEmitValue", this.selectItem);
          this.$emit("handle-emit-value", this.selectItem);
        }
      }
      //   }, 300);
    },
    // select远程搜索
    selectRemoteMethod(val) {
      if (!val) return false;
      if (val == this.searchVal) return false;
      setTimeout(() => {
        clearTimeout(this.timer);
        syncGetSearch(this.apiName, {
          ...this.params,
          query: val
        }).then(res => {
          this.list = res;
        });
      }, 1000);
    },
    // 拉去固定参数的数据
    syncGetOptions(params) {
      return API.syncGetEnum(this.apiName, params).then(res => {
        this.list = res;
      });
    },
    init() {
      const isSearchSelect = this.remote && this.filterable;
      if (!isSearchSelect && this.apiName) {
        if (this.isCache === true) {
          this.syncGetOptions(this.params);
        } else {
          this.selectRemoteMethod(Math.random());
        }
      }
    }
  },
  data() {
    return {
      isFirst: true,
      timer: null,
      selectTimer: null,
      timer: null,
      list: [],
      searchVal: "",
      selectItem: null
    };
  }
};
</script>
