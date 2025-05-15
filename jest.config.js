module.exports = {
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx,vue}',
        '!**/node_modules/**',
        '!**/vendor/**',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'vue'],

    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
     },
     
    // Enable coverage
    collectCoverage: true,
    // Recommended to use `v8` to support the generation of native v8 coverage reports.
    coverageProvider: 'v8',
    // Monocart can also support all coverage reports, so there is no need to set up reports here.
    coverageReporters: ['none'],

    transform: {
        '^.+\\.m?[tj]sx?$': ['babel-jest', {
            plugins: ['@babel/plugin-transform-private-methods']
        }],
        '^.+\\.(vue)$': '@vue/vue3-jest',
    },

    reporters: [
        // If custom reporters are specified, the default Jest reporter will be overridden. If you wish to keep it, 'default' must be passed as a reporters name:
        'default',

        // Monocart custom reporter to generate coverage reports.
        ['./lib', {
            // logging: 'debug',
            name: 'Jest Monocart Coverage Report',

            outputDir: './coverage-reports/v8',

            all: './src',

            sourcePath: {
                'src/': ''
            },

            reports: [
                'v8',
                'codecov',
                'raw',
                'text'
            ],

            onEntry: (entry) => {
                if (entry.url.endsWith('wrapped.js')) {
                    // console.log(entry.functions.map((it) => it.ranges));
                }
            },

            onEnd: () => {
                console.log('onEnd (before the global teardown)');
            }
        }]
    ],

    globalTeardown: './global-teardown.js'

};
