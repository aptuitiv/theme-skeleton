/**
 * Configuration for the aptuitiv-build package.
 * See https://github.com/aptuitiv/website-build-tools/blob/main/docs/Configuration.md for more information.
 */
export default {
    copy: [
        {
            src: 'node_modules/@splidejs/splide/dist/**/*',
            dest: 'splide'
        },
        {
            src: 'node_modules/@splidejs/splide-extension-video/dist/**/*',
            dest: 'splide-video'
        },
        {
            src: 'node_modules/just-validate/dist/just-validate.production.min.js',
            dest: 'just-validate'
        }
    ],
    css: {
        buildFiles: 'main.css'
    },
    javascript: {
        bundles: [
            {
                build: 'main.js',
                nodeModules: [
                    'micromodal/dist/micromodal.min.js'
                ],
                src: [
                    'script-loader.js',
                    'iframe-loader.js',
                    'notifications.js',
                    'navigation.js',
                    'accordion.js',
                    'main.js'
                ]
            },
            {
                build: 'lightbox.js',
                src: [
                    'fslightbox.js'
                ]
            }
        ],
        files: []
    }
};