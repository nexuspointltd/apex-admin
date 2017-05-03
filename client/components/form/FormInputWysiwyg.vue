<template>
	<div>
		<label class="label" :for="`form-${this.name}`">
			<slot>{{ label }}</slot>
		</label>

		<input :id="componentId" type="hidden" ref="output">
		<trix-editor class="trix-content" :input="componentId" ref="trix"></trix-editor>
    </div>	
</template>

<script>
	import trix from 'trix'

	const uploadAttachment = function(attachment) {
		    		var href, url;
			        url = href = 'media/15/Screen Shot 2017-04-26 at 10.46.40.png';
			        return attachment.setAttributes({
			          url: url,
			          // href: href
			        });

			    }
	
	export default {

		data() {
			return {
				trix: null,
				oldValue: ''
			}
		},

		props: {
			value: String,
			name: String
		},

		computed: {
			componentId() {
				return Math.random().toString().substr(2)
			},

			label() {
				return this.name.charAt(0).toUpperCase() + this.name.substr(1)
			}
		},

		methods: {
			contentLoaded() {				
				this.trix.editor.loadHTML(this.value)	
			}
		},

		// created() {
		// 	this.trix = this.$refs.trix
		// },

		mounted() {
			this.trix = this.$refs.trix
			
			
			let vm = this


			this.trix.addEventListener('trix-initialize', function() {
				//
			})
			this.trix.addEventListener('trix-change', function(event) {
				if (this.oldValue != vm.$refs.output.value) {
					vm.$emit('input', vm.$refs.output.value)
					this.oldValue = vm.$refs.output.value
				}
			})
			this.trix.addEventListener('trix-attachment-add', function(event) {
				console.log(event);
			    var attachment;
			    attachment = event.attachment;
			    if (attachment.file) {
			      return uploadAttachment(attachment);
			    }

			    
			  });
		},

		

	}

</script>

<style type="sass">
	@import '~trix/dist/trix.css'
</style>