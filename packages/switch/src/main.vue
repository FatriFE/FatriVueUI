<template>
    <div class="fa-switch" :class="style" @click="handleClick">
        <span class="fa-switch__label label__left" v-if="!textInsert">{{activeText}}</span>
        <span class="fa-switch__core" :style="{backgroundColor: isActive ? activeColor : inactiveColor}">
            <span class="fa-switch__label" v-if="textInsert" :style="{color: isActive ? activeTextColor : inactiveTextColor}">{{isActive ? activeText : inactiveText}}</span>
        </span>
        <span class="fa-switch__label label__right" v-if="!textInsert">{{inactiveText}}</span>

    </div>
</template>

<script >
export default {
    name: 'FaSwitch',
    props: {
        value: { type: Boolean, default: false },
        activeText: { type:String, default: '' },
        inactiveText: {type: String, default: '' },
        textInsert: { type: Boolean, default: true },
        activeColor: {type: String, default: '#13CE66'},
        activeTextColor: {type: String, default: '#ffffff'},
        inactiveColor: {type: String, default: '#cccccc'},
        inactiveTextColor: {type: String, default: '#ffffff'},
        size: {type: String, default: 'mini', validate: val => ['medium', 'small', 'mini'].indexOf(val) !== -1}
    },
    data() {
        return {
            isActive: false
        }
    },
    watch: {
        value: {
            handler(val) {
                this.isActive = val
            },
            immediate: true
        }
    },
    computed: {
      style() {
          let classList = [`fa-switch--${this.size}`]
          if(this.isActive) classList.push('fa-switch--active')
          return classList
      }
    },
    methods: {
        handleClick() {
            this.isActive = !this.isActive
            this.$emit('input', this.isActive)
        }
    }
}
</script>
<style scoped lang="scss">
    %after {
        content: "";
        position: absolute;
        top: 2px;
        border-radius: 100%;
        transition: all .3s;
        width: 20px;
        height: 20px;
        background-color: #fff;
    }
    .fa-switch {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        .fa-switch__label {
            display: inline-block;
            font-size: 14px;
            font-weight: 500;
            color: #333333;
            &.label__left {
                margin-right: 10px;
            }
            &.label__right {
                margin-left: 10px;
            }
        }
        .fa-switch__core {
            padding:2px 5px 2px 25px;
            height: 20px;
            border-radius: 12px;
            position: relative;
            cursor: pointer;
            transition: background-color .3s;
            display: inline-flex;
            min-width: 20px;
            .fa-switch__label {
                color: #ffffff;
            }
            &:after {
               @extend %after;
                left: 2px;
            }
        }
        &--small {
            .fa-switch__label {
                font-size: 16px;
                font-weight: 500;
            }
            .fa-switch__core {
                padding:2px 8px 2px 32px;
                height: 28px;
                border-radius: 15px;
                min-width: 30px;
                .fa-switch__label {
                    line-height: 30px;
                    color: #ffffff;
                }
                &:after {
                    @extend %after;
                    width: 27px;
                    height: 27px;
                    top:2px;
                    left: 2px;
                }
            }
        }
        &--medium {
            .fa-switch__label {
                font-size: 18px;
                font-weight: 500;
            }
            .fa-switch__core {
                padding:2px 8px 2px 32px;
                height: 30px;
                border-radius: 15px;
                min-width: 40px;
                .fa-switch__label {
                    line-height: 30px;
                    color: #ffffff;
                }
                &:after {
                    @extend %after;
                    width: 30px;
                    height: 30px;
                    top:2px;
                    left: 2px;
                }
            }
        }
    }
    .fa-switch.fa-switch--active {
        .fa-switch__core {
            padding-left: 5px;
            padding-right: 25px;
            &:after {
                right: 2px;
                left: 100%;
                margin-left: -22px;
            }
        }

        &.fa-switch--small {
            .fa-switch__core {
                padding-left: 8px;
                padding-right: 30px;
                &:after {
                    right: 2px;
                    left: 100%;
                    margin-left: -28px;
                }
            }
        }

        &.fa-switch--medium {
            .fa-switch__core {
                padding-left: 8px;
                padding-right: 30px;
                &:after {
                    right: 2px;
                    left: 100%;
                    margin-left: -32px;
                }
            }
        }
    }

</style>
