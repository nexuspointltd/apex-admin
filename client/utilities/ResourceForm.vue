<template>
    <div>
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="">Name</label>
                <input class="form-control" type="text" v-model="form.name">
            </div>
            <div class="form-group">
                <label for="">Description</label>
                <textarea class="form-control" v-model="form.description"></textarea>
            </div>
            <div class="submit-group">
                <button type="submit" class="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
</template>

<script>

    import Form from './../utilities/Form'

    export default {

        props: {
            id: String
        },

        created() {
            this.loadResource()
        },

        methods: {
            loadResource() {
                axios.get(`/api/ecommerce/products/${this.id}`)
                    .then(response => this.form = new Form(response.data))
            },

            onSubmit() {
                this.form.put(`/api/ecommerce/products/${this.id}`)
                    .then(response => alert('Wahoo!'));
            }
        }
    }
</script>