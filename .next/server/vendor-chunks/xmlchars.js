"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/xmlchars";
exports.ids = ["vendor-chunks/xmlchars"];
exports.modules = {

/***/ "(ssr)/./node_modules/xmlchars/xml/1.0/ed5.js":
/*!**********************************************!*\
  !*** ./node_modules/xmlchars/xml/1.0/ed5.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n/**\n * Character classes and associated utilities for the 5th edition of XML 1.0.\n *\n * @author Louis-Dominique Dubeau\n * @license MIT\n * @copyright Louis-Dominique Dubeau\n */ Object.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n//\n// Fragments.\n//\nexports.CHAR = \"\t\\n\\r -퟿-�\\uD800\\uDC00-\\uDBFF\\uDFFF\";\nexports.S = \" \t\\r\\n\";\n// tslint:disable-next-line:max-line-length\nexports.NAME_START_CHAR = \":A-Z_a-z\\xc0-\\xd6\\xd8-\\xf6\\xf8-˿Ͱ-ͽͿ-῿‌‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�\\uD800\\uDC00-\\uDB7F\\uDFFF\";\nexports.NAME_CHAR = \"-\" + exports.NAME_START_CHAR + \".0-9\\xb7̀-ͯ‿-⁀\";\n//\n// Regular expressions.\n//\nexports.CHAR_RE = new RegExp(\"^[\" + exports.CHAR + \"]$\", \"u\");\nexports.S_RE = new RegExp(\"^[\" + exports.S + \"]+$\", \"u\");\nexports.NAME_START_CHAR_RE = new RegExp(\"^[\" + exports.NAME_START_CHAR + \"]$\", \"u\");\nexports.NAME_CHAR_RE = new RegExp(\"^[\" + exports.NAME_CHAR + \"]$\", \"u\");\nexports.NAME_RE = new RegExp(\"^[\" + exports.NAME_START_CHAR + \"][\" + exports.NAME_CHAR + \"]*$\", \"u\");\nexports.NMTOKEN_RE = new RegExp(\"^[\" + exports.NAME_CHAR + \"]+$\", \"u\");\nvar TAB = 9;\nvar NL = 0xA;\nvar CR = 0xD;\nvar SPACE = 0x20;\n//\n// Lists.\n//\n/** All characters in the ``S`` production. */ exports.S_LIST = [\n    SPACE,\n    NL,\n    CR,\n    TAB\n];\n/**\n * Determines whether a codepoint matches the ``CHAR`` production.\n *\n * @param c The code point.\n *\n * @returns ``true`` if the codepoint matches ``CHAR``.\n */ function isChar(c) {\n    return c >= SPACE && c <= 0xD7FF || c === NL || c === CR || c === TAB || c >= 0xE000 && c <= 0xFFFD || c >= 0x10000 && c <= 0x10FFFF;\n}\nexports.isChar = isChar;\n/**\n * Determines whether a codepoint matches the ``S`` (space) production.\n *\n * @param c The code point.\n *\n * @returns ``true`` if the codepoint matches ``S``.\n */ function isS(c) {\n    return c === SPACE || c === NL || c === CR || c === TAB;\n}\nexports.isS = isS;\n/**\n * Determines whether a codepoint matches the ``NAME_START_CHAR`` production.\n *\n * @param c The code point.\n *\n * @returns ``true`` if the codepoint matches ``NAME_START_CHAR``.\n */ function isNameStartChar(c) {\n    return c >= 0x41 && c <= 0x5A || c >= 0x61 && c <= 0x7A || c === 0x3A || c === 0x5F || c === 0x200C || c === 0x200D || c >= 0xC0 && c <= 0xD6 || c >= 0xD8 && c <= 0xF6 || c >= 0x00F8 && c <= 0x02FF || c >= 0x0370 && c <= 0x037D || c >= 0x037F && c <= 0x1FFF || c >= 0x2070 && c <= 0x218F || c >= 0x2C00 && c <= 0x2FEF || c >= 0x3001 && c <= 0xD7FF || c >= 0xF900 && c <= 0xFDCF || c >= 0xFDF0 && c <= 0xFFFD || c >= 0x10000 && c <= 0xEFFFF;\n}\nexports.isNameStartChar = isNameStartChar;\n/**\n * Determines whether a codepoint matches the ``NAME_CHAR`` production.\n *\n * @param c The code point.\n *\n * @returns ``true`` if the codepoint matches ``NAME_CHAR``.\n */ function isNameChar(c) {\n    return isNameStartChar(c) || c >= 0x30 && c <= 0x39 || c === 0x2D || c === 0x2E || c === 0xB7 || c >= 0x0300 && c <= 0x036F || c >= 0x203F && c <= 0x2040;\n}\nexports.isNameChar = isNameChar; //# sourceMappingURL=ed5.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMveG1sY2hhcnMveG1sLzEuMC9lZDUuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjs7Ozs7O0NBTUMsR0FDREEsOENBQTZDO0lBQUVHLE9BQU87QUFBSyxDQUFDLEVBQUM7QUFDN0QsRUFBRTtBQUNGLGFBQWE7QUFDYixFQUFFO0FBQ0ZELFlBQVksR0FBRztBQUNmQSxTQUFTLEdBQUc7QUFDWiwyQ0FBMkM7QUFDM0NBLHVCQUF1QixHQUFHO0FBQzFCQSxpQkFBaUIsR0FBRyxNQUFNQSxRQUFRSSxlQUFlLEdBQUc7QUFDcEQsRUFBRTtBQUNGLHVCQUF1QjtBQUN2QixFQUFFO0FBQ0ZKLGVBQWUsR0FBRyxJQUFJTyxPQUFPLE9BQU9QLFFBQVFFLElBQUksR0FBRyxNQUFNO0FBQ3pERixZQUFZLEdBQUcsSUFBSU8sT0FBTyxPQUFPUCxRQUFRRyxDQUFDLEdBQUcsT0FBTztBQUNwREgsMEJBQTBCLEdBQUcsSUFBSU8sT0FBTyxPQUFPUCxRQUFRSSxlQUFlLEdBQUcsTUFBTTtBQUMvRUosb0JBQW9CLEdBQUcsSUFBSU8sT0FBTyxPQUFPUCxRQUFRSyxTQUFTLEdBQUcsTUFBTTtBQUNuRUwsZUFBZSxHQUFHLElBQUlPLE9BQU8sT0FBT1AsUUFBUUksZUFBZSxHQUFHLE9BQU9KLFFBQVFLLFNBQVMsR0FBRyxPQUFPO0FBQ2hHTCxrQkFBa0IsR0FBRyxJQUFJTyxPQUFPLE9BQU9QLFFBQVFLLFNBQVMsR0FBRyxPQUFPO0FBQ2xFLElBQUlRLE1BQU07QUFDVixJQUFJQyxLQUFLO0FBQ1QsSUFBSUMsS0FBSztBQUNULElBQUlDLFFBQVE7QUFDWixFQUFFO0FBQ0YsU0FBUztBQUNULEVBQUU7QUFDRiw0Q0FBNEMsR0FDNUNoQixjQUFjLEdBQUc7SUFBQ2dCO0lBQU9GO0lBQUlDO0lBQUlGO0NBQUk7QUFDckM7Ozs7OztDQU1DLEdBQ0QsU0FBU0ssT0FBT0MsQ0FBQztJQUNiLE9BQU8sS0FBTUgsU0FBU0csS0FBSyxVQUN2QkEsTUFBTUwsTUFBTUssTUFBTUosTUFBTUksTUFBTU4sT0FDN0JNLEtBQUssVUFBVUEsS0FBSyxVQUNwQkEsS0FBSyxXQUFXQSxLQUFLO0FBQzlCO0FBQ0FuQixjQUFjLEdBQUdrQjtBQUNqQjs7Ozs7O0NBTUMsR0FDRCxTQUFTRSxJQUFJRCxDQUFDO0lBQ1YsT0FBT0EsTUFBTUgsU0FBU0csTUFBTUwsTUFBTUssTUFBTUosTUFBTUksTUFBTU47QUFDeEQ7QUFDQWIsV0FBVyxHQUFHb0I7QUFDZDs7Ozs7O0NBTUMsR0FDRCxTQUFTQyxnQkFBZ0JGLENBQUM7SUFDdEIsT0FBUSxLQUFNLFFBQVFBLEtBQUssUUFDdEJBLEtBQUssUUFBUUEsS0FBSyxRQUNuQkEsTUFBTSxRQUNOQSxNQUFNLFFBQ05BLE1BQU0sVUFDTkEsTUFBTSxVQUNMQSxLQUFLLFFBQVFBLEtBQUssUUFDbEJBLEtBQUssUUFBUUEsS0FBSyxRQUNsQkEsS0FBSyxVQUFVQSxLQUFLLFVBQ3BCQSxLQUFLLFVBQVVBLEtBQUssVUFDcEJBLEtBQUssVUFBVUEsS0FBSyxVQUNwQkEsS0FBSyxVQUFVQSxLQUFLLFVBQ3BCQSxLQUFLLFVBQVVBLEtBQUssVUFDcEJBLEtBQUssVUFBVUEsS0FBSyxVQUNwQkEsS0FBSyxVQUFVQSxLQUFLLFVBQ3BCQSxLQUFLLFVBQVVBLEtBQUssVUFDcEJBLEtBQUssV0FBV0EsS0FBSztBQUM5QjtBQUNBbkIsdUJBQXVCLEdBQUdxQjtBQUMxQjs7Ozs7O0NBTUMsR0FDRCxTQUFTQyxXQUFXSCxDQUFDO0lBQ2pCLE9BQU9FLGdCQUFnQkYsTUFDbEJBLEtBQUssUUFBUUEsS0FBSyxRQUNuQkEsTUFBTSxRQUNOQSxNQUFNLFFBQ05BLE1BQU0sUUFDTEEsS0FBSyxVQUFVQSxLQUFLLFVBQ3BCQSxLQUFLLFVBQVVBLEtBQUs7QUFDN0I7QUFDQW5CLGtCQUFrQixHQUFHc0IsWUFDckIsK0JBQStCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGlnbWEvLi9ub2RlX21vZHVsZXMveG1sY2hhcnMveG1sLzEuMC9lZDUuanM/YzI3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ2hhcmFjdGVyIGNsYXNzZXMgYW5kIGFzc29jaWF0ZWQgdXRpbGl0aWVzIGZvciB0aGUgNXRoIGVkaXRpb24gb2YgWE1MIDEuMC5cbiAqXG4gKiBAYXV0aG9yIExvdWlzLURvbWluaXF1ZSBEdWJlYXVcbiAqIEBsaWNlbnNlIE1JVFxuICogQGNvcHlyaWdodCBMb3Vpcy1Eb21pbmlxdWUgRHViZWF1XG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vXG4vLyBGcmFnbWVudHMuXG4vL1xuZXhwb3J0cy5DSEFSID0gXCJcXHRcXG5cXHIgLVxcdUQ3RkZcXHVFMDAwLVxcdUZGRkRcXHVEODAwXFx1REMwMC1cXHVEQkZGXFx1REZGRlwiO1xuZXhwb3J0cy5TID0gXCIgXFx0XFxyXFxuXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG5leHBvcnRzLk5BTUVfU1RBUlRfQ0hBUiA9IFwiOkEtWl9hLXpcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyRkZcXHUwMzcwLVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRFxcdUQ4MDBcXHVEQzAwLVxcdURCN0ZcXHVERkZGXCI7XG5leHBvcnRzLk5BTUVfQ0hBUiA9IFwiLVwiICsgZXhwb3J0cy5OQU1FX1NUQVJUX0NIQVIgKyBcIi4wLTlcXHUwMEI3XFx1MDMwMC1cXHUwMzZGXFx1MjAzRi1cXHUyMDQwXCI7XG4vL1xuLy8gUmVndWxhciBleHByZXNzaW9ucy5cbi8vXG5leHBvcnRzLkNIQVJfUkUgPSBuZXcgUmVnRXhwKFwiXltcIiArIGV4cG9ydHMuQ0hBUiArIFwiXSRcIiwgXCJ1XCIpO1xuZXhwb3J0cy5TX1JFID0gbmV3IFJlZ0V4cChcIl5bXCIgKyBleHBvcnRzLlMgKyBcIl0rJFwiLCBcInVcIik7XG5leHBvcnRzLk5BTUVfU1RBUlRfQ0hBUl9SRSA9IG5ldyBSZWdFeHAoXCJeW1wiICsgZXhwb3J0cy5OQU1FX1NUQVJUX0NIQVIgKyBcIl0kXCIsIFwidVwiKTtcbmV4cG9ydHMuTkFNRV9DSEFSX1JFID0gbmV3IFJlZ0V4cChcIl5bXCIgKyBleHBvcnRzLk5BTUVfQ0hBUiArIFwiXSRcIiwgXCJ1XCIpO1xuZXhwb3J0cy5OQU1FX1JFID0gbmV3IFJlZ0V4cChcIl5bXCIgKyBleHBvcnRzLk5BTUVfU1RBUlRfQ0hBUiArIFwiXVtcIiArIGV4cG9ydHMuTkFNRV9DSEFSICsgXCJdKiRcIiwgXCJ1XCIpO1xuZXhwb3J0cy5OTVRPS0VOX1JFID0gbmV3IFJlZ0V4cChcIl5bXCIgKyBleHBvcnRzLk5BTUVfQ0hBUiArIFwiXSskXCIsIFwidVwiKTtcbnZhciBUQUIgPSA5O1xudmFyIE5MID0gMHhBO1xudmFyIENSID0gMHhEO1xudmFyIFNQQUNFID0gMHgyMDtcbi8vXG4vLyBMaXN0cy5cbi8vXG4vKiogQWxsIGNoYXJhY3RlcnMgaW4gdGhlIGBgU2BgIHByb2R1Y3Rpb24uICovXG5leHBvcnRzLlNfTElTVCA9IFtTUEFDRSwgTkwsIENSLCBUQUJdO1xuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBjb2RlcG9pbnQgbWF0Y2hlcyB0aGUgYGBDSEFSYGAgcHJvZHVjdGlvbi5cbiAqXG4gKiBAcGFyYW0gYyBUaGUgY29kZSBwb2ludC5cbiAqXG4gKiBAcmV0dXJucyBgYHRydWVgYCBpZiB0aGUgY29kZXBvaW50IG1hdGNoZXMgYGBDSEFSYGAuXG4gKi9cbmZ1bmN0aW9uIGlzQ2hhcihjKSB7XG4gICAgcmV0dXJuIChjID49IFNQQUNFICYmIGMgPD0gMHhEN0ZGKSB8fFxuICAgICAgICBjID09PSBOTCB8fCBjID09PSBDUiB8fCBjID09PSBUQUIgfHxcbiAgICAgICAgKGMgPj0gMHhFMDAwICYmIGMgPD0gMHhGRkZEKSB8fFxuICAgICAgICAoYyA+PSAweDEwMDAwICYmIGMgPD0gMHgxMEZGRkYpO1xufVxuZXhwb3J0cy5pc0NoYXIgPSBpc0NoYXI7XG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGNvZGVwb2ludCBtYXRjaGVzIHRoZSBgYFNgYCAoc3BhY2UpIHByb2R1Y3Rpb24uXG4gKlxuICogQHBhcmFtIGMgVGhlIGNvZGUgcG9pbnQuXG4gKlxuICogQHJldHVybnMgYGB0cnVlYGAgaWYgdGhlIGNvZGVwb2ludCBtYXRjaGVzIGBgU2BgLlxuICovXG5mdW5jdGlvbiBpc1MoYykge1xuICAgIHJldHVybiBjID09PSBTUEFDRSB8fCBjID09PSBOTCB8fCBjID09PSBDUiB8fCBjID09PSBUQUI7XG59XG5leHBvcnRzLmlzUyA9IGlzUztcbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgY29kZXBvaW50IG1hdGNoZXMgdGhlIGBgTkFNRV9TVEFSVF9DSEFSYGAgcHJvZHVjdGlvbi5cbiAqXG4gKiBAcGFyYW0gYyBUaGUgY29kZSBwb2ludC5cbiAqXG4gKiBAcmV0dXJucyBgYHRydWVgYCBpZiB0aGUgY29kZXBvaW50IG1hdGNoZXMgYGBOQU1FX1NUQVJUX0NIQVJgYC5cbiAqL1xuZnVuY3Rpb24gaXNOYW1lU3RhcnRDaGFyKGMpIHtcbiAgICByZXR1cm4gKChjID49IDB4NDEgJiYgYyA8PSAweDVBKSB8fFxuICAgICAgICAoYyA+PSAweDYxICYmIGMgPD0gMHg3QSkgfHxcbiAgICAgICAgYyA9PT0gMHgzQSB8fFxuICAgICAgICBjID09PSAweDVGIHx8XG4gICAgICAgIGMgPT09IDB4MjAwQyB8fFxuICAgICAgICBjID09PSAweDIwMEQgfHxcbiAgICAgICAgKGMgPj0gMHhDMCAmJiBjIDw9IDB4RDYpIHx8XG4gICAgICAgIChjID49IDB4RDggJiYgYyA8PSAweEY2KSB8fFxuICAgICAgICAoYyA+PSAweDAwRjggJiYgYyA8PSAweDAyRkYpIHx8XG4gICAgICAgIChjID49IDB4MDM3MCAmJiBjIDw9IDB4MDM3RCkgfHxcbiAgICAgICAgKGMgPj0gMHgwMzdGICYmIGMgPD0gMHgxRkZGKSB8fFxuICAgICAgICAoYyA+PSAweDIwNzAgJiYgYyA8PSAweDIxOEYpIHx8XG4gICAgICAgIChjID49IDB4MkMwMCAmJiBjIDw9IDB4MkZFRikgfHxcbiAgICAgICAgKGMgPj0gMHgzMDAxICYmIGMgPD0gMHhEN0ZGKSB8fFxuICAgICAgICAoYyA+PSAweEY5MDAgJiYgYyA8PSAweEZEQ0YpIHx8XG4gICAgICAgIChjID49IDB4RkRGMCAmJiBjIDw9IDB4RkZGRCkgfHxcbiAgICAgICAgKGMgPj0gMHgxMDAwMCAmJiBjIDw9IDB4RUZGRkYpKTtcbn1cbmV4cG9ydHMuaXNOYW1lU3RhcnRDaGFyID0gaXNOYW1lU3RhcnRDaGFyO1xuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBjb2RlcG9pbnQgbWF0Y2hlcyB0aGUgYGBOQU1FX0NIQVJgYCBwcm9kdWN0aW9uLlxuICpcbiAqIEBwYXJhbSBjIFRoZSBjb2RlIHBvaW50LlxuICpcbiAqIEByZXR1cm5zIGBgdHJ1ZWBgIGlmIHRoZSBjb2RlcG9pbnQgbWF0Y2hlcyBgYE5BTUVfQ0hBUmBgLlxuICovXG5mdW5jdGlvbiBpc05hbWVDaGFyKGMpIHtcbiAgICByZXR1cm4gaXNOYW1lU3RhcnRDaGFyKGMpIHx8XG4gICAgICAgIChjID49IDB4MzAgJiYgYyA8PSAweDM5KSB8fFxuICAgICAgICBjID09PSAweDJEIHx8XG4gICAgICAgIGMgPT09IDB4MkUgfHxcbiAgICAgICAgYyA9PT0gMHhCNyB8fFxuICAgICAgICAoYyA+PSAweDAzMDAgJiYgYyA8PSAweDAzNkYpIHx8XG4gICAgICAgIChjID49IDB4MjAzRiAmJiBjIDw9IDB4MjA0MCk7XG59XG5leHBvcnRzLmlzTmFtZUNoYXIgPSBpc05hbWVDaGFyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZWQ1LmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkNIQVIiLCJTIiwiTkFNRV9TVEFSVF9DSEFSIiwiTkFNRV9DSEFSIiwiQ0hBUl9SRSIsIlJlZ0V4cCIsIlNfUkUiLCJOQU1FX1NUQVJUX0NIQVJfUkUiLCJOQU1FX0NIQVJfUkUiLCJOQU1FX1JFIiwiTk1UT0tFTl9SRSIsIlRBQiIsIk5MIiwiQ1IiLCJTUEFDRSIsIlNfTElTVCIsImlzQ2hhciIsImMiLCJpc1MiLCJpc05hbWVTdGFydENoYXIiLCJpc05hbWVDaGFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/xmlchars/xml/1.0/ed5.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/xmlchars/xml/1.1/ed2.js":
/*!**********************************************!*\
  !*** ./node_modules/xmlchars/xml/1.1/ed2.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n/**\n * Character classes and associated utilities for the 2nd edition of XML 1.1.\n *\n * @author Louis-Dominique Dubeau\n * @license MIT\n * @copyright Louis-Dominique Dubeau\n */ Object.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n//\n// Fragments.\n//\nexports.CHAR = \"\\x01-퟿-�\\uD800\\uDC00-\\uDBFF\\uDFFF\";\nexports.RESTRICTED_CHAR = \"\\x01-\\b\\v\\f\\x0e-\\x1f\\x7f-\\x84\\x86-\\x9f\";\nexports.S = \" \t\\r\\n\";\n// tslint:disable-next-line:max-line-length\nexports.NAME_START_CHAR = \":A-Z_a-z\\xc0-\\xd6\\xd8-\\xf6\\xf8-˿Ͱ-ͽͿ-῿‌‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�\\uD800\\uDC00-\\uDB7F\\uDFFF\";\nexports.NAME_CHAR = \"-\" + exports.NAME_START_CHAR + \".0-9\\xb7̀-ͯ‿-⁀\";\n//\n// Regular expressions.\n//\nexports.CHAR_RE = new RegExp(\"^[\" + exports.CHAR + \"]$\", \"u\");\nexports.RESTRICTED_CHAR_RE = new RegExp(\"^[\" + exports.RESTRICTED_CHAR + \"]$\", \"u\");\nexports.S_RE = new RegExp(\"^[\" + exports.S + \"]+$\", \"u\");\nexports.NAME_START_CHAR_RE = new RegExp(\"^[\" + exports.NAME_START_CHAR + \"]$\", \"u\");\nexports.NAME_CHAR_RE = new RegExp(\"^[\" + exports.NAME_CHAR + \"]$\", \"u\");\nexports.NAME_RE = new RegExp(\"^[\" + exports.NAME_START_CHAR + \"][\" + exports.NAME_CHAR + \"]*$\", \"u\");\nexports.NMTOKEN_RE = new RegExp(\"^[\" + exports.NAME_CHAR + \"]+$\", \"u\");\nvar TAB = 9;\nvar NL = 0xA;\nvar CR = 0xD;\nvar SPACE = 0x20;\n//\n// Lists.\n//\n/** All characters in the ``S`` production. */ exports.S_LIST = [\n    SPACE,\n    NL,\n    CR,\n    TAB\n];\n/**\n * Determines whether a codepoint matches the ``CHAR`` production.\n *\n * @param c The code point.\n *\n * @returns ``true`` if the codepoint matches ``CHAR``.\n */ function isChar(c) {\n    return c >= 0x0001 && c <= 0xD7FF || c >= 0xE000 && c <= 0xFFFD || c >= 0x10000 && c <= 0x10FFFF;\n}\nexports.isChar = isChar;\n/**\n * Determines whether a codepoint matches the ``RESTRICTED_CHAR`` production.\n *\n * @param c The code point.\n *\n * @returns ``true`` if the codepoint matches ``RESTRICTED_CHAR``.\n */ function isRestrictedChar(c) {\n    return c >= 0x1 && c <= 0x8 || c === 0xB || c === 0xC || c >= 0xE && c <= 0x1F || c >= 0x7F && c <= 0x84 || c >= 0x86 && c <= 0x9F;\n}\nexports.isRestrictedChar = isRestrictedChar;\n/**\n * Determines whether a codepoint matches the ``CHAR`` production and does not\n * match the ``RESTRICTED_CHAR`` production. ``isCharAndNotRestricted(x)`` is\n * equivalent to ``isChar(x) && !isRestrictedChar(x)``. This function is faster\n * than running the two-call equivalent.\n *\n * @param c The code point.\n *\n * @returns ``true`` if the codepoint matches ``CHAR`` and does not match\n * ``RESTRICTED_CHAR``.\n */ function isCharAndNotRestricted(c) {\n    return c === 0x9 || c === 0xA || c === 0xD || c > 0x1F && c < 0x7F || c === 0x85 || c > 0x9F && c <= 0xD7FF || c >= 0xE000 && c <= 0xFFFD || c >= 0x10000 && c <= 0x10FFFF;\n}\nexports.isCharAndNotRestricted = isCharAndNotRestricted;\n/**\n * Determines whether a codepoint matches the ``S`` (space) production.\n *\n * @param c The code point.\n *\n * @returns ``true`` if the codepoint matches ``S``.\n */ function isS(c) {\n    return c === SPACE || c === NL || c === CR || c === TAB;\n}\nexports.isS = isS;\n/**\n * Determines whether a codepoint matches the ``NAME_START_CHAR`` production.\n *\n * @param c The code point.\n *\n * @returns ``true`` if the codepoint matches ``NAME_START_CHAR``.\n */ // tslint:disable-next-line:cyclomatic-complexity\nfunction isNameStartChar(c) {\n    return c >= 0x41 && c <= 0x5A || c >= 0x61 && c <= 0x7A || c === 0x3A || c === 0x5F || c === 0x200C || c === 0x200D || c >= 0xC0 && c <= 0xD6 || c >= 0xD8 && c <= 0xF6 || c >= 0x00F8 && c <= 0x02FF || c >= 0x0370 && c <= 0x037D || c >= 0x037F && c <= 0x1FFF || c >= 0x2070 && c <= 0x218F || c >= 0x2C00 && c <= 0x2FEF || c >= 0x3001 && c <= 0xD7FF || c >= 0xF900 && c <= 0xFDCF || c >= 0xFDF0 && c <= 0xFFFD || c >= 0x10000 && c <= 0xEFFFF;\n}\nexports.isNameStartChar = isNameStartChar;\n/**\n * Determines whether a codepoint matches the ``NAME_CHAR`` production.\n *\n * @param c The code point.\n *\n * @returns ``true`` if the codepoint matches ``NAME_CHAR``.\n */ function isNameChar(c) {\n    return isNameStartChar(c) || c >= 0x30 && c <= 0x39 || c === 0x2D || c === 0x2E || c === 0xB7 || c >= 0x0300 && c <= 0x036F || c >= 0x203F && c <= 0x2040;\n}\nexports.isNameChar = isNameChar; //# sourceMappingURL=ed2.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMveG1sY2hhcnMveG1sLzEuMS9lZDIuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjs7Ozs7O0NBTUMsR0FDREEsOENBQTZDO0lBQUVHLE9BQU87QUFBSyxDQUFDLEVBQUM7QUFDN0QsRUFBRTtBQUNGLGFBQWE7QUFDYixFQUFFO0FBQ0ZELFlBQVksR0FBRztBQUNmQSx1QkFBdUIsR0FBRztBQUMxQkEsU0FBUyxHQUFHO0FBQ1osMkNBQTJDO0FBQzNDQSx1QkFBdUIsR0FBRztBQUMxQkEsaUJBQWlCLEdBQUcsTUFBTUEsUUFBUUssZUFBZSxHQUFHO0FBQ3BELEVBQUU7QUFDRix1QkFBdUI7QUFDdkIsRUFBRTtBQUNGTCxlQUFlLEdBQUcsSUFBSVEsT0FBTyxPQUFPUixRQUFRRSxJQUFJLEdBQUcsTUFBTTtBQUN6REYsMEJBQTBCLEdBQUcsSUFBSVEsT0FBTyxPQUFPUixRQUFRRyxlQUFlLEdBQUcsTUFBTTtBQUMvRUgsWUFBWSxHQUFHLElBQUlRLE9BQU8sT0FBT1IsUUFBUUksQ0FBQyxHQUFHLE9BQU87QUFDcERKLDBCQUEwQixHQUFHLElBQUlRLE9BQU8sT0FBT1IsUUFBUUssZUFBZSxHQUFHLE1BQU07QUFDL0VMLG9CQUFvQixHQUFHLElBQUlRLE9BQU8sT0FBT1IsUUFBUU0sU0FBUyxHQUFHLE1BQU07QUFDbkVOLGVBQWUsR0FBRyxJQUFJUSxPQUFPLE9BQU9SLFFBQVFLLGVBQWUsR0FBRyxPQUFPTCxRQUFRTSxTQUFTLEdBQUcsT0FBTztBQUNoR04sa0JBQWtCLEdBQUcsSUFBSVEsT0FBTyxPQUFPUixRQUFRTSxTQUFTLEdBQUcsT0FBTztBQUNsRSxJQUFJUyxNQUFNO0FBQ1YsSUFBSUMsS0FBSztBQUNULElBQUlDLEtBQUs7QUFDVCxJQUFJQyxRQUFRO0FBQ1osRUFBRTtBQUNGLFNBQVM7QUFDVCxFQUFFO0FBQ0YsNENBQTRDLEdBQzVDbEIsY0FBYyxHQUFHO0lBQUNrQjtJQUFPRjtJQUFJQztJQUFJRjtDQUFJO0FBQ3JDOzs7Ozs7Q0FNQyxHQUNELFNBQVNLLE9BQU9DLENBQUM7SUFDYixPQUFPLEtBQU0sVUFBVUEsS0FBSyxVQUN2QkEsS0FBSyxVQUFVQSxLQUFLLFVBQ3BCQSxLQUFLLFdBQVdBLEtBQUs7QUFDOUI7QUFDQXJCLGNBQWMsR0FBR29CO0FBQ2pCOzs7Ozs7Q0FNQyxHQUNELFNBQVNFLGlCQUFpQkQsQ0FBQztJQUN2QixPQUFPLEtBQU0sT0FBT0EsS0FBSyxPQUNyQkEsTUFBTSxPQUNOQSxNQUFNLE9BQ0xBLEtBQUssT0FBT0EsS0FBSyxRQUNqQkEsS0FBSyxRQUFRQSxLQUFLLFFBQ2xCQSxLQUFLLFFBQVFBLEtBQUs7QUFDM0I7QUFDQXJCLHdCQUF3QixHQUFHc0I7QUFDM0I7Ozs7Ozs7Ozs7Q0FVQyxHQUNELFNBQVNDLHVCQUF1QkYsQ0FBQztJQUM3QixPQUFPLE1BQU8sT0FDVEEsTUFBTSxPQUNOQSxNQUFNLE9BQ05BLElBQUksUUFBUUEsSUFBSSxRQUNoQkEsTUFBTSxRQUNOQSxJQUFJLFFBQVFBLEtBQUssVUFDakJBLEtBQUssVUFBVUEsS0FBSyxVQUNwQkEsS0FBSyxXQUFXQSxLQUFLO0FBQzlCO0FBQ0FyQiw4QkFBOEIsR0FBR3VCO0FBQ2pDOzs7Ozs7Q0FNQyxHQUNELFNBQVNDLElBQUlILENBQUM7SUFDVixPQUFPQSxNQUFNSCxTQUFTRyxNQUFNTCxNQUFNSyxNQUFNSixNQUFNSSxNQUFNTjtBQUN4RDtBQUNBZixXQUFXLEdBQUd3QjtBQUNkOzs7Ozs7Q0FNQyxHQUNELGlEQUFpRDtBQUNqRCxTQUFTQyxnQkFBZ0JKLENBQUM7SUFDdEIsT0FBUSxLQUFNLFFBQVFBLEtBQUssUUFDdEJBLEtBQUssUUFBUUEsS0FBSyxRQUNuQkEsTUFBTSxRQUNOQSxNQUFNLFFBQ05BLE1BQU0sVUFDTkEsTUFBTSxVQUNMQSxLQUFLLFFBQVFBLEtBQUssUUFDbEJBLEtBQUssUUFBUUEsS0FBSyxRQUNsQkEsS0FBSyxVQUFVQSxLQUFLLFVBQ3BCQSxLQUFLLFVBQVVBLEtBQUssVUFDcEJBLEtBQUssVUFBVUEsS0FBSyxVQUNwQkEsS0FBSyxVQUFVQSxLQUFLLFVBQ3BCQSxLQUFLLFVBQVVBLEtBQUssVUFDcEJBLEtBQUssVUFBVUEsS0FBSyxVQUNwQkEsS0FBSyxVQUFVQSxLQUFLLFVBQ3BCQSxLQUFLLFVBQVVBLEtBQUssVUFDcEJBLEtBQUssV0FBV0EsS0FBSztBQUM5QjtBQUNBckIsdUJBQXVCLEdBQUd5QjtBQUMxQjs7Ozs7O0NBTUMsR0FDRCxTQUFTQyxXQUFXTCxDQUFDO0lBQ2pCLE9BQU9JLGdCQUFnQkosTUFDbEJBLEtBQUssUUFBUUEsS0FBSyxRQUNuQkEsTUFBTSxRQUNOQSxNQUFNLFFBQ05BLE1BQU0sUUFDTEEsS0FBSyxVQUFVQSxLQUFLLFVBQ3BCQSxLQUFLLFVBQVVBLEtBQUs7QUFDN0I7QUFDQXJCLGtCQUFrQixHQUFHMEIsWUFDckIsK0JBQStCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGlnbWEvLi9ub2RlX21vZHVsZXMveG1sY2hhcnMveG1sLzEuMS9lZDIuanM/OWRhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ2hhcmFjdGVyIGNsYXNzZXMgYW5kIGFzc29jaWF0ZWQgdXRpbGl0aWVzIGZvciB0aGUgMm5kIGVkaXRpb24gb2YgWE1MIDEuMS5cbiAqXG4gKiBAYXV0aG9yIExvdWlzLURvbWluaXF1ZSBEdWJlYXVcbiAqIEBsaWNlbnNlIE1JVFxuICogQGNvcHlyaWdodCBMb3Vpcy1Eb21pbmlxdWUgRHViZWF1XG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vXG4vLyBGcmFnbWVudHMuXG4vL1xuZXhwb3J0cy5DSEFSID0gXCJcXHUwMDAxLVxcdUQ3RkZcXHVFMDAwLVxcdUZGRkRcXHVEODAwXFx1REMwMC1cXHVEQkZGXFx1REZGRlwiO1xuZXhwb3J0cy5SRVNUUklDVEVEX0NIQVIgPSBcIlxcdTAwMDEtXFx1MDAwOFxcdTAwMEJcXHUwMDBDXFx1MDAwRS1cXHUwMDFGXFx1MDA3Ri1cXHUwMDg0XFx1MDA4Ni1cXHUwMDlGXCI7XG5leHBvcnRzLlMgPSBcIiBcXHRcXHJcXG5cIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbmV4cG9ydHMuTkFNRV9TVEFSVF9DSEFSID0gXCI6QS1aX2EtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMENcXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXFx1RDgwMFxcdURDMDAtXFx1REI3RlxcdURGRkZcIjtcbmV4cG9ydHMuTkFNRV9DSEFSID0gXCItXCIgKyBleHBvcnRzLk5BTUVfU1RBUlRfQ0hBUiArIFwiLjAtOVxcdTAwQjdcXHUwMzAwLVxcdTAzNkZcXHUyMDNGLVxcdTIwNDBcIjtcbi8vXG4vLyBSZWd1bGFyIGV4cHJlc3Npb25zLlxuLy9cbmV4cG9ydHMuQ0hBUl9SRSA9IG5ldyBSZWdFeHAoXCJeW1wiICsgZXhwb3J0cy5DSEFSICsgXCJdJFwiLCBcInVcIik7XG5leHBvcnRzLlJFU1RSSUNURURfQ0hBUl9SRSA9IG5ldyBSZWdFeHAoXCJeW1wiICsgZXhwb3J0cy5SRVNUUklDVEVEX0NIQVIgKyBcIl0kXCIsIFwidVwiKTtcbmV4cG9ydHMuU19SRSA9IG5ldyBSZWdFeHAoXCJeW1wiICsgZXhwb3J0cy5TICsgXCJdKyRcIiwgXCJ1XCIpO1xuZXhwb3J0cy5OQU1FX1NUQVJUX0NIQVJfUkUgPSBuZXcgUmVnRXhwKFwiXltcIiArIGV4cG9ydHMuTkFNRV9TVEFSVF9DSEFSICsgXCJdJFwiLCBcInVcIik7XG5leHBvcnRzLk5BTUVfQ0hBUl9SRSA9IG5ldyBSZWdFeHAoXCJeW1wiICsgZXhwb3J0cy5OQU1FX0NIQVIgKyBcIl0kXCIsIFwidVwiKTtcbmV4cG9ydHMuTkFNRV9SRSA9IG5ldyBSZWdFeHAoXCJeW1wiICsgZXhwb3J0cy5OQU1FX1NUQVJUX0NIQVIgKyBcIl1bXCIgKyBleHBvcnRzLk5BTUVfQ0hBUiArIFwiXSokXCIsIFwidVwiKTtcbmV4cG9ydHMuTk1UT0tFTl9SRSA9IG5ldyBSZWdFeHAoXCJeW1wiICsgZXhwb3J0cy5OQU1FX0NIQVIgKyBcIl0rJFwiLCBcInVcIik7XG52YXIgVEFCID0gOTtcbnZhciBOTCA9IDB4QTtcbnZhciBDUiA9IDB4RDtcbnZhciBTUEFDRSA9IDB4MjA7XG4vL1xuLy8gTGlzdHMuXG4vL1xuLyoqIEFsbCBjaGFyYWN0ZXJzIGluIHRoZSBgYFNgYCBwcm9kdWN0aW9uLiAqL1xuZXhwb3J0cy5TX0xJU1QgPSBbU1BBQ0UsIE5MLCBDUiwgVEFCXTtcbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgY29kZXBvaW50IG1hdGNoZXMgdGhlIGBgQ0hBUmBgIHByb2R1Y3Rpb24uXG4gKlxuICogQHBhcmFtIGMgVGhlIGNvZGUgcG9pbnQuXG4gKlxuICogQHJldHVybnMgYGB0cnVlYGAgaWYgdGhlIGNvZGVwb2ludCBtYXRjaGVzIGBgQ0hBUmBgLlxuICovXG5mdW5jdGlvbiBpc0NoYXIoYykge1xuICAgIHJldHVybiAoYyA+PSAweDAwMDEgJiYgYyA8PSAweEQ3RkYpIHx8XG4gICAgICAgIChjID49IDB4RTAwMCAmJiBjIDw9IDB4RkZGRCkgfHxcbiAgICAgICAgKGMgPj0gMHgxMDAwMCAmJiBjIDw9IDB4MTBGRkZGKTtcbn1cbmV4cG9ydHMuaXNDaGFyID0gaXNDaGFyO1xuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBjb2RlcG9pbnQgbWF0Y2hlcyB0aGUgYGBSRVNUUklDVEVEX0NIQVJgYCBwcm9kdWN0aW9uLlxuICpcbiAqIEBwYXJhbSBjIFRoZSBjb2RlIHBvaW50LlxuICpcbiAqIEByZXR1cm5zIGBgdHJ1ZWBgIGlmIHRoZSBjb2RlcG9pbnQgbWF0Y2hlcyBgYFJFU1RSSUNURURfQ0hBUmBgLlxuICovXG5mdW5jdGlvbiBpc1Jlc3RyaWN0ZWRDaGFyKGMpIHtcbiAgICByZXR1cm4gKGMgPj0gMHgxICYmIGMgPD0gMHg4KSB8fFxuICAgICAgICBjID09PSAweEIgfHxcbiAgICAgICAgYyA9PT0gMHhDIHx8XG4gICAgICAgIChjID49IDB4RSAmJiBjIDw9IDB4MUYpIHx8XG4gICAgICAgIChjID49IDB4N0YgJiYgYyA8PSAweDg0KSB8fFxuICAgICAgICAoYyA+PSAweDg2ICYmIGMgPD0gMHg5Rik7XG59XG5leHBvcnRzLmlzUmVzdHJpY3RlZENoYXIgPSBpc1Jlc3RyaWN0ZWRDaGFyO1xuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBjb2RlcG9pbnQgbWF0Y2hlcyB0aGUgYGBDSEFSYGAgcHJvZHVjdGlvbiBhbmQgZG9lcyBub3RcbiAqIG1hdGNoIHRoZSBgYFJFU1RSSUNURURfQ0hBUmBgIHByb2R1Y3Rpb24uIGBgaXNDaGFyQW5kTm90UmVzdHJpY3RlZCh4KWBgIGlzXG4gKiBlcXVpdmFsZW50IHRvIGBgaXNDaGFyKHgpICYmICFpc1Jlc3RyaWN0ZWRDaGFyKHgpYGAuIFRoaXMgZnVuY3Rpb24gaXMgZmFzdGVyXG4gKiB0aGFuIHJ1bm5pbmcgdGhlIHR3by1jYWxsIGVxdWl2YWxlbnQuXG4gKlxuICogQHBhcmFtIGMgVGhlIGNvZGUgcG9pbnQuXG4gKlxuICogQHJldHVybnMgYGB0cnVlYGAgaWYgdGhlIGNvZGVwb2ludCBtYXRjaGVzIGBgQ0hBUmBgIGFuZCBkb2VzIG5vdCBtYXRjaFxuICogYGBSRVNUUklDVEVEX0NIQVJgYC5cbiAqL1xuZnVuY3Rpb24gaXNDaGFyQW5kTm90UmVzdHJpY3RlZChjKSB7XG4gICAgcmV0dXJuIChjID09PSAweDkpIHx8XG4gICAgICAgIChjID09PSAweEEpIHx8XG4gICAgICAgIChjID09PSAweEQpIHx8XG4gICAgICAgIChjID4gMHgxRiAmJiBjIDwgMHg3RikgfHxcbiAgICAgICAgKGMgPT09IDB4ODUpIHx8XG4gICAgICAgIChjID4gMHg5RiAmJiBjIDw9IDB4RDdGRikgfHxcbiAgICAgICAgKGMgPj0gMHhFMDAwICYmIGMgPD0gMHhGRkZEKSB8fFxuICAgICAgICAoYyA+PSAweDEwMDAwICYmIGMgPD0gMHgxMEZGRkYpO1xufVxuZXhwb3J0cy5pc0NoYXJBbmROb3RSZXN0cmljdGVkID0gaXNDaGFyQW5kTm90UmVzdHJpY3RlZDtcbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgY29kZXBvaW50IG1hdGNoZXMgdGhlIGBgU2BgIChzcGFjZSkgcHJvZHVjdGlvbi5cbiAqXG4gKiBAcGFyYW0gYyBUaGUgY29kZSBwb2ludC5cbiAqXG4gKiBAcmV0dXJucyBgYHRydWVgYCBpZiB0aGUgY29kZXBvaW50IG1hdGNoZXMgYGBTYGAuXG4gKi9cbmZ1bmN0aW9uIGlzUyhjKSB7XG4gICAgcmV0dXJuIGMgPT09IFNQQUNFIHx8IGMgPT09IE5MIHx8IGMgPT09IENSIHx8IGMgPT09IFRBQjtcbn1cbmV4cG9ydHMuaXNTID0gaXNTO1xuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBjb2RlcG9pbnQgbWF0Y2hlcyB0aGUgYGBOQU1FX1NUQVJUX0NIQVJgYCBwcm9kdWN0aW9uLlxuICpcbiAqIEBwYXJhbSBjIFRoZSBjb2RlIHBvaW50LlxuICpcbiAqIEByZXR1cm5zIGBgdHJ1ZWBgIGlmIHRoZSBjb2RlcG9pbnQgbWF0Y2hlcyBgYE5BTUVfU1RBUlRfQ0hBUmBgLlxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y3ljbG9tYXRpYy1jb21wbGV4aXR5XG5mdW5jdGlvbiBpc05hbWVTdGFydENoYXIoYykge1xuICAgIHJldHVybiAoKGMgPj0gMHg0MSAmJiBjIDw9IDB4NUEpIHx8XG4gICAgICAgIChjID49IDB4NjEgJiYgYyA8PSAweDdBKSB8fFxuICAgICAgICBjID09PSAweDNBIHx8XG4gICAgICAgIGMgPT09IDB4NUYgfHxcbiAgICAgICAgYyA9PT0gMHgyMDBDIHx8XG4gICAgICAgIGMgPT09IDB4MjAwRCB8fFxuICAgICAgICAoYyA+PSAweEMwICYmIGMgPD0gMHhENikgfHxcbiAgICAgICAgKGMgPj0gMHhEOCAmJiBjIDw9IDB4RjYpIHx8XG4gICAgICAgIChjID49IDB4MDBGOCAmJiBjIDw9IDB4MDJGRikgfHxcbiAgICAgICAgKGMgPj0gMHgwMzcwICYmIGMgPD0gMHgwMzdEKSB8fFxuICAgICAgICAoYyA+PSAweDAzN0YgJiYgYyA8PSAweDFGRkYpIHx8XG4gICAgICAgIChjID49IDB4MjA3MCAmJiBjIDw9IDB4MjE4RikgfHxcbiAgICAgICAgKGMgPj0gMHgyQzAwICYmIGMgPD0gMHgyRkVGKSB8fFxuICAgICAgICAoYyA+PSAweDMwMDEgJiYgYyA8PSAweEQ3RkYpIHx8XG4gICAgICAgIChjID49IDB4RjkwMCAmJiBjIDw9IDB4RkRDRikgfHxcbiAgICAgICAgKGMgPj0gMHhGREYwICYmIGMgPD0gMHhGRkZEKSB8fFxuICAgICAgICAoYyA+PSAweDEwMDAwICYmIGMgPD0gMHhFRkZGRikpO1xufVxuZXhwb3J0cy5pc05hbWVTdGFydENoYXIgPSBpc05hbWVTdGFydENoYXI7XG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGNvZGVwb2ludCBtYXRjaGVzIHRoZSBgYE5BTUVfQ0hBUmBgIHByb2R1Y3Rpb24uXG4gKlxuICogQHBhcmFtIGMgVGhlIGNvZGUgcG9pbnQuXG4gKlxuICogQHJldHVybnMgYGB0cnVlYGAgaWYgdGhlIGNvZGVwb2ludCBtYXRjaGVzIGBgTkFNRV9DSEFSYGAuXG4gKi9cbmZ1bmN0aW9uIGlzTmFtZUNoYXIoYykge1xuICAgIHJldHVybiBpc05hbWVTdGFydENoYXIoYykgfHxcbiAgICAgICAgKGMgPj0gMHgzMCAmJiBjIDw9IDB4MzkpIHx8XG4gICAgICAgIGMgPT09IDB4MkQgfHxcbiAgICAgICAgYyA9PT0gMHgyRSB8fFxuICAgICAgICBjID09PSAweEI3IHx8XG4gICAgICAgIChjID49IDB4MDMwMCAmJiBjIDw9IDB4MDM2RikgfHxcbiAgICAgICAgKGMgPj0gMHgyMDNGICYmIGMgPD0gMHgyMDQwKTtcbn1cbmV4cG9ydHMuaXNOYW1lQ2hhciA9IGlzTmFtZUNoYXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lZDIuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiQ0hBUiIsIlJFU1RSSUNURURfQ0hBUiIsIlMiLCJOQU1FX1NUQVJUX0NIQVIiLCJOQU1FX0NIQVIiLCJDSEFSX1JFIiwiUmVnRXhwIiwiUkVTVFJJQ1RFRF9DSEFSX1JFIiwiU19SRSIsIk5BTUVfU1RBUlRfQ0hBUl9SRSIsIk5BTUVfQ0hBUl9SRSIsIk5BTUVfUkUiLCJOTVRPS0VOX1JFIiwiVEFCIiwiTkwiLCJDUiIsIlNQQUNFIiwiU19MSVNUIiwiaXNDaGFyIiwiYyIsImlzUmVzdHJpY3RlZENoYXIiLCJpc0NoYXJBbmROb3RSZXN0cmljdGVkIiwiaXNTIiwiaXNOYW1lU3RhcnRDaGFyIiwiaXNOYW1lQ2hhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/xmlchars/xml/1.1/ed2.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/xmlchars/xmlns/1.0/ed3.js":
/*!************************************************!*\
  !*** ./node_modules/xmlchars/xmlns/1.0/ed3.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n/**\n * Character class utilities for XML NS 1.0 edition 3.\n *\n * @author Louis-Dominique Dubeau\n * @license MIT\n * @copyright Louis-Dominique Dubeau\n */ Object.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n//\n// Fragments.\n//\n// tslint:disable-next-line:max-line-length\nexports.NC_NAME_START_CHAR = \"A-Z_a-z\\xc0-\\xd6\\xd8-\\xf6\\xf8-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�\\uD800\\uDC00-\\uDB7F\\uDFFF\";\nexports.NC_NAME_CHAR = \"-\" + exports.NC_NAME_START_CHAR + \".0-9\\xb7̀-ͯ‿-⁀\";\n//\n// Regular expressions.\n//\nexports.NC_NAME_START_CHAR_RE = new RegExp(\"^[\" + exports.NC_NAME_START_CHAR + \"]$\", \"u\");\nexports.NC_NAME_CHAR_RE = new RegExp(\"^[\" + exports.NC_NAME_CHAR + \"]$\", \"u\");\nexports.NC_NAME_RE = new RegExp(\"^[\" + exports.NC_NAME_START_CHAR + \"][\" + exports.NC_NAME_CHAR + \"]*$\", \"u\");\n/**\n * Determines whether a codepoint matches [[NC_NAME_START_CHAR]].\n *\n * @param c The code point.\n *\n * @returns ``true`` if the codepoint matches.\n */ // tslint:disable-next-line:cyclomatic-complexity\nfunction isNCNameStartChar(c) {\n    return c >= 0x41 && c <= 0x5A || c === 0x5F || c >= 0x61 && c <= 0x7A || c >= 0xC0 && c <= 0xD6 || c >= 0xD8 && c <= 0xF6 || c >= 0x00F8 && c <= 0x02FF || c >= 0x0370 && c <= 0x037D || c >= 0x037F && c <= 0x1FFF || c >= 0x200C && c <= 0x200D || c >= 0x2070 && c <= 0x218F || c >= 0x2C00 && c <= 0x2FEF || c >= 0x3001 && c <= 0xD7FF || c >= 0xF900 && c <= 0xFDCF || c >= 0xFDF0 && c <= 0xFFFD || c >= 0x10000 && c <= 0xEFFFF;\n}\nexports.isNCNameStartChar = isNCNameStartChar;\n/**\n * Determines whether a codepoint matches [[NC_NAME_CHAR]].\n *\n * @param c The code point.\n *\n * @returns ``true`` if the codepoint matches.\n */ function isNCNameChar(c) {\n    return isNCNameStartChar(c) || c === 0x2D || c === 0x2E || c >= 0x30 && c <= 0x39 || c === 0x00B7 || c >= 0x0300 && c <= 0x036F || c >= 0x203F && c <= 0x2040;\n}\nexports.isNCNameChar = isNCNameChar; //# sourceMappingURL=ed3.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMveG1sY2hhcnMveG1sbnMvMS4wL2VkMy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiOzs7Ozs7Q0FNQyxHQUNEQSw4Q0FBNkM7SUFBRUcsT0FBTztBQUFLLENBQUMsRUFBQztBQUM3RCxFQUFFO0FBQ0YsYUFBYTtBQUNiLEVBQUU7QUFDRiwyQ0FBMkM7QUFDM0NELDBCQUEwQixHQUFHO0FBQzdCQSxvQkFBb0IsR0FBRyxNQUFNQSxRQUFRRSxrQkFBa0IsR0FBRztBQUMxRCxFQUFFO0FBQ0YsdUJBQXVCO0FBQ3ZCLEVBQUU7QUFDRkYsNkJBQTZCLEdBQUcsSUFBSUssT0FBTyxPQUFPTCxRQUFRRSxrQkFBa0IsR0FBRyxNQUFNO0FBQ3JGRix1QkFBdUIsR0FBRyxJQUFJSyxPQUFPLE9BQU9MLFFBQVFHLFlBQVksR0FBRyxNQUFNO0FBQ3pFSCxrQkFBa0IsR0FBRyxJQUFJSyxPQUFPLE9BQU9MLFFBQVFFLGtCQUFrQixHQUFHLE9BQU9GLFFBQVFHLFlBQVksR0FBRyxPQUFPO0FBQ3pHOzs7Ozs7Q0FNQyxHQUNELGlEQUFpRDtBQUNqRCxTQUFTSyxrQkFBa0JDLENBQUM7SUFDeEIsT0FBUSxLQUFNLFFBQVFBLEtBQUssUUFDdkJBLE1BQU0sUUFDTEEsS0FBSyxRQUFRQSxLQUFLLFFBQ2xCQSxLQUFLLFFBQVFBLEtBQUssUUFDbEJBLEtBQUssUUFBUUEsS0FBSyxRQUNsQkEsS0FBSyxVQUFVQSxLQUFLLFVBQ3BCQSxLQUFLLFVBQVVBLEtBQUssVUFDcEJBLEtBQUssVUFBVUEsS0FBSyxVQUNwQkEsS0FBSyxVQUFVQSxLQUFLLFVBQ3BCQSxLQUFLLFVBQVVBLEtBQUssVUFDcEJBLEtBQUssVUFBVUEsS0FBSyxVQUNwQkEsS0FBSyxVQUFVQSxLQUFLLFVBQ3BCQSxLQUFLLFVBQVVBLEtBQUssVUFDcEJBLEtBQUssVUFBVUEsS0FBSyxVQUNwQkEsS0FBSyxXQUFXQSxLQUFLO0FBQzlCO0FBQ0FULHlCQUF5QixHQUFHUTtBQUM1Qjs7Ozs7O0NBTUMsR0FDRCxTQUFTRSxhQUFhRCxDQUFDO0lBQ25CLE9BQU9ELGtCQUFrQkMsTUFDcEJBLE1BQU0sUUFDSEEsTUFBTSxRQUNMQSxLQUFLLFFBQVFBLEtBQUssUUFDbkJBLE1BQU0sVUFDTEEsS0FBSyxVQUFVQSxLQUFLLFVBQ3BCQSxLQUFLLFVBQVVBLEtBQUs7QUFDakM7QUFDQVQsb0JBQW9CLEdBQUdVLGNBQ3ZCLCtCQUErQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RpZ21hLy4vbm9kZV9tb2R1bGVzL3htbGNoYXJzL3htbG5zLzEuMC9lZDMuanM/YTU1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ2hhcmFjdGVyIGNsYXNzIHV0aWxpdGllcyBmb3IgWE1MIE5TIDEuMCBlZGl0aW9uIDMuXG4gKlxuICogQGF1dGhvciBMb3Vpcy1Eb21pbmlxdWUgRHViZWF1XG4gKiBAbGljZW5zZSBNSVRcbiAqIEBjb3B5cmlnaHQgTG91aXMtRG9taW5pcXVlIER1YmVhdVxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vL1xuLy8gRnJhZ21lbnRzLlxuLy9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbmV4cG9ydHMuTkNfTkFNRV9TVEFSVF9DSEFSID0gXCJBLVpfYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXFx1RDgwMFxcdURDMDAtXFx1REI3RlxcdURGRkZcIjtcbmV4cG9ydHMuTkNfTkFNRV9DSEFSID0gXCItXCIgKyBleHBvcnRzLk5DX05BTUVfU1RBUlRfQ0hBUiArIFwiLjAtOVxcdTAwQjdcXHUwMzAwLVxcdTAzNkZcXHUyMDNGLVxcdTIwNDBcIjtcbi8vXG4vLyBSZWd1bGFyIGV4cHJlc3Npb25zLlxuLy9cbmV4cG9ydHMuTkNfTkFNRV9TVEFSVF9DSEFSX1JFID0gbmV3IFJlZ0V4cChcIl5bXCIgKyBleHBvcnRzLk5DX05BTUVfU1RBUlRfQ0hBUiArIFwiXSRcIiwgXCJ1XCIpO1xuZXhwb3J0cy5OQ19OQU1FX0NIQVJfUkUgPSBuZXcgUmVnRXhwKFwiXltcIiArIGV4cG9ydHMuTkNfTkFNRV9DSEFSICsgXCJdJFwiLCBcInVcIik7XG5leHBvcnRzLk5DX05BTUVfUkUgPSBuZXcgUmVnRXhwKFwiXltcIiArIGV4cG9ydHMuTkNfTkFNRV9TVEFSVF9DSEFSICsgXCJdW1wiICsgZXhwb3J0cy5OQ19OQU1FX0NIQVIgKyBcIl0qJFwiLCBcInVcIik7XG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGNvZGVwb2ludCBtYXRjaGVzIFtbTkNfTkFNRV9TVEFSVF9DSEFSXV0uXG4gKlxuICogQHBhcmFtIGMgVGhlIGNvZGUgcG9pbnQuXG4gKlxuICogQHJldHVybnMgYGB0cnVlYGAgaWYgdGhlIGNvZGVwb2ludCBtYXRjaGVzLlxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y3ljbG9tYXRpYy1jb21wbGV4aXR5XG5mdW5jdGlvbiBpc05DTmFtZVN0YXJ0Q2hhcihjKSB7XG4gICAgcmV0dXJuICgoYyA+PSAweDQxICYmIGMgPD0gMHg1QSkgfHxcbiAgICAgICAgYyA9PT0gMHg1RiB8fFxuICAgICAgICAoYyA+PSAweDYxICYmIGMgPD0gMHg3QSkgfHxcbiAgICAgICAgKGMgPj0gMHhDMCAmJiBjIDw9IDB4RDYpIHx8XG4gICAgICAgIChjID49IDB4RDggJiYgYyA8PSAweEY2KSB8fFxuICAgICAgICAoYyA+PSAweDAwRjggJiYgYyA8PSAweDAyRkYpIHx8XG4gICAgICAgIChjID49IDB4MDM3MCAmJiBjIDw9IDB4MDM3RCkgfHxcbiAgICAgICAgKGMgPj0gMHgwMzdGICYmIGMgPD0gMHgxRkZGKSB8fFxuICAgICAgICAoYyA+PSAweDIwMEMgJiYgYyA8PSAweDIwMEQpIHx8XG4gICAgICAgIChjID49IDB4MjA3MCAmJiBjIDw9IDB4MjE4RikgfHxcbiAgICAgICAgKGMgPj0gMHgyQzAwICYmIGMgPD0gMHgyRkVGKSB8fFxuICAgICAgICAoYyA+PSAweDMwMDEgJiYgYyA8PSAweEQ3RkYpIHx8XG4gICAgICAgIChjID49IDB4RjkwMCAmJiBjIDw9IDB4RkRDRikgfHxcbiAgICAgICAgKGMgPj0gMHhGREYwICYmIGMgPD0gMHhGRkZEKSB8fFxuICAgICAgICAoYyA+PSAweDEwMDAwICYmIGMgPD0gMHhFRkZGRikpO1xufVxuZXhwb3J0cy5pc05DTmFtZVN0YXJ0Q2hhciA9IGlzTkNOYW1lU3RhcnRDaGFyO1xuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBjb2RlcG9pbnQgbWF0Y2hlcyBbW05DX05BTUVfQ0hBUl1dLlxuICpcbiAqIEBwYXJhbSBjIFRoZSBjb2RlIHBvaW50LlxuICpcbiAqIEByZXR1cm5zIGBgdHJ1ZWBgIGlmIHRoZSBjb2RlcG9pbnQgbWF0Y2hlcy5cbiAqL1xuZnVuY3Rpb24gaXNOQ05hbWVDaGFyKGMpIHtcbiAgICByZXR1cm4gaXNOQ05hbWVTdGFydENoYXIoYykgfHxcbiAgICAgICAgKGMgPT09IDB4MkQgfHxcbiAgICAgICAgICAgIGMgPT09IDB4MkUgfHxcbiAgICAgICAgICAgIChjID49IDB4MzAgJiYgYyA8PSAweDM5KSB8fFxuICAgICAgICAgICAgYyA9PT0gMHgwMEI3IHx8XG4gICAgICAgICAgICAoYyA+PSAweDAzMDAgJiYgYyA8PSAweDAzNkYpIHx8XG4gICAgICAgICAgICAoYyA+PSAweDIwM0YgJiYgYyA8PSAweDIwNDApKTtcbn1cbmV4cG9ydHMuaXNOQ05hbWVDaGFyID0gaXNOQ05hbWVDaGFyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZWQzLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIk5DX05BTUVfU1RBUlRfQ0hBUiIsIk5DX05BTUVfQ0hBUiIsIk5DX05BTUVfU1RBUlRfQ0hBUl9SRSIsIlJlZ0V4cCIsIk5DX05BTUVfQ0hBUl9SRSIsIk5DX05BTUVfUkUiLCJpc05DTmFtZVN0YXJ0Q2hhciIsImMiLCJpc05DTmFtZUNoYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/xmlchars/xmlns/1.0/ed3.js\n");

/***/ })

};
;