"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/performance-now";
exports.ids = ["vendor-chunks/performance-now"];
exports.modules = {

/***/ "(ssr)/./node_modules/performance-now/lib/performance-now.js":
/*!*************************************************************!*\
  !*** ./node_modules/performance-now/lib/performance-now.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\n// Generated by CoffeeScript 1.12.2\n(function() {\n    var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;\n    if (typeof performance !== \"undefined\" && performance !== null && performance.now) {\n        module.exports = function() {\n            return performance.now();\n        };\n    } else if (typeof process !== \"undefined\" && process !== null && process.hrtime) {\n        module.exports = function() {\n            return (getNanoSeconds() - nodeLoadTime) / 1e6;\n        };\n        hrtime = process.hrtime;\n        getNanoSeconds = function() {\n            var hr;\n            hr = hrtime();\n            return hr[0] * 1e9 + hr[1];\n        };\n        moduleLoadTime = getNanoSeconds();\n        upTime = process.uptime() * 1e9;\n        nodeLoadTime = moduleLoadTime - upTime;\n    } else if (Date.now) {\n        module.exports = function() {\n            return Date.now() - loadTime;\n        };\n        loadTime = Date.now();\n    } else {\n        module.exports = function() {\n            return new Date().getTime() - loadTime;\n        };\n        loadTime = new Date().getTime();\n    }\n}).call(void 0); //# sourceMappingURL=performance-now.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanMiLCJtYXBwaW5ncyI6IjtBQUFBLG1DQUFtQztBQUNsQztJQUNDLElBQUlBLGdCQUFnQkMsUUFBUUMsVUFBVUMsZ0JBQWdCQyxjQUFjQztJQUVwRSxJQUFJLE9BQVFDLGdCQUFnQixlQUFlQSxnQkFBZ0IsUUFBU0EsWUFBWUMsR0FBRyxFQUFFO1FBQ25GQyxPQUFPQyxPQUFPLEdBQUc7WUFDZixPQUFPSCxZQUFZQyxHQUFHO1FBQ3hCO0lBQ0YsT0FBTyxJQUFJLE9BQVFHLFlBQVksZUFBZUEsWUFBWSxRQUFTQSxRQUFRVCxNQUFNLEVBQUU7UUFDakZPLE9BQU9DLE9BQU8sR0FBRztZQUNmLE9BQU8sQ0FBQ1QsbUJBQW1CSSxZQUFXLElBQUs7UUFDN0M7UUFDQUgsU0FBU1MsUUFBUVQsTUFBTTtRQUN2QkQsaUJBQWlCO1lBQ2YsSUFBSVc7WUFDSkEsS0FBS1Y7WUFDTCxPQUFPVSxFQUFFLENBQUMsRUFBRSxHQUFHLE1BQU1BLEVBQUUsQ0FBQyxFQUFFO1FBQzVCO1FBQ0FSLGlCQUFpQkg7UUFDakJLLFNBQVNLLFFBQVFFLE1BQU0sS0FBSztRQUM1QlIsZUFBZUQsaUJBQWlCRTtJQUNsQyxPQUFPLElBQUlRLEtBQUtOLEdBQUcsRUFBRTtRQUNuQkMsT0FBT0MsT0FBTyxHQUFHO1lBQ2YsT0FBT0ksS0FBS04sR0FBRyxLQUFLTDtRQUN0QjtRQUNBQSxXQUFXVyxLQUFLTixHQUFHO0lBQ3JCLE9BQU87UUFDTEMsT0FBT0MsT0FBTyxHQUFHO1lBQ2YsT0FBTyxJQUFJSSxPQUFPQyxPQUFPLEtBQUtaO1FBQ2hDO1FBQ0FBLFdBQVcsSUFBSVcsT0FBT0MsT0FBTztJQUMvQjtBQUVGLEdBQUdDLElBQUksQ0FBQyxTQUVSLDJDQUEyQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpZ21hLy4vbm9kZV9tb2R1bGVzL3BlcmZvcm1hbmNlLW5vdy9saWIvcGVyZm9ybWFuY2Utbm93LmpzPzJkOTMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjJcbihmdW5jdGlvbigpIHtcbiAgdmFyIGdldE5hbm9TZWNvbmRzLCBocnRpbWUsIGxvYWRUaW1lLCBtb2R1bGVMb2FkVGltZSwgbm9kZUxvYWRUaW1lLCB1cFRpbWU7XG5cbiAgaWYgKCh0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcGVyZm9ybWFuY2UgIT09IG51bGwpICYmIHBlcmZvcm1hbmNlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmICgodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2VzcyAhPT0gbnVsbCkgJiYgcHJvY2Vzcy5ocnRpbWUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChnZXROYW5vU2Vjb25kcygpIC0gbm9kZUxvYWRUaW1lKSAvIDFlNjtcbiAgICB9O1xuICAgIGhydGltZSA9IHByb2Nlc3MuaHJ0aW1lO1xuICAgIGdldE5hbm9TZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHI7XG4gICAgICBociA9IGhydGltZSgpO1xuICAgICAgcmV0dXJuIGhyWzBdICogMWU5ICsgaHJbMV07XG4gICAgfTtcbiAgICBtb2R1bGVMb2FkVGltZSA9IGdldE5hbm9TZWNvbmRzKCk7XG4gICAgdXBUaW1lID0gcHJvY2Vzcy51cHRpbWUoKSAqIDFlOTtcbiAgICBub2RlTG9hZFRpbWUgPSBtb2R1bGVMb2FkVGltZSAtIHVwVGltZTtcbiAgfSBlbHNlIGlmIChEYXRlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBEYXRlLm5vdygpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGVyZm9ybWFuY2Utbm93LmpzLm1hcFxuIl0sIm5hbWVzIjpbImdldE5hbm9TZWNvbmRzIiwiaHJ0aW1lIiwibG9hZFRpbWUiLCJtb2R1bGVMb2FkVGltZSIsIm5vZGVMb2FkVGltZSIsInVwVGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwibW9kdWxlIiwiZXhwb3J0cyIsInByb2Nlc3MiLCJociIsInVwdGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/performance-now/lib/performance-now.js\n");

/***/ })

};
;