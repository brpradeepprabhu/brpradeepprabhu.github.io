<template>
    <v-layout>
        <v-flex xs12 md8>
            <canvas id="canvas" width="1000" height="1000"></canvas>
            <img alt="Vue logo" id="shirt" src="../assets/shirt.png" style="display: none">
        </v-flex>
        <v-flex xs12 md4>
            <v-tabs v-model="active">
                <v-tab>
                    Shirt Color
                </v-tab>
                <v-tab-item>
                    <chrome-picker v-model="colorPicker" @change="updateValue"
                                   v-bind:style="{width:'100%'}"></chrome-picker>
                    <compact-picker v-model="colorPicker" v-bind:style="{width:'100%'}"></compact-picker>
                </v-tab-item>
                <v-tab>
                    Text
                </v-tab>
                <v-tab-item>
                    Test
                </v-tab-item>
            </v-tabs>
        </v-flex>
    </v-layout>
</template>

<script>
    import {Chrome, Compact} from 'vue-color'

    export default {
        name: "customize",
        data() {
            return {
                colorPicker: '',
                stage: '',
                shirtImage: '',
                timer: '',
                shirtContainer: ''
            }
        },
        watch: {
            colorPicker: function () {
                if (!this.shirtImage || !this.colorPicker.rgba) {
                    return this.colorPicker.rgba
                } else {
                    if (this.timer) {
                        clearTimeout(this.timer)
                    }
                    this.timer = window.setTimeout(() => {
                        this.shirtImage.filters = [new window.createjs.ColorFilter(0, 0, 0, this.colorPicker.rgba.a, this.colorPicker.rgba.r, this.colorPicker.rgba.g, this.colorPicker.rgba.b, 0)];
                        this.shirtImage.updateCache(0, 0, this.shirtImage.image.width, this.shirtImage.image.height);
                        this.stage.update();
                    }, 500);
                }

            }
        },
        components: {
            'chrome-picker': Chrome,
            'compact-picker': Compact
        },
        mounted: function () {
            /* eslint-disable */
            var canvas = document.getElementById('canvas');
            canvas.width = canvas.parentElement.offsetWidth
            this.stage = new window.createjs.Stage(canvas);

            let image = document.getElementById('shirt');
            console.log(image.height);
            this.shirtContainer = new createjs.Container();
            this.shirtImage = new window.createjs.Bitmap(image);
            this.shirtImage.scaleX = image.width > 800 ? 800 / image.width : 1;
            this.shirtImage.scaleY = image.height > 800 ? 800 / image.height : 1;
            this.shirtContainer .addChild(this.shirtImage);
            this.shirtImage.x = 100;
            this.shirtImage.y = 100;
            this.layerImage = this.shirtImage.clone();
            this.layerImage.alpha = 0.2;
            this.shirtContainer .addChild(this.layerImage);
            this.shirtImage.filters = [new window.createjs.ColorFilter(0, 0, 0, 1, 113, 143, 166, 0)];
            this.shirtImage.cache(0, 0, image.width, image.height);
            //this.shirtContainer.skewY = 80;
            this.stage .addChild(this.shirtContainer);
            this.stage.update();

        },
        methods: {
            updateValue: function (value) {
                window.console.log(value.rgba)
            }
        }
    }
</script>

<style>
    .vc-chrome-saturation-wrap {
        padding-bottom: 25%;
    }

    .theme--light canvas {
        background: #f4f4f4;

    }

    .theme--dark canvas {
        background: #6f6d6a;

    }
</style>