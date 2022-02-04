<template>
  <button
    :disabled="disabled || loading"
    @click="handleClick"
    class="btn"
    :class="[
      {'btn-icon btn-fab': icon},
      {[`btn-${type}`]: type},
      {[`btn-${size}`]: size},
      {'disabled': disabled && tag !== 'button'}
    ]">
    <slot name="loading">
      <i v-if="loading" class="fas fa-spinner fa-spin"></i>
    </slot>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "base-button",
  props: {
    icon: Boolean,
    loading: Boolean,
    disabled: Boolean,
    type: {
      type: String,
      default: "default",
      description: "Button type (primary|secondary|danger etc)"
    },
    size: {
      type: String,
      default: "",
      description: "Button size (sm|lg)"
    },
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
<style>
</style>
