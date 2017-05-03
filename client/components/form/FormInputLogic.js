export default {


	props: {
		value: String,
		name: String
	},


	computed: {
		hasError() {
			return this.$parent.form.errors.has(this.name)
		},
		getError() {
			return this.$parent.form.errors.get(this.name)
		},
		label() {
			return this.name.charAt(0).toUpperCase() + this.name.substr(1)
		}
	},

	methods: {
		handleInput(value) {
			this.$emit('input', value)
		}
	}

}	