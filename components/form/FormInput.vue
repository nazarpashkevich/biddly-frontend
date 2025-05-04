<script lang="ts">
import { defineComponent } from 'vue'
import { ErrorMessage, Field } from "vee-validate";

export default defineComponent({
  name: "FormInput",
  components: { ErrorMessage, Field },
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },

  }
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <Field :name="name" :placeholder="placeholder" :rules="{isRequired: required}" :type="type"
           class="border-b border-b-indigo-500 px-2 py-1 outline-0"></Field>

    <ErrorMessage :name="name" class="text-xs text-red-400"></ErrorMessage>
  </div>
</template>
