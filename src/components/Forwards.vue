<template>
<div class="Forwards row around-xs fullWidth">
    <div class="col-xs-5">
        <textarea class="uk-textarea fullWidth" v-model="english">
        </textarea>
    </div>

    <div class="col-xs-1 center-xs">
        <button type="button" class="uk-button-primary" @click="translate('af')" uk-icon="chevron-right" />
        <br>
        <button type="button" class="uk-button-primary" @click="translate('en')" uk-icon="chevron-left" />
    </div>

    <div class="col-xs-5">
        <textarea class="uk-textarea fullWidth" v-model="translated">
        </textarea>
    </div>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            url: 'https://translation.googleapis.com/language/translate/v2?key=AIzaSyBfBIucwY9Ho4csB3doxTabceqor52-B0c',
            english: null,
            translated: null
        }
    },
    methods: {
        toAfrican() {
            if (this.english) {
                let query = `${this.url}&q=${this.english}&target=af`
                this.axios.get(query).then(response => {
                    let translated = response.data.data.translations[0].translatedText
                    console.log(translated);

                    this.translated = translated
                })
            }
        },
        toEnglish() {
            if (this.translated) {
                let query = `${this.url}&q=${this.translated}&target=en`
                this.axios.get(query).then(response => {
                    let translated = response.data.data.translations[0].translatedText
                    console.log(translated);

                    this.english = translated
                })
            }
        },

        translate(languageCode) {
            if (languageCode == 'af') {
                this.toAfrican()
            } else {
                this.toEnglish()
            }
        }
    },
}
</script>

<style scoped>
    .Forwards {
        margin-left: 0px !important;
    }
</style>
