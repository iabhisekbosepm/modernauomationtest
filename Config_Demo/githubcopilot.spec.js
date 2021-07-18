//kera dense layer via tensorflow js api
//https://www.tensorflow.org/api_docs/python/tf/keras/layers/Dense

import {expect} from 'chai';
import {describe, it} from 'mocha';

import {KerasJS} from "../../src/index";

describe('Test keras layer Dense', () => {
   it('Dense layer exist', () => {
       const model = new KerasJS.Model();
       model.add(new KerasJS.layers.Dense({units: 2}));
       model.setInputTensor(KerasJS.Tensor.from([[1.0, 2.0], [3.0, 4.0]]));
       model.setOptimizer(new KerasJS.optimizers.SGD(0.1));
       model.compile({
           loss: 'mean_squared_error',
           optimizer: {
               type: 'sgd',
               learningRate: 0.1
           }
       });
       model.train();
   });
});

//opencv with tensorflow.js
