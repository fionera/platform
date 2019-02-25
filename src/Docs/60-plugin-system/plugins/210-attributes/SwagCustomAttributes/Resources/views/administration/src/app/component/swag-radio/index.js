import { Component } from 'src/core/shopware';
import utils from 'src/core/service/util.service';
import template from './swag-radio.html.twig';
import './swag-radio.scss';

Component.register('swag-radio', {
    template,

    // Helps to get the correct value for the actual administration language - provides the getInlineSnippet()-function
    mixins: ['sw-inline-snippet'],

    props: {
        // Passed from the attribute config
        label: {
            required: false
        },
        // Passed from the attribute config
        options: {
            required: true,
            type: Array
        },
        // Passed from the attribute config
        variant: {
            type: String,
            required: false,
            default: 'circle'
        },
        // Passed from the entity attributes
        value: {
            required: false
        }
    },

    data() {
        return {
            utilsId: utils.createId()
        };
    },

    computed: {
        id() {
            return `swag-radio--${this.utilsId}`;
        }
    },

    methods: {
        onOptionClicked(option) {
            this.$emit('input', option.id);
        }
    }
});
