<template>
<div class="App">
    <div class="center-xs Intro">
        <h1>English to BOAA Translator</h1>
        <h3>Built By: Liam Jones</h3>
    </div>

    <div class="Forwards row around-xs middle-xs fullWidth">
        <div class="col-xs-12 col-md-5 limitReadable">
            <b>English</b>
            <textarea class="uk-textarea fullWidth" v-model="english" rows="4" placeholder="Enter some text here">
            </textarea>
        </div>

        <div class="col-xs-1 center-xs">
            <button type="button" class="uk-button-primary" @click="translate('af')" uk-icon="icon: chevron-right; ratio: 2" />
            <!-- <br>
            <button type="button" class="uk-button-primary" @click="translate('en')" uk-icon="icon: chevron-left; ratio: 2" /> -->
        </div>

        <div class="col-xs-12 col-md-5 limitReadable">
            <b>BOAA</b>

            <span v-if="translated" class="copyToClip clickable" v-clipboard="() => translated"
                  uk-icon="icon: move; ratio:0.75;" uk-tooltip="Copy to Clipboard" />

            <textarea class="uk-textarea fullWidth" v-model="translated" rows="4" placeholder="Bou translated text will appear here">
            </textarea>
        </div>
    </div>

    <div v-if="history && history.length" class="row fullWidth center-xs ">
        <div class="col-xs-6 start-xs history">
            <b>Recent Translations</b>
            <ul>
                <li v-for="item in history" :key="item.english+item.timestamp.getHours()">
                    (<b>{{item.timestamp.getHours()}}: {{item.timestamp.getMinutes()}}</b>) {{item.english}} - {{item.bou}}
                </li>
            </ul>
        </div>

    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            url: 'https://translation.googleapis.com/language/translate/v2?key',
            apiKey: null,
            english: null,
            translated: null,
            history: [],

            vowels: "aeiouyw",

            replaceChars: {
                'w': 'z',
                'g': 'l',
                'v': 'f',
                'i': 'e',
                'n': 'y',
                'u': 'a'
            }
        }
    },

    watch: {
        translated() {
            if (this.translated)
                this.history.push({
                    english: this.english,
                    timestamp: new Date(),
                    bou: this.translated
                })
        }
    },

    methods: {
        isVowel(char, vowels) {
            return vowels.indexOf(char.toLowerCase()) > -1
        },
        reverseStr(str) {
            return str.split("").reverse().join("")
        },


        toAfrican(english) {
            return this.axios.get(`${this.url}=${this.apiKey}&q=${english}&target=afr`)
        },
        toEnglish() {
            return this.axios.get(`${this.url}=${this.apiKey}&q=${this.translated}&target=en`)
        },

        processWord(word, vowels) {
            // Step 3: Check that the word is even length
            if (word.length % 2 == 0)
                return word


            // Step 4: Pair last vowel with duplicate
            let reversed = this.reverseStr(word)
            for (let i = 0; i < reversed.length; i++) {

                // Find first vowel reading right to left
                if (this.isVowel(reversed[i], vowels)) {

                    // If the last vowel is already dupped. Skip this letter and find the next vowel
                    if (i < reversed.length-1 && reversed[i] == reversed[i+1]) {
                        // Josh ignores all other instances of this vowel all together
                        let index = vowels.indexOf(reversed[i])
                        vowels = vowels.substring(0, index) +  vowels.substring(index+1, vowels.length)
                        continue
                    }

                    // Insert a duplicate of the current letter at the current index
                    let index = reversed.length - i
                    return word.substring(0, index) + reversed[i] + word.substring(index, word.length)
                }
            }


            // What if the word doesn't have a vowel?
            return word
        },


        async forwards(english) {
            // Step 1: English to Afrikkans
            let response = await this.toAfrican(english)
            let afrikkans = response.data.data.translations[0].translatedText

            // Step 2: Replace specific characters
            for (let key in this.replaceChars)
                afrikkans = afrikkans.replace(new RegExp(key, 'g'), this.replaceChars[key])

            // Process the sentence one word at a time to check against their lengths
            let list = []
            for (let word of afrikkans.split(" " ))
                list.push(this.processWord(word, this.vowels))


            // Put the sentence back together
            this.translated = ""
            for (let word of list)
                this.translated += word.toUpperCase() + " "
        },

        translate(languageCode) {
            if (this.apiKey) {
                if (languageCode == 'af' && this.english) {
                    this.forwards(this.english)
                } else {
                    this.toEnglish()
                }
            }
        }
    },

    async mounted() {
        this.apiKey = await localStorage.getItem("DD-GoogleTranslate-APIKEY")

        if (!this.apiKey) {
            this.apiKey = prompt("Please enter a valid google translate api token")
            localStorage.setItem("DD-GoogleTranslate-APIKEY", this.apiKey)
        }
    },
}
</script>

<style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }

    .App {
        background-image: url('assets/shattered.png');
        min-height: 100vh;
        height: 100%;
        min-width: 100vw;
        width: 100%;
    }

    .Intro {
        padding: 50px 0px 100px 0px;
    }


    .Forwards {
        margin-left: 0px !important;
        font-size: 16px;
    }

    b {
        font-size: 14px;
    }

    .copyToClip {
        margin-left: 10px;
    }

    .col-xs-1 {
        margin: 30px 0px;
    }

    textarea, button {
        border-radius: 5px !important;
        padding: 1px 10px;
    }

    .history {
        margin-top: 75px;
    }
    .history ul {
        border: 1px black solid;
        border-radius: 5px;
        padding: 15px 30px;
        margin: 0px;
        background-color: white;
    }


    .fullWidth {
        width: 100% !important;
    }
    .fullHeight {
        height: 100%;
    }
    .clickable {
        cursor: pointer;
    }
    .limitReadable {
        max-width: 800px;
    }
</style>
