module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("papaparse");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-use-gesture");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ImporterField", function() { return /* reexport */ ImporterField; });
__webpack_require__.d(__webpack_exports__, "Importer", function() { return /* reexport */ Importer_Importer; });
__webpack_require__.d(__webpack_exports__, "enUS", function() { return /* reexport */ enUS; });
__webpack_require__.d(__webpack_exports__, "deDE", function() { return /* reexport */ deDE; });

// CONCATENATED MODULE: ./src/components/ImporterProps.ts


// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "papaparse"
var external_papaparse_ = __webpack_require__(1);
var external_papaparse_default = /*#__PURE__*/__webpack_require__.n(external_papaparse_);

// CONCATENATED MODULE: ./src/parser.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const PREVIEW_ROW_COUNT = 5;
// polyfill as implemented in https://github.com/eligrey/Blob.js/blob/master/Blob.js#L653
// (this is for Safari pre v14.1)
function streamForBlob(blob) {
    if (blob.stream) {
        return blob.stream();
    }
    const res = new Response(blob);
    if (res.body) {
        return res.body;
    }
    throw new Error('This browser does not support client-side file reads');
}
// incredibly cheap wrapper exposing a subset of stream.Readable interface just for PapaParse usage
// @todo chunk size
function nodeStreamWrapper(stream, encoding) {
    let dataHandler = null;
    let endHandler = null;
    let errorHandler = null;
    let isStopped = false;
    let pausePromise = null;
    let pauseResolver = null;
    function runReaderPump() {
        return __awaiter(this, void 0, void 0, function* () {
            // ensure this is truly in the next tick after uncorking
            yield Promise.resolve();
            const streamReader = stream.getReader();
            const decoder = new TextDecoder(encoding); // this also strips BOM by default
            try {
                // main reader pump loop
                while (!isStopped) {
                    // perform read from upstream
                    const { done, value } = yield streamReader.read();
                    // wait if we became paused since last data event
                    if (pausePromise) {
                        yield pausePromise;
                    }
                    // check again if stopped and unlistened
                    if (isStopped || !dataHandler || !endHandler) {
                        return;
                    }
                    // final data flush and end notification
                    if (done) {
                        const lastChunkString = decoder.decode(value); // value is empty but pass just in case
                        if (lastChunkString) {
                            dataHandler(lastChunkString);
                        }
                        endHandler(undefined);
                        return;
                    }
                    // otherwise, normal data event after stream-safe decoding
                    const chunkString = decoder.decode(value, { stream: true });
                    dataHandler(chunkString);
                }
            }
            finally {
                // always release the lock
                streamReader.releaseLock();
            }
        });
    }
    const self = {
        // marker properties to make PapaParse think this is a Readable object
        readable: true,
        read() {
            throw new Error('only flowing mode is emulated');
        },
        on(event, callback) {
            switch (event) {
                case 'data':
                    if (dataHandler) {
                        throw new Error('two data handlers not supported');
                    }
                    dataHandler = callback;
                    // flowing state started, run the main pump loop
                    runReaderPump().catch((error) => {
                        if (errorHandler) {
                            errorHandler(error);
                        }
                        else {
                            // rethrow to show error in console
                            throw error;
                        }
                    });
                    return;
                case 'end':
                    if (endHandler) {
                        throw new Error('two end handlers not supported');
                    }
                    endHandler = callback;
                    return;
                case 'error':
                    if (errorHandler) {
                        throw new Error('two error handlers not supported');
                    }
                    errorHandler = callback;
                    return;
            }
            throw new Error('unknown stream shim event: ' + event);
        },
        removeListener(event, callback) {
            // stop and clear everything for simplicity
            isStopped = true;
            dataHandler = null;
            endHandler = null;
            errorHandler = null;
        },
        pause() {
            if (!pausePromise) {
                pausePromise = new Promise((resolve) => {
                    pauseResolver = resolve;
                });
            }
            return self;
        },
        resume() {
            if (pauseResolver) {
                pauseResolver(); // waiting code will proceed in next tick
                pausePromise = null;
                pauseResolver = null;
            }
            return self;
        }
    };
    // pass ourselves off as a real Node stream
    return self;
}
function parsePreview(file, customConfig) {
    // wrap synchronous errors in promise
    return new Promise((resolve) => {
        let firstChunk = null;
        let firstWarning = undefined;
        const rowAccumulator = [];
        function reportSuccess() {
            // PapaParse normally complains first anyway, but might as well flag it
            if (rowAccumulator.length === 0) {
                return {
                    parseError: new Error('File is empty'),
                    file
                };
            }
            // remember whether this file has only one line
            const isSingleLine = rowAccumulator.length === 1;
            // fill preview with blanks if needed
            while (rowAccumulator.length < PREVIEW_ROW_COUNT) {
                rowAccumulator.push([]);
            }
            resolve({
                file,
                parseError: undefined,
                parseWarning: firstWarning || undefined,
                firstChunk: firstChunk || '',
                firstRows: rowAccumulator,
                isSingleLine
            });
        }
        // use our own multibyte-safe streamer, bail after first chunk
        // (this used to add skipEmptyLines but that was hiding possible parse errors)
        // @todo wait for upstream multibyte fix in PapaParse: https://github.com/mholt/PapaParse/issues/908
        const nodeStream = nodeStreamWrapper(streamForBlob(file), customConfig.encoding || 'utf-8');
        external_papaparse_default.a.parse(nodeStream, Object.assign(Object.assign({}, customConfig), { chunkSize: 10000, preview: PREVIEW_ROW_COUNT, error: (error) => {
                resolve({
                    parseError: error,
                    file
                });
            }, beforeFirstChunk: (chunk) => {
                firstChunk = chunk;
            }, chunk: ({ data, errors }, parser) => {
                data.forEach((row) => {
                    const stringRow = row.map((item) => typeof item === 'string' ? item : '');
                    rowAccumulator.push(stringRow);
                });
                if (errors.length > 0 && !firstWarning) {
                    firstWarning = errors[0];
                }
                // finish parsing once we got enough data, otherwise try for more
                // (in some cases PapaParse flushes out last line as separate chunk)
                if (rowAccumulator.length >= PREVIEW_ROW_COUNT) {
                    nodeStream.pause(); // parser does not pause source stream, do it here explicitly
                    parser.abort();
                    reportSuccess();
                }
            }, complete: reportSuccess }));
    }).catch((error) => {
        return {
            parseError: error,
            file
        };
    });
}
function processFile(input, reportProgress, callback) {
    const { file, hasHeaders, papaParseConfig, fieldAssignments } = input;
    const fieldNames = Object.keys(fieldAssignments);
    // wrap synchronous errors in promise
    return new Promise((resolve, reject) => {
        // skip first line if needed
        let skipLine = hasHeaders;
        let processedCount = 0;
        // use our own multibyte-safe decoding streamer
        // @todo wait for upstream multibyte fix in PapaParse: https://github.com/mholt/PapaParse/issues/908
        const nodeStream = nodeStreamWrapper(streamForBlob(file), papaParseConfig.encoding || 'utf-8');
        external_papaparse_default.a.parse(nodeStream, Object.assign(Object.assign({}, papaParseConfig), { chunkSize: papaParseConfig.chunkSize || 10000, error: (error) => {
                reject(error);
            }, chunk: ({ data }, parser) => {
                // pause to wait until the rows are consumed
                nodeStream.pause(); // parser does not pause source stream, do it here explicitly
                parser.pause();
                const skipped = skipLine && data.length > 0;
                const rows = (skipped ? data.slice(1) : data).map((row) => {
                    const stringRow = row.map((item) => typeof item === 'string' ? item : '');
                    const record = {};
                    fieldNames.forEach((fieldName) => {
                        const columnIndex = fieldAssignments[fieldName];
                        if (columnIndex !== undefined) {
                            record[fieldName] = stringRow[columnIndex];
                        }
                    });
                    return record; // @todo look into a more precise setup
                });
                // clear line skip flag if there was anything to skip
                if (skipped) {
                    skipLine = false;
                }
                // info snapshot for processing callback
                const info = {
                    startIndex: processedCount
                };
                processedCount += rows.length;
                // @todo collect errors
                reportProgress(rows.length);
                // wrap sync errors in promise
                // (avoid invoking callback if there are no rows to consume)
                const whenConsumed = new Promise((resolve) => {
                    const result = rows.length ? callback(rows, info) : undefined;
                    // introduce delay to allow a frame render
                    setTimeout(() => resolve(result), 0);
                });
                // unpause parsing when done
                whenConsumed.then(() => {
                    nodeStream.resume();
                    parser.resume();
                }, () => {
                    // @todo collect errors
                    nodeStream.resume();
                    parser.resume();
                });
            }, complete: () => {
                resolve();
            } }));
    });
}

// EXTERNAL MODULE: ./src/components/TextButton.scss
var TextButton = __webpack_require__(5);

// CONCATENATED MODULE: ./src/components/TextButton.tsx


const TextButton_TextButton = ({ disabled, onClick, sx, children }) => {
    var _a;
    return (external_react_default.a.createElement("button", { className: "CSVImporter_TextButton", css: (_a = sx === null || sx === void 0 ? void 0 : sx.TextButtonStyles) !== null && _a !== void 0 ? _a : null, disabled: disabled, onClick: onClick }, children));
};

// EXTERNAL MODULE: ./src/components/IconButton.scss
var IconButton = __webpack_require__(6);

// CONCATENATED MODULE: ./src/components/IconButton.tsx


const IconButton_IconButton = ({ type, label, small, focusOnly, disabled, onClick }) => {
    return (external_react_default.a.createElement("button", { className: "CSVImporter_IconButton", "aria-label": label, disabled: disabled, onClick: onClick, "data-small": !!small, "data-focus-only": !!focusOnly },
        external_react_default.a.createElement("span", { "data-type": type })));
};

// EXTERNAL MODULE: ./src/components/ImporterFrame.scss
var ImporterFrame = __webpack_require__(7);

// CONCATENATED MODULE: ./src/locale/index.ts
const enUS = {
    components: {
        ColumnDragCard: {
            dummyHeaderText: 'Unassigned field',
            getHeaderText: (code) => `Column ${code}`
        },
        ColumnDragSourceArea: {
            ariaLabelText: 'Columns to import',
            getPageIndicatorText: (currentPage, pageCount) => `Page ${currentPage} of ${pageCount}`,
            getAssigningColumnText: (columnCode) => `Assigning column ${columnCode}`,
            nextColumnsText: 'Show next columns',
            previousColumnsText: 'Show previous columns'
        },
        ColumnDragTargetArea: {
            ariaLabelText: 'Target fields'
        },
        ColumnPicker: {
            requiredFieldsErrorText: 'Please assign all required fields',
            subtitleText: 'Select Columns'
        },
        FileSelector: {
            defaultText: 'Drag-and-drop CSV file here, or click to select in folder',
            dragActiveText: 'Drop CSV file here...'
        },
        FileStep: {
            importErrorText: 'Import error:',
            rawFileContentsText: 'Raw File Contents',
            previewImportText: 'Preview Import',
            hasHeadersText: 'Data has headers',
            loadingPreviewText: 'Loading preview...'
        },
        FormatRawPreview: {
            getWarningText: (warningMessage) => `${warningMessage}: please check data formatting`
        },
        FormatErrorMessage: {
            backText: 'Go Back'
        },
        ImporterFrame: {
            previousStepText: 'Go to previous step',
            nextStepText: 'Next'
        },
        ProgressDisplay: {
            subtitleText: 'Import',
            uploadMoreText: 'Upload More',
            finishText: 'Finish',
            statusErrorText: 'Could not import',
            statusCompleteText: 'Complete',
            statusPendingText: 'Importing...',
            processedRowsText: 'Processed rows:'
        },
        SourceBox: {
            clearAssignmentText: 'Clear column assignment',
            selectColumnText: 'Select column for assignment',
            unselectColumnText: 'Unselect column'
        },
        TargetBox: {
            optionalAriaLabelText: 'optional',
            requiredAriaLabelText: 'required',
            boxPlaceholderText: 'Drag column here',
            getBoxValueActionText: (columnCode) => `Assign column ${columnCode}`,
            clearText: 'Clear column assignment'
        }
    }
};
const deDE = {
    components: {
        ColumnDragCard: {
            dummyHeaderText: 'Nicht zugewiesenes Feld',
            getHeaderText: (code) => `Spalte ${code}`
        },
        ColumnDragSourceArea: {
            ariaLabelText: 'Zu importierende Spalte',
            getPageIndicatorText: (currentPage, pageCount) => `Seite ${currentPage} von ${pageCount}`,
            getAssigningColumnText: (columnCode) => `Spalte ${columnCode} zuweisen`,
            nextColumnsText: 'Nächste Spalten anzeigen',
            previousColumnsText: 'Vorherige Spalten anzeigen'
        },
        ColumnDragTargetArea: {
            ariaLabelText: 'Zielfelder'
        },
        ColumnPicker: {
            requiredFieldsErrorText: 'Bitte weise allen nicht optionalen Spalten einen Wert zu',
            subtitleText: 'Spalten auswählen'
        },
        FileSelector: {
            defaultText: 'CSV-Datei auf dieses Feld ziehen, oder klicken um eine Datei auszuwählen',
            dragActiveText: 'CSV-Datei auf dieses Feld ziehen...'
        },
        FileStep: {
            importErrorText: 'Fehler beim Import:',
            rawFileContentsText: 'Originaler Datei-Inhalt',
            previewImportText: 'Import-Vorschau',
            hasHeadersText: 'Mit Kopfzeile',
            loadingPreviewText: 'Vorschau wird geladen...'
        },
        FormatRawPreview: {
            getWarningText: (warningMessage) => `${warningMessage}: bitte Datenformat überprüfen`
        },
        FormatErrorMessage: {
            backText: 'Zurück'
        },
        ImporterFrame: {
            previousStepText: 'Zum vorherigen Schritt',
            nextStepText: 'Weiter'
        },
        ProgressDisplay: {
            subtitleText: 'Importieren',
            uploadMoreText: 'Weitere hochladen',
            finishText: 'Abschließen',
            statusErrorText: 'Konnte nicht importiert werden',
            statusCompleteText: 'Fertig',
            statusPendingText: 'Wird importiert...',
            processedRowsText: 'Verarbeitete Zeilen:'
        },
        SourceBox: {
            clearAssignmentText: 'Zugewiesene Spalte entfernen',
            selectColumnText: 'Spalte zum Zuweisen auswählen',
            unselectColumnText: 'Spalte abwählen'
        },
        TargetBox: {
            optionalAriaLabelText: 'optional',
            requiredAriaLabelText: 'erforderlich',
            boxPlaceholderText: 'Spalte hierher ziehen',
            getBoxValueActionText: (columnCode) => `Spalte ${columnCode} zuweisen`,
            clearText: 'Zugewiesene Spalte entfernen'
        }
    }
};

// CONCATENATED MODULE: ./src/locale/LocaleContext.tsx



const LocaleContext = external_react_default.a.createContext(enUS);
function useLocale(component) {
    const locale = Object(external_react_["useContext"])(LocaleContext);
    return Object(external_react_["useMemo"])(() => {
        return locale.components[component];
    }, [component, locale.components]);
}

// CONCATENATED MODULE: ./src/components/ImporterFrame.tsx





const ImporterFrame_ImporterFrame = ({ fileName, subtitle, secondaryDisabled, secondaryLabel, nextDisabled, nextLabel, error, onSecondary, onNext, onCancel, children, sx }) => {
    const titleRef = Object(external_react_["useRef"])(null);
    const subtitleRef = Object(external_react_["useRef"])(null);
    Object(external_react_["useEffect"])(() => {
        if (subtitleRef.current) {
            subtitleRef.current.focus();
        }
        else if (titleRef.current) {
            titleRef.current.focus();
        }
    }, []);
    const { previousStepText, nextStepText } = useLocale('ImporterFrame');
    return (external_react_default.a.createElement("div", { className: "CSVImporter_ImporterFrame", css: sx === null || sx === void 0 ? void 0 : sx.ImporterFrameStyles },
        external_react_default.a.createElement("div", { className: "CSVImporter_ImporterFrame__header", css: sx === null || sx === void 0 ? void 0 : sx.ImporterFrameHeaderStyles },
            external_react_default.a.createElement(IconButton_IconButton, { label: previousStepText, type: "arrowBack", disabled: !onCancel, onClick: onCancel }),
            external_react_default.a.createElement("div", { className: "CSVImporter_ImporterFrame__headerTitle", css: sx === null || sx === void 0 ? void 0 : sx.ImporterFrameHeaderTitleStyles, tabIndex: -1, ref: titleRef }, fileName),
            subtitle ? (external_react_default.a.createElement(external_react_default.a.Fragment, null,
                external_react_default.a.createElement("div", { className: "CSVImporter_ImporterFrame__headerCrumbSeparator", css: sx === null || sx === void 0 ? void 0 : sx.ImporterFrameHeaderCrumbSeparatorStyles },
                    external_react_default.a.createElement("span", null)),
                external_react_default.a.createElement("div", { className: "CSVImporter_ImporterFrame__headerSubtitle", css: sx === null || sx === void 0 ? void 0 : sx.ImporterHeaderSubtitleStyles, tabIndex: -1, ref: subtitleRef }, subtitle))) : null),
        children,
        external_react_default.a.createElement("div", { className: "CSVImporter_ImporterFrame__footer", css: sx === null || sx === void 0 ? void 0 : sx.ImporterHeaderFooter },
            external_react_default.a.createElement("div", { className: "CSVImporter_ImporterFrame__footerFill", css: sx === null || sx === void 0 ? void 0 : sx.ImporterHeaderFooterFill }),
            error ? (external_react_default.a.createElement("div", { className: "CSVImporter_ImporterFrame__footerError", role: "status", css: sx === null || sx === void 0 ? void 0 : sx.ImporterHeaderFooterError }, error)) : null,
            secondaryLabel ? (external_react_default.a.createElement("div", { className: "CSVImporter_ImporterFrame__footerSecondary", css: sx === null || sx === void 0 ? void 0 : sx.ImporterHeaderFooterSecondary },
                external_react_default.a.createElement(TextButton_TextButton, { disabled: !!secondaryDisabled, onClick: onSecondary }, secondaryLabel))) : null,
            external_react_default.a.createElement(TextButton_TextButton, { disabled: !!nextDisabled, onClick: onNext }, nextLabel || nextStepText))));
};

// EXTERNAL MODULE: external "react-dropzone"
var external_react_dropzone_ = __webpack_require__(2);

// EXTERNAL MODULE: ./src/components/file-step/FileSelector.scss
var FileSelector = __webpack_require__(8);

// CONCATENATED MODULE: ./src/components/file-step/FileSelector.tsx




const FileSelector_FileSelector = ({ onSelected }) => {
    const onSelectedRef = Object(external_react_["useRef"])(onSelected);
    onSelectedRef.current = onSelected;
    const dropHandler = Object(external_react_["useCallback"])((acceptedFiles) => {
        // silently ignore if nothing to do
        if (acceptedFiles.length < 1) {
            return;
        }
        const file = acceptedFiles[0];
        onSelectedRef.current(file);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = Object(external_react_dropzone_["useDropzone"])({
        onDrop: dropHandler
    });
    const { defaultText, dragActiveText } = useLocale('FileSelector');
    return (external_react_default.a.createElement("div", Object.assign({ className: "CSVImporter_FileSelector", "data-active": !!isDragActive }, getRootProps()),
        external_react_default.a.createElement("input", Object.assign({}, getInputProps())),
        isDragActive ? (external_react_default.a.createElement("span", null, dragActiveText)) : (external_react_default.a.createElement("span", null, defaultText))));
};

// EXTERNAL MODULE: ./src/components/file-step/FormatErrorMessage.scss
var FormatErrorMessage = __webpack_require__(9);

// CONCATENATED MODULE: ./src/components/file-step/FormatErrorMessage.tsx




const FormatErrorMessage_FormatErrorMessage = external_react_default.a.memo(({ onCancelClick, children }) => {
    const { backText } = useLocale('FormatErrorMessage');
    return (external_react_default.a.createElement("div", { className: "CSVImporter_FormatErrorMessage" },
        external_react_default.a.createElement("span", null, children),
        external_react_default.a.createElement(TextButton_TextButton, { onClick: onCancelClick }, backText)));
});

// EXTERNAL MODULE: ./src/components/file-step/FormatRawPreview.scss
var FormatRawPreview = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/file-step/FormatRawPreview.tsx




const RAW_PREVIEW_SIZE = 500;
const FormatRawPreview_FormatRawPreview = external_react_default.a.memo(({ chunk, warning, onCancelClick, sx }) => {
    var _a, _b, _c;
    const chunkSlice = chunk.slice(0, RAW_PREVIEW_SIZE);
    const chunkHasMore = chunk.length > RAW_PREVIEW_SIZE;
    const { getWarningText } = useLocale('FormatRawPreview');
    return (external_react_default.a.createElement("div", { className: "CSVImporter_FormatRawPreview", css: (_a = sx === null || sx === void 0 ? void 0 : sx.FormatRawPreview) !== null && _a !== void 0 ? _a : null },
        external_react_default.a.createElement("div", { className: "CSVImporter_FormatRawPreview__scroll", css: (_b = sx === null || sx === void 0 ? void 0 : sx.FormatRawPreviewScroll) !== null && _b !== void 0 ? _b : null },
            external_react_default.a.createElement("pre", { className: "CSVImporter_FormatRawPreview__pre", css: (_c = sx === null || sx === void 0 ? void 0 : sx.FormatRawPreviewPre) !== null && _c !== void 0 ? _c : null },
                chunkSlice,
                chunkHasMore && external_react_default.a.createElement("aside", null, "..."))),
        warning ? (external_react_default.a.createElement(FormatErrorMessage_FormatErrorMessage, { onCancelClick: onCancelClick }, getWarningText(warning.message || String(warning)))) : null));
});

// EXTERNAL MODULE: ./src/components/file-step/FormatDataRowPreview.scss
var FormatDataRowPreview = __webpack_require__(11);

// CONCATENATED MODULE: ./src/components/file-step/FormatDataRowPreview.tsx


const FormatDataRowPreview_FormatDataRowPreview = external_react_default.a.memo(({ hasHeaders, rows }) => {
    const headerRow = hasHeaders ? rows[0] : null;
    const bodyRows = hasHeaders ? rows.slice(1) : rows;
    return (external_react_default.a.createElement("div", { className: "CSVImporter_FormatDataRowPreview" },
        external_react_default.a.createElement("table", { className: "CSVImporter_FormatDataRowPreview__table" },
            headerRow && (external_react_default.a.createElement("thead", null,
                external_react_default.a.createElement("tr", null, headerRow.map((item, itemIndex) => (external_react_default.a.createElement("th", { key: itemIndex }, item)))))),
            external_react_default.a.createElement("tbody", null, bodyRows.map((row, rowIndex) => (external_react_default.a.createElement("tr", { key: rowIndex }, row.map((item, itemIndex) => (external_react_default.a.createElement("td", { key: itemIndex }, item))))))))));
});

// EXTERNAL MODULE: ./src/components/file-step/FileStep.scss
var FileStep = __webpack_require__(12);

// CONCATENATED MODULE: ./src/components/file-step/FileStep.tsx









const FileStep_FileStep = ({ customConfig, assumeNoHeaders, prevState, onChange, onAccept }) => {
    // seed from previous state as needed
    const [selectedFile, setSelectedFile] = Object(external_react_["useState"])(prevState ? prevState.file : null);
    const [preview, setPreview] = Object(external_react_["useState"])(() => prevState && Object.assign({ parseError: undefined }, prevState));
    const [papaParseConfig, setPapaParseConfig] = Object(external_react_["useState"])(prevState ? prevState.papaParseConfig : customConfig);
    const [hasHeaders, setHasHeaders] = Object(external_react_["useState"])(prevState ? prevState.hasHeaders : false);
    // wrap in ref to avoid triggering effect
    const customConfigRef = Object(external_react_["useRef"])(customConfig);
    customConfigRef.current = customConfig;
    const assumeNoHeadersRef = Object(external_react_["useRef"])(assumeNoHeaders);
    assumeNoHeadersRef.current = assumeNoHeaders;
    const onChangeRef = Object(external_react_["useRef"])(onChange);
    onChangeRef.current = onChange;
    // notify of current state
    Object(external_react_["useEffect"])(() => {
        onChangeRef.current(preview && !preview.parseError
            ? Object.assign(Object.assign({}, preview), { papaParseConfig, hasHeaders }) : null);
    }, [preview, papaParseConfig, hasHeaders]);
    // perform async preview parse once for the given file
    const asyncLockRef = Object(external_react_["useRef"])(0);
    Object(external_react_["useEffect"])(() => {
        // clear other state when file selector is reset
        if (!selectedFile) {
            setPreview(null);
            return;
        }
        // preserve existing state when parsing for this file is already complete
        if (preview && preview.file === selectedFile) {
            return;
        }
        const oplock = asyncLockRef.current;
        // lock in the current PapaParse config instance for use in multiple spots
        const config = customConfigRef.current;
        // kick off the preview parse
        parsePreview(selectedFile, config).then((results) => {
            // ignore if stale
            if (oplock !== asyncLockRef.current) {
                return;
            }
            // save the results and the original config
            setPreview(results);
            setPapaParseConfig(config);
            // pre-fill headers flag (only possible with >1 lines)
            setHasHeaders(results.parseError
                ? false
                : !assumeNoHeadersRef.current && !results.isSingleLine);
        });
        return () => {
            // invalidate current oplock on change or unmount
            asyncLockRef.current += 1;
        };
    }, [selectedFile, preview]);
    const { importErrorText, rawFileContentsText, previewImportText, hasHeadersText, loadingPreviewText } = useLocale('FileStep');
    // clear selected file
    // preview result content to display
    const reportBlock = Object(external_react_["useMemo"])(() => {
        if (!preview) {
            return null;
        }
        if (preview.parseError) {
            return (external_react_default.a.createElement("div", { className: "CSVImporter_FileStep__mainResultBlock" },
                external_react_default.a.createElement(FormatErrorMessage_FormatErrorMessage, { onCancelClick: () => setSelectedFile(null) },
                    importErrorText,
                    ' ',
                    external_react_default.a.createElement("b", null, preview.parseError.message || String(preview.parseError)))));
        }
        return (external_react_default.a.createElement("div", { className: "CSVImporter_FileStep__mainResultBlock" },
            external_react_default.a.createElement("div", { className: "CSVImporter_FileStep__header" }, rawFileContentsText),
            external_react_default.a.createElement(FormatRawPreview_FormatRawPreview, { chunk: preview.firstChunk, warning: preview.parseWarning, onCancelClick: () => setSelectedFile(null) }),
            preview.parseWarning ? null : (external_react_default.a.createElement(external_react_default.a.Fragment, null,
                external_react_default.a.createElement("div", { className: "CSVImporter_FileStep__header" },
                    previewImportText,
                    !preview.isSingleLine && ( // hide setting if only one line anyway
                    external_react_default.a.createElement("label", { className: "CSVImporter_FileStep__headerToggle" },
                        external_react_default.a.createElement("input", { type: "checkbox", checked: hasHeaders, onChange: () => {
                                setHasHeaders((prev) => !prev);
                            } }),
                        external_react_default.a.createElement("span", null, hasHeadersText)))),
                external_react_default.a.createElement(FormatDataRowPreview_FormatDataRowPreview, { hasHeaders: hasHeaders, rows: preview.firstRows })))));
    }, [
        preview,
        rawFileContentsText,
        previewImportText,
        hasHeaders,
        hasHeadersText,
        importErrorText
    ]);
    if (!selectedFile) {
        return external_react_default.a.createElement(FileSelector_FileSelector, { onSelected: (file) => setSelectedFile(file) });
    }
    return (external_react_default.a.createElement(ImporterFrame_ImporterFrame, { fileName: selectedFile.name, nextDisabled: !preview || !!preview.parseError || !!preview.parseWarning, onNext: () => {
            if (!preview || preview.parseError) {
                throw new Error('unexpected missing preview info');
            }
            onAccept();
        }, onCancel: () => setSelectedFile(null) }, reportBlock || (external_react_default.a.createElement("div", { className: "CSVImporter_FileStep__mainPendingBlock" }, loadingPreviewText))));
};

// CONCATENATED MODULE: ./src/components/fields-step/ColumnPreview.tsx
// spreadsheet-style column code computation (A, B, ..., Z, AA, AB, ..., etc)
function generateColumnCode(value) {
    // ignore dummy index
    if (value < 0) {
        return '';
    }
    // first, determine how many base-26 letters there should be
    // (because the notation is not purely positional)
    let digitCount = 1;
    let base = 0;
    let next = 26;
    while (next <= value) {
        digitCount += 1;
        base = next;
        next = next * 26 + 26;
    }
    // then, apply normal positional digit computation on remainder above base
    let remainder = value - base;
    const digits = [];
    while (digits.length < digitCount) {
        const lastDigit = remainder % 26;
        remainder = Math.floor((remainder - lastDigit) / 26); // applying floor just in case
        // store ASCII code, with A as 0
        digits.unshift(65 + lastDigit);
    }
    return String.fromCharCode.apply(null, digits);
}
// prepare spreadsheet-like column display information for given raw data preview
function generatePreviewColumns(firstRows, hasHeaders) {
    const columnStubs = [...new Array(firstRows[0].length)];
    return columnStubs.map((empty, index) => {
        const values = firstRows.map((row) => row[index] || '');
        const headerValue = hasHeaders ? values.shift() : undefined;
        return {
            index,
            header: headerValue,
            values
        };
    });
}

// EXTERNAL MODULE: external "react-use-gesture"
var external_react_use_gesture_ = __webpack_require__(3);

// CONCATENATED MODULE: ./src/components/fields-step/ColumnDragState.tsx


function useColumnDragState(fields, initialAssignments, onTouched) {
    // wrap in ref to avoid re-triggering
    const onTouchedRef = Object(external_react_["useRef"])(onTouched);
    onTouchedRef.current = onTouched;
    const [dragState, setDragState] = Object(external_react_["useState"])(null);
    const [fieldAssignments, setFieldAssignments] = Object(external_react_["useState"])(initialAssignments);
    // make sure there are no extra fields
    Object(external_react_["useEffect"])(() => {
        const removedFieldNames = Object.keys(fieldAssignments).filter((existingFieldName) => !fields.some((field) => field.name === existingFieldName));
        if (removedFieldNames.length > 0) {
            // @todo put everything inside this setter
            setFieldAssignments((prev) => {
                const copy = Object.assign({}, prev);
                removedFieldNames.forEach((fieldName) => {
                    delete copy[fieldName];
                });
                return copy;
            });
        }
    }, [fields, fieldAssignments]);
    const internalAssignHandler = Object(external_react_["useCallback"])((column, fieldName) => {
        setFieldAssignments((prevAssignments) => {
            const copy = Object.assign({}, prevAssignments);
            // ensure dropped column does not show up elsewhere
            Object.keys(prevAssignments).forEach((name) => {
                if (copy[name] === column.index) {
                    delete copy[name];
                }
            });
            // set new field column
            if (fieldName !== null) {
                copy[fieldName] = column.index;
            }
            return copy;
        });
        // mark for validation display
        if (fieldName) {
            onTouchedRef.current(fieldName);
        }
    }, []);
    const bindDrag = Object(external_react_use_gesture_["useDrag"])(({ first, last, event, xy, args }) => {
        if (first && event) {
            // only prevent default inside first event
            // (touchmove uses passive event handler and would trigger warning)
            event.preventDefault();
            const [column, startFieldName] = args;
            setDragState({
                pointerStartInfo: {
                    initialXY: xy,
                    initialWidth: event.currentTarget instanceof HTMLElement
                        ? event.currentTarget.offsetWidth
                        : 0
                },
                column,
                dropFieldName: startFieldName !== undefined ? startFieldName : null,
                updateListeners: {}
            });
        }
        else if (last) {
            setDragState(null);
            if (dragState) {
                internalAssignHandler(dragState.column, dragState.dropFieldName);
            }
        }
        // @todo figure out a cleaner event stream solution
        if (dragState) {
            const listeners = dragState.updateListeners;
            for (const key of Object.keys(listeners)) {
                listeners[key](xy);
            }
        }
    }, {});
    // when dragging, set root-level user-select:none to prevent text selection, see Importer.scss
    // (done via class toggle to avoid interfering with any other dynamic style changes)
    Object(external_react_["useEffect"])(() => {
        if (dragState) {
            document.body.classList.add('CSVImporter_dragging');
        }
        else {
            // remove text selection prevention after a delay (otherwise on iOS it still selects something)
            const timeoutId = setTimeout(() => {
                document.body.classList.remove('CSVImporter_dragging');
            }, 200);
            return () => {
                // if another drag state comes along then cancel our delay and just clean up class right away
                clearTimeout(timeoutId);
                document.body.classList.remove('CSVImporter_dragging');
            };
        }
    }, [dragState]);
    const columnSelectHandler = Object(external_react_["useCallback"])((column) => {
        setDragState((prev) => {
            // toggle off if needed
            if (prev && prev.column === column) {
                return null;
            }
            return {
                pointerStartInfo: null,
                column,
                dropFieldName: null,
                updateListeners: {}
            };
        });
    }, []);
    const dragHoverHandler = Object(external_react_["useCallback"])((fieldName, isOn) => {
        setDragState((prev) => {
            if (!prev) {
                return prev;
            }
            if (isOn) {
                // set the new drop target
                return Object.assign(Object.assign({}, prev), { dropFieldName: fieldName });
            }
            else if (prev.dropFieldName === fieldName) {
                // clear drop target if we are still the current one
                return Object.assign(Object.assign({}, prev), { dropFieldName: null });
            }
            // no changes by default
            return prev;
        });
    }, []);
    const assignHandler = Object(external_react_["useCallback"])((fieldName) => {
        // clear active drag state
        setDragState(null);
        if (dragState) {
            internalAssignHandler(dragState.column, fieldName);
        }
    }, [internalAssignHandler, dragState]);
    const unassignHandler = Object(external_react_["useCallback"])((column) => {
        setFieldAssignments((prev) => {
            const assignedFieldName = Object.keys(prev).find((fieldName) => prev[fieldName] === column.index);
            if (assignedFieldName === undefined) {
                return prev;
            }
            const copy = Object.assign({}, prev);
            delete copy[assignedFieldName];
            return copy;
        });
    }, []);
    return {
        fieldAssignments,
        dragState,
        dragEventBinder: bindDrag,
        dragHoverHandler,
        columnSelectHandler,
        assignHandler,
        unassignHandler
    };
}

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(4);

// EXTERNAL MODULE: ./src/components/fields-step/ColumnDragCard.scss
var ColumnDragCard = __webpack_require__(13);

// CONCATENATED MODULE: ./src/components/fields-step/ColumnDragCard.tsx




// @todo sort out "grabbing" cursor state (does not work with pointer-events:none)
const ColumnDragCard_ColumnDragCard = ({ hasHeaders, column: optionalColumn, rowCount = PREVIEW_ROW_COUNT, hasError, isAssigned, isShadow, isDraggable, isDragged, isDropIndicator }) => {
    const isDummy = !optionalColumn;
    const column = Object(external_react_["useMemo"])(() => optionalColumn || {
        index: -1,
        code: '',
        header: hasHeaders ? '' : undefined,
        values: [...new Array(PREVIEW_ROW_COUNT)].map(() => '')
    }, [optionalColumn, hasHeaders]);
    const headerValue = column.header;
    const dataValues = column.values.slice(0, headerValue === undefined ? rowCount : rowCount - 1);
    const { getHeaderText, dummyHeaderText } = useLocale('ColumnDragCard');
    return (
    // not changing variant dynamically because it causes a height jump
    external_react_default.a.createElement("div", { key: isDummy || isShadow ? 1 : isDropIndicator ? 2 : 0, className: "CSVImporter_ColumnDragCard", "data-dummy": !!isDummy, "data-error": !!hasError, "data-shadow": !!isShadow, "data-draggable": !!isDraggable, "data-dragged": !!isDragged, "data-drop-indicator": !!isDropIndicator },
        external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragCard__cardHeader" },
            isDummy ? (external_react_default.a.createElement("var", { role: "text" }, dummyHeaderText)) : (external_react_default.a.createElement("var", { role: "text" }, getHeaderText(column.code))),
            isDummy || isAssigned ? '\u00a0' : external_react_default.a.createElement("b", { "aria-hidden": true }, column.code)),
        headerValue !== undefined ? (external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragCard__cardValue", "data-header": true }, headerValue || '\u00a0')) : null,
        external_react_default.a.createElement("div", { role: "text" }, dataValues.map((value, valueIndex) => (external_react_default.a.createElement("div", { key: valueIndex, className: "CSVImporter_ColumnDragCard__cardValue" }, value || '\u00a0'))))));
};

// EXTERNAL MODULE: ./src/components/fields-step/ColumnDragObject.scss
var ColumnDragObject = __webpack_require__(14);

// CONCATENATED MODULE: ./src/components/fields-step/ColumnDragObject.tsx




const ColumnDragObject_ColumnDragObject = ({ dragState }) => {
    const referenceBoxRef = Object(external_react_["useRef"])(null);
    // @todo wrap in a no-events overlay to clip against screen edges
    const dragBoxRef = Object(external_react_["useRef"])(null);
    const dragObjectPortal = dragState && dragState.pointerStartInfo
        ? Object(external_react_dom_["createPortal"])(external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragObject" },
            external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragObject__positioner", ref: dragBoxRef },
                external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragObject__holder" },
                    external_react_default.a.createElement(ColumnDragCard_ColumnDragCard, { column: dragState.column, isDragged: true })))), document.body)
        : null;
    // set up initial position
    const pointerStartInfo = dragState && dragState.pointerStartInfo;
    Object(external_react_["useLayoutEffect"])(() => {
        if (!pointerStartInfo || !dragBoxRef.current) {
            return;
        }
        const { initialXY, initialWidth } = pointerStartInfo;
        dragBoxRef.current.style.left = `${initialXY[0]}px`;
        dragBoxRef.current.style.top = `${initialXY[1]}px`;
        dragBoxRef.current.style.width = `${initialWidth}px`;
        // copy known font style from main content
        // @todo consider other text style properties?
        if (referenceBoxRef.current) {
            const computedStyle = window.getComputedStyle(referenceBoxRef.current);
            dragBoxRef.current.style.fontFamily = computedStyle.fontFamily;
            dragBoxRef.current.style.fontSize = computedStyle.fontSize;
            dragBoxRef.current.style.fontWeight = computedStyle.fontWeight;
            dragBoxRef.current.style.fontStyle = computedStyle.fontStyle;
            dragBoxRef.current.style.letterSpacing = computedStyle.letterSpacing;
        }
    }, [pointerStartInfo]);
    // subscribe to live position updates without state changes
    Object(external_react_["useLayoutEffect"])(() => {
        if (dragState) {
            dragState.updateListeners['dragObj'] = (xy) => {
                if (!dragBoxRef.current) {
                    return;
                }
                dragBoxRef.current.style.left = `${xy[0]}px`;
                dragBoxRef.current.style.top = `${xy[1]}px`;
            };
        }
    }, [dragState]);
    return external_react_default.a.createElement("div", { ref: referenceBoxRef }, dragObjectPortal);
};

// EXTERNAL MODULE: ./src/components/fields-step/ColumnDragSourceArea.scss
var ColumnDragSourceArea = __webpack_require__(15);

// CONCATENATED MODULE: ./src/components/fields-step/ColumnDragSourceArea.tsx





const SOURCES_PAGE_SIZE = 5; // fraction of 10 for easier counting
// @todo readable status text if not mouse-drag
const SourceBox = ({ column, fieldAssignments, dragState, eventBinder, onSelect, onUnassign }) => {
    const isDragged = dragState ? column === dragState.column : false;
    const isAssigned = Object(external_react_["useMemo"])(() => Object.keys(fieldAssignments).some((fieldName) => fieldAssignments[fieldName] === column.index), [fieldAssignments, column]);
    const eventHandlers = Object(external_react_["useMemo"])(() => eventBinder(column), [
        eventBinder,
        column
    ]);
    const { clearAssignmentText, selectColumnText, unselectColumnText } = useLocale('SourceBox');
    return (external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragSourceArea__box" },
        external_react_default.a.createElement("div", Object.assign({}, (isAssigned ? {} : eventHandlers)),
            external_react_default.a.createElement(ColumnDragCard_ColumnDragCard, { column: column, isAssigned: isAssigned, isShadow: isDragged || isAssigned, isDraggable: !dragState && !isDragged && !isAssigned })),
        external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragSourceArea__boxAction" }, isAssigned ? (external_react_default.a.createElement(IconButton_IconButton, { key: "clear" // key-prop helps clear focus on click
            , label: clearAssignmentText, small: true, type: "replay", onClick: () => {
                onUnassign(column);
            } })) : (external_react_default.a.createElement(IconButton_IconButton, { key: "dragSelect" // key-prop helps clear focus on click
            , focusOnly: true, label: dragState && dragState.column === column
                ? unselectColumnText
                : selectColumnText, small: true, type: "back", onClick: () => {
                onSelect(column);
            } })))));
};
// @todo current page indicator (dots)
const ColumnDragSourceArea_ColumnDragSourceArea = ({ columns, fieldAssignments, dragState, eventBinder, onSelect, onUnassign }) => {
    const [page, setPage] = Object(external_react_["useState"])(0);
    const [pageChanged, setPageChanged] = Object(external_react_["useState"])(false);
    const pageCount = Math.ceil(columns.length / SOURCES_PAGE_SIZE);
    const start = page * SOURCES_PAGE_SIZE;
    const pageContents = columns
        .slice(start, start + SOURCES_PAGE_SIZE)
        .map((column, columnIndex) => (external_react_default.a.createElement(SourceBox, { key: columnIndex, column: column, fieldAssignments: fieldAssignments, dragState: dragState, eventBinder: eventBinder, onSelect: onSelect, onUnassign: onUnassign })));
    while (pageContents.length < SOURCES_PAGE_SIZE) {
        pageContents.push(external_react_default.a.createElement("div", { key: pageContents.length, className: "CSVImporter_ColumnDragSourceArea__pageFiller" }));
    }
    const { ariaLabelText, getPageIndicatorText, getAssigningColumnText, nextColumnsText, previousColumnsText } = useLocale('ColumnDragSourceArea');
    return (external_react_default.a.createElement("section", { className: "CSVImporter_ColumnDragSourceArea", "aria-label": ariaLabelText },
        external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragSourceArea__control" },
            external_react_default.a.createElement(IconButton_IconButton, { label: previousColumnsText, type: "back", disabled: page === 0, onClick: () => {
                    setPage((prev) => Math.max(0, prev - 1));
                    setPageChanged(true);
                } })),
        external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragSourceArea__page" },
            dragState && !dragState.pointerStartInfo ? (external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragSourceArea__pageIndicator", role: "status" }, getAssigningColumnText(dragState.column.code))) : (
            // show page number if needed (and treat as status role if it has changed)
            // @todo changing role to status does not seem to work
            pageCount > 1 && (external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragSourceArea__pageIndicator", role: pageChanged ? 'status' : 'text' }, getPageIndicatorText(page + 1, pageCount)))),
            pageContents),
        external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragSourceArea__control" },
            external_react_default.a.createElement(IconButton_IconButton, { label: nextColumnsText, type: "forward", disabled: page === pageCount - 1, onClick: () => {
                    setPage((prev) => Math.min(pageCount - 1, prev + 1));
                } }))));
};

// EXTERNAL MODULE: ./src/components/fields-step/ColumnDragTargetArea.scss
var ColumnDragTargetArea = __webpack_require__(16);

// CONCATENATED MODULE: ./src/components/fields-step/ColumnDragTargetArea.tsx





const TargetBox = ({ hasHeaders, field, touched, assignedColumn, dragState, eventBinder, onHover, onAssign, onUnassign }) => {
    // wrap in ref to avoid re-triggering effect
    const onHoverRef = Object(external_react_["useRef"])(onHover);
    onHoverRef.current = onHover;
    // respond to hover events when there is active mouse drag happening
    // (not keyboard-emulated one)
    const containerRef = Object(external_react_["useRef"])(null);
    const isHoveredRef = Object(external_react_["useRef"])(false); // simple tracking of current hover state to avoid spamming onHover (not for display)
    Object(external_react_["useEffect"])(() => {
        const container = containerRef.current;
        if (!dragState || !dragState.pointerStartInfo || !container) {
            return;
        }
        // measure the current scroll-independent position
        const rect = container.getBoundingClientRect();
        const minX = rect.x;
        const maxX = rect.x + rect.width;
        const minY = rect.y;
        const maxY = rect.y + rect.height;
        // listen for pointer movement (mouse or touch) and detect hover
        const listeners = dragState.updateListeners;
        const listenerName = `field:${field.name}`;
        listeners[listenerName] = (xy) => {
            const isInBounds = xy[0] >= minX && xy[0] < maxX && xy[1] >= minY && xy[1] < maxY;
            if (isInBounds !== isHoveredRef.current) {
                // cannot use local var for isHovered state because the effect re-triggers after this
                isHoveredRef.current = isInBounds;
                onHoverRef.current(field.name, isInBounds);
            }
        };
        // cleanup
        return () => {
            delete listeners[listenerName];
        };
    }, [dragState, field.name]);
    // if this field is the current highlighted drop target,
    // get the originating column data for display
    const sourceColumn = dragState && dragState.dropFieldName === field.name
        ? dragState.column
        : null;
    // see if currently assigned column is being dragged again
    const isReDragged = dragState ? dragState.column === assignedColumn : false;
    // drag start handlers for columns that can be re-dragged (i.e. are assigned)
    const dragStartHandlers = Object(external_react_["useMemo"])(() => assignedColumn && !isReDragged
        ? eventBinder(assignedColumn, field.name)
        : {}, [eventBinder, assignedColumn, isReDragged, field.name]);
    const valueContents = Object(external_react_["useMemo"])(() => {
        if (sourceColumn) {
            return (external_react_default.a.createElement(ColumnDragCard_ColumnDragCard, { rowCount: 3, column: sourceColumn, isDropIndicator: true }));
        }
        if (assignedColumn) {
            return (external_react_default.a.createElement(ColumnDragCard_ColumnDragCard, { rowCount: 3, column: assignedColumn, isShadow: isReDragged, isDraggable: !isReDragged }));
        }
        const hasError = touched && !field.isOptional;
        return (external_react_default.a.createElement(ColumnDragCard_ColumnDragCard, { rowCount: 3, hasHeaders: hasHeaders, hasError: hasError }));
    }, [hasHeaders, field, touched, assignedColumn, sourceColumn, isReDragged]);
    const { optionalAriaLabelText, requiredAriaLabelText, boxPlaceholderText, getBoxValueActionText, clearText } = useLocale('TargetBox');
    // @todo mouse cursor changes to reflect draggable state
    return (external_react_default.a.createElement("section", { className: "CSVImporter_ColumnDragTargetArea__box", "aria-label": `${field.label} (${field.isOptional ? optionalAriaLabelText : requiredAriaLabelText})`, ref: containerRef },
        external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragTargetArea__boxLabel", "aria-hidden": true },
            field.label,
            field.isOptional ? null : external_react_default.a.createElement("b", null, "*")),
        external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragTargetArea__boxValue" },
            !sourceColumn && !assignedColumn && (external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragTargetArea__boxPlaceholderHelp", "aria-hidden": true }, boxPlaceholderText)),
            external_react_default.a.createElement("div", Object.assign({}, dragStartHandlers), valueContents),
            dragState && !dragState.pointerStartInfo ? (external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragTargetArea__boxValueAction" },
                external_react_default.a.createElement(IconButton_IconButton, { label: getBoxValueActionText(dragState.column.code), small: true, type: "forward", onClick: () => onAssign(field.name) }))) : (!sourceColumn &&
                assignedColumn && (external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragTargetArea__boxValueAction" },
                external_react_default.a.createElement(IconButton_IconButton, { label: clearText, small: true, type: "close", onClick: () => onUnassign(assignedColumn) })))))));
};
const ColumnDragTargetArea_ColumnDragTargetArea = ({ hasHeaders, fields, columns, fieldTouched, fieldAssignments, dragState, eventBinder, onHover, onAssign, onUnassign }) => {
    const { ariaLabelText } = useLocale('ColumnDragTargetArea');
    return (external_react_default.a.createElement("section", { className: "CSVImporter_ColumnDragTargetArea", "aria-label": ariaLabelText }, fields.map((field) => {
        const assignedColumnIndex = fieldAssignments[field.name];
        return (external_react_default.a.createElement(TargetBox, { key: field.name, field: field, touched: fieldTouched[field.name], hasHeaders: hasHeaders, assignedColumn: assignedColumnIndex !== undefined
                ? columns[assignedColumnIndex]
                : null, dragState: dragState, eventBinder: eventBinder, onHover: onHover, onAssign: onAssign, onUnassign: onUnassign }));
    })));
};

// CONCATENATED MODULE: ./src/components/fields-step/FieldsStep.tsx








const FieldsStep = ({ fileState, fields, prevState, onChange, onAccept, onCancel }) => {
    const onChangeRef = Object(external_react_["useRef"])(onChange);
    onChangeRef.current = onChange;
    const columns = Object(external_react_["useMemo"])(() => generatePreviewColumns(fileState.firstRows, fileState.hasHeaders).map((item) => (Object.assign(Object.assign({}, item), { code: generateColumnCode(item.index) }))), [fileState]);
    const initialAssignments = Object(external_react_["useMemo"])(() => {
        // prep insensitive/fuzzy match stems for known columns
        // (this is ignored if there is already previous state to seed from)
        const columnStems = columns.map((column) => {
            const trimmed = column.header && column.header.trim();
            if (!trimmed) {
                return undefined;
            }
            return trimmed.toLowerCase();
        });
        // pre-assign corresponding fields
        const result = {};
        const assignedColumnIndexes = [];
        fields.forEach((field) => {
            // find by field stem
            const fieldLabelStem = field.label.trim().toLowerCase(); // @todo consider normalizing other whitespace/non-letters
            const matchingColumnIndex = columnStems.findIndex((columnStem, columnIndex) => {
                // no headers or no meaningful stem value
                if (columnStem === undefined) {
                    return false;
                }
                // always check against assigning twice
                if (assignedColumnIndexes[columnIndex]) {
                    return false;
                }
                return columnStem === fieldLabelStem;
            });
            // assign if found
            if (matchingColumnIndex !== -1) {
                assignedColumnIndexes[matchingColumnIndex] = true;
                result[field.name] = matchingColumnIndex;
            }
        });
        return result;
    }, [fields, columns]);
    // track which fields need to show validation warning
    const [fieldTouched, setFieldTouched] = Object(external_react_["useState"])({});
    const [validationError, setValidationError] = Object(external_react_["useState"])(null);
    const { fieldAssignments, dragState, dragEventBinder, dragHoverHandler, columnSelectHandler, assignHandler, unassignHandler } = useColumnDragState(fields, prevState ? prevState.fieldAssignments : initialAssignments, (fieldName) => {
        setFieldTouched((prev) => {
            if (prev[fieldName]) {
                return prev;
            }
            const copy = Object.assign({}, prev);
            copy[fieldName] = true;
            return copy;
        });
    });
    // notify of current state
    Object(external_react_["useEffect"])(() => {
        onChangeRef.current({ fieldAssignments: Object.assign({}, fieldAssignments) });
    }, [fieldAssignments]);
    const { requiredFieldsErrorText, subtitleText } = useLocale('ColumnPicker');
    return (external_react_default.a.createElement(ImporterFrame_ImporterFrame, { fileName: fileState.file.name, subtitle: subtitleText, error: validationError, onCancel: onCancel, onNext: () => {
            // mark all fields as touched
            const fullTouchedMap = {};
            fields.some((field) => {
                fullTouchedMap[field.name] = true;
            });
            setFieldTouched(fullTouchedMap);
            // submit if validation succeeds
            const hasUnassignedRequired = fields.some((field) => !field.isOptional && fieldAssignments[field.name] === undefined);
            if (!hasUnassignedRequired) {
                onAccept();
            }
            else {
                setValidationError(requiredFieldsErrorText);
            }
        } },
        external_react_default.a.createElement(ColumnDragSourceArea_ColumnDragSourceArea, { columns: columns, fieldAssignments: fieldAssignments, dragState: dragState, eventBinder: dragEventBinder, onSelect: columnSelectHandler, onUnassign: unassignHandler }),
        external_react_default.a.createElement(ColumnDragTargetArea_ColumnDragTargetArea, { hasHeaders: fileState.hasHeaders, fields: fields, columns: columns, fieldTouched: fieldTouched, fieldAssignments: fieldAssignments, dragState: dragState, eventBinder: dragEventBinder, onHover: dragHoverHandler, onAssign: assignHandler, onUnassign: unassignHandler }),
        external_react_default.a.createElement(ColumnDragObject_ColumnDragObject, { dragState: dragState })));
};

// EXTERNAL MODULE: ./src/components/ProgressDisplay.scss
var ProgressDisplay = __webpack_require__(17);

// CONCATENATED MODULE: ./src/components/ProgressDisplay.tsx





// compute actual UTF-8 bytes used by a string
// (inspired by https://stackoverflow.com/questions/10576905/how-to-convert-javascript-unicode-notation-code-to-utf-8)
function countUTF8Bytes(item) {
    // re-encode into UTF-8
    const escaped = encodeURIComponent(item);
    // convert byte escape sequences into single characters
    const normalized = escaped.replace(/%\d\d/g, '_');
    return normalized.length;
}
function ProgressDisplay_ProgressDisplay({ fileState, fieldsState, externalPreview, processChunk, onStart, onComplete, onRestart, onClose, sx }) {
    var _a;
    const [progressCount, setProgressCount] = Object(external_react_["useState"])(0);
    const [isComplete, setIsComplete] = Object(external_react_["useState"])(false);
    const [error, setError] = Object(external_react_["useState"])(null);
    const [isDismissed, setIsDismissed] = Object(external_react_["useState"])(false); // prevents double-clicking finish
    // info object exposed to the progress callbacks
    const importInfo = Object(external_react_["useMemo"])(() => {
        const fieldList = Object.keys(fieldsState.fieldAssignments);
        const columnSparseList = [];
        fieldList.forEach((field) => {
            const col = fieldsState.fieldAssignments[field];
            if (col !== undefined) {
                columnSparseList[col] = field;
            }
        });
        return {
            file: fileState.file,
            preview: externalPreview,
            fields: fieldList,
            columnFields: [...columnSparseList]
        };
    }, [fileState, fieldsState, externalPreview]);
    // estimate number of rows
    const estimatedRowCount = Object(external_react_["useMemo"])(() => {
        // sum up sizes of all the parsed preview rows and get estimated average
        const totalPreviewRowBytes = fileState.firstRows.reduce((prevCount, row) => {
            const rowBytes = row.reduce((prev, item) => {
                return prev + countUTF8Bytes(item) + 1; // add a byte for separator or newline
            }, 0);
            return prevCount + rowBytes;
        }, 0);
        const averagePreviewRowSize = totalPreviewRowBytes / fileState.firstRows.length;
        // divide file size by estimated row size (or fall back to a sensible amount)
        return averagePreviewRowSize > 1
            ? fileState.file.size / averagePreviewRowSize
            : 100;
    }, [fileState]);
    // notify on start of processing
    // (separate effect in case of errors)
    const onStartRef = Object(external_react_["useRef"])(onStart); // wrap in ref to avoid re-triggering (only first instance is needed)
    Object(external_react_["useEffect"])(() => {
        if (onStartRef.current) {
            onStartRef.current(importInfo);
        }
    }, [importInfo]);
    // notify on end of processing
    // (separate effect in case of errors)
    const onCompleteRef = Object(external_react_["useRef"])(onComplete); // wrap in ref to avoid re-triggering
    onCompleteRef.current = onComplete;
    Object(external_react_["useEffect"])(() => {
        if (isComplete && onCompleteRef.current) {
            onCompleteRef.current(importInfo);
        }
    }, [importInfo, isComplete]);
    // ensure status gets focus when complete, in case status role is not read out
    const statusRef = Object(external_react_["useRef"])(null);
    Object(external_react_["useEffect"])(() => {
        if ((isComplete || error) && statusRef.current) {
            statusRef.current.focus();
        }
    }, [isComplete, error]);
    // perform main async parse
    const processChunkRef = Object(external_react_["useRef"])(processChunk); // wrap in ref to avoid re-triggering
    const asyncLockRef = Object(external_react_["useRef"])(0);
    Object(external_react_["useEffect"])(() => {
        const oplock = asyncLockRef.current;
        processFile(Object.assign(Object.assign({}, fileState), { fieldAssignments: fieldsState.fieldAssignments }), (deltaCount) => {
            // ignore if stale
            if (oplock !== asyncLockRef.current) {
                return; // @todo signal abort
            }
            setProgressCount((prev) => prev + deltaCount);
        }, processChunkRef.current).then(() => {
            // ignore if stale
            if (oplock !== asyncLockRef.current) {
                return;
            }
            setIsComplete(true);
        }, (error) => {
            // ignore if stale
            if (oplock !== asyncLockRef.current) {
                return;
            }
            setError(error);
        });
        return () => {
            // invalidate current oplock on change or unmount
            asyncLockRef.current += 1;
        };
    }, [fileState, fieldsState]);
    // simulate asymptotic progress percentage
    const progressPercentage = Object(external_react_["useMemo"])(() => {
        if (isComplete) {
            return 100;
        }
        // inputs hand-picked so that correctly estimated total is about 75% of the bar
        const progressPower = 2.5 * (progressCount / estimatedRowCount);
        const progressLeft = Math.pow(0.5, progressPower);
        // convert to .1 percent precision for smoother bar display
        return Math.floor(1000 - 1000 * progressLeft) / 10;
    }, [estimatedRowCount, progressCount, isComplete]);
    const { subtitleText, uploadMoreText, finishText, statusErrorText, statusCompleteText, statusPendingText, processedRowsText } = useLocale('ProgressDisplay');
    return (external_react_default.a.createElement(ImporterFrame_ImporterFrame, { fileName: fileState.file.name, subtitle: subtitleText, error: error && (error.message || String(error)), secondaryDisabled: !isComplete || isDismissed, secondaryLabel: onRestart && onClose ? uploadMoreText : undefined, onSecondary: onRestart && onClose ? onRestart : undefined, nextDisabled: (!onClose && !onRestart) || !isComplete || isDismissed, nextLabel: !onClose && onRestart ? uploadMoreText : finishText, onNext: () => {
            setIsDismissed(true);
            if (onClose) {
                onClose(importInfo);
            }
            else if (onRestart) {
                onRestart();
            }
        } },
        external_react_default.a.createElement("div", { className: "CSVImporter_ProgressDisplay", css: (_a = sx === null || sx === void 0 ? void 0 : sx.ProgressDisplay) !== null && _a !== void 0 ? _a : null },
            isComplete || error ? (external_react_default.a.createElement("div", { className: "CSVImporter_ProgressDisplay__status", role: "status", tabIndex: -1, ref: statusRef }, error ? statusErrorText : statusCompleteText)) : (external_react_default.a.createElement("div", { className: "CSVImporter_ProgressDisplay__status -pending", role: "status" }, statusPendingText)),
            external_react_default.a.createElement("div", { className: "CSVImporter_ProgressDisplay__count", role: "text" },
                external_react_default.a.createElement("var", null, processedRowsText),
                " ",
                progressCount),
            external_react_default.a.createElement("div", { className: "CSVImporter_ProgressDisplay__progressBar" },
                external_react_default.a.createElement("div", { className: "CSVImporter_ProgressDisplay__progressBarIndicator", style: { width: `${progressPercentage}%` } })))));
}

// EXTERNAL MODULE: ./src/components/Importer.scss
var Importer = __webpack_require__(18);

// CONCATENATED MODULE: ./src/components/Importer.tsx
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};








const FieldDefinitionContext = external_react_default.a.createContext(null);
let fieldIdCount = 0;
// defines a field to be filled from file column during import
const ImporterField = ({ name, label, optional }) => {
    // @todo this is not SSR-compatible
    const fieldId = Object(external_react_["useMemo"])(() => (fieldIdCount += 1), []);
    const fieldSetter = Object(external_react_["useContext"])(FieldDefinitionContext);
    // update central list as needed
    Object(external_react_["useEffect"])(() => {
        if (!fieldSetter) {
            console.error('importer field must be a child of importer'); // @todo
            return;
        }
        fieldSetter((prev) => {
            const newField = { id: fieldId, name, label, isOptional: !!optional };
            const copy = [...prev];
            const existingIndex = copy.findIndex((item) => item.name === name);
            // preserve existing array position if possible
            // @todo keep both copies in a map to deal with dynamic fields better
            if (existingIndex === -1) {
                copy.push(newField);
            }
            else {
                copy[existingIndex] = newField;
            }
            return copy;
        });
    }, [fieldId, fieldSetter, name, label, optional]);
    // on component unmount, remove this field from list by ID
    Object(external_react_["useEffect"])(() => {
        if (!fieldSetter) {
            console.error('importer field must be a child of importer'); // @todo
            return;
        }
        return () => {
            fieldSetter((prev) => {
                return prev.filter((field) => field.id !== fieldId);
            });
        };
    }, [fieldId, fieldSetter]);
    return null;
};
function Importer_Importer(_a) {
    var _b, _c, _d, _e;
    var { assumeNoHeaders, restartable, processChunk, onStart, onComplete, onClose, children: content, locale, sx } = _a, customPapaParseConfig = __rest(_a, ["assumeNoHeaders", "restartable", "processChunk", "onStart", "onComplete", "onClose", "children", "locale", "sx"]);
    // helper to combine our displayed content and the user code that provides field definitions
    const [fields, setFields] = Object(external_react_["useState"])([]);
    const [fileState, setFileState] = Object(external_react_["useState"])(null);
    const [fileAccepted, setFileAccepted] = Object(external_react_["useState"])(false);
    const [fieldsState, setFieldsState] = Object(external_react_["useState"])(null);
    const [fieldsAccepted, setFieldsAccepted] = Object(external_react_["useState"])(false);
    // reset field assignments when file changes
    const activeFile = fileState && fileState.file;
    Object(external_react_["useEffect"])(() => {
        if (activeFile) {
            setFieldsState(null);
        }
    }, [activeFile]);
    const externalPreview = Object(external_react_["useMemo"])(() => {
        // generate stable externally-visible data objects
        const externalColumns = fileState &&
            generatePreviewColumns(fileState.firstRows, fileState.hasHeaders);
        return (fileState &&
            externalColumns && {
            rawData: fileState.firstChunk,
            columns: externalColumns,
            skipHeaders: !fileState.hasHeaders,
            parseWarning: fileState.parseWarning
        });
    }, [fileState]);
    // render provided child content that defines the fields
    const contentNodes = Object(external_react_["useMemo"])(() => {
        return typeof content === 'function'
            ? content({
                file: fileState && fileState.file,
                preview: externalPreview
            })
            : content;
    }, [fileState, externalPreview, content]);
    const contentWrap = (external_react_default.a.createElement(FieldDefinitionContext.Provider, { value: setFields }, contentNodes));
    // fall back to enUS if no default locale provided
    locale = locale !== null && locale !== void 0 ? locale : enUS;
    if (!fileAccepted || fileState === null || externalPreview === null) {
        return (external_react_default.a.createElement(LocaleContext.Provider, { value: locale },
            external_react_default.a.createElement("div", { className: "CSVImporter_Importer", css: (_b = sx === null || sx === void 0 ? void 0 : sx.ImporterStyles) !== null && _b !== void 0 ? _b : null },
                external_react_default.a.createElement(FileStep_FileStep, { customConfig: customPapaParseConfig, assumeNoHeaders: assumeNoHeaders, prevState: fileState, onChange: (parsedPreview) => {
                        setFileState(parsedPreview);
                    }, onAccept: () => {
                        setFileAccepted(true);
                    } }),
                contentWrap)));
    }
    if (!fieldsAccepted || fieldsState === null) {
        return (external_react_default.a.createElement(LocaleContext.Provider, { value: locale },
            external_react_default.a.createElement("div", { className: "CSVImporter_Importer", css: (_c = sx === null || sx === void 0 ? void 0 : sx.ImporterStyles) !== null && _c !== void 0 ? _c : null },
                external_react_default.a.createElement(FieldsStep, { fileState: fileState, fields: fields, prevState: fieldsState, onChange: (state) => {
                        setFieldsState(state);
                    }, onAccept: () => {
                        setFieldsAccepted(true);
                    }, onCancel: () => {
                        // keep existing preview data and assignments
                        setFileAccepted(false);
                    } }),
                contentWrap)));
    }
    return (external_react_default.a.createElement(LocaleContext.Provider, { value: locale },
        external_react_default.a.createElement("div", { className: "CSVImporter_Importer", css: (_d = sx === null || sx === void 0 ? void 0 : sx.ImporterStyles) !== null && _d !== void 0 ? _d : null },
            external_react_default.a.createElement(ProgressDisplay_ProgressDisplay, { sx: (_e = sx === null || sx === void 0 ? void 0 : sx.ProgressDisplaySx) !== null && _e !== void 0 ? _e : null, fileState: fileState, fieldsState: fieldsState, externalPreview: externalPreview, processChunk: processChunk, onStart: onStart, onRestart: restartable
                    ? () => {
                        // reset all state
                        setFileState(null);
                        setFileAccepted(false);
                        setFieldsState(null);
                        setFieldsAccepted(false);
                    }
                    : undefined, onComplete: onComplete, onClose: onClose }),
            contentWrap)));
}

// CONCATENATED MODULE: ./src/index.ts





/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map