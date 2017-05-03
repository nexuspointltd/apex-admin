<template>
	<div>
		<label class="label" :for="`form-${this.name}`">
			<slot>{{ label }}</slot>
		</label>
	
		<p class="control" :class="hasError ? 'has-icon has-icon-right' : ''">
	      <input class="input"
	        :id="`form-${this.name}`"
	        :class="{'is-danger': hasError}"
	        type="text"
	        placeholder="Text input"
	        :value="value"
	        @input="handleInput($event.target.value)">
	      <span class="icon is-small" v-if="hasError">
	        <i class="fa fa-times"></i>
	      </span>
	      <span class="help is-danger" v-if="hasError" v-text="getError"></span>
	    </p>
    </div>	
</template>

<script>
	import FormInputLogic from './FormInputLogic'
	
	export default {
		mixins: [FormInputLogic]
	}

</script>