<template>
  <div class="formField">
    <div class="formField__control">
      <textarea
        v-if="type === 'textarea'"
        :id="id"
        :name="id"
        class="formField__textarea"
        placeholder=" "
        v-bind="$attrs"
        @input="$emit('update:value', $event.target.value)"
      ></textarea>
      <input
        v-else
        :id="id"
        :name="id"
        class="formField__input"
        :type="type"
        placeholder=" "
        v-bind="$attrs"
        @input="$emit('update:value', $event.target.value)"
      />

      <label :for="id" class="formField__label">{{ label }}</label>
      <div class="formField__bar"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  // Disable automatic attribute inheritance, so that $attrs are
  // passed to the <input>, even if it's not the root element.
  // https://vuejs.org/v2/guide/components-props.html#Disabling-Attribute-Inheritance
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
      // Only allow types that essentially just render text boxes.
      validator(value) {
        return [
          "email",
          "number",
          "password",
          "search",
          "tel",
          "text",
          "textarea",
          "url",
        ].includes(value);
      },
    },
    label: {
      type: String,
      required: true,
    },
  },
  // Change the v-model event name to `update` to avoid changing
  // the behavior of the native `input` event.
  // https://vuejs.org/v2/guide/components-custom-events.html#Customizing-Component-v-model
  emits: ["update:value"],
};
</script>

<style lang="scss" scoped>
@mixin label-inactive() {
  font-size: 1.2rem;
  transform: translateY(0);
}

@mixin label-active() {
  font-size: 0.75rem;
  transform: translateY(-14px);
}

.formField {
  position: relative;
  display: block;
  margin-bottom: $size-grid-padding;
}
.formField__label {
  @include label-active;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  padding: 18px 12px 0;
  margin: 0;
  font-weight: normal;
  transition: all $duration-animation-input;
}
.formField__control {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: $color-input-bg;
  border-radius: $size-input-border-radius;
}
.formField__bar {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 1%;
  margin: 0 auto;
  content: "";
  border-bottom: $size-input-border solid $color-input-border;
  transition: all ($duration-animation-input * 2);
  transform: scaleX(0);
}
.formField__textarea {
  height: 150px;
}
.formField__input,
.formField__textarea {
  @extend %typography-medium;
  display: block;
  width: 100%;
  padding: $size-input-padding;
  margin-top: 24px;
  line-height: 1;
  color: #333;
  background: transparent;
  border: 0;
  border-bottom: $size-input-border solid $color-input-border;
  outline: 0;
  appearance: none;

  // IE 10-11
  &:input-placeholder {
    ~ .formField__label {
      @include label-inactive;
    }
  }

  // All other browsers except Edge
  &:placeholder-shown {
    ~ .formField__label {
      @include label-inactive;
    }
  }
  &:focus {
    ~ .formField__label {
      color: $color-primary;

      @include label-active;
    }
    ~ .formField__bar {
      border-bottom: 2px solid $color-primary;
      transform: scaleX(150);
    }
  }
}
.formField--error,
.formField--error * {
  color: $color-red !important;
}
.formField--success,
.formField--success * {
  color: $color-green !important;
}
</style>
