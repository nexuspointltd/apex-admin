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
    import axios from 'axios'

    const uploadAttachment = function (attachment) {
        var file, form, key, xhr;
        file = attachment.file;
        key = createStorageKey(file);
        form = new FormData;
        form.append("key", key);
        form.append("Content-Type", file.type);
        form.append("upload", file);
        axios.post('https://oakmere.dev/api/ecommerce/uploads', form)
            .then(response => {
                let href, url;
                url = href = response.data.url;
                return attachment.setAttributes({
                    url: url,
                    href: href
                });
            })
//        xhr = new XMLHttpRequest;
//        xhr.open("POST", 'https://oakmere.dev/api/ecommerce/uploads', true);
//        xhr.upload.onprogress = function(event) {
//            var progress;
//            progress = event.loaded / event.total * 100;
//            return attachment.setUploadProgress(progress);
//        };
//        xhr.onload = function() {
//            var href, url;
//            if (xhr.status === 204) {
//                url = href = host + key;
//                return attachment.setAttributes({
//                    url: url,
//                    href: href
//                });
//            }
//        };
//        return xhr.send(form);
    };

    const createStorageKey = function (file) {
        var date, day, time;
        date = new Date();
        day = date.toISOString().slice(0, 10);
        time = date.getTime();
        return "tmp/" + day + "/" + time + "-" + file.name;
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


            this.trix.addEventListener('trix-initialize', function () {
                //
            })
            this.trix.addEventListener('trix-change', function (event) {
                if (this.oldValue != vm.$refs.output.value) {
                    vm.$emit('input', vm.$refs.output.value)
                    this.oldValue = vm.$refs.output.value
                }
            })
            this.trix.addEventListener('trix-attachment-add', function (event) {
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