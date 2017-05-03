<template>
    <div id="app">
        <div class="container">
            <!--UPLOAD-->
            <form enctype="multipart/form-data" novalidate>
                <div class="dropbox">
                    <input type="file" multiple :name="uploadFieldName" @change="onFileChange"  accept="image/*" class="input-file">
                    <p v-if="isInitial">
                        Drag your file(s) here to begin<br> or click to browse
                    </p>
                    <div v-else>
                        <ul class="thumbnail-gallery">
                            <li v-for="(item, index) in queuedFiles">
                                <template v-if="item.data">
                                    <img :src="item.data">
                                    <i class="fa fa-times-circle" @click="removeImage(index)"></i>
                                </template>
                                <div v-else></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </form>
            <!--SUCCESS-->
            
            <!--FAILED-->
            <!-- <div v-if="isFailed">
                <h2>Uploaded failed.</h2>
                <p>
                    <a href="javascript:void(0)" @click="reset()">Try again</a>
                </p>
                <pre>{{ uploadError }}</pre>
            </div> -->
        </div>
    </div>
</template>

<script>
   // swap as you need
   // import { upload } from './file-upload.fake.service'; // fake service
   // import { upload } from './file-upload.service';   // real service
//    import { wait } from './utils';

    const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

    export default {
        name: 'app',
        data() {
            return {
                queuedFiles: [],
                uploadError: null,
                currentStatus: null,
                uploadFieldName: 'photos'
            }
        },
        computed: {
            isInitial() {
                return this.queuedFiles.length === 0
                // return this.currentStatus === STATUS_INITIAL;
            }
        },
        methods: {
            reset() {
                // reset form to initial state
                this.currentStatus = STATUS_INITIAL;
                this.queuedFiles = [];
                this.uploadError = null;
            },

            sendEvent() {
                let data = this.queuedFiles.filter(f => f.data)

                this.$emit('input', data)
            },

            onFileChange(event) {
                let files = event.target.files || event.dataTransfer.files;
                for(let i = 0; i < files.length; i++) {
                    let file = files[i]
                
                    let found = this.queuedFiles.find(f => {
                        return f.name === file.name && f.size === file.size
                    })
                    if (found) {
                        continue;
                    }
                    this.currentStatus = STATUS_SUCCESS

                    let fileObject = {
                        name: file.name,
                        size: file.size,
                        data: null
                    }
                    this.queuedFiles.push(fileObject)
                    this.createImage(files[i], fileObject)
                }
            },

            createImage(file, fileObject) {
                let image = new Image();
                let reader = new FileReader();
                let vm = this;

                reader.onload = (e) => {
                    
                    fileObject.data = e.target.result
                    this.sendEvent()
                };
                reader.readAsDataURL(file);
            },

            removeImage(index) {
                this.queuedFiles.splice(index, 1)
                this.sendEvent()
            }
        },
        mounted() {
            this.reset();
        },
    }

</script>

<style lang="scss">
    .dropbox {
        outline: 2px dashed grey; /* the dash box */
        outline-offset: -10px;
        // background: lightcyan;
        // color: dimgray;
        padding: 10px 10px;
        min-height: 200px; /* minimum height */
        position: relative;
        cursor: pointer;
    }

    .input-file {
        opacity: 0;
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


    ul.thumbnail-gallery {
        li {
            display: inline-block;
            padding: 0;
            height: 80px;
            position: relative;
            margin-right: 10px;
            img {
                height: 100%;
                width: auto;
                max-width: 160px;
            }
            i {
                position: absolute;
                top: -2px;
                right: -2px;
                font-size: 20px;
                color: red;
                cursor: pointer;
            }
            div {
                height: 100%;
                width: 100px;
                border: 1px solid black;
                background-color: yellow;
            }
        }
    }
</style>