import { generate } from 'multiple-cucumber-html-reporter';
import cucumberJson from 'wdio-cucumberjs-json-reporter';
import fs from 'fs/promises';
import fsSync from 'fs';
import 'dotenv';
import path from 'path';
import fse from 'fs-extra';
import { deleteAsync } from 'del';
const excludeTests = 'none';
const destDir = './reports/downloads';
global.downloadDir = 'data/var/tmp/';
global.jUnitDir = './reports/junit/';
const htmlReportDir = './reports/html/';
const jsonReportDir = './reports/json/';
const reportDirs = [htmlReportDir, jsonReportDir];
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const max_parallel_browsers = 1;
import { envMap } from './data/url.js';

export const config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO supports running e2e tests as well as unit and component tests.
    runner: 'local',
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // of the configuration file being run.
    //
    // The specs are defined as an array of spec files (optionally using wildcards
    // that will be expanded). The test for each spec file will be run in a separate
    // worker process. In order to have a group of spec files run in the same worker
    // process simply enclose them in an array within the specs array.
    //
    // The path of the spec files will be resolved relative from the directory of
    // of the config file unless it's absolute.
    //
    specs: [[
    
        './features/dummyWebsite/0register.feature',

    './features/dummyWebsite/1login.feature',

    './features/dummyWebsite/2addToCart.feature',

    './features/dummyWebsite/3cartCheckout.feature',

    './features/dummyWebsite/4placeOrder.feature',

    './features/dummyWebsite/5downloadCSV.feature'

    
    ]],

exclude: [
    excludeTests
],

    // suites: {
    //     dummy_smoke: ['./features/dummyWebsite/**'],
    //     //dummy_smoke_2: ['./features/dummy2Website/**']
    //   },
    // Patterns to exclude.
    exclude: [
        excludeTests
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 1,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://saucelabs.com/platform/platform-configurator
    //
    capabilities: [],

    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',
    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/browserstack-service, @wdio/lighthouse-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/appium-service': 'info'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: 'https://rahulshettyacademy.com/client/',

    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    // services: [],
    //
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'cucumber',
    
    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried spec files should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: [
        'spec',
        // OR like this if you want to set the folder and the language
        [ 'cucumberjs-json', {
               jsonFolder: 'reports/json/',
               language: 'en',
           },
        ]
        // ,
        // ['junit', {
        //  outputDir: 'reports/junit',
        //  outputFileFormat: function(opts) { // optional
        //     return `results-${opts.cid}.${opts.capabilities.browserName}.xml`
        //  }
        // }]
       ],

    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: [
            "./step-definitions/**/given.js",
            "./step-definitions/**/when.js",
            "./step-definitions/**/then.js",
            "./step-definitions/**/placeOrder.js"
        ],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <string[]> Only execute the scenarios with name matching the expression (repeatable).
        name: [],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },


    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    
onPrepare: async function () {

    // ✅ Clean old reports
    await fs.rm('reports/', { recursive: true, force: true });

    // ✅ Create required folders
    await fs.mkdir('reports/json/', { recursive: true });
    await fs.mkdir('reports/html/', { recursive: true });

    console.log("✅ Reports folders created");
},


    /**
     * Gets executed before a worker process is spawned and can be used to initialize specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {string} cid      capability id (e.g 0-0)
     * @param  {object} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {object} specs    specs to be run in the worker process
     * @param  {object} args     object that will be merged with the main configuration once worker is initialized
     * @param  {object} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just after a worker process has exited.
     * @param  {string} cid      capability id (e.g 0-0)
     * @param  {number} exitCode 0 - success, 1 - fail
     * @param  {object} specs    specs to be run in the worker process
     * @param  {number} retries  number of retries used
     */
    // onWorkerEnd: function (cid, exitCode, specs, retries) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     * @param {string} cid worker id (e.g. 0-0)
     */
    // beforeSession: async function (config, capabilities, specs, cid) {
    //     const currentUrl = await browser.getUrl();

    //     // Convert text to a Buffer to ensure it is not Base64 encoded
    //      const stepInfo = `Current URL Before Step: ${currentUrl}`;
    //     // const buffer = Buffer.from(stepInfo, 'utf-8');

    //     // Attach text as a proper string (not Base64)
    //     cucumberJson.attach(stepInfo, 'text/plain');
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {object}         browser      instance of created browser/device session
     */
    // before: function (capabilities, specs) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {string} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Cucumber Hooks
     *
     * Runs before a Cucumber Feature.
     * @param {string}                   uri      path to feature file
     * @param {GherkinDocument.IFeature} feature  Cucumber feature object
     */
    // beforeFeature: function (uri, feature) {
    // },
    /**
     *
     * Runs before a Cucumber Scenario.
     * @param {ITestCaseHookParameter} world    world object containing information on pickle and test step
     * @param {object}                 context  Cucumber World object
     */
    // beforeScenario: function (world, context) {
    // },
    /**
     *
     * Runs before a Cucumber Step.
     * @param {Pickle.IPickleStep} step     step data
     * @param {IPickle}            scenario scenario pickle
     * @param {object}             context  Cucumber World object
     */
    beforeStep: async function (step, scenario, context) {
        const currentUrl = await browser.getUrl();

        // Convert text to a Buffer to ensure it is not Base64 encoded
         const stepInfo = `Current URL Before Step: ${currentUrl}`;

        // Attach text as a proper string (not Base64)
        cucumberJson.attach(stepInfo, 'text/plain');
    },
    /**
     *
     * Runs after a Cucumber Step.
     * @param {Pickle.IPickleStep} step             step data
     * @param {IPickle}            scenario         scenario pickle
     * @param {object}             result           results object containing scenario results
     * @param {boolean}            result.passed    true if scenario has passed
     * @param {string}             result.error     error stack if scenario failed
     * @param {number}             result.duration  duration of scenario in milliseconds
     * @param {object}             context          Cucumber World object
     */
    afterStep: async function (step, scenario, result, context) {
        const currentUrl = await browser.getUrl();

        // Attach screenshot (this is expected to be in Base64)
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');

        // Convert text to a Buffer to ensure it is not Base64 encoded
        const stepInfo = `Current URL After Step: ${currentUrl}`;
        // const buffer = Buffer.from(stepInfo, 'utf-8');

        // Attach text as a proper string (not Base64)
        cucumberJson.attach(stepInfo, 'text/plain');
    },
    /**
     *
     * Runs after a Cucumber Scenario.
     * @param {ITestCaseHookParameter} world            world object containing information on pickle and test step
     * @param {object}                 result           results object containing scenario results
     * @param {boolean}                result.passed    true if scenario has passed
     * @param {string}                 result.error     error stack if scenario failed
     * @param {number}                 result.duration  duration of scenario in milliseconds
     * @param {object}                 context          Cucumber World object
     */
    // afterScenario: function (world, result, context) {
    // },
    /**
     *
     * Runs after a Cucumber Feature.
     * @param {string}                   uri      path to feature file
     * @param {GherkinDocument.IFeature} feature  Cucumber feature object
     */
    // afterFeature: function (uri, feature) {
    // },
    
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {string} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {number} result 0 - command success, 1 - command error
     * @param {object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {object} exitCode 0 - success, 1 - fail
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    onComplete: async function(exitCode, config, capabilities, results) {
        await generate({
            jsonDir: 'reports/json/',
            reportPath: 'reports/html/',
            
displayDuration: true,
    openReportInBrowser: true

        });
        console.log("HTML report generated");
        // Ensure destination directory exists
        if (!fsSync.existsSync(destDir)) {
            await fs.mkdir(destDir, { recursive: true });
        }
    
        console.log("\nCurrent content of local reports/download Directory before copy function:");
        const listfilenames10 = await fs.readdir(destDir);
        listfilenames10.forEach(file => {
            console.log(`destDir ${destDir} File: ${file}`);
        });
    
        // Copy directory
        try {
            await fse.copy(downloadDir, destDir);
            console.log("Copied Files");
        } catch (err) {
            console.error("Error copying files: ", err);
        }
    
        const listfilenames1 = await fs.readdir(destDir);
        console.log("\nCurrent dest directory filenames after copy:");
        listfilenames1.forEach(file => {
            console.log(`destDir ${destDir} File: ${file}`);
        });
    
        // Delete specific file types
        const patterns = ['*.jpg', '*.tif', '*.pdf', '*.png', '*.eps', '*.gif'];
        for (const pattern of patterns) {
            await deleteAsync([`${downloadDir}${pattern}`], { force: true });
        }
    
        console.log('Files deleted from download directory');
    
        // Delete zero-size files in jUnitDir
        // try {
        //     const files = await fs.readdir(jUnitDir);
        //     for (const file of files) {
        //         const { size } = await fs.stat(jUnitDir + file);
        //         if (size < 1) {
        //             console.log(`Deleting empty file: ${jUnitDir + file}`);
        //             await fs.unlink(jUnitDir + file);
        //         }
        //     }
        // } catch (err) {
        //     console.error('Error reading jUnitDir:', err);
        // }
        
        for (const dir of reportDirs) {
            try {
                const resolvedDir = path.resolve(__dirname, dir);

                // Auto-create directory if it doesn't exist
                if (!fsSync.existsSync(resolvedDir)) {
                    console.log(`Directory does not exist, creating: ${resolvedDir}`);
                    await fs.mkdir(resolvedDir, { recursive: true });
                }

                const files = await fs.readdir(resolvedDir);
                let deletedCount = 0;

                for (const file of files) {
                const filePath = path.join(resolvedDir, file);
                const stats = await fs.stat(filePath);

                if (stats.isFile()) {
                    if (stats.size < 1) {
                    console.log(`Deleting empty file: ${filePath}`);
                    await fs.unlink(filePath);
                    deletedCount++;
                    } else {
                    console.log(`Keeping non-empty file: ${filePath} (${stats.size} bytes)`);
                    }
                }
                }

                console.log(`Finished cleaning ${resolvedDir}. Deleted ${deletedCount} empty file(s).`);

            } catch (err) {
                console.error(` Error processing directory ${dir}:`, err);
            }
        }
    },
    
    /**
    * Gets executed when a refresh happens.
    * @param {string} oldSessionId session ID of the old session
    * @param {string} newSessionId session ID of the new session
    */
    // onReload: function(oldSessionId, newSessionId) {
    // }
    /**
    * Hook that gets executed before a WebdriverIO assertion happens.
    * @param {object} params information about the assertion to be executed
    */
    // beforeAssertion: function(params) {
    // }
    /**
    * Hook that gets executed after a WebdriverIO assertion happened.
    * @param {object} params information about the assertion that was executed, including its results
    */
    // afterAssertion: function(params) {
    // }
}
