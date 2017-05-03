<template>
    <div class="media-library" @drop.prevent="handleDrop" @dragenter="hovering = true" @dragleave="hovering = false" :class="{'hovered': hovering}">
        <ul>
            <li v-for="image in images">
                <img :src="image.url" alt="">
            </li>
        </ul>
        <!--UPLOAD-->
        <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
            <h1>Upload images</h1>
            <div class="dropbox">
                <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
                       accept="image/*" class="input-file">
            </div>
        </form>
        <div class="dropzone-preview">
            <img :src="image" />
            <button @click="removeImage" v-if="image">Remove</button>
        </div>
    </div>
</template>

<script>

    export default {

        props: {
            images: Array
        },

        data() {
            return {
                image: '',
                hovering:false
            }
        },

        methods: {
            handleDrop(e) {
                console.log(e)
            },

            onFileChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length) return;
                this.createImage(files[0]);
            },
            createImage(file) {
                let image = new Image();
                let reader = new FileReader();
                let vm = this;

                reader.onload = (e) => {
                    vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            removeImage: function (e) {
                this.image = '';
            }
        }

    }

</script>

<style lang="scss">
    .media-library {
        &.hovering {
            background-color: red;
         }
        ul {
            background-color: #ffffff;
            margin: 0;
            padding: 15px 15px 5px;
            min-height: 105px;
            /*border-radius: 10px;*/
            li {
                list-style: none;
                display: inline-block;
                height: 75px;
                margin-right: 10px;
                margin-bottom: 10px;
                img {
                    height: 100%;
                    width: auto;
                }
            }
        }
    .dropbox {
        outline: 2px dashed grey; /* the dash box */
        outline-offset: -10px;
        background: lightcyan;
        color: dimgray;
        padding: 10px 10px;
        min-height: 200px; /* minimum height */
        position: relative;
        cursor: pointer;
    }

    .input-file {
        opacity: 0; /* invisible but it's there! */
        width: 100%;
        height: 200px;
        position: absolute;
        cursor: pointer;
    }

    .dropbox:hover {
        background: lightblue; /* when mouse over to the drop zone, change color */
    }

    .dropbox p {
        font-size: 1.2em;
        text-align: center;
        padding: 50px 0;
    }
    }
</style>