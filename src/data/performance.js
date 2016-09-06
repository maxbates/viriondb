/*
 Copyright 2016 Autodesk,Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

export const reset = () => {
  if (process.env.NODE_ENV !== 'production') {
    if (window.performance && window.performance.now) {
      window.performance.clearMarks();
    }
  }
};

export const mark = (...args) => {
  if (process.env.NODE_ENV !== 'production') {
    if (window.performance && window.performance.now) {
      window.performance.mark(...args);
    }
  }
};

export const dump = () => {
  if (process.env.NODE_ENV !== 'production') {
    if (window.performance && window.performance.now) {
      const marks = performance.getEntriesByType('mark');
      const start = marks[0].startTime;
      marks.forEach((mark) => {
        console.log(mark.name, mark.startTime - start);
      });
    }
  }
};