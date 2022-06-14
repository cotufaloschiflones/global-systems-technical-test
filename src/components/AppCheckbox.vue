<template>
  <v-checkbox
    v-bind="{...$attrs, ...$props}"
    class="app-checkbox"
    v-on="$listeners"
  >
    <template
      v-for="(i, slot) in $scopedSlots"
      v-slot:[slot]
    >
      <slot :name="slot" />
    </template>
  </v-checkbox>
</template>

<script>
export default {
  name:  'AppCheckbox',
  model: {
    prop:  'inputValue',
    event: 'change'
  },
  props: {
    inputValue:        { type: Boolean, default: false },
    ripple:            { type: Boolean, default: false },
    color:             { type: String, default: 'secondary' },
    onIcon:            { type: String, default: 'mdi-checked' },
    offIcon:           { type: String, default: 'mdi-unchecked' },
    indeterminateIcon: { type: String, default: 'mdi-minus' }
  }
}
</script>

<style lang="scss">
.app-checkbox {
  .v-input--selection-controls__input {
    width: 40px;
    height: 40px;
    .v-icon {
      min-width: 46px;
      background-repeat: no-repeat;
      background-position: center left;
      background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
      color: #5dc2af;
    }
    .v-icon.mdi-unchecked {
      background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
    }
    .v-icon.mdi-checked {
      background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
    }
  }
}
</style>
