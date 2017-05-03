<template>
    <div>
    <form @submit.prevent="onSubmit" @input="clearErrors">
    <div class="tile is-parent is-8">
        <article class="tile is-child box">
          <h1 class="title">Details</h1>
          <div class="block">
            <form-input-text name="name" v-model="form.name"/>
            <form-input-wysiwyg name="description" v-model="form.description" ref="wysiwyg"/>

            <p class="control">
              <button class="button is-primary" :disabled="form.errors.any()">Submit</button>
              <button class="button is-link">Cancel</button>
            </p>
          </div>
        </article>
      </div>
      </form>
      <div class="tile is-parent is-8">
      <article class="tile is-child box">
        <media-library :images="form.images" v-model="uploads"></media-library>  
        </article>
    </div>
    </div>
    
</template>

<script>

    import Form from './../../utilities/Form'
    import FormMixin from './../../utilities/FormMixin'
    import MediaLibrary from './MediaLibrary.vue'
    


    import axios from 'axios'
    


    export default {

        components: {
           
            MediaLibrary,
            
        },

        mixins: [FormMixin],

        created() {
            
        },

        data() {
            return {
                form: new Form({
                  name: '',
                  description: '',
                  
                }),
                uploads: [],
                getUrl: `/api/ecommerce/products/${this.id}`,
                putUrl: `/api/ecommerce/products/${this.id}`,

                
            }
        },

        methods: {

          loadResource() {
            axios.get(`https://oakmere.dev/api/ecommerce/products/${this.id}`)
                .then(response => {
                  this.form = new Form(response.data)
                  // console.log(this.$children)
                  this.$nextTick(function() {
                      this.$children.forEach($el => $el.contentLoaded && $el.contentLoaded())  
                  })
                  
                  
                })
          },

          clearErrors(event) {
            this.form.errors.clear(event.target.name)
          },


          onSubmit() {
            this.form.set('uploads', this.uploads) 
            this.form.put(`https://oakmere.dev/api/ecommerce/products/${this.id}`)
                .then(response => console.log(response));
        },
        }
    }
</script>
